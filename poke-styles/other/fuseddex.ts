/// <reference path="../pokemon/fakemon.ts" />
/// <reference path="../../data/Pokedex/other/fuseddex.ts" />

addSpriteSheet("fusedcrystal", "fusedcrystal", SpriteSheetType.Large);

addStyles(Pokedex.Regional["Fuseddex"], defaultMapping("")); //Empty mapping so none of the fusion styles are more specific than the fakemon fusions (from Chatty Crystal)