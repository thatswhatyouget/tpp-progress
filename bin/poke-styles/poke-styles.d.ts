declare var dexClean: (d: any) => any;
declare var exports: any;
declare function defaultMapping(mapString?: string): (entry: any, index: any) => string;
declare function addStyles(data: any[], mapping?: (entry: any, index: any) => string | string[]): void;
declare function addSingleStyle(style: string): void;
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
declare var robopon: (string | number)[];
declare var roboxPos: (i: any) => 20 | 162 | 234 | 90 | 298 | 362 | 558 | 622 | 690 | 760 | 491 | 831;
declare var roboyPos: (i: any) => number;
declare module Pokedex {
}
declare var denjuu: {
    "image": number;
    "name": string;
    "bootleg": string;
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
declare var fakemon: string[];
