/// <reference path="base.ts" />
/// <reference path="../elements/partydisplay.tsx" />

namespace TPP.Controllers {
    export class HallOfFameController extends ControllerBase {
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Hall of Fame";
            this.seeAlso = <a href="index.html">See Progress Bars</a>;
            this.credits = [
                "Pokemon sprites are from [The DS-style 64x64 Pokémon Sprite Resource](https://www.pokecommunity.com/showthread.php?t=267728), extended for [Gen 6](https://www.pokecommunity.com/showthread.php?t=314422) and [Gen 7](https://www.pokecommunity.com/showthread.php?t=368703).",
                "All custom host sprites can be clicked for links to their sources."
            ];
        }
        render() {
            var hofs: Display.ViewModels.PartyDisplay[] = [];
            this.tppData.forEach(c => c.Runs.forEach(r => r.Events.forEach(e => {
                if ((e as HallOfFame).Party && Duration.parse(e.Time, r.StartTime).TotalSeconds > 0) {
                    const hof = new Display.ViewModels.PartyDisplay(e as HallOfFame, r, c.Scale);
                    if (!hofs.some(h => h.Time == hof.Time)) //filter out duplicate entries (Event copy causes these)
                        hofs.push(hof);
                }
            })));
            hofs.sort((h1, h2) => h1.Time - h2.Time);
            return <div className="hof-list">
                {hofs.map((hof, i, hofs) => [
                    !i || hofs[i - 1].Run != hof.Run ? <div><h2 id={this.cleanString(hof.Run.RunName)}>{hof.Run.RunName}</h2></div> : null,
                    <div><Display.Elements.PartyDisplay partyInfo={hof} key={`${hof.Run.RunName} ${hof.Title}`} /></div>
                ])}
            </div>;
        }
    }
}