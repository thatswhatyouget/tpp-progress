/// <reference path="../../../models/collection.ts" />

module TPP.Transforms.Data.Filter {

    export function RemoveFutureRunsFromRuns(tppData: Run[]) {
        return tppData.filter(r => r.StartTime * 1000 <= Date.now());
    }

    export function RemoveFutureRunsFromCollection(tppData: Collection) {
        tppData.Runs = RemoveFutureRunsFromRuns(tppData.Runs);
        return tppData;
    }

    export function RemoveFutureRuns(tppData: Collection[]) {
        return tppData.map(RemoveFutureRunsFromCollection);
    }

}