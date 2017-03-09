/// <reference path="../../models/collection.ts" />
/// <reference path="../../models/duration.ts" />
/// <reference path="../../models/pokedex.ts" />

namespace TPP.Transforms.Pokedex {

    export class RunSummary extends TPP.Pokedex.RunSummaryBase {
        constructor(Run: TPP.Run, PokeList: string[]) {
            super();
            this.Run = Run;
            if (Run.Events.filter(e => e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0)).length) {
                this.FillOwnedDict(PokeList);
                this.FillHallOfFame(PokeList);
            }
        }

        private FillOwnedDict(PokeList: string[]) {
            this.InitOwnedDict(PokeList);
            this.Run.Events.filter(e => e.Group == "Pokemon").forEach(p => {
                var timestamp = Duration.parse(p.Time, this.Run.StartTime).TotalSeconds + this.Run.StartTime;
                if (!this.AddOwnedPokemonIfRecognized(p.Name, timestamp, PokeList)) {
                    this.AddOwnedPokemonIfRecognized(p.Class, timestamp, PokeList) //catch Pokemon with unusual names
                }
            });
        }

        private AddOwnedPokemonIfRecognized(mon: string, timestamp: number, PokeList: string[]) {
            if (PokeList.indexOf(mon) < 0) return false;
            this.OwnedDict[mon] = this.OwnedDict[mon] && this.OwnedDict[mon] < timestamp ? this.OwnedDict[mon] : timestamp;
            return true;
        }

        private InitOwnedDict(PokeList: string[]) {
            this.OwnedDict = {};
            PokeList.forEach(p => this.OwnedDict[p] = false);
        }

        private FillHallOfFame(PokeList: string[]) {
            this.Run.Events.filter(e => (<TPP.HallOfFame>e).Party && Duration.parse(e.Time, this.Run.StartTime).TotalSeconds >= 0).forEach(hof => (<TPP.HallOfFame>hof).Party.forEach(p => {
                var mon = PokeList.indexOf(p.Pokemon) >= 0 ? p.Pokemon : PokeList.indexOf(p.Class) >= 0 ? p.Class : null;
                if (mon) {
                    this.HallOfFame.push({
                        Pokemon: mon,
                        Ribbon: hof.Image,
                        RunName: this.Run.RunName,
                        HostName: this.Run.HostName,
                        Nickname: (p.Nickname || p.Pokemon).replace(/π/g, 'ᴾk').replace(/µ/g, 'ᴹn'),
                        UnmodifiedNick: p.Nickname,
                        PreviousNick: p.PreviousNick,
                        Time: Duration.parse(hof.Time, this.Run.StartTime).TotalSeconds + this.Run.StartTime
                    });
                }
            }));
        }
    }
}