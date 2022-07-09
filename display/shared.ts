/// <reference path="../ref/jquery.d.ts" />
/// <reference path="../ref/react.d.ts" />
/// <reference path="../ref/tpp-transforms.d.ts" />
/// <reference path="../models/twitchplayspokemon.tv.ts" />
/// <reference path="../ref/pokedex-data.d.ts" />

var dexData:(typeof Pokedex) = typeof(Pokedex) !== "undefined" ? Pokedex : <any>{};


module TPP.Display {

    export var cleanString = (str: string) => (str || '').toString().replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();

    export function pokeRedCondenseText(text: string) {
        text = text.replace(/'l/ig, "|");
        text = text.replace(/'m/ig, "~");
        text = text.replace(/'r/ig, "%");
        text = text.replace(/'s/ig, "&");
        text = text.replace(/'t/ig, '}');
        text = text.replace(/'v/ig, "@");
        text = text.replace(/#/ig, "#.");
        return text;
    }

}