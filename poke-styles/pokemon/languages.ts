/// <reference path="../pokemon/natdex.ts" />
/// <reference path="../../data/Pokedex/languages/french.ts" />
/// <reference path="../../data/Pokedex/languages/german.ts" />

addSpriteSheet("national-fr", "pokemon", SpriteSheetType.Small);
addSpriteSheet("national-fr", "pokemon", SpriteSheetType.Large);
addSpriteSheet("national-fr", "pokemon", SpriteSheetType.Large, SpriteSheetMode.Shiny);

addSpriteSheet("national-de", "pokemon", SpriteSheetType.Small);
addSpriteSheet("national-de", "pokemon", SpriteSheetType.Large);
addSpriteSheet("national-de", "pokemon", SpriteSheetType.Large, SpriteSheetMode.Shiny);

addStyles(Pokedex.Regional["National-FR"], defaultMapping("national-fr"));
addStyles(Pokedex.Regional["National-DE"], defaultMapping("national-de"));