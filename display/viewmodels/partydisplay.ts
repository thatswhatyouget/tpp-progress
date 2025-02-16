/// <reference path="../shared.ts" />

namespace TPP.Display.ViewModels {
    interface Dict { [key: string]: string|number }

    export class PartyDisplay {
        Host: {
            Name: string;
            Image: string;
            ImageSource: string;
            Info: Dict;
        }
        Party: {
            Name: string;
            Pokemon: string;
            Level: number;
            Gender: string;
            Shiny: boolean;
            Form: string;
            Class: string;
            Info: Dict;
        }[] = [];
        Colors: {
            ColorPrimary: string;
            ColorSecondary: string;
        }
        Run: Run;
        Time: number;
        RunTime: string;
        Attempts: string;
        Ribbon: string;
        Title: string;
        Class = "hallOfFameDisplay";

        private cleanInfo(info: Dict) {
            Object.keys(info).forEach(k => info[k] || delete info[k]);
            return info;
        }

        private infoAddSpeciesAndMoves(info: Dict, number: number | string, species: string, moves: { id: number; name: string; pp: number; }[] = []) {
            var newInfo: Dict = {};
            if (number)
                newInfo[this.dexNumStr(number)] = species;
            moves.forEach((m, i) => newInfo[`Move ${i + 1}`] = m.name);
            Object.keys(info).forEach(k => newInfo[k] = info[k]);
            return newInfo;
        }

        private dexNumStr(num: number | string) {
            var numStr = num.toString();
            return ('000' + numStr).substring(numStr.length);
        }

        constructor(data: Tv.RunStatus, run: Run, scale: Scale);
        constructor(data: HallOfFame, run: Run, scale: Scale);
        constructor(data: any, run: Run, scale = TPP.Scale.Days) {
            this.Host = {
                Name: run.HostName,
                Image: run.HostImage,
                ImageSource: run.HostImageSource,
                Info: {}
            };
            this.Colors = {
                ColorPrimary: run.ColorPrimary,
                ColorSecondary: run.ColorSecondary,
            };
            this.Run = run;
            this.Class += " " + cleanString(run.RunName);
            if (run.Class)
                this.Class += " " + run.Class;
            if ((data as HallOfFame).Party) {
                var hof = data as HallOfFame;
                this.Title = hof.Name + " - " + new Date(hof.UnixTime * 1000).toLocaleDateString();
                this.Ribbon = hof.Image;
                this.Attempts = hof.Attempts ? `${hof.Attempts} Attempt${hof.Attempts > 1 ? "s" : ""}` : null;
                this.Time = hof.UnixTime;
                this.RunTime = Duration.parse(hof.Time, run.StartTime).toString(scale);
                if (hof.IDNo) this.Host.Info["IDNo"] = hof.IDNo;
                this.Party = hof.Party.map(p => ({
                    Name: (p.Nickname || p.Pokemon),
                    Pokemon: p.Pokemon,
                    Level: p.Level,
                    Gender: (p.Gender || '').toLowerCase(),
                    Shiny: !!p.Shiny,
                    Form: (p.Form || ''),
                    Class: p.Class,
                    Info: this.cleanInfo(this.infoAddSpeciesAndMoves({
                        "Met": p.Met,
                        "Type 1": p.Type1,
                        "Type 2": p.Type2,
                        "OT": p.OT,
                        "IDNo": p.IDNo
                    }, p.Number, p.Pokemon))
                }));
            }
            else if ((data as Tv.RunStatus).party) {
                var status = data as Tv.RunStatus;
                this.Title = "Current Party";
                this.Time = Date.now() / 1000;
                var duration = new Duration(0);
                duration.TotalSeconds = this.Time - run.StartTime;
                this.RunTime = duration.toString(scale);
                this.Host.Info = this.cleanInfo({
                    "Money": status.money,
                    "Coins": status.coins,
                    "Badges": ((status.badges || 0).toString(2).match(/1/g) || []).length,
                    "Owned": status.caught,
                    "Seen": status.seen,
                });
                this.Party = status.party.map(p => ({
                    Name: (p.name || (p.species && p.species.name) || "???").replace(/Ë/g, "µ").replace(/Ê/g, "π"),
                    Pokemon: p.species && p.species.name || "???",
                    Level: p.level,
                    Gender: null, //TODO: have a run that supports gender
                    Shiny: false, //TODO: have a run that supports shinies
                    Form: null, //TODO: have a run that supports forms
                    Class: p.health && !p.health[0] ? "fainted" : p.status,
                    Info: this.cleanInfo(this.infoAddSpeciesAndMoves({

                    }, p.species && p.species.id || 0, p.species && p.species.name || "???", p.moves))
                }));
            }
            while (this.Party.length < 6)
                this.Party.push(null);    
        }
    }
}