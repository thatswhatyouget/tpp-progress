/// <reference path="dexentry.ts" />
namespace TPP.Transforms.Pokedex {

    export class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(collectionSummary: CollectionSummary, PokeList: string[]) {
            super();
            this.Entries = PokeList.map((p, i) => new DexEntry(p, i, collectionSummary)).filter(e => !!e.Pokemon);
        }
    }

}