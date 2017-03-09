/// <reference path="../traversal.ts" />

namespace TPP.Transforms.Data.Filter {

    export var RemoveFutureRuns = Traversal.RunLevel(r => r.StartTime * 1000 <= Date.now(), true);

}