/// <reference path="tests.ts" />
/// <reference path="../data/filter/futureruns.ts" />
/// <reference path="pokedex.ts" /> //put data tests last lol


module TPP.Transforms.Data {
    var startTime = Date.now() / 1000;
    var mockRun: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test",
        HostName: "TestR",
        Duration: "1w",
        StartTime: startTime - (14 * 24 * 60 * 60),
        Events: [
            { Group: "Pokemon", Name: "Marill", Time: "1m" },
            { Group: "Pokemon", Name: "Azumarill", Time: "1d" },
            { Group: "Pokemon", Name: "Pikachu", Time: "2d", Class: "WifiTrade" },
            { Group: "Pokemon", Name: "Mimikyu", Time: "3d" },
        ]
    }
    var mockFutureRun: Run = {
        ColorPrimary: "blue",
        ColorSecondary: "yellow",
        RunName: "Test2",
        HostName: "Tester",
        Duration: "255d",
        StartTime: startTime + 5000,
        Events: []
    };

    export module Filter {
        describe("Data.Filter", () => {

            describe("Remove Future Runs", () => {
                var collection: Collection = {
                    Scale: Scale.Minutes,
                    Runs: [mockRun, mockFutureRun],
                    Name: "Future Test"
                };
                it("Should remove runs that have yet to start.", () => assert.equal(RemoveFutureRuns([collection])[0].Runs.length, 1));
            });

        });
    }


}