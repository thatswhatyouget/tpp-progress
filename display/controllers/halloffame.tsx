/// <reference path="base.ts" />
/// <reference path="../elements/partydisplay.tsx" />

namespace TPP.Controllers {
    export class HallOfFameController extends ControllerBase {
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Hall of Fame";
            this.seeAlso = <a href="index.html">See Progress Bars</a>;
            this.credits = [
                "Pokemon sprites are from [PLDHnet's SpriteDex](http://pldh.net/dex/sprites/index) and [Bulbapedia](http://bulbapedia.bulbagarden.net/).",
                "Touhoumon sprites ripped by [Jayare158](https://www.reddit.com/r/twitchplayspokemon/comments/5cwr3q/by_ucyanders_request_heres_a_sprite_chart_with/).",
                "All custom host sprites can be clicked for links to their sources."
            ];
        }
        render() {
            var hofs: Display.ViewModels.PartyDisplay[] = [];
            this.tppData.forEach(c => c.Runs.forEach(r => r.Events.forEach(e => {
                if ((e as HallOfFame).Party && Duration.parse(e.Time, r.StartTime).TotalSeconds > 0)
                    hofs.push(new Display.ViewModels.PartyDisplay(e as HallOfFame, r, c.Scale));
            })));
            hofs.sort((h1, h2) => h1.Time - h2.Time);
            return <div className="hof-list">
                {hofs.map((hof, i, hofs) => [
                    !i || hofs[i - 1].Run != hof.Run ? <h2 id={this.cleanString(hof.Run.RunName)}>{hof.Run.RunName}</h2> : null,
                    <Display.Elements.PartyDisplay partyInfo={hof} key={`${hof.Run.RunName} ${hof.Title}`} />
                ])}
            </div>;
        }
    }
}