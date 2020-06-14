/// <reference path="../write-style.ts" />
/// <reference path="../../data/pokedex/natdex.ts" />
/// <reference path="../../data/pokedex/regional.ts" />


var fakemon = [
    "Unidentified",
    "Prizmeon", "Phancero", "Raiwato", "Varaneous", "Fambaco", "Libabeel", //Prism
    "Pikachu-B", "Kyurem-B", "Kyurem-W", "Mew-B", "M-Venusaur", "M-Charizard X", "M-Blastoise", "M-Lucario", "M-Charizard Y", "M-Salamence", "M-Absol", "M-Manectric", //Glazed
    "Def-Eevee", "Rotom-C", "Rotom-F", "Rotom-H", "Rotom-S", "Rotom-W", "Off-Eevee", //Blazed Glazed
    "Pumbloom", //Bronze
    "Burmy G", "Wormadam G", "Meloetta F", "ShayminSky", "Burmy S", "Wormadam S", "Aqua Egg", "Shellos 2", "Gastrodon2", "Rotom I", "Rotom F", "Rotom W", "Rotom G", "Rotom H", //Flora Sky
];

addStyles(fakemon, f => {
    var clean = dexClean(f).replace(/ /g, '');
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/' + clean + '.png")!important; }';
});

addSingleStyle(fakemon.map(f => ".event.pokemon.pokesprite." + dexClean(f) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

//Phancero hover effect
addSingleStyle('.pokesprite.phancero:hover img  { background-image:url("../img/fakemon/phancero-hover.png")!important; }');

//MissingNo.
addSingleStyle('.pokesprite.missingno img  { background-image:url("../img/missingno.png")!important; }');

//Sirius
addStyles(Pokedex.Regional["Altair/Sirius (Hoenn)"].map(p => (typeof p === "number" ? Pokedex.PokeList[p] : p)), defaultMapping("sirius"));
