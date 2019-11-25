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
        EliteFourStartTime?: string;
        Scraper?: {
            url: string;
            parts: string[];
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
        LiveUpdaterArchive?: string;
        TPPOrgLink?: string;
        Hidden?: boolean;
        Element?: HTMLDivElement;
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
        Element?: HTMLDivElement;
    }

    export interface Collection {
        Name: string;
        SingularName?: string;
        Scale: Scale;
        Runs: Run[];
        Offset?: number;
        Element?: HTMLDivElement;
    }

    export enum Scale {
        Weeks,
        Days,
        Hours,
        Minutes
    }

    export interface HallOfFame extends Event {
        Party: {
            Nickname?: string;
            PreviousNick?: string;
            Pokemon: string;
            Level: number;
            Gender?: "Male" | "Female";
            Number?: number | string;
            Type1?: string;
            Type2?: string;
            OT?: string;
            Met?: string;
            IDNo?: string;
            Shiny?: boolean;
            Form?: string;
            Class?: string;
        }[];
        IDNo?: string;
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
    get TotalHours() {
        return this.TotalSeconds / 60 / 60;
    }
    get TotalDays() {
        return this.TotalHours / 24;
    }
    get TotalWeeks() {
        return this.TotalDays / 7;
    }

    set TotalSeconds(value) {
        this.seconds = Math.floor(value % 60);
        this.minutes = Math.floor(value / 60) % 60;
        this.hours = Math.floor(value / 60 / 60) % 24;
        this.days = Math.floor(value / 60 / 60 / 24);
    }
    set TotalHours(value) {
        this.TotalSeconds = value * 60 * 60;
    }
    set TotalDays(value) {
        this.TotalHours = value * 24;
    }
    set TotalWeeks(value) {
        this.TotalDays = value * 7;
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

    constructor(weeks: string | number, private days = 0, private hours = 0, private minutes = 0, private seconds = 0) {
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
        if (vars.indexOf("=") > 0) {
            var pair = vars.split("=");
            retobj[pair.shift()] = decodeURI(pair.join('='));
        }
        else
            retobj[vars] = "true";
    });
    return retobj;
})();

function SerializeQueryString() {
    if (Object.keys(QueryString).filter(k => QueryString[k]).length)
        return "?" + Object.keys(QueryString).filter(k => QueryString[k]).map(k => k + (QueryString[k] == "true" ? "" : "=" + encodeURI(QueryString[k]))).join('&');
    return "";
}


module Twitch {
    export interface TwitchVideoResponse {
        data: TwitchVideo[],
        pagination: TwitchPagination;
    }

    export interface TwitchPagination {
        cursor: string;
    }

    export interface TwitchVideo {
        created_at: string;
        duration: string;
        url: string;
    }

    export class Video implements TwitchVideo {
        public StartTime: number;
        public EndTime: number;
        constructor(public created_at: string, public duration: string, public url: string, public source: string) {
            this.StartTime = new Date(created_at).valueOf() / 1000;
            this.EndTime = this.StartTime + new Duration(duration).TotalSeconds;
        }
    }
}