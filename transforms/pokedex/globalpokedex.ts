/// <reference path="dexentry.ts" />
module TPP.Transforms.Pokedex {

    export enum DexSorting {
        "Pokédex Number",
        "Alphabetical",
        "First Owned"
    }

    export class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(collectionSummary: CollectionSummary, PokeList: string[]) {
            super();
            this.Entries = PokeList.map((p, i) => new DexEntry(p, i, collectionSummary)).filter(e => !!e.Pokemon);
        }
        public SortDex(sortBy: DexSorting | string = 0) {
            switch (sortBy) {
                case 0:
                case DexSorting[0]:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Number - e2.Number);
                    break;

                case 1:
                case DexSorting[1]:
                    this.Entries = this.Entries.sort((e1, e2) => e1.Pokemon.localeCompare(e2.Pokemon));
                    break;

                case 2:
                case DexSorting[2]:
                    this.Entries = this.Entries.sort((e1, e2) => (e1.FirstCaughtDate || Date.now()) - (e2.FirstCaughtDate || Date.now()));
                    break;
            }
        }
    }

}