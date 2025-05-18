//make sure galarian overrides come after normal dex
/// <reference path="natdex.ts" />

var galarian = ["Meowth", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Farfetch'd", "Weezing", "Mr. Mime", "Articuno", "Zapdos", "Moltres", "Slowking", "Corsola", "Zigzagoon", "Linoone", "Darumaka", "Darmanitan", "Yamask", "Stunfisk"];

addStyles(galarian, (p, i) => ".galar .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-galar.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");
addStyles(galarian, (p, i) => ".galarian .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.galarian." + dexClean(p) + " img { background-image:url('../img/pokemon-galar-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(galarian, (p, i) => ".galarian .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.galarian.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-galar-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");