/// <reference path="base.ts" />
/// <reference path="../elements/pokedex/dex.tsx" />

namespace TPP.Controllers {
    export class PokedexController extends ControllerBase {
        dexData = dexData;
        constructor(data: Collection[]) {
            super(data);
            this.pageTitle = "Global Pokédex";
            this.contentTitle = <DexName name="National" />;
            this.seeAlso = <a href="catch-report.html">See Catch Report</a>;
            this.controls = [
                pokedexGenerationsMenu(),
                pokedexRegionsMenu(),
                pokedexSortMenu(),
                qsOptionsMenu("fa-sliders", "Options", {
                    "justmon": "Just List Pokémon",
                    "owned": "Only Show Owned Pokémon",
                    "hofonly": "Only Show Hall of Fame Pokémon",
                    "nowifi": "Exclude Wi-Fi Trades"
                })
            ];
            this.credits = [
                "Pokemon sprites are from [The DS-style 64x64 Pokémon Sprite Resource](https://www.pokecommunity.com/showthread.php?t=267728), extended for [Gen 6](https://www.pokecommunity.com/showthread.php?t=314422) and [Gen 7](https://www.pokecommunity.com/showthread.php?t=368703).",
                "Early run catch data provided by [twitchplayspokemon.org](http://twitchplayspokemon.org/)."
            ];
        }

        render() {
            var tppData = Transforms.Data.Clone(this.tppData);
            var pokeList = Transforms.Pokedex.ClipNationalDex(this.dexData.GenSlice[this.queryString["g"] || 0]);
            var classes = "";
            var spriteClasses = "";
            var dexName = this.queryString["dex"] || "National";
            if (this.queryString["dex"] && this.dexData.Regional[this.queryString["dex"]]) {                
                pokeList = TPP.Transforms.Pokedex.DexMerge(this.dexData.Regional[dexName], pokeList);
                classes = this.dexData.specialClasses[dexName] || "";
                if (this.dexData.runRestrictions[dexName])
                    tppData = TPP.Transforms.Data.Filter.RunSearch(tppData, this.dexData.runRestrictions[dexName]);
            }
            if (this.queryString["ms"]) {
                classes += " ms";
            }
            if (this.queryString["shiny"]) {
                spriteClasses += " shiny";
            }
            if (this.queryString["female"]) {
                spriteClasses += " female";
            }

            if (this.queryString["nowifi"]) {
                tppData = TPP.Transforms.Data.Filter.NoWifiTradePokemon(tppData);
            }
            if (this.queryString["only"]) {
                tppData = TPP.Transforms.Data.Filter.Search(tppData, this.queryString["only"]);
            }
            var dex = new TPP.Transforms.Pokedex.GlobalDex(tppData, pokeList);
            var sorting = TPP.Pokedex.DexSorting[this.queryString["sort"]] || 0;
            dex.SortDex(sorting);
            if (this.queryString["hofonly"])
                dex.FilterDexToHallOfFame();
            if (this.queryString["pokemon"]) {
                console.log(this.queryString["pokemon"]);
                dex.FilterDexPokemon(this.queryString["pokemon"]);
            }
            if (this.queryString["run"]) {
                dex.FilterOwnedInDexToRuns(this.queryString["run"]);
                var onlyRun = TPP.Transforms.Data.Filter.GetOnlyRun(TPP.Transforms.Data.Filter.RunSearch(tppData, this.queryString["run"]));
            }
            else
                var onlyRun = TPP.Transforms.Data.Filter.GetOnlyRun(tppData);
            if (onlyRun)
                classes += " " + this.cleanString(onlyRun.RunName);
            
            if (this.queryString["altnames"] && this.dexData.alternateNames[this.queryString["altnames"]]) {
                var altnames = this.dexData.alternateNames[this.queryString["altnames"]];
                dex.Entries.forEach(e => e.DisplayName = altnames[e.Number]);
            }
            
            if (classes.indexOf("touhoumon") >= 0)
                this.credits.splice(0, 1, "Touhoumon sprites ripped by [Jayare158](https://www.reddit.com/r/twitchplayspokemon/comments/5cwr3q/by_ucyanders_request_heres_a_sprite_chart_with/).");  

            this.contentTitle = <DexName name={dexName} sorting={sorting}/>;
            return <Display.Elements.Pokedex.Dex dex={dex} showOwnership={!this.queryString["justmon"]} ownedOnly={!!this.queryString["owned"]} className={classes.trim()} spriteClass={spriteClasses} />;
        }
    }

    interface DexNameState {
        name: string;
        sorting?: TPP.Pokedex.DexSorting;
    }

    class DexName extends React.Component<DexNameState, DexNameState> {
        constructor(props: DexNameState) {
            super(props);
            this.state = { name: this.props.name, sorting: this.props.sorting || 0 };
        }

        private get dexName() {
            return this.state.name +
                (this.state.name.toLowerCase().indexOf('book') + this.state.name.indexOf('dex') < 0 ? " Pokédex" : "") +
                (this.state.sorting > 0 ? ` (${TPP.Pokedex.DexSorting[this.state.sorting]} Order)` : "");
        }

        render() {
            return <span>{this.dexName}</span>
        }
    }
}