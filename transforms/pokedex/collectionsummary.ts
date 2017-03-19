/// <reference path="runsummary.ts" />
namespace TPP.Transforms.Pokedex {

    export class CollectionSummary extends TPP.Pokedex.CollectionSummaryBase {
        
        constructor(tppData: Collection[], PokeList: string[]) {
            super();
            var summaries: RunSummary[] = [];
            tppData.forEach(c => c.Runs.forEach(r => summaries.push(new RunSummary(r, PokeList))));
            this.Summary = summaries.sort((s1, s2) => s1.Run.StartTime - s2.Run.StartTime);
            if (this.Summary.length)
                this.FilterHoFToUniques();
        }

        private FilterHoFToUniques() {
            var hofData = this.Summary.map(s => s.HallOfFame).reduce((a, b) => a.concat(b)).sort((h1, h2) => h1.Time - h2.Time);
            this.HallOfFame = hofData.filter(c => hofData.filter(i => i.HostName == c.HostName && i.Pokemon == c.Pokemon && (i.Nickname == c.Nickname || c.PreviousNick == i.UnmodifiedNick)).shift() == c);
        }
    }

}