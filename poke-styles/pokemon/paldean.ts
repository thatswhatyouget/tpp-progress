//make sure paldean overrides come after normal dex
/// <reference path="natdex.ts" />

var paldean = ["Tauros", "Wooper"];

addStyles(paldean, (p, i) => ".paldea .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");
addStyles(paldean, (p, i) => ".paldean .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.paldean." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(paldean, (p, i) => ".paldean .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.paldean.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-paldea-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");