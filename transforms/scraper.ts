/// <reference path="tpp-scraper.d.ts" />
module TPP.Transforms {

    export function UpdateRunData(run: Run) {
        if (run.Scraper && typeof Scrape === "function") {
            return Scrape(run).then(r => run, e => run);
        }
        return $.when(run);
    }

    export function UpdateCollectionData(collection: Collection) {
        return (<JQueryPromise<Run[]>>$.when.apply($, collection.Runs.map(UpdateRunData))).then(x => collection, e => collection);
    }

    export function UpdateData(tppData: Collection[]) {
        return (<JQueryPromise<Collection[]>>$.when.apply($, tppData.map(UpdateCollectionData))).then(x => tppData, e => tppData);
    }
    
}