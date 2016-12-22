/// <reference path="tpp-structure.ts" />
var tppData: TPP.Collection[] = [
    {
        Name: "Season 1",
        Scale: TPP.Scale.Days,
        Runs: [
            {
                RunName: "Red",
                ColorPrimary: "#c0504d",
                ColorSecondary: "#8c3836",
                StartDate: "2014-02-13T01:22:45Z",
                Duration: "16d 7h 52m",
                EndDate: "Mar 1 2014 9:13 AM GMT",
                HostName: "RED",
                HostImage: "img/hosts/red.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                TPPOrgLink: "http://twitchplayspokemon.org/red",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/red-archive",
                LiveUpdaterArchive: "https://paste.ee/p/E6NvL",
                Region: "Kanto",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "0d 9h 12m"
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "1d 18h 56m 38s"
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2d 11h 29m"
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "4d 0h 47m"
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "8d 7h 18m"
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "9d 18h 25m"
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "12d 8h 27m"
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "13d 13h 55m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lorelei",
                        Image: "img/trainers/red/lorelei.png",
                        Time: "15d 18h 26m",
                        Attempts: 4
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/trainers/red/bruno.png",
                        Time: "15d 18h 33m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Agatha",
                        Image: "img/trainers/red/agatha.png",
                        Time: "15d 19h 15m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lance",
                        Image: "img/trainers/red/lance.png",
                        Time: "15d 19h 32m",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "BLUE",
                        Image: "img/trainers/red/blue.png",
                        Time: "16d 7h 45m 30s",
                        Attempts: 2
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "16d 7h 44m", Attempts: 22, Party: [
                            { Pokemon: "Zapdos", Nickname: "AA-j", Level: 81, Type1: "Electric", Type2: "Flying" },
                            { Pokemon: "Nidoking", Nickname: "AAAAAAAAAA", Level: 54, Type1: "Poison", Type2: "Ground" },
                            { Pokemon: "Omastar", Level: 52, Type1: "Rock", Type2: "Water" },
                            { Pokemon: "Venomoth", Nickname: "AATTVVV", Level: 39, Type1: "Bug", Type2: "Poison" },
                            { Pokemon: "Lapras", Nickname: "AIIIIIIRRR", Level: 31, Type1: "Water", Type2: "Ice" },
                            { Pokemon: "Pidgeot", Nickname: "aaabaaajss", Level: 69, Type1: "Normal", Type2: "Flying" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Charmander", Time: "5m", Group: "Pokemon", Estimate: true },
                    { Name: "Charmeleon", Time: "13h36m", Group: "Pokemon", Estimate: true },
                    { Name: "Pidgey", Time: "12h46m", Group: "Pokemon", Estimate: true },
                    { Name: "Pidgeotto", Time: "1d14h23m", Group: "Pokemon" },
                    { Name: "Pidgeot", Time: "3d17h13m", Group: "Pokemon" },
                    { Name: "Rattata", Time: "1d11h32m", Group: "Pokemon" },
                    { Name: "Raticate", Time: "7d13h18m", Group: "Pokemon" },
                    { Name: "Spearow", Time: "2d 2h 49m", Group: "Pokemon" },
                    { Name: "NidoranM", Time: "8d8h10m", Group: "Pokemon" },
                    { Name: "Nidorino", Time: "8d12h29m", Group: "Pokemon" },
                    { Name: "Nidoking", Time: "11d6h44m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "6d14h4m", Group: "Pokemon" },
                    { Name: "Oddish", Time: "4d11h32m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "8d1h15m", Group: "Pokemon" },
                    { Name: "Paras", Time: "8d8h24m", Group: "Pokemon" },
                    { Name: "Venonat", Time: "8d8h5m", Group: "Pokemon" },
                    { Name: "Venomoth", Time: "8d14h37m", Group: "Pokemon" },
                    { Name: "Geodude", Time: "10d9h54m", Group: "Pokemon" },
                    { Name: "Farfetch'd", Time: "2d6h59m", Group: "Pokemon" },
                    { Name: "Gastly", Time: "6d23h49m", Group: "Pokemon" },
                    { Name: "Drowzee", Time: "2d2h37m", Group: "Pokemon" },
                    { Name: "Exeggcute", Time: "8d9h47m", Group: "Pokemon" },
                    { Name: "Hitmonlee", Time: "6d22h3m", Group: "Pokemon" },
                    { Name: "Rhyhorn", Time: "8d12h57m", Group: "Pokemon" },
                    { Name: "Lapras", Time: "8d22h59m", Group: "Pokemon" },
                    { Name: "Eevee", Time: "4d1h48m", Group: "Pokemon" },
                    { Name: "Flareon", Time: "4d14h16m", Group: "Pokemon" },
                    { Name: "Omanyte", Time: "11d10h36m", Group: "Pokemon" },
                    { Name: "Omastar", Time: "14d17h58m", Group: "Pokemon" },
                    { Name: "Zapdos", Time: "10d7h49m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Crystal",
                ColorPrimary: "#4f81bd",
                ColorSecondary: "#385d8a",
                //Duration: "13d 2h 2m",
                StartDate: "2014-03-02T12:00:00Z",
                Duration: "Mar 15 2014 8:58 PM GMT",
                HostName: "AJDNNW",
                HostImage: "img/hosts/ajdnnw.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                TPPOrgLink: "http://twitchplayspokemon.org/crystal",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/crystal-archive",
                LiveUpdaterArchive: "https://paste.ee/p/fmVbC",
                Region: "Johto",
                AdditionalRegions: [{ Name: "Kanto", Time: "10d 0h 56m" }],
                Events: [
                    {
                        Group: "Badges",
                        Name: "Zephyr Badge",
                        Image: "img/badges/zephyr.png",
                        Time: "0d 8h 5m 14s"
                    },
                    {
                        Group: "Badges",
                        Name: "Hive Badge",
                        Image: "img/badges/hive.png",
                        Time: "0d 20h 38m 0s"
                    },
                    {
                        Group: "Badges",
                        Name: "Plain Badge",
                        Image: "img/badges/plain.png",
                        Time: "1d 5h 54m 8s"
                    },
                    {
                        Group: "Badges",
                        Name: "Fog Badge",
                        Image: "img/badges/fog.png",
                        Time: "2d 14h 30m 3s"
                    },
                    {
                        Group: "Badges",
                        Name: "Glacier Badge",
                        Image: "img/badges/glacier.png",
                        Time: "4d 12h 18m 40s"
                    },
                    {
                        Group: "Badges",
                        Name: "Storm Badge",
                        Image: "img/badges/storm.png",
                        Time: "3d 5h 30m 45s"
                    },
                    {
                        Group: "Badges",
                        Name: "Mineral Badge",
                        Image: "img/badges/mineral.png",
                        Time: "3d 16h 3m 0s"
                    },
                    {
                        Group: "Badges",
                        Name: "Rising Badge",
                        Image: "img/badges/rising.png",
                        Time: "6d 23h 36m 0s"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Will",
                        Image: "img/trainers/crystal/will.png",
                        Time: "8d 6h 36m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Koga",
                        Image: "img/trainers/crystal/koga.png",
                        Time: "8d 11h 52m",
                        Attempts: 9
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/trainers/crystal/bruno.png",
                        Time: "8d 22h 31m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "Karen",
                        Image: "img/trainers/crystal/karen.png",
                        Time: "9d 14h 27m",
                        Attempts: 5
                    },
                    {
                        Group: "Champions",
                        Name: "Lance",
                        Image: "img/trainers/crystal/lance.png",
                        Time: "9d 21h 24m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "11d 16h 27m 28s"
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        Time: "11d 3h 21m 0s"
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        Time: "10d 4h 54m 0s"
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        Time: "10d 8h 13m 46s"
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        Time: "11d 10h 28m 31s"
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        Time: "10d 6h 19m 43s"
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        Time: "11d 19h 0m 0s"
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        Time: "11d 22h 24m 42s"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "RED",
                        Image: "img/hosts/red.png",
                        Time: "13d 2h 2m",
                        Attempts: 7
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "9d 21h 27m", IDNo: "47901", Attempts: 38, Party: [
                            { Pokemon: "Espeon", Nickname: "AAAS RJ-I", Level: 49, Gender: "Male", Number: 196, IDNo: "47901" },
                            { Pokemon: "Steelix", Nickname: "AAJRR RRR", Level: 48, Gender: "Male", Number: 208, IDNo: "47901" },
                            { Pokemon: "Raticate", Nickname: "A", Level: 37, Gender: "Male", Number: 20, IDNo: "47901" },
                            { Pokemon: "Feraligatr", Nickname: "AAAAAtttta", Level: 78, Gender: "Male", Number: 160, IDNo: "47901" },
                            { Pokemon: "Dragonair", Nickname: "KT", Level: 47, Gender: "Female", Number: 148, IDNo: "47901" },
                            { Pokemon: "Pidgeot", Nickname: "BBBBBD", Level: 62, Gender: "Male", Number: 18, IDNo: "47901" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "13d 5h 56m", IDNo: "47901", Attempts: 2, Party: [
                            { Pokemon: "Steelix", Nickname: "AAJRR RRR", Level: 73, Gender: "Male", Number: 208, IDNo: "47901" },
                            { Pokemon: "Dragonite", Nickname: "KT", Level: 63, Gender: "Female", Number: 149, IDNo: "47901" },
                            { Pokemon: "Espeon", Nickname: "AAAS RJ-I", Level: 54, Gender: "Male", Number: 196, IDNo: "47901" },
                            { Pokemon: "Feraligatr", Nickname: "AAAAAtttta", Level: 85, Gender: "Male", Number: 160, IDNo: "47901" },
                            { Pokemon: "Pidgeot", Nickname: "BBBBBD", Level: 64, Gender: "Male", Number: 18, IDNo: "47901" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Totodile", Time: "0d0h15m", Group: "Pokemon" },
                    { Name: "Croconaw", Time: "1d10h16m", Group: "Pokemon" },
                    { Name: "Feraligatr", Time: "2d0h23m", Group: "Pokemon" },
                    { Name: "Pidgey", Time: "0d4h58m", Group: "Pokemon" },
                    { Name: "Pidgeotto", Time: "3d22h53m", Group: "Pokemon" },
                    { Name: "Pidgeot", Time: "4d7h19m", Group: "Pokemon" },
                    { Name: "Hoothoot", Time: "1d16h9m", Group: "Pokemon" },
                    { Name: "Noctowl", Time: "7d17h51m", Group: "Pokemon" },
                    { Name: "Raticate", Time: "2d2h55m", Group: "Pokemon" },
                    { Name: "Sentret", Time: "0d5h22m", Group: "Pokemon" },
                    { Name: "Caterpie", Time: "0d5h34m", Group: "Pokemon" },
                    { Name: "Metapod", Time: "1d23h19m", Group: "Pokemon" },
                    { Name: "Graveler", Time: "7d20h15m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "2d3h54m", Group: "Pokemon" },
                    { Name: "Golbat", Time: "8d13h45m", Group: "Pokemon" },
                    { Name: "Egg", Time: "0d8h18m", Group: "Pokemon" },
                    { Name: "Togepi", Time: "0d12h10m", Group: "Pokemon" },
                    { Name: "Wooper", Time: "0d14h6m", Group: "Pokemon" },
                    { Name: "Onix", Time: "8d3h14m", Group: "Pokemon" },
                    { Name: "Steelix", Time: "9d16h29m", Group: "Pokemon" },
                    { Name: "Goldeen", Time: "7d2h52m", Group: "Pokemon" },
                    { Name: "Drowzee", Time: "1d16h42m", Group: "Pokemon" },
                    { Name: "Koffing", Time: "1d20h24m", Group: "Pokemon" },
                    { Name: "Smoochum", Time: "1d14h56m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "7d16h30m", Group: "Pokemon" },
                    { Name: "Shuckle", Time: "3d8h56m", Group: "Pokemon" },
                    { Name: "Eevee", Time: "1d17h24m", Group: "Pokemon" },
                    { Name: "Espeon", Time: "6d0h54m", Group: "Pokemon" },
                    { Name: "Doduo", Time: "8d2h53m", Group: "Pokemon" },
                    { Name: "Ponyta", Time: "8d1h58m", Group: "Pokemon" },
                    { Name: "Dratini", Time: "6d23h39m", Group: "Pokemon" },
                    { Name: "Dragonair", Time: "8d0h13m", Group: "Pokemon" },
                    { Name: "Dragonite", Time: "11d8h27m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Emerald",
                ColorPrimary: "#9bbb59",
                ColorSecondary: "#71893f",
                Duration: "20d 21h 56m",
                StartDate: "2014-03-22T01:00:00Z",
                EndDate: "Apr 11 2014 11:02 PM GMT",
                HostName: "A",
                HostImage: "img/hosts/a.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                TPPOrgLink: "http://twitchplayspokemon.org/emerald",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/emerald-archive",
                LiveUpdaterArchive: "https://paste.ee/p/mVTkx",
                Region: "Hoenn",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Stone Badge",
                        Image: "img/badges/stone.png",
                        Time: "1d 5h 42m",
                        Attempts: 9
                    },
                    {
                        Group: "Badges",
                        Name: "Knuckle Badge",
                        Image: "img/badges/knuckle.png",
                        Time: "1d 18h 49m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Dynamo Badge",
                        Image: "img/badges/dynamo.png",
                        Time: "4d 8h 31m",
                        Attempts: 23
                    },
                    {
                        Group: "Badges",
                        Name: "Heat Badge",
                        Image: "img/badges/heat.png",
                        Time: "5d 16h 39m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Balance Badge",
                        Image: "img/badges/balance.png",
                        Time: "5d 21h 57m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Feather Badge",
                        Image: "img/badges/feather.png",
                        Time: "8d 10h 25m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Mind Badge",
                        Image: "img/badges/mind.png",
                        Time: "11d 15h 43m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Rain Badge",
                        Image: "img/badges/rain.png",
                        Time: "14d 2h 22m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Sidney",
                        Image: "img/trainers/emerald/sidney.png",
                        Time: "14d 15h 8m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Phoebe",
                        Image: "img/trainers/emerald/phoebe.png",
                        Time: "14d 15h 22m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Glacia",
                        Image: "img/trainers/emerald/glacia.png",
                        Time: "15d 0h 50m",
                        Attempts: 5
                    },
                    {
                        Group: "Elite Four",
                        Name: "Drake",
                        Image: "img/trainers/emerald/drake.png",
                        Time: "17d 7h 39m",
                        Attempts: 19
                    },
                    {
                        Group: "Champions",
                        Name: "Wallace",
                        Image: "img/trainers/emerald/wallace.png",
                        Time: "20d 21h 56m 0s",
                        Attempts: 21
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "20d 21h 58m", IDNo: "61415", Attempts: 103, Party: [
                            { Pokemon: "Hariyama", Nickname: "A♀NIIIIc33", Level: 79, Gender: "Female", Number: 49, IDNo: "61415" },
                            { Pokemon: "Mightyena ", Level: 50, Gender: "Male", Number: 11, IDNo: "61415" },
                            { Pokemon: "Vileplume", Level: 49, Gender: "Female", Number: 90, IDNo: "61415" },
                            { Pokemon: "Graveler", Nickname: "-5\"\"7\"Y", Level: 68, Gender: "Female", Number: 58, IDNo: "61415" },
                            { Pokemon: "Tentacruel", Nickname: "GJKLFFZ", Level: 80, Gender: "Female", Number: 67, IDNo: "61415" },
                            { Pokemon: "Azumarill", Nickname: "M ---/'/'4", Level: 100, Gender: "Female", Number: 56, IDNo: "61415" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Torchic", Time: "2014-03-22T02:19:00Z", Group: "Pokemon" },
                    { Name: "Poochyena", Time: "0d 8h 2m", Group: "Pokemon" },
                    { Name: "Mightyena", Time: "10d 22h 22m", Group: "Pokemon" },
                    { Name: "Zigzagoon", Time: "8d 1h 15m", Group: "Pokemon" },
                    { Name: "Wurmple", Time: "1d 10h 49m", Group: "Pokemon" },
                    { Name: "Taillow", Time: "1d 7h 31m", Group: "Pokemon" },
                    { Name: "Wingull", Time: "4d 5h 47m", Group: "Pokemon" },
                    { Name: "Abra", Time: "0d 8h 0m", Group: "Pokemon" },
                    { Name: "Kadabra", Time: "5d 9h 29m", Group: "Pokemon" },
                    { Name: "Nincada", Time: "0d 7h 59m", Group: "Pokemon" },
                    { Name: "Ninjask", Time: "3d 19h 56m", Group: "Pokemon" },
                    { Name: "Shedinja", Time: "3d 19h 58m", Group: "Pokemon" },
                    { Name: "Hariyama", Time: "15d 1h 20m", Group: "Pokemon" },
                    { Name: "Marill", Time: "0d 22h 3m", Group: "Pokemon" },
                    { Name: "Azumarill", Time: "2d 11h 12m", Group: "Pokemon" },
                    { Name: "Geodude", Time: "6d 20h 38m", Group: "Pokemon" },
                    { Name: "Graveler", Time: "8d 6h 46m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "5d 6h 50m", Group: "Pokemon" },
                    { Name: "Golbat", Time: "19d 5h 5m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "7d 14h 7m", Group: "Pokemon" },
                    { Name: "Tentacruel", Time: "13d 5h 41m", Group: "Pokemon" },
                    { Name: "Electrike", Time: "6d 2h 13m", Group: "Pokemon" },
                    { Name: "Minun", Time: "6d 17h 14m", Group: "Pokemon" },
                    { Name: "Oddish", Time: "4d 5h 46m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "8d 20h 20m", Group: "Pokemon" },
                    { Name: "Vileplume", Time: "13d 5h 47m", Group: "Pokemon" },
                    { Name: "Doduo", Time: "8d 19h 51m", Group: "Pokemon" },
                    { Name: "Torkoal", Time: "5d 9h 36m", Group: "Pokemon" },
                    { Name: "Sandshrew", Time: "6d 4h 58m", Group: "Pokemon" },
                    { Name: "Spinda", Time: "5d 8h 37m", Group: "Pokemon" },
                    { Name: "Trapinch", Time: "6d 4h 50m", Group: "Pokemon" },
                    { Name: "Cacnea", Time: "6d 15h 8m", Group: "Pokemon" },
                    { Name: "Seviper", Time: "5d 5h 38m", Group: "Pokemon" },
                    { Name: "Baltoy", Time: "6d 15h 3m", Group: "Pokemon" },
                    { Name: "Castform", Time: "8d 2h 37m", Group: "Pokemon" },
                    { Name: "Shuppet", Time: "10d 22h 49m", Group: "Pokemon" },
                    { Name: "Pikachu", Time: "8d 20h 37m", Group: "Pokemon" },
                    { Name: "Wobbuffet", Time: "8d 20h 42m", Group: "Pokemon" },
                    { Name: "Natu", Time: "8d 20h 16m", Group: "Pokemon" },
                    { Name: "Girafarig", Time: "8d 19h 31m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Randomized FireRed",
                ColorPrimary: "#ff7e1b",
                ColorSecondary: "#8b5325",
                Duration: "15d 2h 2m",
                StartDate: "2014-04-12T02:00:00Z",
                EndDate: "Apr 27 2014 4:10 AM GMT",
                HostName: "A",
                HostImage: "img/hosts/a2.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Kanto",
                TPPOrgLink: "http://twitchplayspokemon.org/firered",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/firered-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Cocoon (Boulder) Badge",
                        Image: "img/randomized/firered/cocoon.png",
                        Time: "0d 19h 44m",
                        Attempts: 2,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/2318l8/i_decided_to_try_and_make_custom_badges_to_fit/"
                    },
                    {
                        Group: "Badges",
                        Name: "Chemical (Cascade) Badge",
                        Image: "img/randomized/firered/chemical.png",
                        Time: "1d 16h 1m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/2318l8/i_decided_to_try_and_make_custom_badges_to_fit/"
                    },
                    {
                        Group: "Badges",
                        Name: "Shale (Thunder) Badge",
                        Image: "img/randomized/firered/shale.png",
                        Time: "2d 12h 12m",
                        Attempts: 4,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/2318l8/i_decided_to_try_and_make_custom_badges_to_fit/"
                    },
                    {
                        Group: "Badges",
                        Name: "Snowflake (Rainbow) Badge",
                        Image: "img/randomized/firered/snowflake.png",
                        Time: "6d 15h 12m",
                        Attempts: 2,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23d9sj/snow_princess_erica_and_snowflake_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Seraphim (Soul) Badge",
                        Image: "img/randomized/firered/seraphim.png",
                        Time: "10d 4h 50m",
                        Attempts: 7,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23lect/flying_type_koga_and_seraphim_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Target (Marsh) Badge",
                        Image: "img/randomized/firered/target.png",
                        Time: "8d 12h 37m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23irff/sabrinas_new_badge_the_target_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Fossil (Volcano) Badge",
                        Image: "img/randomized/firered/fossil.png",
                        Time: "11d 4h 1m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23qqwb/rocktype_blaines_badge_the_fossil_badge_name/?ref=search_posts"
                    },
                    {
                        Group: "Badges",
                        Name: "Discipline (Earth) Badge",
                        Image: "img/randomized/firered/impact.png",
                        Time: "11d 13h 39m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23rzlb/and_heres_a_possible_design_for_giovannis_badge/"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lorelei",
                        Image: "img/randomized/firered/lorelei.png",
                        Time: "14d 21h 10m",
                        Attempts: 2,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/randomized/firered/bruno.png",
                        Time: "14d 21h 15m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Agatha",
                        Image: "img/randomized/firered/agatha.png",
                        Time: "14d 21h 21m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lance",
                        Image: "img/randomized/firered/lance.png",
                        Time: "15d 0h 31m",
                        Attempts: 4,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/"
                    },
                    {
                        Group: "Champions",
                        Name: "Green",
                        Image: "img/trainers/firered/green.png",
                        Time: "15d 2h 1m",
                        Attempts: 3
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "15d 2h 3m", IDNo: "56171", Attempts: 8, Party: [
                            { Pokemon: "Altaria", Level: 54, Gender: "Female", Number: 334, IDNo: "56171" },
                            { Pokemon: "Mew", Nickname: "MARC", Level: 57, Number: 151, IDNo: "01239" },
                            { Pokemon: "Masquerain", Nickname: "AATUUUUNN", Level: 58, Gender: "Male", Number: 284, IDNo: "56171" },
                            { Pokemon: "Blastoise", Nickname: "TTABCIJIJD", Level: 60, Gender: "Male", Number: 9, IDNo: "56171" },
                            { Pokemon: "Sandslash", Level: 63, Gender: "Female", Number: 28, IDNo: "56171" },
                            { Pokemon: "Slaking", Nickname: "CCCDJCCCC5", Level: 66, Gender: "Male", Number: 289, IDNo: "56171" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Charizard", Time: "10d 16h 9m", Group: "Pokemon" },
                    { Name: "Squirtle", Time: "1d 23h 20m", Group: "Pokemon" },
                    { Name: "Wartortle", Time: "7d 1h 57m", Group: "Pokemon" },
                    { Name: "Blastoise", Time: "10d 8h 43m", Group: "Pokemon" },
                    { Name: "Metapod", Time: "6d 5h 55m", Group: "Pokemon" },
                    { Name: "Pidgey", Time: "0d 3h 39m", Group: "Pokemon" },
                    { Name: "Rattata", Time: "2d 13h 40m", Group: "Pokemon" },
                    { Name: "Pikachu", Time: "2d 13h 37m", Group: "Pokemon" },
                    { Name: "Sandslash", Time: "0d 21h 37m", Group: "Pokemon" },
                    { Name: "NidoranF", Time: "0d 3h 35m", Group: "Pokemon" },
                    { Name: "NidoranM", Time: "9d 5h 35m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "9d 1h 4m", Group: "Pokemon" },
                    { Name: "Mankey", Time: "7d 0h 14m", Group: "Pokemon" },
                    { Name: "Poliwag", Time: "9d 1h 10m", Group: "Pokemon" },
                    { Name: "Machop", Time: "0d 0h 4m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "9d 1h 0m", Group: "Pokemon" },
                    { Name: "Ponyta", Time: "9d 15h 36m", Group: "Pokemon" },
                    { Name: "Seel", Time: "9d 0h 43m", Group: "Pokemon" },
                    { Name: "Marowak", Time: "8d 4h 59m", Group: "Pokemon" },
                    { Name: "Koffing", Time: "8d 15h 10m", Group: "Pokemon" },
                    { Name: "Rhyhorn", Time: "9d 1h 21m", Group: "Pokemon" },
                    { Name: "Eevee", Time: "6d 23h 12m", Group: "Pokemon" },
                    { Name: "Mew", Time: "9d 8h 15m", Group: "Pokemon" },
                    { Name: "Ledyba", Time: "14d 6h 51m", Group: "Pokemon" },
                    { Name: "Ariados", Time: "10d 16h 2m", Group: "Pokemon" },
                    { Name: "Togepi", Time: "8d 6h 38m", Group: "Pokemon" },
                    { Name: "Marill", Time: "0d 2h 1m", Group: "Pokemon" },
                    { Name: "Hoppip", Time: "6d 16h 45m", Group: "Pokemon" },
                    { Name: "Jumpluff", Time: "7d 20h 57m", Group: "Pokemon" },
                    { Name: "Wooper", Time: "1d 16h 47m", Group: "Pokemon" },
                    { Name: "Quagsire", Time: "7d 11h 52m", Group: "Pokemon" },
                    { Name: "Slugma", Time: "0d 2h 5m", Group: "Pokemon" },
                    { Name: "Corsola", Time: "11d 3h 17m", Group: "Pokemon" },
                    { Name: "Larvitar", Time: "9d 2h 36m", Group: "Pokemon" },
                    { Name: "Treecko", Time: "7d 15h 51m", Group: "Pokemon" },
                    { Name: "Torchic", Time: "7d 15h 46m", Group: "Pokemon" },
                    { Name: "Zigzagoon", Time: "0d 2h 18m", Group: "Pokemon" },
                    { Name: "Wingull", Time: "2d 13h 39m", Group: "Pokemon" },
                    { Name: "Kirlia", Time: "0d 3h 40m", Group: "Pokemon" },
                    { Name: "Surskit", Time: "0d 1h 29m", Group: "Pokemon" },
                    { Name: "Masquerain", Time: "4d 7h 45m", Group: "Pokemon" },
                    { Name: "Slakoth", Time: "8d 6h 36m", Group: "Pokemon" },
                    { Name: "Vigoroth", Time: "8d 17h 37m", Group: "Pokemon" },
                    { Name: "Slaking", Time: "11d 1h 20m", Group: "Pokemon" },
                    { Name: "Nincada", Time: "1d 21h 59m", Group: "Pokemon" },
                    { Name: "Skitty", Time: "0d 2h 8m", Group: "Pokemon" },
                    { Name: "Aron", Time: "9d 5h 29m", Group: "Pokemon" },
                    { Name: "Electrike", Time: "8d 6h 4m", Group: "Pokemon" },
                    { Name: "Carvanha", Time: "9d 1h 20m", Group: "Pokemon" },
                    { Name: "Torkoal", Time: "11d 19h 52m", Group: "Pokemon" },
                    { Name: "Cacnea", Time: "2d 13h 31m", Group: "Pokemon" },
                    { Name: "Swablu", Time: "4d 8h 47m", Group: "Pokemon" },
                    { Name: "Altaria", Time: "10d 17h 14m", Group: "Pokemon" },
                    { Name: "Lileep", Time: "9d 0h 53m", Group: "Pokemon" },
                    { Name: "Shuppet", Time: "9d 0h 57m", Group: "Pokemon" },
                    { Name: "Glalie", Time: "7d 13h 13m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Platinum",
                ColorPrimary: "#a6a6a6",
                ColorSecondary: "#404040",
                Duration: "17d 12h 8m",
                StartDate: "2014-05-03T04:00:00Z",
                HostName: "nqpppnl",
                HostImage: "img/hosts/nqpppnl.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Sinnoh",
                TPPOrgLink: "http://twitchplayspokemon.org/platinum",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/platinum-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Coal Badge",
                        Image: "img/badges/coal.png",
                        Time: "0d 23h 8m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Forest Badge",
                        Image: "img/badges/forest.png",
                        Time: "1d 22h 44m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Cobble Badge",
                        Image: "img/badges/cobble.png",
                        Time: "5d 16h 15m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Fen Badge",
                        Image: "img/badges/fen.png",
                        Time: "7d 6h 34m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Relic Badge",
                        Image: "img/badges/relic.png",
                        Time: "3d 17h 50m",
                        Attempts: 6
                    },
                    {
                        Group: "Badges",
                        Name: "Mine Badge",
                        Image: "img/badges/mine.png",
                        Time: "9d 8h 47m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Icicle Badge",
                        Image: "img/badges/icicle.png",
                        Time: "10d 22h 58m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Beacon Badge",
                        Image: "img/badges/beacon.png",
                        Time: "15d 12h 57m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Aaron",
                        Image: "img/trainers/platinum/aaron.png",
                        Time: "16d 3h 39m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bertha",
                        Image: "img/trainers/platinum/bertha.png",
                        Time: "16d 3h 49m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Flint",
                        Image: "img/trainers/platinum/flint.png",
                        Time: "16d 16h 50m",
                        Attempts: 10
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lucian",
                        Image: "img/trainers/platinum/lucian.png",
                        Time: "17d 1h 21m",
                        Attempts: 4
                    },
                    {
                        Group: "Champions",
                        Name: "Cynthia",
                        Image: "img/trainers/platinum/cynthia.png",
                        Time: "17d 11h 38m 42s",
                        Attempts: 13
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "17d 11h 40m", IDNo: "12339", Attempts: 49, Party: [
                            { Pokemon: "Shinx", Nickname: "0”☀ ☀0☀☺ ☹", Level: 63, Gender: "Female", Met: "Route 203", OT: "nqpppnl" },
                            { Pokemon: "Bibarel", Nickname: "00  00 06", Level: 93, Gender: "Female", Met: "Route 209", OT: "nqpppnl" },
                            { Pokemon: "Flareon", Level: 97, Gender: "Male", Met: "Hearthome City", OT: "nqpppnl" },
                            { Pokemon: "Golbat", Level: 60, Gender: "Male", Met: "Mt. Coronet", OT: "nqpppnl" },
                            { Pokemon: "Bronzong", Level: 54, Met: "Mt. Coronet", OT: "nqpppnl" },
                            { Pokemon: "Roserade", Nickname: "!☂!!☀! !:1", Level: 71, Gender: "Male", Met: "Route 204", OT: "nqpppnl" },
                        ],
                        Image: "img/ribbons/champion-sinnoh.png"
                    },
                    { Name: "Zubat", Time: "0d 3h 38m", Group: "Pokemon" },
                    { Name: "Golbat", Time: "4d 9h 49m", Group: "Pokemon" },
                    { Name: "Psyduck", Time: "8d 19h 40m", Group: "Pokemon" },
                    { Name: "Abra", Time: "12d 20h 34m", Group: "Pokemon" },
                    { Name: "Machop", Time: "11d 0h 49m", Group: "Pokemon" },
                    { Name: "Machoke", Time: "11d 17h 8m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "12d 22h 02m", Group: "Pokemon" },
                    { Name: "Tentacruel", Time: "13d 02h 21m", Group: "Pokemon" },
                    { Name: "Geodude", Time: "11d 0h 54m", Group: "Pokemon" },
                    { Name: "Graveler", Time: "8d 23h 49m", Group: "Pokemon" },
                    { Name: "Ponyta", Time: "12d 7h 15m", Group: "Pokemon" },
                    { Name: "Magneton", Time: "15d 18h 59m", Group: "Pokemon" },
                    { Name: "Gastly", Time: "2d 5h 26m ", Group: "Pokemon" },
                    { Name: "Onix", Time: "15d 16h 45m", Group: "Pokemon" },
                    { Name: "Rhyhorn", Time: "15d 5h 40m ", Group: "Pokemon" },
                    { Name: "Scyther", Time: "12d 18h 2m", Group: "Pokemon" },
                    { Name: "Eevee", Time: "3d 23h 16m", Group: "Pokemon" },
                    { Name: "Flareon", Time: "4d 1h 52m", Group: "Pokemon" },
                    { Name: "Hoothoot", Time: "6d 6h 12m ", Group: "Pokemon" },
                    { Name: "Noctowl", Time: "6d 3h 31m", Group: "Pokemon" },
                    { Name: "Egg", Time: "3d 5h 17m", Group: "Pokemon" },
                    { Name: "Togepi", Time: "3d 8h 11m ", Group: "Pokemon" },
                    { Name: "Marill", Time: "15d 5h 6m", Group: "Pokemon" },
                    { Name: "Yanma", Time: "6d 5h 26m", Group: "Pokemon" },
                    { Name: "Wooper", Time: "5d 8h 39m", Group: "Pokemon" },
                    { Name: "Quagsire", Time: "5d 8h 43m", Group: "Pokemon" },
                    { Name: "Steelix", Time: "15d 21h 20m", Group: "Pokemon" },
                    { Name: "Swinub", Time: "10d 19h 13m", Group: "Pokemon" },
                    { Name: "Houndour", Time: "12d 21h 36m", Group: "Pokemon" },
                    { Name: "Wurmple", Time: "2d 19h 7m", Group: "Pokemon" },
                    { Name: "Cascoon", Time: "2d 15h 14m", Group: "Pokemon" },
                    { Name: "Wingull", Time: "12d 22h 15m", Group: "Pokemon" },
                    { Name: "Nosepass", Time: "11d 17h 39m", Group: "Pokemon" },
                    { Name: "Meditite", Time: "2d 3h 47m", Group: "Pokemon" },
                    { Name: "Roselia", Time: "3d 17h 36m", Group: "Pokemon" },
                    { Name: "Tropius", Time: "5d 8h 52m", Group: "Pokemon" },
                    { Name: "Chimchar", Time: "0d 0h 34m", Group: "Pokemon" },
                    { Name: "Starly", Time: "0d 1h 25m", Group: "Pokemon" },
                    { Name: "Staravia", Time: "11d 0h 56m", Group: "Pokemon" },
                    { Name: "Bidoof", Time: "0d 1h 27m", Group: "Pokemon" },
                    { Name: "Bibarel", Time: "5d 8h 36m", Group: "Pokemon" },
                    { Name: "Kricketot", Time: "0d 1h 45m", Group: "Pokemon" },
                    { Name: "Shinx", Time: "0d 1h 43m", Group: "Pokemon" },
                    { Name: "Budew", Time: "0d 3h 6m ", Group: "Pokemon" },
                    { Name: "Roserade", Time: "9d 7h 12m", Group: "Pokemon" },
                    { Name: "Buizel", Time: "9d 19h 47m", Group: "Pokemon" },
                    { Name: "Shellos", Time: "9d 22h 31m", Group: "Pokemon" },
                    { Name: "Buneary", Time: "2d 16h 4m", Group: "Pokemon" },
                    { Name: "Chingling", Time: "2d 3h 39m", Group: "Pokemon" },
                    { Name: "Bronzor", Time: "2d 3h 24m", Group: "Pokemon" },
                    { Name: "Bronzong", Time: "9d 23h 16m", Group: "Pokemon" },
                    { Name: "Croagunk", Time: "6d 8h 42m", Group: "Pokemon" },
                    { Name: "Carnivine", Time: "9d 15h 31m", Group: "Pokemon" },
                    { Name: "Clefairy", Time: "12d 8h 13m", Group: "Pokemon" },
                    { Name: "Sneasel", Time: "12d 08h 33m", Group: "Pokemon" },
                    { Name: "Swablu", Time: "12d 7h 32m", Group: "Pokemon" },
                    { Name: "Snover", Time: "12d 8h 21m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Randomized HeartGold",
                ColorPrimary: "#ffbc1b",
                ColorSecondary: "#94541c",
                Duration: "18d 20h 33m",
                StartDate: "2014-05-24T04:00:00Z",
                HostName: "aoooo",
                HostImage: "img/hosts/aoooo.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Johto",
                AdditionalRegions: [{ Name: "Kanto", Time: "11d 15h 9m" }],
                TPPOrgLink: "http://twitchplayspokemon.org/heartgold",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/heartgold-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Jet (Zephyr) Badge",
                        Image: "img/randomized/heartgold/jet.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26e3fo/jet_badge_design_idea/",
                        Time: "0d 14h 23m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Powers (Hive) Badge",
                        Image: "img/randomized/heartgold/powers.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26h4hi/the_new_badges_i_made_for_the_side_bar_d/",
                        Time: "1d 7h 24m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Magnetic (Plain) Badge",
                        Image: "img/randomized/heartgold/magnetic.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26h4hi/the_new_badges_i_made_for_the_side_bar_d/",
                        Time: "1d 16h 34m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Rock (Fog) Badge",
                        Image: "img/randomized/heartgold/rock.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26mv9h/the_rock_badge/",
                        Time: "3d 10h 25m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Sabselkrow (Glacier) Badge",
                        Image: "img/randomized/heartgold/glacier.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "4d 9h 45m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Hitcross (Storm) Badge",
                        Image: "img/randomized/heartgold/storm.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "4d 14h 33m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Mythical (Mineral) Badge",
                        Image: "img/randomized/heartgold/mythical.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26qu89/mythical_badge/",
                        Time: "5d 4h 9m",
                        Attempts: 6
                    },
                    {
                        Group: "Badges",
                        Name: "Thief (Rising) Badge",
                        Image: "img/randomized/heartgold/thief.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/26wvte/the_thief_badge/",
                        Time: "6d 19h 40m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "Will",
                        Image: "img/randomized/heartgold/will.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/272tjl/archeologists_and_diggers_have_already_been_done/",
                        Time: "8d 21h 53m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Koga",
                        Image: "img/randomized/heartgold/koga.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/272wf0/couldnt_think_of_what_a_psychic_type_koga_would/",
                        Time: "11d 3h 58m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/randomized/heartgold/bruno.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27cgk2/so_before_i_forget_here_are_bruno_and_karens/",
                        Time: "11d 4h 2m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Karen",
                        Image: "img/randomized/heartgold/karen.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27cgk2/so_before_i_forget_here_are_bruno_and_karens/",
                        Time: "11d 8h 16m"
                    },
                    {
                        Group: "Champions",
                        Name: "Lance",
                        Image: "img/randomized/heartgold/lance.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27iqep/displaying_them_all_in_one_go_all_sprites_for_gym/",
                        Time: "11d 9h 9m"
                    },
                    {
                        Group: "Badges",
                        Name: "Glacier (Boulder) Badge",
                        Image: "img/randomized/heartgold/boulder.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "13d 0h 2m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Fire (Cascade) Badge",
                        Image: "img/randomized/heartgold/cascade.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "12d 17h 54m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Collector (Thunder) Badge",
                        Image: "img/randomized/heartgold/collector.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27d3fu/the_collector_badge/",
                        Time: "12d 2h 3m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Spark (Rainbow) Badge",
                        Image: "img/randomized/heartgold/rainbow.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "12d 7h 33m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Leaf (Soul) Badge",
                        Image: "img/randomized/heartgold/soul.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "12d 9h 19m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Harmony (Marsh) Badge",
                        Image: "img/randomized/heartgold/harmony.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/23iywq/sabrinas_harmony_badge/",
                        Time: "12d 4h 40m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Poison (Volcano) Badge",
                        Image: "img/randomized/heartgold/volcano.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "13d 4h 41m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Multi-Type (Earth) Badge",
                        Image: "img/randomized/heartgold/earth.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xjd8u/randomized_heartgold_custom_badge_artwork_anyone/cy58xhp",
                        Time: "14d 9h 23m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Will",
                        Image: "img/randomized/heartgold/rematch/will.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/272tjl/archeologists_and_diggers_have_already_been_done/",
                        Time: "15d 6h 33m",
                        Attempts: 4
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Koga",
                        Image: "img/randomized/heartgold/rematch/koga.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/272wf0/couldnt_think_of_what_a_psychic_type_koga_would/",
                        Time: "15d 12h 15m",
                        Attempts: 4
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Bruno",
                        Image: "img/randomized/heartgold/rematch/bruno.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27cgk2/so_before_i_forget_here_are_bruno_and_karens/",
                        Time: "15d 14h 46m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Karen",
                        Image: "img/randomized/heartgold/rematch/karen.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27cgk2/so_before_i_forget_here_are_bruno_and_karens/",
                        Time: "15d 18h 56m",
                        Attempts: 8
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Lance",
                        Image: "img/randomized/heartgold/rematch/lance.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/27iqep/displaying_them_all_in_one_go_all_sprites_for_gym/",
                        Time: "16d 11h 56m",
                        Attempts: 5
                    },
                    {
                        Group: "Past Hosts",
                        Name: "A",
                        Image: "img/hosts/a2.png",
                        Time: "18d 20h 33m",
                        Attempts: 5
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "11d 9h 10m", IDNo: "28412", Attempts: 26, Party: [
                            { Pokemon: "Sudowoodo", Nickname: "A", Level: 63, Gender: "Male", Met: "Mt. Mortar", OT: "aoooo" },
                            { Pokemon: "Cranidos", Nickname: "6 ♢'j", Level: 37, Gender: "Male", Met: "Route 36", OT: "aoooo" },
                            { Pokemon: "Bastiodon", Level: 57, Gender: "Male", Met: "Victory Road", OT: "aoooo" },
                            { Pokemon: "Vibrava", Nickname: ",", Level: 65, Gender: "Female", Met: "New Bark Town", OT: "aoooo" },
                            { Pokemon: "Xatu", Nickname: "xrr♂ ♢ ", Level: 67, Gender: "Female", Shiny: true, Met: "Lake of Rage", OT: "aoooo" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "16d 11h 57m", IDNo: "28412", Attempts: 34, Party: [
                            { Pokemon: "Cranidos", Nickname: "6 ♢'j", Level: 48, Gender: "Male", Met: "Route 36", OT: "aoooo" },
                            { Pokemon: "Omastar", Level: 92, Gender: "Male", Met: "Vermilion City", OT: "aoooo" },
                            { Pokemon: "Bastiodon", Level: 78, Gender: "Male", Met: "Victory Road", OT: "aoooo" },
                            { Pokemon: "Vibrava", Nickname: ",", Level: 82, Gender: "Female", Met: "New Bark Town", OT: "aoooo" },
                            { Pokemon: "Xatu", Nickname: "xrr♂ ♢ ", Level: 93, Gender: "Female", Shiny: true, Met: "Lake of Rage", OT: "aoooo" },
                            { Pokemon: "Sudowoodo", Nickname: "A", Level: 76, Gender: "Male", Met: "Mt. Mortar", OT: "aoooo" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Caterpie", Time: "13d 14h 38m", Group: "Pokemon" },
                    { Name: "Weedle", Time: "10d 13h 35m", Group: "Pokemon" },
                    { Name: "Beedrill", Time: "14d 14h 3m", Group: "Pokemon" },
                    { Name: "Pidgey", Time: "12d 14h 49m", Group: "Pokemon" },
                    { Name: "Pidgeot", Time: "13d 19h 26m", Group: "Pokemon" },
                    { Name: "Rattata", Time: "14d 16h 21m", Group: "Pokemon" },
                    { Name: "Raticate", Time: "8d 19h 54m", Group: "Pokemon" },
                    { Name: "Ekans", Time: "4d 21h 46m", Group: "Pokemon" },
                    { Name: "Arbok", Time: "14d 12h 30m", Group: "Pokemon" },
                    { Name: "Sandslash", Time: "6d 21h 18m", Group: "Pokemon" },
                    { Name: "Nidoqueen", Time: "16d 22h 58m", Group: "Pokemon" },
                    { Name: "NidoranM", Time: "12d 21h 19m", Group: "Pokemon" },
                    { Name: "Clefairy", Time: "13d 3h 37m", Group: "Pokemon" },
                    { Name: "Vulpix", Time: "2d 17h 27m", Group: "Pokemon" },
                    { Name: "Jigglypuff", Time: "0d 2h 8m", Group: "Pokemon" },
                    { Name: "Wigglytuff", Time: "13d 15h 25m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "12d 13h 58m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "1d 22h 9m", Group: "Pokemon" },
                    { Name: "Paras", Time: "12d 13h 31m", Group: "Pokemon" },
                    { Name: "Diglett", Time: "0d 5h 9m", Group: "Pokemon" },
                    { Name: "Poliwag", Time: "12d 13h 39m", Group: "Pokemon" },
                    { Name: "Poliwhirl", Time: "3d 11h 38m", Group: "Pokemon" },
                    { Name: "Abra", Time: "13d 23h 50m", Group: "Pokemon" },
                    { Name: "Kadabra", Time: "13d 15h 23m", Group: "Pokemon" },
                    { Name: "Alakazam", Time: "16d 17h 51m", Group: "Pokemon" },
                    { Name: "Victreebel", Time: "16d 18h 17m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "16d 18h 8m", Group: "Pokemon" },
                    { Name: "Geodude", Time: "4d 21h 57m", Group: "Pokemon" },
                    { Name: "Graveler", Time: "13d 16h 24m", Group: "Pokemon" },
                    { Name: "Slowpoke", Time: "8d 23h 27m", Group: "Pokemon" },
                    { Name: "Magneton", Time: "16d 18h 15m", Group: "Pokemon" },
                    { Name: "Seel", Time: "2d 3h 32m", Group: "Pokemon" },
                    { Name: "Gastly", Time: "12d 12h 44m", Group: "Pokemon" },
                    { Name: "Krabby", Time: "12d 12h 49m", Group: "Pokemon" },
                    { Name: "Voltorb", Time: "12d 13h 8m", Group: "Pokemon" },
                    { Name: "Exeggcute", Time: "14d 15h 20m", Group: "Pokemon" },
                    { Name: "Cubone", Time: "13d 15h 16m", Group: "Pokemon" },
                    { Name: "Koffing", Time: "4d 21h 52m", Group: "Pokemon" },
                    { Name: "Seadra", Time: "16d 21h 46m", Group: "Pokemon" },
                    { Name: "Goldeen", Time: "12d 12h 15m", Group: "Pokemon" },
                    { Name: "Scyther", Time: "14d 23h 8m", Group: "Pokemon" },
                    { Name: "Pinsir", Time: "7d 23h 44m", Group: "Pokemon" },
                    { Name: "Porygon", Time: "16d 21h 6m", Group: "Pokemon" },
                    { Name: "Omastar", Time: "11d 17h 56m", Group: "Pokemon" },
                    { Name: "Dratini", Time: "14d 5h 3m", Group: "Pokemon" },
                    { Name: "Meganium", Time: "11d 18h 29m", Group: "Pokemon" },
                    { Name: "Quilava", Time: "13d 19h 24m", Group: "Pokemon" },
                    { Name: "Totodile", Time: "13d 4h 5m", Group: "Pokemon" },
                    { Name: "Noctowl", Time: "4d 12h 26m", Group: "Pokemon" },
                    { Name: "Ledyba", Time: "12d 21h 16m", Group: "Pokemon" },
                    { Name: "Spinarak", Time: "14d 2h 2m", Group: "Pokemon" },
                    { Name: "Ariados", Time: "8d 19h 43m", Group: "Pokemon" },
                    { Name: "Chinchou", Time: "13d 15h 11m", Group: "Pokemon" },
                    { Name: "Togepi", Time: "8d 3h 38m", Group: "Pokemon" },
                    { Name: "Natu", Time: "12d 14h 3m", Group: "Pokemon" },
                    { Name: "Xatu", Time: "4d 3h 12m", Group: "Pokemon" },
                    { Name: "Flaaffy", Time: "8d 21h 32m", Group: "Pokemon" },
                    { Name: "Sudowoodo", Time: "3d 22h 32m", Group: "Pokemon" },
                    { Name: "Hoppip", Time: "11d 23h 48m", Group: "Pokemon" },
                    { Name: "Sunflora", Time: "8d 23h 43m", Group: "Pokemon" },
                    { Name: "Misdreavus", Time: "2d 3h 27m", Group: "Pokemon" },
                    { Name: "Granbull", Time: "16d 20h 0m", Group: "Pokemon" },
                    { Name: "Shuckle", Time: "8d 21h 55m", Group: "Pokemon" },
                    { Name: "Teddiursa", Time: "13d 19h 19m", Group: "Pokemon" },
                    { Name: "Swinub", Time: "12d 12h 55m", Group: "Pokemon" },
                    { Name: "Smeargle", Time: "8d 3h 1m", Group: "Pokemon" },
                    { Name: "Egg", Time: "0d 14h 49m", Group: "Pokemon" },
                    { Name: "Smoochum", Time: "0d 18h 51m", Group: "Pokemon" },
                    { Name: "Larvitar", Time: "3d 11h 35m", Group: "Pokemon" },
                    { Name: "Mudkip", Time: "8d 3h 23m", Group: "Pokemon" },
                    { Name: "Linoone", Time: "10d 17h 34m", Group: "Pokemon" },
                    { Name: "Seedot", Time: "7d 9h 11m", Group: "Pokemon" },
                    { Name: "Kirlia", Time: "12d 13h 33m", Group: "Pokemon" },
                    { Name: "Gardevoir", Time: "16d 17h 37m", Group: "Pokemon" },
                    { Name: "Vigoroth", Time: "14d 13h 19m", Group: "Pokemon" },
                    { Name: "Nincada", Time: "13d 11h 11m", Group: "Pokemon" },
                    { Name: "Ninjask", Time: "14d 14h 24m", Group: "Pokemon" },
                    { Name: "Whismur", Time: "15h 16m 15m", Group: "Pokemon" },
                    { Name: "Loudred", Time: "11d 18h 5m", Group: "Pokemon" },
                    { Name: "Skitty", Time: "0d 16h 20m", Group: "Pokemon" },
                    { Name: "Aron", Time: "14d 0h 48m", Group: "Pokemon" },
                    { Name: "Electrike", Time: "12d 13h 3m", Group: "Pokemon" },
                    { Name: "Minun", Time: "14d 13h 25m", Group: "Pokemon" },
                    { Name: "Illumise", Time: "12d 12h 44m", Group: "Pokemon" },
                    { Name: "Roselia", Time: "14d 13h 31m", Group: "Pokemon" },
                    { Name: "Gulpin", Time: "7d 10h 29m", Group: "Pokemon" },
                    { Name: "Carvanha", Time: "14d 13h 14m", Group: "Pokemon" },
                    { Name: "Sharpedo", Time: "16d 18h 42m ", Group: "Pokemon" },
                    { Name: "Trapinch", Time: "0d 0h 6m", Group: "Pokemon" },
                    { Name: "Vibrava", Time: "7d 3h 27m", Group: "Pokemon" },
                    { Name: "Cacnea", Time: "12d 12h 59m", Group: "Pokemon" },
                    { Name: "Seviper", Time: "14d 23h 25m", Group: "Pokemon" },
                    { Name: "Barboach", Time: "14d 12h 44m", Group: "Pokemon" },
                    { Name: "Baltoy", Time: "14d 1h 37m", Group: "Pokemon" },
                    { Name: "Lileep", Time: "8d 22h 27m", Group: "Pokemon" },
                    { Name: "Castform", Time: "16d 17h 16m", Group: "Pokemon" },
                    { Name: "Shuppet", Time: "14d 2h 7m", Group: "Pokemon" },
                    { Name: "Banette", Time: "8d 19h 33m", Group: "Pokemon" },
                    { Name: "Wynaut", Time: "13d 10h 9m", Group: "Pokemon" },
                    { Name: "Snorunt", Time: "12d 12h 36m", Group: "Pokemon" },
                    { Name: "Clamperl", Time: "12d 21h 1m", Group: "Pokemon" },
                    { Name: "Bagon", Time: "10d 16h 42m", Group: "Pokemon" },
                    { Name: "Metang", Time: "10d 17h 21m", Group: "Pokemon" },
                    { Name: "Groudon", Time: "1d 14h 14m", Group: "Pokemon" },
                    { Name: "Piplup", Time: "2d 17h 5m", Group: "Pokemon" },
                    { Name: "Prinplup", Time: "14d 16h 18m", Group: "Pokemon" },
                    { Name: "Starly", Time: "16d 15h 25m", Group: "Pokemon" },
                    { Name: "Shinx", Time: "13d 11h 6m", Group: "Pokemon" },
                    { Name: "Cranidos", Time: "7d 6h 52m", Group: "Pokemon" },
                    { Name: "Rampardos", Time: "18d 3h 5m", Group: "Pokemon" },
                    { Name: "Bastiodon", Time: "8d 22h 25m", Group: "Pokemon" },
                    { Name: "Floatzel", Time: "14d 14h 20m", Group: "Pokemon" },
                    { Name: "Drifblim", Time: "16d 20h 23m", Group: "Pokemon" },
                    { Name: "Mismagius", Time: "13d 3h 22m", Group: "Pokemon" },
                    { Name: "Stunky", Time: "12d 20h 49m", Group: "Pokemon" },
                    { Name: "Bronzor", Time: "8d 3h 30m", Group: "Pokemon" },
                    { Name: "Bonsly", Time: "2d 21h 45m", Group: "Pokemon" },
                    { Name: "Chatot", Time: "13d 16h 22m", Group: "Pokemon" },
                    { Name: "Spiritomb", Time: "8d 23h 45m", Group: "Pokemon" },
                    { Name: "Hippopotas", Time: "8d 21h 31m", Group: "Pokemon" },
                    { Name: "Croagunk", Time: "1d 2h 4m", Group: "Pokemon" },
                    { Name: "Lumineon", Time: "14d 13h 58m", Group: "Pokemon" },
                    { Name: "Mantyke", Time: "14d 1h 45m", Group: "Pokemon" },
                    { Name: "Electivire", Time: "16d 20h 46m", Group: "Pokemon" },
                    { Name: "Glaceon", Time: "16d 21h 23m", Group: "Pokemon" },
                    { Name: "Phione", Time: "13d 11h 29m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Black",
                ColorPrimary: "#353535",
                ColorSecondary: "black",
                Duration: "12d 18h 25m",
                StartDate: "2014-06-15T04:00:00Z",
                HostName: "GMYC",
                HostImage: "img/hosts/gmyc.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Unova",
                TPPOrgLink: "http://twitchplayspokemon.org/black",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/black-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Trio Badge",
                        Image: "img/badges/trio.png",
                        Time: "0d 5h 55m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Basic Badge",
                        Image: "img/badges/basic.png",
                        Time: "1d 11h 59m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Insect Badge",
                        Image: "img/badges/insect.png",
                        Time: "2d 17h 51m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Bolt Badge",
                        Image: "img/badges/bolt.png",
                        Time: "4d 9h 8m",
                        Attempts: 6
                    },
                    {
                        Group: "Badges",
                        Name: "Quake Badge",
                        Image: "img/badges/quake.png",
                        Time: "4d 13h 46m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Jet Badge",
                        Image: "img/badges/jet.png",
                        Time: "6d 2h 27m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Freeze Badge",
                        Image: "img/badges/freeze.png",
                        Time: "7d 3h 56m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Legend Badge",
                        Image: "img/badges/legend.png",
                        Time: "9d 1h 27m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Shauntal",
                        Image: "img/trainers/black/shauntal.png",
                        Time: "10d 8h 18m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "Grimsley",
                        Image: "img/trainers/black/grimsley.png",
                        Time: "10d 6h 42m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Caitlin",
                        Image: "img/trainers/black/caitlin.png",
                        Time: "11d 1h 44m",
                        Attempts: 9
                    },
                    {
                        Group: "Elite Four",
                        Name: "Marshal",
                        Image: "img/trainers/black/marshal.png",
                        Time: "10d 9h 2m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "N",
                        Image: "img/trainers/black/n.png",
                        Time: "12d 18h 9m",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "Ghetsis",
                        Image: "img/trainers/black/ghetsis.png",
                        Time: "12d 18h 19m",
                        Attempts: 1
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "First Game Clear", Time: "12d 18h 21m", IDNo: "12356", Attempts: 62, Party: [
                            { Pokemon: "Deerling", Nickname: "5", Level: 63, Gender: "Female" },
                            { Pokemon: "Joltik", Nickname: "    ~***", Level: 69, Gender: "Male" },
                            { Pokemon: "Druddigon", Nickname: "Dru", Level: 68, Gender: "Male" },
                            { Pokemon: "Zebstrika", Nickname: "aMH", Level: 75, Gender: "Male" },
                            { Pokemon: "Tranquill", Nickname: "QQQQ", Level: 56, Gender: "Male" },
                            { Pokemon: "Tympole", Nickname: "NONNQWMMSO", Level: 64, Gender: "Female" },
                        ],
                        Image: "img/ribbons/event.png"
                    },
                    { Name: "Tepig", Time: "0d 01h 3m", Group: "Pokemon" },
                    { Name: "Patrat", Time: "0d 1h 34m", Group: "Pokemon" },
                    { Name: "Watchog", Time: "4d 23h 39m", Group: "Pokemon" },
                    { Name: "Lillipup", Time: "0d 1h 10m", Group: "Pokemon" },
                    { Name: "Herdier", Time: "9d 1h 49m", Group: "Pokemon" },
                    { Name: "Purrloin", Time: "0d 1h 6m", Group: "Pokemon" },
                    { Name: "Pansage", Time: "0d 2h 54m", Group: "Pokemon" },
                    { Name: "Pidove", Time: "1d 16h 57m", Group: "Pokemon" },
                    { Name: "Tranquill", Time: "5d 7h 56m", Group: "Pokemon" },
                    { Name: "Zebstrika", Time: "5d 0h 36m", Group: "Pokemon" },
                    { Name: "Boldore", Time: "5d 1h 45m", Group: "Pokemon" },
                    { Name: "Timburr", Time: "1d 19h 30m", Group: "Pokemon" },
                    { Name: "Tympole", Time: "1d 10h 1m", Group: "Pokemon" },
                    { Name: "Palpitoad", Time: "8d 12h 26m", Group: "Pokemon" },
                    { Name: "Sawk", Time: "2d 11h 25m", Group: "Pokemon" },
                    { Name: "Sewaddle", Time: "1d 23h 33m", Group: "Pokemon" },
                    { Name: "Venipede", Time: "1d 16h 51m", Group: "Pokemon" },
                    { Name: "Cottonee", Time: "1d 17h 0m", Group: "Pokemon" },
                    { Name: "Petilil", Time: "1d 17h 37m", Group: "Pokemon" },
                    { Name: "Sandile", Time: "2d 9h 44m", Group: "Pokemon" },
                    { Name: "Darumaka", Time: "2d 5h 4m", Group: "Pokemon" },
                    { Name: "Scraggy", Time: "2d 9h 57m", Group: "Pokemon" },
                    { Name: "Yamask", Time: "2d 23h 46m", Group: "Pokemon" },
                    { Name: "Cofagrigus", Time: "7d 12h 46m", Group: "Pokemon" },
                    { Name: "Tirtouga", Time: "3d 6h 18m", Group: "Pokemon" },
                    { Name: "Deerling", Time: "4d 22h 7m", Group: "Pokemon" },
                    { Name: "Foongus", Time: "4d 22h 14m", Group: "Pokemon" },
                    { Name: "Joltik", Time: "4d 15h 50m", Group: "Pokemon" },
                    { Name: "Ferroseed", Time: "4d 19h 41m", Group: "Pokemon" },
                    { Name: "Klink", Time: "4d 19h 45m", Group: "Pokemon" },
                    { Name: "Litwick", Time: "5d 14h 34m", Group: "Pokemon" },
                    { Name: "Shelmet", Time: "8d 12h 14m", Group: "Pokemon" },
                    { Name: "Stunfisk", Time: "8d 11h 55m", Group: "Pokemon" },
                    { Name: "Druddigon", Time: "7d 5h 59m", Group: "Pokemon" },
                    { Name: "Bouffalant", Time: "9d 1h 52m", Group: "Pokemon" },
                    { Name: "Vullaby", Time: "9d 3h 0m", Group: "Pokemon" },
                    { Name: "Durant", Time: "11d 13h 38m", Group: "Pokemon" },
                    { Name: "Deino", Time: "9d 19h 57m", Group: "Pokemon" },
                    { Name: "Reshiram", Time: "12d 18h 0m", Group: "Pokemon", Attempts: 9 },
                ]
            },
            {
                RunName: "Blaze Black 2",
                ColorPrimary: "#b9d7e2",
                ColorSecondary: "black",
                Duration: "19d 2h 16m",
                StartDate: "2014-07-06T04:00:00Z",
                HostName: "CL Y .,",
                HostImage: "img/hosts/cly.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Unova",
                TPPOrgLink: "http://twitchplayspokemon.org/black2",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/black-2-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Toxic Badge",
                        Image: "img/badges/toxic.png",
                        Time: "1d 16h 39m",
                        Attempts: 7
                    },
                    {
                        Group: "Badges",
                        Name: "Basic Badge",
                        Image: "img/badges/basic.png",
                        Time: "0d 16h 31m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Insect Badge",
                        Image: "img/badges/insect.png",
                        Time: "2d 20h 15m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Bolt Badge",
                        Image: "img/badges/bolt.png",
                        Time: "4d 1h 1m",
                        Attempts: 10
                    },
                    {
                        Group: "Badges",
                        Name: "Quake Badge",
                        Image: "img/badges/quake.png",
                        Time: "5d 1h 11m",
                        Attempts: 9
                    },
                    {
                        Group: "Badges",
                        Name: "Jet Badge",
                        Image: "img/badges/jet.png",
                        Time: "8d 22h 53m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Wave Badge",
                        Image: "img/badges/wave.png",
                        Time: "10d 7h 42m",
                        Attempts: 4
                    },
                    {
                        Group: "Badges",
                        Name: "Legend Badge",
                        Image: "img/badges/legend.png",
                        Time: "9d 23h 24m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Shauntal",
                        Image: "img/trainers/black/shauntal.png",
                        Time: "13d 9h 47m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Grimsley",
                        Image: "img/trainers/black/grimsley.png",
                        Time: "13d 9h 47m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Caitlin",
                        Image: "img/trainers/black/caitlin.png",
                        Time: "13d 21h 23m",
                        Attempts: 6
                    },
                    {
                        Group: "Elite Four",
                        Name: "Marshal",
                        Image: "img/trainers/black/marshal.png",
                        Time: "14d 2h 11m",
                        Attempts: 6
                    },
                    {
                        Group: "Champions",
                        Name: "Iris",
                        Image: "img/trainers/black/iris.png",
                        Time: "16d 5h 34m",
                        Attempts: 9
                    },
                    {
                        Group: "Past Hosts",
                        Name: "GMYC",
                        Image: "img/hosts/gmyc.png",
                        Time: "18d 12h 57m"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "aoooo",
                        Image: "img/hosts/aoooo.png",
                        Time: "18d 13h 2m"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "nqpppnl",
                        Image: "img/hosts/nqpppnl.png",
                        Time: "18d 13h 9m"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "A",
                        Image: "img/hosts/a2.png",
                        Time: "18d 22h 8m"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "A",
                        Image: "img/hosts/a.png",
                        Time: "18d 22h 17m"
                    },
                    {
                        Group: "Past Hosts",
                        Name: "AJDNNW",
                        Image: "img/hosts/ajdnnw.png",
                        Time: "19d 1h 41m"
                    },
                    {
                        Group: "Champions",
                        Name: "RED",
                        Image: "img/hosts/red.png",
                        Time: "19d 2h 16m"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "16d 5h 35m", IDNo: "06648", Attempts: 67, Party: [
                            { Pokemon: "Unfezant", Nickname: "qfwwqhhzwu", Level: 100, Gender: "Female" },
                            { Pokemon: "Zoroark", Level: 100, Gender: "Male" },
                            { Pokemon: "Leavanny", Nickname: "zzffzz zzw", Level: 85, Gender: "Male" },
                            { Pokemon: "Sceptile", Nickname: "AEEEEOPM.J ", Level: 86, Gender: "Male" },
                            { Pokemon: "Feraligatr", Nickname: "u2E!☂☂☂M☂'", Level: 100, Gender: "Male" },
                            { Pokemon: "Emboar", Nickname: "VVUU", Level: 96, Gender: "Male" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Pikachu", Time: "16d 20h 3m", Group: "Pokemon" },
                    { Name: "Meowth", Time: "0d 7h 32m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "10d 14h 40m", Group: "Pokemon" },
                    { Name: "Exeggcute", Time: "17d 23h 21m", Group: "Pokemon" },
                    { Name: "Mewtwo", Time: "17d 0h 9m", Group: "Pokemon" },
                    { Name: "Totodile", Time: "1d 21h 4m", Group: "Pokemon" },
                    { Name: "Croconaw", Time: "1d 23h 11m", Group: "Pokemon" },
                    { Name: "Feraligatr", Time: "2d 10h 54m", Group: "Pokemon" },
                    { Name: "Sentret", Time: "0d 0h 46m", Group: "Pokemon" },
                    { Name: "Mareep", Time: "0d 1h 33m", Group: "Pokemon" },
                    { Name: "Flaaffy", Time: "0d 14h 13m", Group: "Pokemon" },
                    { Name: "Girafarig", Time: "18d 9h 29m", Group: "Pokemon" },
                    { Name: "Gligar", Time: "18d 0h 3m", Group: "Pokemon" },
                    { Name: "Piloswine", Time: "17d 20h 11m", Group: "Pokemon" },
                    { Name: "Phanpy", Time: "8d 7h 11m", Group: "Pokemon" },
                    { Name: "Tyrogue", Time: "0d 6h 31m", Group: "Pokemon" },
                    { Name: "Celebi", Time: "16d 19h 28m", Group: "Pokemon" },
                    { Name: "Treecko", Time: "0d 19h 37m", Group: "Pokemon" },
                    { Name: "Grovyle", Time: "1d 2h 20m", Group: "Pokemon" },
                    { Name: "Sceptile", Time: "3d 21h 32m", Group: "Pokemon" },
                    { Name: "Wurmple", Time: "0d 17h 24m", Group: "Pokemon" },
                    { Name: "Azurill", Time: "0d 1h 27m", Group: "Pokemon" },
                    { Name: "Manectric", Time: "16d 23h 16m", Group: "Pokemon" },
                    { Name: "Groudon", Time: "17d 10h 50m", Group: "Pokemon" },
                    { Name: "Bronzong", Time: "16d 13h 33m", Group: "Pokemon" },
                    { Name: "Riolu", Time: "0d 2h 47m", Group: "Pokemon" },
                    { Name: "Leafeon", Time: "18d 8h 49m", Group: "Pokemon" },
                    { Name: "Dialga", Time: "16d 10h 39m", Group: "Pokemon" },
                    { Name: "Servine", Time: "18d 8h 46m", Group: "Pokemon" },
                    { Name: "Tepig", Time: "0d 0h 18m", Group: "Pokemon" },
                    { Name: "Pignite", Time: "0d 16h 30m", Group: "Pokemon" },
                    { Name: "Emboar", Time: "2d 18h 17m", Group: "Pokemon" },
                    { Name: "Dewott", Time: "18d 10h 28m", Group: "Pokemon" },
                    { Name: "Patrat", Time: "0d 0h 43m", Group: "Pokemon" },
                    { Name: "Pidove", Time: "0d 7h 34m", Group: "Pokemon" },
                    { Name: "Tranquill", Time: "1d 19h 32m", Group: "Pokemon" },
                    { Name: "Unfezant", Time: "3d 2h 13m", Group: "Pokemon" },
                    { Name: "Woobat", Time: "16d 23h 28m", Group: "Pokemon" },
                    { Name: "Throh", Time: "17d 23h 58m", Group: "Pokemon" },
                    { Name: "Sewaddle", Time: "0d 7h 27m", Group: "Pokemon" },
                    { Name: "Swadloon", Time: "1d 18h 56m", Group: "Pokemon" },
                    { Name: "Leavanny", Time: "1d 19h 11m", Group: "Pokemon" },
                    { Name: "Zorua", Time: "4d 2h 53m", Group: "Pokemon" },
                    { Name: "Zoroark", Time: "4d 3h 50m", Group: "Pokemon" },
                    { Name: "Sawsbuck", Time: "17d 19h 3m", Group: "Pokemon" },
                    { Name: "Karrablast", Time: "12d 9h 56m", Group: "Pokemon" },
                    { Name: "Mienshao", Time: "16d 13h 21m", Group: "Pokemon" },
                    { Name: "Pawniard", Time: "17d 23h 26m", Group: "Pokemon" },
                    { Name: "Zekrom", Time: "16d 11h 59m", Group: "Pokemon" },
                    { Name: "Meloetta", Time: "17d 12h 21m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "X",
                ColorPrimary: "#007fdb",
                ColorSecondary: "black",
                //Duration: "5d 4h 51m",
                Duration: "8d",
                StartDate: "2014-07-27T04:00:00Z",
                HostName: "d ",
                HostImage: "img/hosts/d.png",
                HostImageSource: "http://haykira.deviantart.com/art/Li-l-d-from-Twitch-Plays-Pokemon-X-Y-471845274",
                Region: "Kalos",
                TPPOrgLink: "http://twitchplayspokemon.org/x",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/x-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Bug Badge",
                        Image: "img/badges/bug.png",
                        Time: "0d 3h 53m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Cliff Badge",
                        Image: "img/badges/cliff.png",
                        Time: "1d 9h 53m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Rumble Badge",
                        Image: "img/badges/rumble.png",
                        Time: "1d 23h 53m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Plant Badge",
                        Image: "img/badges/plant.png",
                        Time: "2d 8h 5m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Voltage Badge",
                        Image: "img/badges/voltage.png",
                        Time: "3d 1h 59m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Fairy Badge",
                        Image: "img/badges/fairy.png",
                        Time: "3d 20h 57m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Psychic Badge",
                        Image: "img/badges/psychic.png",
                        Time: "3d 10h 54m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Iceberg Badge",
                        Image: "img/badges/iceberg.png",
                        Time: "4d 11h 37m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Malva",
                        Image: "img/trainers/x/malva.png",
                        Time: "4d 16h 35m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Wikstrom",
                        Image: "img/trainers/x/wikstrom.png",
                        Time: "4d 16h 52m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Drasna",
                        Image: "img/trainers/x/drasna.png",
                        Time: "4d 16h 20m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Siebold",
                        Image: "img/trainers/x/siebold.png",
                        Time: "4d 21h 9m",
                        Attempts: 8
                    },
                    {
                        Group: "Champions",
                        Name: "Diantha",
                        Image: "img/trainers/x/diantha.png",
                        Time: "5d 4h 51m",
                        Attempts: 4
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "5d 4h 53m", Attempts: 21, Party: [
                            { Pokemon: "Lapras", Nickname: "! ♀o?04+6eAd", Level: 68, Gender: "Male" },
                            { Pokemon: "Charizard", Nickname: "!taj11yygaaa", Level: 81, Gender: "Male" },
                            { Pokemon: "Absol", Nickname: "QQYyy25o6wf7", Level: 70, Gender: "Female" },
                            { Pokemon: "Xerneas", Level: 80 },
                            { Pokemon: "Hawlucha", Level: 72, Gender: "Female" },
                            { Pokemon: "Aegislash", Nickname: "Oi!oiswhhve!", Level: 93, Gender: "Female" },
                        ],
                        Image: "img/ribbons/champion-kalos.png"
                    },
                    { Name: "Chespin", Time: "20m", Group: "Pokemon" },
                    { Name: "Weedle", Time: "54m", Group: "Pokemon" },
                    { Name: "Scatterbug", Time: "1h", Group: "Pokemon" },
                    { Name: "Pansage", Time: "1h4m", Group: "Pokemon" },
                    { Name: "Pikachu", Time: "1h15m", Group: "Pokemon" },
                    { Name: "Panpour", Time: "1h31m", Group: "Pokemon" },
                    { Name: "Beldum", Time: "1h38m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Honedge", Time: "2h32m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Omanyte", Time: "2h59m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kakuna", Time: "3h39m", Group: "Pokemon" },
                    { Name: "Charmander", Time: "5h13m", Group: "Pokemon" },
                    { Name: "Quilladin", Time: "7h51m", Group: "Pokemon" },
                    { Name: "Charmeleon", Time: "15h25m", Group: "Pokemon" },
                    { Name: "Sandile", Time: "18h49m", Group: "Pokemon" },
                    { Name: "Solrock", Time: "19h36m", Group: "Pokemon" },
                    { Name: "Machop", Time: "19h44m", Group: "Pokemon" },
                    { Name: "Vivillon", Time: "22h22m", Group: "Pokemon" },
                    { Name: "Spoink", Time: "22h52m", Group: "Pokemon" },
                    { Name: "Swirlix", Time: "23h43m", Group: "Pokemon" },
                    { Name: "Absol", Time: "1d2h48m", Group: "Pokemon" },
                    { Name: "Hawlucha", Time: "1d11h54m", Group: "Pokemon" },
                    { Name: "Sneasel", Time: "3d11h39m", Group: "Pokemon" },
                    { Name: "Lucario", Time: "2d10m", Group: "Pokemon" },
                    { Name: "Doublade", Time: "2d9h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Charizard", Time: "1d22h16m", Group: "Pokemon" },
                    { Name: "Lapras", Time: "2d6h10m", Group: "Pokemon" },
                    { Name: "Xerneas", Time: "3d22h6m", Group: "Pokemon" },
                    { Name: "Slowpoke", Time: "3d22h42m", Group: "Pokemon" },
                    { Name: "Volbeat", Time: "5d11h58m", Group: "Pokemon" },
                    { Name: "Paras", Time: "5d12h6m", Group: "Pokemon" },
                    { Name: "Heracross", Time: "5d12h34m", Group: "Pokemon" },
                    { Name: "Machoke", Time: "5d20h55m", Group: "Pokemon" },
                    { Name: "Sawk", Time: "5d21h2m", Group: "Pokemon" },
                    { Name: "Karrablast", Time: "7d10h37m", Group: "Pokemon" },
                    { Name: "Carnivine", Time: "7d11h10m", Group: "Pokemon" },
                    { Name: "Jigglypuff", Time: "4d9h34m", Group: "Pokemon" },
                    { Name: "Ditto", Time: "7d19h34m", Group: "Pokemon" },
                    { Name: "Gothorita", Time: "7d20h42m", Group: "Pokemon" },
                    { Name: "Noctowl", Time: "4d9h32m", Group: "Pokemon" },
                    { Name: "Snubbull", Time: "1d12h6m", Group: "Pokemon" },
                    { Name: "Inkay", Time: "23h26m", Group: "Pokemon" },
                    { Name: "Woobat", Time: "20h4m", Group: "Pokemon" },
                    { Name: "Bagon", Time: "17h30m", Group: "Pokemon" },
                    { Name: "Oddish", Time: "15h14m", Group: "Pokemon" },
                    //{ Name: "Honedge", Time: "15h12m", Group: "Pokemon" },
                    { Name: "Espurr", Time: "15h10m", Group: "Pokemon" },
                    { Name: "Furfrou", Time: "14h26m", Group: "Pokemon" },
                    { Name: "Combee", Time: "4h5m", Group: "Pokemon" },
                    { Name: "Beedrill", Time: "12h3m", Group: "Pokemon" },
                    { Name: "Snover", Time: "3d11h35m", Group: "Pokemon" },
                    { Name: "Lairon", Time: "4d1h41m", Group: "Pokemon" },
                    { Name: "Aegislash", Time: "4d2h3m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Quagsire", Time: "4d6h16m", Group: "Pokemon" },
                    { Name: "Drapion", Time: "4d7h11m", Group: "Pokemon" },
                    { Name: "Amoonguss", Time: "4d8h58m", Group: "Pokemon" },
                    { Name: "Haunter", Time: "4d13h", Group: "Pokemon" },
                    { Name: "Gurdurr", Time: "4d12h53m", Group: "Pokemon" },
                    { Name: "Froakie", Time: "5d5h51m", Group: "Pokemon" },
                    { Name: "Mudkip", Time: "5d5h54m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Garchomp", Time: "5d6h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Riolu", Time: "5d7h44m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Sliggoo", Time: "5d9h50m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Graveler", Time: "5d11h59m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Golem", Time: "5d12h", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Boldore", Time: "5d19h6m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gigalith", Time: "5d19h7m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Spritzee", Time: "5d19h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Aromatisse", Time: "5d19h27m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kadabra", Time: "6d2h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Alakazam", Time: "6d2h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gengar", Time: "5d12h55m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Pansear", Time: "5d14h11m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Meowstic", Time: "6d5h4m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Wobbuffet", Time: "5d8h30m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Eevee", Time: "5d8h34m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Fletchling", Time: "5d8h41m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Skorupi", Time: "5d8h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Aggron", Time: "5d8h45m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Bunnelby", Time: "5d8h49m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Druddigon", Time: "5d8h58m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Tirtouga", Time: "5d9h3m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Fearow", Time: "5d9h5m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Onix", Time: "5d9h8m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Dwebble", Time: "5d9h13m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Abra", Time: "5d9h14m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Dusclops", Time: "5d9h16m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Pancham", Time: "5d9h19m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Fennekin", Time: "5d9h21m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Metang", Time: "5d9h31m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Ponyta", Time: "5d9h36m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zygarde", Time: "5d9h40m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Pidgeot", Time: "5d9h48m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Goodra", Time: "5d9h50m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Vaporeon", Time: "5d9h51m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Poliwhirl", Time: "5d9h55m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Basculin", Time: "5d9h56m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Diancie", Time: "5d10h8m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Groudon", Time: "5d11h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kirlia", Time: "5d11h52m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kabuto", Time: "5d12h8m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Floatzel", Time: "5d12h10m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Chesnaught", Time: "5d12h40m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Greninja", Time: "5d12h48m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Giratina", Time: "5d13h1m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Lampent", Time: "5d13h17m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Ninetales", Time: "5d14h", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Blissey", Time: "5d14h3m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Meloetta", Time: "5d14h5m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Noibat", Time: "5d14h41m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Patrat", Time: "5d14h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Drifloon", Time: "5d19h24m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Sunflora", Time: "5d19h29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Slugma", Time: "5d19h32m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Trevenant", Time: "5d19h34m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Skiddo", Time: "5d19h37m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Bulbasaur", Time: "5d19h39m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zorua", Time: "5d19h51m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Wooper", Time: "5d19h54m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Jynx", Time: "5d19h56m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Solosis", Time: "5d20h10m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mienfoo", Time: "5d20h15m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Snorlax", Time: "5d20h23m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Spinda", Time: "5d20h29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Venomoth", Time: "5d20h30m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mew", Time: "5d21h11m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Unown", Time: "6d2h29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Sylveon", Time: "6d2h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mawile", Time: "6d3h2m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gyarados", Time: "6d3h3m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Luxray", Time: "6d3h9m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Yveltal", Time: "6d3h12m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Flareon", Time: "6d3h20m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mankey", Time: "6d4h9m", Group: "Pokemon" },
                    { Name: "Throh", Time: "6d4h12m", Group: "Pokemon" },
                    { Name: "Thundurus", Time: "6d4h29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zoroark", Time: "6d5h12m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Drifblim", Time: "6d5h16m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Hydreigon", Time: "6d5h20m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Rotom", Time: "6d8h13m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Goomy", Time: "6d9h25m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Scyther", Time: "6d9h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Luvdisc", Time: "6d9h40m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gligar", Time: "6d9h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Espeon", Time: "6d10h24m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Vulpix", Time: "6d10h39m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Budew", Time: "6d10h40m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Spiritomb", Time: "6d10h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Tyrantrum", Time: "6d11h2m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Umbreon", Time: "6d11h26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Sentret", Time: "6d13h21m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Smeargle", Time: "6d13h46m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Blaziken", Time: "6d22h23m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Roserade", Time: "6d23h5m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Aurorus", Time: "6d23h20m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Rayquaza", Time: "7d2m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Jirachi", Time: "7d25m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Weepinbell", Time: "7d10h52m", Group: "Pokemon" },
                    { Name: "Magnezone", Time: "7d13h4m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zapdos", Time: "7d16h4m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Starmie", Time: "7d17h31m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Dusknoir", Time: "7d17h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Glaceon", Time: "7d17h59m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Klefki", Time: "7d20h36m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Torchic", Time: "7d21h35m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Arceus", Time: "7d21h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Scrafty", Time: "7d21h59m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Turtwig", Time: "7d22h2m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gliscor", Time: "7d22h6m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Croagunk", Time: "7d22h7m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Clauncher", Time: "7d22h9m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Hippopotas", Time: "7d22h11m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Ducklett", Time: "7d22h13m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Electrike", Time: "7d22h25m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Tentacool", Time: "7d22h27m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Purrloin", Time: "7d22h37m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Foongus", Time: "7d22h38m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Flabébé", Time: "7d22h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zangoose", Time: "7d22h44m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Dratini", Time: "7d22h45m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Deino", Time: "7d22h57m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kangaskhan", Time: "7d23h1m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Tepig", Time: "5d12h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Omastar", Time: "5d13h17m", Group: "Pokemon", Class: "WifiTrade" },
                ]
            },
            {
                RunName: "Omega Ruby",
                ColorPrimary: "#c6223b",
                ColorSecondary: "#c6223b",
                //Duration: "8d 5h 42m",
                StartDate: "2014-11-22T03:00:00Z",
                Duration: "10d",
                HostName: "!12rtyhaszs",
                HostImage: "img/hosts/rtyhaszs.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                BaseGame: "Emerald",
                Region: "Hoenn",
                TPPOrgLink: "http://twitchplayspokemon.org/omegaruby",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/omegaruby-archive",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Stone Badge",
                        Image: "img/badges/stone.png",
                        Time: "0d 8h 32m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Knuckle Badge",
                        Image: "img/badges/knuckle.png",
                        Time: "0d 14h 34m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Dynamo Badge",
                        Image: "img/badges/dynamo.png",
                        Time: "1d 0h 57m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Heat Badge",
                        Image: "img/badges/heat.png",
                        Time: "2d 14h 34m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Balance Badge",
                        Image: "img/badges/balance.png",
                        Time: "3d 1h 31m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Feather Badge",
                        Image: "img/badges/feather.png",
                        Time: "3d 21h 42m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Mind Badge",
                        Image: "img/badges/mind.png",
                        Time: "4d 14h 30m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Rain Badge",
                        Image: "img/badges/rain.png",
                        Time: "4d 23h 36m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Sidney",
                        Image: "img/trainers/emerald/sidney.png",
                        Time: "5d 19h 25m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Phoebe",
                        Image: "img/trainers/emerald/phoebe.png",
                        Time: "6d 13h 59m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Glacia",
                        Image: "img/trainers/emerald/glacia.png",
                        Time: "6d 15h 12m"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Drake",
                        Image: "img/trainers/emerald/drake.png",
                        Time: "6d 18h 13m"
                    },
                    {
                        Group: "Champions",
                        Name: "Steven",
                        Image: "img/trainers/emerald/steven.png",
                        Time: "6d 20h 16m"
                    },
                    {
                        Group: "Champions",
                        Name: "Zinnia",
                        Image: "img/trainers/emerald/zinnia.png",
                        ImageSource: "http://kinectedwires.deviantart.com/art/OR-AS-Zinnia-Sprite-505257562",
                        Time: "7d 9h 4m"
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Sidney",
                        Image: "img/trainers/emerald/rematch/sidney.png",
                        Time: "7d 12h 33m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Phoebe",
                        Image: "img/trainers/emerald/rematch/phoebe.png",
                        Time: "7d 14h 48m",
                        Attempts: 5
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Glacia",
                        Image: "img/trainers/emerald/rematch/glacia.png",
                        Time: "7d 19h 13m",
                        Attempts: 5
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Drake",
                        Image: "img/trainers/emerald/rematch/drake.png",
                        Time: "8d 5h 30m",
                        Attempts: 9
                    },
                    {
                        Group: "Champions",
                        Name: "Steven",
                        Image: "img/trainers/emerald/rematch/steven.png",
                        Time: "8d 5h 42m",
                        Attempts: 1
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "6d 20h 18m", Attempts: 19, Party: [
                            { Pokemon: "Manectric", Nickname: "w6aa:nn5ek22", Level: 63, Gender: "Female" },
                            { Pokemon: "Azumarill", Nickname: "!t44444’’’tu", Level: 79, Gender: "Female" },
                            { Pokemon: "Minun", Nickname: "♀2e!0yy5ee2y", Level: 76, Gender: "Male" },
                            { Pokemon: "Exploud", Nickname: "Whismur  v", Level: 69, Gender: "Male" },
                            { Pokemon: "Latios", Level: 66, Gender: "Male" },
                            { Pokemon: "Linoone", Nickname: "Zigzagoony  ", Level: 67, Gender: "Female" },
                        ],
                        Image: "img/ribbons/champion-hoenn.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "8d 5h 44m", Attempts: 27, Party: [
                            { Pokemon: "Rayquaza", Nickname: "'strssss2stt", Level: 90 },
                            { Pokemon: "Linoone", Nickname: "Zigzagoony  ", Level: 88, Gender: "Female" },
                            { Pokemon: "Minun", Nickname: "♀2e!0yy5ee2y", Level: 100, Gender: "Male" },
                            { Pokemon: "Latios", Level: 86, Gender: "Male" },
                            { Pokemon: "Azumarill", Nickname: "!t44444’’’tu", Level: 100, Gender: "Female" },
                            { Pokemon: "Exploud", Nickname: "Whismur  v", Level: 94, Gender: "Male" },
                        ],
                        Image: "img/ribbons/champion-hoenn.png"
                    },
                    { Name: "Torchic", Time: "12m", Group: "Pokemon" },
                    { Name: "Combusken", Time: "8h11m", Group: "Pokemon" },
                    { Name: "Beldum", Time: "29m", Group: "Pokemon" },
                    { Name: "Seedot", Time: "1h12m", Group: "Pokemon" },
                    { Name: "Poochyena", Time: "1h13m", Group: "Pokemon" },
                    { Name: "Zigzagoon", Time: "1h39m", Group: "Pokemon" },
                    { Name: "Whismur", Time: "5h44m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "10h43m", Group: "Pokemon" },
                    { Name: "Wingull", Time: "18h48m", Group: "Pokemon" },
                    { Name: "Skitty", Time: "1d4h34m", Group: "Pokemon" },
                    { Name: "Nincada", Time: "1d7h29m", Group: "Pokemon" },
                    { Name: "Marill", Time: "1d12h8m", Group: "Pokemon" },
                    { Name: "Electrike", Time: "1d13h9m", Group: "Pokemon" },
                    { Name: "Zangoose", Time: "2d5h20m", Group: "Pokemon" },
                    { Name: "Sandshrew", Time: "2d15h40m", Group: "Pokemon" },
                    { Name: "Numel", Time: "2d16h57m", Group: "Pokemon" },
                    { Name: "Tropius", Time: "3d20h27m", Group: "Pokemon" },
                    { Name: "Doduo", Time: "4d1h38m", Group: "Pokemon" },
                    { Name: "Golduck", Time: "4d1h41m", Group: "Pokemon" },
                    { Name: "Pikachu", Time: "18h13m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "4d1h54m", Group: "Pokemon" },
                    { Name: "Psyduck", Time: "4d2h6m", Group: "Pokemon" },
                    { Name: "Duskull", Time: "4d2h47m", Group: "Pokemon" },
                    { Name: "Shuppet", Time: "4d2h49m", Group: "Pokemon" },
                    { Name: "Groudon", Time: "4d18h35m", Group: "Pokemon" },
                    { Name: "Azumarill", Time: "1d18h8m", Group: "Pokemon" },
                    { Name: "Linoone", Time: "2d19h45m", Group: "Pokemon" },
                    { Name: "Wurmple", Time: "3h30m", Group: "Pokemon" },
                    { Name: "Minun", Time: "18h26m", Group: "Pokemon" },
                    { Name: "Gulpin", Time: "21h58m", Group: "Pokemon" },
                    { Name: "Oddish", Time: "8h56m", Group: "Pokemon" },
                    { Name: "Spinda", Time: "2d19h45m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "10h43m", Group: "Pokemon" },
                    { Name: "Skarmory", Time: "2d22h20m", Group: "Pokemon" },
                    { Name: "Kecleon", Time: "3d20h31m", Group: "Pokemon" },
                    { Name: "Trapinch", Time: "2d15h36m", Group: "Pokemon" },
                    { Name: "Loudred", Time: "2d4h26m", Group: "Pokemon" },
                    { Name: "Latios", Time: "3d4h14m", Group: "Pokemon" },
                    { Name: "Manectric", Time: "2d22h32m", Group: "Pokemon" },
                    { Name: "Swablu", Time: "2d23h4m", Group: "Pokemon" },
                    { Name: "Spheal", Time: "8d21h12m", Group: "Pokemon" },
                    { Name: "Sealeo", Time: "8d20h59m", Group: "Pokemon" },
                    { Name: "Exploud", Time: "6d8h5m", Group: "Pokemon" },
                    { Name: "Bagon", Time: "5d23h50m", Group: "Pokemon" },
                    { Name: "Golbat", Time: "5d23h34m", Group: "Pokemon" },
                    { Name: "Rayquaza", Time: "7d8h58m", Group: "Pokemon" },
                    { Name: "Azelf", Time: "5d1h4m", Group: "Pokemon" },
                    { Name: "Lairon", Time: "5d16h31m", Group: "Pokemon" },
                    { Name: "Magikarp", Time: "5d11h7m", Group: "Pokemon" },
                    { Name: "Solrock", Time: "5d23h19m", Group: "Pokemon" },
                    { Name: "Happiny", Time: "6d9h39m", Group: "Pokemon" },
                    { Name: "Audino", Time: "6d9h49m", Group: "Pokemon" },
                    { Name: "Ho-Oh", Time: "8d19h24m", Group: "Pokemon" },
                    { Name: "Snorunt", Time: "8d21h27m", Group: "Pokemon" },
                    { Name: "Tepig", Time: "7d9h25m", Group: "Pokemon" },
                    { Name: "Piplup", Time: "8d5h52m", Group: "Pokemon" },
                    { Name: "Chespin", Time: "9d1h32m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Entei", Time: "9d1h49m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Archeops", Time: "9d2h1m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Shinx", Time: "9d2h56m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Slowpoke", Time: "9d3h41m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Slowking", Time: "9d3h42m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kricketune", Time: "9d3h53m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Flareon", Time: "9d3h58m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Glalie", Time: "9d6h12m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Joltik", Time: "9d6h20m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Lapras", Time: "9d6h27m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Chimchar", Time: "9d11h43m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Bellossom", Time: "9d11h49m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Machop", Time: "9d12h29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Roserade", Time: "9d14h34m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Blaziken", Time: "9d16h13m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Metagross", Time: "9d16h50m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mudkip", Time: "9d17h27m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mewtwo", Time: "9d17h30m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Gallade", Time: "9d19h30m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Aerodactyl", Time: "9d19h38m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Jirachi", Time: "9d19h49m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Celebi", Time: "9d20h8m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Anorith", Time: "9d21h14m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Glaceon", Time: "9d21h35m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Diancie", Time: "9d22h9m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Mawile", Time: "9d22h24m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Magnezone", Time: "9d14h33m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Amaura", Time: "9d15h19m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Surskit", Time: "9d17h36m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Cascoon", Time: "13d11m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Kakuna", Time: "13d12m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Shroomish", Time: "13d17m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Chikorita", Time: "13d26m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Ralts", Time: "13d28m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Pinsir", Time: "13d29m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Zweilous", Time: "13d59m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Noibat", Time: "13d1h1m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Aron", Time: "13d1h8m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Dratini", Time: "13d1h11m", Group: "Pokemon", Class: "WifiTrade" },
                    { Name: "Luvdisc", Time: "13d1h15m", Group: "Pokemon", Class: "WifiTrade" },
                    //{ Name: "Absol", Time: "-1d", Group: "Pokemon", Class:"WifiTrade" }, //find
                    //{ Name: "Rhyperior", Time: "-1d", Group: "Pokemon", Class:"WifiTrade" }, //find
                ]
            }
        ]
    },
    {
        Name: "Season 2",
        Scale: TPP.Scale.Days,
        Runs: [
            {
                RunName: "Anniversary Red",
                ColorPrimary: "#bf0300",
                ColorSecondary: "#5b0000",
                Duration: "39d 19h 55m",
                StartDate: "2015-02-12T21:00:00Z",
                HostName: "AIIIAAB",
                HostImage: "img/hosts/aiiiaab.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Kanto",
                DexTotal: 151,
                TPPOrgLink: "http://twitchplayspokemon.org/ar",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/red-anniversary",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "0d 18h 28m",
                        Attempts: 10
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        Time: "2d 20h 8m",
                        Attempts: 19
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        Time: "5d 12h 51m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        Time: "8d 1h 7m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        Time: "11d 12h 28m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        Time: "13d 14h 7m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        Time: "15d 22h 8m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        Time: "17d 12h 19m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lorelei",
                        Image: "img/trainers/red/lorelei.png",
                        Time: "27d 8h 53m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/trainers/red/bruno.png",
                        Time: "27d 9h 1m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Agatha",
                        Image: "img/trainers/red/agatha.png",
                        Time: "27d 9h 7m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lance",
                        Image: "img/trainers/red/lance.png",
                        Time: "27d 9h 46m",
                        Attempts: 2
                    },
                    {
                        Group: "Champions",
                        Name: "BLUE",
                        Image: "img/trainers/red/blue.png",
                        Time: "27d 19h 24m",
                        Attempts: 6
                    },
                    {
                        Group: "Past Hosts",
                        Name: "Dream RED",
                        Image: "img/hosts/red.png",
                        Time: "27d 19h 45m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/rematch/boulder.png",
                        Time: "29d 9h 44m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/rematch/cascade.png",
                        Time: "28d 20h 10m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/rematch/thunder.png",
                        Time: "28d 18h 4m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rematch/rainbow.png",
                        Time: "29d 3h 50m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/rematch/soul.png",
                        Time: "28d 5h 1m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/rematch/marsh.png",
                        Time: "28d 19h 4m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/rematch/volcano.png",
                        Time: "27d 22h 14m",
                        Attempts: 1
                    },
                    {
                        Group: "Rematch Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/rematch/earth.png",
                        Time: "29d 17h 0m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Lorelei",
                        Image: "img/trainers/red/rematch/lorelei.png",
                        Time: "38d 23h 42m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Bruno",
                        Image: "img/trainers/red/rematch/bruno.png",
                        Time: "38d 23h 50m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Agatha",
                        Image: "img/trainers/red/rematch/agatha.png",
                        Time: "38d 23h 57m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Lance",
                        Image: "img/trainers/red/rematch/lance.png",
                        Time: "39d 0h 4m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "BLUE",
                        Image: "img/trainers/red/rematch/blue.png",
                        Time: "39d 6h 56m",
                        Attempts: 4
                    },
                    {
                        Group: "Champions",
                        Name: "Professor Oak",
                        Image: "img/trainers/red/oak.png",
                        Time: "39d 19h 17m",
                        Attempts: 4
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "27d 19h 25m", Attempts: 18, Party: [
                            { Pokemon: "Slowbro", Nickname: ",R  π,,,", Level: 92, Type1: "Water", Type2: "Psychic" },
                            { Pokemon: "Kabutops", Nickname: "AAAACCDYY", Level: 76, Type1: "Rock", Type2: "Water" },
                            { Pokemon: "Cloyster", Nickname: "IIII--??(U", Level: 97, Type1: "Water", Type2: "Ice" },
                            { Pokemon: "Zapdos", Nickname: "(ssjj µ..,", Level: 94, Type1: "Electric", Type2: "Flying" },
                            { Pokemon: "Parasect", Nickname: "-?", Level: 100, Type1: "Bug", Type2: "Grass" },
                            { Pokemon: "Muk", Nickname: "A-----aaaa", Level: 65, Type1: "Poison" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "33d 14h 43m", Attempts: 2, Party: [
                            { Pokemon: "Venomoth", Nickname: "RRRRIIIIH", Level: 82, Type1: "Bug", Type2: "Poison" },
                            { Pokemon: "Alakazam", Nickname: "IIHNNMMMMM", Level: 83, Type1: "Psychic" },
                            { Pokemon: "Dragonite", Nickname: "AAA--xxµµµ", Level: 55, Type1: "Dragon", Type2: "Flying" },
                            { Pokemon: "Zapdos", Nickname: "(ssjj µ..,", Level: 100, Type1: "Electric", Type2: "Flying" },
                            { Pokemon: "Slowbro", Nickname: "AAbbABCabb", Level: 100, Type1: "Water", Type2: "Psychic", PreviousNick: ",R  π,,," },
                            { Pokemon: "Cloyster", Nickname: "IIII--??(U", Level: 100, Type1: "Water", Type2: "Ice" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #3", Time: "39d 19h 18m", Attempts: 23, Party: [
                            { Pokemon: "Slowbro", Nickname: "AAbbABCabb", Level: 100, Type1: "Water", Type2: "Psychic", PreviousNick: ",R  π,,," },
                            { Pokemon: "Venomoth", Nickname: "RRRRIIIIH", Level: 97, Type1: "Bug", Type2: "Poison" },
                            { Pokemon: "Cloyster", Nickname: "IIII--??(U", Level: 100, Type1: "Water", Type2: "Ice" },
                            { Pokemon: "Dragonite", Nickname: "AAA--xxµµµ", Level: 61, Type1: "Dragon", Type2: "Flying" },
                            { Pokemon: "Zapdos", Nickname: "(ssjj µ..,", Level: 100, Type1: "Electric", Type2: "Flying" },
                            { Pokemon: "Victreebel", Nickname: "RRQPO:ππππ", Level: 92, Type1: "Grass", Type2: "Poison" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { "Name": "Charmander", "Time": "0d 0h 4m", "Group": "Pokemon" },
                    { "Name": "Kakuna", "Time": "0d 2h 33m", "Group": "Pokemon" },
                    {
                        "Name": "Charmeleon",
                        "Time": "0d 8h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Poliwag",
                        "Time": "0d 15h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Magikarp",
                        "Time": "1d 7h 43m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Onix",
                        "Time": "1d 7h 58m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Mankey",
                        "Time": "1d 9h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Charizard",
                        "Time": "1d 11h 10m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Pidgey",
                        "Time": "1d 21h 14m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Krabby",
                        "Time": "1d 21h 16m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Fearow",
                        "Time": "2d 21h 15m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Poliwhirl",
                        "Time": "2d 21h 18m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Paras",
                        "Time": "2d 21h 19m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Diglett",
                        "Time": "2d 23h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Venonat",
                        "Time": "3d 0h 18m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Weepinbell",
                        "Time": "3d 0h 22m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Jynx",
                        "Time": "3d 2h 58m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Meowth",
                        "Time": "4d 10h 10m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Exeggcute",
                        "Time": "4d 10h 16m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Parasect",
                        "Time": "4d 16h 48m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Doduo",
                        "Time": "4d 21h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Horsea",
                        "Time": "4d 21h 15m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Pidgeotto",
                        "Time": "4d 21h 36m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Slowbro",
                        "Time": "4d 23h 26m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Rhyhorn",
                        "Time": "6d 1h 5m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Magmar",
                        "Time": "6d 3h 27m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Marowak",
                        "Time": "6d 8h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Eevee",
                        "Time": "7d 3h 53m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Flareon",
                        "Time": "7d 4h 26m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Hitmonchan",
                        "Time": "7d 11h 1m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Muk",
                        "Time": "9d 10h 31m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Persian",
                        "Time": "10d 17h 56m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Electabuzz",
                        "Time": "10d 20h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Pinsir",
                        "Time": "10d 21h 19m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Snorlax",
                        "Time": "10d 23h 33m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Weezing",
                        "Time": "11d 7h 22m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Mr. Mime",
                        "Time": "11d 8h 1m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Gyarados",
                        "Time": "11d 8h 5m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Victreebel",
                        "Time": "11d 8h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Slowpoke",
                        "Time": "11d 15h 55m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Lickitung",
                        "Time": "12d 3h 54m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Kadabra",
                        "Time": "12d 16h 12m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "NidoranM",
                        "Time": "12d 19h 46m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Pikachu",
                        "Time": "12d 20h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Cubone",
                        "Time": "12d 20h 34m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Oddish",
                        "Time": "12d 21h 51m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Jigglypuff",
                        "Time": "13d 0h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Ekans",
                        "Time": "13d 1h 0m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "NidoranF",
                        "Time": "13d 1h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Weedle",
                        "Time": "13d 1h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Vulpix",
                        "Time": "13d 5h 20m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Metapod",
                        "Time": "13d 5h 26m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Lapras",
                        "Time": "13d 11h 51m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Psyduck",
                        "Time": "14d 2h 10m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Seel",
                        "Time": "14d 2h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Starmie",
                        "Time": "14d 2h 49m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Kabuto",
                        "Time": "14d 21h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Ponyta",
                        "Time": "14d 21h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Grimer",
                        "Time": "14d 21h 44m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Cloyster",
                        "Time": "15d 23h 18m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Caterpie",
                        "Time": "16d 11h 6m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Zapdos",
                        "Time": "17d 0h 17m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Scyther",
                        "Time": "17d 17h 39m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Kabutops",
                        "Time": "17d 18h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Koffing",
                        "Time": "18d 7h 3m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dratini",
                        "Time": "19d 5h 3m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Abra",
                        "Time": "19d 5h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Primeape",
                        "Time": "19d 7h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Porygon",
                        "Time": "19d 8h 9m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Seadra",
                        "Time": "27d 22h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Shellder",
                        "Time": "27d 23h 25m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Articuno",
                        "Time": "27d 23h 53m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Staryu",
                        "Time": "28d 2h 13m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Golbat",
                        "Time": "28d 3h 0m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Farfetch'd",
                        "Time": "28d 5h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dodrio",
                        "Time": "28d 6h 7m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Venomoth",
                        "Time": "28d 6h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Pidgeot",
                        "Time": "28d 7h 26m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Beedrill",
                        "Time": "28d 9h 17m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Spearow",
                        "Time": "28d 10h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Gengar",
                        "Time": "28d 12h 24m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Raticate",
                        "Time": "28d 13h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Tangela",
                        "Time": "28d 20h 36m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Magneton",
                        "Time": "28d 21h 52m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Arbok",
                        "Time": "28d 21h 58m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Rhydon",
                        "Time": "28d 23h 39m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Electrode",
                        "Time": "29d 0h 43m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Chansey",
                        "Time": "29d 0h 50m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Sandslash",
                        "Time": "29d 1h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Rattata",
                        "Time": "29d 13h 53m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Squirtle",
                        "Time": "29d 21h 22m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Bulbasaur",
                        "Time": "29d 22h 40m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Bellsprout",
                        "Time": "30d 0h 46m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Voltorb",
                        "Time": "30d 2h 22m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Machop",
                        "Time": "30d 2h 46m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Zubat",
                        "Time": "30d 3h 4m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Sandshrew",
                        "Time": "30d 3h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Geodude",
                        "Time": "30d 3h 17m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Clefairy",
                        "Time": "30d 3h 57m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Drowzee",
                        "Time": "30d 6h 23m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Ditto",
                        "Time": "30d 6h 55m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Growlithe",
                        "Time": "30d 7h 21m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Nidorina",
                        "Time": "30d 8h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Alakazam",
                        "Time": "30d 12h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Gastly",
                        "Time": "30d 16h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Haunter",
                        "Time": "30d 16h 58m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Machoke",
                        "Time": "30d 19h 34m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Tentacruel",
                        "Time": "30d 21h 39m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Tentacool",
                        "Time": "30d 21h 43m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Omanyte",
                        "Time": "30d 22h 27m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Omastar",
                        "Time": "30d 23h 1m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dragonair",
                        "Time": "31d 1h 58m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Exeggutor",
                        "Time": "31d 5h 50m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Wartortle",
                        "Time": "31d 8h 59m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Machamp",
                        "Time": "31d 11h 0m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Aerodactyl",
                        "Time": "31d 18h 2m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Venusaur",
                        "Time": "32d 1h 46m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Golduck",
                        "Time": "32d 5h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dragonite",
                        "Time": "33d 11h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Kangaskhan",
                        "Time": "33d 12h 0m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Moltres",
                        "Time": "33d 12h 14m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Blastoise",
                        "Time": "33d 13h 6m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Clefable",
                        "Time": "33d 15h 29m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Arcanine",
                        "Time": "33d 18h 11m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Rapidash",
                        "Time": "33d 18h 19m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Ninetales",
                        "Time": "33d 19h 40m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dewgong",
                        "Time": "33d 20h 59m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Seaking",
                        "Time": "33d 21h 21m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Kingler",
                        "Time": "33d 21h 47m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Goldeen",
                        "Time": "34d 4h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Vaporeon",
                        "Time": "34d 5h 17m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Hypno",
                        "Time": "34d 13h 10m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Raichu",
                        "Time": "34d 14h 6m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Wigglytuff",
                        "Time": "34d 21h 5m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Nidorino",
                        "Time": "34d 23h 30m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Butterfree",
                        "Time": "35d 6h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Dugtrio",
                        "Time": "35d 7h 8m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Gloom",
                        "Time": "35d 10h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Vileplume",
                        "Time": "35d 12h 1m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Nidoqueen",
                        "Time": "35d 13h 32m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Golem",
                        "Time": "35d 14h 38m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Nidoking",
                        "Time": "35d 14h 56m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Hitmonlee",
                        "Time": "35d 16h 20m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Tauros",
                        "Time": "35d 22h 16m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Mew",
                        "Time": "36d 3h 2m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Graveler",
                        "Time": "36d 8h 44m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Magnemite",
                        "Time": "36d 9h 1m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Jolteon",
                        "Time": "36d 12h 15m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Ivysaur",
                        "Time": "36d 19h 59m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Poliwrath",
                        "Time": "37d 0h 10m",
                        "Group": "Pokemon"
                    },
                    {
                        "Name": "Mewtwo",
                        "Time": "38d 17h 17m",
                        "Group": "Pokemon"
                    }
                ]
            },
            {
                RunName: "Touhoumon",
                ColorPrimary: "#fa83bb",
                ColorSecondary: "#c40962",
                Duration: "13d 15h 52m",
                StartDate: "2015-05-10T21:00:00Z",
                HostName: "AAABBHM",
                HostImage: "img/hosts/aaabbhm.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                BaseGame: "FireRed",
                Region: "Kanto",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        Time: "0d 21h 41m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        Time: "2d 0h 16m",
                        Attempts: 6
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        Time: "2d 22h 29m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        Time: "5d 6h 37m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        Time: "6d 11h 35m",
                        Attempts: 5
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        Time: "7d 17h 20m",
                        Attempts: 3
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        Time: "8d 17h 40m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        Time: "9d 13h 49m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lorelei",
                        Image: "img/trainers/firered/lorelei.png",
                        Time: "12d 5h 56m",
                        Attempts: 6
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/trainers/firered/bruno.png",
                        Time: "12d 22h 0m",
                        Attempts: 10
                    },
                    {
                        Group: "Elite Four",
                        Name: "Agatha",
                        Image: "img/trainers/firered/agatha.png",
                        Time: "13d 13h 40m",
                        Attempts: 12
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lance",
                        Image: "img/trainers/firered/lance.png",
                        Time: "13d 15h 36m",
                        Attempts: 2
                    },
                    {
                        Group: "Champions",
                        Name: "Green",
                        Image: "img/trainers/firered/renko.png",
                        ImageSource: "http://www.pokecommunity.com/showthread.php?t=293880",
                        Time: "13d 15h 44m",
                        Attempts: 1
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "13d 15h 46m", IDNo: "29177", Attempts: 44, Party: [
                            { Pokemon: "Sanae", Level: 79, Gender: "Female", Number: 2, IDNo: "29177" },
                            { Pokemon: "Cirno", Nickname: "BB", Gender: "Female", Level: 60, Number: 26, IDNo: "29177" },
                            { Pokemon: "Momiji", Nickname: "AUUUUABBBB", Level: 64, Gender: "Male", Number: 12, IDNo: "29177" },
                            { Pokemon: "Satori", Nickname: "Chauzu", Level: 64, Gender: "Male", Number: 79, IDNo: "29177" },
                            { Pokemon: "Tokiko", Nickname: "A", Level: 63, Gender: "Female", Number: 22, IDNo: "29177" },
                            { Pokemon: "Mima", Level: 59, Gender: "Female", Number: "???", IDNo: "29177" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "CSanae", Time: "0d 0h 7m", Group: "Pokemon" },
                    { Name: "Sanae", Time: "4d 0h 48m", Group: "Pokemon" },
                    { Name: "CMomiji", Time: "2d 4h 16m", Group: "Pokemon" },
                    { Name: "Momiji", Time: "5d 3h 25m", Group: "Pokemon" },
                    { Name: "CMedicine", Time: "8d 21h 6m", Group: "Pokemon" },
                    { Name: "CKoakuma", Time: "6d 22h 26m", Group: "Pokemon" },
                    { Name: "CNazrin", Time: "0d 3h 46m", Group: "Pokemon" },
                    { Name: "CTokiko", Time: "0d 4h 1m", Group: "Pokemon" },
                    { Name: "Tokiko", Time: "2d 3h 8m", Group: "Pokemon" },
                    { Name: "CCirno", Time: "4d 13h 26m", Group: "Pokemon" },
                    { Name: "Cirno", Time: "7d 3h 57m", Group: "Pokemon" },
                    { Name: "CRumia", Time: "11d 1h 24m", Group: "Pokemon" },
                    { Name: "Hourai", Time: "6d 7h 42m", Group: "Pokemon" },
                    { Name: "CMystia", Time: "3d 16h 27m", Group: "Pokemon" },
                    { Name: "CKeine", Time: "6d 13h 49m", Group: "Pokemon" },
                    { Name: "CLetty", Time: "11d 8h 26m", Group: "Pokemon" },
                    { Name: "CPatchouli", Time: "7d 0h 24m", Group: "Pokemon" },
                    { Name: "CParsee", Time: "3d 8h 29m", Group: "Pokemon" },
                    { Name: "CMurasa", Time: "7d 0h 37m", Group: "Pokemon" },
                    { Name: "CKogasa", Time: "6d 7h 24m", Group: "Pokemon" },
                    { Name: "CSatori", Time: "1d 0h 36m", Group: "Pokemon" },
                    { Name: "Satori", Time: "6d 10h 44m", Group: "Pokemon" },
                    { Name: "CEirin", Time: "8d 23h 35m", Group: "Pokemon" },
                    { Name: "CRan", Time: "6d 8h 17m", Group: "Pokemon" },
                    { Name: "Yousei", Time: "0d 3h 58m", Group: "Pokemon" },
                    { Name: "CNitori", Time: "11d 0h 0m", Group: "Pokemon" },
                    { Name: "CKomachi", Time: "6d 7h 56m", Group: "Pokemon" },
                    { Name: "CYuyuko", Time: "5d 2h 22m", Group: "Pokemon" },
                    { Name: "CMeiling", Time: "4d 0h 31m", Group: "Pokemon" },
                    { Name: "CSakuya", Time: "6d 21h 51m", Group: "Pokemon" },
                    { Name: "CLunasa", Time: "4d 23h 9m", Group: "Pokemon" },
                    { Name: "CMerlin", Time: "5d 0h 3m", Group: "Pokemon" },
                    { Name: "CLyrica", Time: "4d 23h 57m", Group: "Pokemon" },
                    { Name: "CRin", Time: "8d 1h 27m", Group: "Pokemon" },
                    { Name: "CSunny", Time: "0d 7h 40m", Group: "Pokemon" },
                    { Name: "CStar", Time: "0d 7h 38m", Group: "Pokemon" },
                    { Name: "Kedama", Time: "6d 7h 47m", Group: "Pokemon" },
                    { Name: "CReimu", Time: "8d 0h 36m", Group: "Pokemon" },
                    { Name: "CByakuren", Time: "8d 0h 44m", Group: "Pokemon" },
                    { Name: "CToyohime", Time: "5d 16h 1m", Group: "Pokemon" },
                    { Name: "Mima", Time: "9d 3h 52m", Group: "Pokemon" },
                    { Name: "Rinnosuke", Time: "7d 3h 3m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Moemon",
                ColorPrimary: "#a779d0",
                ColorSecondary: "#683597",
                Duration: "13d 15h 52m",
                StartDate: "2015-05-10T21:00:00Z",
                HostName: "AAtatat",
                HostImage: "img/hosts/aatatat.png",
                HostImageSource: "http://angelofsloths.tumblr.com/post/119327711600/my-atta-sprite",
                BaseGame: "FireRed",
                Region: "Kanto",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        Time: "0d 17h 22m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        Time: "1d 21h 24m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        Time: "3d 4h 35m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        Time: "5d 1h 27m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        Time: "6d 4h 13m",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        Time: "7d 21h 11m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        Time: "8d 15h 52m",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        Time: "9d 9h 18m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lorelei",
                        Image: "img/trainers/firered/lorelei.png",
                        Time: "11d 7h 17m",
                        Attempts: 10
                    },
                    {
                        Group: "Elite Four",
                        Name: "Bruno",
                        Image: "img/trainers/firered/bruno.png",
                        Time: "11d 8h 38m",
                        Attempts: 3
                    },
                    {
                        Group: "Elite Four",
                        Name: "Agatha",
                        Image: "img/trainers/firered/agatha.png",
                        Time: "11d 12h 11m",
                        Attempts: 4
                    },
                    {
                        Group: "Elite Four",
                        Name: "Lance",
                        Image: "img/trainers/firered/lance.png",
                        Time: "12d 4h 5m",
                        Attempts: 11
                    },
                    {
                        Group: "Champions",
                        Name: "Green",
                        Image: "img/trainers/firered/green.png",
                        Time: "12d 4h 51m",
                        Attempts: 2
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "12d 4h 52m", IDNo: "42115", Attempts: 40, Party: [
                            { Pokemon: "Dugtrio", Nickname: "AHHHHHIIII", Level: 44, Gender: "Female", Number: 51, IDNo: "42115" },
                            { Pokemon: "Vaporeon", Nickname: "ACCCIOOWWW", Gender: "Female", Level: 81, Number: 134, IDNo: "42115" },
                            { Pokemon: "Pidgeot", Nickname: "T", Level: 50, Gender: "Female", Number: 18, IDNo: "42115" },
                            { Pokemon: "Butterfree", Nickname: "BUTTERBAE", Level: 51, Gender: "Female", Number: 12, IDNo: "42115" },
                            { Pokemon: "Charizard", Nickname: "FFF  ", Level: 63, Gender: "Female", Number: 6, IDNo: "42115" },
                            { Pokemon: "Electabuzz", Nickname: "AAAVX", Level: 71, Gender: "Female", Number: 125, IDNo: "42115" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "Charmander", Time: "0d 0h 6m", Group: "Pokemon" },
                    { Name: "Charmeleon", Time: "0d 14h 7m", Group: "Pokemon" },
                    { Name: "Charizard", Time: "4d 16h 17m", Group: "Pokemon" },
                    { Name: "Caterpie", Time: "0d 7h 39m", Group: "Pokemon" },
                    { Name: "Metapod", Time: "0d 22h 7m", Group: "Pokemon" },
                    { Name: "Butterfree", Time: "1d 20h 5m", Group: "Pokemon" },
                    { Name: "Weedle", Time: "2d 18h 3m", Group: "Pokemon" },
                    { Name: "Pidgey", Time: "0d 3h 48m", Group: "Pokemon" },
                    { Name: "Pidgeotto", Time: "1d 15h 38m", Group: "Pokemon" },
                    { Name: "Pidgeot", Time: "4d 9h 11m", Group: "Pokemon" },
                    { Name: "Rattata", Time: "0d 3h 46m", Group: "Pokemon" },
                    { Name: "Spearow", Time: "2d 22h 13m", Group: "Pokemon" },
                    { Name: "Ekans", Time: "2d 2h 33m", Group: "Pokemon" },
                    { Name: "Pikachu", Time: "3d 7h 46m", Group: "Pokemon" },
                    { Name: "NidoranM", Time: "6d 8h 28m", Group: "Pokemon" },
                    { Name: "Nidorino", Time: "6d 8h 41m", Group: "Pokemon" },
                    { Name: "Clefairy", Time: "7d 7h 53m", Group: "Pokemon" },
                    { Name: "Zubat", Time: "1d 12h 58m", Group: "Pokemon" },
                    { Name: "Golbat", Time: "11d 2h 59m", Group: "Pokemon" },
                    { Name: "Oddish", Time: "2d 19h 15m", Group: "Pokemon" },
                    { Name: "Gloom", Time: "6d 16h 57m", Group: "Pokemon" },
                    { Name: "Vileplume", Time: "6d 17h 3m", Group: "Pokemon" },
                    { Name: "Paras", Time: "6d 7h 47m", Group: "Pokemon" },
                    { Name: "Venonat", Time: "8d 21h 40m", Group: "Pokemon" },
                    { Name: "Dugtrio", Time: "3d 6h 2m", Group: "Pokemon" },
                    { Name: "Meowth", Time: "8d 19h 50m", Group: "Pokemon" },
                    { Name: "Psyduck", Time: "11d 4h 18m", Group: "Pokemon" },
                    { Name: "Growlithe", Time: "8d 4h 56m", Group: "Pokemon" },
                    { Name: "Abra", Time: "2d 17h 57m", Group: "Pokemon" },
                    { Name: "Tentacool", Time: "8d 23h 55m", Group: "Pokemon" },
                    { Name: "Geodude", Time: "1d 14h 34m", Group: "Pokemon" },
                    { Name: "Doduo", Time: "6d 7h 42m", Group: "Pokemon" },
                    { Name: "Grimer", Time: "8d 4h 52m", Group: "Pokemon" },
                    { Name: "Voltorb", Time: "7d 19h 25m", Group: "Pokemon" },
                    { Name: "Exeggcute", Time: "6d 9h 8m", Group: "Pokemon" },
                    { Name: "Hitmonchan", Time: "5d 12h 46m", Group: "Pokemon" },
                    { Name: "Koffing", Time: "8d 8h 55m", Group: "Pokemon" },
                    { Name: "Rhyhorn", Time: "6d 9h 29m", Group: "Pokemon" },
                    { Name: "Tangela", Time: "8d 23h 58m", Group: "Pokemon" },
                    { Name: "Electabuzz", Time: "7d 20h 6m", Group: "Pokemon" },
                    { Name: "Magikarp", Time: "0d 23h 22m", Group: "Pokemon" },
                    { Name: "Lapras", Time: "7d 11h 34m", Group: "Pokemon" },
                    { Name: "Eevee", Time: "4d 23h 58m", Group: "Pokemon" },
                    { Name: "Vaporeon", Time: "5d 0h 55m", Group: "Pokemon" },
                    { Name: "Omanyte", Time: "8d 1h 49m", Group: "Pokemon" },
                    { Name: "Aerodactyl", Time: "8d 2h 1m", Group: "Pokemon" },
                    { Name: "Cacturne", Time: "12d 12h 44m", Group: "Pokemon" },
                    { Name: "Venusaur", Time: "12d 13h 55m", Group: "Pokemon" },
                    { Name: "Spheal", Time: "12d 13h 58m", Group: "Pokemon" },
                    { Name: "Grovyle", Time: "12d 14h 15m", Group: "Pokemon" },
                    { Name: "Ivysaur", Time: "12d 14h 54m", Group: "Pokemon" },
                    { Name: "Cascoon", Time: "12d 14h 56m", Group: "Pokemon" },
                    { Name: "Shedinja", Time: "12d 15h 21m", Group: "Pokemon" },
                    { Name: "Jumpluff", Time: "12d 15h 24m", Group: "Pokemon" },
                    { Name: "Illumise", Time: "12d 15h 29m", Group: "Pokemon" },
                    { Name: "Baltoy", Time: "12d 15h 37m", Group: "Pokemon" },
                    { Name: "Weezing", Time: "12d 15h 39m", Group: "Pokemon" },
                    { Name: "Wurmple", Time: "12d 15h 42m", Group: "Pokemon" },
                    { Name: "Magcargo", Time: "12d 16h 56m", Group: "Pokemon" },
                    { Name: "Skitty", Time: "12d 20h 12m", Group: "Pokemon" },
                    { Name: "Mudkip", Time: "12d 17h 9m", Group: "Pokemon" },
                    { Name: "Dodrio", Time: "12d 21h 3m", Group: "Pokemon" },
                    { Name: "Marowak", Time: "13d 2h 9m", Group: "Pokemon" },
                    { Name: "Tyrogue", Time: "13d 2h 21m", Group: "Pokemon" },
                    { Name: "Linoone", Time: "13d 7h 30m", Group: "Pokemon" },
                ]
            },
            {
                RunName: "Randomized Alpha Sapphire",
                ColorPrimary: "#242c86",
                ColorSecondary: "#242c86",
                //Duration: "14d 1h 27m",
                Duration: "14d 5h 29m",
                StartDate: "2015-07-12T21:00:00Z",
                HostName: "!!!0999   qq",
                HostImage: "img/hosts/qq.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Hoenn",
                BaseGame: "Emerald",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/alphasapphire",
                //     parts: [],
                //     pokemon: true
                // },
                TPPOrgLink: "http://twitchplayspokemon.org/alphasapphire",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Cocoon (Stone) Badge",
                        Image: "img/randomized/alphasapphire/cocoon.png",
                        Time: "0d 5h 43m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3d3lg8/randomized_gym_badges_stone_badge_cocoon_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "SnareDrum (Knuckle) Badge",
                        Image: "img/randomized/alphasapphire/snaredrum.png",
                        Time: "0d 11h 33m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3d4lgx/randomized_gym_badges_knuckle_badge_snaredrum/"
                    },
                    {
                        Group: "Badges",
                        Name: "Helmet (Dynamo) Badge",
                        Image: "img/randomized/alphasapphire/helmet.png",
                        Time: "0d 21h 10m",
                        Attempts: 2,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3d7xoy/randomized_gym_badges_dynamo_badge_helmet_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Scale (Heat) Badge",
                        Image: "img/randomized/alphasapphire/scale.png",
                        Time: "1d 23h 21m",
                        Attempts: 3,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3dbdp0/randomized_gym_badges_heat_badge_scale_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Star (Balance) Badge",
                        Image: "img/randomized/alphasapphire/star.png",
                        Time: "2d 0h 18m",
                        Attempts: 1,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3dcw18/randomized_gym_badges_balance_badge_star_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Pine (Feather) Badge",
                        Image: "img/randomized/alphasapphire/pine.png",
                        Time: "4d 3h 40m",
                        Attempts: 6,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3disqu/randomized_gym_badges_feather_badge_pine_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Mask (Mind) Badge",
                        Image: "img/randomized/alphasapphire/mask.png",
                        Time: "5d 2h 31m",
                        Attempts: 5,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3dotfy/randomized_gym_badges_mind_badge_mask_badge/"
                    },
                    {
                        Group: "Badges",
                        Name: "Sky (Rain) Badge",
                        Image: "img/randomized/alphasapphire/sky.png",
                        Time: "6d 12h 38m",
                        Attempts: 3,
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3dtdkn/randomized_gym_badges_rain_badge_sky_badge/"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Espen (Sidney)",
                        Image: "img/randomized/alphasapphire/sidney.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3e2urn/sidney_espen_hoenns_master_illusionist_animated/",
                        Time: "7d 15h 9m",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Fantasia (Phoebe)",
                        Image: "img/randomized/alphasapphire/phoebe.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3e8k5f/phoebe_fantasia_hoenns_reclusive_noble_animated/",
                        Time: "8d 4h 39m",
                        Attempts: 12
                    },
                    {
                        Group: "Elite Four",
                        Name: "Evia (Glacia)",
                        Image: "img/randomized/alphasapphire/glacia.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3eh6dj/glacia_evia_hoenns_prideful_secret_agent_animated/",
                        Time: "8d 9h 5m",
                        Attempts: 5
                    },
                    {
                        Group: "Elite Four",
                        Name: "Nox (Drake)",
                        Image: "img/randomized/alphasapphire/drake.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3ey4q1/drake_nox_hoenns_expert_ranger_animated/",
                        Time: "8d 20h 50m",
                        Attempts: 8
                    },
                    {
                        Group: "Champions",
                        Name: "Steven",
                        Image: "img/trainers/emerald/steven.png",
                        Time: "8d 23h 8m",
                        Attempts: 2
                    },
                    {
                        Group: "Champions",
                        Name: "Zinnia",
                        Image: "img/trainers/emerald/zinnia.png",
                        ImageSource: "http://kinectedwires.deviantart.com/art/OR-AS-Zinnia-Sprite-505257562",
                        Time: "10d 6h 30m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Espen (Sidney)",
                        Image: "img/randomized/alphasapphire/rematch/sidney.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3e2urn/sidney_espen_hoenns_master_illusionist_animated/",
                        Time: "12d 1h 18m",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Fantasia (Phoebe)",
                        Image: "img/randomized/alphasapphire/rematch/phoebe.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3e8k5f/phoebe_fantasia_hoenns_reclusive_noble_animated/",
                        Time: "12d 4h 58m",
                        Attempts: 9
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Evia (Glacia)",
                        Image: "img/randomized/alphasapphire/rematch/glacia.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3eh6dj/glacia_evia_hoenns_prideful_secret_agent_animated/",
                        Time: "13d 21h 33m",
                        Attempts: 10
                    },
                    {
                        Group: "Elite Four Rematch",
                        Name: "Nox (Drake)",
                        Image: "img/randomized/alphasapphire/rematch/drake.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3ey4q1/drake_nox_hoenns_expert_ranger_animated/",
                        Time: "13d 21h 38m",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "Steven",
                        Image: "img/trainers/emerald/rematch/steven.png",
                        Time: "14d 1h 27m",
                        Attempts: 6
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "8d 23h 12m", Attempts: 46, Party: [
                            { Pokemon: "Cacturne", Nickname: "r", Level: 73, Gender: "Female" },
                            { Pokemon: "Jellicent", Nickname: "Wingull9xx88", Level: 95, Gender: "Female" },
                            { Pokemon: "Glaceon", Nickname: "Glaceonhfeer", Level: 83, Gender: "Female" },
                            { Pokemon: "Jellicent", Nickname: "Duskugbe", Level: 96, Gender: "Male" },
                            { Pokemon: "Wigglytuff", Nickname: "Chansey", Level: 100, Gender: "Female" },
                            { Pokemon: "Lanturn", Nickname: "Swinu  1xcc", Level: 86, Gender: "Female" },
                        ],
                        Image: "img/ribbons/champion-hoenn.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "14d 1h 29m", Attempts: 38, Party: [
                            { Pokemon: "Cacturne", Nickname: "r", Level: 100, Gender: "Female" },
                            { Pokemon: "Jellicent", Nickname: "Duskugbe", Level: 100, Gender: "Male" },
                            { Pokemon: "Jellicent", Nickname: "Wingull9xx88", Level: 100, Gender: "Female" },
                            { Pokemon: "Rayquaza", Nickname: "'999", Level: 100 },
                            { Pokemon: "Wigglytuff", Nickname: "Chansey", Level: 100, Gender: "Female" },
                            { Pokemon: "Lanturn", Nickname: ",,222", Level: 100, Gender: "Female", PreviousNick: "Swinu  1xcc" },
                        ],
                        Image: "img/ribbons/champion-hoenn.png"
                    },
                    { "Name": "Spoink", "Time": "1d 13h 1m", "Group": "Pokemon" },
                    { "Name": "Aipom", "Time": "4d 6h 31m", "Group": "Pokemon" },
                    { "Name": "Farfetch'd", "Time": "2d 23h 14m", "Group": "Pokemon" },
                    { "Name": "Staryu", "Time": "9d 13h 19m", "Group": "Pokemon" },
                    { "Name": "Infernape", "Time": "7d 7h 14m", "Group": "Pokemon" },
                    { "Name": "Torchic", "Time": "0d 0h 26m", "Group": "Pokemon" },
                    { "Name": "Rufflet", "Time": "0d 1h 26m", "Group": "Pokemon" },
                    { "Name": "Squirtle", "Time": "0d 1h 41m", "Group": "Pokemon" },
                    { "Name": "Glameow", "Time": "0d 2h 16m", "Group": "Pokemon" },
                    { "Name": "Lotad", "Time": "0d 2h 59m", "Group": "Pokemon" },
                    { "Name": "Pikachu", "Time": "0d 3h 1m", "Group": "Pokemon" },
                    { "Name": "Dratini", "Time": "0d 3h 3m", "Group": "Pokemon" },
                    { "Name": "Tynamo", "Time": "0d 3h 15m", "Group": "Pokemon" },
                    { "Name": "Solosis", "Time": "0d 4h 23m", "Group": "Pokemon" },
                    { "Name": "Lampent", "Time": "0d 4h 36m", "Group": "Pokemon" },
                    { "Name": "Wingull", "Time": "0d 6h 11m", "Group": "Pokemon" },
                    { "Name": "Fennekin", "Time": "0d 6h 20m", "Group": "Pokemon" },
                    { "Name": "Horsea", "Time": "0d 7h 0m", "Group": "Pokemon" },
                    { "Name": "Spewpa", "Time": "0d 7h 29m", "Group": "Pokemon" },
                    { "Name": "Kingler", "Time": "0d 10h 9m", "Group": "Pokemon" },
                    { "Name": "Beldum", "Time": "0d 11h 54m", "Group": "Pokemon" },
                    { "Name": "Corsola", "Time": "0d 13h 29m", "Group": "Pokemon" },
                    { "Name": "Shroomish", "Time": "0d 19h 18m", "Group": "Pokemon" },
                    { "Name": "Wynaut", "Time": "0d 22h 46m", "Group": "Pokemon" },
                    { "Name": "Luvdisc", "Time": "0d 22h 56m", "Group": "Pokemon" },
                    { "Name": "Weedle", "Time": "0d 23h 24m", "Group": "Pokemon" },
                    { "Name": "Surskit", "Time": "1d 0h 36m", "Group": "Pokemon" },
                    { "Name": "Diglett", "Time": "1d 2h 28m", "Group": "Pokemon" },
                    { "Name": "Gothorita", "Time": "1d 4h 45m", "Group": "Pokemon" },
                    { "Name": "Snivy", "Time": "1d 5h 3m", "Group": "Pokemon" },
                    { "Name": "Masquerain", "Time": "1d 5h 11m", "Group": "Pokemon" },
                    { "Name": "Elekid", "Time": "1d 5h 42m", "Group": "Pokemon" },
                    { "Name": "Clefairy", "Time": "1d 5h 47m", "Group": "Pokemon" },
                    { "Name": "Kabuto", "Time": "1d 5h 49m", "Group": "Pokemon" },
                    { "Name": "Exeggcute", "Time": "1d 6h 3m", "Group": "Pokemon" },
                    { "Name": "Ivysaur", "Time": "1d 6h 39m", "Group": "Pokemon" },
                    { "Name": "Chikorita", "Time": "1d 6h 43m", "Group": "Pokemon" },
                    { "Name": "Shelmet", "Time": "1d 6h 47m", "Group": "Pokemon" },
                    { "Name": "Mudkip", "Time": "1d 7h 53m", "Group": "Pokemon" },
                    { "Name": "Flabébé", "Time": "1d 8h 46m", "Group": "Pokemon" },
                    { "Name": "Vullaby", "Time": "1d 9h 19m", "Group": "Pokemon" },
                    { "Name": "Grotle", "Time": "1d 9h 31m", "Group": "Pokemon" },
                    { "Name": "Jynx", "Time": "1d 10h 40m", "Group": "Pokemon" },
                    { "Name": "Sawsbuck", "Time": "1d 12h 30m", "Group": "Pokemon" },
                    { "Name": "Flygon", "Time": "1d 12h 51m", "Group": "Pokemon" },
                    { "Name": "Cranidos", "Time": "1d 13h 48m", "Group": "Pokemon" },
                    { "Name": "Marowak", "Time": "1d 18h 29m", "Group": "Pokemon" },
                    { "Name": "Tentacool", "Time": "1d 18h 35m", "Group": "Pokemon" },
                    { "Name": "Magnemite", "Time": "1d 18h 43m", "Group": "Pokemon" },
                    { "Name": "Krabby", "Time": "1d 20h 26m", "Group": "Pokemon" },
                    { "Name": "Roserade", "Time": "1d 23h 21m", "Group": "Pokemon" },
                    { "Name": "Marill", "Time": "2d 4h 40m", "Group": "Pokemon" },
                    { "Name": "Numel", "Time": "2d 4h 50m", "Group": "Pokemon" },
                    { "Name": "Swinub", "Time": "2d 4h 54m", "Group": "Pokemon" },
                    { "Name": "Lileep", "Time": "2d 5h 18m", "Group": "Pokemon" },
                    { "Name": "Duskull", "Time": "2d 7h 11m", "Group": "Pokemon" },
                    { "Name": "Latias", "Time": "2d 9h 4m", "Group": "Pokemon" },
                    { "Name": "Audino", "Time": "2d 9h 28m", "Group": "Pokemon" },
                    { "Name": "Amoonguss", "Time": "2d 11h 33m", "Group": "Pokemon" },
                    { "Name": "Tyrantrum", "Time": "2d 11h 36m", "Group": "Pokemon" },
                    { "Name": "Kecleon", "Time": "2d 13h 14m", "Group": "Pokemon" },
                    { "Name": "Chansey", "Time": "2d 14h 19m", "Group": "Pokemon" },
                    { "Name": "Yanma", "Time": "2d 15h 44m", "Group": "Pokemon" },
                    { "Name": "Minun", "Time": "2d 16h 24m", "Group": "Pokemon" },
                    { "Name": "Swoobat", "Time": "2d 16h 41m", "Group": "Pokemon" },
                    { "Name": "Cacturne", "Time": "2d 16h 45m", "Group": "Pokemon" },
                    { "Name": "Jellicent", "Time": "2d 20h 12m", "Group": "Pokemon" },
                    { "Name": "Swablu", "Time": "3d 2h 43m", "Group": "Pokemon" },
                    { "Name": "Wigglytuff", "Time": "3d 3h 43m", "Group": "Pokemon" },
                    { "Name": "Barbaracle", "Time": "3d 4h 9m", "Group": "Pokemon" },
                    { "Name": "Ferroseed", "Time": "3d 5h 21m", "Group": "Pokemon" },
                    { "Name": "Snubbull", "Time": "3d 5h 21m", "Group": "Pokemon" },
                    { "Name": "Egg", "Time": "3d 9h 14m", "Group": "Pokemon" },
                    { "Name": "Jolteon", "Time": "3d 10h 12m", "Group": "Pokemon" },
                    { "Name": "Munchlax", "Time": "3d 10h 18m", "Group": "Pokemon" },
                    { "Name": "Grovyle", "Time": "3d 10h 54m", "Group": "Pokemon" },
                    { "Name": "Emolga", "Time": "3d 17h 21m", "Group": "Pokemon" },
                    { "Name": "Combusken", "Time": "3d 20h 59m", "Group": "Pokemon" },
                    { "Name": "Gligar", "Time": "4d 3h 50m", "Group": "Pokemon" },
                    { "Name": "Shieldon", "Time": "4d 3h 55m", "Group": "Pokemon" },
                    { "Name": "Lunatone", "Time": "4d 4h 26m", "Group": "Pokemon" },
                    { "Name": "Gurdurr", "Time": "4d 5h 10m", "Group": "Pokemon" },
                    { "Name": "Scrafty", "Time": "4d 5h 13m", "Group": "Pokemon" },
                    { "Name": "Ducklett", "Time": "4d 5h 17m", "Group": "Pokemon" },
                    { "Name": "Zoroark", "Time": "4d 6h 2m", "Group": "Pokemon" },
                    { "Name": "Marshtomp", "Time": "4d 9h 52m", "Group": "Pokemon" },
                    { "Name": "Tropius", "Time": "4d 13h 16m", "Group": "Pokemon" },
                    { "Name": "Pansage", "Time": "4d 13h 20m", "Group": "Pokemon" },
                    { "Name": "Slowpoke", "Time": "4d 13h 25m", "Group": "Pokemon" },
                    { "Name": "Castform", "Time": "4d 13h 35m", "Group": "Pokemon" },
                    { "Name": "Axew", "Time": "4d 14h 20m", "Group": "Pokemon" },
                    { "Name": "Stoutland", "Time": "4d 15h 28m", "Group": "Pokemon" },
                    { "Name": "Glaceon", "Time": "4d 21h 30m", "Group": "Pokemon" },
                    { "Name": "Swampert", "Time": "4d 22h 12m", "Group": "Pokemon" },
                    { "Name": "Carnivine", "Time": "5d 1h 8m", "Group": "Pokemon" },
                    { "Name": "Steelix", "Time": "5d 2h 5m", "Group": "Pokemon" },
                    { "Name": "Talonflame", "Time": "5d 4h 22m", "Group": "Pokemon" },
                    { "Name": "Espeon", "Time": "5d 7h 27m", "Group": "Pokemon" },
                    { "Name": "Nidorino", "Time": "5d 9h 18m", "Group": "Pokemon" },
                    { "Name": "Lucario", "Time": "5d 9h 28m", "Group": "Pokemon" },
                    { "Name": "Swellow", "Time": "5d 9h 32m", "Group": "Pokemon" },
                    { "Name": "Floatzel", "Time": "5d 9h 35m", "Group": "Pokemon" },
                    { "Name": "Tentacruel", "Time": "5d 9h 41m", "Group": "Pokemon" },
                    { "Name": "Honedge", "Time": "5d 11h 14m", "Group": "Pokemon" },
                    { "Name": "Feebas", "Time": "5d 11h 24m", "Group": "Pokemon" },
                    { "Name": "Kyogre", "Time": "5d 11h 50m", "Group": "Pokemon" },
                    { "Name": "Burmy", "Time": "5d 14h 22m", "Group": "Pokemon" },
                    { "Name": "Chandelure", "Time": "5d 14h 38m", "Group": "Pokemon" },
                    { "Name": "Cinccino", "Time": "5d 14h 50m", "Group": "Pokemon" },
                    { "Name": "Lanturn", "Time": "5d 15h 26m", "Group": "Pokemon" },
                    { "Name": "Koffing", "Time": "6d 4h 1m", "Group": "Pokemon" },
                    { "Name": "Voltorb", "Time": "6d 4h 8m", "Group": "Pokemon" },
                    { "Name": "Mawile", "Time": "6d 4h 20m", "Group": "Pokemon" },
                    { "Name": "Shellos", "Time": "6d 4h 23m", "Group": "Pokemon" },
                    { "Name": "Litwick", "Time": "6d 4h 39m", "Group": "Pokemon" },
                    { "Name": "Seadra", "Time": "6d 14h 2m", "Group": "Pokemon" },
                    { "Name": "Electrode", "Time": "6d 14h 51m", "Group": "Pokemon" },
                    { "Name": "Shiftry", "Time": "6d 15h 40m", "Group": "Pokemon" },
                    { "Name": "Kadabra", "Time": "6d 17h 6m", "Group": "Pokemon" },
                    { "Name": "Amaura", "Time": "6d 18h 20m", "Group": "Pokemon" },
                    { "Name": "Zangoose", "Time": "6d 19h 24m", "Group": "Pokemon" },
                    { "Name": "Durant", "Time": "6d 19h 34m", "Group": "Pokemon" },
                    { "Name": "Pignite", "Time": "6d 20h 33m", "Group": "Pokemon" },
                    { "Name": "Maractus", "Time": "6d 23h 41m", "Group": "Pokemon" },
                    { "Name": "Stunfisk", "Time": "6d 23h 45m", "Group": "Pokemon" },
                    { "Name": "Heracross", "Time": "7d 7h 50m", "Group": "Pokemon" },
                    { "Name": "Houndoom", "Time": "7d 8h 33m", "Group": "Pokemon" },
                    { "Name": "Cyndaquil", "Time": "9d 0h 7m", "Group": "Pokemon" },
                    { "Name": "Lugia", "Time": "9d 11h 33m", "Group": "Pokemon" },
                    { "Name": "Unown", "Time": "9d 12h 33m", "Group": "Pokemon" },
                    { "Name": "Golett", "Time": "9d 17h 49m", "Group": "Pokemon" },
                    { "Name": "Armaldo", "Time": "9d 18h 4m", "Group": "Pokemon" },
                    { "Name": "Cloyster", "Time": "9d 18h 54m", "Group": "Pokemon" },
                    { "Name": "Spinarak", "Time": "9d 19h 18m", "Group": "Pokemon" },
                    { "Name": "Dwebble", "Time": "9d 23h 30m", "Group": "Pokemon" },
                    { "Name": "Ho-Oh", "Time": "10d 5h 45m", "Group": "Pokemon" },
                    { "Name": "Electivire", "Time": "10d 5h 51m", "Group": "Pokemon" },
                    { "Name": "Rayquaza", "Time": "10d 6h 14m", "Group": "Pokemon" },
                    { "Name": "Deoxys", "Time": "10d 6h 33m", "Group": "Pokemon" },
                    { "Name": "Umbreon", "Time": "10d 18h 1m", "Group": "Pokemon" },
                    { "Name": "Purrloin", "Time": "10d 21h 5m", "Group": "Pokemon" },
                    { "Name": "NidoranM", "Time": "10d 21h 21m", "Group": "Pokemon" },
                    { "Name": "Natu", "Time": "10d 21h 26m", "Group": "Pokemon" },
                    { "Name": "Hitmonlee", "Time": "11d 8h 27m", "Group": "Pokemon" },
                    { "Name": "Cherrim", "Time": "11d 8h 32m", "Group": "Pokemon" },
                    { "Name": "Medicham", "Time": "11d 9h 38m", "Group": "Pokemon" },
                    { "Name": "Scolipede", "Time": "11d 9h 40m", "Group": "Pokemon" },
                    { "Name": "Buizel", "Time": "11d 9h 50m", "Group": "Pokemon" },
                    { "Name": "Hippopotas", "Time": "11d 9h 55m", "Group": "Pokemon" },
                    { "Name": "Bronzor", "Time": "11d 9h 57m", "Group": "Pokemon" },
                    { "Name": "Ponyta", "Time": "11d 10h 11m", "Group": "Pokemon" },
                    { "Name": "Dunsparce", "Time": "11d 10h 25m", "Group": "Pokemon" },
                    { "Name": "Skiddo", "Time": "11d 10h 34m", "Group": "Pokemon" },
                    { "Name": "Cherubi", "Time": "11d 10h 39m", "Group": "Pokemon" },
                    { "Name": "Machop", "Time": "11d 10h 43m", "Group": "Pokemon" },
                    { "Name": "Clamperl", "Time": "11d 11h 8m", "Group": "Pokemon" },
                    { "Name": "Haunter", "Time": "11d 11h 30m", "Group": "Pokemon" },
                    { "Name": "Tympole", "Time": "11d 11h 40m", "Group": "Pokemon" },
                    { "Name": "Baltoy", "Time": "11d 13h 28m", "Group": "Pokemon" },
                    { "Name": "Cottonee", "Time": "11d 14h 58m", "Group": "Pokemon" },
                    { "Name": "Dragonair", "Time": "11d 17h 41m", "Group": "Pokemon" },
                    { "Name": "Torterra", "Time": "11d 17h 55m", "Group": "Pokemon" },
                    { "Name": "Heatran", "Time": "11d 18h 1m", "Group": "Pokemon" },
                    { "Name": "Empoleon", "Time": "11d 18h 5m", "Group": "Pokemon" },
                    { "Name": "Chimchar", "Time": "14d 1h 41m", "Group": "Pokemon" },
                    { "Name": "Ralts", "Time": "14d 1h 45m", "Group": "Pokemon" },
                    { "Name": "Flareon", "Time": "14d 2h 50m", "Group": "Pokemon" },
                    { "Name": "Frillish", "Time": "14d 3h 54m", "Group": "Pokemon" }
                ]
            },
            {
                RunName: "Colosseum",
                ColorPrimary: "#bba155",
                ColorSecondary: "#644d2e",
                Duration: "6d 3h 31m",
                StartDate: "2015-10-12T21:00:00Z",
                HostName: "AAAAAAA",
                HostImage: "img/hosts/aaaaaaa.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Orre",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/colosseum",
                //     parts: [],
                //     pokemon: true
                // },
                TPPOrgLink: "http://twitchplayspokemon.org/colosseum",
                Events: [
                    {
                        Group: "Bosses",
                        Name: "Miror B.",
                        Image: "img/trainers/colosseum/mirorb.png",
                        ImageSource: "http://billyk40.deviantart.com/art/Miror-B-BW-258115890",
                        Time: "0d 23h 29m",
                        Attempts: 1
                    },
                    // {
                    //     Group: "Bosses",
                    //     Name: "Skrub",
                    //     Image: "img/trainers/colosseum/skrub.png",
                    //     ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherBlue.png.html",
                    //     Time: "1d 2h 8m",
                    //     Attempts: 2
                    // },
                    {
                        Group: "Bosses",
                        Name: "Dakim",
                        Image: "img/trainers/colosseum/dakim.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherDakim.png.html",
                        Time: "2d 20h 5m",
                        Attempts: 9
                    },
                    {
                        Group: "Bosses",
                        Name: "Venus",
                        Image: "img/trainers/colosseum/venus.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherVenus.png.html",
                        Time: "2d 23h 36m",
                        Attempts: 1
                    },
                    // {
                    //     Group: "Bosses",
                    //     Name: "Skrub",
                    //     Image: "img/trainers/colosseum/skrub.png",
                    //     ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherBlue.png.html",
                    //     Time: "4d 11h 5m",
                    //     Attempts: 1
                    // },
                    {
                        Group: "Bosses",
                        Name: "Ein",
                        Image: "img/trainers/colosseum/ein.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherEin.png.html",
                        Time: "4d 12h 2m",
                        Attempts: 2
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Venus",
                        Image: "img/trainers/colosseum/venus.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherVenus.png.html",
                        Time: "4d 17h 38m",
                        Attempts: 1
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Miror B.",
                        Image: "img/trainers/colosseum/mirorb.png",
                        ImageSource: "http://billyk40.deviantart.com/art/Miror-B-BW-258115890",
                        Time: "4d 17h 57m",
                        Attempts: 2
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Dakim",
                        Image: "img/trainers/colosseum/dakim.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherDakim.png.html",
                        Time: "5d 1h 39m",
                        Attempts: 2
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Ein",
                        Image: "img/trainers/colosseum/ein.png",
                        ImageSource: "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherEin.png.html",
                        Time: "5d 3h 9m",
                        Attempts: 5
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Gonzap",
                        Image: "img/trainers/colosseum/gonzap.png",
                        ImageSource: "http://forum.yugiohcardmaker.net/topic/200460-colosseum-sprites/",
                        Time: "5d 21h 42m",
                        Attempts: 3
                    },
                    {
                        Group: "Final Bosses",
                        Name: "Nascour",
                        Image: "img/trainers/colosseum/nascour.png",
                        ImageSource: "http://s1292.photobucket.com/user/Apollothemuse/media/Sprites/NascourSprite_zpse80724b9.png.html",
                        Time: "6d 2h 46m",
                        Attempts: 2
                    },
                    {
                        Group: "Champions",
                        Name: "Evice",
                        Image: "img/trainers/colosseum/evice.png",
                        ImageSource: "https://www.reddit.com/r/pokemon/comments/2z9gmy/cipher_head_evice_would_like_to_battle_oc_trainer/",
                        Time: "6d 3h 27m",
                        Attempts: 2
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "First Game Clear", Time: "6d 3h 29m", Party: [
                            { Pokemon: "Meganium", Level: 65, Gender: "Male" },
                            { Pokemon: "Espeon", Nickname: "ABLLVVWW♀", Level: 65, Gender: "Male" },
                            { Pokemon: "Jumpluff", Nickname: "AAAAKLV", Level: 50, Gender: "Female" },
                            { Pokemon: "Misdreavus", Nickname: "AAAAAAAAAA", Level: 67, Gender: "Male" },
                            { Pokemon: "Umbreon", Level: 59, Gender: "Male" },
                            { Pokemon: "Quagsire", Nickname: "UUUUV???", Level: 50, Gender: "Female" },
                        ],
                        Image: "img/ribbons/national.png"
                    },
                    { "Name": "Espeon", "Time": "0d 0h 0m", "Group": "Pokemon" },
                    { "Name": "Umbreon", "Time": "0d 0h 0m", "Group": "Pokemon" },
                    { "Name": "Bayleef", "Time": "0d 3h 23m", "Group": "Pokemon" },
                    { "Name": "Skiploom", "Time": "0d 3h 47m", "Group": "Pokemon" },
                    { "Name": "Flaaffy", "Time": "0d 5h 1m", "Group": "Pokemon" },
                    { "Name": "Remoraid", "Time": "0d 17h 24m", "Group": "Pokemon" },
                    { "Name": "Misdreavus", "Time": "0d 18h 19m", "Group": "Pokemon" },
                    { "Name": "Plusle", "Time": "0d 23h 44m", "Group": "Pokemon" },
                    { "Name": "Jumpluff", "Time": "1d 21h 45m", "Group": "Pokemon" },
                    { "Name": "Quagsire", "Time": "3d 15h 46m", "Group": "Pokemon" },
                    { "Name": "Meganium", "Time": "5d 13h 50m", "Group": "Pokemon" },
                    { "Name": "Absol", "Time": "5d 22h 32m", "Group": "Pokemon" },
                    { "Name": "Houndoom", "Time": "5d 23h 19m", "Group": "Pokemon" }
                ]
            },
            {
                RunName: "XD",
                ColorPrimary: "#532245",
                ColorSecondary: "#793165",
                Duration: "8d 4h 32m",
                StartDate: "2015-12-12T21:00:00Z",
                HostName: "ABBBCC",
                HostImage: "img/hosts/abbbcc.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3woea1/alphab%C4%93tos_av%C4%ABci/",
                Region: "Orre",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/xd",
                //     parts: [],
                //     pokemon: true
                // },
                TPPOrgLink: "http://twitchplayspokemon.org/xd",
                Events: [
                    // {
                    //     "Group": "Bosses",
                    //     "Image": "img/trainers/xd/naps.png",
                    //     "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherNaps.png.html",
                    //     "Name": "Naps",
                    //     "Time": "1d 3h 43m",
                    //     "Attempts": 1
                    // },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/lovrina.png",
                        "ImageSource": "http://djshop.smackjeeves.com/comics/381730/rui-lovrina/",
                        "Name": "Lovrina",
                        "Time": "1d 6h 50m",
                        "Attempts": 4
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/mirorb.png",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/MirorB.png.html",
                        "Name": "Miror B.",
                        "Time": "1d 18h 27m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/exol.png",
                        "ImageSource": "http://s1292.photobucket.com/user/Apollothemuse/media/Sprites/BulkyPeonSprite_zps84376303.png.html",
                        "Name": "Exol",
                        "Time": "2d 11h 13m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/snattle.png",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherSnattle.png.html",
                        "Name": "Snattle",
                        "Time": "3d 12h 13m",
                        "Attempts": 2
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/mirorb.png",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/MirorB.png.html",
                        "Name": "Miror B.",
                        "Time": "4d 18h 16m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/colosseum/gonzap.png",
                        "ImageSource": "http://forum.yugiohcardmaker.net/topic/200460-colosseum-sprites/",
                        "Name": "Gonzap",
                        "Time": "6d 20h 9m",
                        "Attempts": 2
                    },
                    {
                        "Group": "Bosses",
                        "Image": "img/trainers/xd/gorigan.png",
                        "ImageSource": "http://billyk40.deviantart.com/art/Gorigan-BW-257880611",
                        "Name": "Gorigan",
                        "Time": "7d 2h 58m",
                        "Attempts": 2
                    },
                    {
                        "Group": "Final Bosses",
                        "Image": "img/trainers/xd/lovrina.png",
                        "ImageSource": "http://djshop.smackjeeves.com/comics/381730/rui-lovrina/",
                        "Name": "Lovrina",
                        "Time": "7d 4h 59m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Final Bosses",
                        "Image": "img/trainers/xd/snattle.png",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherSnattle.png.html",
                        "Name": "Snattle",
                        "Time": "8d 1h 16m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Final Bosses",
                        "Image": "img/trainers/xd/ardos.png",
                        "Name": "Ardos",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/CipherArdos.png.html",
                        "Time": "8d 1h 44m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Final Bosses",
                        "Image": "img/trainers/xd/gorigan.png",
                        "ImageSource": "http://billyk40.deviantart.com/art/Gorigan-BW-257880611",
                        "Name": "Gorigan",
                        "Time": "8d 1h 55m",
                        "Attempts": 1
                    },
                    {
                        "Group": "Final Bosses",
                        "Image": "img/trainers/xd/eldes.png",
                        "ImageSource": "http://billyk40.deviantart.com/art/Eldes-BW-262784197",
                        "Name": "Eldes",
                        "Time": "8d 2h 32m",
                        "Attempts": 2
                    },
                    {
                        "Group": "Champions",
                        "Image": "img/trainers/xd/greevil.png",
                        "ImageSource": "http://s1305.photobucket.com/user/EliteknightTMP/media/Sprites/Cipher%20Sprites/greevil.gif.html",
                        "Name": "Greevil",
                        "Time": "8d 4h 9m",
                        "Attempts": 6
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "First Game Clear", Time: "8d 4h 11m", Party: [
                            { Pokemon: "Ampharos", Nickname: "AAAAAAAAAA", Level: 48, Gender: "Female" },
                            { Pokemon: "Swalot", Level: 48, Gender: "Female" },
                            { Pokemon: "Claydol", Nickname: "cDddDDDDDD", Level: 45 },
                            { Pokemon: "Sharpedo", Nickname: "AAAAAAAAAA", Level: 50, Gender: "Male" },
                            { Pokemon: "Walrein", Nickname: "//z   ppp ", Level: 67, Gender: "Male" },
                            { Pokemon: "Shiftry", Level: 49, Gender: "Male" },
                        ],
                        Image: "img/ribbons/national.png"
                    },
                    { "Name": "Eevee", "Time": "0d 0h 3m", "Group": "Pokemon" },
                    { "Name": "Teddiursa", "Time": "0d 1h 42m", "Group": "Pokemon" },
                    { "Name": "Ledyba", "Time": "0d 3h 12m", "Group": "Pokemon" },
                    { "Name": "Gulpin", "Time": "0d 17h 15m", "Group": "Pokemon" },
                    { "Name": "Baltoy", "Time": "0d 17h 55m", "Group": "Pokemon" },
                    { "Name": "Spheal", "Time": "0d 18h 32m", "Group": "Pokemon" },
                    { "Name": "Houndour", "Time": "0d 18h 35m", "Group": "Pokemon" },
                    { "Name": "Seedot", "Time": "0d 20h 18m", "Group": "Pokemon" },
                    { "Name": "Mareep", "Time": "0d 20h 28m", "Group": "Pokemon" },
                    { "Name": "Carvanha", "Time": "1d 2h 49m", "Group": "Pokemon" },
                    { "Name": "Shroomish", "Time": "1d 3h 7m", "Group": "Pokemon" },
                    { "Name": "Delcatty", "Time": "1d 6h 46m", "Group": "Pokemon" },
                    { "Name": "Vulpix", "Time": "1d 22h 19m", "Group": "Pokemon" },
                    { "Name": "Duskull", "Time": "2d 5h 8m", "Group": "Pokemon" },
                    { "Name": "Ralts", "Time": "2d 8h 7m", "Group": "Pokemon" },
                    { "Name": "Snorunt", "Time": "3d 5h 47m", "Group": "Pokemon" },
                    { "Name": "Roselia", "Time": "3d 7h 12m", "Group": "Pokemon" },
                    { "Name": "Nuzleaf", "Time": "3d 8h 51m", "Group": "Pokemon" },
                    { "Name": "Shiftry", "Time": "3d 9h 19m", "Group": "Pokemon" },
                    { "Name": "Sharpedo", "Time": "5d 12h 23m", "Group": "Pokemon" },
                    { "Name": "Flaaffy", "Time": "5d 21h 46m", "Group": "Pokemon" },
                    { "Name": "Sealeo", "Time": "6d 5h 32m", "Group": "Pokemon" },
                    { "Name": "Walrein", "Time": "6d 10h 53m", "Group": "Pokemon" },
                    { "Name": "Paras", "Time": "6d 21h 29m", "Group": "Pokemon" },
                    { "Name": "Shellder", "Time": "6d 21h 37m", "Group": "Pokemon" },
                    { "Name": "Tangela", "Time": "6d 22h 39m", "Group": "Pokemon" },
                    { "Name": "Magneton", "Time": "6d 23h 13m", "Group": "Pokemon" },
                    { "Name": "Arbok", "Time": "7d 2h 7m", "Group": "Pokemon" },
                    { "Name": "Golduck", "Time": "7d 3h 57m", "Group": "Pokemon" },
                    { "Name": "Pinsir", "Time": "7d 9h 34m", "Group": "Pokemon" },
                    { "Name": "Rapidash", "Time": "7d 10h 13m", "Group": "Pokemon" },
                    { "Name": "Ampharos", "Time": "7d 19h 7m", "Group": "Pokemon" },
                    { "Name": "Claydol", "Time": "7d 19h 8m", "Group": "Pokemon" },
                    { "Name": "Swalot", "Time": "7d 23h 24m", "Group": "Pokemon" },
                    { "Name": "Electabuzz", "Time": "8d 1h 44m", "Group": "Pokemon" },
                    { "Name": "Poliwrath", "Time": "8d 1h 54m", "Group": "Pokemon" },
                    { "Name": "Salamence", "Time": "8d 2h 29m", "Group": "Pokemon" },
                    { "Name": "Lapras", "Time": "8d 2h 32m", "Group": "Pokemon" }
                ]
            }
        ]
    },
    {
        Name: "Season 3",
        Scale: TPP.Scale.Days,
        Runs: [
            {
                RunName: "Anniversary Crystal",
                StartDate: "2016-02-14T21:00:00Z",
                Duration: "30d 4h 34m",
                EndDate: "31d",
                ColorPrimary: "#008bff",
                ColorSecondary: "#0021b4",
                HostImage: "img/hosts/evan.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46elnh/evan_sprites/",
                // HostImage: "img/hosts/evan.gif",
                // HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46f9vw/evan_our_lethargic_protagonist_animated/",
                HostName: "EVAN",
                Region: "Kanto",
                AdditionalRegions: [
                    { Name: "Johto", Time: "1d 3h 21m" },
                    { Name: "Kanto", Time: "12d 6h 36m" }
                ],
                DexTotal: 251,
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/ac/",
                //     runtime: true,
                //     parts: [],
                //     pokemon: true
                // },
                TPPOrgLink: "http://twitchplayspokemon.org/ac/",
                Events: [
                    {
                        Group: "Champions",
                        Name: "AZURE",
                        Image: "img/trainers/crystal/azure.png",
                        // Image: "img/trainers/crystal/azure.gif",
                        // ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46gsoo/azure_our_perky_exrival_animated/",
                        Time: "12d 4h 25m",
                        Attempts: 2
                    },
                    {
                        Group: "Champions",
                        Name: "AZURE",
                        Image: "img/trainers/crystal/rematch/azure.png",
                        // Image: "img/trainers/crystal/rematch/azure.gif",
                        // ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46gsoo/azure_our_perky_exrival_animated/",
                        Time: "30d 1h 14m",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "Professor Oak",
                        Image: "img/trainers/crystal/oak.png",
                        Time: "26d 17h 22m",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "Professor Elm",
                        Image: "img/trainers/crystal/elm.png",
                        Time: "30d 4h 34m",
                        Attempts: 1
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "12d 4h 27m", Attempts: 47, IDNo: "58192", Party: [
                            { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 88, IDNo: "58192" },
                            { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 83, IDNo: "58192" },
                            { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 84, IDNo: "58192" },
                            { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 78, IDNo: "58192" },
                            { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 96, IDNo: "01001" },
                            { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 96, IDNo: "58192" }
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "17d 20h 18m", Attempts: 1, IDNo: "58192", Party: [
                            { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                            { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                            { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                            { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                            { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                            { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #3", Time: "24d 3h 31m", Attempts: 2, IDNo: "58192", Party: [
                            { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                            { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                            { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                            { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                            { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                            { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #4", Time: "30d 1h 16m", Attempts: 11, IDNo: "58192", Party: [
                            { Number: 164, Pokemon: "Noctowl", Gender: "Female", Nickname: "KENYA", Level: 100, IDNo: "01001" },
                            { Number: 142, Pokemon: "Aerodactyl", Gender: "Male", Nickname: "JHH", Level: 100, IDNo: "58192" },
                            { Number: 241, Pokemon: "Miltank", Gender: "Female", Nickname: "!L", Level: 100, IDNo: "58192" },
                            { Number: 230, Pokemon: "Kingdra", Gender: "Female", Nickname: "---sxjxKKK", Level: 100, IDNo: "58192" },
                            { Number: 3, Pokemon: "Venusaur", Gender: "Male", Nickname: "ul:::utx", Level: 100, IDNo: "58192" },
                            { Number: 135, Pokemon: "Jolteon", Gender: "Male", Nickname: "FOX,/!!!)u", Level: 100, IDNo: "58192" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { "Group": "Badges", "Image": "img/badges/boulder.png", "Name": "Boulder Badge", "Time": "0d 8h 28m", "Attempts": 5 },
                    { "Group": "Badges", "Image": "img/badges/cascade.png", "Name": "Cascade Badge", "Time": "0d 17h 47m", "Attempts": 2 },
                    { "Group": "Past Hosts", "Image": "img/hosts/baba.png", "Name": "Dream BABA", "Time": "15d 0h 53m", "Attempts": 2 },
                    { "Group": "Past Hosts", "Name": "AJDNNW", "Image": "img/hosts/ajdnnw.png", "Time": "18d 19h 11m" },
                    { "Group": "Past Hosts", "Name": "RED", "Image": "img/hosts/red.png", "Time": "30d 2h 29m", "Attempts": 1 },
                    { "Group": "Past Hosts", "Name": "AIIIAAB", "Image": "img/hosts/aiiiaab.png", "Time": "30d 3h 23m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Boulder Badge", "Time": "14d 1h 30m", "Attempts": 1, "Image": "img/badges/boulder.png" },
                    { "Group": "Badges", "Name": "Cascade Badge", "Time": "12d 21h 32m", "Attempts": 2, "Image": "img/badges/cascade.png" },
                    { "Group": "Badges", "Name": "Thunder Badge", "Time": "12d 8h 10m", "Attempts": 2, "Image": "img/badges/thunder.png" },
                    { "Group": "Badges", "Name": "Rainbow Badge", "Time": "12d 10h 38m", "Attempts": 1, "Image": "img/badges/rainbow.png" },
                    { "Group": "Badges", "Name": "Soul Badge", "Time": "12d 14h 4m", "Attempts": 2, "Image": "img/badges/soul.png" },
                    { "Group": "Badges", "Name": "Marsh Badge", "Time": "12d 9h 51m", "Attempts": 2, "Image": "img/badges/marsh.png" },
                    { "Group": "Badges", "Name": "Volcano Badge", "Time": "14d 7h 32m", "Attempts": 1, "Image": "img/badges/volcano.png" },
                    { "Group": "Badges", "Name": "Earth Badge", "Time": "14d 11h 29m", "Attempts": 1, "Image": "img/badges/earth.png" },
                    { "Group": "Rematch Badges", "Name": "Boulder Badge", "Time": "15d 3h 1m", "Attempts": 3, "Image": "img/badges/rematch/boulder.png" },
                    { "Group": "Rematch Badges", "Name": "Cascade Badge", "Time": "14d 18h 27m", "Attempts": 2, "Image": "img/badges/rematch/cascade.png" },
                    { "Group": "Rematch Badges", "Name": "Thunder Badge", "Time": "16d 7h 58m", "Attempts": 3, "Image": "img/badges/rematch/thunder.png" },
                    { "Group": "Rematch Badges", "Name": "Rainbow Badge", "Time": "16d 9h 50m", "Attempts": 1, "Image": "img/badges/rematch/rainbow.png" },
                    { "Group": "Rematch Badges", "Name": "Soul Badge", "Time": "16d 14h 48m", "Attempts": 3, "Image": "img/badges/rematch/soul.png" },
                    { "Group": "Rematch Badges", "Name": "Marsh Badge", "Time": "20d 14h 57m", "Attempts": 5, "Image": "img/badges/rematch/marsh.png" },
                    { "Group": "Rematch Badges", "Name": "Volcano Badge", "Time": "18d 18h 0m", "Attempts": 1, "Image": "img/badges/rematch/volcano.png" },
                    { "Group": "Rematch Badges", "Name": "Earth Badge", "Time": "22d 14h 0m", "Attempts": 3, "Image": "img/badges/rematch/earth.png" },
                    { "Group": "Badges", "Name": "Zephyr Badge", "Time": "1d 9h 39m", "Attempts": 1, "Image": "img/badges/zephyr.png" },
                    { "Group": "Badges", "Name": "Hive Badge", "Time": "2d 5h 1m", "Attempts": 2, "Image": "img/badges/hive.png" },
                    { "Group": "Badges", "Name": "Plain Badge", "Time": "2d 18h 37m", "Attempts": 2, "Image": "img/badges/plain.png" },
                    { "Group": "Badges", "Name": "Fog Badge", "Time": "3d 16h 37m", "Attempts": 1, "Image": "img/badges/fog.png" },
                    { "Group": "Badges", "Name": "Mineral Badge", "Time": "6d 7h 48m", "Attempts": 3, "Image": "img/badges/mineral.png" },
                    { "Group": "Badges", "Name": "Storm Badge", "Time": "7d 14h 43m", "Attempts": 6, "Image": "img/badges/storm.png" },
                    { "Group": "Badges", "Name": "Glacier Badge", "Time": "5d 16h 39m", "Attempts": 3, "Image": "img/badges/glacier.png" },
                    { "Group": "Badges", "Name": "Rising Badge", "Time": "9d 0h 55m", "Attempts": 2, "Image": "img/badges/rising.png" },
                    { "Group": "Rematch Badges", "Name": "Zephyr Badge", "Time": "26d 15h 40m", "Attempts": 1, "Image": "img/badges/rematch/zephyr.png" },
                    { "Group": "Rematch Badges", "Name": "Hive Badge", "Time": "15d 14h 50m", "Attempts": 4, "Image": "img/badges/rematch/hive.png" },
                    { "Group": "Rematch Badges", "Name": "Plain Badge", "Time": "15d 10h 51m", "Attempts": 5, "Image": "img/badges/rematch/plain.png" },
                    { "Group": "Rematch Badges", "Name": "Fog Badge", "Time": "24d 19h 27m", "Attempts": 2, "Image": "img/badges/rematch/fog.png" },
                    { "Group": "Rematch Badges", "Name": "Mineral Badge", "Time": "16d 5h 39m", "Attempts": 1, "Image": "img/badges/rematch/mineral.png" },
                    { "Group": "Rematch Badges", "Name": "Glacier Badge", "Time": "15d 18h 8m", "Attempts": 2, "Image": "img/badges/rematch/glacier.png" },
                    { "Group": "Rematch Badges", "Name": "Storm Badge", "Time": "16d 1h 43m", "Attempts": 2, "Image": "img/badges/rematch/storm.png" },
                    { "Group": "Rematch Badges", "Name": "Rising Badge", "Time": "18d 23h 0m", "Attempts": 1, "Image": "img/badges/rematch/rising.png" },
                    { "Group": "Elite Four", "Name": "Will", "Time": "10d 9h 58m", "Attempts": 2, "Image": "img/trainers/crystal/will.png" },
                    { "Group": "Elite Four", "Name": "Koga", "Time": "10d 12h 33m", "Attempts": 6, "Image": "img/trainers/crystal/koga.png" },
                    { "Group": "Elite Four", "Name": "Bruno", "Time": "11d 1h 19m", "Attempts": 8, "Image": "img/trainers/crystal/bruno.png" },
                    { "Group": "Elite Four", "Name": "Karen", "Time": "11d 11h 58m", "Attempts": 2, "Image": "img/trainers/crystal/karen.png" },
                    { "Group": "Elite Four", "Name": "Lance", "Time": "11d 23h 14m", "Attempts": 5, "Image": "img/trainers/crystal/lance.png" },
                    { "Group": "Elite Four Rematch", "Name": "Will", "Time": "26d 18h 39m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/will.png" },
                    { "Group": "Elite Four Rematch", "Name": "Koga", "Time": "29d 23h 22m", "Attempts": 4, "Image": "img/trainers/crystal/rematch/koga.png" },
                    { "Group": "Elite Four Rematch", "Name": "Bruno", "Time": "30d 0h 26m", "Attempts": 2, "Image": "img/trainers/crystal/rematch/bruno.png" },
                    { "Group": "Elite Four Rematch", "Name": "Karen", "Time": "30d 0h 47m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/karen.png" },
                    { "Group": "Elite Four Rematch", "Name": "Lance", "Time": "30d 1h 5m", "Attempts": 1, "Image": "img/trainers/crystal/rematch/lance.png" },
                    { "Name": "Yanma", "Time": "17d 1h 38m", "Group": "Pokemon" },
                    { "Name": "Scizor", "Time": "17d 1h 43m", "Group": "Pokemon" },
                    { "Name": "Metapod", "Time": "17d 2h 5m", "Group": "Pokemon" },
                    { "Name": "Heracross", "Time": "17d 3h 1m", "Group": "Pokemon" },
                    { "Name": "Venomoth", "Time": "17d 5h 59m", "Group": "Pokemon" },
                    { "Name": "Butterfree", "Time": "17d 6h 4m", "Group": "Pokemon" },
                    { "Name": "Pinsir", "Time": "17d 6h 26m", "Group": "Pokemon" },
                    { "Name": "Ledian", "Time": "17d 6h 48m", "Group": "Pokemon" },
                    { "Name": "Paras", "Time": "4d 15h 11m", "Group": "Pokemon" },
                    { "Name": "Ledyba", "Time": "4d 15h 41m", "Group": "Pokemon" },
                    { "Group": "Pokemon", "Name": "Spinarak", "Time": "1d 3h 49m" },
                    { "Group": "Pokemon", "Name": "Delibird", "Time": "29d 10h 9m" },
                    { "Group": "Pokemon", "Name": "Dratini", "Time": "29d 8h 47m" },
                    { "Group": "Pokemon", "Name": "Bellossom", "Time": "29d 8h 9m" },
                    { "Group": "Pokemon", "Name": "Forretress", "Time": "29d 5h 36m" },
                    { "Group": "Pokemon", "Name": "Pineco", "Time": "3d 2h 36m" },
                    { "Group": "Pokemon", "Name": "Aipom", "Time": "29d 2h 0m" },
                    { "Group": "Pokemon", "Name": "Hoothoot", "Time": "1d 6h 57m" },
                    { "Group": "Pokemon", "Name": "Spearow", "Time": "28d 8h 31m" },
                    { "Group": "Pokemon", "Name": "Exeggcute", "Time": "28d 23h 7m" },
                    { "Group": "Pokemon", "Name": "Pikachu", "Time": "28d 23h 1m" },
                    { "Group": "Pokemon", "Name": "Sandshrew", "Time": "28d 19h 26m" },
                    { "Group": "Pokemon", "Name": "Tangela", "Time": "28d 19h 2m" },
                    { "Group": "Pokemon", "Name": "Jynx", "Time": "28d 18h 6m" },
                    { "Group": "Pokemon", "Name": "Beedrill", "Time": "4d 15h 52m" },
                    { "Group": "Pokemon", "Name": "Pidgeot", "Time": "28d 15h 39m" },
                    { "Group": "Pokemon", "Name": "Blastoise", "Time": "28d 14h 11m" },
                    { "Group": "Pokemon", "Name": "Charizard", "Time": "28d 13h 27m" },
                    { "Group": "Pokemon", "Name": "Machamp", "Time": "28d 13h 14m" },
                    { "Group": "Pokemon", "Name": "Dragonair", "Time": "28d 10h 53m" },
                    { "Group": "Pokemon", "Name": "Poliwag", "Time": "19d 16h 38m" },
                    { "Group": "Pokemon", "Name": "Croconaw", "Time": "28d 9h 26m" },
                    { "Group": "Pokemon", "Name": "Poliwhirl", "Time": "19d 16h 30m" },
                    { "Group": "Pokemon", "Name": "Abra", "Time": "28d 8h 47m" },
                    { "Group": "Pokemon", "Name": "Machop", "Time": "28d 8h 35m" },
                    { "Group": "Pokemon", "Name": "Grimer", "Time": "28d 7h 36m" },
                    { "Group": "Pokemon", "Name": "Bellsprout", "Time": "18d 6h 38m" },
                    { "Group": "Pokemon", "Name": "Muk", "Time": "28d 5h 40m" },
                    { "Group": "Pokemon", "Name": "Sunflora", "Time": "21d 8h 46m" },
                    { "Group": "Pokemon", "Name": "Skiploom", "Time": "20d 10h 22m" },
                    { "Group": "Pokemon", "Name": "Sunkern", "Time": "23d 20h 2m" },
                    { "Group": "Pokemon", "Name": "Togepi", "Time": "1d 20h 10m" },
                    { "Group": "Pokemon", "Name": "Igglybuff", "Time": "27d 22h 36m" },
                    { "Group": "Pokemon", "Name": "Girafarig", "Time": "15d 15h 28m" },
                    { "Group": "Pokemon", "Name": "Pidgeotto", "Time": "16d 18h 5m" },
                    { "Group": "Pokemon", "Name": "Stantler", "Time": "19d 8h 31m" },
                    { "Group": "Pokemon", "Name": "Noctowl", "Time": "2d 16h 49m" },
                    { "Group": "Pokemon", "Name": "Tyrogue", "Time": "23d 20h 20m" },
                    { "Group": "Pokemon", "Name": "Gloom", "Time": "19d 11h 39m" },
                    { "Group": "Pokemon", "Name": "Kangaskhan", "Time": "27d 20h 11m" },
                    { "Group": "Pokemon", "Name": "Tyranitar", "Time": "27d 19h 27m" },
                    { "Group": "Pokemon", "Name": "Exeggutor", "Time": "27d 18h 46m" },
                    { "Group": "Pokemon", "Name": "Swinub", "Time": "1d 12h 5m" },
                    { "Group": "Pokemon", "Name": "Slowpoke", "Time": "0d 18h 58m" },
                    { "Group": "Pokemon", "Name": "Slowking", "Time": "27d 15h 40m" },
                    { "Group": "Pokemon", "Name": "Wooper", "Time": "1d 21h 28m" },
                    { "Group": "Pokemon", "Name": "Slowbro", "Time": "27d 14h 50m" },
                    { "Group": "Pokemon", "Name": "Lapras", "Time": "27d 13h 16m" },
                    { "Group": "Pokemon", "Name": "Hitmonchan", "Time": "27d 12h 42m" },
                    { "Group": "Pokemon", "Name": "Slugma", "Time": "16d 3h 12m" },
                    { "Group": "Pokemon", "Name": "Unown", "Time": "27d 11h 45m" },
                    { "Group": "Pokemon", "Name": "Shuckle", "Time": "16d 3h 16m" },
                    { "Group": "Pokemon", "Name": "Houndour", "Time": "3d 3h 39m" },
                    { "Group": "Pokemon", "Name": "Azumarill", "Time": "17d 10h 43m" },
                    { "Group": "Pokemon", "Name": "Xatu", "Time": "27d 1h 24m" },
                    { "Group": "Pokemon", "Name": "Dunsparce", "Time": "27d 1h 3m" },
                    { "Group": "Pokemon", "Name": "Ariados", "Time": "3d 6h 5m" },
                    { "Group": "Pokemon", "Name": "Phanpy", "Time": "26d 23h 59m" },
                    { "Group": "Pokemon", "Name": "Steelix", "Time": "24d 0h 42m" },
                    { "Group": "Pokemon", "Name": "Graveler", "Time": "16d 3h 24m" },
                    { "Group": "Pokemon", "Name": "Koffing", "Time": "21d 16h 45m" },
                    { "Group": "Pokemon", "Name": "Mankey", "Time": "16d 17h 45m" },
                    { "Group": "Pokemon", "Name": "Pidgey", "Time": "0d 21h 8m" },
                    { "Group": "Pokemon", "Name": "Quagsire", "Time": "17d 10h 39m" },
                    { "Group": "Pokemon", "Name": "Growlithe", "Time": "18d 14h 37m" },
                    { "Group": "Pokemon", "Name": "Arcanine", "Time": "26d 14h 12m" },
                    { "Group": "Pokemon", "Name": "Moltres", "Time": "26d 14h 6m" },
                    { "Group": "Pokemon", "Name": "Magcargo", "Time": "26d 11h 58m" },
                    { "Group": "Pokemon", "Name": "Flareon", "Time": "26d 11h 40m" },
                    { "Group": "Pokemon", "Name": "Dragonite", "Time": "26d 10h 13m" },
                    { "Group": "Pokemon", "Name": "Ditto", "Time": "26d 9h 29m" },
                    { "Group": "Pokemon", "Name": "Golem", "Time": "26d 8h 59m" },
                    { "Group": "Pokemon", "Name": "Granbull", "Time": "22d 8h 31m" },
                    { "Group": "Pokemon", "Name": "Mr. Mime", "Time": "19d 11h 47m" },
                    { "Group": "Pokemon", "Name": "Arbok", "Time": "16d 9h 8m" },
                    { "Group": "Pokemon", "Name": "Ekans", "Time": "26d 1h 13m" },
                    { "Group": "Pokemon", "Name": "Snubbull", "Time": "3d 2h 33m" },
                    { "Group": "Pokemon", "Name": "Cleffa", "Time": "25d 23h 29m" },
                    { "Group": "Pokemon", "Name": "Clefable", "Time": "25d 23h 17m" },
                    { "Group": "Pokemon", "Name": "Marowak", "Time": "24d 1h 0m" },
                    { "Group": "Pokemon", "Name": "Geodude", "Time": "23d 22h 28m" },
                    { "Group": "Pokemon", "Name": "Onix", "Time": "19d 18h 3m" },
                    { "Group": "Pokemon", "Name": "Clefairy", "Time": "25d 22h 5m" },
                    { "Group": "Pokemon", "Name": "Drowzee", "Time": "25d 22h 26m" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "23d 22h 31m" },
                    { "Group": "Pokemon", "Name": "Cubone", "Time": "25d 21h 55m" },
                    { "Group": "Pokemon", "Name": "Jigglypuff", "Time": "25d 21h 19m" },
                    { "Group": "Pokemon", "Name": "Weepinbell", "Time": "16d 18h 7m" },
                    { "Group": "Pokemon", "Name": "Articuno", "Time": "25d 18h 4m" },
                    { "Group": "Pokemon", "Name": "Shellder", "Time": "25d 15h 55m" },
                    { "Group": "Pokemon", "Name": "Mewtwo", "Time": "25d 8h 52m" },
                    { "Group": "Pokemon", "Name": "Magmar", "Time": "18d 12h 53m" },
                    { "Group": "Pokemon", "Name": "Ninetales", "Time": "18d 12h 48m" },
                    { "Group": "Pokemon", "Name": "Vulpix", "Time": "20d 22h 25m" },
                    { "Group": "Pokemon", "Name": "Weezing", "Time": "18d 12h 44m" },
                    { "Group": "Pokemon", "Name": "Rhyhorn", "Time": "17d 10h 50m" },
                    { "Group": "Pokemon", "Name": "Rapidash", "Time": "18d 13h 6m" },
                    { "Group": "Pokemon", "Name": "Houndoom", "Time": "25d 4h 1m" },
                    { "Group": "Pokemon", "Name": "Tentacool", "Time": "18d 11h 31m" },
                    { "Group": "Pokemon", "Name": "NidoranF", "Time": "25d 1h 55m" },
                    { "Group": "Pokemon", "Name": "NidoranM", "Time": "20d 22h 20m" },
                    { "Group": "Pokemon", "Name": "Diglett", "Time": "1d 0h 39m" },
                    { "Group": "Pokemon", "Name": "Ho-Oh", "Time": "24d 10h 25m" },
                    { "Group": "Pokemon", "Name": "Raikou", "Time": "24d 5h 17m" },
                    { "Group": "Pokemon", "Name": "Magby", "Time": "24d 3h 59m" },
                    { "Group": "Pokemon", "Name": "Quilava", "Time": "24d 0h 46m" },
                    { "Group": "Pokemon", "Name": "Machoke", "Time": "24d 1h 19m" },
                    { "Group": "Pokemon", "Name": "Sandslash", "Time": "20d 17h 32m" },
                    { "Group": "Pokemon", "Name": "Dodrio", "Time": "23d 23h 24m" },
                    { "Group": "Pokemon", "Name": "Blissey", "Time": "23d 22h 55m" },
                    { "Group": "Pokemon", "Name": "Wartortle", "Time": "23d 22h 37m" },
                    { "Group": "Pokemon", "Name": "Suicune", "Time": "23d 22h 9m" },
                    { "Group": "Pokemon", "Name": "Golduck", "Time": "18d 11h 59m" },
                    { "Group": "Pokemon", "Name": "Sentret", "Time": "23d 21h 46m" },
                    { "Group": "Pokemon", "Name": "Hoppip", "Time": "23d 21h 44m" },
                    { "Group": "Pokemon", "Name": "Mareep", "Time": "3d 2h 30m" },
                    { "Group": "Pokemon", "Name": "Mew", "Time": "23d 8h 28m" },
                    { "Group": "Pokemon", "Name": "Donphan", "Time": "20d 10h 23m" },
                    { "Group": "Pokemon", "Name": "Rhydon", "Time": "21d 18h 13m" },
                    { "Group": "Pokemon", "Name": "Gyarados", "Time": "19d 21h 0m" },
                    { "Group": "Pokemon", "Name": "Ursaring", "Time": "22d 15h 44m" },
                    { "Group": "Pokemon", "Name": "Corsola", "Time": "19d 17h 38m" },
                    { "Group": "Pokemon", "Name": "Krabby", "Time": "18d 10h 53m" },
                    { "Group": "Pokemon", "Name": "Hypno", "Time": "22d 15h 41m" },
                    { "Group": "Pokemon", "Name": "Charmander", "Time": "18d 12h 59m" },
                    { "Group": "Pokemon", "Name": "Dugtrio", "Time": "22d 10h 7m" },
                    { "Group": "Pokemon", "Name": "Wigglytuff", "Time": "16d 17h 38m" },
                    { "Group": "Pokemon", "Name": "Nidoking", "Time": "22d 8h 29m" },
                    { "Group": "Pokemon", "Name": "Gengar", "Time": "22d 8h 1m" },
                    { "Group": "Pokemon", "Name": "Omastar", "Time": "22d 7h 11m" },
                    { "Group": "Pokemon", "Name": "Sudowoodo", "Time": "21d 19h 41m" },
                    { "Group": "Pokemon", "Name": "Omanyte", "Time": "1d 17h 58m" },
                    { "Group": "Pokemon", "Name": "Nidoqueen", "Time": "21d 18h 48m" },
                    { "Group": "Pokemon", "Name": "Doduo", "Time": "20d 15h 35m" },
                    { "Group": "Pokemon", "Name": "Magneton", "Time": "21d 8h 35m" },
                    { "Group": "Pokemon", "Name": "Goldeen", "Time": "16d 2h 40m" },
                    { "Group": "Pokemon", "Name": "Starmie", "Time": "21d 18h 2m" },
                    { "Group": "Pokemon", "Name": "Lanturn", "Time": "21d 17h 33m" },
                    { "Group": "Pokemon", "Name": "Chinchou", "Time": "21d 17h 32m" },
                    { "Group": "Pokemon", "Name": "Electrode", "Time": "21d 17h 2m" },
                    { "Group": "Pokemon", "Name": "Zapdos", "Time": "21d 16h 17m" },
                    { "Group": "Pokemon", "Name": "Voltorb", "Time": "21d 13h 20m" },
                    { "Group": "Pokemon", "Name": "Electabuzz", "Time": "21d 14h 36m" },
                    { "Group": "Pokemon", "Name": "Elekid", "Time": "21d 13h 13m" },
                    { "Group": "Pokemon", "Name": "Raichu", "Time": "21d 11h 57m" },
                    { "Group": "Pokemon", "Name": "Flaaffy", "Time": "3d 6h 13m" },
                    { "Group": "Pokemon", "Name": "Furret", "Time": "21d 8h 28m" },
                    { "Group": "Pokemon", "Name": "Eevee", "Time": "3d 6h 33m" },
                    { "Group": "Pokemon", "Name": "Alakazam", "Time": "20d 17h 17m" },
                    { "Group": "Pokemon", "Name": "Haunter", "Time": "20d 17h 2m" },
                    { "Group": "Pokemon", "Name": "Persian", "Time": "20d 15h 41m" },
                    { "Group": "Pokemon", "Name": "Nidorino", "Time": "20d 15h 39m" },
                    { "Group": "Pokemon", "Name": "Nidorina", "Time": "20d 15h 33m" },
                    { "Group": "Pokemon", "Name": "Entei", "Time": "20d 14h 12m" },
                    { "Group": "Pokemon", "Name": "Qwilfish", "Time": "20d 11h 18m" },
                    { "Group": "Pokemon", "Name": "Horsea", "Time": "5d 20h 48m" },
                    { "Group": "Pokemon", "Name": "Octillery", "Time": "19d 20h 10m" },
                    { "Group": "Pokemon", "Name": "Larvitar", "Time": "19d 17h 50m" },
                    { "Group": "Pokemon", "Name": "Teddiursa", "Time": "3d 2h 37m" },
                    { "Group": "Pokemon", "Name": "Gligar", "Time": "20d 10h 17m" },
                    { "Group": "Pokemon", "Name": "Piloswine", "Time": "19d 17h 0m" },
                    { "Group": "Pokemon", "Name": "Murkrow", "Time": "19d 19h 46m" },
                    { "Group": "Pokemon", "Name": "Politoed", "Time": "20d 7h 39m" },
                    { "Group": "Pokemon", "Name": "Togetic", "Time": "16d 2h 50m" },
                    { "Group": "Pokemon", "Name": "Seaking", "Time": "20d 5h 1m" },
                    { "Group": "Pokemon", "Name": "Espeon", "Time": "20d 4h 49m" },
                    { "Group": "Pokemon", "Name": "Feraligatr", "Time": "19d 21h 10m" },
                    { "Group": "Pokemon", "Name": "Magikarp", "Time": "0d 11h 10m" },
                    { "Group": "Pokemon", "Name": "Totodile", "Time": "19d 20h 50m" },
                    { "Group": "Pokemon", "Name": "Marill", "Time": "16d 2h 53m" },
                    { "Group": "Pokemon", "Name": "Staryu", "Time": "19d 20h 31m" },
                    { "Group": "Pokemon", "Name": "Sneasel", "Time": "19d 19h 35m" },
                    { "Group": "Pokemon", "Name": "Typhlosion", "Time": "19d 19h 13m" },
                    { "Group": "Pokemon", "Name": "Hitmonlee", "Time": "19d 18h 36m" },
                    { "Group": "Pokemon", "Name": "Pupitar", "Time": "19d 16h 57m" },
                    { "Group": "Pokemon", "Name": "Crobat", "Time": "19d 16h 49m" },
                    { "Group": "Pokemon", "Name": "Mantine", "Time": "19d 16h 32m" },
                    { "Group": "Pokemon", "Name": "Kadabra", "Time": "16d 17h 39m" },
                    { "Group": "Pokemon", "Name": "Raticate", "Time": "19d 11h 42m" },
                    { "Group": "Pokemon", "Name": "Vileplume", "Time": "19d 11h 58m" },
                    { "Group": "Pokemon", "Name": "Oddish", "Time": "0d 18h 45m" },
                    { "Group": "Pokemon", "Name": "Lickitung", "Time": "19d 9h 41m" },
                    { "Group": "Pokemon", "Name": "Kabutops", "Time": "19d 9h 34m" },
                    { "Group": "Pokemon", "Name": "Kabuto", "Time": "19d 9h 27m" },
                    { "Group": "Pokemon", "Name": "Seel", "Time": "18d 5h 48m" },
                    { "Group": "Pokemon", "Name": "Seadra", "Time": "5d 21h 24m" },
                    { "Group": "Pokemon", "Name": "Parasect", "Time": "19d 8h 9m" },
                    { "Group": "Pokemon", "Name": "Victreebel", "Time": "19d 8h 23m" },
                    { "Group": "Pokemon", "Name": "Charmeleon", "Time": "18d 13h 10m" },
                    { "Group": "Pokemon", "Name": "Cloyster", "Time": "18d 11h 41m" },
                    { "Group": "Pokemon", "Name": "Kingler", "Time": "18d 11h 28m" },
                    { "Group": "Pokemon", "Name": "Tentacruel", "Time": "18d 11h 11m" },
                    { "Group": "Pokemon", "Name": "Dewgong", "Time": "18d 11h 6m" },
                    { "Group": "Pokemon", "Name": "Ponyta", "Time": "18d 6h 45m" },
                    { "Group": "Pokemon", "Name": "Poliwrath", "Time": "18d 6h 43m" },
                    { "Group": "Pokemon", "Name": "Porygon", "Time": "18d 5h 41m" },
                    { "Group": "Pokemon", "Name": "Misdreavus", "Time": "17d 21h 37m" },
                    { "Group": "Pokemon", "Name": "Smoochum", "Time": "17d 21h 2m" },
                    { "Group": "Pokemon", "Name": "Psyduck", "Time": "17d 10h 32m" },
                    { "Group": "Pokemon", "Name": "Lugia", "Time": "17d 10h 30m" },
                    { "Group": "Pokemon", "Name": "Primeape", "Time": "16d 17h 40m" },
                    { "Group": "Pokemon", "Name": "Snorlax", "Time": "16d 17h 33m" },
                    { "Group": "Pokemon", "Name": "Porygon2", "Time": "16d 8h 42m" },
                    { "Group": "Pokemon", "Name": "Wobbuffet", "Time": "16d 3h 8m" },
                    { "Group": "Pokemon", "Name": "Golbat", "Time": "16d 2h 59m" },
                    { "Group": "Pokemon", "Name": "Hitmontop", "Time": "15d 23h 46m" },
                    { "Group": "Pokemon", "Name": "Tauros", "Time": "15d 21h 32m" },
                    { "Group": "Pokemon", "Name": "Smeargle", "Time": "15d 15h 36m" },
                    { "Group": "Pokemon", "Name": "Celebi", "Time": "15d 12h 52m" },
                    { "Group": "Pokemon", "Name": "Kingdra", "Time": "10d 0h 35m" },
                    { "Group": "Pokemon", "Name": "Skarmory", "Time": "7d 17h 21m" },
                    { "Group": "Pokemon", "Name": "Caterpie", "Time": "6d 17h 16m" },
                    { "Group": "Pokemon", "Name": "Venonat", "Time": "0d 18h 41m" },
                    { "Group": "Pokemon", "Name": "Weedle", "Time": "2d 20h 39m" },
                    { "Group": "Pokemon", "Name": "Jolteon", "Time": "6d 1h 45m" },
                    { "Group": "Pokemon", "Name": "Remoraid", "Time": "5d 20h 45m" },
                    { "Group": "Pokemon", "Name": "Aerodactyl", "Time": "4d 17h 8m" },
                    { "Group": "Pokemon", "Name": "Bayleef", "Time": "4d 15h 58m" },
                    { "Group": "Pokemon", "Name": "Chansey", "Time": "4d 8h 42m" },
                    { "Group": "Pokemon", "Name": "Scyther", "Time": "4d 8h 40m" },
                    { "Group": "Pokemon", "Name": "Natu", "Time": "4d 8h 35m" },
                    { "Group": "Pokemon", "Name": "Fearow", "Time": "4d 7h 27m" },
                    { "Group": "Pokemon", "Name": "Vaporeon", "Time": "4d 1h 42m" },
                    { "Group": "Pokemon", "Name": "Squirtle", "Time": "3d 13h 22m" },
                    { "Group": "Pokemon", "Name": "Ampharos", "Time": "3d 10h 29m" },
                    { "Group": "Pokemon", "Name": "Egg", "Time": "1d 15h 6m" },
                    { "Group": "Pokemon", "Name": "Miltank", "Time": "3d 6h 29m" },
                    { "Group": "Pokemon", "Name": "Umbreon", "Time": "3d 6h 11m" },
                    { "Group": "Pokemon", "Name": "Pichu", "Time": "3d 0h 39m" },
                    { "Group": "Pokemon", "Name": "Venusaur", "Time": "1d 10h 23m" },
                    { "Group": "Pokemon", "Name": "Cyndaquil", "Time": "1d 3h 56m" },
                    { "Group": "Pokemon", "Name": "Gastly", "Time": "0d 22h 6m" },
                    { "Group": "Pokemon", "Name": "Meowth", "Time": "0d 20h 48m" },
                    { "Group": "Pokemon", "Name": "Magnemite", "Time": "0d 20h 46m" },
                    { "Group": "Pokemon", "Name": "Kakuna", "Time": "0d 18h 51m" },
                    { "Group": "Pokemon", "Name": "Farfetch'd", "Time": "0d 16h 56m" },
                    { "Group": "Pokemon", "Name": "Ivysaur", "Time": "0d 9h 1m" },
                    { "Group": "Pokemon", "Name": "Rattata", "Time": "0d 1h 30m" },
                    { "Group": "Pokemon", "Name": "Bulbasaur", "Time": "0d 0h 9m" },
                    { "Group": "Pokemon", "Name": "Jumpluff", "Time": "29d 14h 22m" },
                    { "Group": "Pokemon", "Name": "Chikorita", "Time": "29d 16h 18m" },
                    { "Group": "Pokemon", "Name": "Meganium", "Time": "29d 15h 51m" }
                ]
            },
            {
                RunName: "Brown",
                ColorSecondary: "#805015",
                ColorPrimary: "#ba8a28",
                StartDate: "2016-06-16T21:00:00Z",
                Duration: "11d 2h 5m",
                HostName: "Paul",
                HostImage: "img/hosts/paul.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4ohl3p/paul_our_easily_distracted_protagonist_animated/",
                TPPOrgLink: "http://twitchplayspokemon.org/brown",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/",
                //     runtime: true,
                //     parts: ["Badge", "Elite Four"],
                //     pokemon: true
                // },
                Region: "Rijon",
                Events: [
                    { "Group": "Badges", "Name": "Marine Badge", "Image": "img/badges/old/marine.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "8h3m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Hail Badge", "Image": "img/badges/old/hail.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "1d9h37m", "Attempts": 6 },
                    { "Group": "Badges", "Name": "Sparky Badge", "Image": "img/badges/old/sparky.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "2d16h24m", "Attempts": 2 },
                    { "Group": "Badges", "Name": "Sprout Badge", "Image": "img/badges/old/sprout.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "2d14h34m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Fist Badge", "Image": "img/badges/old/fist.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "3d17h56m", "Attempts": 2 },
                    { "Group": "Badges", "Name": "Psi Badge", "Image": "img/badges/old/psi.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "5d7h38m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Hive Badge", "Image": "img/badges/hive.png", "Time": "6d 10h 23m", "Attempts": 3 },
                    { "Group": "Badges", "Name": "White Badge", "Image": "img/badges/old/white.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "6d21h47m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Star Badge", "Image": "img/badges/old/star.png", "ImageSource": "https://www.reddit.com/r/twitchplayspokemon/comments/4q2k6b/all_eight_rijon_badges/", "Time": "7d12h33m", "Attempts": 2 },
                    { "Group": "Elite Four", "Name": "Red", "Time": "2016-06-25T16:42:00.000Z", "Attempts": 1, "Image": "img/trainers/brown/red.png" },
                    { "Group": "Elite Four", "Name": "Jared", "Time": "2016-06-25T16:48:00.000Z", "Attempts": 1, "Image": "img/trainers/brown/jared.png" },
                    { "Group": "Elite Four", "Name": "Agatha", "Time": "2016-06-25T21:14:00.000Z", "Attempts": 3, "Image": "img/trainers/brown/agatha.png" },
                    { "Group": "Elite Four", "Name": "Drake", "Time": "2016-06-26T00:53:00.000Z", "Attempts": 3, "Image": "img/trainers/brown/drake.png" },
                    { "Group": "Champions", "Name": "Mura", "Time": "2016-06-26T05:01:00.000Z", "Attempts": 2, "Image": "img/trainers/brown/mura.png" },
                    { "Group": "Champions", "Name": "Pallet Patrol", "Time": "10d 8h 30m", "Attempts": 2, "Image": "img/trainers/brown/palletpatrol.png" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "9d 8h 3m", Attempts: 12, Party: [
                            { Pokemon: "Golduck", Nickname: "AAAAAAAAFF", Level: 56, Type1: "Water" },
                            { Pokemon: "Sylveon", Nickname: "BBbkkkkk", Level: 55, Type1: "Fairy" },
                            { Pokemon: "Golem", Nickname: "AJJJJJJaaa", Level: 50, Type1: "Rock", Type2: "Ground" },
                            { Pokemon: "Beedrill", Nickname: "[[........", Level: 44, Type1: "Bug", Type2: "Poison" },
                            { Pokemon: "Venusaur", Nickname: "----------", Level: 51, Type1: "Grass", Type2: "Poison" },
                            { Pokemon: "Crobat", Nickname: "-πππππππ) (", Level: 75, Type1: "Poison", Type2: "Flying" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "10d 22h 35m", Attempts: 3, Party: [
                            { Pokemon: "Dugtrio", Nickname: "BKKTTTTTTT", Level: 57, Type1: "Ground" },
                            { Pokemon: "Sylveon", Nickname: "BBbkkkkk", Level: 62, Type1: "Fairy" },
                            { Pokemon: "Golduck", Nickname: "AAAAAAAAFF", Level: 66, Type1: "Water" },
                            { Pokemon: "Venusaur", Nickname: "----------", Level: 57, Type1: "Grass", Type2: "Poison" },
                            { Pokemon: "Crobat", Nickname: "-πππππππ) (", Level: 86, Type1: "Poison", Type2: "Flying" },
                            { Pokemon: "Golem", Nickname: "AJJJJJJaaa", Level: 60, Type1: "Rock", Type2: "Ground" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { "Group": "Pokemon", "Name": "Dugtrio", "Time": "2016-06-27T04:20:00.000Z" },
                    { "Group": "Pokemon", "Name": "Nidorino", "Time": "2016-06-25T12:43:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ariados", "Time": "2016-06-27T04:32:00.000Z" },
                    { "Group": "Pokemon", "Name": "Totodile", "Time": "2016-06-27T08:55:00.000Z" },
                    { "Group": "Pokemon", "Name": "Poliwag", "Time": "2016-06-27T08:00:00.000Z" },
                    { "Group": "Pokemon", "Name": "Poliwhirl", "Time": "2016-06-27T05:06:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ho-Oh", "Time": "2016-06-27T01:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Meowth", "Time": "2016-06-25T19:40:00.000Z" },
                    { "Group": "Pokemon", "Name": "Azumarill", "Time": "2016-06-25T17:49:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ekans", "Time": "2016-06-25T17:18:00.000Z" },
                    { "Group": "Pokemon", "Name": "Arbok", "Time": "2016-06-25T17:16:00.000Z" },
                    { "Group": "Pokemon", "Name": "Fearow", "Time": "2016-06-25T17:02:00.000Z" },
                    { "Group": "Pokemon", "Name": "Paras", "Time": "2016-06-25T15:17:00.000Z" },
                    { "Group": "Pokemon", "Name": "Pidgey", "Time": "2016-06-25T15:15:00.000Z" },
                    { "Group": "Pokemon", "Name": "Machop", "Time": "2016-06-25T14:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Machoke", "Time": "2016-06-25T13:47:00.000Z" },
                    { "Group": "Pokemon", "Name": "Onix", "Time": "2016-06-25T13:33:00.000Z" },
                    { "Group": "Pokemon", "Name": "Rhyhorn", "Time": "2016-06-25T12:48:00.000Z" },
                    { "Group": "Pokemon", "Name": "NidoranM", "Time": "2016-06-23T22:07:00.000Z" },
                    { "Group": "Pokemon", "Name": "Magmar", "Time": "2016-06-25T12:24:00.000Z" },
                    { "Group": "Pokemon", "Name": "Growlithe", "Time": "2016-06-25T11:28:00.000Z" },
                    { "Group": "Pokemon", "Name": "Bellsprout", "Time": "2016-06-25T10:51:00.000Z" },
                    { "Group": "Pokemon", "Name": "Nidorina", "Time": "2016-06-25T10:29:00.000Z" },
                    { "Group": "Pokemon", "Name": "Seel", "Time": "2016-06-19T21:21:00.000Z" },
                    { "Group": "Pokemon", "Name": "Rhydon", "Time": "2016-06-25T08:07:00.000Z" },
                    { "Group": "Pokemon", "Name": "Golduck", "Time": "2016-06-24T03:31:00.000Z" },
                    { "Group": "Pokemon", "Name": "Electabuzz", "Time": "2016-06-23T22:17:00.000Z" },
                    { "Group": "Pokemon", "Name": "Exeggcute", "Time": "2016-06-23T22:01:00.000Z" },
                    { "Group": "Pokemon", "Name": "Marill", "Time": "2016-06-23T12:12:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ditto", "Time": "2016-06-23T11:51:00.000Z" },
                    { "Group": "Pokemon", "Name": "Natu", "Time": "2016-06-23T10:30:00.000Z" },
                    { "Group": "Pokemon", "Name": "Cubone", "Time": "2016-06-23T10:02:00.000Z" },
                    { "Group": "Pokemon", "Name": "Slowpoke", "Time": "2016-06-23T09:49:00.000Z" },
                    { "Group": "Pokemon", "Name": "Phanpy", "Time": "2016-06-23T09:36:00.000Z" },
                    { "Group": "Pokemon", "Name": "Yanma", "Time": "2016-06-23T09:31:00.000Z" },
                    { "Group": "Pokemon", "Name": "Gligar", "Time": "2016-06-23T07:26:00.000Z" },
                    { "Group": "Pokemon", "Name": "Crobat", "Time": "2016-06-22T04:38:00.000Z" },
                    { "Group": "Pokemon", "Name": "Sylveon", "Time": "2016-06-21T20:02:00.000Z" },
                    { "Group": "Pokemon", "Name": "Golem", "Time": "2016-06-21T07:35:00.000Z" },
                    { "Group": "Pokemon", "Name": "Venusaur", "Time": "2016-06-20T21:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Persian", "Time": "2016-06-20T15:19:00.000Z" },
                    { "Group": "Pokemon", "Name": "Chikorita", "Time": "2016-06-20T01:02:00.000Z" },
                    { "Group": "Pokemon", "Name": "Eevee", "Time": "2016-06-20T00:25:00.000Z" },
                    { "Group": "Pokemon", "Name": "Drowzee", "Time": "2016-06-19T21:27:00.000Z" },
                    { "Group": "Pokemon", "Name": "Psyduck", "Time": "2016-06-19T12:07:00.000Z" },
                    { "Group": "Pokemon", "Name": "Golbat", "Time": "2016-06-19T11:19:00.000Z" },
                    { "Group": "Pokemon", "Name": "Graveler", "Time": "2016-06-18T16:37:00.000Z" },
                    { "Group": "Pokemon", "Name": "Beedrill", "Time": "2016-06-18T09:50:00.000Z" },
                    { "Group": "Pokemon", "Name": "Weedle", "Time": "2016-06-18T09:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Spearow", "Time": "2016-06-17T23:38:00.000Z" },
                    { "Group": "Pokemon", "Name": "Kakuna", "Time": "2016-06-17T10:20:00.000Z" },
                    { "Group": "Pokemon", "Name": "Porygon", "Time": "2016-06-17T07:44:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ivysaur", "Time": "2016-06-17T05:03:00.000Z" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "2016-06-17T00:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Diglett", "Time": "2016-06-16T23:58:00.000Z" },
                    { "Group": "Pokemon", "Name": "Geodude", "Time": "2016-06-16T21:47:00.000Z" },
                    { "Group": "Pokemon", "Name": "Bulbasaur", "Time": "2016-06-16T21:05:00.000Z" }
                ]
            },
            {
                RunName: "Randomized Platinum",
                ColorPrimary: "#afbfbf",
                ColorSecondary: "#506060",
                Duration: "15d 4h 2m",
                StartDate: "2016-07-31T21:00:00Z",
                HostName: "PP",
                HostImage: "img/hosts/pp.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4vj5qp/meet_pepe/",
                Region: "Sinnoh",
                TPPOrgLink: "http://twitchplayspokemon.org/pr",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/",
                //     runtime: true,
                //     parts: ["Badge", "Elite Four"],
                //     pokemon: true
                // },
                Events: [
                    { "Group": "Pokemon", "Name": "Bidoof", "Time": "2016-07-31T21:18:00Z" },
                    { "Group": "Pokemon", "Name": "Spinarak", "Time": "2016-07-31T22:49:00Z" },
                    { "Group": "Pokemon", "Name": "Shinx", "Time": "2016-07-31T23:01:00Z" },
                    { "Group": "Pokemon", "Name": "Skitty", "Time": "0d 11h 5m" },
                    { "Group": "Pokemon", "Name": "Drifloon", "Time": "0d 12h 27m" },
                    { Group: "Badges", Name: "Soil (Coal) Badge", Image: "img/randomized/platinum/soil.png", Time: "0d 13h 54m", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4vpkbo/randomized_gym_badges_coal_badge_soil_badge/" },
                    { "Group": "Pokemon", "Name": "Surskit", "Time": "1d 0h 45m" },
                    { "Group": "Pokemon", "Name": "Slakoth", "Time": "1d 1h 31m" },
                    { "Group": "Pokemon", "Name": "Zigzagoon", "Time": "1d 1h 34m" },
                    { Group: "Badges", Name: "Beat (Forest) Badge", Image: "img/randomized/platinum/beat.png", Time: "1d 3h 39m", Attempts: 3, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4vzdo6/randomized_gym_badges_forest_badge_beat_badge/" },
                    { "Group": "Pokemon", "Name": "Tentacool", "Time": "1d 4h 55m" },
                    { "Group": "Pokemon", "Name": "Wurmple", "Time": "1d 4h 58m" },
                    { "Group": "Pokemon", "Name": "Bronzor", "Time": "1d 9h 51m" },
                    { "Group": "Pokemon", "Name": "Spearow", "Time": "1d 10h 7m" },
                    { "Group": "Pokemon", "Name": "Gengar", "Time": "1d 12h 7m" },
                    { "Group": "Pokemon", "Name": "Nidoqueen", "Time": "1d 12h 10m" },
                    { "Group": "Pokemon", "Name": "Ralts", "Time": "1d 17h 29m" },
                    { "Group": "Pokemon", "Name": "Scyther", "Time": "1d 17h 57m" },
                    { "Group": "Pokemon", "Name": "Sandslash", "Time": "1d 22h 9m" },
                    { "Group": "Pokemon", "Name": "Pidgeotto", "Time": "1d 23h 52m" },
                    { "Group": "Pokemon", "Name": "Koffing", "Time": "1d 23h 57m" },
                    { "Group": "Pokemon", "Name": "Horsea", "Time": "2d 0h 10m" },
                    { "Group": "Pokemon", "Name": "Spheal", "Time": "2d 2h 11m" },
                    { "Group": "Pokemon", "Name": "Shellder", "Time": "2d 3h 16m" },
                    { "Group": "Pokemon", "Name": "Lotad", "Time": "2d 4h 0m" },
                    { "Group": "Pokemon", "Name": "Swablu", "Time": "2d 4h 4m" },
                    { "Group": "Pokemon", "Name": "Geodude", "Time": "2d 4h 13m" },
                    { "Group": "Pokemon", "Name": "Nuzleaf", "Time": "2d 4h 17m" },
                    { "Group": "Pokemon", "Name": "Cleffa", "Time": "2d 4h 45m" },
                    { "Group": "Pokemon", "Name": "Nincada", "Time": "2d 6h 44m" },
                    { "Group": "Pokemon", "Name": "Psyduck", "Time": "2d 6h 48m" },
                    { "Group": "Pokemon", "Name": "Clefairy", "Time": "2d 6h 52m" },
                    { Group: "Badges", Name: "Aroma (Relic) Badge", Image: "img/randomized/platinum/aroma.png", Time: "2d 9h 58m", Attempts: 3, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4w7taf/randomized_gym_badges_relic_badge_aroma_badge/" },
                    { "Group": "Pokemon", "Name": "Shelgon", "Time": "2d 17h 12m" },
                    { "Group": "Pokemon", "Name": "Mightyena", "Time": "2d 17h 15m" },
                    { "Group": "Pokemon", "Name": "Trapinch", "Time": "2d 17h 27m" },
                    { "Group": "Pokemon", "Name": "Ponyta", "Time": "2d 19h 6m" },
                    { "Group": "Pokemon", "Name": "Jynx", "Time": "2d 19h 17m" },
                    { "Group": "Pokemon", "Name": "Kabuto", "Time": "3d 12h" },
                    { Group: "Badges", Name: "Stinger (Cobble) Badge", Image: "img/randomized/platinum/stinger.png", Time: "3d 15h 53m", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4wd8ko/randomized_gym_badges_cobble_badge_stinger_badge/" },
                    { "Group": "Pokemon", "Name": "Pachirisu", "Time": "3d 17h 2m" },
                    { "Group": "Pokemon", "Name": "Voltorb", "Time": "3d 17h 6m" },
                    { "Group": "Pokemon", "Name": "Spinda", "Time": "3d 17h 43m" },
                    { "Group": "Pokemon", "Name": "Aipom", "Time": "3d 18h 43m" },
                    { "Group": "Pokemon", "Name": "Gulpin", "Time": "3d 18h 46m" },
                    { "Group": "Pokemon", "Name": "Marill", "Time": "3d 19h 5m" },
                    { "Group": "Pokemon", "Name": "Bulbasaur", "Time": "3d 19h 24m" },
                    { "Group": "Pokemon", "Name": "Weedle", "Time": "3d 20h 11m" },
                    { "Group": "Pokemon", "Name": "Ledian", "Time": "3d 21h 43m" },
                    { "Group": "Pokemon", "Name": "Weepinbell", "Time": "4d 19h 29m" },
                    { "Group": "Pokemon", "Name": "Chimecho", "Time": "4d 19h 43m" },
                    { "Group": "Pokemon", "Name": "Roselia", "Time": "4d 19h 51m" },
                    { "Group": "Pokemon", "Name": "Combusken", "Time": "4d 19h 58m" },
                    { "Group": "Pokemon", "Name": "Silcoon", "Time": "4d 20h 6m" },
                    { "Group": "Pokemon", "Name": "Seadra", "Time": "4d 20h 10m" },
                    { "Group": "Pokemon", "Name": "Pichu", "Time": "4d 20h 13m" },
                    { "Group": "Pokemon", "Name": "Munchlax", "Time": "4d 20h 15m" },
                    { "Group": "Pokemon", "Name": "Wooper", "Time": "4d 20h 24m" },
                    { "Group": "Pokemon", "Name": "Swalot", "Time": "4d 20h 29m" },
                    { "Group": "Pokemon", "Name": "Seedot", "Time": "4d 20h 35m" },
                    { "Group": "Pokemon", "Name": "Minun", "Time": "4d 20h 39m" },
                    { "Group": "Pokemon", "Name": "Piloswine", "Time": "4d 20h 46m" },
                    { "Group": "Pokemon", "Name": "Purugly", "Time": "4d 20h 58m" },
                    { "Group": "Pokemon", "Name": "Corsola", "Time": "4d 21h 12m" },
                    { "Group": "Pokemon", "Name": "Gligar", "Time": "4d 21h 20m" },
                    { "Group": "Pokemon", "Name": "Raticate", "Time": "4d 21h 27m" },
                    { Group: "Badges", Name: "Tsunami (Fen) Badge", Image: "img/randomized/platinum/tsunami.png", Time: "5d 21m", Attempts: 3, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4wt3ab/randomized_gym_badges_fen_badge_tsunami_badge/" },
                    { "Group": "Pokemon", "Name": "Umbreon", "Time": "5d 5h 38m" },
                    { "Group": "Pokemon", "Name": "Poliwag", "Time": "5d 5h 56m" },
                    { "Group": "Pokemon", "Name": "Glameow", "Time": "5d 5h 59m" },
                    { "Group": "Pokemon", "Name": "Rhyhorn", "Time": "5d 17h 36m" },
                    { "Group": "Pokemon", "Name": "Drowzee", "Time": "5d 18h 5m" },
                    { "Group": "Pokemon", "Name": "Cherrim", "Time": "5d 19h 29m" },
                    { "Group": "Pokemon", "Name": "Nosepass", "Time": "5d 19h 33m" },
                    { "Group": "Pokemon", "Name": "Wartortle", "Time": "5d 20h 30m" },
                    { "Group": "Pokemon", "Name": "Cacturne", "Time": "5d 23h 10m" },
                    { "Group": "Pokemon", "Name": "Quagsire", "Time": "6d 1h 39m" },
                    { "Group": "Pokemon", "Name": "Dugtrio", "Time": "6d 2h 14m" },
                    { "Group": "Pokemon", "Name": "Clamperl", "Time": "6d 2h 25m" },
                    { Group: "Badges", Name: "Card (Mine) Badge", Image: "img/randomized/platinum/card.png", Time: "6d 8h 12m", Attempts: 4, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4wzcfx/randomized_gym_badges_mine_badge_card_badge/" },
                    { "Group": "Pokemon", "Name": "Makuhita", "Time": "6d 11h 43m" },
                    { "Group": "Pokemon", "Name": "Staravia", "Time": "6d 11h 56m" },
                    { "Group": "Pokemon", "Name": "Luvdisc", "Time": "6d 12h 35m" },
                    { "Group": "Pokemon", "Name": "Magnezone", "Time": "6d 14h 8m" },
                    { "Group": "Pokemon", "Name": "Turtwig", "Time": "6d 20h 9m" },
                    { "Group": "Pokemon", "Name": "Krabby", "Time": "7d 1h 39m" },
                    { "Group": "Pokemon", "Name": "Togepi", "Time": "7d 2h 3m" },
                    { "Group": "Pokemon", "Name": "Mudkip", "Time": "7d 2h 9m" },
                    { "Group": "Pokemon", "Name": "Castform", "Time": "7d 2h 26m" },
                    { "Group": "Pokemon", "Name": "Gible", "Time": "7d 2h 30m" },
                    { "Group": "Pokemon", "Name": "Whismur", "Time": "7d 7h 51m" },
                    { "Group": "Pokemon", "Name": "Charmander", "Time": "7d 9h 11m" },
                    { "Group": "Pokemon", "Name": "Empoleon", "Time": "7d 10h 18m" },
                    { "Group": "Pokemon", "Name": "Banette", "Time": "7d 11h 34m" },
                    { "Group": "Pokemon", "Name": "Buneary", "Time": "7d 11h 37m" },
                    { "Group": "Pokemon", "Name": "Carnivine", "Time": "7d 14h 41m" },
                    { "Group": "Pokemon", "Name": "NidoranM", "Time": "7d 20h 3m" },
                    { "Group": "Pokemon", "Name": "Hoothoot", "Time": "7d 20h 37m" },
                    { "Group": "Pokemon", "Name": "Budew", "Time": "7d 21h 1m" },
                    { "Group": "Pokemon", "Name": "Sandshrew", "Time": "7d 22h 1m" },
                    { "Group": "Pokemon", "Name": "Marowak", "Time": "7d 23h 59m" },
                    { "Group": "Pokemon", "Name": "Carvanha", "Time": "8d 2m" },
                    { "Group": "Pokemon", "Name": "Porygon", "Time": "8d 4h 16m" },
                    { "Group": "Pokemon", "Name": "Ledyba", "Time": "8d 4h 22m" },
                    { "Group": "Pokemon", "Name": "Donphan", "Time": "8d 5h 54m" },
                    { Group: "Badges", Name: "Mirror (Icicle) Badge", Image: "img/randomized/platinum/mirror.png", Time: "8d 9h 58m", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4x19ee/randomized_gym_badges_icicle_badge_mirror_badge/" },
                    { "Group": "Pokemon", "Name": "Chingling", "Time": "8d 18h 39m" },
                    { "Group": "Pokemon", "Name": "Omanyte", "Time": "8d 20h 21m" },
                    { "Group": "Pokemon", "Name": "Stunky", "Time": "8d 22h 53m" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "9d 5m" },
                    { "Group": "Pokemon", "Name": "Granbull", "Time": "9d 42m" },
                    { "Group": "Pokemon", "Name": "Kricketune", "Time": "9d 44m" },
                    { "Group": "Pokemon", "Name": "Poliwhirl", "Time": "9d 1h 26m" },
                    { "Group": "Pokemon", "Name": "Corphish", "Time": "9d 7h 21m" },
                    { "Group": "Pokemon", "Name": "Linoone", "Time": "9d 7h 29m" },
                    { "Group": "Pokemon", "Name": "Gastly", "Time": "9d 8h 28m" },
                    { "Group": "Pokemon", "Name": "Vulpix", "Time": "9d 8h 30m" },
                    { "Group": "Pokemon", "Name": "Buizel", "Time": "9d 16h 19m" },
                    { "Group": "Pokemon", "Name": "Porygon2", "Time": "9d 18h 24m" },
                    { Group: "Badges", Name: "Flight (Beacon) Badge", Image: "img/randomized/platinum/flight.png", Time: "9d 21h 37m", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4x68c8/randomized_gym_badges_beacon_badge_flight_badge/" },
                    { "Group": "Pokemon", "Name": "Claydol", "Time": "9d 22h 47m" },
                    { "Group": "Pokemon", "Name": "Slugma", "Time": "9d 22h 50m" },
                    { "Group": "Pokemon", "Name": "Wailmer", "Time": "9d 23h 9m" },
                    { "Group": "Pokemon", "Name": "Furret", "Time": "10d 54m" },
                    { "Group": "Pokemon", "Name": "Heracross", "Time": "10d 1h 46m" },
                    { "Group": "Pokemon", "Name": "Togetic", "Time": "10d 15h 45m" },
                    { "Group": "Pokemon", "Name": "Fearow", "Time": "10d 16h" },
                    { "Group": "Pokemon", "Name": "Riolu", "Time": "10d 16h 5m" },
                    { "Group": "Pokemon", "Name": "Monferno", "Time": "10d 16h 40m" },
                    { "Group": "Pokemon", "Name": "Plusle", "Time": "10d 20h 59m" },
                    { Group: "Elite Four", Name: "Crystal", Image: "img/trainers/platinum/aaron.png", Time: "11d 1h 19m", Attempts: 2 },
                    { Group: "Elite Four", Name: "Esteban", Image: "img/trainers/platinum/bertha.png", Time: "11d 1h 28m", Attempts: 1 },
                    { Group: "Elite Four", Name: "Tristian", Image: "img/trainers/platinum/flint.png", Time: "11d 3h 46m ", Attempts: 5 },
                    { Group: "Elite Four", Name: "Mallorie", Image: "img/trainers/platinum/lucian.png", Time: "11d 6h 55m", Attempts: 2 },
                    { "Group": "Pokemon", "Name": "Gardevoir", "Time": "11d 9h 43m" },
                    { "Group": "Pokemon", "Name": "Flaaffy", "Time": "11d 9h 49m" },
                    { Group: "Champions", Name: "Jasmine", Image: "img/trainers/platinum/cynthia.png", Time: "11d 15h 27m", Attempts: 6 },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "11d 15h 30m", Attempts: 24, IDNo: "02503", Party: [
                            { Nickname: "h   ☹7PL4", Pokemon: "Pachirisu", Gender: "Female", Level: 73, Met: "Route 214" },
                            { Nickname: "GHHdg c''-", Pokemon: "Magnezone", Level: 51, Met: "Iron Island" },
                            { Nickname: "E", Pokemon: "Quagsire", Gender: "Female", Level: 64, Met: "Great Marsh" },
                            { Nickname: "A", Pokemon: "Donphan", Gender: "Female", Level: 76, Met: "Acuity Lakefront" },
                            { Nickname: "R♀", Pokemon: "Sandslash", Gender: "Male", Level: 64, Met: "Hearthome City" },
                            { Nickname: "AAAK", Pokemon: "Ponyta", Gender: "Male", Level: 73, Met: "Route 210" },
                        ],
                        Image: "img/ribbons/champion-sinnoh.png"
                    },
                    { "Group": "Pokemon", "Name": "Kingler", "Time": "11d 17h 26m" },
                    { "Group": "Pokemon", "Name": "Lumineon", "Time": "11d 20h 16m" },
                    { "Group": "Pokemon", "Name": "Murkrow", "Time": "11d 20h 29m" },
                    { "Group": "Pokemon", "Name": "Blaziken", "Time": "11d 20h 34m" },
                    { "Group": "Pokemon", "Name": "Spoink", "Time": "11d 20h 58m" },
                    { "Group": "Pokemon", "Name": "Politoed", "Time": "11d 21h 11m" },
                    { "Group": "Pokemon", "Name": "Victreebel", "Time": "11d 21h 20m" },
                    { "Group": "Pokemon", "Name": "Togekiss", "Time": "11d 21h 32m" },
                    { "Group": "Pokemon", "Name": "Floatzel", "Time": "11d 21h 43m" },
                    { "Group": "Pokemon", "Name": "Phanpy", "Time": "11d 23h 18m" },
                    { "Group": "Pokemon", "Name": "Kricketot", "Time": "12d 37m" },
                    { "Group": "Pokemon", "Name": "Snorunt", "Time": "12d 1h" },
                    { "Group": "Pokemon", "Name": "Lairon", "Time": "12d 4h 40m" },
                    { "Group": "Pokemon", "Name": "Swellow", "Time": "12d 5h 22m" },
                    { "Group": "Pokemon", "Name": "Hoppip", "Time": "12d 10h 5m" },
                    { "Group": "Pokemon", "Name": "Quilava", "Time": "12d 10h 16m" },
                    { "Group": "Pokemon", "Name": "Skarmory", "Time": "12d 11h 52m" },
                    { "Group": "Pokemon", "Name": "Houndour", "Time": "12d 11h 59m" },
                    { "Group": "Pokemon", "Name": "Venusaur", "Time": "12d 12h 7m" },
                    { "Group": "Pokemon", "Name": "Butterfree", "Time": "12d 12h 14m" },
                    { "Group": "Pokemon", "Name": "Igglybuff", "Time": "12d 13h 18m" },
                    { "Group": "Pokemon", "Name": "Cascoon", "Time": "12d 13h 54m" },
                    { "Group": "Pokemon", "Name": "Azumarill", "Time": "12d 17h 36m" },
                    { "Group": "Pokemon", "Name": "Dragonair", "Time": "12d 17h 53m" },
                    { "Group": "Pokemon", "Name": "Cubone", "Time": "12d 17h 57m" },
                    { "Group": "Pokemon", "Name": "Hippowdon", "Time": "12d 18h 30m" },
                    { "Group": "Pokemon", "Name": "Nidorino", "Time": "12d 19h 1m" },
                    { "Group": "Pokemon", "Name": "Hippopotas", "Time": "12d 19h 13m" },
                    { "Group": "Pokemon", "Name": "Nidorina", "Time": "12d 19h 25m" },
                    { "Group": "Pokemon", "Name": "Delibird", "Time": "12d 19h 30m" },
                    { "Group": "Pokemon", "Name": "Cacnea", "Time": "12d 19h 48m" },
                    { "Group": "Pokemon", "Name": "Exeggcute", "Time": "12d 20h 12m" },
                    { "Group": "Pokemon", "Name": "Treecko", "Time": "12d 20h 19m" },
                    { "Group": "Pokemon", "Name": "Beedrill", "Time": "12d 21h 29m" },
                    { "Group": "Pokemon", "Name": "Meowth", "Time": "12d 21h 46m" },
                    { "Group": "Pokemon", "Name": "Raichu", "Time": "12d 21h 59m" },
                    { "Group": "Pokemon", "Name": "Bastiodon", "Time": "12d 22h 24m" },
                    { "Group": "Pokemon", "Name": "Camerupt", "Time": "12d 22h 35m" },
                    { "Group": "Pokemon", "Name": "Altaria", "Time": "12d 22h 38m" },
                    { "Group": "Pokemon", "Name": "Chatot", "Time": "12d 23h 1m" },
                    { "Group": "Pokemon", "Name": "Snorlax", "Time": "12d 23h 13m" },
                    { "Group": "Pokemon", "Name": "Haunter", "Time": "13d 1h 3m" },
                    { "Group": "Pokemon", "Name": "Noctowl", "Time": "13d 1h 10m" },
                    { "Group": "Pokemon", "Name": "Ivysaur", "Time": "13d 1h 11m" },
                    { "Group": "Pokemon", "Name": "Paras", "Time": "13d 1h 36m" },
                    { "Group": "Pokemon", "Name": "Seel", "Time": "13d 3h 41m" },
                    { "Group": "Pokemon", "Name": "Vigoroth", "Time": "13d 3h 56m" },
                    { "Group": "Pokemon", "Name": "Hitmontop", "Time": "13d 6h 17m" },
                    { "Group": "Pokemon", "Name": "Taillow", "Time": "13d 8h 40m" },
                    { "Group": "Pokemon", "Name": "Seviper", "Time": "13d 9h 27m" },
                    { "Group": "Pokemon", "Name": "Vaporeon", "Time": "13d 9h 47m" },
                    { "Group": "Pokemon", "Name": "Solrock", "Time": "13d 10h 5m" },
                    { "Group": "Pokemon", "Name": "Shuppet", "Time": "13d 10h 14m" },
                    { Group: "Rematch Badges", Name: "Aroma (Relic) Badge", Image: "img/randomized/platinum/rematch/aroma.png", Time: "13d 11h 25m", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4w7taf/randomized_gym_badges_relic_badge_aroma_badge/" },
                    { Group: "Rematch Badges", Name: "Flight (Beacon) Badge", Image: "img/randomized/platinum/rematch/flight.png", Time: "13d 11h 52m", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4x68c8/randomized_gym_badges_beacon_badge_flight_badge/" },
                    { Group: "Rematch Badges", Name: "Soil (Coal) Badge", Image: "img/randomized/platinum/rematch/soil.png", Time: "13d 12h 10m", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4vpkbo/randomized_gym_badges_coal_badge_soil_badge/" },
                    { "Group": "Pokemon", "Name": "Regice", "Time": "13d 14h 37m" },
                    { "Group": "Pokemon", "Name": "Froslass", "Time": "13d 15h 6m" },
                    { "Group": "Pokemon", "Name": "Miltank", "Time": "13d 15h 28m" },
                    { "Group": "Pokemon", "Name": "Golbat", "Time": "13d 15h 47m" },
                    { "Group": "Pokemon", "Name": "Kecleon", "Time": "13d 15h 54m" },
                    { "Group": "Pokemon", "Name": "Grumpig", "Time": "13d 19h" },
                    { "Group": "Pokemon", "Name": "Zangoose", "Time": "13d 19h 28m" },
                    { Group: "Elite Four Rematch", Name: "Crystal", Image: "img/trainers/platinum/rematch/aaron.png", Time: "13d 19h 56m", Attempts: 1 },
                    { Group: "Elite Four Rematch", Name: "Esteban", Image: "img/trainers/platinum/rematch/bertha.png", Time: "13d 20h 6m", Attempts: 1 },
                    { "Group": "Pokemon", "Name": "Tauros", "Time": "13d 20h 32m" },
                    { "Group": "Pokemon", "Name": "Torkoal", "Time": "13d 21h 6m" },
                    { "Group": "Pokemon", "Name": "Cloyster", "Time": "13d 21h 37m" },
                    { "Group": "Pokemon", "Name": "Electrode", "Time": "13d 21h 50m" },
                    { "Group": "Pokemon", "Name": "Dunsparce", "Time": "13d 22h 43m" },
                    { "Group": "Pokemon", "Name": "Rayquaza", "Time": "14d 2h 36m" },
                    { Group: "Elite Four Rematch", Name: "Tristian", Image: "img/trainers/platinum/rematch/flint.png", Time: "14d 7h 13m", Attempts: 8 },
                    { Group: "Elite Four Rematch", Name: "Mallorie", Image: "img/trainers/platinum/rematch/lucian.png", Time: "14d 7h 20m", Attempts: 1 },
                    { Group: "Champions", Name: "Jasmine", Image: "img/trainers/platinum/rematch/cynthia.png", Time: "14d 7h 27m", Attempts: 1 },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "14d 7h 29m", Attempts: 0, IDNo: "02503", Party: [
                            { Nickname: "h   ☹7PL4", Pokemon: "Pachirisu", Gender: "Female", Level: 77, Met: "Route 214" },
                            { Nickname: "E", Pokemon: "Quagsire", Gender: "Female", Level: 74, Met: "Great Marsh" },
                            { Nickname: "AAAK", Pokemon: "Kingler", Gender: "Male", Level: 79, Met: "Route 210" },
                            { Nickname: "A", Pokemon: "Donphan", Gender: "Female", Level: 81, Met: "Acuity Lakefront" },
                            { Nickname: "R♀", Pokemon: "Sandslash", Gender: "Male", Level: 72, Met: "Hearthome City" },
                            { Nickname: "ll♠♠♠△", Pokemon: "Plusle", Shiny: true, Gender: "Male", Level: 78, Met: "Victory Road" },
                        ],
                        Image: "img/ribbons/champion-sinnoh.png"
                    },
                    { Group: "Rematch Badges", Name: "Stinger (Cobble) Badge", Image: "img/randomized/platinum/rematch/stinger.png", Time: "14d 9h 18m", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4wd8ko/randomized_gym_badges_cobble_badge_stinger_badge/" },
                    { "Group": "Pokemon", "Name": "Totodile", "Time": "14d 13h 36m" },
                    { "Group": "Pokemon", "Name": "Beautifly", "Time": "14d 14h 14m" },
                    { "Group": "Pokemon", "Name": "Zapdos", "Time": "14d 18h 4m" },
                    { "Group": "Pokemon", "Name": "Lileep", "Time": "14d 21h 36m" },
                    { "Group": "Pokemon", "Name": "Typhlosion", "Time": "14d 22h 23m" },
                    { "Group": "Pokemon", "Name": "Finneon", "Time": "15d 8m" },
                    { "Group": "Pokemon", "Name": "Growlithe", "Time": "15d 23m" },
                    { "Group": "Pokemon", "Name": "Grovyle", "Time": "15d 50m" },
                    { "Group": "Pokemon", "Name": "Wailord", "Time": "15d 1h 4m" },
                    { "Group": "Pokemon", "Name": "Tangela", "Time": "15d 1h 11m" },
                    { "Group": "Pokemon", "Name": "Celebi", "Time": "15d 4h" },
                ]
            },
            {
                RunName: "Prism",
                ColorSecondary: "#5ac792",
                ColorPrimary: "#32CD32",
                StartDate: "2016-10-09T21:00:00Z",
                Duration: "16d23h18m",
                BackgroundImage: "linear-gradient(to bottom, #f99 0%, #ff9 26%, #9f9 42%,#9ff 58%,#99f 74%,#f9f 90%)",
                HostName: "Cyan",
                HostImage: "img/hosts/cyan.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/56y6bj/cyan_cyanchan/",
                // HostImage: "img/hosts/cyan.gif",
                // HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/56v3w5/cyan_our_shy_and_demure_protagonist_animated/",
                TPPOrgLink: "http://twitchplayspokemon.org/",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/",
                //     runtime: true,
                //     parts: ["Badge", "Elite Four"],
                //     pokemon: true
                // },
                Region: "Naljo",
                AdditionalRegions: [{ Name: "Rijon", Time: "9d 12h 12m" }],
                EliteFourStartTime: "8d16h16m",
                Events: [
                    { "Group": "Pokemon", "Name": "Butterfree", "Time": "2d4h57m" },
                    { "Group": "Pokemon", "Name": "Eevee", "Time": "2016-10-17T19:18:00.000Z" },
                    { "Group": "Pokemon", "Name": "Piloswine", "Time": "2016-10-17T19:02:00.000Z" },
                    { "Group": "Pokemon", "Name": "Hariyama", "Time": "2016-10-17T18:36:00.000Z" },
                    { "Group": "Pokemon", "Name": "Snorunt", "Time": "2016-10-17T17:59:00.000Z" },
                    { "Group": "Pokemon", "Name": "Rhydon", "Time": "2016-10-17T12:00:00.000Z" },
                    { "Group": "Pokemon", "Name": "Lombre", "Time": "2016-10-17T11:11:00.000Z" },
                    { "Group": "Pokemon", "Name": "Trapinch", "Time": "2016-10-17T10:01:00.000Z" },
                    { "Group": "Pokemon", "Name": "Surskit", "Time": "2016-10-17T09:57:00.000Z" },
                    { "Group": "Pokemon", "Name": "Slowpoke", "Time": "2016-10-17T07:50:00.000Z" },
                    { "Group": "Pokemon", "Name": "Swinub", "Time": "2016-10-17T07:45:00.000Z" },
                    { "Group": "Pokemon", "Name": "Sneasel", "Time": "2016-10-17T07:34:00.000Z" },
                    { "Group": "Pokemon", "Name": "Houndour", "Time": "2016-10-17T06:53:00.000Z" },
                    { "Group": "Pokemon", "Name": "Natu", "Time": "2016-10-17T03:44:00.000Z" },
                    { "Group": "Pokemon", "Name": "Sentret", "Time": "2016-10-17T03:26:00.000Z" },
                    { "Group": "Pokemon", "Name": "Tentacool", "Time": "2016-10-16T04:50:00.000Z" },
                    { "Group": "Pokemon", "Name": "Tyranitar", "Time": "2016-10-16T03:19:00.000Z" },
                    { "Group": "Pokemon", "Name": "Chinchou", "Time": "2016-10-16T03:13:00.000Z" },
                    { "Group": "Pokemon", "Name": "Feebas", "Time": "2016-10-16T03:11:00.000Z" },
                    { "Group": "Pokemon", "Name": "Swellow", "Time": "2016-10-15T18:12:00.000Z" },
                    { "Group": "Pokemon", "Name": "Aggron", "Time": "2016-10-15T06:39:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ninetales", "Time": "2016-10-14T17:09:00.000Z" },
                    { "Group": "Pokemon", "Name": "Lopunny", "Time": "2016-10-14T16:31:00.000Z" },
                    { "Group": "Pokemon", "Name": "Numel", "Time": "2016-10-14T00:26:00.000Z" },
                    { "Group": "Pokemon", "Name": "Machop", "Time": "2016-10-14T01:29:00.000Z" },
                    { "Group": "Pokemon", "Name": "Aron", "Time": "2016-10-14T00:41:00.000Z" },
                    { "Group": "Pokemon", "Name": "Lotad", "Time": "2016-10-13T19:24:00.000Z" },
                    { "Group": "Pokemon", "Name": "Gardevoir", "Time": "2016-10-13T18:47:00.000Z" },
                    { "Group": "Pokemon", "Name": "Luxio", "Time": "2016-10-13T14:33:00.000Z" },
                    { "Group": "Pokemon", "Name": "Paras", "Time": "2016-10-13T14:05:00.000Z" },
                    { "Group": "Pokemon", "Name": "Spearow", "Time": "2016-10-13T13:57:00.000Z" },
                    { "Group": "Pokemon", "Name": "Exeggcute", "Time": "2016-10-13T12:25:00.000Z" },
                    { "Group": "Pokemon", "Name": "Sableye", "Time": "2016-10-13T08:39:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ampharos", "Time": "2016-10-13T07:53:00.000Z" },
                    { "Group": "Pokemon", "Name": "Gastly", "Time": "2016-10-13T01:34:00.000Z" },
                    { "Group": "Pokemon", "Name": "Haunter", "Time": "2016-10-13T07:17:00.000Z" },
                    { "Group": "Pokemon", "Name": "Shuppet", "Time": "2016-10-13T04:13:00.000Z" },
                    { "Group": "Pokemon", "Name": "Golbat", "Time": "2016-10-13T01:47:00.000Z" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "2016-10-10T10:53:10.000Z" },
                    { "Group": "Pokemon", "Name": "Shinx", "Time": "2016-10-10T14:35:00.000Z" },
                    { "Group": "Pokemon", "Name": "Electrike", "Time": "3d 1h 56m" },
                    { "Group": "Pokemon", "Name": "Geodude", "Time": "2016-10-10T14:55:00.000Z" },
                    { "Group": "Pokemon", "Name": "Shroomish", "Time": "2016-10-12T21:29:00.000Z" },
                    { "Group": "Pokemon", "Name": "Pikachu", "Time": "2016-10-11T22:04:00.000Z" },
                    { "Group": "Pokemon", "Name": "Pidgey", "Time": "2016-10-12T20:13:00.000Z" },
                    { "Group": "Pokemon", "Name": "Totodile", "Time": "2016-10-12T12:01:00.000Z" },
                    { "Group": "Pokemon", "Name": "Kirlia", "Time": "2016-10-12T08:50:00.000Z" },
                    { "Group": "Pokemon", "Name": "Azumarill", "Time": "2016-10-11T22:39:00.000Z" },
                    { "Group": "Pokemon", "Name": "Yanma", "Time": "2016-10-11T19:56:00.000Z" },
                    { "Group": "Pokemon", "Name": "Venonat", "Time": "2016-10-11T17:47:00.000Z" },
                    { "Group": "Pokemon", "Name": "Cacnea", "Time": "2016-10-11T18:27:00.000Z" },
                    { "Group": "Pokemon", "Name": "Caterpie", "Time": "2016-10-11T18:03:00.000Z" },
                    { "Group": "Pokemon", "Name": "Bellsprout", "Time": "2016-10-11T17:13:00.000Z" },
                    { "Group": "Pokemon", "Name": "Buneary", "Time": "2016-10-11T16:39:00.000Z" },
                    { "Group": "Pokemon", "Name": "Bronzor", "Time": "2016-10-11T08:21:00.000Z" },
                    { "Group": "Pokemon", "Name": "Pupitar", "Time": "2016-10-10T21:56:00.000Z" },
                    { "Group": "Pokemon", "Name": "Flaaffy", "Time": "2016-10-10T20:06:50.000Z" },
                    { "Group": "Pokemon", "Name": "Mareep", "Time": "2016-10-10T05:23:00.000Z" },
                    { "Group": "Pokemon", "Name": "Vulpix", "Time": "2016-10-10T05:09:00.000Z" },
                    { "Group": "Pokemon", "Name": "Marill", "Time": "2016-10-10T03:16:00.000Z" },
                    { "Group": "Pokemon", "Name": "Ralts", "Time": "2016-10-10T01:55:00.000Z" },
                    { "Group": "Pokemon", "Name": "Taillow", "Time": "2016-10-10T00:48:00.000Z" },
                    { "Group": "Pokemon", "Name": "Larvitar", "Time": "2016-10-09T21:08:00.000Z" },
                    { "Group": "Badges", "Name": "Pyre Badge", "Time": "2016-10-10T04:06:00.000Z", "Attempts": 1, "Image": "img/badges/pyre.png" },
                    { "Group": "Badges", "Name": "Nature Badge", "Time": "2016-10-11T19:53:00.000Z", "Attempts": 2, "Image": "img/badges/nature.png" },
                    { "Group": "Badges", "Name": "Charm Badge", "Time": "2016-10-12T11:57:00.000Z", "Attempts": 1, "Image": "img/badges/charm.png" },
                    { "Group": "Badges", "Name": "Midnight Badge", "Time": "2016-10-13T16:54:00.000Z", "Attempts": 1, "Image": "img/badges/midnight.png" },
                    { "Group": "Badges", "Name": "Muscle Badge", "Time": "2016-10-14T14:34:00.000Z", "Attempts": 2, "Image": "img/badges/muscle.png" },
                    { "Group": "Badges", "Name": "Haze Badge", "Time": "2016-10-15T16:47:00.000Z", "Attempts": 3, "Image": "img/badges/haze.png" },
                    { "Group": "Badges", "Name": "Raucous Badge", "Time": "2016-10-17T00:30:00.000Z", "Attempts": 1, "Image": "img/badges/raucous.png" },
                    { "Group": "Badges", "Name": "Naljo Badge", "Time": "2016-10-18T03:10:00.000Z", "Attempts": 1, "Image": "img/badges/naljo.png" },
                    { "Group": "Pokemon", "Name": "Magikarp", "Time": "8d8h44m" },
                    { "Group": "Pokemon", "Name": "Goldeen", "Time": "8d10h8m" },
                    { "Group": "Pokemon", "Name": "Koffing", "Time": "8d10h11m" },
                    { "Group": "Pokemon", "Name": "Chingling", "Time": "8d11h59m" },
                    { "Group": "Pokemon", "Name": "Torkoal", "Time": "8d12h28m" },
                    { "Group": "Pokemon", "Name": "Graveler", "Time": "8d12h30m" },
                    { "Group": "Pokemon", "Name": "Ponyta", "Time": "8d12h35m" },
                    { "Group": "Pokemon", "Name": "Machoke", "Time": "8d12h38m" },
                    { "Group": "Elite Four", "Name": "Yuki", "Time": "8d 16h 23m", "Attempts": 2, "Image": "img/trainers/prism/yuki.png" },
                    { "Group": "Elite Four", "Name": "Sora", "Time": "8d 17h 14m", "Attempts": 3, "Image": "img/trainers/prism/sora.png" },
                    { "Group": "Elite Four", "Name": "Daichi", "Time": "8d 19h 59m", "Attempts": 4, "Image": "img/trainers/prism/daichi.png" },
                    { "Group": "Elite Four", "Name": "Mura", "Time": "9d 1h 3m", "Attempts": 5, "Image": "img/trainers/prism/mura.png" },
                    { "Group": "Champions", "Name": "Lance", "Time": "9d 11h 19m", "Attempts": 9, "Image": "img/trainers/prism/lance.png" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "9d 11h 20m", Attempts: 36, IDNo: "59484", Party: [
                            { Number: 38, Pokemon: "Ninetales", Gender: "Female", Nickname: "FFFEEEF", Level: 83, IDNo: "59484" },
                            { Number: 24, Pokemon: "Lopunny", Gender: "Male", Nickname: "EEEE", Level: 59, IDNo: "59484" },
                            { Number: 181, Pokemon: "Ampharos", Gender: "Male", Level: 60, IDNo: "59484" },
                            { Number: 165, Pokemon: "Gardevoir", Gender: "Male", Nickname: "IMmMMLLIR", Level: 61, IDNo: "59484" },
                            { Number: 248, Pokemon: "Tyranitar", Gender: "Female", Nickname: "I!C", Level: 76, IDNo: "59484" },
                            { Number: 184, Pokemon: "Azumarill", Gender: "Female", Nickname: "YYYYXOOOOO", Level: 85, IDNo: "59484" }
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { "Group": "Badges", "Name": "Marine Badge", "Image": "img/badges/marine.png", "Time": "10d 12h 57m", "Attempts": 2 },
                    { "Group": "Badges", "Name": "Hail Badge", "Image": "img/badges/hail.png", "Time": "10d 8h 39m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Sparky Badge", "Image": "img/badges/sparky.png", "Time": "9d 17h 8m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Sprout Badge", "Image": "img/badges/sprout.png", "Time": "9d 14h 59m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Fist Badge", "Image": "img/badges/fist.png", "Time": "9d12h40m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Psi Badge", "Image": "img/badges/psi.png", "Time": "10d 17h", "Attempts": 1 },
                    { "Group": "Badges", "Name": "White Badge", "Image": "img/badges/white.png", "Time": "11d 40m", "Attempts": 1 },
                    { "Group": "Badges", "Name": "Star Badge", "Image": "img/badges/star.png", "Time": "10d 23h 27m", "Attempts": 2 },
                    { "Group": "Pokemon", "Name": "Venomoth", "Time": "9d 13h 42m" },
                    { "Group": "Pokemon", "Name": "Pidgeotto", "Time": "9d 13h 59m" },
                    { "Group": "Pokemon", "Name": "Abra", "Time": "9d 15h 7m" },
                    { "Group": "Pokemon", "Name": "Magnemite", "Time": "9d 15h 16m" },
                    { "Group": "Pokemon", "Name": "Manectric", "Time": "9d 15h 22m" },
                    { "Group": "Pokemon", "Name": "Raichu", "Time": "9d 16h" },
                    { "Group": "Pokemon", "Name": "Onix", "Time": "9d 19h 7m" },
                    { "Group": "Pokemon", "Name": "Metapod", "Time": "10d 7h 51m" },
                    { "Group": "Pokemon", "Name": "Growlithe", "Time": "10d 20h 13m" },
                    { "Group": "Pokemon", "Name": "Banette", "Time": "11d 2h 30m" },
                    { "Group": "Pokemon", "Name": "Spiritomb", "Time": "11d 2h 44m" },
                    { "Group": "Pokemon", "Name": "Squirtle", "Time": "11d 7h 10m" },
                    { "Group": "Pokemon", "Name": "Scyther", "Time": "11d 8h 54m" },
                    { "Group": "Pokemon", "Name": "Relicanth", "Time": "11d 11h 24m" },
                    { "Group": "Pokemon", "Name": "Breloom", "Time": "11d 11h 34m" },
                    { "Group": "Pokemon", "Name": "Tangela", "Time": "11d 12h 38m" },
                    { "Group": "Pokemon", "Name": "Gligar", "Time": "11d 12h 53m" },
                    { "Group": "Pokemon", "Name": "Mawile", "Time": "11d 14h 42m" },
                    { "Group": "Pokemon", "Name": "Fearow", "Time": "11d 17h 37m" },
                    { "Group": "Pokemon", "Name": "Magmar", "Time": "11d 17h 42m" },
                    { "Group": "Badges", "Name": "Plain Badge", "Image": "img/badges/plain.png", "Time": "12d 5h 41m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Spinarak", "Time": "12d 5h 55m" },
                    { "Group": "Badges", "Name": "Hive Badge", "Image": "img/badges/hive.png", "Time": "12d 8h 40m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Jigglypuff", "Time": "12d 10h 48m" },
                    { "Group": "Pokemon", "Name": "Ditto", "Time": "12d 11h 8m" },
                    { "Group": "Badges", "Name": "Marsh Badge", "Image": "img/badges/marsh.png", "Time": "12d 12h 3m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Milotic", "Time": "12d 14h 38m" },
                    { "Group": "Badges", "Name": "Blaze Badge", "Image": "img/badges/blaze.png", "Time": "12d 18h 41m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Tentacruel", "Time": "12d 22h 11m" },
                    { "Group": "Pokemon", "Name": "Forretress", "Time": "13d 1h 20m" },
                    { "Group": "Pokemon", "Name": "Chimecho", "Time": "13d 2h 29m" },
                    { "Group": "Pokemon", "Name": "Rhyhorn", "Time": "13d 5h 24m" },
                    { "Group": "Pokemon", "Name": "Makuhita", "Time": "13d 7h 29m" },
                    { "Group": "Pokemon", "Name": "Libabeel", "Time": "13d 8h 45m" },
                    { "Group": "Pokemon", "Name": "Phancero", "Time": "13d 16h 8m" },
                    { "Group": "Pokemon", "Name": "Wailmer", "Time": "13d 21h 40m" },
                    { "Group": "Pokemon", "Name": "Metagross", "Time": "14d 2h 33m" },
                    { "Group": "Pokemon", "Name": "Lileep", "Time": "14d 6h 59m" },
                    { "Group": "Pokemon", "Name": "Anorith", "Time": "14d 7h 41m" },
                    { "Group": "Pokemon", "Name": "Shieldon", "Time": "14d 8h 23m" },
                    { "Group": "Pokemon", "Name": "Lairon", "Time": "14d 15h 21m" },
                    { "Group": "Pokemon", "Name": "Articuno", "Time": "14d 15h 29m" },
                    { "Group": "Pokemon", "Name": "Slugma", "Time": "14d 18h 22m" },
                    { "Group": "Pokemon", "Name": "Donphan", "Time": "14d 23h 30m" },
                    { "Group": "Pokemon", "Name": "Beldum", "Time": "14d 23h 52m" },
                    { "Group": "Pokemon", "Name": "Absol", "Time": "15d 5h 34m" },
                    { "Group": "Pokemon", "Name": "Gyarados", "Time": "15d 8h 51m" },
                    { "Group": "Pokemon", "Name": "Houndoom", "Time": "16d 2h" },
                    { "Group": "Pokemon", "Name": "Loudred", "Time": "16d 2h 14m" },
                    { "Group": "Elite Four", "Name": "Yuki", "Time": "16d 3h 29m", "Attempts": 1, "Image": "img/trainers/prism/rematch/yuki.png" },
                    { "Group": "Elite Four", "Name": "Sora", "Time": "16d 3h 41m", "Attempts": 1, "Image": "img/trainers/prism/rematch/sora.png" },
                    { "Group": "Elite Four", "Name": "Daichi", "Time": "16d 3h 46m", "Attempts": 1, "Image": "img/trainers/prism/rematch/daichi.png" },
                    { "Group": "Elite Four", "Name": "Mura", "Time": "16d 6h 21m", "Attempts": 3, "Image": "img/trainers/prism/rematch/mura.png" },
                    { "Group": "Champions", "Name": "Lance", "Time": "16d 9h 32m", "Attempts": 4, "Image": "img/trainers/prism/rematch/lance.png" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "16d 9h 33m", Attempts: 10, IDNo: "59484", Party: [
                            { Number: 38, Pokemon: "Ninetales", Gender: "Female", Nickname: "FFFEEEF", Level: 100, IDNo: "59484" },
                            { Number: 181, Pokemon: "Ampharos", Gender: "Male", Level: 88, IDNo: "59484" },
                            { Number: 248, Pokemon: "Tyranitar", Gender: "Female", Nickname: "I!C", Level: 100, IDNo: "59484" },
                            { Number: 165, Pokemon: "Gardevoir", Gender: "Male", Nickname: "IMmMMLLIR", Level: 86, IDNo: "59484" },
                            { Number: 184, Pokemon: "Azumarill", Shiny: true, Gender: "Female", Nickname: "YYYYXOOOOO", Level: 100, IDNo: "59484" },
                            { Number: 138, Pokemon: "Phancero", Nickname: "FFFFF", Level: 51, IDNo: "59484" }
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { "Group": "Pokemon", "Name": "Skorupi", "Time": "16d 17h 35m" },
                    { "Group": "Pokemon", "Name": "Glalie", "Time": "16d 18h 34m" },
                    { "Group": "Elite Four", "Image": "img/hosts/paul.png", "Name": "Brown", "Time": "16d 22h 13m", "Attempts": 1 },
                    { "Group": "Elite Four", "Image": "img/hosts/ajdnnw.png", "Name": "Gold", "Time": "16d 22h 21m", "Attempts": 1 },
                    { "Group": "Champions", "Image": "img/hosts/red.png", "Name": "Red", "Time": "16d 22h 27m", "Attempts": 1 },
                ]
            },
            {
                RunName: "Sun",
                ColorSecondary: "orange",
                ColorPrimary: "#eac07a",
                StartDate: "2016-11-18T22:00:00Z",
                Duration: "2016-12-02T20:00:00Z",
                BackgroundImage: "linear-gradient(to bottom, #eac07a 0%,#fefcff 30%,#fefcff 33%,#eac07a 40%,#f6eaab 100%)",
                HostName: "9'l",
                HostImage: "img/hosts/sun.png",
                HostImageSource: "http://drawnamu.deviantart.com/art/Sun-Moon-characters-612994192",
                TPPOrgLink: "http://twitchplayspokemon.org/",
                // Scraper: {
                //     url: "http://twitchplayspokemon.org/",
                //     //runtime: true,
                //     parts: [],
                //     pokemon: true
                // },
                Region: "Alola",
                EliteFourStartTime: "7d 9h 34m",
                Events: [
                    { "Group": "Pokemon", "Name": "Popplio", "Time": "27m" },
                    { "Group": "Pokemon", "Name": "Pikipek", "Time": "47m" },
                    { "Group": "Pokemon", "Name": "Yungoos", "Time": "49m" },
                    { "Group": "Pokemon", "Name": "Ledyba", "Time": "51m" },
                    { "Group": "Pokemon", "Name": "Caterpie", "Time": "54m" },
                    { "Group": "Pokemon", "Name": "Meowth", "Time": "5h54m" },
                    { "Group": "Pokemon", "Name": "Metapod", "Time": "6h43m" },
                    { "Group": "Pokemon", "Name": "Magnemite", "Time": "9h21m" },
                    { "Group": "Pokemon", "Name": "Grimer", "Time": "9h31m" },
                    { "Group": "Pokemon", "Name": "Abra", "Time": "11h3m" },
                    { "Group": "Pokemon", "Name": "Spearow", "Time": "12h36m" },
                    { "Group": "Pokemon", "Name": "Makuhita", "Time": "12h37m" },
                    { "Group": "Pokemon", "Name": "Cutiefly", "Time": "12h40m" },
                    { "Group": "Pokemon", "Name": "Rattata", "Time": "12h44m" },
                    { "Group": "Badges", "Name": "Normalium Z", "Image": "img/z-crystals/Normalium Z.png", "Time": "13h55m", "Attempts": 2 },
                    { "Group": "Pokemon", "Name": "Diglett", "Time": "14h2m" },
                    { "Group": "Pokemon", "Name": "Smeargle", "Time": "14h16m" },
                    { "Group": "Pokemon", "Name": "Growlithe", "Time": "14h22m" },
                    { "Group": "Pokemon", "Name": "Rufflet", "Time": "14h48m" },
                    { "Group": "Pokemon", "Name": "Butterfree", "Time": "15h12m" },
                    { "Group": "Pokemon", "Name": "Cottonee", "Time": "15h31m" },
                    { "Group": "Pokemon", "Name": "Oricorio", "Time": "15h57m" },
                    { "Group": "Badges", "Name": "Fightinium Z", "Image": "img/z-crystals/Fightinium Z.png", "Time": "17h5m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Igglybuff", "Time": "20h41m" },
                    { "Group": "Pokemon", "Name": "Mudbray", "Time": "20h46m" },
                    { "Group": "Pokemon", "Name": "Lillipup", "Time": "20h50m" },
                    { "Group": "Pokemon", "Name": "Eevee", "Time": "22h5m" },
                    { "Group": "Pokemon", "Name": "Grubbin", "Time": "22h8m" },
                    { "Group": "Pokemon", "Name": "Bounsweet", "Time": "1d4h44m" },
                    { "Group": "Pokemon", "Name": "Morelull", "Time": "1d5h3m" },
                    { "Group": "Pokemon", "Name": "Psyduck", "Time": "1d5h9m" },
                    { "Group": "Pokemon", "Name": "Wishiwashi", "Time": "1d5h35m" },
                    { "Group": "Badges", "Name": "Waterium Z", "Image": "img/z-crystals/Waterium Z.png", "Time": "1d6h38m", "Attempts": 2 },
                    { "Group": "Badges", "Name": "Firium Z", "Image": "img/z-crystals/Firium Z.png", "Time": "1d10h26m", "Attempts": 2 },
                    { "Group": "Pokemon", "Name": "Trumbeak", "Time": "1d14h8m" },
                    { "Group": "Pokemon", "Name": "Fletchinder", "Time": "1d14h23m" },
                    { "Group": "Pokemon", "Name": "Salandit", "Time": "1d14h28m" },
                    { "Group": "Badges", "Name": "Grassium Z", "Image": "img/z-crystals/Grassium Z.png", "Time": "1d16h21m", "Attempts": 6 },
                    { "Group": "Pokemon", "Name": "Comfey", "Time": "1d16h51m" },
                    { "Group": "Pokemon", "Name": "Fletchling", "Time": "1d17h50m" },
                    { "Group": "Pokemon", "Name": "Cubone", "Time": "1d18h24m" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "1d20h48m" },
                    { "Group": "Pokemon", "Name": "Poliwhirl", "Time": "2d1h4m" },
                    { "Group": "Pokemon", "Name": "Gastly", "Time": "2d2h16m" },
                    { "Group": "Pokemon", "Name": "Phantump", "Time": "2d2h21m" },
                    { "Group": "Pokemon", "Name": "Gumshoos", "Time": "2d15h1m" },
                    { "Group": "Pokemon", "Name": "Nosepass", "Time": "2d15h1m" },
                    { "Group": "Pokemon", "Name": "Wingull", "Time": "2d15h59m" },
                    { "Group": "Pokemon", "Name": "Golbat", "Time": "2d23h17m" },
                    { "Group": "Pokemon", "Name": "Steenee", "Time": "3d3h42m" },
                    { "Group": "Badges", "Name": "Rockium Z", "Image": "img/z-crystals/Rockium Z.png", "Time": "3d7h10m", "Attempts": 12 },
                    { "Group": "Pokemon", "Name": "Fearow", "Time": "3d12h2m" },
                    { "Group": "Pokemon", "Name": "Ariados", "Time": "3d13h23m" },
                    { "Group": "Pokemon", "Name": "Minior", "Time": "3d15h56m" },
                    { "Group": "Badges", "Name": "Electrium Z", "Image": "img/z-crystals/Electrium Z.png", "Time": "3d19h31m", "Attempts": 3 },
                    { "Group": "Pokemon", "Name": "Pancham", "Time": "3d22h10m" },
                    { "Group": "Pokemon", "Name": "Herdier", "Time": "3d22h26m" },
                    { "Group": "Pokemon", "Name": "Komala", "Time": "3d22h54m" },
                    { "Group": "Pokemon", "Name": "Poliwag", "Time": "3d23h50m" },
                    { "Group": "Pokemon", "Name": "Paras", "Time": "4d11m" },
                    { "Group": "Pokemon", "Name": "Ledian", "Time": "4d1h27m" },
                    { "Group": "Pokemon", "Name": "Happiny", "Time": "4d2h2m" },
                    { "Group": "Pokemon", "Name": "Snorunt", "Time": "4d6h17m" },
                    { "Group": "Pokemon", "Name": "Raticate", "Time": "4d9h19m" },
                    { "Group": "Pokemon", "Name": "Crabrawler", "Time": "4d9h22m" },
                    { "Group": "Pokemon", "Name": "Kadabra", "Time": "4d12h5m" },
                    { "Group": "Pokemon", "Name": "Ribombee", "Time": "4d15h39m" },
                    { "Group": "Badges", "Name": "Ghostium Z", "Image": "img/z-crystals/Ghostium Z.png", "Time": "5d7h32m", "Attempts": 15 },
                    { "Group": "Pokemon", "Name": "Klefki", "Time": "5d7h36m" },
                    { "Group": "Pokemon", "Name": "Haunter", "Time": "5d8h18m" },
                    { "Group": "Pokemon", "Name": "Magikarp", "Time": "5d8h44m" },
                    { "Group": "Pokemon", "Name": "Graveler", "Time": "5d9h3m" },
                    { "Group": "Pokemon", "Name": "Golem", "Time": "5d9h3m" },
                    { "Group": "Pokemon", "Name": "Vulpix", "Time": "5d9h9m" },
                    { "Group": "Badges", "Name": "Darkium Z", "Image": "img/z-crystals/Darkium Z.png", "Time": "5d18h15m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Gastrodon", "Time": "6d20m" },
                    { "Group": "Badges", "Name": "Groundium Z", "Image": "img/z-crystals/Groundium Z.png", "Time": "6d9h39m", "Attempts": 9 },
                    { "Group": "Pokemon", "Name": "Zygarde", "Time": "6d11h49m" },
                    { "Group": "Pokemon", "Name": "Pelipper", "Time": "6d12h11m" },
                    { "Group": "Pokemon", "Name": "Aerodactyl", "Time": "6d12h20m" },
                    { "Group": "Badges", "Name": "Dragonium Z", "Image": "img/z-crystals/Dragonium Z.png", "Time": "6d21h20m", "Attempts": 1 },
                    { "Group": "Pokemon", "Name": "Solgaleo", "Time": "7d1h51m" },
                    { "Group": "Pokemon", "Name": "Roggenrola", "Time": "7d5h51m" },
                    { "Group": "Elite Four", "Name": "Hala", "Time": "7d9h41m", "Attempts": 1, "Image": "img/trainers/sun/hala.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Pokemon", "Name": "Absol", "Time": "7d11h28m" },
                    { "Group": "Elite Four", "Name": "Acerola", "Time": "7d14h22m", "Attempts": 5, "Image": "img/trainers/sun/acerola.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Elite Four", "Name": "Olivia", "Time": "7d18h29m", "Attempts": 3, "Image": "img/trainers/sun/olivia.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Elite Four", "Name": "Kahili", "Time": "8d42m", "Attempts": 2, "Image": "img/trainers/sun/kahili.gif", "ImageSource": "http://beliot419.deviantart.com/art/Custom-sprite-Kahili-651482881" },
                    { "Group": "Pokemon", "Name": "Carbink", "Time": "8d2h38m" },
                    { "Group": "Champions", "Name": "Professor Kukui", "Time": "8d19h11m", "Attempts": 5, "Image": "img/trainers/sun/kukui.gif", "ImageSource": "http://beliot419.deviantart.com/art/Custom-sprite-Prof-Kukui-649197164" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "8d19h12m", Attempts: 41, Party: [
                            { Pokemon: "Ribombee", Nickname: "Ribombe r44", Gender: "Male", Level: 77 },
                            { Pokemon: "Solgaleo", Nickname: "KMRR  WWL Nn", Level: 72 },
                            { Pokemon: "Ariados", Nickname: " ⤵︎!?ro   s!h", Gender: "Female", Level: 80 },
                            { Pokemon: "Zygarde", Nickname: "      66  ", Form: "10%", Class: "percent10", Level: 71 },
                            { Pokemon: "Raticate", Nickname: " SE", Gender: "Female", Form: "Alolan", Level: 74 },
                            { Pokemon: "Fearow", Nickname: "3 \"\" ☃︎) %   ", Gender: "Male", Level: 74 },
                        ],
                        Image: "img/ribbons/champion-alola.png"
                    },
                    { "Group": "Pokemon", "Name": "Type: Null", "Time": "8d21h50m" },
                    { "Group": "Pokemon", "Name": "Nihilego", "Time": "9d2h17m" },
                    { "Group": "Pokemon", "Name": "Buzzwole", "Time": "9d10h1m" },
                    { "Group": "Pokemon", "Name": "Cosmog", "Time": "9d11h5m" },
                    { "Group": "Pokemon", "Name": "Mimikyu", "Time": "9d14h40m" },
                    { "Group": "Pokemon", "Name": "Tentacool", "Time": "9d15h" },
                    { "Group": "Pokemon", "Name": "Sandile", "Time": "9d15h12m" },
                    { "Group": "Pokemon", "Name": "Dugtrio", "Time": "9d15h39m" },
                    { "Group": "Pokemon", "Name": "Trapinch", "Time": "9d16h4m" },
                    { "Group": "Pokemon", "Name": "Tapu Bulu", "Time": "9d16h15m" },
                    { "Group": "Pokemon", "Name": "Geodude", "Time": "9d17h" },
                    { "Group": "Pokemon", "Name": "Torkoal", "Time": "9d17h33m" },
                    { "Group": "Pokemon", "Name": "Turtonator", "Time": "9d17h42m" },
                    { "Group": "Pokemon", "Name": "Charjabug", "Time": "9d17h55m" },
                    { "Group": "Pokemon", "Name": "Togedemaru", "Time": "9d18h43m" },
                    { "Group": "Pokemon", "Name": "Elekid", "Time": "9d18h49m" },
                    { "Group": "Pokemon", "Name": "Mankey", "Time": "9d20h57m" },
                    { "Group": "Pokemon", "Name": "Delibird", "Time": "9d21h7m" },
                    { "Group": "Elite Four Rematch", "Name": "Hala", "Time": "10d1h5m", "Attempts": 3, "Image": "img/trainers/sun/rematch/hala.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Pokemon", "Name": "Xurkitree", "Time": "10d12h44m" },
                    { "Group": "Pokemon", "Name": "Kartana", "Time": "10d13h27m" },
                    { "Group": "Pokemon", "Name": "Guzzlord", "Time": "10d15h4m" },
                    { "Group": "Pokemon", "Name": "Rockruff", "Time": "10d17h25m" },
                    { "Group": "Pokemon", "Name": "Machop", "Time": "10d18h10m" },
                    { "Group": "Pokemon", "Name": "Spinda", "Time": "10d18h16m" },
                    { "Group": "Pokemon", "Name": "Drifloon", "Time": "10d21h30m" },
                    { "Group": "Pokemon", "Name": "Boldore", "Time": "11d6h" },
                    { "Group": "Pokemon", "Name": "Machoke", "Time": "11d6h8m" },
                    { "Group": "Pokemon", "Name": "Lycanroc", "Time": "11d6h13m" },
                    { "Group": "Pokemon", "Name": "Jangmo-o", "Time": "11d6h38m" },
                    { "Group": "Pokemon", "Name": "Tapu Koko", "Time": "11d7h11m" },
                    { "Group": "Pokemon", "Name": "Bonsly", "Time": "11d7h42m" },
                    { "Group": "Pokemon", "Name": "Munchlax", "Time": "11d8h" },
                    { "Group": "Pokemon", "Name": "Necrozma", "Time": "11d8h38m" },
                    { "Group": "Elite Four Rematch", "Name": "Kahili", "Time": "11d11h51m", "Attempts": 1, "Image": "img/trainers/sun/rematch/kahili.gif", "ImageSource": "http://beliot419.deviantart.com/art/Custom-sprite-Kahili-651482881" },
                    { "Group": "Elite Four Rematch", "Name": "Olivia", "Time": "11d12h1m", "Attempts": 1, "Image": "img/trainers/sun/rematch/olivia.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Elite Four Rematch", "Name": "Acerola", "Time": "11d14h5m", "Attempts": 3, "Image": "img/trainers/sun/rematch/acerola.gif", "ImageSource": "http://drawnamu.deviantart.com/art/Trial-Captains-Alola-632931621" },
                    { "Group": "Pokemon", "Name": "Porygon", "Time": "11d18h32m" },
                    { "Group": "Pokemon", "Name": "Finneon", "Time": "11d 20h 8m" },
                    { "Group": "Pokemon", "Name": "Slowpoke", "Time": "11d 20h 25m" },
                    { "Group": "Pokemon", "Name": "Ditto", "Time": "11d 23h 29m" },
                    { "Group": "Pokemon", "Name": "Beldum", "Time": "11d 23h 46m" },
                    { "Group": "Champions", "Name": "Hau", "Time": "12d2h45m", "Attempts": 2, "Image": "img/trainers/sun/hau.gif", "ImageSource": "http://beliot419.deviantart.com/art/Custom-sprite-Hau-651693374" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "12d2h45m", Attempts: 8, Party: [
                            { Pokemon: "Ribombee", Nickname: "Ribombe r44", Gender: "Male", Level: 84 },
                            { Pokemon: "Solgaleo", Nickname: "KMRR  WWL Nn", Level: 80 },
                            { Pokemon: "Buzzwole", Nickname: "! beb r", Level: 74 },
                            { Pokemon: "Raticate", Nickname: " SE", Gender: "Female", Form: "Alolan", Level: 82 },
                            { Pokemon: "Zygarde", Nickname: "      66  ", Form: "10%", Class: "percent10", Level: 80 },
                            { Pokemon: "Fearow", Nickname: "3 \"\" ☃︎) %   ", Gender: "Male", Level: 81 },
                        ],
                        Image: "img/ribbons/champion-alola.png"
                    },
                    { "Group": "Pokemon", "Name": "Skarmory", "Time": "12d11h18m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Fomantis", "Time": "12d11h26m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Bewear", "Time": "12d12h19m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Gigalith", "Time": "12d12h53m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Spinarak", "Time": "12d13h15m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Rowlet", "Time": "12d13h27m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Feebas", "Time": "12d14h29m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Staryu", "Time": "12d15h47m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Honedge", "Time": "12d16h22m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Miltank", "Time": "12d22h31m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Exeggutor", "Time": "13d4h50m" },
                    { "Group": "Pokemon", "Name": "Stufful", "Time": "13d5h37m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Leafeon", "Time": "13d6h8m", Class: "WifiTrade" }, //Traded as Level 1 Eevee
                    { "Group": "Pokemon", "Name": "Staravia", "Time": "13d8h16m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Pinsir", "Time": "13d8h18m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Litten", "Time": "13d8h22m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Decidueye", "Time": "13d8h24m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Togepi", "Time": "13d16h27m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Gible", "Time": "13d16h43m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Sableye", "Time": "13d17h5m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Azurill", "Time": "13d17h46m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Goldeen", "Time": "13d17h52m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Mareanie", "Time": "13d20h33m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Alakazam", "Time": "13d20h49m", Class: "WifiTrade" },
                    { "Group": "Pokemon", "Name": "Sneasel", "Time": "13d21h10m", Class: "WifiTrade" },
                ]
            }
        ]
    },
    {
        Name: "Sidegames",
        Scale: TPP.Scale.Weeks,
        Runs: [
            {
                RunName: "Vietnamese Crystal",
                StartDate: "2015-03-24T17:42:00Z",
                ColorPrimary: "#77b2ff",
                ColorSecondary: "#416fcc",
                ContainsRunsFrom: ["Season 2"],
                //Duration: "2015-11-10T10:09:48Z",
                Duration: "2015-12-11T21:03:00Z",
                EndDate: "2015-12-11T21:03:00Z",
                HostName: "BABA",
                HostImage: "img/hosts/baba.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Johto",
                AdditionalRegions: [{ Name: "Kanto", Time: "2015-09-14T18:37:36Z" }],
                Events: [
                    {
                        Group: "Badges",
                        Name: "Zephyr Badge",
                        Image: "img/badges/zephyr.png",
                        Time: "2015-04-11T17:34:52Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Hive Badge",
                        Image: "img/badges/hive.png",
                        Time: "2015-04-21T10:43:19Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Plain Badge",
                        Image: "img/badges/plain.png",
                        Time: "2015-05-05T23:27:21Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Fog Badge",
                        Image: "img/badges/fog.png",
                        Time: "2015-05-29T04:36:25Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Glacier Badge",
                        Image: "img/badges/glacier.png",
                        Time: "2015-07-02T08:10:06Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Storm Badge",
                        Image: "img/badges/storm.png",
                        Time: "2015-06-13T14:44:17Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Mineral Badge",
                        Image: "img/badges/mineral.png",
                        Time: "2015-06-18T18:44:58Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Rising Badge",
                        Image: "img/badges/rising.png",
                        Time: "2015-08-17T15:05:08Z"
                    },
                    {
                        Group: "Elite Four",
                        Name: "YISIJI",
                        Image: "img/trainers/crystal/will.png",
                        Time: "2015-09-06T01:25:15Z"
                    },
                    {
                        Group: "Elite Four",
                        Name: "TOD",
                        Image: "img/trainers/crystal/koga.png",
                        Time: "2015-09-06T18:27:04Z"
                    },
                    {
                        Group: "Elite Four",
                        Name: "SIBA",
                        Image: "img/trainers/crystal/bruno.png",
                        Time: "2015-09-07T15:00:32Z"
                    },
                    {
                        Group: "Elite Four",
                        Name: "JIALUN",
                        Image: "img/trainers/crystal/karen.png",
                        Time: "2015-09-08T08:32:01Z"
                    },
                    {
                        Group: "Champions",
                        Name: "DU",
                        Image: "img/trainers/crystal/lance.png",
                        Time: "2015-09-09T13:34:34Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Boulder Badge",
                        Image: "img/badges/boulder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-10-23T21:03:40Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Cascade Badge",
                        Image: "img/badges/cascade.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-09-24T22:04:23Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Thunder Badge",
                        Image: "img/badges/thunder.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-09-16T05:25:59Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Rainbow Badge",
                        Image: "img/badges/rainbow.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-10-28T08:57:22Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Soul Badge",
                        Image: "img/badges/soul.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-10-05T21:01:49Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Marsh Badge",
                        Image: "img/badges/marsh.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-09-17T23:53:59Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Volcano Badge",
                        Image: "img/badges/volcano.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-11-01T21:29:56Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Earth Badge",
                        Image: "img/badges/earth.png",
                        ImageSource: "http://bulbapedia.bulbagarden.net/wiki/Badge#Indigo_League",
                        Time: "2015-11-03T09:57:30Z"
                    },
                    {
                        Group: "Champions",
                        Name: "SORCERER'SSHO",
                        Image: "img/trainers/crystal/sorcererssho.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3sd3vo/sorceror_red_trainer_sprite_improvements_on/",
                        Time: "2015-11-10T10:09:48Z"
                    },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "2015-09-10T04:07:06Z", IDNo: "30818", Party: [
                            { Number: 157, Pokemon: "BAGEP", Class: "Typhlosion", Gender: "Male", Nickname: "BEST", Level: 59, IDNo: "30818" },
                            { Number: 245, Pokemon: "DON", Class: "Suicune", Nickname: "DONG", Level: 45, IDNo: "30818" },
                            { Number: 16, Pokemon: "LAP", Class: "Pidgey", Gender: "Female", Nickname: "EVER", Level: 10, IDNo: "30818" },
                            { Number: 185, Pokemon: "HUSHU", Class: "Sudowoodo", Gender: "Female", Nickname: "FAKE", Level: 20, IDNo: "30818" },
                            { Number: 130, Pokemon: "JINDE", Class: "Gyarados", Shiny: true, Gender: "Male", Nickname: "DADA", Level: 31, IDNo: "30818" },
                            { Number: 60, Pokemon: "NILEM", Class: "Poliwag", Nickname: "ORGY", Gender: "Female", Level: 12, IDNo: "30818" }
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                    { Name: "RIDED", Time: "2015-03-26T06:44:48Z", Group: "Pokemon", Class: "Cyndaquil" },
                    { Name: "MADAM", Time: "2015-04-10T06:52:36Z", Group: "Pokemon", Class: "Quilava" },
                    { Name: "BAGEP", Time: "2015-06-06T12:09:13Z", Group: "Pokemon", Class: "Typhlosion" },
                    { Name: "LAP", Time: "2015-04-04T06:07:00Z", Group: "Pokemon", Class: "Pidgey" },
                    { Name: "BIRD", Time: "2015-04-28T08:33:19Z", Group: "Pokemon", Class: "Spearow" },
                    { Name: "DEKE", Time: "2015-06-03T12:05:26Z", Group: "Pokemon", Class: "Togepi" },
                    { Name: "ANNAN", Time: "2015-11-25T15:56:56Z", Group: "Pokemon", Class: "Unown" },
                    { Name: "NILEM", Time: "2015-04-03T11:50:19Z", Group: "Pokemon", Class: "Poliwag" },
                    { Name: "JINDE", Time: "2015-06-23T00:56:44Z", Group: "Pokemon", Class: "Gyarados" },
                    { Name: "HUSHU", Time: "2015-05-08T01:24:33Z", Group: "Pokemon", Class: "Sudowoodo" },
                    { Name: "JELLY", Time: "2015-06-08T16:28:43Z", Group: "Pokemon", Class: "Tentacruel" },
                    { Name: "DON", Time: "2015-08-23T15:08:34Z", Group: "Pokemon", Class: "Suicune" },
                    { Name: "LUJ", Time: "2015-11-17T19:07:11Z", Group: "Pokemon", Class: "Lugia" },
                ]
            },
            {
                RunName: "Trading Card Game",
                StartDate: "2015-12-21T01:52:47Z",
                ColorPrimary: "#e0e0c0",
                ColorSecondary: "#e00000",
                ContainsRunsFrom: ["Intermissions"],
                Duration: "2016-02-14T02:17:53Z",
                HostName: "YUGI",
                HostImage: "img/hosts/yugi.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xq7en/meet_yugi/",
                Region: "TCG Island",
                Events: [
                    {
                        Group: "Badges",
                        Name: "Grass Medal",
                        Image: "img/tcg/grass.png",
                        Time: "2016-02-07T12:16:27Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Science Medal",
                        Image: "img/tcg/science.png",
                        Time: "2016-02-13T12:46:16Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Fire Medal",
                        Image: "img/tcg/fire.png",
                        Time: "2016-01-26T17:19:31Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Water Medal",
                        Image: "img/tcg/water.png",
                        Time: "2016-02-12T18:57:40Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Lightning Medal",
                        Image: "img/tcg/lightning.png",
                        Time: "2016-01-22T22:21:34Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Psychic Medal",
                        Image: "img/tcg/psychic.png",
                        Time: "2016-02-13T01:35:00Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "Rock Medal",
                        Image: "img/tcg/rock.png",
                        Time: "2016-01-08T05:02:03Z",
                        Attempts: 2
                    },
                    {
                        Group: "Badges",
                        Name: "Fighting Medal",
                        Image: "img/tcg/fighting.png",
                        Time: "2016-02-13T09:43:40Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Courtney",
                        Image: "img/tcg/courtney.png",
                        Time: "2016-02-13T15:08:08Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Steve",
                        Image: "img/tcg/steve.png",
                        Time: "2016-02-13T23:24:10Z",
                        Attempts: 2
                    },
                    {
                        Group: "Elite Four",
                        Name: "Jack",
                        Image: "img/tcg/jack.png",
                        Time: "2016-02-14T01:19:34Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Rod",
                        Image: "img/tcg/rod.png",
                        Time: "2016-02-14T01:50:58Z",
                        Attempts: 1
                    },
                    {
                        Group: "Champions",
                        Name: "Ronald",
                        Image: "img/tcg/ronald.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xx9f3/tcg_ronald_kaiba_sprite/",
                        Time: "2016-02-14T02:17:53Z",
                        Attempts: 1
                    }
                ]
            },
            {
                RunName: "Mystery Dungeon: Red Rescue Team",
                ColorPrimary: "#c6223b",
                ColorSecondary: "#c6223b",
                StartDate: "2016-02-12T03:13:00Z",
                //Duration: "2016-08-16T23:38:00Z",
                //Duration: "2016-10-26T20:18:00Z",
                Duration: new Date().toISOString(),
                Ongoing: true,
                HostName: "SquirtLee",
                HostImage: "img/hosts/pmd/squirtlee.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                Region: "Pokemon World",
                ContainsRunsFrom: ["Sidegames"],
                Events: [
                    {
                        Group: "Bosses",
                        Name: "Skarmory",
                        Time: "2016-02-29T01:34:30Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Team Meanies",
                        Time: "2016-03-22T05:58:15Z",
                        Class: "pokesprite Gengar"
                    },
                    {
                        Group: "Bosses",
                        Name: "Zapdos",
                        Time: "2016-06-03T20:18:30Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Moltres",
                        Time: "2016-07-02T15:49:37Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Articuno",
                        Time: "2016-07-19T23:26:10Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Mankey Gang",
                        Time: "2016-10-20T11:04:58Z",
                        Class: "pokesprite Mankey"
                    },
                    {
                        Group: "Bosses",
                        Name: "Groudon",
                        Time: "2016-12-03T23:29:24Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Rayquaza",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Kyogre",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Regirock",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Regice",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Registeel",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Latios",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Entei",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Raikou",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Suicune",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Ho-Oh",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Jirachi",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Lugia",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Mewtwo",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Deoxys",
                        Time: "-1d",
                        Class: "pokesprite"
                    },
                    //{ Group: "Pokemon", Name: "Shuppet", Time: "Fri Dec 16 2016 11:15:01 GMT+0000" }
                ]
            },
            {
                RunName: "Ultra",
                ColorPrimary: "purple",
                ColorSecondary: "yellow",
                StartDate: "2016-08-16T23:39:00Z",
                //Duration: 'Sat Oct 08 2016 21:10:42 GMT+0000 (UTC)',
                Duration: "Sat Oct 29 2016 11:20:03 GMT+0000 (UTC)",
                HostName: "PEE",
                HostImage: "img/hosts/pee.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/568gkg/the_ultra_crew_so_far_v_30/d8i7kwk",
                Region: "Ultra",
                EliteFourStartTime: "2016-10-07T03:56:27Z",
                ContainsRunsFrom: ["Season 3", "Revisits"],
                Events: [
                    { "Group": "Pokemon", "Name": "Squirtle", "Time": "2016-08-17T21:21:34Z" },
                    { "Group": "Badges", "Name": "Boulder Badge", "Time": "2016-08-26T04:57:51Z", "Attempts": 1, "Image": "img/badges/boulder.png" },
                    { "Group": "Pokemon", "Name": "Wartortle", "Time": "2016-08-28T04:48:53Z" },
                    { "Group": "Pokemon", "Name": "Solrock", "Time": "2016-08-29T15:47:40Z" },
                    { "Group": "Pokemon", "Name": "Paras", "Time": "2016-08-30T03:38:15Z" },
                    { "Group": "Pokemon", "Name": "Zapdos", "Time": "2016-09-12T10:59:24Z" },
                    { "Group": "Badges", "Name": "Rainbow Badge", "Time": "2016-09-13T16:25:57Z", "Attempts": 1, "Image": "img/badges/rainbow.png" },
                    { "Group": "Badges", "Name": "Soul Badge", "Time": "2016-09-15T03:50:41Z", "Attempts": 1, "Image": "img/badges/soul.png" },
                    { "Group": "Badges", "Name": "Thunder Badge", "Time": "2016-09-17T21:18:15Z", "Attempts": 2, "Image": "img/badges/thunder.png" },
                    { "Group": "Badges", "Name": "Cascade Badge", "Time": "2016-09-20T20:38:26Z", "Attempts": 2, "Image": "img/badges/cascade.png" },
                    { "Group": "Pokemon", "Name": "Shuppet", "Time": "2016-09-25T12:51:46Z" },
                    { "Group": "Badges", "Name": "Marsh Badge", "Time": "2016-09-30T03:52:07Z", "Attempts": 1, "Image": "img/badges/marsh.png" },
                    { "Group": "Pokemon", "Name": "Mewtwo", "Time": "2016-10-01T08:05:32Z" },
                    { "Group": "Pokemon", "Name": "Blastoise", "Time": "2016-10-02T13:12:43Z" },
                    { "Group": "Badges", "Name": "Volcano Badge", "Time": "2016-10-03T17:06:08Z", "Attempts": 1, "Image": "img/badges/volcano.png" },
                    { "Group": "Pokemon", "Name": "Zubat", "Time": "2016-10-05T01:32:11Z" },
                    { "Group": "Badges", "Name": "Earth Badge", "Time": "2016-10-06T04:52:11Z", "Attempts": 1, "Image": "img/badges/earth.png" },
                    { Group: "Elite Four", Name: "JAX", Image: "img/trainers/firered/bruno.png", Time: "2016-10-07T11:47:10Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "Agatha", Image: "img/trainers/firered/agatha.png", Time: "Fri Oct 07 2016 22:45:01 GMT+0000 (UTC)", Attempts: 1 },
                    { Group: "Elite Four", Name: "Lorelei", Image: "img/trainers/ultra/lorelei.png", Time: "Sat Oct 08 2016 20:56:11 GMT+0000 (UTC)", Attempts: 1 },
                    { Group: "Elite Four", Name: "Lance", Image: "img/trainers/ultra/lance.png", Time: "2016-10-27T12:17:15Z", Attempts: 1 },
                    { Group: "Champions", Name: "LUM", Image: "img/trainers/ultra/lum.png", Time: "2016-10-28T10:19:28Z", Attempts: 1 },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #1", Time: "2016-10-28T15:21:23Z", IDNo: "46904", Attempts: 1, Party: [
                            { Pokemon: "Zapdos", Class: "ultra", Nickname: "CHAT", Level: 54, Number: 145, IDNo: "46904" },
                            { Pokemon: "Mewtwo", Nickname: "SAC", Level: 71, Number: 150, IDNo: "46904" },
                            { Pokemon: "Solrock", Nickname: "BOOB", Level: 8, Number: "???", IDNo: "46904" },
                            { Pokemon: "Paras", Nickname: "BEES", Level: 10, Gender: "Male", Number: 46, IDNo: "46904" },
                            { Pokemon: "Shuppet", Nickname: "Mmm!♂", Level: 20, Gender: "Male", Number: "???", IDNo: "46904" },
                            { Pokemon: "Blastoise", Class: "ultra", Nickname: "LUL", Level: 39, Gender: "Male", Number: 9, IDNo: "46904" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                ]
            },
        ]
    },
    {
        Name: "Revisits",
        SingularName: "Revisit",
        Scale: TPP.Scale.Hours,
        Runs: [
            {
                RunName: "Randomized FireRed Revisit",
                ColorPrimary: "#ff7e1b",
                ColorSecondary: "#8b5325",
                StartDate: "2016-04-11T05:38:00Z",
                Duration: "2016-04-13T05:01:00Z",
                HostName: "A",
                HostImage: "img/hosts/a2.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Kanto",
                Events: [
                    { Group: "Pokemon", Name: "Spinarak", Time: "2016-04-11T06:01:00Z" },
                    { Group: "Pokemon", Name: "Swinub", Time: "2016-04-11T06:04:00Z" },
                    { Group: "Pokemon", Name: "Hoothoot", Time: "2016-04-11T08:41:00Z" },
                    { Group: "Pokemon", Name: "Smeargle", Time: "2016-04-11T08:48:00Z" },
                    { Group: "Pokemon", Name: "Spheal", Time: "2016-04-11T09:35:00Z" },
                    { Group: "Pokemon", Name: "Zubat", Time: "2016-04-11T10:06:00Z" },
                    { Group: "Pokemon", Name: "Wynaut", Time: "2016-04-11T10:22:00Z" },
                    { Group: "Pokemon", Name: "Sandshrew", Time: "2016-04-11T11:27:00Z" },
                    { Group: "Pokemon", Name: "Meditite", Time: "2016-04-11T11:30:00Z" },
                    { Group: "Pokemon", Name: "Fearow", Time: "2016-04-11T12:41:00Z" },
                    { Group: "Pokemon", Name: "Spearow", Time: "2016-04-11T12:45:00Z" },
                    { Group: "Pokemon", Name: "Slowking", Time: "2016-04-11T13:22:00Z" },
                    { Group: "Pokemon", Name: "Shellder", Time: "2016-04-11T13:32:00Z" },
                    { Group: "Pokemon", Name: "Linoone", Time: "2016-04-11T13:35:00Z" },
                    { Group: "Pokemon", Name: "Natu", Time: "2016-04-11T14:37:00Z" },
                    { Group: "Pokemon", Name: "Goldeen", Time: "2016-04-11T14:44:00Z" },
                    { Group: "Pokemon", Name: "Nidorino", Time: "2016-04-11T16:28:00Z" },
                    { Group: "Pokemon", Name: "Pichu", Time: "2016-04-11T17:26:00Z" },
                    { Group: "Pokemon", Name: "Sentret", Time: "2016-04-12T00:21:00Z" },
                    { Group: "Elite Four Rematch", Name: "Lorelei", Image: "img/randomized/firered/rematch/lorelei.png", Time: "2016-04-12T09:12:00Z", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/" },
                    { Group: "Elite Four Rematch", Name: "Bruno", Image: "img/randomized/firered/rematch/bruno.png", Time: "2016-04-12T09:24:00Z", Attempts: 1, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/" },
                    { Group: "Elite Four Rematch", Name: "Agatha", Image: "img/randomized/firered/rematch/agatha.png", Time: "2016-04-12T11:38:00Z", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/" },
                    { Group: "Elite Four Rematch", Name: "Lance", Image: "img/randomized/firered/rematch/lance.png", Time: "2016-04-12T13:18:00Z", Attempts: 2, ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/24321f/elite_four_sprites/" },
                    { Group: "Champions", Name: "Green", Image: "img/trainers/firered/rematch/green.png", Time: "2016-04-13T00:15:00Z", Attempts: 5 },
                    { Group: "Pokemon", Name: "Lugia", Time: "2016-04-13T02:50:00Z" },
                    { Group: "Pokemon", Name: "Huntail", Time: "2016-04-13T03:57:00Z" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "2016-04-13T00:17:00Z", IDNo: "56171", Party: [
                            { Pokemon: "Altaria", Level: 70, Gender: "Female", Number: 334, IDNo: "56171" },
                            { Pokemon: "Blastoise", Nickname: "TTABCIJIJD", Level: 65, Gender: "Male", Number: 9, IDNo: "56171" },
                            { Pokemon: "Masquerain", Nickname: "AATUUUUNN", Level: 61, Gender: "Male", Number: 284, IDNo: "56171" },
                            { Pokemon: "Mew", Nickname: "MARC", Level: 71, Number: 151, IDNo: "01239" },
                            { Pokemon: "Sandslash", Level: 65, Gender: "Female", Number: 28, IDNo: "56171" },
                            { Pokemon: "Slaking", Nickname: "CCCDJCCCC5", Level: 80, Gender: "Male", Number: 289, IDNo: "56171" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                ],
                Revisit: { Collection: "Season 1", Run: "Randomized FireRed" },
                CopyEvents: ["Randomized FireRed"],
            },
            {
                RunName: "Emerald Revisit",
                ColorPrimary: "#9bbb59",
                ColorSecondary: "#71893f",
                Duration: "2016-04-15T23:00:00Z",
                StartDate: "2016-04-13T05:02:00Z",
                HostName: "A",
                HostImage: "img/hosts/a.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Hoenn",
                Events: [
                    { Group: "Champions", Name: "Steven", Image: "img/trainers/emerald/steven.png", Time: "2016-04-13T09:21:00Z", Attempts: 1 },
                    { Group: "Pokemon", Name: "Kecleon", Time: "2016-04-13T23:18:00Z" },
                    { Group: "Rematch Badges", Name: "Feather Badge", Image: "img/badges/rematch/feather.png", Time: "2016-04-14T01:53:00Z", Attempts: 1 },
                    { Group: "Pokemon", Name: "Hoothoot", Time: "2016-04-15T10:30:00Z" },
                    { Group: "Pokemon", Name: "Snubbull", Time: "2016-04-15T10:32:00Z" },
                    { Group: "Pokemon", Name: "Spinarak", Time: "2016-04-15T10:35:00Z" },
                    { Group: "Pokemon", Name: "Mareep", Time: "2016-04-15T10:36:00Z" },
                    { Group: "Pokemon", Name: "Sunkern", Time: "2016-04-15T10:42:00Z" },
                    { Group: "Pokemon", Name: "Wooper", Time: "2016-04-15T10:54:00Z" },
                ],
                Revisit: { Collection: "Season 1", Run: "Emerald" },
                CopyEvents: ["Emerald"],
            },
            {
                RunName: "Crystal Revisit",
                ColorPrimary: "#4f81bd",
                ColorSecondary: "#385d8a",
                Duration: "2016-04-16T21:55:00Z",
                StartDate: "2016-04-15T23:02:00Z",
                HostName: "AJDNNW",
                HostImage: "img/hosts/ajdnnw.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Johto",
                //AdditionalRegions: [{ Name: "Kanto", Time: "10d 0h 56m" }],
                Events: [
                    { Group: "Pokemon", Name: "Spinarak", Time: "2016-04-15T23:24:00Z" },
                    { Group: "Pokemon", Name: "Gastly", Time: "2016-04-16T00:18:00Z" },
                    { Group: "Past Hosts", Name: "RED", Image: "img/hosts/red.png", Time: "2016-04-16T04:37:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "Will", Image: "img/trainers/crystal/will.png", Time: "2016-04-16T05:47:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "Koga", Image: "img/trainers/crystal/koga.png", Time: "2016-04-16T05:53:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "Bruno", Image: "img/trainers/crystal/bruno.png", Time: "2016-04-16T06:01:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "Karen", Image: "img/trainers/crystal/karen.png", Time: "2016-04-16T06:15:00Z", Attempts: 1 },
                    { Group: "Champions", Name: "Lance", Image: "img/trainers/crystal/lance.png", Time: "2016-04-16T06:25:00Z", Attempts: 1 },
                    { Group: "Pokemon", Name: "Rattata", Time: "2016-04-16T06:50:00Z" },
                    { Group: "Pokemon", Name: "Krabby", Time: "2016-04-16T13:09:00Z" },
                    { Group: "Pokemon", Name: "Unown", Time: "2016-04-16T14:37:00Z" },
                    { Group: "Pokemon", Name: "Paras", Time: "2016-04-16T18:46:00Z" },
                    { Group: "Pokemon", Name: "Rhyhorn", Time: "2016-04-16T18:57:00Z" },
                    { Group: "Pokemon", Name: "NidoranF", Time: "2016-04-16T19:19:00Z" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #3", Time: "2016-04-16T06:27:00Z", IDNo: "47901", Attempts: 1, Party: [
                            { Pokemon: "Steelix", Nickname: "AAJRR RRR", Level: 77, Gender: "Male", Number: 208, IDNo: "47901" },
                            { Pokemon: "Dragonite", Nickname: "KT", Level: 63, Gender: "Female", Number: 149, IDNo: "47901" },
                            { Pokemon: "Espeon", Nickname: "AAAS RJ-I", Level: 55, Gender: "Male", Number: 196, IDNo: "47901" },
                            { Pokemon: "Feraligatr", Nickname: "AAAAAtttta", Level: 85, Gender: "Male", Number: 160, IDNo: "47901" },
                            { Pokemon: "Pidgeot", Nickname: "BBBBBD", Level: 64, Gender: "Male", Number: 18, IDNo: "47901" },
                            { Pokemon: "Raticate", Nickname: "A", Level: 39, Gender: "Male", Number: 20, IDNo: "47901" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                ],
                Revisit: { Collection: "Season 1", Run: "Crystal" },
                CopyEvents: ["Crystal"],
            },
            {
                RunName: "Red Revisit",
                ColorPrimary: "#c0504d",
                ColorSecondary: "#8c3836",
                Duration: "2016-04-17T23:00:00Z",
                StartDate: "2016-04-16T23:35:00Z",
                HostName: "RED",
                HostImage: "img/hosts/red.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Kanto",
                Events: [
                    { Group: "Pokemon", Name: "Tentacool", Time: "2016-04-17T01:16:00Z" },
                    { Group: "Pokemon", Name: "MissingNo.", Time: "2016-04-17T04:37:00Z", Image: "img/missingno.png" },
                    { Group: "Pokemon", Name: "Slowbro", Time: "2016-04-17T16:12:00Z", Class: "flip" },
                    { Group: "Pokemon", Name: "Snorlax", Time: "2016-04-17T16:31:00Z" },
                    { Group: "Pokemon", Name: "Articuno", Time: "2016-04-17T20:20:00Z" },
                    { Group: "Pokemon", Name: "Onix", Time: "2016-04-17T21:36:00Z" },
                ],
                Revisit: { Collection: "Season 1", Run: "Red" },
                CopyEvents: ["Red"],
            },
            {
                RunName: "Vietnamese Crystal Revisit",
                StartDate: "2016-06-15T21:17:30Z",
                ColorPrimary: "#77b2ff",
                ColorSecondary: "#416fcc",
                Duration: "2016-06-16T20:00:00Z",
                HostName: "BABA",
                HostImage: "img/hosts/baba.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Johto",
                Events: [
                    { Name: "PEDAL", Time: "2016-06-15T22:01:00Z", Group: "Pokemon", Class: "Caterpie" },
                    { Name: "NUXI", Time: "2016-06-15T22:13:00Z", Group: "Pokemon", Class: "Ledyba" },
                    { Name: "MADAQ", Time: "2016-06-15T22:45:00Z", Group: "Pokemon", Class: "Bellsprout" },
                    { Name: "YUZI", Time: "2016-06-16T02:19:00Z", Group: "Pokemon", Class: "Hoppip" },
                    { Group: "Elite Four", Name: "YISIJI", Image: "img/trainers/crystal/will.png", Time: "2016-06-16T07:36:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "TOD", Image: "img/trainers/crystal/koga.png", Time: "2016-06-16T10:19:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "SIBA", Image: "img/trainers/crystal/bruno.png", Time: "2016-06-16T10:28:00Z", Attempts: 1 },
                    { Group: "Elite Four", Name: "JIALUN", Image: "img/trainers/crystal/karen.png", Time: "2016-06-16T10:41:00Z", Attempts: 1 },
                    { Group: "Champions", Name: "DU", Image: "img/trainers/crystal/lance.png", Time: "2016-06-16T11:51:00Z", Attempts: 2 },
                    { Name: "YED", Time: "2016-06-16T15:46:00Z", Group: "Pokemon", Class: "Slowpoke" },
                    { Name: "LAT", Time: "2016-06-16T16:20:00Z", Group: "Pokemon", Class: "Raticate" },
                    { Name: "YEDEA", Time: "2016-06-16T16:32:00Z", Group: "Pokemon", Class: "Noctowl" },
                    <TPP.HallOfFame>{
                        Group: "Hall of Fame", Name: "Hall of Fame #2", Time: "2016-06-16T11:55:00Z", IDNo: "30818", Party: [
                            { Number: 157, Pokemon: "BAGEP", Class: "Typhlosion", Gender: "Male", Nickname: "BEST", Level: 80, IDNo: "30818" },
                            { Number: 245, Pokemon: "DON", Class: "Suicune", Nickname: "DONG", Level: 46, IDNo: "30818" },
                            { Number: 16, Pokemon: "LAP", Class: "Pidgey", Gender: "Female", Nickname: "EVER", Level: 12, IDNo: "30818" },
                            { Number: 130, Pokemon: "JINDE", Class: "Gyarados", Shiny: true, Gender: "Male", Nickname: "DADA", Level: 31, IDNo: "30818" },
                            { Number: 60, Pokemon: "NILEM", Class: "Poliwag", Nickname: "ORGY", Gender: "Female", Level: 12, IDNo: "30818" },
                            { Number: 175, Pokemon: "DEKE", Class: "Togepi", Nickname: "DEKU", Gender: "Male", Level: 5, IDNo: "30818" },
                        ],
                        Image: "img/ribbons/champion.png"
                    },
                ],
                Revisit: { Collection: "Sidegames", Run: "Vietnamese Crystal" },
                CopyEvents: ["Vietnamese Crystal"],
            },
            {
                RunName: "Telefang Revisit",
                Class: "Telefang",
                StartDate: "2016-10-08T21:37:00Z",
                Duration: "2016-10-09T18:02:00Z",
                ColorPrimary: "#EFFE24",
                ColorSecondary: "#120291",
                HostImage: "img/hosts/other/shigeki.png",
                HostImageSource: "http://telefang-fans.deviantart.com/art/Bek-Shigeki-DS-491919868",
                HostName: "lゲg",
                Region: "E-Monsters World",
                Events: [
                    { Group: "Pokemon", Name: "Mierths", Time: "2016-10-09T00:19:00Z" },
                    { Group: "Bosses", Name: "Stream", Time: "2016-10-09T00:38:00Z", Image: "img/telefang/ogawa.gif", Attempts: 1 },
                    { Group: "Pokemon", Name: "Tlaitlu", Time: "2016-10-09T03:38:00Z" },
                    { Group: "Pokemon", Name: "Chap", Time: "2016-10-09T11:27:00Z" },

                ],
                Revisit: { Collection: "Long Intermissions", Run: "Telefang" },
                CopyEvents: ["Telefang"],
            }
        ]

    },
    {
        Name: "Long Intermissions",
        SingularName: "Long Intermission",
        Scale: TPP.Scale.Days,
        Runs: []
    },
    {
        Name: "Intermissions",
        SingularName: "Intermission",
        Scale: TPP.Scale.Hours,
        Runs: [
            {
                RunName: "Mystery Dungeon: Red Rescue Team",
                ColorPrimary: "#c0504d",
                ColorSecondary: "#8c3836",
                StartDate: "2014-03-19T09:30:41Z",
                Duration: "13m45s",
                HostName: "\u2642k ",
                HostImage: "img/hosts/pmd/eevee.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                Region: "Pokemon World",
                Unfinished: true,
                Events: [
                ]
            },
            {
                RunName: "Mystery Dungeon: Red Rescue Team",
                ColorPrimary: "#bf0300",
                ColorSecondary: "#5b0000",
                StartDate: "2014-04-27T04:14:13Z",
                Duration: "21h41m4s",
                HostName: "a,,AOOOzz",
                HostImage: "img/hosts/pmd/mudkip.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                Unfinished: true,
                Region: "Pokemon World",
                Events: [
                    {
                        Group: "Hosts",
                        Name: "nccccc,\u00A1",
                        Image: "img/hosts/pmd/squirtle.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                        Time: "7h47m9s"
                    },
                    {
                        Group: "Hosts",
                        Name: "aaaaaaaa",
                        Image: "img/hosts/pmd/pikachu.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                        Time: "19h56m58s"
                    }
                ]
            },
            {
                RunName: "Mystery Dungeon: Explorers of the Sky",
                ColorPrimary: "#9bbb59",
                ColorSecondary: "#71893f",
                StartDate: "May 1 2014 12:33 AM GMT",
                Duration: "May 1 2014 3:04 AM GMT",
                HostName: "nncaapCCC\u00C6",
                HostImage: "img/hosts/pmd/pikachu-green.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                Region: "Pokemon World",
                Unfinished: true,
                Events: [
                ]
            },
            {
                RunName: "Mystery Dungeon: Blue Rescue Team",
                ColorPrimary: "#4f81bd",
                ColorSecondary: "#385d8a",
                StartDate: "2014-06-12T08:35:50Z",
                Duration: "2014-06-14T07:21:58Z",
                HostName: "cuboner",
                HostImage: "img/hosts/pmd/cubone.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                Unfinished: true,
                Region: "Pokemon World",
                Events: [
                    {
                        Group: "Hosts",
                        Name: "0",
                        Image: "img/hosts/pmd/machop.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                        Time: "2014-06-14T04:38:58Z"
                    },
                    {
                        Group: "Hosts",
                        Name: "aa",
                        Image: "img/hosts/pmd/bulbasaur.png",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/46muun/the_hosts_of_the_voices_updated_to_ac/",
                        Time: "2014-06-14T05:46:40Z"
                    },
                    {
                        Group: "Bosses",
                        Name: "Skarmory",
                        Time: "2014-06-13T00:35:03Z",
                        Class: "pokesprite"
                    },
                    {
                        Group: "Bosses",
                        Name: "Team Meanies",
                        Time: "2014-06-13T20:41:10Z",
                        Class: "pokesprite Gengar"
                    },
                ]
            },
            {
                RunName: "Conquest",
                StartDate: "Jun 27 2014 10:48 PM GMT",
                ColorPrimary: "goldenrod",
                ColorSecondary: "black",
                Duration: "Jul 2 2014 12:38 AM GMT",
                HostName: "ABnp3a",
                HostImage: "img/hosts/abnp3a.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Ransei",
                Events: [
                    {
                        Name: "Aurora",
                        Group: "Kingdoms",
                        Image: "img/conquest/aurora.png",
                        Time: "2014-06-27T:23:23:22Z"
                    },
                    {
                        Name: "Ignis",
                        Group: "Kingdoms",
                        Image: "img/conquest/ignis.png",
                        Time: "2014-06-28T01:28:00Z"
                    },
                    {
                        Name: "Greenleaf",
                        Group: "Kingdoms",
                        Image: "img/conquest/greenleaf.png",
                        Time: "2014-06-28T23:55:23Z"
                    },
                    {
                        Name: "Fontaine",
                        Group: "Kingdoms",
                        Image: "img/conquest/fontaine.png",
                        Time: "Jun 29 2014 2:22 AM GMT"
                    },
                    {
                        Name: "Pugilis",
                        Group: "Kingdoms",
                        Image: "img/conquest/pugilis.png",
                        Time: "Jun 29 2014 5:43 AM GMT"
                    },
                    {
                        Name: "Violight",
                        Group: "Kingdoms",
                        Image: "img/conquest/violight.png",
                        Time: "Jun 29 2014 11:49 AM GMT"
                    },
                    {
                        Name: "Chrysalia",
                        Group: "Kingdoms",
                        Image: "img/conquest/chrysalia.png",
                        Time: "Jun 29 2014 9:33 AM GMT"
                    },
                    {
                        Name: "Terrera",
                        Group: "Kingdoms",
                        Image: "img/conquest/terrera.png",
                        Time: "Jun 30 2014 6:29 AM GMT"
                    },
                    {
                        Name: "Illusio",
                        Group: "Kingdoms",
                        Image: "img/conquest/illusio.png",
                        Time: "Jun 30 2014 6:29 AM GMT"
                    },
                    {
                        Name: "Cragspur",
                        Group: "Kingdoms",
                        Image: "img/conquest/cragspur.png",
                        Time: "Jun 30 2014 8:45 AM GMT"
                    },
                    {
                        Name: "Viperia",
                        Group: "Kingdoms",
                        Image: "img/conquest/viperia.png",
                        Time: "2014-06-30T20:04:00Z"
                    },
                    {
                        Name: "Yaksha",
                        Group: "Kingdoms",
                        Image: "img/conquest/yaksha.png",
                        Time: "Jul 1 2014 3:36 AM GMT"
                    },
                    {
                        Name: "Avia",
                        Group: "Kingdoms",
                        Image: "img/conquest/avia.png",
                        Time: "Jul 1 2014 5:50 AM GMT"
                    },
                    {
                        Name: "Valora",
                        Group: "Kingdoms",
                        Image: "img/conquest/valora.png",
                        Time: "Jul 1 2014 7:55 AM GMT"
                    },
                    {
                        Name: "Spectra",
                        Group: "Kingdoms",
                        Image: "img/conquest/spectra.png",
                        Time: "Jul 1 2014 9:33 AM GMT"
                    },
                    {
                        Name: "Nixtorm",
                        Group: "Kingdoms",
                        Image: "img/conquest/nixtorm.png",
                        Time: "Jul 1 2014 2:21 PM GMT"
                    },
                    {
                        Name: "Dragnor",
                        Group: "Kingdoms",
                        Image: "img/conquest/dragnor.png",
                        Time: "Jul 1 2014 6:42 PM GMT"
                    },
                    {
                        Name: "Nobunaga",
                        Group: "Champions",
                        Image: "img/conquest/nobunaga.png",
                        Time: "Jul 2 2014 12:38 AM GMT"
                    },
                    //                    { Group: "Pokemon", Name: "Eevee", Time: "2014-06-27T22:52:32Z" },
                    //                    { Group: "Pokemon", Name: "Jigglypuff", Time: "2014-06-27T23:07:18Z" },
                    //                    { Group: "Pokemon", Name: "Charmander", Time: "2014-06-28T02:11:11Z" },
                ]
            },
            {
                RunName: "OR/AS Special Demo",
                ColorPrimary: "#c6223b",
                ColorSecondary: "#242c86",
                StartDate: "2014-10-25T03:00:00Z",
                Duration: "1d",
                HostName: "Orlando",
                HostImage: "img/hosts/orlando.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                Region: "Hoenn",
                GoogleDocLink: "https://sites.google.com/site/twitchplayspokemonstatus/orasdemo",
                Events: [
                    {
                        Name: "Mission 1\nCatch Glalie",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/1/15/Spr_3r_362.png",
                        Time: "Oct 25 2014 3:25 AM GMT"
                    },
                    {
                        Name: "Mission 2\nDefeat Ace Trainers Mary and Lori",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/78/Spr_RS_Cooltrainer_F.png",
                        Time: "Oct 25 2014 3:39 AM GMT"
                    },
                    {
                        Name: "Mission 3\nFind a lost Whismur",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/c/cf/Spr_3r_293.png",
                        Time: "1h11m45s"
                    },
                    {
                        Name: "Mission 4\nFind a Poochyena",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d7/Spr_3r_261.png",
                        Time: "Oct 25 2014 4:21 AM GMT"
                    },
                    {
                        Name: "Mission 5\nDefeat Expert Timothy",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "Oct 25 2014 4:46 AM GMT"
                    },
                    {
                        Name: "Mission 6\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/73/Lass_RSE_OD.png",
                        Time: "Oct 25 2014 4:58 AM GMT"
                    },
                    {
                        Name: "Mission 7\nFind a Skitty",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/9/90/Spr_3r_300.png",
                        Time: "Oct 25 2014 5:31 AM GMT"
                    },
                    {
                        Name: "Mission 8\nFind lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/b/b5/Youngster_RSE_OD.png",
                        Time: "Oct 25 2014 5:42:20 AM GMT"
                    },
                    {
                        Name: "Mission 9\nFind a Poochyena",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d7/Spr_3r_261.png",
                        Time: "Oct 25 2014 6:21 AM GMT"
                    },
                    {
                        Name: "Mission 10\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "Oct 25 2014 7:01 AM GMT"
                    },
                    {
                        Name: "Mission 11\nDefeat Sailors Edmond, Huey and Ernest",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/f/f1/Spr_RS_Sailor.png",
                        Time: "4h25m10s"
                    },
                    {
                        Name: "Mission 12\nFind a Skitty",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/9/90/Spr_3r_300.png",
                        Time: "5h52s"
                    },
                    {
                        Name: "Mission 13\nFind lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/73/Lass_RSE_OD.png",
                        Time: "5h27m"
                    },
                    {
                        Name: "Mission 14\nDefeat Ace Trainers Mary and Lori",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/78/Spr_RS_Cooltrainer_F.png",
                        Time: "6h13m10s"
                    },
                    {
                        Name: "Mission 15\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "7h53m33s"
                    },
                    {
                        Name: "Mission 16\nFind a Shroomish",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/a/ad/Spr_3r_285.png",
                        Time: "8h1m39s"
                    },
                    {
                        Name: "Mission 17\nDefeat Sailors Edmond, Huey and Ernest",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/f/f1/Spr_RS_Sailor.png",
                        Time: "8h26m21s"
                    },
                    {
                        Name: "Mission 18\nFind a lost Whismur",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/c/cf/Spr_3r_293.png",
                        Time: "9h53m10s"
                    },
                    {
                        Name: "Mission 19\nFind a Poochyena",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d7/Spr_3r_261.png",
                        Time: "10h26s"
                    },
                    {
                        Name: "Mission 20\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "Oct 25 2014 2:44 PM GMT"
                    },
                    {
                        Name: "Mission 21\nDefeat Ace Trainers Mary and Lori",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/78/Spr_RS_Cooltrainer_F.png",
                        Time: "Oct 25 2014 2:56 PM GMT"
                    },
                    {
                        Name: "Mission 22\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/b/b5/Youngster_RSE_OD.png",
                        Time: "Oct 25 2014 3:05 PM GMT"
                    },
                    {
                        Name: "Mission 23\nDefeat Ace Trainers Mary, Lori and Jodi",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/78/Spr_RS_Cooltrainer_F.png",
                        Time: "Oct 25 2014 3:24 PM GMT"
                    },
                    {
                        Name: "Mission 24\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/73/Lass_RSE_OD.png",
                        Time: "Oct 25 2014 3:46 PM GMT"
                    },
                    {
                        Name: "Mission 25\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "2014-10-25T19:13:25Z"
                    },
                    {
                        Name: "Mission 26\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/73/Lass_RSE_OD.png",
                        Time: "Oct 25 2014 8:15 PM GMT"
                    },
                    {
                        Name: "Mission 27\nDefeat Campers Larry and Ethan",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/e/e1/Spr_RS_Camper.png",
                        Time: "Oct 25 2014 9:11 PM GMT"
                    },
                    {
                        Name: "Mission 28\nFind a Poochyena",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d7/Spr_3r_261.png",
                        Time: "Oct 25 2014 9:18 PM GMT"
                    },
                    {
                        Name: "Mission 29\nDefeat Campers Larry, Ethan and Shane",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/e/e1/Spr_RS_Camper.png",
                        Time: "Oct 25 2014 10:19 PM GMT"
                    },
                    {
                        Name: "Mission 30\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "Oct 25 2014 10:41 PM GMT"
                    },
                    {
                        Name: "Mission 31\nDefeat Ace Trainers Mary, Lori and Jodi",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/78/Spr_RS_Cooltrainer_F.png",
                        Time: "Oct 25 2014 11:27 PM GMT"
                    },
                    {
                        Name: "Mission 32\nFind a Shroomish",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/a/ad/Spr_3r_285.png",
                        Time: "Oct 25 2014 11:36 PM GMT"
                    },
                    {
                        Name: "Mission 33\nFind a lost Whismur",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/c/cf/Spr_3r_293.png",
                        Time: "21h5m48s"
                    },
                    {
                        Name: "Mission 34\nFind a Skitty",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/9/90/Spr_3r_300.png",
                        Time: "21h14m21s"
                    },
                    {
                        Name: "Mission 35\nDefeat Expert Theodore",
                        Group: "Champions",
                        Image: "http://cdn.bulbagarden.net/upload/d/d0/Spr_RS_Expert_M.png",
                        Time: "22h13m12s"
                    },
                    {
                        Name: "Mission 36\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/7/73/Lass_RSE_OD.png",
                        Time: "22h24m36s"
                    },
                    {
                        Name: "Mission 37\nDefeat Campers Larry, Ethan and Shane",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/e/e1/Spr_RS_Camper.png",
                        Time: "22h51m59s"
                    },
                    {
                        Name: "Mission 38\nFind a lost child",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/b/b5/Youngster_RSE_OD.png",
                        Time: "23h10m35s"
                    },
                    {
                        Name: "Mission 39\nFind a Shroomish",
                        Group: "Missions",
                        Image: "http://cdn.bulbagarden.net/upload/a/ad/Spr_3r_285.png",
                        Time: "23h23m48s"
                    }
                ]
            },
            // {
            //     RunName: "Channel",
            //     ColorPrimary: "#f5c53c",
            //     ColorSecondary: "#0a71dc",
            //     StartDate: "2015-10-11T20:51:39Z",
            //     Duration: "23h10m5s",
            //     HostName: "\u00E7",
            //     HostImage: "https://static-cdn.jtvnw.net/emoticons/v1/57118/3.0",
            //     HostImageSource: "https://twitchemotes.com/emote/57118",
            //     Unfinished: true,
            //     Events: []
            // },
            // {
            //     RunName: "Channel",
            //     ColorPrimary: "#f1bd3f",
            //     ColorSecondary: "#00338d",
            //     StartDate: "2015-12-11T21:59:24.000Z",
            //     Duration: "2015-12-12T00:54:37+00:00",
            //     HostName: ":#&75",
            //     HostImage: "img/pmd/pikachu.png",
            //     HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
            //     Unfinished: true,
            //     Events: []
            // },
            {
                RunName: "Trading Card Game",
                StartDate: "2016-02-12T06:57:40Z",
                ColorPrimary: "#d4d4cc",
                ColorSecondary: "#c31d1d",
                Duration: "2016-02-14T02:17:53Z",
                HostName: "YUGI",
                HostImage: "img/hosts/yugi.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xq7en/meet_yugi/",
                Region: "TCG Island",
                Events: [],
                CopyEvents: ["Trading Card Game"]
            },
            {
                RunName: "Trading Card Game 2: The Invasion of Team GR!", // "Card GB2: Here Comes Team GR!",
                StartDate: "2016-02-14T02:31:00Z",
                ColorPrimary: "#abd6fd",
                ColorSecondary: "#002c94",
                Unfinished: true,
                Duration: "2016-02-14T20:38:30Z",
                HostName: "Mint",
                HostImage: "img/hosts/mint.png",
                HostImageSource: "http://ryuki-stardust.deviantart.com/art/Pokemon-TCG-Mark-and-Mint-160913403",
                Region: "TCG Island, GR Island",
                Events: [
                    // {
                    //     Group: "Badges",
                    //     Name: "Chansey Coin",
                    //     Image: "http://cdn.bulbagarden.net/upload/a/a7/Coin_Chansey_GB2.png",
                    //     Time: "2016-02-14T02:38:00Z"
                    // },
                    {
                        Group: "Badges",
                        Name: "GR Coin",
                        Image: "http://cdn.bulbagarden.net/upload/0/06/Coin_GR_GB2.png",
                        Time: "2016-03-31T20:33:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Grass Coin", //"Oddish Coin",
                        Image: "http://cdn.bulbagarden.net/upload/f/fb/Coin_Oddish_GB2.png",
                        Time: "2016-03-31T09:05:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Fire Coin", //"Charmander Coin",
                        Image: "http://cdn.bulbagarden.net/upload/0/0b/Coin_Charmander_GB2.png",
                        Time: "2016-03-30T05:12:30Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Water Coin", //Starmie Coin
                        Image: "img/tcg/2/starmie.png",
                        Time: "2016-02-14T12:07:20Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Lightning Coin", //"Pikachu Coin",
                        Image: "http://cdn.bulbagarden.net/upload/f/f0/Coin_Pikachu_GB2.png",
                        Time: "2016-03-30T21:32:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Psychic Coin", //"Alakazam Coin",
                        Image: "http://cdn.bulbagarden.net/upload/9/91/Coin_Alakazam_GB2.png",
                        Time: "2016-03-31T15:06:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "Fighting Coin", //Kabuto Coin
                        Image: "img/tcg/2/kabuto.png",
                        Time: "2016-02-14T16:37:15Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Grass Coin", //"Golbat Coin",
                        Image: "http://cdn.bulbagarden.net/upload/9/99/Coin_Golbat_GB2.png",
                        Time: "2016-04-01T11:17:20Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Thunder Coin", //"Magnemite Coin",
                        Image: "http://cdn.bulbagarden.net/upload/8/85/Coin_Magnemite_GB2.png",
                        Time: "2016-04-04T00:50:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Fire Coin", //"Magmar Coin",
                        Image: "http://cdn.bulbagarden.net/upload/c/cb/Coin_Magmar_GB2.png",
                        Time: "2016-04-05T03:13:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Water Coin", //"Psyduck Coin",
                        Image: "http://cdn.bulbagarden.net/upload/c/ce/Coin_Psyduck_GB2.png",
                        Time: "2016-04-04T17:58:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Fighting Coin", //"Machamp Coin",
                        Image: "http://cdn.bulbagarden.net/upload/d/db/Coin_Machamp_GB2.png",
                        Time: "2016-04-05T10:31:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Colorless Coin", //"Snorlax Coin",
                        Image: "http://cdn.bulbagarden.net/upload/3/36/Coin_Snorlax_GB2.png",
                        Time: "2016-04-06T21:36:00Z"
                    },
                    {
                        Group: "Badges",
                        Name: "GR Psychic Coin", //"Mew Coin",
                        Image: "http://cdn.bulbagarden.net/upload/1/1b/Coin_Mew_GB2.png",
                        Time: "2016-04-07T05:31:00Z"
                    },
                    {
                        Group: "Elite Four",
                        Name: "Courtney",
                        Image: "img/tcg/courtney.png",
                        Time: "2016-04-07T12:21:00Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Steve",
                        Image: "img/tcg/steve.png",
                        Time: "2016-04-07T14:30:00Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Jack",
                        Image: "img/tcg/jack.png",
                        Time: "2016-04-07T17:49:00Z",
                        Attempts: 1
                    },
                    {
                        Group: "Elite Four",
                        Name: "Rod",
                        Image: "img/tcg/rod.png",
                        Time: "2016-04-07T20:19:00Z",
                        Attempts: 1
                    },
                    {
                        Group: "Badges",
                        Name: "GR King Coin", //"Togepi Coin",
                        Image: "http://cdn.bulbagarden.net/upload/8/81/Coin_Togepi_GB2.png",
                        Time: "2016-04-08T08:14:00Z",
                    },
                    {
                        Group: "Badges",
                        Name: "Ponyta Coin",
                        Image: "http://cdn.bulbagarden.net/upload/9/90/Coin_Ponyta_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Horsea Coin",
                        Image: "http://cdn.bulbagarden.net/upload/7/79/Coin_Horsea_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Arbok Coin",
                        Image: "http://cdn.bulbagarden.net/upload/6/65/Coin_Arbok_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Jigglypuff Coin",
                        Image: "http://cdn.bulbagarden.net/upload/8/88/Coin_Jigglypuff_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Dugtrio Coin",
                        Image: "http://cdn.bulbagarden.net/upload/6/65/Coin_Dugtrio_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Gengar Coin",
                        Image: "http://cdn.bulbagarden.net/upload/4/45/Coin_Gengar_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Raichu Coin",
                        Image: "http://cdn.bulbagarden.net/upload/2/22/Coin_Raichu_GB2.png",
                        Time: "-1s"
                    },
                    {
                        Group: "Badges",
                        Name: "Lugia Coin",
                        Image: "http://cdn.bulbagarden.net/upload/9/9a/Coin_Lugia_GB2.png",
                        Time: "-1s"
                    },
                ]
            },
            {
                RunName: "Telefang",
                StartDate: "2016-03-16T21:00:00Z",
                Duration: "7d3h21m",
                ColorPrimary: "#EFFE24",
                ColorSecondary: "#120291",
                HostImage: "img/hosts/other/shigeki.png",
                HostImageSource: "http://telefang-fans.deviantart.com/art/Bek-Shigeki-DS-491919868",
                HostName: "lゲg",
                Region: "E-Monsters World",
                ContainsRunsFrom: ["Intermissions", "Short Intermissions"],
                Events: [
                    { Group: "Pokemon", Name: "Kuribute", Time: "0d 0h 41m" },
                    {
                        Group: "Hosts",
                        Name: "lゲg",
                        Time: "0d 1h 7m",
                        Image: "img/hosts/other/shigeki.png",
                        ImageSource: "http://telefang-fans.deviantart.com/art/Bek-Shigeki-DS-491919868",
                    },
                    { Group: "Bosses", Name: "Nejiro", Time: "4h3m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Tabasuko", Time: "4h34m", Image: "img/telefang/tabasco.gif", Attempts: 1 },
                    { Group: "Bosses", Name: "Tabasuko", Time: "8h7m", Image: "img/telefang/tabasco.gif", Attempts: 1 },
                    { Group: "Bosses", Name: "Boundary", Time: "12h12m", Image: "img/telefang/kai.gif", Attempts: 3 },
                    { Group: "Bosses", Name: "Kaotes", Time: "21h47m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Bangupal", Time: "1d6h21m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Octobre", Time: "1d16h36m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Saiope", Time: "1d22h43m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Dipusaks", Time: "4d16h29m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Gipusofi", Time: "5d7h22m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Chap", Time: "5d14h49m", Class: "pokeSprite", Attempts: 2 },
                    { Group: "Bosses", Name: "Boundary", Time: "5d20h52m", Image: "img/telefang/kai.gif", Attempts: 1 },
                    { Group: "Bosses", Name: "Gawerk", Time: "6d23h44m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Bosses", Name: "Sanarba", Image: "img/telefang/sanarba.png", Time: "7d1h29m", Attempts: 2 },
                    { Group: "Bosses", Name: "Domesday", Time: "7d3h20m", Class: "pokeSprite", Attempts: 1 },
                    { Group: "Pokemon", Name: "Kuribute", Time: "1h16m" },
                    { Group: "Pokemon", Name: "Osie", Time: "1h28m" },
                    { Group: "Pokemon", Name: "Kesi", Time: "1h32m" },
                    { Group: "Pokemon", Name: "Manstla", Time: "2h34m" },
                    { Group: "Pokemon", Name: "Kokia", Time: "2h39m" },
                    { Group: "Pokemon", Name: "Nejiro", Time: "4h7m" },
                    { Group: "Pokemon", Name: "Punika", Time: "4h20m" },
                    { Group: "Pokemon", Name: "Netaro", Time: "4h37m" },
                    { Group: "Pokemon", Name: "Gumi", Time: "5h38m" },
                    { Group: "Pokemon", Name: "Rodansa", Time: "6h49m" },
                    { Group: "Pokemon", Name: "Noriwuts", Time: "6h53m" },
                    { Group: "Pokemon", Name: "Rikoris", Time: "7h9m" },
                    { Group: "Pokemon", Name: "Luyigia", Time: "7h27m" },
                    { Group: "Pokemon", Name: "Liliaobe", Time: "10h17m" },
                    { Group: "Pokemon", Name: "Mantea", Time: "10h58m" },
                    { Group: "Pokemon", Name: "Wuikyo", Time: "15h50m" },
                    { Group: "Pokemon", Name: "Kuripute", Time: "16h6m" },
                    { Group: "Pokemon", Name: "Banles", Time: "16h31m" },
                    { Group: "Pokemon", Name: "Liknis", Time: "16h34m" },
                    { Group: "Pokemon", Name: "Bazeria", Time: "19h31m" },
                    { Group: "Pokemon", Name: "Baibu", Time: "19h52m" },
                    { Group: "Pokemon", Name: "Surugem", Time: "21h22m" },
                    { Group: "Pokemon", Name: "Gedejia", Time: "21h36m" },
                    { Group: "Pokemon", Name: "Tampala", Time: "1d3m" },
                    { Group: "Pokemon", Name: "Hiougi", Time: "1d1h28m" },
                    { Group: "Pokemon", Name: "Ranbrage", Time: "1d1h30m" },
                    { Group: "Pokemon", Name: "Bunider", Time: "1d5h57m" },
                    { Group: "Pokemon", Name: "Icecream", Time: "1d6h" },
                    { Group: "Pokemon", Name: "Armory", Time: "1d6h5m" },
                    { Group: "Pokemon", Name: "Wamitera", Time: "1d6h22m" },
                    { Group: "Pokemon", Name: "Bangupal", Time: "1d6h42m" },
                    { Group: "Pokemon", Name: "Ornith", Time: "1d6h57m" },
                    { Group: "Pokemon", Name: "Lily", Time: "1d7h5m" },
                    { Group: "Pokemon", Name: "Nigera", Time: "1d7h18m" },
                    { Group: "Pokemon", Name: "Sherstla", Time: "1d8h25m" },
                    { Group: "Pokemon", Name: "Phanel", Time: "1d8h40m" },
                    { Group: "Pokemon", Name: "Doria", Time: "1d9h9m" },
                    { Group: "Pokemon", Name: "Husukasu", Time: "1d10h24m" },
                    { Group: "Pokemon", Name: "Kaya", Time: "1d10h42m" },
                    { Group: "Pokemon", Name: "Musa", Time: "1d10h50m" },
                    { Group: "Pokemon", Name: "Amaranth", Time: "1d10h56m" },
                    { Group: "Pokemon", Name: "Danver", Time: "1d11h24m" },
                    { Group: "Pokemon", Name: "Banda", Time: "1d12h2m" },
                    { Group: "Pokemon", Name: "Sigeray", Time: "1d12h25m" },
                    { Group: "Pokemon", Name: "Bubaria", Time: "1d12h51m" },
                    { Group: "Pokemon", Name: "Beavermu", Time: "1d14h39m" },
                    { Group: "Pokemon", Name: "Sarae", Time: "1d14h50m" },
                    { Group: "Pokemon", Name: "Goteria", Time: "1d14h57m" },
                    { Group: "Pokemon", Name: "Sumac", Time: "1d15h2m" },
                    { Group: "Pokemon", Name: "Genista", Time: "1d15h14m" },
                    { Group: "Pokemon", Name: "Jiarm", Time: "1d15h20m" },
                    { Group: "Pokemon", Name: "Kuribute", Time: "1d17h27m" },
                    { Group: "Pokemon", Name: "Warata", Time: "1d17h44m" },
                    { Group: "Pokemon", Name: "Bibanam", Time: "2d7m" },
                    { Group: "Pokemon", Name: "Geiwurus", Time: "2d24m" },
                    { Group: "Pokemon", Name: "Medter", Time: "2d30m" },
                    { Group: "Pokemon", Name: "Bubarti", Time: "4d14h17m" },
                    { Group: "Pokemon", Name: "Skirpeal", Time: "4d17h22m" },
                    { Group: "Pokemon", Name: "Kaotes", Time: "4d17h46m" },
                    { Group: "Pokemon", Name: "Obana", Time: "4d18h41m" },
                    { Group: "Pokemon", Name: "Rasen", Time: "4d18h45m" },
                    { Group: "Pokemon", Name: "Bozuaru", Time: "4d19h25m" },
                    { Group: "Pokemon", Name: "Biburnum", Time: "4d19h58m" },
                    { Group: "Pokemon", Name: "Raigarin", Time: "4d20h23m" },
                    { Group: "Pokemon", Name: "Faikke", Time: "5d40m" },
                    { Group: "Pokemon", Name: "Kameran", Time: "5d54m" },
                    { Group: "Pokemon", Name: "Rigoden", Time: "5d1h24m" },
                    { Group: "Pokemon", Name: "Branika", Time: "5d1h27m" },
                    { Group: "Pokemon", Name: "Geron", Time: "5d25m" },
                    { Group: "Pokemon", Name: "Arfages", Time: "5d3h21m" },
                    { Group: "Pokemon", Name: "Kukuma", Time: "5d6h51m" },
                    { Group: "Pokemon", Name: "Larjias", Time: "5d11h33m" },
                    { Group: "Pokemon", Name: "Heriops", Time: "5d12h32m" },
                    { Group: "Pokemon", Name: "Gantsu", Time: "5d13h20m" },
                    { Group: "Pokemon", Name: "Hitodei", Time: "5d13h34m" },
                    { Group: "Pokemon", Name: "Gerlin", Time: "5d15h1m" },
                    { Group: "Pokemon", Name: "Kuriput", Time: "5d17h33m" },
                    { Group: "Pokemon", Name: "Warta", Time: "5d19h20m" },
                    { Group: "Pokemon", Name: "Gadoruk", Time: "5d19h24m" },
                    { Group: "Pokemon", Name: "Tegerka", Time: "5d19h28m" },
                    { Group: "Pokemon", Name: "Babarwur", Time: "5d22h5m" },
                    { Group: "Pokemon", Name: "Dipusaks", Time: "5d23h3m" },
                    { Group: "Pokemon", Name: "Burtamas", Time: "5d20h8m" },
                    { Group: "Pokemon", Name: "Sukori", Time: "5d17h58m" },
                    { Group: "Pokemon", Name: "Waita", Time: "5d20h41m" },
                    { Group: "Pokemon", Name: "Borutama", Time: "6d18h40m" },
                    { Group: "Pokemon", Name: "Anjiosi", Time: "6d22h32m" },
                    { Group: "Pokemon", Name: "Tsurubak", Time: "7d15m" },
                    { Group: "Pokemon", Name: "Chrysant", Time: "7d40m" },
                    { Group: "Pokemon", Name: "Maharus", Time: "7d43m" },
                    { Group: "Pokemon", Name: "Amiboa", Time: "7d45m" },
                    { Group: "Pokemon", Name: "Zea", Time: "1d14h18m" },
                    { Group: "Pokemon", Name: "Ikusora", Time: "5d8h" },
                ]
            },
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
            },
            {
                RunName: "EarthBound",
                ColorPrimary: "#b8583a",
                ColorSecondary: "#ddac30",
                BackgroundImage: "linear-gradient(to bottom, #6a3f78 0%, #e1642f 100%)",
                StartDate: "2016-03-20T03:41:00.000Z",
                Duration: "2016-03-21T10:07:00.000Z",
                Unfinished: true,
                HostName: "AA-•",
                HostImage: "img/hosts/other/ness.png",
                HostImageSource: "https://starmen.net/vote/vote.php?id=20211",
                Region: "Eagleland",
                Events: [
                    {
                        Group: "Bosses",
                        Name: "Frank Fly",
                        Image: "http://vignette2.wikia.nocookie.net/earthbound/images/8/81/EB_Frank.gif/revision/latest?cb=20111121002553",
                        Time: "2016-03-20T18:48:00.000Z",
                    },
                    {
                        Group: "Bosses",
                        Name: "Frankystein MarkII",
                        Image: "http://vignette1.wikia.nocookie.net/earthbound/images/7/79/FrankysteinMarkII.gif/revision/latest?cb=20090221132344",
                        Time: "2016-03-20T20:04:00.000Z",
                        Attempts: 2
                    },
                    {
                        Group: "Bosses",
                        Name: "Titanic Ant",
                        Image: "http://vignette1.wikia.nocookie.net/earthbound/images/9/9f/Titanic_Ant_In-Battle.gif/revision/latest",
                        Time: "2016-03-21T08:37:00.000Z",
                        Attempts: 1
                    }
                ]
            },
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
            },
            {
                RunName: "Animorphs",
                ColorPrimary: "#39bd42",
                ColorSecondary: "#217331",
                StartDate: "2016-03-25T19:08:00Z",
                Duration: "2016-03-25T19:32:30.000Z",
                Unfinished: true,
                HostName: "CASSIE",
                HostImage: "img/hosts/other/cassie.gif",
                Class: "squarehost",
                Region: "Animorphs",
                Events: [
                    { Group: "Pokemon", Name: "Dog", Time: "2016-03-25T19:08:28Z" },
                    { Group: "Pokemon", Name: "Goat", Time: "2016-03-25T19:12:29Z" },
                    { Group: "Pokemon", Name: "Raccoon", Time: "2016-03-25T19:18:22Z" },
                    { Group: "Pokemon", Name: "Mouse", Time: "2016-03-25T19:25:01Z" },
                ]
            },
            {
                RunName: "Robopon",
                StartDate: "2016-03-27T16:50:00Z",
                Duration: "2016-03-28T06:42:00Z",
                Unfinished: true,
                ColorPrimary: "#deab76",
                ColorSecondary: "#a51e36",
                BackgroundImage: 'url("img/background/robopon.gif")',
                HostImage: "img/hosts/other/cody.gif",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                HostName: "AAAA",
                Region: "Porombo Island",
                Events: [
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T16:55:00Z" },
                    {
                        Group: "Hosts",
                        Name: "Cody",
                        Time: "2016-03-27T17:04:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T17:08:00Z" },
                    { Group: "Pokemon", Name: "Robby", Time: "2016-03-27T17:35:00Z" },
                    {
                        Group: "Hosts",
                        Name: "AAAA",
                        Time: "2016-03-27T19:16:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T19:20:00Z" },
                    {
                        Group: "Hosts",
                        Name: "Cody",
                        Time: "2016-03-27T19:32:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T19:37:00Z" },
                    {
                        Group: "Hosts",
                        Name: "Cody",
                        Time: "2016-03-27T19:50:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T19:54:00Z" },
                    {
                        Group: "Hosts",
                        Name: "AAAA",
                        Time: "2016-03-27T20:07:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T20:11:00Z" },
                    {
                        Group: "Hosts",
                        Name: "Cody",
                        Time: "2016-03-27T20:32:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T20:39:00Z" },
                    {
                        Group: "Hosts",
                        Name: "Cody",
                        Time: "2016-03-27T20:46:00Z",
                        Image: "img/hosts/other/cody.gif",
                        ImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/3xj7tq/the_hosts_of_the_voices/",
                    },
                    { Group: "Pokemon", Name: "Sunny", Time: "2016-03-27T20:50:00Z" },
                    { Group: "Pokemon", Name: "Robby", Time: "2016-03-27T23:04:00Z" },
                ]
            },
            {
                RunName: "Harvest Moon GBC",
                StartDate: "2016-03-28T06:42:00Z",
                Duration: "2016-03-28T17:09:00Z",
                Unfinished: true,
                ColorSecondary: "#745117",
                ColorPrimary: "#f3c64a",
                BackgroundImage: 'url("img/background/harvestmoon.gif")',
                HostImage: "img/hosts/other/pete.png",
                HostImageSource: "http://uniyuki.deviantart.com/art/Harvest-Moon-Trainer-Sprites-360794228",
                HostName: "CEEN",
                Region: "Farm",
                Events: []
            },
            {
                RunName: "Harvest Moon GBC 2",
                StartDate: "2016-03-28T17:09:00Z",
                Duration: "2016-03-29T01:12:00Z",
                Unfinished: true,
                ColorSecondary: "#d20b08",
                ColorPrimary: "#f3c64a",
                BackgroundImage: 'url("img/background/harvestmoon.gif")',
                HostImage: "img/hosts/other/pete.png",
                HostImageSource: "http://uniyuki.deviantart.com/art/Harvest-Moon-Trainer-Sprites-360794228",
                HostName: "88」",
                Region: "Farm",
                Events: []
            },
            {
                RunName: "Hamtaro: Ham-Hams Unite!",
                StartDate: "2016-03-29T01:12:00Z",
                Duration: "2016-03-29T21:10:00Z",
                Unfinished: true,
                ColorPrimary: "#e59910",
                ColorSecondary: "#480052",
                HostImage: "img/hosts/other/hamtaro.gif",
                HostImageSource: "http://biggysprites.smackjeeves.com/comics/678645/hamtaro-sprite-sheet-2/",
                HostName: "...6S?",
                Region: "Hamtaro",
                Class: "squarehost",
                Events: [
                    { Group: "Badges", Name: "Bijou", Image: "img/hamhams/bijou.gif", Time: "2016-03-29T05:55:00Z" },
                    { Group: "Badges", Name: "Maxwell", Image: "img/hamhams/maxwell.gif", Time: "2016-03-29T07:51:00Z" },
                    { Group: "Badges", Name: "Oxnard", Image: "img/hamhams/oxnard.gif", Time: "2016-03-29T10:03:00Z" },
                    {
                        Group: "Hosts",
                        Name: "AA,4444",
                        Time: "2016-03-29T11:05:00Z",
                        Image: "img/hosts/other/hamtaro.gif",
                        ImageSource: "http://biggysprites.smackjeeves.com/comics/678645/hamtaro-sprite-sheet-2/",
                    },
                    { Group: "Badges", Name: "Bijou", Image: "img/hamhams/bijou.gif", Time: "2016-03-29T13:35:00Z" },
                    {
                        Group: "Hosts",
                        Name: "PBR2.0",
                        Time: "2016-03-29T16:15:00Z",
                        Image: "img/hosts/other/hamtaro.gif",
                        ImageSource: "http://biggysprites.smackjeeves.com/comics/678645/hamtaro-sprite-sheet-2/",
                    },
                ]
            },
            {
                RunName: "Harvest Moon GBC 3",
                StartDate: "2016-03-29T21:10:00Z",
                Duration: "2016-03-29T22:18:00Z",
                Unfinished: true,
                ColorSecondary: "#3561e6",
                ColorPrimary: "#f3c64a",
                BackgroundImage: 'url("img/background/harvestmoon.gif")',
                HostImage: "img/hosts/other/chelsea.gif",
                HostImageSource: "http://uniyuki.deviantart.com/art/Harvest-Moon-Trainer-Sprites-360794228",
                HostName: "A__",
                Region: "Farm",
                Events: []
            },
            {
                RunName: "Trading Card Game 2: The Invasion of Team GR!", // "Card GB2: Here Comes Team GR!",
                StartDate: "2016-03-29T22:18:00Z",
                ColorPrimary: "#abd6fd",
                ColorSecondary: "#002c94",
                Duration: "2016-04-08T08:55:00Z",
                HostName: "Mint",
                HostImage: "img/hosts/mint.png",
                HostImageSource: "http://ryuki-stardust.deviantart.com/art/Pokemon-TCG-Mark-and-Mint-160913403",
                Region: "TCG Island",//,"GR Island",
                Events: [],
                ContainsRunsFrom: ["Intermissions", "Short Intermissions", "Long Intermissions"],
                CopyEvents: ["Trading Card Game 2: The Invasion of Team GR!"]
            },
            {
                RunName: "Anniversary Crystal: OLDEN Edition",
                StartDate: "2016-04-01T20:16:00Z",
                Duration: "2016-04-03T18:50:00Z",
                ColorPrimary: "#008bff",
                ColorSecondary: "#0021b4",
                HostImage: "img/hosts/qjv[.png",
                HostImageSource: "https://www.reddit.com/r/twitchplayspokemon/comments/4e7ehd/jamie_of_bracket_queen_of_april_fools/",
                HostName: "QJv[",
                Region: "Kanto",
                Events: [
                    { Group: "Badges", Image: "img/badges/boulder.png", Name: "Boulder Badge", Time: "2016-04-02T12:35:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Charmander", Time: "2016-04-01T20:28:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Pikachu", Time: "2016-04-01T21:48:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Pidgey", Time: "2016-04-01T22:24:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Cubone", Time: "2016-04-01T22:29:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Grimer", Time: "2016-04-02T07:13:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Caterpie", Time: "2016-04-02T07:20:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Charmeleon", Time: "2016-04-02T13:14:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Metapod", Time: "2016-04-02T21:59:00Z" },
                    { Group: "Badges", Image: "img/badges/cascade.png", Name: "Cascade Badge", Time: "2016-04-03T11:35:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Oddish", Time: "2016-04-03T11:56:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Meganium", Time: "2016-04-03T13:21:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Feraligatr", Time: "2016-04-03T13:49:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Sneasel", Time: "2016-04-03T14:20:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Misdreavus", Time: "2016-04-03T14:23:00Z" },
                    { Group: "Pokemon", Name: "OLDEN", Class: "Poliwrath", Time: "2016-04-03T14:30:00Z" },
                ]
            },
            {
                RunName: "Tetris DX",
                StartDate: "2016-04-04T06:10:00Z",
                ColorPrimary: "#f7f7f7",
                ColorSecondary: "#020098",
                BackgroundImage: 'url("img/background/tetris.gif")',
                Unfinished: true,
                Duration: "2016-04-04T06:29:00Z",
                HostName: "AAA",
                HostImage: "img/hosts/other/tetris.gif",
                Events: [],
            },
            {
                RunName: "Scooby-Doo! Classic Creep Capers",
                StartDate: "2016-04-04T06:29:00Z",
                ColorPrimary: "#6d008f",
                ColorSecondary: "#e6720b",
                Unfinished: true,
                Duration: "2016-04-04T12:37:00Z",
                HostName: "Mystery Inc.",
                HostImage: "img/hosts/other/scoob.gif",
                HostImageSource: "https://scratch.mit.edu/projects/96266342/",
                Events: [],
            },
            {
                RunName: "Wario Land II",
                StartDate: "2016-04-08T08:55:00Z",
                ColorPrimary: "#ed6831",
                ColorSecondary: "#601b17",
                Unfinished: true,
                Duration: "2016-04-08T09:25:00Z",
                HostName: "Wario",
                HostImage: "http://www.mariowiki.com/images/4/41/WLIIWarioSprite.png",
                HostImageSource: "http://www.mariowiki.com/Wario_Land_II",
                Class: "squarehost",
                Events: [],
            },
            {
                RunName: "Fire Emblem: The Sacred Stones",
                StartDate: "2016-04-08T09:26:00Z",
                ColorPrimary: "#e6d746",
                ColorSecondary: "#43050a",
                BackgroundImage: "linear-gradient(to bottom, rgba(230,215,70,1) 20%,rgba(251,251,215,1) 45%,rgba(251,251,215,1) 55%,rgba(230,215,70,1) 80%)",
                Unfinished: true,
                Duration: "2016-04-08T22:05:00Z",
                HostName: "Eirika",
                HostImage: "http://vignette1.wikia.nocookie.net/fireemblem/images/b/b0/Eirikaingame.gif/revision/latest?cb=20090813125046",
                HostImageSource: "http://fireemblem.wikia.com/wiki/Eirika",
                Class: "squarehost",
                Events: [
                    {
                        Group: "Hosts",
                        Name: "Eirika",
                        Time: "2016-04-08T14:03:00Z",
                        Image: "http://vignette1.wikia.nocookie.net/fireemblem/images/b/b0/Eirikaingame.gif/revision/latest?cb=20090813125046",
                        ImageSource: "http://fireemblem.wikia.com/wiki/Eirika",
                    },
                ],
                ContainsRunsFrom: ["Intermissions", "Short Intermissions", "Long Intermissions"],
            },
            {
                RunName: "Harry Potter and the Sorcerer's Stone",
                StartDate: "2016-04-08T18:07:00Z",
                ColorPrimary: "#F8C808",
                ColorSecondary: "#C80000",
                Unfinished: true,
                Duration: "2016-04-08T20:28:00Z",
                HostName: "Harry Potter",
                HostImage: "http://1.bp.blogspot.com/-vvGvLKIwMHU/Tjc-BMYrBhI/AAAAAAAABlg/a8fCwZttUj0/s1600/Harry%2B2.gif",
                HostImageSource: "http://dollsparablogs.blogspot.com/2015/08/harry-potter.html",
                Class: "squarehost",
                Events: [],
            },
            {
                RunName: "Randomized Fire Emblem: The Sacred Stones",
                StartDate: "2016-04-08T22:05:00Z",
                ColorPrimary: "#e6d746",
                ColorSecondary: "#43050a",
                BackgroundImage: "linear-gradient(to bottom, rgba(230,215,70,1) 20%,rgba(251,251,215,1) 45%,rgba(251,251,215,1) 55%,rgba(230,215,70,1) 80%)",
                Unfinished: true,
                Duration: "2016-04-09T01:24:00Z",
                HostName: "Lute",
                HostImage: "http://vignette1.wikia.nocookie.net/fireemblem/images/0/04/Luteingame.gif/revision/latest?cb=20090813133523",
                HostImageSource: "http://fireemblem.wikia.com/wiki/Lute",
                Class: "squarehost",
                Events: [],
                ContainsRunsFrom: ["Intermissions", "Short Intermissions", "Long Intermissions"],
            },
            {
                RunName: "Randomized Trading Card Game",
                StartDate: "2016-04-09T01:25:00Z",
                ColorPrimary: "#e0e0c0",
                ColorSecondary: "#e00000",
                Duration: "2016-04-09T05:55:00Z",
                Unfinished: true,
                HostName: "66",
                HostImage: "img/hosts/mark.png",
                HostImageSource: "http://ryuki-stardust.deviantart.com/art/Pokemon-TCG-Mark-and-Mint-160913403",
                Region: "TCG Island",
                Events: []
            },
            {
                RunName: "Hamtaro: Ham-Hams Unite!",
                StartDate: "2016-04-09T06:15:00Z",
                Duration: "2016-04-11T00:48:00Z",
                ColorPrimary: "#e59910",
                ColorSecondary: "#480052",
                HostImage: "img/hosts/other/hamtaro.gif",
                HostImageSource: "http://biggysprites.smackjeeves.com/comics/678645/hamtaro-sprite-sheet-2/",
                HostName: "98866IQ",
                Region: "Hamtaro",
                Class: "squarehost",
                Events: [
                    { Group: "Badges", Name: "Bijou", Image: "img/hamhams/bijou.gif", Time: "2016-04-09T08:53:00Z" },
                    { Group: "Badges", Name: "Cappy", Image: "img/hamhams/cappy.gif", Time: "2016-04-11T00:40:00Z" },
                    { Group: "Badges", Name: "Howdy", Image: "img/hamhams/howdy.gif", Time: "2016-04-10T14:44:00Z" },
                    { Group: "Badges", Name: "Dexter", Image: "img/hamhams/dexter.gif", Time: "2016-04-10T14:44:00Z" },
                    { Group: "Badges", Name: "Jingle", Image: "img/hamhams/jingle.gif", Time: "2016-04-10T07:24:00Z" },
                    { Group: "Badges", Name: "Maxwell", Image: "img/hamhams/maxwell.gif", Time: "2016-04-09T10:34:00Z" },
                    { Group: "Badges", Name: "Oxnard", Image: "img/hamhams/oxnard.gif", Time: "2016-04-09T11:43:00Z" },
                    { Group: "Badges", Name: "Panda", Image: "img/hamhams/panda.gif", Time: "2016-04-09T19:08:00Z" },
                    { Group: "Badges", Name: "Pashmina", Image: "img/hamhams/pashmina.gif", Time: "2016-04-10T02:04:00Z" },
                    { Group: "Badges", Name: "Penelope", Image: "img/hamhams/penelope.gif", Time: "2016-04-10T08:23:00Z" },
                    { Group: "Badges", Name: "Sandy", Image: "img/hamhams/sandy.gif", Time: "2016-04-10T21:34:00Z" },
                    { Group: "Badges", Name: "Stan", Image: "img/hamhams/stan.gif", Time: "2016-04-10T21:34:00Z" },
                ]
            },
            {
                RunName: "Animal Crossing: Wild World",
                StartDate: "2016-07-29T22:18:47Z",
                ColorPrimary: "forestgreen",
                ColorSecondary: "brown",
                Duration: "2016-07-31T20:00:07Z",
                Unfinished: true,
                HostName: "111",
                HostImage: "https://nookipedia.com/w/images/2/2d/BoyAAA.png",
                HostImageSource: "https://nookipedia.com/wiki/File:BoyAAA.png",
                Region: "Animal Crossing",
                Events: []
            },
            {
                RunName: "Sun/Moon Special Demo",
                ColorSecondary: "#0094FF",
                ColorPrimary: "orange",
                StartDate: "2016-11-18T03:00:00Z",
                Duration: "2016-11-18T21:00:00Z",
                // BackgroundImage: "linear-gradient(to bottom, #0094FF 0%,#fefcff 30%,#fefcff 33%,#eac07a 40%,orange 100%)",
                HostName: "Sun",
                HostImage: "img/hosts/sun.png",
                HostImageSource: "http://drawnamu.deviantart.com/art/Sun-Moon-characters-612994192",
                TPPOrgLink: "http://twitchplayspokemon.org/",
                Region: "Alola",
                Events: [
                    { Group: "Pokemon", Name: "Greninja", Time: "2016-11-18T03:01:00Z" },
                    { Group: "Pokemon", Name: "Pikachu", Time: "2016-11-18T03:33:00Z" },
                    { Group: "Bosses", Name: "Totem Hakamo-o", Class: "pokesprite Hakamo-o", Time: "2016-11-18T04:21:00Z", Attempts: 1 },
                    { Group: "Pokemon", Name: "Pikipek", Time: "2016-11-18T05:17:00Z" },
                    { Group: "Pokemon", Name: "Yungoos", Time: "2016-11-18T05:18:00Z" },
                    { Group: "Pokemon", Name: "Rockruff", Time: "2016-11-18T07:10:00Z" },
                    { Group: "Bosses", Name: "Ace Trainer Sheri", Image: "http://cdn.bulbagarden.net/upload/thumb/a/a4/VSAce_Trainer_F_SM.png/150px-VSAce_Trainer_F_SM.png", Time: "2016-11-18T10:26:00Z", Attempts: 2 },
                ]
            }
        ]
    },
    {
        Name: "Short Intermissions",
        SingularName: "Short Intermission",
        Scale: TPP.Scale.Minutes,
        Runs: []
    }
];
tppData.forEach(c => c.Runs.forEach(r => {
    r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
    if (Duration.parse(r.Duration, r.StartTime).TotalSeconds > ((Date.now() / 1000) - r.StartTime)) {
        r.Duration = new Date().toISOString();
        r.Ongoing = true;
    }
}));
var Intermissions = tppData.filter(c => c.Name == "Intermissions").pop(),
    ShortIntermissions = tppData.filter(c => c.Name == "Short Intermissions").pop(),
    LongIntermissions = tppData.filter(c => c.Name == "Long Intermissions").pop();
ShortIntermissions.Runs = [].concat.apply(ShortIntermissions.Runs, Intermissions.Runs.filter(r => Duration.parse(r.Duration, r.StartTime).TotalHours < 4));
LongIntermissions.Runs = [].concat.apply(LongIntermissions.Runs, Intermissions.Runs.filter(r => Duration.parse(r.Duration, r.StartTime).TotalHours >= 100));
Intermissions.Runs = Intermissions.Runs.filter(r => { var d = Duration.parse(r.Duration, r.StartTime).TotalHours; return d >= 4 && d < 100; });
tppData.forEach(c => c.Runs.forEach(baseRunInfo => {
    if (!baseRunInfo.CopyEvents) return;
    var events: TPP.Event[] = [];
    tppData.forEach(c => c.Runs.filter(r => baseRunInfo != r && baseRunInfo.CopyEvents.indexOf(r.RunName) >= 0).forEach(r => events = events.concat.apply(events, r.Events.map(e => {
        var newE = <TPP.Event>{};
        Object.keys(e).forEach(k => newE[k] = e[k]);
        try {
            newE.Time = new Date((Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime) * 1000).toISOString();
        }
        catch (ex) {
            newE.Time = e.Time;
        }
        return newE;
    }))));
    events.forEach(e => !baseRunInfo.Events.filter(e2 => e2.Name == e.Name && e2.Time == e.Time).length ? baseRunInfo.Events.push(e) : console.log("Skipped event " + e.Name));

}));
