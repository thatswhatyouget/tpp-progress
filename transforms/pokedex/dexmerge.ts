namespace TPP.Transforms.Pokedex {

    //get National Dex from pokedex-data if it exists
    var natDex: string[] = typeof(window) !== "undefined" ? ((<any>window || {}).Pokedex || {}).PokeList || [] : [];

    export function DexMerge(Regional: (number | string)[], National = natDex) {
        if (!Regional) return National;
        return Regional.map(i => typeof i === "string" ? i : National[i]);
    }

    export function ClipNationalDex(highestDexNumber: number, National = natDex) {
        return National.slice(0, (highestDexNumber || National.length) + 1);
    }
}