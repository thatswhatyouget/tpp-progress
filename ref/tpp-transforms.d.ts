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
declare namespace TPP.Transforms.Data.Traversal {
    function EventLevel(eventFunc: (e: Event, r?: Run, c?: Collection) => Event | boolean, filter?: boolean): {
        (tppData: Event, collection?: Collection, run?: Run): Event;
        (tppData: Event[], collection?: Collection, run?: Run): Event[];
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
    function RunLevel(runFunc: (r: Run, c?: Collection) => Run | boolean, filter?: boolean): {
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
    function CollectionLevel(collectionFunc: (c: Collection) => Collection | boolean, filter?: boolean): {
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
    function MultiLevel(collectionFunc: (c: Collection) => Collection, runFunc?: (r: Run, c?: Collection) => Run, eventFunc?: (e: Event, r?: Run, c?: Collection) => Event): {
        (tppData: Event, collection?: Collection, run?: Run): Event;
        (tppData: Event[], collection?: Collection, run?: Run): Event[];
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Transforms.Data {
    var Clone: {
        (tppData: Event, collection?: Collection, run?: Run): Event;
        (tppData: Event[], collection?: Collection, run?: Run): Event[];
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Transforms.Data.Filter {
    var RemoveFutureRuns: {
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Transforms.Data.Filter {
    var NoWifiTradePokemon: {
        (tppData: Event, collection?: Collection, run?: Run): Event;
        (tppData: Event[], collection?: Collection, run?: Run): Event[];
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Transforms.Data.Filter {
    var RemoveEmpty: {
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Transforms.Data.Filter {
    function HasOnlyOneRun(tppData: Collection[] | Collection | Run[]): boolean;
    function GetOnlyRun(tppData: Collection[] | Collection | Run[]): Run;
}
declare namespace TPP.Transforms.Data.Filter {
    function CollectionSearch(tppData: Collection[], search: string | string[]): Collection[];
    function RunSearch(tppData: Collection[], search: string | string[]): Collection[];
    function Search(tppData: Collection[], search: string | string[]): Collection[];
}
declare namespace TPP.Transforms.Data.Processing {
    function CatchReport(tppData: Run, day?: number, collection?: Collection): Run;
    function CatchReport(tppData: Run[], day?: number, collection?: Collection): Run[];
    function CatchReport(tppData: Collection, day?: number): Collection;
    function CatchReport(tppData: Collection[], day?: number): Collection[];
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
declare namespace TPP.Transforms.Data.Processing {
    var MarkOngoingRuns: {
        (tppData: Run, collection?: Collection): Run;
        (tppData: Run[], collection?: Collection): Run[];
        (tppData: Collection): Collection;
        (tppData: Collection[]): Collection[];
    };
}
declare namespace TPP.Pokedex {
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
        private displayName;
        get DisplayName(): string;
        set DisplayName(value: string);
        Owners: {
            Run: Run;
            CaughtOn: number;
        }[];
        HallOfFame: HofEntry[];
        get IsOwned(): boolean;
        get FirstOwnedRun(): Run;
        get FirstCaughtDate(): number | false;
        Clone(clone?: DexEntryBase): DexEntryBase;
    }
    enum DexSorting {
        "Pokédex Number" = 0,
        "Alphabetical" = 1,
        "First Owned" = 2
    }
    class GlobalDexBase {
        Entries: DexEntryBase[];
        private get NoGlitchMon();
        get TotalOwned(): number;
        get TotalInDex(): number;
        get OwnedPercentage(): number;
        TotalOwnedBy(run: Run): number;
        get Owned(): DexEntryBase[];
        get Unowned(): DexEntryBase[];
        private isGlitchMon;
        SortDex(sortBy?: DexSorting | string): void;
        FilterGlitchMon(): void;
        FilterUnownedGlitchMon(): void;
        FilterOwnedInDexToRuns(runList: (string | Run)[] | string): void;
        FilterDexToOwned(): void;
        FilterDexToUnowned(): void;
        FilterDexPokemon(pokeList: string | string[]): void;
        FilterDexToHallOfFame(): void;
        Clone(clone?: GlobalDexBase): GlobalDexBase;
    }
}
declare namespace TPP.Transforms.Pokedex {
    class RunSummary extends TPP.Pokedex.RunSummaryBase {
        constructor(Run: TPP.Run, PokeList: string[]);
        private FillOwnedDict;
        private AddOwnedPokemonIfRecognized;
        private InitOwnedDict;
        private FillHallOfFame;
    }
}
declare namespace TPP.Transforms.Pokedex {
    class CollectionSummary extends TPP.Pokedex.CollectionSummaryBase {
        constructor(tppData: Collection[], PokeList: string[]);
        private FilterHoFToUniques;
    }
}
declare namespace TPP.Transforms.Pokedex {
    class DexEntry extends TPP.Pokedex.DexEntryBase {
        constructor(pokemon: string, number: number, collectionSummary: CollectionSummary, isFakeForm?: boolean);
        private GatherPokemonFromRuns;
        private FilterRevisitsIfPreviouslyOwned;
        private GatherHallOfFameEntries;
    }
}
declare namespace TPP.Transforms.Pokedex {
    function DexMerge(Regional: (number | string)[], National?: string[]): string[];
    function ClipNationalDex(highestDexNumber: number, National?: string[]): string[];
}
declare namespace TPP.Transforms.Pokedex {
    class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(tppData: Collection[], PokeList: string[]);
        constructor(tppData: CollectionSummary, PokeList: string[]);
    }
}
