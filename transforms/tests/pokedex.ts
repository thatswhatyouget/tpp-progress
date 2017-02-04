/// <reference path="tests.ts" />
/// <reference path="../pokedex.ts" />
module TPP.Transforms {
    var startTime = new Date(2014, 6, 10, 0, 0, 0).valueOf() / 1000;
    var mockDex = ["MissingNo.", "Mew", "Pikachu", "Butterfree", "Jirachi", "Entei", "Mimikyu", "Marill", "Azumarill"];
    var mockRun: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test",
        HostName: "TestR",
        Duration: "1w",
        StartTime: startTime,
        Events: [
            { Group: "Pokemon", Name: "Marill", Time: "1m" },
            { Group: "Pokemon", Name: "Azumarill", Time: "1d" },
            { Group: "Pokemon", Name: "Pikachu", Time: "2d" },
            { Group: "Pokemon", Name: "Mimikyu", Time: "3d" },
            { Group: "Pokemon", Name: "TriHard", Class: "Entei", Time: "4m" },
            { Group: "Pokemon", Name: "Marill", Time: "5d" },
            { Group: "Pokemon", Name: "MissingNo", Time: "6d" },
            { Group: "Pokemon", Name: "Dunsparce", Time: "1d5m" },
            <HallOfFame>{
                Time: "5d2h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test3", Level: 100 },
                ]
            },
            <HallOfFame>{
                Time: "6d4h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test6", PreviousNick: "Test3", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test2", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test3", Level: 100 },
                ]
            }
        ]
    }

    describe("Pokedex Run Summary", () => {
        var summary = new PokedexRunSummary(mockRun, mockDex);
        it("Should count Azumarill as being owned on 2014/6/11 00:00:00", () => assert.equal(summary.OwnedDict["Azumarill"], startTime + (24 * 60 * 60)));
        it("Should count Marill as being owned on 2014/6/10 00:01:00 ", () => assert.equal(summary.OwnedDict["Marill"], startTime + 60));
        it("Should count Entei as being owned on 2014/6/10 00:04:00 ", () => assert.equal(summary.OwnedDict["Entei"], startTime + (4 * 60)));
        it("Should not count Mew as owned", () => assert.equal(summary.OwnedDict["Mew"], false));
        it("Should not know about Dunsparce", () => assert.equal(summary.OwnedDict["Dunsparce"],undefined));
        it("Should have 6 Pokémon in Hall of Fame", () => assert.equal(summary.HallOfFame.length, 6));
    });
}