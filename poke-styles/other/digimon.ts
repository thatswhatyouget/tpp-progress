/// <reference path="../pokemon/natdex.ts" />
/// <reference path="../../data/Pokedex/other/digimon.ts" />

addSpriteSheet("digimonnovared", "digimon", SpriteSheetType.Small, SpriteSheetMode.Basic, 1);
addSpriteSheet("digimonnovared", "digimon", SpriteSheetType.Large, SpriteSheetMode.Basic, 1);

addStyles(Pokedex.Regional["Digimon"], defaultMapping("digimonnovared", 1));