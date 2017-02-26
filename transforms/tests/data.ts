/// <reference path="tests.ts" />
/// <reference path="../data/filter/futureruns.ts" />
/// <reference path="../data/processing/ongoing.ts" />

/// <reference path="pokedex.ts" /> //put data tests last lol


module TPP.Transforms.Data {
    var startTime = Date.now() / 1000;
    var mockOngoingRun: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test",
        HostName: "TestR",
        Duration: "1w",
        StartTime: startTime - (24 * 60 * 60),
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
    var mockOldRun: Run = {
        ColorPrimary: "gold",
        ColorSecondary: "green",
        RunName: "Test Old",
        HostName: "Test Daily",
        Duration: "1d",
        StartTime: startTime - (14 * 24 * 60 * 60),
        Events: []
    };

    export module Filter {
        describe("Data.Filter", () => {

            describe("Remove Future Runs", () => {
                var collection: Collection = {
                    Scale: Scale.Minutes,
                    Runs: [mockOngoingRun, mockFutureRun],
                    Name: "Future Test"
                };
                it("Should remove runs that have yet to start.", () => assert.equal(RemoveFutureRuns([collection])[0].Runs.length, 1));
            });

        });
    }

    export module Processing {

        describe("Data.Processing", () => {

            describe("Mark Ongoing Runs", () => {

                var tppData = MarkOngoingRuns([{
                    Scale: Scale.Minutes,
                    Runs: [mockOldRun, mockOngoingRun, mockFutureRun],
                    Name: "Ongoing Test"
                }]);

                it("Should mark ongoing run as ongoing.", () => assert.equal(mockOngoingRun.Ongoing, true));
                it("Should not mark future run as ongoing.", () => assert.equal(mockFutureRun.Ongoing, false));
                it("Should not mark old run as ongoing.", () => assert.equal(mockOldRun.Ongoing, false));
            });

        });
    }


}