/// <reference path="dexentry.ts" />
namespace TPP.Transforms.Pokedex {

    export class GlobalDex extends TPP.Pokedex.GlobalDexBase {
        constructor(tppData: Collection[], PokeList: string[], name?: string)
        constructor(tppData: CollectionSummary, PokeList: string[], name?: string)
        constructor(tppData: any, PokeList: string[], name?: string) {
            super();
            this.DexName = name;
            if (!(tppData instanceof CollectionSummary))
                tppData = new CollectionSummary(tppData, PokeList);
            this.Entries = PokeList.map((p, i, arr) => new DexEntry(p, i, tppData, arr.findIndex(e => e == p) != i)).filter(e => !!e.Pokemon);
        }
    }

}