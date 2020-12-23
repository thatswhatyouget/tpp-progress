/// <reference path="dexentry.ts" />
namespace TPP.Transforms.Pokedex {

    export class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(tppData: Collection[], PokeList: string[])
        constructor(tppData: CollectionSummary, PokeList: string[])
        constructor(tppData: any, PokeList: string[]) {
            super();
            if (!(tppData instanceof CollectionSummary))
                tppData = new CollectionSummary(tppData, PokeList);
            this.Entries = PokeList.map((p, i, arr) => new DexEntry(p, i, tppData, arr.findIndex(e => e == p) != i)).filter(e => !!e.Pokemon);
        }
    }

}