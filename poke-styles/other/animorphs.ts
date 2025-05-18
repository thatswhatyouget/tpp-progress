/// <reference path="../write-style.ts" />

addSpriteSheet("animorphs", "animorphs/anisprites", SpriteSheetType.SmallNoSuffix, SpriteSheetMode.Basic, 1, "gif", "font-size: 16px; margin: 10%; transform: translateX(-45%); top: 75%;");

var animorphs = ["Dog", "Mouse", "Goat", "Raccoon"]; //this is incomplete

addStyles(animorphs, defaultMapping("animorphs", 1));