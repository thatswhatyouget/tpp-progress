var dexClean = (d: any): string => (d || "").toString().replace(/♀/g, 'F').replace(/♂/g, 'M').replace(/\?/g, '-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();

var exports = exports || {};
exports.pokeStyles = [];

function defaultMapping(mapString: string = "") {
    if (mapString) mapString = "." + mapString.trim() + " ";
    return (entry: string, index: number) => {
        if (!index || !entry || typeof entry !== "string") return "";
        return mapString + ".pokesprite." + dexClean(entry) + " img { background-position: 0px -" + index + "em!important; }";
    }
}

function addStyles(data: any[], mapping: (entry: any, index: any) => string | string[] = defaultMapping()) {
    data.forEach((entry, index) => {
        var addMe = mapping(entry, index);
        if (Array.isArray(addMe)) addMe.forEach(addSingleStyle);
        else if (addMe) addSingleStyle(addMe);
    });
}

function addSingleStyle(style: string) {
    exports.pokeStyles.push(style);
}