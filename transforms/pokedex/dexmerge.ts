module TPP.Transforms.Pokedex {

    //get National Dex from pokedex-data if it exists
    var natDex: string[] = typeof(window) !== "undefined" ? ((<any>window || {}).Pokedex || {}).PokeList || [] : [];

    export function DexMerge(Regional: (number | string)[], National = natDex) {
        return Regional.map(i => typeof i === "string" ? i : National[i]);
    }

    export function ClipDex(highestDexNumber: number, National = natDex) {
        return National.filter((p, i) => i <= highestDexNumber);
    }
}