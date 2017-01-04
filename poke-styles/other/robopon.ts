/// <reference path="../write-style.ts" />
/// <reference path="../../data/Pokedex/other/robopon.ts" />

var robopon = Pokedex.Regional["Robopon"];
robopon.splice(0, 1); //get rid of unused 000 slot

var roboxPos = i => {
    var n = i % 6;
    if (i >= 84) n += 6;
    switch (n) {
        case 0: return 20;
        case 1: return 90;
        case 2: return 162;
        case 3: return 234;
        case 4: return 298;
        case 5: return 362;
        case 6: return 491;
        case 7: return 558;
        case 8: return 622;
        case 9: return 690;
        case 10: return 760;
        case 11: return 831;
    }
};
var roboyPos = i => (Math.floor((i % 84) / 6) * 80) + (i >= 153 ? ([154, 155, 158, 160, 168].indexOf(i + 1) >= 0 ? 10 : 5) : 0);

addStyles(robopon, (r, i) => ".robopon .pokesprite." + dexClean(r) + " img { background-position: -" + roboxPos(i) + "px -" + roboyPos(i) + "px!important; }");