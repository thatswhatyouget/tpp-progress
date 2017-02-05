/// <reference path="collection.ts" />
module TPP.Pokedex {

    export interface HofEntry {
        Pokemon: string;
        Ribbon: string;
        RunName: string;
        HostName: string;
        Nickname: string;
        UnmodifiedNick: string;
        PreviousNick: string;
        Time: number;
    }

    export class RunSummaryBase {
        public OwnedDict: { [key: string]: false | number } = {};
        public HallOfFame: TPP.Pokedex.HofEntry[] = [];
        public Run: Run;
    }

    export class CollectionSummaryBase {
        Summary: RunSummaryBase[] = [];
        HallOfFame: HofEntry[] = [];
    }

    export class DexEntryBase {
        Number: number;
        Pokemon: string;
        Owners: {
            Run: Run;
            CaughtOn: number;
        }[] = [];
        HallOfFame: HofEntry[] = [];
        get IsOwned() {
            return this.Owners && this.Owners.length > 0;
        }
        get FirstOwnedRun() {
            return this.IsOwned ? this.Owners[0].Run : <Run>{};
        }
        get FirstCaughtDate() {
            return this.IsOwned ? this.Owners[0].CaughtOn : false;
        }
    }

    export class GlobalDexBase {
        Entries: DexEntryBase[] = [];

        private get NoGlitchMon() {
            return this.Entries.filter(e => !(e.Number == 0 && e.Pokemon == "MissingNo."));
        }

        public get TotalOwned() {
            return this.NoGlitchMon.filter(e => e.IsOwned).length;
        }

        public get TotalInDex() {
            return this.NoGlitchMon.length;
        }

        public get OwnedPercentage() {
            return (this.TotalOwned / this.TotalInDex) * 100;
        }
    }

}