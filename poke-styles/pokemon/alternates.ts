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

    // new Alternate("jellicent", "Female"),

    // new Alternate("azumarill", "Shiny"),
    // new Alternate("xatu", "Shiny"),
    // new Alternate("plusle", "Shiny"),
    // new Alternate("gyarados", "Shiny"),
    // new Alternate("skiploom", "Shiny"),
    // new Alternate("jumpluff", "Shiny"),

    new Alternate("charizard", "MegaX"),
    new Alternate("charizard", "MegaY"),
    new Alternate("mewtwo", "MegaX"),
    new Alternate("mewtwo", "MegaY"),

    new Alternate("tauros", "Paldean-Blaze"),
    new Alternate("tauros", "Paldean-Aqua"),

    new Alternate("unown", "T"),

	new Alternate("kyogre", "Primal"),
    new Alternate("groudon", "Primal"),

    new Alternate("deoxys", "Attack"),
    new Alternate("deoxys", "Defense"),

    new Alternate("shellos", "East"),
    new Alternate("gastrodon", "East"),

    new Alternate("rotom", "Fan"),
    new Alternate("rotom", "Frost"),
    new Alternate("rotom", "Heat"),
    new Alternate("rotom", "Mow"),
    new Alternate("rotom", "Wash"),

    new Alternate("dialga", "Origin"),

    new Alternate("arceus", "Bug"),
    new Alternate("arceus", "Fire"),

    new Alternate("basculin", "Blue"),
    new Alternate("basculin", "White"),

    new Alternate("deerling", "Summer"),
    new Alternate("deerling", "Autumn"),
    new Alternate("deerling", "Winter"),

    new Alternate("sawsbuck", "Summer"),
    new Alternate("sawsbuck", "Autumn"),
    new Alternate("sawsbuck", "Winter"),

    new Alternate("tornadus", "Therian"),
    new Alternate("thundurus", "Therian"),
    new Alternate("landorus", "Therian"),

    new Alternate("kyurem", "White"),
    new Alternate("kyurem", "Black"),

    new Alternate("keldeo", "Resolute"),

    new Alternate("vivillon", "Modern"),

    new Alternate("Floette", "Eternal"),

    new Alternate("furfrou", "Kabuki"),

    new Alternate("gourgeist", "Small"),
    new Alternate("gourgeist", "Large"),
    new Alternate("gourgeist", "Super"),

    new Alternate("zygarde", "percent10"),

    new Alternate("lycanroc", "Midnight"),

    new Alternate("oricorio", "Pom-Pom"),
    new Alternate("oricorio", "Pa-u"),
    new Alternate("oricorio", "Sensu"),

    new Alternate("Necrozma", "DuskMane"),
    new Alternate("Necrozma", "DawnWings"),
    new Alternate("Necrozma", "Ultra"),

    new Alternate("Toxtricity", "LowKey"),

    new Alternate("Alcremie", "Matcha-Ribbon"),

    new Alternate("Zacian", "Crowned"),
    new Alternate("Zamazenta", "Crowned"),
	
    new Alternate("Ursaluna", "Bloodmoon"),

    new Alternate("Maushold", "Four"),

    new Alternate("Ogerpon", "Wellspring"),
    new Alternate("Ogerpon", "Hearthflame"),
    new Alternate("Ogerpon", "Cornerstone"),
	
    new Alternate("Terapagos", "Terastal"),
    new Alternate("Terapagos", "Stellar"),

    new Alternate("zoroark", "Eliza"),

    new Alternate("ub-queen", "Ultra"),

];

addStyles(alternates, (a: Alternate) => ".pokesprite." + a.baseMon + "." + a.modifier + ' img { background-image:url("' + a.image + '")!important; background-position: center!important; background-size: 1em !important; }');