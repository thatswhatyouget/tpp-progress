/// <reference path="../traversal.ts" />
/// <reference path="../../../models/duration.ts" />


namespace TPP.Transforms.Data.Processing {

    export var MarkOngoingRuns = Traversal.RunLevel(r => {
        r.Ongoing = r.StartTime * 1000 <= Date.now() && (Duration.parse(r.Duration, r.StartTime).TotalSeconds + r.StartTime) * 1000 > Date.now()
        return r;
    });

}