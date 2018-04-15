/// <reference path="collection.ts" />
namespace TPP.Pokedex {

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
        private displayName: string;
        get DisplayName() {
            return this.displayName || this.Pokemon;
        }
        set DisplayName(value) {
            this.displayName = value;
        }
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
        Clone(clone = new DexEntryBase()) {
            clone.Number = this.Number;
            clone.Pokemon = this.Pokemon;
            clone.displayName = this.displayName;
            clone.Owners = this.Owners.map(o => ({ Run: o.Run, CaughtOn: o.CaughtOn }));
            clone.HallOfFame = JSON.parse(JSON.stringify(this.HallOfFame));
            return clone;
        }
    }

    export enum DexSorting {
        "Pokédex Number",
        "Alphabetical",
        "First Owned"
    }

    export class GlobalDexBase {
        Entries: DexEntryBase[] = [];
        
        private get NoGlitchMon() {
            return this.Entries.filter(e => !this.isGlitchMon(e));
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

        public TotalOwnedBy(run: Run) {
            return this.NoGlitchMon.filter(e => e.Owners.filter(o => o.Run.RunName == run.RunName).length > 0).length;
        }

        public get Owned() {
            return this.Entries.filter(e => e.IsOwned);
        }

        public get Unowned() {
            return this.Entries.filter(e => !e.IsOwned);
        }
        
        private isGlitchMon = (e: DexEntryBase) => (e.Number == 0 && e.Pokemon == "MissingNo.");

        public SortDex(sortBy: DexSorting | string = 0) {
            switch (sortBy) {
                case 0:
                case DexSorting[0]:
                default:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Number - e2.Number);
                    break;

                case 1:
                case DexSorting[1]:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Pokemon.localeCompare(e2.Pokemon));
                    break;

                case 2:
                case DexSorting[2]:
                    this.Entries = this.Entries.sort((e1, e2) => (e1.FirstCaughtDate || (Date.now() + e1.Number)) - (e2.FirstCaughtDate || (Date.now() + e2.Number)));
                    break;
            }
        }

        public FilterGlitchMon() {
            this.Entries = this.NoGlitchMon;
        }

        public FilterUnownedGlitchMon() {
            this.Entries = this.Entries.filter(e => e.IsOwned || !this.isGlitchMon(e));
        }

        public FilterOwnedInDexToRuns(runList: (string | Run)[] | string) {
            if (!Array.isArray(runList))
                runList = runList.split(',');    
            var runs = runList.map(r => typeof r === "string" ? r.toLowerCase().trim() : r);
            var entryIsOwnedByWantedRun = e => e.Owners.filter(o => runs.filter(r => {
                if (typeof r === "string")
                    return o.Run.RunName.toLowerCase().indexOf(r) >= 0;
                return o.Run.RunName == r.RunName;
            }).length > 0).length > 0;
            this.Entries.forEach(e => e.Owners = entryIsOwnedByWantedRun(e) ? e.Owners : []);
        }        
        
        public FilterDexToOwned() {
            this.Entries = this.Owned;
        }

        public FilterDexToUnowned() {
            this.Entries = this.Unowned;
        }

        public FilterDexPokemon(pokeList: string | string[]) {
            if (!Array.isArray(pokeList))
                pokeList = pokeList.split(',');    
            pokeList = pokeList.map(p => p.toLowerCase().trim());
            this.Entries = this.Entries.filter(e => pokeList.indexOf(e.Pokemon.toLowerCase()) >= 0 || pokeList.indexOf(e.Number.toString()) >= 0);
        }

        public FilterDexToHallOfFame() {
            this.Entries = this.Entries.filter(e => e.HallOfFame.length > 0);
        }
        public Clone(clone = new GlobalDexBase()) {
            clone.Entries = this.Entries.map(e => e.Clone());
            return clone;
        }

    }

}
