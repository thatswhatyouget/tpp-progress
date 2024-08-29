var dexClean = (d: any): string => (d || "").toString().replace(/♀/g, 'F').replace(/♂/g, 'M').replace(/\?/g, '-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();

var exports = exports || {};
exports.pokeStyles = [];

function defaultMapping(mapString: string = "", rowSize = 10) {
    if (mapString) mapString = "." + mapString.trim() + " ";
    return (entry: any, index: number) => {
        if (!index || !entry || typeof entry !== "string") return "";
        const row = Math.floor(index / rowSize);
        const col = index % rowSize;
        return mapString + ".pokesprite." + dexClean(entry) + ` img { background-position: -${col}em -${row}em!important; }`;
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