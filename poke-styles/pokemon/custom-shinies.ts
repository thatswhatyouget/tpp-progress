//make sure alternate overrides come after normal dex
/// <reference path="natdex.ts" />

class CustomShiny {
    image: string;
    constructor(public runClass: string, public baseMon: string, imageFormat = "gif") {
        this.baseMon = dexClean(this.baseMon);
        this.image = "../img/custom-shiny/";
        this.image += runClass + "/" + baseMon;
        this.image += "." + imageFormat;
        this.image = this.image.toLowerCase();
        this.baseMon = baseMon.toLowerCase();
    }
}

var customShinies: CustomShiny[] = [
    new CustomShiny("unbound", "Dragonite")
];

addStyles(customShinies, (s: CustomShiny) => `.${s.runClass} .shiny .dexEntry .pokesprite.${s.baseMon} img, .${s.runClass} .pokesprite.shiny.${s.baseMon} img, .pokesprite.${s.runClass}.shiny.${s.baseMon} img {background-image:url("${s.image}")!important; background-position: center!important; background-size: 1em !important; }`);