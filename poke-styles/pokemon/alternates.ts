//make sure alternate overrides come after normal dex
/// <reference path="natdex.ts" />

class Alternate {
    image: string;
    shinyImage: string;
    constructor(public baseMon: string, public modifier: string, useFolder: boolean = false, imageFormat = "png") {
        modifier = modifier.replace(/ /g, "");
        baseMon = baseMon.replace(/ /g, "");
        this.image = "../img/alternate/";
        if (useFolder) this.image += modifier + "/" + baseMon;
        else this.image += baseMon + "-" + modifier;
        this.shinyImage = this.image + "-shiny";
        this.image += "." + imageFormat;
        this.image = this.image.toLowerCase();
        this.shinyImage += "." + imageFormat;
        this.shinyImage = this.shinyImage.toLowerCase();
        this.baseMon = baseMon.toLowerCase();
        this.modifier = modifier.toLowerCase();
    }
    get shinyExists() {
        return !!require('fs').existsSync(__dirname + '/../' + this.shinyImage);
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
    new Alternate("Absol", "MegaZ"),
	
    new Alternate("Pikachu", "Surfing"),
    new Alternate("Pikachu", "Flying"),
    new Alternate("Pikachu", "OriginalCap"),
    new Alternate("Pikachu", "HoennCap"),
    new Alternate("Pikachu", "SinnohCap"),
    new Alternate("Pikachu", "UnovaCap"),
    new Alternate("Pikachu", "KalosCap"),
    new Alternate("Pikachu", "AlolaCap"),
    new Alternate("Pikachu", "PartnerCap"),
    new Alternate("Pikachu", "WorldCap"),
	
    new Alternate("Onix", "Crystal"),

    new Alternate("tauros", "Paldean-Blaze"),
    new Alternate("tauros", "Paldean-Aqua"),
	
    new Alternate("Mewtwo", "Armored-MkI"),
    new Alternate("Mewtwo", "Armored-MkII"),

    new Alternate("Pichu", "Spiky-Eared"),
	
    new Alternate("unown", "T"),

    new Alternate("kyogre", "Primal"),
    new Alternate("groudon", "Primal"),

    new Alternate("deoxys", "Attack"),
    new Alternate("deoxys", "Defense"),
    new Alternate("deoxys", "Speed"),

    new Alternate("Wormadam", "Sand"),
    new Alternate("Wormadam", "Trash"),
	
    new Alternate("shellos", "East"),
    new Alternate("gastrodon", "East"),

    new Alternate("rotom", "Fan"),
    new Alternate("rotom", "Frost"),
    new Alternate("rotom", "Heat"),
    new Alternate("rotom", "Mow"),
    new Alternate("rotom", "Wash"),

    new Alternate("dialga", "Origin"),
    new Alternate("palkia", "Origin"),
    new Alternate("giratina", "Origin"),
	
    new Alternate("Shaymin", "Sky"),

    new Alternate("Arceus", "Bug"),
    new Alternate("Arceus", "Dark"),
    new Alternate("Arceus", "Dragon"),
    new Alternate("Arceus", "Electric"),
    new Alternate("Arceus", "Fairy"),
    new Alternate("Arceus", "Fighting"),
    new Alternate("Arceus", "Fire"),
    new Alternate("Arceus", "Flying"),
    new Alternate("Arceus", "Ghost"),
    new Alternate("Arceus", "Grass"),
    new Alternate("Arceus", "Ground"),
    new Alternate("Arceus", "Ice"),
    new Alternate("Arceus", "Poison"),
    new Alternate("Arceus", "Psychic"),
    new Alternate("Arceus", "Rock"),
    new Alternate("Arceus", "Steel"),
    new Alternate("Arceus", "Water"),

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

    new Alternate("Vivillon", "Archipelago"),
    new Alternate("Vivillon", "Continental"),
    new Alternate("Vivillon", "Elegant"),
    new Alternate("Vivillon", "Fancy"),
    new Alternate("Vivillon", "Garden"),
    new Alternate("Vivillon", "HighPlains"),
    new Alternate("Vivillon", "IcySnow"),
    new Alternate("Vivillon", "Jungle"),
    new Alternate("Vivillon", "Marine"),
    new Alternate("Vivillon", "Modern"),
    new Alternate("Vivillon", "Monsoon"),
    new Alternate("Vivillon", "Ocean"),
    new Alternate("Vivillon", "PokeBall"),
    new Alternate("Vivillon", "Polar"),
    new Alternate("Vivillon", "River"),
    new Alternate("Vivillon", "Sandstorm"),
    new Alternate("Vivillon", "Savanna"),
    new Alternate("Vivillon", "Sun"),

    new Alternate("Flabebe", "Yellow"),
    new Alternate("Flabebe", "Blue"),
    new Alternate("Flabebe", "Orange"),
    new Alternate("Flabebe", "White"),
	
    new Alternate("Floette", "Yellow"),
    new Alternate("Floette", "Blue"),
    new Alternate("Floette", "Orange"),
    new Alternate("Floette", "White"),
    new Alternate("Floette", "Eternal"),
	
    new Alternate("Florges", "Yellow"),
    new Alternate("Florges", "Blue"),
    new Alternate("Florges", "Orange"),
    new Alternate("Florges", "White"),

    new Alternate("furfrou", "Dandy"),
    new Alternate("furfrou", "Debutante"),
    new Alternate("furfrou", "Diamond"),
    new Alternate("furfrou", "Heart"),
    new Alternate("furfrou", "Kabuki"),
    new Alternate("furfrou", "LaReine"),
    new Alternate("furfrou", "Matron"),
    new Alternate("furfrou", "Pharaoh"),
    new Alternate("furfrou", "Star"),

    new Alternate("gourgeist", "Small"),
    new Alternate("gourgeist", "Large"),
    new Alternate("gourgeist", "Super"),

    new Alternate("Zygarde", "Percent10"),
    new Alternate("Zygarde", "Complete"),

    new Alternate("Hoopa", "unbound"),

    new Alternate("lycanroc", "Midnight"),
    new Alternate("lycanroc", "Dusk"),

    new Alternate("oricorio", "Pom-Pom"),
    new Alternate("oricorio", "Pa-u"),
    new Alternate("oricorio", "Sensu"),
	
    new Alternate("Silvally", "Bug"),
    new Alternate("Silvally", "Dark"),
    new Alternate("Silvally", "Dragon"),
    new Alternate("Silvally", "Electric"),
    new Alternate("Silvally", "Fairy"),
    new Alternate("Silvally", "Fighting"),
    new Alternate("Silvally", "Fire"),
    new Alternate("Silvally", "Flying"),
    new Alternate("Silvally", "Ghost"),
    new Alternate("Silvally", "Grass"),
    new Alternate("Silvally", "Ground"),
    new Alternate("Silvally", "Ice"),
    new Alternate("Silvally", "Poison"),
    new Alternate("Silvally", "Psychic"),
    new Alternate("Silvally", "Rock"),
    new Alternate("Silvally", "Steel"),
    new Alternate("Silvally", "Water"),

    new Alternate("Necrozma", "DuskMane"),
    new Alternate("Necrozma", "DawnWings"),
    new Alternate("Necrozma", "Ultra"),
	
    new Alternate("Magearna", "Original"),

    new Alternate("Toxtricity", "LowKey"),

    new Alternate("Alcremie", "Matcha-Strawberry"),
    new Alternate("Alcremie", "Matcha-Ribbon"),

    new Alternate("Zacian", "Crowned"),
    new Alternate("Zamazenta", "Crowned"),
	
    new Alternate("Zarude", "Dada"),

    new Alternate("Calyrex", "IceRider"),
    new Alternate("Calyrex", "ShadowRider"),
	
    new Alternate("Ursaluna", "Bloodmoon"),
	
    new Alternate("Enamorus", "Therian"),

    new Alternate("Maushold", "Four"),

    new Alternate("Ogerpon", "Wellspring"),
    new Alternate("Ogerpon", "Hearthflame"),
    new Alternate("Ogerpon", "Cornerstone"),

    new Alternate("Terapagos", "Terastal"),
    new Alternate("Terapagos", "Stellar"),

    new Alternate("zoroark", "Eliza"),

    new Alternate("ub-queen", "Ultra"),

    new Alternate("Motisma", "Tonte"),

];

addStyles(alternates, (a: Alternate) => [
    `.pokesprite.${a.baseMon}.${a.modifier} img { background-image:url("${a.image}")!important; background-position: center!important; background-size: 1em !important; }`,
    a.shinyExists && `.pokesprite.${a.baseMon}.${a.modifier}.shiny img { background-image:url("${a.shinyImage}")!important; background-position: center!important; background-size: 1em !important; }`
].filter(s => !!s));