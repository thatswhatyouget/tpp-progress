/// <reference path="../write-style.ts" />

//make sure alternate overrides come after normal dex
/// <reference path="natdex.ts" />

class Alternate {
    image: string;
    constructor(public baseMon: string, public modifier: string, useFolder: boolean = false, imageFormat = "png") {
        this.image = "../img/alternate/";
        if (useFolder) this.image += modifier + "/" + baseMon;
        else this.image += baseMon + "-" + modifier;
        this.image += "." + imageFormat;
        this.image = this.image.toLowerCase();
        this.baseMon = baseMon.toLowerCase();
        this.modifier = modifier.toLowerCase();
    }
}

var alternates: Alternate[] = [
    new Alternate("articuno", "Ultra", true),
    new Alternate("blastoise", "Ultra", true),
    new Alternate("bulbasaur", "Ultra", true),
    new Alternate("charizard", "Ultra", true),
    new Alternate("charmander", "Ultra", true),
    new Alternate("charmeleon", "Ultra", true),
    new Alternate("ho-oh", "Ultra", true),
    new Alternate("ivysaur", "Ultra", true),
    new Alternate("lugia", "Ultra", true),
    new Alternate("moltres", "Ultra", true),
    new Alternate("squirtle", "Ultra", true),
    new Alternate("venusaur", "Ultra", true),
    new Alternate("wartortle", "Ultra", true),
    new Alternate("zapdos", "Ultra", true),

    new Alternate("jellicent", "Female"),

    new Alternate("azumarill", "Shiny"),
    new Alternate("xatu", "Shiny"),
    new Alternate("plusle", "Shiny"),
    new Alternate("gyarados", "Shiny"),

    new Alternate("zygarde", "percent10"),
    new Alternate("lycanroc", "Midnight"),
];

addStyles(alternates, (a: Alternate) => ".pokesprite." + a.baseMon + "." + a.modifier + ' img { background-image:url("' + a.image + '")!important; background-position: center!important; }'); 