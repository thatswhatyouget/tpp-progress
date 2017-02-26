/// <reference path="../../../models/collection.ts" />

module TPP.Transforms.Data.Processing {

    export function MarkOngoingRunsInRuns(tppData: Run[]) {
        tppData.forEach(r => r.Ongoing = r.StartTime * 1000 <= Date.now() && (Duration.parse(r.Duration, r.StartTime).TotalSeconds + r.StartTime) * 1000 > Date.now());
        return tppData;
    }

    export function MarkOngoingRunsInCollection(tppData: Collection) {
        tppData.Runs = MarkOngoingRunsInRuns(tppData.Runs);
        return tppData;
    }

    export function MarkOngoingRuns(tppData: Collection[]) {
        return tppData.map(MarkOngoingRunsInCollection);
    }

}