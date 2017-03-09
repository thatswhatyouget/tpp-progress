/// <reference path="traversal.ts" />

namespace TPP.Transforms.Data {

    function cloneObject<T>(x: T): T {
        var newObj = {};
        Object.keys(x).forEach(k => newObj[k] = x[k]);
        return <T>newObj;
    }

    export var Clone = Traversal.MultiLevel(cloneObject, cloneObject, cloneObject);
}