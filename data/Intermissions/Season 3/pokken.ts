/// <reference path="../../tpp-data.ts" />
Intermissions.Runs.push(
    {
        RunName: "Pokkén Tournament",
        ColorPrimary: "darkblue",
        ColorSecondary: "black",
        BackgroundImage: "radial-gradient(ellipse at center, rgba(162,228,239,1) 0%,rgba(48,48,204,1) 41%,rgba(0,0,0,1) 100%)",
        StartDate: "2016-03-19T01:00:00Z",
        Duration: "2016-03-20T03:35:00.000Z",
        Unfinished: true,
        HostName: "TwitchPlays",
        HostImage: "img/hosts/twitchplays.png",
        HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4ei1ew/the_evolution_of_twitchplays/",
        Region: "Ferrum",
        Events: []
    }
);
Intermissions.Runs.push(
    {
        RunName: "Pokkén Tournament",
        ColorPrimary: "darkblue",
        ColorSecondary: "black",
        BackgroundImage: "radial-gradient(ellipse at center, rgba(162,228,239,1) 0%,rgba(48,48,204,1) 41%,rgba(0,0,0,1) 100%)",
        StartDate: "2016-03-24T01:55:00Z",
        Duration: "2016-03-27T16:50:00Z",
        Unfinished: true,
        HostName: "TwitchPlays",
        HostImage: "img/hosts/twitchplays.png",
        HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4ei1ew/the_evolution_of_twitchplays/",
        Region: "Ferrum",
        ContainsRunsFrom: ["Intermissions", "Short Intermissions"],
        Events: [
            {
                Group: "Hosts",
                Name: "TwitchPlays",
                Image: "img/hosts/twitchplays2.png",
                ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4ei1ew/the_evolution_of_twitchplays/",
                Time: "2016-03-24T04:02:00Z"
            },
            {
                Group: "Hosts",
                Name: "TwitchPlays",
                Image: "img/hosts/twitchplays3.png",
                ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4ei1ew/the_evolution_of_twitchplays/",
                Time: "2016-03-26T00:10:00Z"
            }
        ],
        Revisit: { Collection: "Intermissions", Run: "Pokkén Tournament" },
    }
);