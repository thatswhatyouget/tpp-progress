/// <reference path="../ref/jquery.d.ts" />
/// <reference path="tpp-scraper.d.ts" />
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
declare module TPP.Transforms.Data.Filter {
    function RemoveFutureRunsFromRuns(tppData: Run[]): Run[];
    function RemoveFutureRunsFromCollection(tppData: Collection): Collection;
    function RemoveFutureRuns(tppData: Collection[]): Collection[];
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
declare module TPP.Pokedex {
    interface HofEntry {
        Pokemon: string;
        Ribbon: string;
        RunName: string;
        HostName: string;
        Nickname: string;
        UnmodifiedNick: string;
        PreviousNick: string;
        Time: number;
    }
    class RunSummaryBase {
        OwnedDict: {
            [key: string]: false | number;
        };
        HallOfFame: TPP.Pokedex.HofEntry[];
        Run: Run;
    }
    class CollectionSummaryBase {
        Summary: RunSummaryBase[];
        HallOfFame: HofEntry[];
    }
    class DexEntryBase {
        Number: number;
        Pokemon: string;
        Owners: {
            Run: Run;
            CaughtOn: number;
        }[];
        HallOfFame: HofEntry[];
        readonly IsOwned: boolean;
        readonly FirstOwnedRun: Run;
        readonly FirstCaughtDate: number | boolean;
    }
    enum DexSorting {
        "Pokédex Number" = 0,
        "Alphabetical" = 1,
        "First Owned" = 2,
    }
    class GlobalDexBase {
        Entries: DexEntryBase[];
        private readonly NoGlitchMon;
        readonly TotalOwned: number;
        readonly TotalInDex: number;
        readonly OwnedPercentage: number;
        TotalOwnedBy(run: Run): number;
        SortDex(sortBy?: DexSorting | string): void;
        FilterDexToOwned(): void;
        FilterDexToUnowned(): void;
        FilterDexRuns(runList: (string | Run)[]): void;
        FilterDexPokemon(pokeList: string[]): void;
        FilterDexToHallOfFame(): void;
    }
}
declare module TPP.Transforms.Pokedex {
    class RunSummary extends TPP.Pokedex.RunSummaryBase {
        constructor(Run: TPP.Run, PokeList: string[]);
        private FillOwnedDict(PokeList);
        private AddOwnedPokemonIfRecognized(mon, timestamp, PokeList);
        private InitOwnedDict(PokeList);
        private FillHallOfFame(PokeList);
    }
}
declare module TPP.Transforms.Pokedex {
    class CollectionSummary extends TPP.Pokedex.CollectionSummaryBase {
        constructor(tppData: Collection[], PokeList: string[]);
        private FilterHoFToUniques();
    }
}
declare module TPP.Transforms.Pokedex {
    class DexEntry extends TPP.Pokedex.DexEntryBase {
        constructor(pokemon: string, number: number, collectionSummary: CollectionSummary);
        private GatherPokemonFromRuns(collectionSummary);
        private FilterRevisitsIfPreviouslyOwned();
        private GatherHallOfFameEntries(collectionsummary);
    }
}
declare module TPP.Transforms.Pokedex {
    function DexMerge(Regional: (number | string)[], National?: string[]): string[];
    function ClipNationalDex(highestDexNumber: number, National?: string[]): string[];
}
declare module TPP.Transforms.Pokedex {
    class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(collectionSummary: CollectionSummary, PokeList: string[]);
    }
}
declare module TPP.Transforms {
    function UpdateRunData(run: Run): JQueryPromise<Run>;
    function UpdateCollectionData(collection: Collection): JQueryPromise<Collection>;
    function UpdateData(tppData: Collection[]): JQueryPromise<Collection[]>;
}
