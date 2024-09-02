/// <reference path="../../tpp-data.ts" />
Intermissions.Runs.push(
    {
        RunName: "GB Tower Crystal",
        StartDate: "2024-02-23T00:22:49Z",
        Duration: "2024-04-26T19:01:23Z",
        ColorPrimary: "#609be1",
        ColorSecondary: "#534d13",
        HostImage: "img/hosts/baba.png",
        // HostImageSource: "",
        HostName: "AMANDA",
        Region: "Johto",
        Generation: 2,
        Pokedex:"New",
        Events: [
		
            { Name: "Cyndaquil", Time: "2024-02-23T00:29:15Z", Group: "Pokemon" },
            { Name: "Ditto", Time: "2024-02-23T01:02:10Z", Group: "Pokemon" },
		
        ]
    }
);
Revisits.Runs.push(
    {
        RunName: "GB Tower Crystal - VC Revisit",
        StartDate: "2024-03-25T04:28:09Z",
        Duration: "2024-03-25T20:14:44Z",
        ColorPrimary: "#609be1",
        ColorSecondary: "#534d13",
        HostImage: "img/hosts/baba.png",
        // HostImageSource: "",
        HostName: "AMANDA",
        Region: "Johto",
        Generation: 2,
        Pokedex:"New",
        Events: [
		
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", Time: "2024-03-25T17:20:22Z", IDNo: "20283", Attempts: 0, Party: [
                    { Number: 125, Pokemon: "Electabuzz", Nickname: "BUS", Gender: "Male", Level: 53, IDNo: "26864" },
                    { Number: 62, Pokemon: "Poliwrath", Nickname: "LWW.YYYOO", Gender: "Male", Level: 45, IDNo: "20283" },
                    { Number: 212, Pokemon: "Scizor", Nickname: "AC.P .!.N", Gender: "Male", Level: 50, IDNo: "26864" },
                    { Number: 178, Pokemon: "Xatu", Nickname: "KIW", Gender: "Male", Level: 46, IDNo: "26864" },
                    { Number: 115, Pokemon: "Kangaskhan", Nickname: "CD", Gender: "Female", Level: 42, IDNo: "26864" },
                    { Number: 36, Pokemon: "Clefable", Nickname: "DD", Gender: "Female", Level: 49, IDNo: "20283", Shiny: true },
                ],
                FirstAttemptDate: "",
                Image: "img/ribbons/champion.png"
            },
			
            { Name: "Celebi", Time: "2024-03-31T06:15:29Z", Group: "Pokemon" },
            { Name: "Snorlax", Time: "2024-03-31T15:26:46Z", Group: "Pokemon" },
			
        ],
        Revisit: { Collection: "Intermissions", Run: "GB Tower Crystal" },
        CopyEvents: ["GB Tower Crystal"],
    }
);