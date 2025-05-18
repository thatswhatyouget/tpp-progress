//make sure megas overrides come after normal dex
/// <reference path="natdex.ts" />

var megas = ["Venusaur", "Blastoise", "Beedrill", "Pidgeot", "Alakazam", "Slowbro", "Gengar", "Kangaskhan", "Pinsir", "Gyarados", "Aerodactyl", "Ampharos", "Steelix", "Scizor", "Heracross", "Houndoom", "Tyranitar", "Sceptile", "Blaziken", "Swampert", "Gardevoir", "Sableye", "Mawile", "Aggron", "Medicham", "Manectric", "Sharpedo", "Camerupt", "Altaria", "Banette", "Absol", "Glalie", "Salamence", "Metagross", "Latias", "Latios", "Rayquaza", "Lopunny", "Garchomp", "Lucario", "Abomasnow", "Gallade", "Audino", "Diancie"];

addStyles(megas, (p, i) => ".mega .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.mega." + dexClean(p) + " img { background-image:url('../img/pokemon-mega-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");

addStyles(megas, (p, i) => ".mega .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.mega.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-mega-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");