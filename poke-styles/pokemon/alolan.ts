//make sure alolan overrides come after normal dex
/// <reference path="natdex.ts" />

var alolan = ["Rattata", "Raticate", "Raichu", "Sandshrew", "Sandslash", "Vulpix", "Ninetales", "Diglett", "Dugtrio", "Meowth", "Persian", "Geodude", "Graveler", "Golem", "Grimer", "Muk", "Exeggutor", "Marowak"];

addStyles(alolan, (p, i) => ".alola .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-alola.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important;}");
addStyles(alolan, (p, i) => ".alolan .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.alolan." + dexClean(p) + " img { background-image:url('../img/pokemon-alola-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(alolan, (p, i) => ".alolan .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.alolan.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-alola-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");