/// <reference path="../tpp-data.ts" />
Sidegames.Runs.push(
    {
		RunName: "Trick or Treat House 2022 Sidegame",
        ColorPrimary: "orange",
        ColorSecondary: "purple",
        StartDate: "2022-11-02T08:44:29Z",
        Duration: "2022-11-13T21:15:36Z",
        HostName: "GCCEEEF",
        HostImage: "img/hosts/aa.png",
        HostImageSource: "https://reddit.com/r/twitchplayspokemon/comments/iewiby/the_hosts_of_the_voices_after_the_rise_of_the_king/",
        Region: "Hoenn",
        Generation:3,
        FinalStateLink: "./states/Season 9/trickortreat.json",
        Events: [
		
            /*
            {
                Group: "Missions", Name: "Puzzle Revisit #3\nA Bird in the Bush", Class: "Rematch",
                Time: "2022-11-02T02:17:39Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #4\nTrapdoor Trickery", Class: "Rematch",
                Time: "2022-11-02T03:59:05Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle Revisit #5\nA Song in the Forest", Class: "Rematch",
                Time: "2022-11-02T04:20:54Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #6\nI Jump, You Jump, Jack", Class: "Rematch",
                Time: "2022-11-02T04:37:25Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #7\nTower: A New Hope", Class: "Rematch",
                Time: "2022-11-02T05:48:40Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle Revisit #8\nPeppermints in Petalburg", Class: "Rematch",
                Time: "2022-11-02T07:03:43Z", Attempts: 1, Image: "img/trainers/emerald/youngster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #9\nDoor Dido Menagerie", Class: "Rematch",
                Time: "2022-11-02T07:33:59Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #10\nThe Frozen Excursion", Class: "Rematch",
                Time: "2022-11-02T09:25:27Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #11\nTwin Memories", Class: "Rematch",
                Time: "2022-11-02T10:07:56Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #12\nThe Mountain Trial", Class: "Rematch",
                Time: "2022-11-02T11:29:29Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #13\nTower 2: Tower Harder", Class: "Rematch",
                Time: "2022-11-02T14:06:58Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #14\nBoulder Room Bluff", Class: "Rematch",
                Time: "2022-11-02T14:58:38Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #15\nScale the Belfry", Class: "Rematch",
                Time: "2022-11-02T19:01:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #16\nCruisin' Down 110", Class: "Rematch",
                Time: "2022-11-02T19:42:55Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #17\nJungle Cruising", Class: "Rematch",
                Time: "2022-10-31T22:41:55Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #18\nThe Euphemistic Straw", Class: "Rematch",
                Time: "2022-11-02T21:06:51Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle Revisit #19\nFudge in Fortree", Class: "Rematch",
                Time: "2022-11-02T23:45:20Z", Attempts: 4, Image: "img/trainers/toth/link.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #20\nManeuver Mischief", Class: "Rematch",
                Time: "2022-11-03T00:17:59Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #21\nKoga's Labyrinth", Class: "Rematch",
                Time: "2022-11-03T00:49:48Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #22\nMisplaced", Class: "Rematch",
                Time: "2022-11-03T01:29:04Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #23\nSlip 'n Spin", Class: "Rematch",
                Time: "2022-11-03T01:54:04Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #24\nCross-Path Caverns", Class: "Rematch",
                Time: "2022-11-03T03:20:51Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #25\nSpot the Difference", Class: "Rematch",
                Time: "2022-11-03T03:43:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #26\nMission Impassable", Class: "Rematch",
                Time: "2022-11-03T04:41:55Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #27\nTow3r: Revelations", Class: "Rematch",
                Time: "2022-11-03T06:39:22Z", Attempts: 3, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #28\nRotation Gate Ruse", Class: "Rematch",
                Time: "2022-11-03T07:08:24Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #29\nMalteasers in Mossdeep", Class: "Rematch",
                Time: "2022-11-03T08:07:25Z", Attempts: 1, Image: "img/trainers/toth/fairy.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #30\nTic Rac Toe", Class: "Rematch",
                Time: "2022-11-03T09:15:35Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #31\nThe Elite Floor", Class: "Rematch",
                Time: "2022-11-03T10:10:01Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #32\nShenanigan Samba", Class: "Rematch",
                Time: "2022-11-03T10:22:35Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #33\nWaterflow Caverns", Class: "Rematch",
                Time: "2022-11-03T10:42:17Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #34\nA Rock and a Hard Place", Class: "Rematch",
                Time: "2022-11-01T15:48:13Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #35\nTower 4: The Quickening", Class: "Rematch",
                Time: "2022-11-03T12:12:22Z", Attempts: 3, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #36\nFloor Frolic", Class: "Rematch",
                Time: "2022-11-03T12:32:45Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #37\nThe Fog in the Forest", Class: "Rematch",
                Time: "2022-11-03T13:03:33Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle Revisit #38\nA Safari Among Friends", Class: "Rematch",
                Time: "2022-11-01T23:31:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle Revisit #39\nThe Last Hurrah", Class: "Rematch",
                Time: "2022-11-02T06:52:30Z", Attempts: 4, Image: "img/trainers/emerald/flannery.png",
            },
			*/
		
        ],
        Revisit: { Collection: "Intermissions", Run: "Trick or Treat House 2022" },
        CopyEvents: ["Trick or Treat House 2022"],
    }
);