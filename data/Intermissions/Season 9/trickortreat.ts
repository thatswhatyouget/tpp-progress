/// <reference path="../../tpp-data.ts" />
Intermissions.Runs.push(
    {
        RunName: "Trick or Treat House 2022",
        ColorPrimary: "orange",
        ColorSecondary: "purple",
        StartDate: "2022-10-31T00:36:25Z",
        Duration: "2022-11-02T08:23:34Z",
        HostName: "GCCEEEF",
        HostImage: "img/hosts/aa.png",
        HostImageSource: "https://reddit.com/r/twitchplayspokemon/comments/iewiby/the_hosts_of_the_voices_after_the_rise_of_the_king/",
        Region: "Hoenn",
        Generation:3,
        FinalStateLink: "./states/Season 9/trickortreat.json",
        Events: [
		
			/*
			 {
                Group: "Missions", Name: "Puzzle #1\nShrub Shredding",
                Time: "2022-10-31T00:38:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #2\nPokémon Says",
                Time: "2022-10-31T00:55:34Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #3\nA Bird in the Bush",
                Time: "2022-10-31T02:14:16Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #4\nTrapdoor Trickery",
                Time: "2022-10-31T03:30:43Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #5\nA Song in the Forest",
                Time: "2022-10-31T04:04:02Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #6\nI Jump, You Jump, Jack",
                Time: "2022-10-31T04:30:50Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #7\nTower: A New Hope",
                Time: "2022-10-31T06:50:49Z", Attempts: 3, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #8\nPeppermints in Petalburg",
                Time: "2022-10-31T10:22:42Z", Attempts: 1, Image: "img/trainers/emerald/youngster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #9\nDoor Dido Menagerie",
                Time: "2022-10-31T11:47:14Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #10\nThe Frozen Excursion",
                Time: "2022-10-31T12:48:36Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #11\nTwin Memories",
                Time: "2022-10-31T13:32:16Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #12\nThe Mountain Trial",
                Time: "2022-10-31T13:51:09Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #13\nTower 2: Tower Harder",
                Time: "2022-10-31T14:39:17Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #14\nBoulder Room Bluff",
                Time: "2022-10-31T14:53:06Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #15\nScale the Belfry",
                Time: "2022-10-31T16:40:41Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #16\nCruisin' Down 110",
                Time: "2022-10-31T16:55:09Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #17\nThe Euphemistic Straw",
                Time: "2022-10-31T17:26:30Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			
            { "Group": "Pokemon", "Name": "Fearow", "Time": "2022-10-31T18:15:41Z" },
			
            {
                Group: "Missions", Name: "Puzzle #18\nFudge in Fortree",
                Time: "2022-10-31T18:31:02Z", Attempts: 2, Image: "img/trainers/toth/link.png",
            },
            {
                Group: "Missions", Name: "Puzzle #19\nManeuver Mischief",
                Time: "2022-10-31T19:18:12Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #20\nKoga's Labyrinth",
                Time: "2022-10-31T19:51:11Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #21\nMisplaced",
                Time: "2022-10-31T20:25:53Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #22\nSlip 'n Spin",
                Time: "2022-10-31T20:55:06Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #23\nCross-Path Caverns",
                Time: "2022-10-31T22:49:57Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #24\nSpot the Difference",
                Time: "2022-10-31T23:54:01Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #25\nMission Impassable",
                Time: "2022-11-01T07:42:09Z", Attempts: 17, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #26\nTow3r: Revelations",
                Time: "2022-11-01T10:15:58Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #27\nRotation Gate Ruse",
                Time: "2022-11-01T10:52:25Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #28\nMalteasers in Mossdeep",
                Time: "2022-11-01T14:03:51Z", Attempts: 9, Image: "img/trainers/toth/fairy.png",
            },
            {
                Group: "Missions", Name: "Puzzle #29\nTic Rac Toe",
                Time: "2022-11-01T14:32:06Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #30\nThe Elite Floor",
                Time: "2022-11-01T15:44:05Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #31\nShenanigan Samba",
                Time: "2022-11-01T15:59:48Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #32\nWaterflow Caverns",
                Time: "2022-11-01T16:40:54Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #33\nTower 4: The Quickening",
                Time: "2022-11-01T18:07:28Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #34\nFloor Frolic",
                Time: "2022-11-01T18:41:26Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #35\nThe Fog in the Forest",
                Time: "2022-11-01T20:11:37Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #36\nA Safari Among Friends",
                Time: "2022-11-01T21:18:22Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			
            {
                Group: "Missions", Name: "Puzzle Revisit #1\nShrub Shredding", Class: "Rematch",
                Time: "2022-11-01T22:46:11Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #2\nPokémon Says", Class: "Rematch",
                Time: "2022-11-01T23:41:45Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #3\nA Bird in the Bush", Class: "Rematch",
                Time: "2022-11-02T02:17:39Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #4\nTrapdoor Trickery", Class: "Rematch",
                Time: "2022-11-02T03:59:05Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle #5\nA Song in the Forest", Class: "Rematch",
                Time: "2022-11-02T04:20:54Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #6\nI Jump, You Jump, Jack", Class: "Rematch",
                Time: "2022-11-02T04:37:25Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #7\nTower: A New Hope", Class: "Rematch",
                Time: "2022-11-02T05:48:40Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle #8\nPeppermints in Petalburg", Class: "Rematch",
                Time: "2022-11-02T07:03:43Z", Attempts: 1, Image: "img/trainers/emerald/youngster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #9\nDoor Dido Menagerie", Class: "Rematch",
                Time: "2022-11-02T07:33:59Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #10\nThe Frozen Excursion", Class: "Rematch",
                Time: "2022-11-02T09:25:27Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #11\nTwin Memories", Class: "Rematch",
                Time: "2022-11-02T10:07:56Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #12\nThe Mountain Trial", Class: "Rematch",
                Time: "2022-11-02T11:29:29Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #13\nTower 2: Tower Harder", Class: "Rematch",
                Time: "2022-11-02T14:06:58Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #14\nBoulder Room Bluff", Class: "Rematch",
                Time: "2022-11-02T14:58:38Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #15\nScale the Belfry", Class: "Rematch",
                Time: "2022-11-02T19:01:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #16\nCruisin' Down 110", Class: "Rematch",
                Time: "2022-11-02T19:42:55Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #17\nThe Euphemistic Straw", Class: "Rematch",
                Time: "2022-11-02T21:06:51Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			{
                Group: "Missions", Name: "Puzzle #18\nFudge in Fortree", Class: "Rematch",
                Time: "2022-11-02T23:45:20Z", Attempts: 4, Image: "img/trainers/toth/link.png",
            },
            {
                Group: "Missions", Name: "Puzzle #19\nManeuver Mischief", Class: "Rematch",
                Time: "2022-11-03T00:17:59Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #20\nKoga's Labyrinth", Class: "Rematch",
                Time: "2022-11-03T00:49:48Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #21\nMisplaced", Class: "Rematch",
                Time: "2022-11-03T01:29:04Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #22\nSlip 'n Spin", Class: "Rematch",
                Time: "2022-11-03T01:54:04Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #23\nCross-Path Caverns", Class: "Rematch",
                Time: "2022-11-03T03:20:51Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #24\nSpot the Difference", Class: "Rematch",
                Time: "2022-11-03T03:43:52Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #25\nMission Impassable", Class: "Rematch",
                Time: "2022-11-03T04:41:55Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #26\nTow3r: Revelations", Class: "Rematch",
                Time: "2022-11-03T06:39:22Z", Attempts: 3, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #27\nRotation Gate Ruse", Class: "Rematch",
                Time: "2022-11-03T07:08:24Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #28\nMalteasers in Mossdeep", Class: "Rematch",
                Time: "2022-11-03T08:07:25Z", Attempts: 1, Image: "img/trainers/toth/fairy.png",
            },
            {
                Group: "Missions", Name: "Puzzle #29\nTic Rac Toe", Class: "Rematch",
                Time: "2022-11-03T09:15:35Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #30\nThe Elite Floor", Class: "Rematch",
                Time: "2022-11-03T10:10:01Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #31\nShenanigan Samba", Class: "Rematch",
                Time: "2022-11-03T10:22:35Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #32\nWaterflow Caverns", Class: "Rematch",
                Time: "2022-11-03T10:42:17Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #33\nTower 4: The Quickening", Class: "Rematch",
                Time: "2022-11-03T12:12:22Z", Attempts: 3, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #34\nFloor Frolic", Class: "Rematch",
                Time: "2022-11-03T12:32:45Z", Attempts: 2, Image: "img/trainers/emerald/trickmaster.png",
            },
            {
                Group: "Missions", Name: "Puzzle #35\nThe Fog in the Forest", Class: "Rematch",
                Time: "2022-11-03T13:03:33Z", Attempts: 1, Image: "img/trainers/emerald/trickmaster.png",
            },
			*/
		
        ]
    }
);
