/// <reference path="../tpp-data.ts" />

const commonEvents = [
    {
        Group: "Badges",
        Name: "Roulette Badge",
        Image: "img/badges/megapower/roulette.png",
        Time: "2023-09-03T12:49:07.413Z", Attempts: 1
    },
    {
        Group: "Badges",
        Name: "Basalt Badge",
        Image: "img/badges/megapower/basalt.png",
        Time: "2023-09-03T03:10:24.160Z", Attempts: 9
    },
    {
        Group: "Badges",
        Name: "Sylphid Badge",
        Image: "img/badges/megapower/sylphid.png",
        Time: "2023-09-03T18:32:35.638Z", Attempts: 1
    },
    {
        Group: "Badges",
        Name: "Buds Badge",
        Image: "img/badges/megapower/buds.png",
        Time: "2023-09-04T10:59:52.476Z", Attempts: 1
    },
    {
        Group: "Badges",
        Name: "Spiral Badge",
        Image: "img/badges/megapower/spiral.png",
        Time: "2023-09-04T18:42:45.891Z", Attempts: 1
    },
    {
        Group: "Badges",
        Name: "Electrode Badge",
        Image: "img/badges/megapower/electrode.png",
        Time: "2023-09-05T03:01:22.332Z", Attempts: 1 // Update with real time from event log
    },
    {
        Group: "Badges",
        Name: "Purgatory Badge",
        Image: "img/badges/megapower/purgatory.png",
        Time: "2023-09-05T15:38:09.324Z", Attempts: 1
    },
]

Season10.Runs.push(
    {
        RunName: "Mega Power",
        ColorPrimary: "#E96239",
        ColorSecondary: "#96C6CD",
        StartDate: "2023-09-02T16:00:00Z",
        Duration: "2023-09-09T16:23:35Z",
        HostName: "iii22MT",
        HostImage: "img/hosts/iii22MT.png",
        BaseGame: "Emerald",
        Region: "Ivara",
        Pokedex: "Ivara",
        FinalStateLink: "./states/Season 10/megapower.json",
        Events: [
            ...commonEvents,
            {
                Group: "Badges",
                Name: "Truth Badge",
                Image: "img/badges/megapower/truth.png",
                Time: "2023-09-06T12:07:08.545Z", Attempts: 1 // Update with real time from event log
            },


            {
                Group: "Elite Four",
                Name: "Elethia",
                Image: "img/trainers/megapower/elethia.png",
                Time: "2023-09-06T15:51:54.944Z", Attempts: 1
            },
            {
                Group: "Elite Four",
                Name: "Carleigh",
                Image: "img/trainers/megapower/carleigh.png",
                Time: "2023-09-06T15:51:54.944Z", Attempts: 1
            },
            {
                Group: "Elite Four",
                Name: "Stonewall",
                Image: "img/trainers/megapower/stonewall.png",
                Time: "2023-09-06T16:41:29.850Z", Attempts: 2
            },
            {
                Group: "Elite Four",
                Name: "Harmon",
                Image: "img/trainers/megapower/harmon.png",
                Time: "2023-09-06T16:19:06.325Z", Attempts: 1
            },
            {
                Group: "Champions",
                Name: "Salchimia",
                Image: "img/trainers/megapower/salchimia.png",
                Time: "2023-09-06T21:23:21.683Z", Attempts: 2
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", IDNo: "42496", Party: [
                    { Pokemon: "Tapu Lele", Nickname: "Fyxekqqut", Level: 92, Number: 177, IDNo: "42496" },
                    { Pokemon: "Simipour", Nickname: "Spout", Level: 91, Gender: "Female", Number: 195, IDNo: "42496" },
                    { Pokemon: "Groudon", Nickname: "  UUps vv", Level: 92, Number: 383, IDNo: "42496", Form: "Primal" },
                    { Pokemon: "Celesteela", Nickname: "ZT  ", Level: 79, Number: 193, IDNo: "42496" },
                    { Pokemon: "Pyroar", Nickname: "AA,SYwwjx", Level: 89, Gender: "Male", Number: 78, IDNo: "42496" },
                    { Pokemon: "Abomasnow", Nickname: "Joe", Level: 82, Gender: "Female", Number: 107, IDNo: "42496", Form: "Mega" },
                ],
                FirstAttemptDate: "2023-09-06T15:45:35.313Z",
                Image: "img/ribbons/champion.png",
                Time: "2023-09-06T21:24:44.192Z", Attempts: 8
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", IDNo: "42496", Party: [
                    { Pokemon: "Celesteela", Nickname: "ZT  ", Level: 100, Number: 193, IDNo: "42496" },
                    { Pokemon: "Groudon", Nickname: "  UUps vv", Level: 100, Number: 383, IDNo: "42496", Form: "Primal" },
                    { Pokemon: "Raikou", Nickname: "ELEC CHAIR", Level: 100, Number: 243, IDNo: "42496" },
                    { Pokemon: "Simipour", Nickname: "Spout", Level: 100, Gender: "Female", Number: 195, IDNo: "42496" },
                    { Pokemon: "Diancie", Nickname: "DDDD TUTU", Level: 100, Number: 126, IDNo: "42496", Form: "Mega" },
                    { Pokemon: "Tapu Lele", Nickname: "Fyxekqqut", Level: 100, Number: 177, IDNo: "42496" },
                ],
                FirstAttemptDate: "2023-09-08T18:21:06.312Z",
                Image: "img/ribbons/champion.png",
                Time: "2023-09-08T23:29:41.684Z", Attempts: 1
            },

        ]
    }
);

