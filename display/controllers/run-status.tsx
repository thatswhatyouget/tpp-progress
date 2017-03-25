/// <reference path="base.ts" />
/// <reference path="../elements/run-status/run-status.tsx" />

var dexData = Pokedex;

namespace TPP.Controllers {
    export class RunStatusController extends ControllerBase {
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Run Status";
            this.seeAlso = <a href="index.html">See Progress Bars</a>;
            this.credits = [
                "Data: [VorpalNorman](https://www.reddit.com/user/VorpalNorman)",
                "Default sprites are from [Bulbapedia](http://bulbapedia.bulbagarden.net/) and [PLDHnet's SpriteDex](http://pldh.net/dex/sprites/index).",
                "All custom sprites can be clicked for links to their sources."
            ];
            this.controls = [qsOptionsMenu("fa-sliders", "Options", { "autorefresh": "Refresh Automatically" })];
        }
        render() {
            var tppData = TPP.Transforms.Data.Processing.MarkOngoingRuns(this.tppData);
            var run = this.queryString["run"] ? TPP.Display.RunStatus.GetSpecifiedRun(tppData, this.queryString["run"]) : TPP.Display.RunStatus.GetCurrentRun(TPP.Transforms.Data.Filter.RemoveFutureRuns(tppData));
            var natDex = TPP.Transforms.Pokedex.ClipNationalDex(run.DexTotal || dexData.GenSlice[run.Generation || 0]);
            var pokemon = TPP.Transforms.Pokedex.DexMerge(dexData.Regional[run.Pokedex || run.Region], natDex);
            if (run.RunName == "Chatty Yellow") {
                pokemon.push("Chatot");
            }
            function fillDex(run) {
                tppData.forEach(c => {
                    for (var i = 0; i < c.Runs.length; i++) {
                        if (c.Runs[i].RunName == run.RunName && c.Runs[i].StartTime == run.StartTime)
                            return c.Runs[i] = run;
                    }
                });
                var regional = new TPP.Transforms.Pokedex.GlobalDex(new TPP.Transforms.Pokedex.CollectionSummary(tppData, pokemon), pokemon);
                var national = new TPP.Transforms.Pokedex.GlobalDex(new TPP.Transforms.Pokedex.CollectionSummary(tppData, natDex), natDex);
                if (national.TotalOwnedBy(run) > regional.TotalOwnedBy(run))
                    return national;
                return regional;
            }

            this.contentTitle = run.RunName + " Status";

            if (run.Ongoing)
                this.credits[0] = "Live Data: [TwitchPlaysPokemon.tv](https://twitchplayspokemon.tv/) &nbsp;&nbsp Other" + this.credits[0];    
            if (run.RunName.indexOf("Touhoumon") >= 0)
                this.credits.splice(this.credits.length - 1, 0, "Touhoumon sprites ripped by [Jayare158](https://www.reddit.com/r/twitchplayspokemon/comments/5cwr3q/by_ucyanders_request_heres_a_sprite_chart_with/).");
            if (run.TPPOrgLink || run.DocumentLink)
                this.credits.push(["For more information about this run, check out ",
                    run.DocumentLink ? `[this document](${run.DocumentLink})` : null,
                    run.TPPOrgLink && run.DocumentLink ? "and" : null,
                    run.TPPOrgLink ? `[twitchplayspokemon.org](${run.TPPOrgLink})` : null
                ].filter(s => !!s).join(' ') + '.');

            return <Display.Elements.RunStatus.App autoUpdate={this.queryString["autorefresh"] ? 5 : 0} buildDex={fillDex} run={run} />;
        }
    }
}