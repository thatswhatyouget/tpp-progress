/// <reference path="../tpp-data.ts" />
Revisits.Runs.push(
    {
        RunName: "Cassette Beasts Revisit",
        StartDate: "2025-04-29T07:09:40Z",
        Duration: "2025-05-04T17:56:11Z",
        Class: "cassettebeasts",
        ColorPrimary: "#b0ceee",
        ColorSecondary: "#293146",
        BackgroundImage: "linear-gradient(#ab75e8, #3dbc9f)",
        HostImage: "img/hosts/other/wrt-violet.png",
        HostImageSource: "https://krizste.tumblr.com/post/787047361464680448",
        HostName: "wrt-violet",
        Region: "New Wirral",
        Pokedex: "Bestiary + Pier",
        ContainsRunsFrom: ["Revisits", "Intermissions"],
        Events: [
		
            {
                Group: "Bosses", Name: "Morgante", Image: "img/cassette/archangels/morgante2.png",
                Time: "2025-04-29T08:47:55Z", Attempts: 3,
            },
			
            { Group: "Pokemon", Name: "Pawper", Time: "2025-04-29T17:03:30Z" },
            { Group: "Pokemon", Name: "Miss Mimic", Time: "2025-04-29T19:46:43Z" },
            { Group: "Pokemon", Name: "Pawprince", Time: "2025-04-29T20:05:17Z" },
			
            {
                Group: "Rematch Stamps", Name: "Skip", Image: "img/cassette/stamps/skip.png",
                Time: "2025-05-02T16:48:41Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Wallace", Image: "img/cassette/stamps/wallace.png",
                Time: "2025-05-02T17:40:35Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Penny Dreadful", Image: "img/cassette/stamps/pennydreadful.png",
                Time: "2025-05-02T19:06:06Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Judas", Image: "img/cassette/stamps/judas.png",
                Time: "2025-05-02T19:28:55Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Clee-0", Image: "img/cassette/stamps/clee0.png",
                Time: "2025-05-02T20:21:28Z", Class: "Rematch", Attempts: 1, // Had to be redone due to quitting the game
            },
			
            {
                Group: "Rematch Stamps", Name: "Clee-0", Image: "img/cassette/stamps/clee0.png",
                Time: "2025-05-02T21:40:32Z", Class: "Rematch", Attempts: 2,
            },
			
            {
                Group: "Rematch Stamps", Name: "Codey", Image: "img/cassette/stamps/codey.png",
                Time: "2025-05-02T22:24:29Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Lodestein", Image: "img/cassette/stamps/lodestein.png",
                Time: "2025-05-02T22:40:18Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Rematch Stamps", Name: "Zedd", Image: "img/cassette/stamps/zedd.png",
                Time: "2025-05-02T23:05:27Z", Class: "Rematch", Attempts: 1,
            },
			
            {
                Group: "Bosses", Name: "Rose", Image: "img/cassette/archangels/rose.png",
                Time: "2025-05-03T02:41:29Z", Attempts: 1,
            },
			
            {
                Group: "Bosses", Name: "Gwenivar", Image: "img/cassette/archangels/gwenivar.png",
                Time: "2025-05-03T02:49:39Z", Attempts: 1,
            },
			
			
        ],
        Revisit: { Collection: "Intermissions", Run: "Cassette Beasts" },
        CopyEvents: ["Cassette Beasts"],
    }
);