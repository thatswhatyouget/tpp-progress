/// <reference path="../pokemon/natdex.ts" />
/// <reference path="../../data/Pokedex/other/touhoudex.ts" />

addSpriteSheet("touhoumon", "touhoumon", SpriteSheetType.Small);
addSpriteSheet("touhoumon", "touhoumon", SpriteSheetType.Large);

addStyles(Pokedex.Regional["Art Book"], defaultMapping("touhoumon"));