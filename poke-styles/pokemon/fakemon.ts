/// <reference path="../write-style.ts" />
/// <reference path="../../data/pokedex/natdex.ts" />
/// <reference path="../../data/pokedex/regional.ts" />

var exists = (require('fs') as typeof import('fs')).existsSync;

var fakemon = [
    "Unidentified",
    "Prizmeon", "Phancero", "Raiwato", "Varaneous", "Fambaco", "Libabeel", //Prism
    "Pikachu-B", "Kyurem-B", "Kyurem-W", "Mew-B", "M-Venusaur", "M-Charizard X", "M-Blastoise", "M-Lucario", "M-Charizard Y", "M-Salamence", "M-Absol", "M-Manectric", //Glazed
    "Def-Eevee", "Rotom-C", "Rotom-F", "Rotom-H", "Rotom-S", "Rotom-W", "Off-Eevee", //Blazed Glazed
    "Pumbloom", //Bronze
    "Burmy G", "Wormadam G", "Meloetta F", "ShayminSky", "Burmy S", "Wormadam S", "Aqua Egg", "Shellos 2", "Gastrodon2", "Rotom I", "Rotom F", "Rotom W", "Rotom G", "Rotom H", //Flora Sky
    "Onixtret", "Steelurret", "Chiquirtle", "Baytortle", "Megastoise", "Hootduo", "Noctdrio", "Togekey", "Togetape", "Hopporita", "Skipleef", "Jumpanium", "Woochum", "Quagynx", //Chatty Crystal
    "CoolSpheal", "DumbSpheal", "WentSpheal", //Spheal Team Six
];

addStyles(fakemon, f => {
    var clean = dexClean(f).replace(/ /g, '');
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/' + clean + '.png")!important; }';
});

function fixFakeForms(mons: string[]) {
    return mons.map((m, i, arr) => arr.findIndex(n => n == m) == i ? m : `${m}-${i}`);
}

addSingleStyle(fakemon.map(f => ".event.pokemon.pokesprite." + dexClean(f) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

//Phancero hover effect
addSingleStyle('.pokesprite.phancero:hover img  { background-image:url("../img/fakemon/phancero-hover.png")!important; }');

//MissingNo.
addSingleStyle('.pokesprite.missingno img  { background-image:url("../img/missingno.png")!important; }');

//NavyBlue
addStyles(Pokedex.Regional["Larmog"].map(p => (typeof p === "number" ? Pokedex.PokeList[p] : p)), defaultMapping("navyblue"));

//Sirius
addStyles(Pokedex.Regional["Altair/Sirius (Hoenn)"].map(p => (typeof p === "number" ? Pokedex.PokeList[p] : p)), defaultMapping("sirius"));

//Vega
addStyles(fixFakeForms(Pokedex.Regional["Tohoak"].map(p => (typeof p === "number" ? Pokedex.PokeList[p] : p))), defaultMapping("vega"));

//Blazing Emerald
addStyles(fixFakeForms(Pokedex.Regional["Blazing Hoenn"].map(p => (typeof p === "number" ? Pokedex.PokeList[p] : p))), defaultMapping("blazingemerald"));

//Spaceworld Gold Reforged
const spaceworldBetaMons = Pokedex.Regional.Nihon.map((mon, i) => typeof mon == "string" ? { name: mon, number: `${i}-spaceworld` } : null).filter(m => !!m);
addStyles(spaceworldBetaMons, m => {
    const clean = dexClean(m.name).replace(/ /g, '');
    return ".pokesprite." + clean + ' img  { background-image:url("../img/fakemon/gold97/' + m.number + '.png")!important; }';
});
addSingleStyle(spaceworldBetaMons.map(m => ".event.pokemon.pokesprite." + dexClean(m.name) + " img").join(", ") + " { background-size: 50%!important; background-position: center!important; }");

//XG Remix
addStyles(Pokedex.Regional["Orre Remix"].map((mon, i) => typeof mon == "string" ? { name: mon, number: i } : null).filter(m => !!m), mon => {
    const clean = dexClean(mon.name).replace(/ /g, '');
    const path = `./img/fakemon/xgremix/${clean}.png`;
    if (exists(path))
        return `.xgremix .pokesprite.${clean} img { background-image:url(".${path}")!important; }`;
    return `.xgremix .pokesprite.${clean} img { background-position: 0px -${mon.number}em!important; }`;
});
addStyles(["Fakeon X1", "Fakeon X2", "Fakeon X3", "Fakeon X4", "Fakeon X5", "RoboKyogre", "RoboGroudn"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/fakemon/xgremix/${clean}.png`;
    return `.xgremix .pokesprite.${clean} img { background-image:url(".${path}")!important; }`;
});

//Star
addStyles(Pokedex.Regional["Ultra-Alola"].map((mon, i) => typeof mon == "string" ? { name: mon, number: i } : null).filter(m => !!m), mon => {
    const clean = dexClean(mon.name).replace(/ /g, '');
    const path = `./img/fakemon/star/${clean}.png`;
    if (exists(path))
        return `.star .pokesprite.${clean} img { background-image:url(".${path}")!important; }`;
    return `.star .pokesprite.${clean} img { background-position: 0px -${mon.number}em!important; }`;
});
addStyles(["Voltorb", "Electrode", "Misdreavus", "Seviper", "Mismagius"], f => {
    const clean = dexClean(f).replace(/ /g, '');
    const path = `./img/fakemon/star/${clean}.png`;
    return `.star .pokesprite.${clean} img { background-image:url(".${path}")!important; background-position: 0px -0em!important;  }`;
});
addStyles(["UB-Queen"], f => {
    const clean = dexClean(f).replace(/ /g, '');
	const alt = "ultra";
    const path = `./img/alternate/${clean}-${alt}.png`;
    return `.star .pokesprite.${clean}.${alt} img { background-image:url(".${path}")!important; background-position: center!important;  }`;
});

