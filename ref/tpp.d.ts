/// <reference path="jquery.d.ts" />
declare module TPP {
    enum Scale {
        Weeks = 0,
        Days = 1,
        Hours = 2,
        Minutes = 3,
    }
}
declare module TPP {
    interface Event {
        Group: string;
        Image?: string;
        ImageSource?: string;
        Class?: string;
        Name: string;
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
declare module Twitch {
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
declare module TPP {
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
        ColorPrimary: string;
        ColorSecondary: string;
        BackgroundImage?: string;
        Region?: string;
        AdditionalRegions?: {
            Name: string;
            Time: string;
        }[];
        DexTotal?: number;
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
        GoogleDocLink?: string;
        LiveUpdaterArchive?: string;
        TPPOrgLink?: string;
    }
    interface DisplayRun extends Run {
        Videos?: Twitch.Video[];
        Hidden?: boolean;
        Element?: HTMLDivElement;
    }
}
declare module TPP {
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
declare module TPP {
    class Duration {
        private days;
        private hours;
        private minutes;
        private seconds;
        private static parseReg;
        TotalSeconds: number;
        TotalHours: number;
        TotalDays: number;
        TotalWeeks: number;
        TotalTime(scale: TPP.Scale): number;
        toString(scale?: Scale): string;
        static parse(time: string, baseTime?: number): Duration;
        static canParse(time: string): boolean;
        constructor(weeks: string | number, days?: number, hours?: number, minutes?: number, seconds?: number);
    }
}