Revisits.Runs.push(
    {
        RunName: "\"Ultra\" Mega Power",
        ColorPrimary: "#E96239",
        ColorSecondary: "#96C6CD",
        StartDate: "2023-10-03T21:00:00Z",
        Duration: "2023-10-06T21:07:36.132Z",
        HostName: "iii22MT",
        HostImage: "img/hosts/iii22mt-u.png",
        BaseGame: "Emerald",
        Region: "Ivara",
        Pokedex: "Ivara",
        FinalStateLink: "./states/Season 10/ultramegapower1.json",
        Events: [
            ...commonEvents,
            {
                Group: "Badges",
                Name: "Truth Badge",
                Image: "img/badges/megapower/truth.png",
                Time: "", Attempts: 0
            },


            {
                Group: "Elite Four",
                Name: "Elethia",
                Image: "img/trainers/megapower/elethia.png",
                Time: "", Attempts: 0
            },
            {
                Group: "Elite Four",
                Name: "Carleigh",
                Image: "img/trainers/megapower/carleigh.png",
                Time: "", Attempts: 0
            },
            {
                Group: "Elite Four",
                Name: "Stonewall",
                Image: "img/trainers/megapower/stonewall.png",
                Time: "", Attempts: 0
            },
            {
                Group: "Elite Four",
                Name: "Harmon",
                Image: "img/trainers/megapower/harmon.png",
                Time: "", Attempts: 0
            },
            {
                Group: "Champions",
                Name: "Luke & Eva",
                Image: "img/trainers/megapower/luke&eva.png",
                Time: "", Attempts: 0
            },
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", IDNo: "42496", Party: [
                    { Pokemon: "Simipour", Nickname: "Spout", Level: 100, Gender: "Female", Number: 195, IDNo: "42496" },
                    { Pokemon: "Celesteela", Nickname: "ZT  ", Level: 94, Number: 193, IDNo: "42496" },
                    { Pokemon: "Groudon", Nickname: "  UUps vv", Level: 97, Number: 383, IDNo: "42496", Form: "Primal" },
                    { Pokemon: "Pyroar", Nickname: "AA,SYwwjx", Level: 94, Gender: "Male", Number: 78, IDNo: "42496" },
                    { Pokemon: "Florges", Nickname: "2", Level: 86, Gender: "Female", Number: 45, IDNo: "42496" },
                    { Pokemon: "Houndoom", Nickname: "GHKK", Level: 83, Gender: "Male", Number: 314, IDNo: "42496", Form: "Mega" },
                ],
                FirstAttemptDate: "",
                Image: "img/ribbons/champion.png",
                Time: "2023-10-04T23:58:14.687Z", Attempts: 2
            },
        ]
    }
);

Revisits.Runs.push(
    {
        RunName: "\"Ultra\" Mega Power Revisit",
        ColorPrimary: "#E96239",
        ColorSecondary: "#96C6CD",
        StartDate: "2023-11-10T21:37:13Z",
        Duration: "2023-11-11T21:00:00Z",
        HostName: "iii22MT",
        HostImage: "img/hosts/iii22mt-u.png",
        BaseGame: "Emerald",
        Region: "Ivara",
        Pokedex: "Ivara",
        FinalStateLink: "./states/Season 10/ultramegapower2.json",
        Events: [
		
            <TPP.HallOfFame>{
                Group: "Hall of Fame", Name: "Hall of Fame", IDNo: "42496", Party: [
                    { Pokemon: "Celesteela", Nickname: "ZT  ", Level: 100, Number: 193, IDNo: "42496" },
                    { Pokemon: "Pheromosa", Nickname: "MMMMMMMMMN", Level: 100, Number: 352, IDNo: "42496" },
                    { Pokemon: "Suicune", Nickname: "!!!!!!!", Level: 100, Number: 245, IDNo: "42496" },
                    { Pokemon: "Florges", Nickname: "2", Level: 100, Gender: "Female", Number: 45, IDNo: "42496" },
                    { Pokemon: "Houndoom", Nickname: "GHKK", Level: 100, Gender: "Male", Number: 314, IDNo: "42496", Form: "Mega" },
                    { Pokemon: "Golurk", Nickname: "Tensoku", Level: 100, Number: 344, IDNo: "42496" },
                ],
                FirstAttemptDate: "2023-11-11T04:03:37.665Z",
                Image: "img/ribbons/champion.png",
                Time: "2023-11-11T19:22:05.678Z", Attempts: 2
            },
			
        ],
        CopyEvents: [`"Ultra" Mega Power`]
    }
);