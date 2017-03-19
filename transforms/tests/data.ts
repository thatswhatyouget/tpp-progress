/// <reference path="tests.ts" />
/// <reference path="../data/filter/futureruns.ts" />
/// <reference path="../data/filter/nowifi.ts" />
/// <reference path="../data/filter/search.ts" />
/// <reference path="../data/filter/onlyrun.ts" />
/// <reference path="../data/processing/ongoing.ts" />
/// <reference path="../data/processing/catch-report.ts" />


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

            describe("No Wifi Trade Pokemon", () => {
                var noWifiRun = NoWifiTradePokemon(Clone(mockOngoingRun));
                it("Should remove WifiTrade Pokemon", () => {
                    assert.equal(mockOngoingRun.Events.filter(e=>e.Class=="WifiTrade").length, 1, "One WifiTrade");
                    assert.equal(noWifiRun.Events.filter(e=>e.Class=="WifiTrade").length, 0, "No WifiTrade");
                });
            });

            describe("Remove Empty Collections", () => {
                var data:Collection[]=[{
                    Scale: Scale.Minutes,
                    Runs: [mockOngoingRun, mockFutureRun],
                    Name: "One Collection"
                },
                {
                    Scale: Scale.Minutes,
                    Runs: [],
                    Name: "Empty Collection"
                }];
                it("Should remove empty collections.", () => assert.equal(RemoveEmpty(data).length, 1));
            });

            describe("Searching",()=> {
                var mockDifferentlyNamedRun = Clone(mockOngoingRun);
                mockDifferentlyNamedRun.RunName = "Collection Hello";
                var data:Collection[]=[
                {
                    Scale: Scale.Minutes,
                    Runs: [mockOldRun],
                    Name: "Collection Two"
                },
                {
                    Scale: Scale.Minutes,
                    Runs: [mockDifferentlyNamedRun, mockFutureRun],
                    Name: "Collection One"
                }];
                it("Should find Collection Two", () => assert.equal(CollectionSearch(data,"Two")[0].Name,"Collection Two"));
                it("Should find Hello's collection", () => assert.equal(RunSearch(data,"He")[0].Name,"Collection One"));
                it("Should find Hello", () => assert.equal(RunSearch(data,"he")[0].Runs[0].RunName,"Collection Hello"));
                it("Should also find Hello", ()=>assert.equal(Search(data,"collection")[0].Runs[0].RunName,"Collection Hello"));
                it("Should find two collections with one run each",()=>{
                    var result = Search(data,"test");
                    assert.equal(result.length,2);
                    assert.equal(result[0].Runs[0].RunName, mockOldRun.RunName);
                    assert.equal(result[1].Runs[0].RunName, mockFutureRun.RunName);
                });
            });

            describe("Get Only Run", ()=> {
                var dataSingle:Collection[]=[{
                    Scale: Scale.Minutes,
                    Runs: [mockOngoingRun],
                    Name: "One Collection"
                },
                {
                    Scale: Scale.Minutes,
                    Runs: [],
                    Name: "Empty Collection"
                }];
                var dataDoubleCollection:Collection[]=[{
                    Scale: Scale.Minutes,
                    Runs: [mockOngoingRun],
                    Name: "One Collection"
                },
                {
                    Scale: Scale.Minutes,
                    Runs: [mockFutureRun],
                    Name: "Empty Collection"
                }];
                var dataDoubleRun:Collection[]=[{
                    Scale: Scale.Minutes,
                    Runs: [mockOngoingRun, mockFutureRun],
                    Name: "One Collection"
                }];
                it("Should find only one run", ()=> assert.equal(GetOnlyRun(dataSingle).RunName,mockOngoingRun.RunName));
                it("Should not find only one run because both collections have one", ()=> assert.equal(GetOnlyRun(dataDoubleCollection),null));
                it("Should not find only one run because one collection has two", ()=> assert.equal(GetOnlyRun(dataDoubleRun),null));
                it("Should not have side effects", ()=> {
                    GetOnlyRun(dataSingle);
                    assert.equal(dataSingle.length, 2, "dataSingle's length should be unchanged");
                });
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