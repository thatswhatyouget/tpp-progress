/// <reference path="../../models/collection.ts" />
namespace TPP.Transforms.Data.Traversal {

    export function EventLevel(eventFunc: (e: Event, r?: Run, c?: Collection) => Event | boolean, filter = false) {
        function RunAtEventLevel(tppData: Event, collection?: Collection, run?: Run): Event;
        function RunAtEventLevel(tppData: Event[], collection?: Collection, run?: Run): Event[];
        function RunAtEventLevel(tppData: Run, collection?: Collection): Run;
        function RunAtEventLevel(tppData: Run[], collection?: Collection): Run[];
        function RunAtEventLevel(tppData: Collection): Collection;
        function RunAtEventLevel(tppData: Collection[]): Collection[];
        function RunAtEventLevel(tppData, collection?: Collection, run?: Run) {
            if (tppData && (!Array.isArray(tppData) || tppData.length)) {
                if (Array.isArray(tppData)) {
                    if ((<Collection[]>tppData)[0].Runs) {
                        return tppData.map(c => RunAtEventLevel(c));
                    }
                    if ((<Run[]>tppData)[0].RunName) {
                        return tppData.map(r => RunAtEventLevel(r, collection));
                    }
                    if (filter)
                        return (<Event[]>tppData).filter(e => eventFunc(e, run, collection));
                    return (<Event[]>tppData).map(e => eventFunc(e, run, collection));
                }
                if ((<Event>tppData).Group) {
                    return filter ? tppData : eventFunc(tppData, run, collection);
                }
                var c = <Collection>tppData;
                if (c.Runs) {
                    c.Runs = RunAtEventLevel(c.Runs, c);
                }
                else {
                    var r = <Run>tppData;
                    r.Events = RunAtEventLevel(r.Events, collection, r);
                }
            }
            return tppData;
        }
        return RunAtEventLevel;
    }

    export function RunLevel(runFunc: (r: Run, c?: Collection) => Run | boolean, filter = false) {
        function RunAtRunLevel(tppData: Run, collection?: Collection): Run;
        function RunAtRunLevel(tppData: Run[], collection?: Collection): Run[];
        function RunAtRunLevel(tppData: Collection): Collection;
        function RunAtRunLevel(tppData: Collection[]): Collection[];
        function RunAtRunLevel(tppData, collection?: Collection) {
            if (tppData && (!Array.isArray(tppData) || tppData.length)) {
                if (Array.isArray(tppData)) {
                    if ((<Collection[]>tppData)[0].Runs) {
                        return tppData.map(RunAtRunLevel);
                    }
                    if (filter)
                        return (<Run[]>tppData).filter(r => runFunc(r, collection));
                    return (<Run[]>tppData).map(r => runFunc(r, collection));
                }
                if ((<Run>tppData).RunName) {
                    return filter ? tppData : runFunc(tppData);
                }
                collection = <Collection>tppData;
                if (filter)
                    collection.Runs = collection.Runs.filter(r => <boolean>runFunc(r, collection));
                else
                    collection.Runs = collection.Runs.map(r => <Run>runFunc(r, collection));
            }
            return tppData;
        }
        return RunAtRunLevel;
    }

    export function CollectionLevel(collectionFunc: (c: Collection) => Collection | boolean, filter = false) {
        function RunAtCollectionLevel(tppData: Collection): Collection;
        function RunAtCollectionLevel(tppData: Collection[]): Collection[];
        function RunAtCollectionLevel(tppData) {
            if (tppData && (!Array.isArray(tppData) || tppData.length)) {
                if (Array.isArray(tppData)) {
                    if (filter)
                        return tppData.filter(c => <boolean>collectionFunc(c));
                    return tppData.map(c => <Collection>collectionFunc(c));
                }
                return filter ? tppData : collectionFunc(tppData);
            }
            return tppData;
        }
        return RunAtCollectionLevel;
    }

    export function MultiLevel(collectionFunc: (c: Collection) => Collection, runFunc: (r: Run, c?: Collection) => Run = r => r, eventFunc: (e: Event, r?: Run, c?: Collection) => Event = e => e) {
        function RunAtMultiLevel(tppData: Event, collection?: Collection, run?: Run): Event;
        function RunAtMultiLevel(tppData: Event[], collection?: Collection, run?: Run): Event[];
        function RunAtMultiLevel(tppData: Run, collection?: Collection): Run;
        function RunAtMultiLevel(tppData: Run[], collection?: Collection): Run[];
        function RunAtMultiLevel(tppData: Collection): Collection;
        function RunAtMultiLevel(tppData: Collection[]): Collection[];
        function RunAtMultiLevel(tppData, collection?: Collection, run?: Run) {
            if (tppData && (!Array.isArray(tppData) || tppData.length)) {
                if (Array.isArray(tppData)) {
                    return tppData.map(RunAtMultiLevel, collection);
                }
                if ((<Event>tppData).Group) {
                    return eventFunc(tppData, run, collection);
                }
                if ((<Run>tppData).RunName) {
                    run = runFunc(tppData, collection);
                    run.Events = run.Events.map(e => eventFunc(e, run, collection));
                    return run;
                }
                collection = collectionFunc(tppData);
                collection.Runs = RunAtMultiLevel(collection.Runs, collection);
                return collection;
            }
            return tppData;
        }
        return RunAtMultiLevel;
    }

}