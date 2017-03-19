/// <reference path="../traversal.ts" />

namespace TPP.Transforms.Data.Filter {

    export var RemoveEmpty = Traversal.CollectionLevel(c => !!c.Runs.length, true);    
}