/// <reference path="twitch-videos.ts" />
module TPP {
    export interface Run {
        HostImage?: string;
        HostImageSource?: string;
        HostName?: string;
        RunName: string;
        StartDate?: string;
        StartTime?: number;
        Duration: string;
        Ongoing?: boolean;
        EndDate?: string;
        ColorPrimary: string;
        ColorSecondary: string;
        BackgroundImage?: string;
        Region?: string;
        AdditionalRegions?: {
            Name: string,
            Time: string,
        }[];
        DexTotal?: number;
        Scraper?: {
            url: string;
            parts?: string[];
            runtime?: boolean;
            hostname?: boolean;
            pokemon?: boolean;
        };
        BaseGame?: string;
        Class?: string;
        ContainsRunsFrom?: string[];
        Unfinished?: boolean;
        Revisit?: {
            Collection: string;
            Run: string;
        },
        Events: Event[];
        CopyEvents?: string[];
        Videos?: Twitch.Video[];
        GoogleDocLink?: string;
        TPPOrgLink?: string;
    }

    export interface Event {
        Group: string;
        Image?: string;
        ImageSource?: string;
        Class?: string;
        Name: string;
        Estimate?: boolean;
        Time: string;
        Attempts?: number;
        New?: boolean;
    }

    export interface Collection {
        Name: string;
        SingularName?: string;
        Scale: Scale;
        Runs: Run[];
        Offset?: number;
    }

    export enum Scale {
        Weeks,
        Days,
        Hours,
        Minutes
    }

    export module Org {
        export module V1 {
            export interface General {
                status: string;
                data: {
                    last_update: string;
                    last_update_unix: number;
                }[];
            }
            export interface Badges {
                status: string;
                data: {
                    name: string;
                    leader: string;
                    attempts: number;
                    time: string;
                    time_unix: number;
                    region: string;
                }[];
            }
            export interface PokemonTimeline {
                status: string;
                data: {
                    pokemon: string;
                    name: string;
                    time: string;
                    time_unix: number;
                    nickname: string[];
                    status: string;
                }[];
            }
            export interface EliteFour {
                status: string;
                data: {
                    name: string;
                    type: string;
                    attempts: number;
                    wins: number;
                    losses: number;
                    time: string;
                    time_unix: number;
                    is_rematch: boolean;
                }[];
            }
        }
    }
}

class Duration {
    private static parseReg = /^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i;

    get TotalSeconds() {
        return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
    }
    set TotalSeconds(value) {
        this.seconds = Math.floor(value % 60);
        this.minutes = Math.floor(value / 60) % 60;
        this.hours = Math.floor(value / 60 / 60) % 24;
        this.days = Math.floor(value / 60 / 60 / 24);
    }

    get TotalHours() {
        return this.TotalSeconds / 60 / 60;
    }
    get TotalDays() {
        return this.TotalHours / 24;
    }
    get TotalWeeks() {
        return this.TotalDays / 7;
    }

    TotalTime(scale: TPP.Scale) {
        switch (scale) {
            case TPP.Scale.Weeks:
                return this.TotalWeeks;
            case TPP.Scale.Hours:
                return this.TotalHours / 4;
            case TPP.Scale.Minutes:
                return this.TotalHours * 6;
        }
        return this.TotalDays;
    }

    toString(scale = TPP.Scale.Days) {
        return (scale == TPP.Scale.Minutes ? (this.days * 24 + this.hours) * 60 + this.minutes : (scale == TPP.Scale.Hours ? this.days * 24 + this.hours : (scale == TPP.Scale.Weeks ? Math.floor(this.days / 7) + "w " + (this.days % 7) : this.days) + "d " + this.hours) + "h " + this.minutes) + "m" + (this.seconds ? " " + this.seconds + "s" : "");
    }

    static parse(time: string, baseTime?: number) {
        var retval = new Duration(0, 0, 0, 0);
        if (time) {
            if (this.canParse(time)) {
                try {
                    var matches = this.parseReg.exec(time);
                    return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0, parseInt(matches[5]) || 0);
                }
                catch (e) { }
            }
            if (baseTime) {
                retval.TotalSeconds = (Date.parse(time) / 1000) - baseTime;
            }
        }
        return retval;
    }

    static canParse(time: string) {
        return this.parseReg.test(time);
    }

    constructor(weeks: string | number, public days = 0, public hours = 0, public minutes = 0, public seconds = 0) {
        if (typeof (weeks) === "string") {
            var parsed = Duration.parse(<string>weeks);
            this.days = parsed.days;
            this.hours = parsed.hours;
            this.minutes = parsed.minutes;
            this.seconds = parsed.seconds;
        }
        else this.days += <number>weeks * 7;
    }
}

var QueryString = (() => {
    var retobj: { [key: string]: string } = {}
    window.location.search.substring(1).split("&").forEach(vars => {
        var pair = vars.split("=");
        retobj[pair.shift()] = decodeURI(pair.join('='));
    });
    return retobj;
})();