/// <reference path="tests.ts" />
/// <reference path="../data/filter/futureruns.ts" />
/// <reference path="../data/processing/ongoing.ts" />
/// <reference path="../data/processing/catch-report.ts" />


/// <reference path="pokedex.ts" /> //put data tests last lol


namespace TPP.Transforms.Data {
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
            { Group: "Pokemon", Name: "Pikachu", Time: "1d23h", Class: "WifiTrade" },
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

    describe("Data.Clone", () => {
        it("Should clone entire collection.", () => {
            var data: Collection[] = [{
                Scale: Scale.Minutes,
                Runs: [mockOngoingRun, mockFutureRun],
                Name: "Test",
                SingularName: "Test",
            }];
            var cloneData: Collection[] = Clone(data);
            cloneData[0].Name = "Cloned Test";
            cloneData[0].Runs[0].RunName = "Cloned Run";
            cloneData[0].Runs[0].Events[0].Name = "Cloned Event";
            assert.equal(data[0].SingularName, cloneData[0].SingularName);
            assert.equal(data[0].Runs[1].RunName, cloneData[0].Runs[1].RunName);
            assert.equal(data[0].Runs[0].Events[1].Name, cloneData[0].Runs[0].Events[1].Name);
            assert.notEqual(data[0].Name, cloneData[0].Name);
            assert.notEqual(data[0].Runs[0].RunName, cloneData[0].Runs[0].RunName);
            assert.notEqual(data[0].Runs[0].Events[0].Name, cloneData[0].Runs[0].Events[0].Name);

        });
    });

    export namespace Filter {
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

    export namespace Processing {

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

            describe("Catch Report", () => {
                var tppData = CatchReport([{
                    Scale: Scale.Days,
                    Runs: [mockOldRun, mockOngoingRun, mockFutureRun],
                    Name: "Catch Report"
                }], 2);
                var getReport = d => d[0].Runs[0].Events.filter(e => e.Group == "Catch Report").pop();
                it("Should filter down to single run.", () => assert.equal(tppData[0].Runs.length, 1));
                it("Should have added a catch report.", () => assert.equal(getReport(tppData).Group, "Catch Report"));
                it("Should say 3 were caught.", () => assert.equal(getReport(tppData).Name, "3"));
            });

        });
    }


}