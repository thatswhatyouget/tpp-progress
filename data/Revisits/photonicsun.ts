/// <reference path="../tpp-data.ts" />
Revisits.Runs.push(
    {
        RunName: "Photonic Sun Revisit - Lusamine Day",
        ColorSecondary: "orange",
        ColorPrimary: "#CD8B1F",
        Duration: "2025-05-02T00:37:03Z",
        StartDate: "2025-05-01T12:00:15Z",
        HostName: "!",
        HostImage: "img/hosts/sun.png",
        //HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/do2ovk/virginia_faba_the_six_time_married_three_times/",
        Region: "Alola",
        Generation: 7,
        Pokedex: "National",
        FromNatDex: true,
        // FinalStateLink: "./states/Season 12/photonicsun.json",
        Events: [
		
			<TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", Time: "2025-05-01T19:55:29Z", Attempts: 0, Party: [
                    { Pokemon: "Zeraora", Nickname: "Zkittyora ", Level: 100 },
                    { Pokemon: "Necrozma", Nickname: "Néozma", Level: 100, Form: "Dusk Mane" },
                    { Pokemon: "Tapu Fini", Nickname: "eexxyyr", Level: 100 },
                    { Pokemon: "Kyogre", Nickname: "logre", Level: 100 },
                    { Pokemon: "Milotic", Nickname: "Nyla", Gender: "Female", Level: 100, Shiny: true },
                    { Pokemon: "Kommo-o", Nickname: "Jackamo-o", Gender: "Male", Level: 100, Shiny: true },
                ],
                Image: "img/ribbons/champion-alola.png",
                FirstAttemptDate: ""
            },
			
        ],
        Revisit: { Collection: "Season 12", Run: "Photonic Sun" },
        CopyEvents: ["Photonic Sun"],
    }
);