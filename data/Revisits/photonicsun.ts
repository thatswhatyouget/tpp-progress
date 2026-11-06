/// <reference path="../tpp-data.ts" />
Revisits.Runs.push(
    {
        RunName: "Photonic Sun Revisit - Lusamine Day",
        ColorPrimary: "#CD8B1F",
        ColorSecondary: "orange",
        StartDate: "2025-05-01T12:00:15Z",
        Duration: "2025-05-02T12:37:20Z",
        HostName: "!",
        HostImage: "img/hosts/exclamation.png",
        //HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/do2ovk/virginia_faba_the_six_time_married_three_times/",
        Region: "Alola",
        Generation: 7,
        Pokedex: "National",
        FromNatDex: true,
        //FinalStateLink: "./states/Season 12/photonicsun.json",
        Events: [
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", Time: "2025-05-01T19:55:29Z", Attempts: 0, Party: [
                    { Pokemon: "Zeraora", Nickname: "Zkittyora ", Level: 100 },
                    { Pokemon: "Necrozma", Nickname: "Néozma", Level: 100, Form: "Dusk Mane" },
                    { Pokemon: "Tapu Fini", Nickname: "eexxyyr", Level: 100 },
                    { Pokemon: "Kyogre", Nickname: "logre", Level: 100 },
                    { Pokemon: "Milotic", Nickname: "Nyla", Level: 100, Gender: "Female", Shiny },
                    { Pokemon: "Kommo-o", Nickname: "Jackamo-o", Level: 100, Gender: "Male", Shiny }
                ],
                Image: "img/ribbons/champion-alola.png",
                FirstAttemptDate: ""
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", Time: "2025-05-02T02:33:03Z", Attempts: 0, Party: [
                    { Pokemon: "Necrozma", Nickname: "Néozma", Level: 100, Form: "Dusk Mane" },
                    { Pokemon: "Zeraora", Nickname: "Zkittyora ", Level: 100 },
                    { Pokemon: "Tapu Fini", Nickname: "eexxyyr", Level: 100 },
                    { Pokemon: "Kyogre", Nickname: "logre", Level: 100 },
                    { Pokemon: "Milotic", Nickname: "Nyla", Level: 100, Gender: "Female", Shiny },
                    { Pokemon: "Kommo-o", Nickname: "Jackamo-o", Level: 100, Gender: "Male", Shiny }
                ],
                Image: "img/ribbons/champion-alola.png",
                FirstAttemptDate: ""
            },
        ],
        Revisit: { Collection: "Season 12", Run: "Photonic Sun" },
        CopyEvents: ["Photonic Sun"],
    }
);
