/// <reference path="../ref/jquery.d.ts" />
declare namespace TPP {
    enum Scale {
        Weeks = 0,
        Days = 1,
        Hours = 2,
        Minutes = 3
    }
}
declare namespace TPP {
    interface Event {
        Group: string;
        Image?: string;
        ImageSource?: string;
        Class?: string;
        Name: string;
        OT?: string;
        Estimate?: boolean;
        Time: string;
        UnixTime?: number;
        Attempts?: number;
    }
    type PokemonGender = "Male" | "Female";
    interface HallOfFame extends Event {
        Party: {
            Nickname?: string;
            PreviousNick?: string;
            Pokemon: string;
            Level: number;
            ShowSpecies?: boolean;
            Gender?: PokemonGender;
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
        FirstAttemptDate?: string;
        FirstAttemptUnixTime?: number;
    }
    interface DisplayEvent extends Event {
        New?: boolean;
        Element?: HTMLDivElement;
    }
    interface DisplayHallOfFame extends HallOfFame, DisplayEvent {
    }
}
declare namespace Twitch {
    interface TwitchCall {
        _total: number;
        _links: {
            next: string;
        };
        videos: TwitchVideo[];
    }
    interface TwitchVideo {
        recorded_at: string;
        length: number;
        url: string;
    }
    class Video implements TwitchVideo {
        recorded_at: string;
        length: number;
        url: string;
        source: string;
        StartTime: number;
        EndTime: number;
        constructor(recorded_at: string, length: number, url: string, source: string);
    }
    function GetVideos(channel: string, getAll?: boolean): JQueryPromise<Video[]>;
}
declare namespace TPP {
    interface Run {
        HostImage?: string;
        HostImageSource?: string;
        HostName?: string;
        RunName: string;
        StartDate?: string;
        StartTime?: number;
        Duration: string;
        Ongoing?: boolean;
        Unfinished?: boolean;
        EndDate?: string;
        EndTime?: number;
        ColorPrimary: string;
        ColorSecondary: string;
        BackgroundImage?: string;
        Region?: string;
        AdditionalRegions?: {
            Name: string;
            Time: string;
        }[];
        APIObjectName?: string;
        Generation?: number;
        Pokedex?: string;
        DexTotal?: number;
        DexMapping?: number[];
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
        Revisit?: {
            Collection: string;
            Run: string;
        };
        Events: Event[];
        CopyEvents?: string[];
        DocumentLink?: string;
        LiveUpdaterArchive?: string;
        TPPOrgLink?: string;
        FinalStateLink?: string;
        LastScreenshot?: string;
        SidegameId?: string;
    }
    interface DisplayRun extends Run {
        Videos?: Twitch.Video[];
        Hidden?: boolean;
        Element?: HTMLDivElement;
    }
}
declare namespace TPP {
    interface Collection {
        Name: string;
        SingularName?: string;
        Scale: Scale;
        Runs: Run[];
    }
    interface DisplayCollection extends Collection {
        Offset?: number;
        Element?: HTMLDivElement;
    }
}
declare namespace TPP {
    class Duration {
        private days;
        private hours;
        private minutes;
        private seconds;
        private static parseReg;
        get TotalSeconds(): number;
        get TotalHours(): number;
        get TotalDays(): number;
        get TotalWeeks(): number;
        set TotalSeconds(value: number);
        set TotalHours(value: number);
        set TotalDays(value: number);
        set TotalWeeks(value: number);
        AddDays(days: number): this;
        AddHours(hours: number): this;
        AddMinutes(minutes: number): this;
        AddSeconds(seconds: number): this;
        MultiplyBy(factor: number): this;
        TotalTime(scale: TPP.Scale): number;
        toString(scale?: Scale): string;
        static parse(time: string, baseTime?: number): Duration;
        static canParse(time: string): boolean;
        constructor(weeks: string | number, days?: number, hours?: number, minutes?: number, seconds?: number);
    }
}
declare var Season1: TPP.Collection;
declare var Season2: TPP.Collection;
declare var Season3: TPP.Collection;
declare var Season4: TPP.Collection;
declare var Season5: TPP.Collection;
declare var Season6: TPP.Collection;
declare var Season7: TPP.Collection;
declare var Season8: TPP.Collection;
declare var Season9: TPP.Collection;
declare var Sidegames: TPP.Collection;
declare var QuickSidegames: TPP.Collection;
declare var Revisits: TPP.Collection;
declare var Intermissions: TPP.Collection;
declare var LongIntermissions: TPP.Collection;
declare var ShortIntermissions: TPP.Collection;
declare var tppData: TPP.Collection[];
declare var exports: any;
declare const dualBlue: TPP.Run;
declare const dualRed: TPP.Run;
