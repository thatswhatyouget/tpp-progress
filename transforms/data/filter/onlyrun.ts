/// <reference path="removeempty.ts" />

namespace TPP.Transforms.Data.Filter {

    export function HasOnlyOneRun(tppData: Collection[] | Collection | Run[]) {
        if (!tppData)
            return false;    
        if (Array.isArray(tppData)){ 
            if (!tppData.length)
                return false;
            if ((tppData as Run[])[0].RunName)
                return tppData.length == 1;
            var filteredData = RemoveEmpty(tppData as Collection[])
            return filteredData.length == 1 && filteredData[0].Runs.length == 1;
        }
        return (tppData as Collection).Runs.length == 1;
    }

    export function GetOnlyRun(tppData: Collection[] | Collection | Run[]) {
        if (!HasOnlyOneRun(tppData))
            return null;
        if (Array.isArray(tppData)){ 
            if ((tppData as Run[])[0].RunName)
                return (tppData as Run[])[0];
            return RemoveEmpty(tppData as Collection[])[0].Runs[0]
        }
        return (tppData as Collection).Runs[0];
    }

}