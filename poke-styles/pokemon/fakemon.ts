/// <reference path="../write-style.ts" />

var fakemon = [
    "Unidentified",
    "Prizmeon", "Phancero", "Raiwato", "Varaneous", "Fambaco", "Libabeel", //Prism
    "Def-Eevee", "Off-Eevee", "Pikachu-B", "M-Lucario", "Rotom-C", "Rotom-F", "Rotom-H", "Rotom-S", "Rotom-W", //Glazed
];

addStyles(fakemon, f => {
    var clean = dexClean(f);
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/' + clean + '.png")!important; }';
});

addSingleStyle(fakemon.map(f => ".event.pokemon.pokesprite." + dexClean(f) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

//Phancero hover effect
addSingleStyle('.pokesprite.phancero:hover img  { background-image:url("../img/fakemon/phancero-hover.png")!important; }');