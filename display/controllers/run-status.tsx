/// <reference path="base.ts" />
/// <reference path="../elements/run-status/run-status.tsx" />

namespace TPP.Controllers {
    export class RunStatusController extends ControllerBase {
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Run Status";
            this.seeAlso = <a href="index.html">See Progress Bars</a>;
            this.credits = [
                "Default sprites are from [Bulbapedia](http://bulbapedia.bulbagarden.net/) and [PLDHnet's SpriteDex](http://pldh.net/dex/sprites/index).",
                "Pokemon sprites are from [The DS-style 64x64 Pokémon Sprite Resource](https://www.pokecommunity.com/showthread.php?t=267728), extended for [Gen 6](https://www.pokecommunity.com/showthread.php?t=314422) and [Gen 7](https://www.pokecommunity.com/showthread.php?t=368703).",
                "All custom sprites can be clicked for links to their sources."
            ];
            this.controls = [qsOptionsMenu("fa-sliders", "Options", { "autorefresh": "Refresh Automatically" })];
        }
        render() {
            var tppData = TPP.Transforms.Data.Processing.MarkOngoingRuns(this.tppData);
            var run = this.queryString["run"] ? TPP.Display.RunStatus.GetSpecifiedRun(tppData, this.queryString["run"]) : TPP.Display.RunStatus.GetCurrentRun(TPP.Transforms.Data.Filter.RemoveFutureRuns(tppData));
            var natDex = TPP.Transforms.Pokedex.ClipNationalDex(run.DexTotal || dexData.GenSlice[run.Generation || 0]);
            if (run.RunName.indexOf("Chatty Yellow") >= 0) {
                natDex.push("Chatot");
            }
            if (run.RunName.indexOf("Burning Red") >= 0) {
                natDex.push("Phancero");
            }
            if (run.RunName.indexOf("Metronome Sapphire") >= 0 || run.RunName.indexOf("Metronome Ruby") >= 0) {
                natDex.push("Meltan");
                natDex.push("Melmetal");
            }
            if (run.RunName.indexOf("Chatty Crystal") >= 0) {
                natDex.push("Onixtret");
                natDex.push("Steelurret");
                natDex.push("Chiquirtle");
                natDex.push("Baytortle");
                natDex.push("Megastoise");
                natDex.push("Hootduo");
                natDex.push("Noctdrio");
                natDex.push("Togekey");
                natDex.push("Togetape");
                natDex.push("Hopporita");
                natDex.push("Skipleef");
                natDex.push("Jumpanium");
                natDex.push("Woochum");
                natDex.push("Quagynx");
                natDex.push("Phancero");
            }
            if (run.RunName.indexOf("Cramorant Edition") >= 0) {
                natDex.push("Cramorant");
                natDex.push("Arrokuda");
                natDex.push("Barraskewda");
            }
            var pokemon = TPP.Transforms.Pokedex.DexMerge(dexData.Regional[run.Pokedex || run.Region], natDex);
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
                this.credits[0] = "Live Data: [TwitchPlaysPokemon.tv](https://twitchplayspokemon.tv/) &nbsp;&nbsp Other " + this.credits[0];
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