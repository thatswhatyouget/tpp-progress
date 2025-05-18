//make sure hisuian overrides come after normal dex
/// <reference path="natdex.ts" />

var hisuian = ["Growlithe", "Arcanine", "Voltorb", "Electrode", "Typhlosion", "Qwilfish", "Sneasel", "Samurott", "Lilligant", "Zorua", "Zoroark", "Braviary", "Sliggoo", "Goodra", "Avalugg", "Decidueye"];

addStyles(hisuian, (p, i) => ".hisui .pokesprite." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");
addStyles(hisuian, (p, i) => ".hisuian .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.hisuian." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui-large.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em !important; }");

addStyles(hisuian, (p, i) => ".hisuian .shiny .dexEntry .pokesprite." + dexClean(p) + " img, .pokesprite.hisuian.shiny." + dexClean(p) + " img { background-image:url('../img/pokemon-hisui-large-shiny.png')!important; background-position: 0px -" + i + "em!important; background-size: 1em!important; }");