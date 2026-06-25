/// <reference path="../pokemon/natdex.ts" />
/// <reference path="../../data/Pokedex/other/cassettes.ts" />

addSpriteSheet("cassettebeasts", "cassettes", SpriteSheetType.Small);
addSpriteSheet("cassettebeasts", "cassettes", SpriteSheetType.Large);

addStyles(Pokedex.Regional["Bestiary"], defaultMapping("cassettebeasts"));