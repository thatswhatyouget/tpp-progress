/// <reference types="node" />
declare var dexClean: (d: any) => string;
declare var exports: any;
declare function defaultMapping(mapString?: string, rowSize?: number): (entry: any, index: number) => string;
declare function addStyles<T>(data: T[], mapping?: (entry: T, index: number) => string | string[]): void;
declare function addSingleStyle(style: string): void;
declare enum SpriteSheetMode {
    Basic = 0,
    Shiny = 1,
    Female = 2,
    ShinyOrFemaleNotBoth = 3,
    ShinyFemale = 4,
    All = 7
}
declare enum SpriteSheetType {
    SmallNoSuffix = 0,
    Small = 1,
    Large = 2,
    LargeNoSuffix = 3
}
declare function addSpriteSheet(name: string, spriteSheet: string, sheetType?: SpriteSheetType, sheetMode?: SpriteSheetMode, rowSize?: number, fileExt?: string, extraStyles?: string): void;
declare var animorphs: string[];
declare module Pokedex {
    var PokeList: string[];
    var GenSlice: number[];
}
declare var exports: any;
declare module Pokedex {
    var Regional: {
        [key: string]: (number | string)[];
    };
    var specialClasses: {
        [key: string]: string;
    };
    var runRestrictions: {
        [key: string]: string;
    };
    var alternateNames: {
        [key: string]: string[];
    };
}
declare module Pokedex {
}
declare module Pokedex {
}
declare module Pokedex {
}
declare module Pokedex {
}
declare var robopon: (string | number)[];
declare var roboxPos: (i: any) => 20 | 162 | 234 | 90 | 298 | 362 | 558 | 622 | 690 | 760 | 831 | 491;
declare var roboyPos: (i: any) => number;
declare module Pokedex {
}
declare var denjuu: {
    image: number;
    name: string;
    bootleg: string;
}[];
declare module Pokedex {
}
declare var alolan: string[];
declare class Alternate {
    baseMon: string;
    modifier: string;
    image: string;
    constructor(baseMon: string, modifier: string, useFolder?: boolean, imageFormat?: string);
}
declare var alternates: Alternate[];
declare var exists: typeof import("fs").existsSync;
declare var fakemon: string[];
declare function fixFakeForms(mons: string[]): string[];
declare const kepMons: {
    name: string;
    number: number;
}[];
declare const spaceworldBetaMons: {
    name: string;
    number: string;
}[];
declare var galarian: string[];
declare var hisuian: string[];
declare var megas: string[];
declare var paldean: string[];
