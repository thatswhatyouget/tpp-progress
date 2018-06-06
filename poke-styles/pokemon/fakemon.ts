/// <reference path="../write-style.ts" />

var fakemon = [
    "Unidentified",
    "Prizmeon", "Phancero", "Raiwato", "Varaneous", "Fambaco", "Libabeel", //Prism
    "Pikachu-B", "Kyurem-B", "Kyurem-W", "Mew-B", "M-Venusaur", "M-Charizard X", "M-Blastoise", "M-Lucario", "M-Charizard Y", "M-Salamence", "M-Absol", "M-Manectric", //Glazed
    "Def-Eevee", "Rotom-C", "Rotom-F", "Rotom-H", "Rotom-S", "Rotom-W", "Off-Eevee", //Blazed Glazed
    "Pumbloom", //Bronze
];

addStyles(fakemon, f => {
    var clean = dexClean(f);
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/' + clean + '.png")!important; }';
});

addSingleStyle(fakemon.map(f => ".event.pokemon.pokesprite." + dexClean(f) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

//Phancero hover effect
addSingleStyle('.pokesprite.phancero:hover img  { background-image:url("../img/fakemon/phancero-hover.png")!important; }');
