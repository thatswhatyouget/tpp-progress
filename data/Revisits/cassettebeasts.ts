/// <reference path="../tpp-data.ts" />
Revisits.Runs.push(
    {
        RunName: "Cassette Beasts Revisit",
        StartDate: "2025-04-29T07:09:40Z",
        Duration: "2025-05-04T17:56:11Z",
        Class: "cassettes",
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
			
        ],
        Revisit: { Collection: "Intermissions", Run: "Cassette Beasts" },
        CopyEvents: ["Cassette Beasts"],
    }
);