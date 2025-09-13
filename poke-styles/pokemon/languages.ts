/// <reference path="../pokemon/natdex.ts" />
/// <reference path="../../data/Pokedex/languages/french.ts" />
/// <reference path="../../data/Pokedex/languages/german.ts" />

addSpriteSheet("lang-french", "pokemon", SpriteSheetType.Small);
addSpriteSheet("lang-french", "pokemon", SpriteSheetType.Large);
addSpriteSheet("lang-french", "pokemon", SpriteSheetType.Large, SpriteSheetMode.Shiny);

addSpriteSheet("lang-german", "pokemon", SpriteSheetType.Small);
addSpriteSheet("lang-german", "pokemon", SpriteSheetType.Large);
addSpriteSheet("lang-german", "pokemon", SpriteSheetType.Large, SpriteSheetMode.Shiny);

addStyles(Pokedex.Regional["National-FR"], defaultMapping("lang-french"));
addStyles(Pokedex.Regional["National-DE"], defaultMapping("lang-german"));