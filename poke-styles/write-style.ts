var dexClean = (d: any): string => (d || "").toString().replace(/♀/g, 'F').replace(/♂/g, 'M').replace(/\?/g, '-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();

var exports = exports || {};
exports.pokeStyles = [];

function defaultMapping(mapString: string = "", rowSize = 10) {
    if (mapString) mapString = "." + mapString.trim() + " ";
    return (entry: any, index: number) => {
        if (!index || !entry || typeof entry !== "string") return "";
        const row = Math.floor(index / rowSize);
        const col = index % rowSize;
        return mapString + ".pokesprite." + dexClean(entry) + ` img { background-position: -${col}em -${row}em${mapString && "!important"}; }`;
    }
}

function addStyles<T>(data: T[], mapping: (entry: T, index: number) => string | string[] = defaultMapping()) {
    data.forEach((entry, index) => {
        var addMe = mapping(entry, index);
        if (Array.isArray(addMe)) addMe.forEach(addSingleStyle);
        else if (addMe) addSingleStyle(addMe);
    });
}

function addSingleStyle(style: string) {
    exports.pokeStyles.push(style);
}

enum SpriteSheetMode {
    Basic = 0,
    Shiny = 1,
    Female = 2,
    ShinyOrFemaleNotBoth = 3,
    ShinyFemale = 4,
    All = 7
}

enum SpriteSheetType {
    SmallNoSuffix,
    Small,
    Large,
    LargeNoSuffix
}

function addSpriteSheet(name: string, spriteSheet: string, sheetType = SpriteSheetType.SmallNoSuffix, sheetMode = SpriteSheetMode.Basic, rowSize = 10, fileExt = "png", extraStyles = "") {
    if (name)
        name = "." + dexClean(name);
    if (extraStyles)
        extraStyles += " ";
    const largeSpriteClasses = [
        ".dexEntry .pokesprite:not(.missingno) img", // Pokedex
        `.hallOfFameDisplay${name} .entry .pokesprite img`, // Hall of Fame
        ".badgeList ul li .image.pokesprite:not(.missingno) img", // Run Status Milestones
        ".pokemon-hud ul.party > li .pokemon-image > .pokesprite > img", // Run Status Party/PC
        `.progressChart .run${name} .event.pokesprite img` // Progress Bars Milestones
    ];
    const smallSpriteClasses = [
        `.progressChart .run${name} .event.pokesprite.pokemon img`, // Progress Bars Caught Pokemon
        `.ms${name} .dexEntry .pokesprite:not(.missingno) img`, // Pokedex MiniSprite Mode
    ];

    const findPokeSprite = /(\.pokesprite[^\s]*)/ig;

    function addSizedClasses(classes: string[], spriteSheet: string) {
        const styleBody = (spriteFile: string) => ` { background-image: url("../img/${spriteFile}.${fileExt}"); background-size: ${rowSize}em; ${extraStyles}}`
        classes.forEach(c => {
            if (!c.includes(name))
                c = name + " " + c;
            addSingleStyle(c + styleBody(spriteSheet));
            if (sheetMode & SpriteSheetMode.Shiny)
                addSingleStyle(c.replace(findPokeSprite, "$1.shiny") + styleBody(spriteSheet + "-shiny"));
            if (sheetMode & SpriteSheetMode.Female)
                addSingleStyle(c.replace(findPokeSprite, "$1.female") + styleBody(spriteSheet + "-female"));
            if (sheetMode & SpriteSheetMode.ShinyFemale)
                addSingleStyle(c.replace(findPokeSprite, "$1.shiny.female") + styleBody(spriteSheet + "-shiny-female"));
        });
    }

    if (sheetType >= SpriteSheetType.Large)
        addSizedClasses(largeSpriteClasses, spriteSheet + (sheetType == SpriteSheetType.Large ? "-large" : ""));
    else
        addSizedClasses(smallSpriteClasses, spriteSheet + (sheetType == SpriteSheetType.Small ? "-small" : ""));
}
