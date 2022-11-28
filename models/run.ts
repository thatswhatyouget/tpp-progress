/// <reference path="event.ts" />
/// <reference path="twitch.ts" />
namespace TPP {
    export interface Run {
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
            Name: string,
            Time: string,
        }[];
        APIObjectName?: string;
        Generation?: number;
        Pokedex?: string;
        DexTotal?: number;
        DexMapping?: number[];
        FromNatDex?: boolean;
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
        },
        Events: Event[];
        CopyEvents?: string[];
        DocumentLink?: string;
        LiveUpdaterArchive?: string;
        TPPOrgLink?: string;
        FinalStateLink?: string;
        LastScreenshot?: string;
        SidegameId?: string;
    }

    export interface DisplayRun extends Run {
        Videos?: Twitch.Video[];
        Hidden?: boolean;
        Element?: HTMLDivElement;
    }
}