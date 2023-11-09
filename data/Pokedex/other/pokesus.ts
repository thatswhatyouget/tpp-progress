/// <reference path="../regional.ts" />
module Pokedex {
    var dexName = "Amogus";

    Regional[dexName] = Regional["National"].filter(i => i <= GenSlice[3]);

    specialClasses[dexName] = "pokesus";
}