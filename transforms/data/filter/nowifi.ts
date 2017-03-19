/// <reference path="../traversal.ts" />

namespace TPP.Transforms.Data.Filter {

    export var NoWifiTradePokemon = Traversal.EventLevel(e => !e.Class || e.Class.indexOf("WifiTrade") < 0, true);

}