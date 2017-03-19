/// <reference path="../clone.ts" />
/// <reference path="removeempty.ts" />


namespace TPP.Transforms.Data.Filter {

    var fuzzyMatch = (haystack: string, needle: string) => haystack.indexOf(needle) >= 0;

    var collectionNames = (data: Collection[]) => data.map(c => c.Name.toLowerCase());
    var runNames = (data: Collection[]) => data.map(c => c.Runs.map(r => r.RunName.toLowerCase())).reduce((a, b) => a.concat(b));

    function prepSearch(search: string | string[]) {
        if (!Array.isArray(search))
            search = search.split(',');
        return search.filter(s => !!s).map(s => s.toLowerCase().trim());
    }

    export function CollectionSearch(tppData: Collection[], search: string | string[]) {
        var sArr = prepSearch(search);
        return tppData.filter(c => {
            var n = c.Name.toLowerCase();
            return !!sArr.filter(s => fuzzyMatch(n, s)).length;
        });
    }

    export function RunSearch(tppData: Collection[], search: string | string[]) {
        var sArr = prepSearch(search);
        return RemoveEmpty(tppData.map(c => {
            var newC = Clone(c);
            newC.Runs = newC.Runs.filter(r => {
                var n = r.RunName.toLowerCase();
                return !!sArr.filter(s => fuzzyMatch(n, s)).length;
            });
            return newC;
        }));
    }

    export function Search(tppData: Collection[], search: string | string[]) {
        var sArr = prepSearch(search);
        var cArr = collectionNames(tppData).filter(c => !!sArr.filter(s => fuzzyMatch(c, s)).length);
        if (cArr.length)
            tppData = CollectionSearch(tppData, cArr);
        var rArr = runNames(tppData).filter(r => !!sArr.filter(s => fuzzyMatch(r, s)).length);
        if (rArr.length)
            tppData = RunSearch(tppData, rArr);
        return tppData;
    }
}