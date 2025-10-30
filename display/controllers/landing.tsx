/// <reference path="base.ts" />
/// <reference path="../elements/partydisplay.tsx" />

namespace TPP.Controllers {
    export class LandingPageController extends ControllerBase {
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Progress Site";
            this.credits = [
                "Pokemon sprites are from [The DS-style 64x64 Pokémon Sprite Resource](https://www.pokecommunity.com/showthread.php?t=267728), extended for [Gen 6](https://www.pokecommunity.com/showthread.php?t=314422) and [Gen 7](https://www.pokecommunity.com/showthread.php?t=368703).",
                "All custom host sprites can be clicked for links to their sources."
            ];

            if (window.location.search.length > 1) {
                window.location.href = window.location.href.replace(/\/(index)?(.html)?\?/i, "/chart.html?");
            }
        }
        render() {
            return <div className="landing">
                <div className="top-links">
                    <a href="halloffame.html">
                        <img src="img/ribbons/champion.png" />
                        <span>Hall of Fame</span>
                    </a>
                    <a href="pokedex.html">
                        <TPP.Display.Elements.PokeSprite pokemon="Bulbasaur" />
                        <span>Global Pokédex</span>
                    </a>
                </div>
                <div className="seasons">
                    {this.tppData.map(season => <div className="season">
                        <a className="season-title" href={`chart.html?only=${encodeURIComponent(season.Name)}`}>{season.Name}</a>
                        <div className="runs">
                            {season.Runs.map(run => <RunBrick run={run} className={this.cleanString(run.RunName)} />)}
                        </div>
                    </div>)}
                </div>
            </div>;
        }
    }

    class RunBrick extends React.Component<{ run: TPP.Run, className: string }, { showTime: boolean }> {
        state = { showTime: false };
        private get style() {
            var style: React.CSSProperties = {}, colors = this.props.run;
            if (colors) {
                if (colors.ColorPrimary)
                    style.backgroundColor = colors.ColorPrimary;
                if (colors.ColorSecondary)
                    style.borderColor = colors.ColorSecondary;
            }
            return style;
        }
        render() {
            const { run, className } = this.props;
            const { showTime } = this.state;
            let duration = TPP.Duration.parse(run.Duration, run.StartTime);
            if (duration.TotalSeconds + run.StartTime > Date.now() / 1000)
                duration = TPP.Duration.parse(new Date().toISOString(), run.StartTime);
            const hofs = run.Events.filter(e => !!(e as HallOfFame).Party) as HallOfFame[];
            const party = !!run.CopyEvents ? hofs.pop() : hofs.shift(); // Display the party from the first HoF for normal runs, but the last HoF if this is a revisit
            return <div className={`run-brick ${className} ${run.Class || ""}`} style={this.style}>
                <a className="title" href={`run-status.html?run=${run.RunName}`}>{run.RunName}</a>
                <a className="duration" href="javascript:void(0)" onClick={_ => this.setState(s => ({ showTime: !s.showTime }))}>
                    <span className={`duration ${showTime ? "hide" : "show"}`}>{duration.toString()}</span>
                    <span className={`start-time ${showTime ? "show" : "hide"}`}>{new Date(run.StartTime * 1000).toISOString()}</span>
                </a>
                <div>
                    {this.renderHost(run)}
                    {this.renderParty(party && party.Party)}
                </div>
            </div>;
        }
        renderHost(run: TPP.Run) {
            if (!run.HostImage)
                return null;
            let hostImg = <img src={run.HostImage} alt={run.HostName} />
            if (run.HostImageSource)
                hostImg = <a href={run.HostImageSource} target="_blank">{hostImg}</a>;
            return <div className="host">
                {hostImg}
                <small>{run.HostName}</small>
            </div>;
        }
        renderParty(party: HallOfFame["Party"] | undefined) {
            if (!party)
                return null;
            return <div className="party">
                {party.map(mon => <div className="mon" title={mon.Nickname}>
                    <TPP.Display.Elements.PokeSprite pokemon={mon.Pokemon} shiny={mon.Shiny} gender={mon.Gender} form={mon.Form} className={mon.Class} />
                </div>)}
            </div>
        }
    }
}