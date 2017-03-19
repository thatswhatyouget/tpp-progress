/// <reference path="tests.ts" />
/// <reference path="../pokedex/globalpokedex.ts" />
/// <reference path="../pokedex/dexmerge.ts" />

namespace TPP.Transforms.Pokedex {
    var startTime = new Date(2014, 6, 10, 0, 0, 0).valueOf() / 1000;
    var mockDex = ["MissingNo.", "Mew", "Pikachu", "Butterfree", "Jirachi", "Entei", "Mimikyu", "Marill", "Azumarill"];
    var mockRegionalDex = [-1, 2, 7, 8, 6, "Phancero"];
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
            { Group: "Pokemon", Name: "MissingNo.", Time: "6d" },
            { Group: "Pokemon", Name: "Dunsparce", Time: "1d5m" },
            <HallOfFame>{
                Time: "5d2h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test3", Level: 100 },
                ],
                Image: "First Ribbon"
            },
            <HallOfFame>{
                Time: "6d4h",
                Party: [
                    { Pokemon: "Azumarill", Nickname: "Test4", Level: 100 },
                    { Pokemon: "Entei", Nickname: "Test6", PreviousNick: "Test3", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test2", Level: 100 },
                    { Pokemon: "Mimikyu", Nickname: "Test3", Level: 100 },
                ],
                Image: "Second Ribbon"
            }
        ]
    }
    var mockPrequel: Run = {
        ColorPrimary: "blue",
        ColorSecondary: "yellow",
        RunName: "Test2",
        HostName: "Tester",
        Duration: "2d",
        StartTime: startTime - 500,
        Events: [
            { Group: "Pokemon", Name: "Mew", Time: "1d" },
            { Group: "Pokemon", Name: "Azumarill", Time: "1d2m" }
        ]
    };
    var mockRevisit: Run = {
        ColorPrimary: "white",
        ColorSecondary: "black",
        RunName: "Test Again",
        HostName: "TestR",
        Duration: "1d",
        StartTime: startTime + 2500,
        Events: [
            { Group: "Pokemon", Name: "Azumarill", Time: "1d" },
            { Group: "Pokemon", Name: "Mew", Time: "1d6h" }
        ],
        Revisit: { Collection: "Testing", Run: "Test" }
    }
    var mockCollection: Collection = {
        Name: "Testing",
        Scale: Scale.Minutes,
        Runs: [mockRun, mockPrequel, mockRevisit]
    };

    var runSummary = new RunSummary(mockRun, mockDex);
    var collectionSummary = new CollectionSummary([mockCollection], mockDex);

    describe("Pokedex.RunSummary", () => {
        it("Should count Azumarill as being owned on 2014/6/11 00:00:00", () => assert.equal(runSummary.OwnedDict["Azumarill"], startTime + (24 * 60 * 60)));
        it("Should count Marill as being owned on 2014/6/10 00:01:00 ", () => assert.equal(runSummary.OwnedDict["Marill"], startTime + 60));
        it("Should count Entei as being owned on 2014/6/10 00:04:00 ", () => assert.equal(runSummary.OwnedDict["Entei"], startTime + (4 * 60)));
        it("Should not count Mew as owned", () => assert.equal(runSummary.OwnedDict["Mew"], false));
        it("Should not know about Dunsparce", () => assert.equal(runSummary.OwnedDict["Dunsparce"], undefined));
        it("Should have 6 Pokémon in Hall of Fame", () => assert.equal(runSummary.HallOfFame.length, 6));
        it("Should be the second run in CollectionSummary", () => assert.equal(runSummary.Run == collectionSummary.Summary[1].Run, true));
    });

    describe("Pokedex.CollectionSummary", () => {
        it("Should have 3 run summaries", () => assert.equal(collectionSummary.Summary.length, 3));
        it("Should have 4 unique Hall of Fame entries", () => assert.equal(collectionSummary.HallOfFame.length, 4));
    });

    var azuEntry = new DexEntry("Azumarill", 184, collectionSummary);
    var mewEntry = new DexEntry("Mew", 151, collectionSummary);
    var dugEntry = new DexEntry("Dugtrio", 51, collectionSummary);

    describe("Pokedex.DexEntry", () => {
        it("Azumarill should be Owned", () => assert.equal(azuEntry.IsOwned, true));
        it("Azumarill should be owned by 2 hosts", () => assert.equal(azuEntry.Owners.length, 2));
        it("Azumarill should have a single Hall of Fame ribbon", () => assert.equal(azuEntry.HallOfFame.length, 1));
        it("Mew should be owned by 2 hosts", () => assert.equal(mewEntry.Owners.length, 2));
        it("Dugtrio should not be Owned", () => assert.equal(dugEntry.IsOwned, false));
    });

    var mergedRegional = DexMerge(mockRegionalDex, mockDex);

    describe("Pokedex.DexMerge", () => {
        it("Checking merged Dex", () => assert.deepEqual(mergedRegional, [undefined, "Pikachu", "Marill", "Azumarill", "Mimikyu", "Phancero"]));
        it("Marill and Azumarill should not be in clipped dex.", () => assert.equal(ClipNationalDex(6, mockDex).pop(), "Mimikyu"));
        it("Checking merged clipped Dex", () => assert.deepEqual(DexMerge(mockRegionalDex, ClipNationalDex(6, mockDex)), [undefined, "Pikachu", undefined, undefined, "Mimikyu", "Phancero"]));
    });

    var dex = new GlobalDex(collectionSummary, mockDex);
    var regionalDex = new GlobalDex(collectionSummary, mergedRegional);

    describe("Pokedex.GlobalDex (National)", () => {
        it("Owned count should be 6.", () => assert.equal(dex.TotalOwned, 6));
        it("Total count should be 8.", () => assert.equal(dex.TotalInDex, 8));
        it("MissingNo. should be Owned.", () => {
            dex.SortDex();
            assert.equal(dex.Entries[0].IsOwned, true);
        });

        describe("Sorting", () => {
            it("Marill should be first with First Owned sorting.", () => {
                dex.SortDex(TPP.Pokedex.DexSorting["First Owned"]);
                assert.equal(dex.Entries[0].Pokemon, "Marill");
            });
            it("Marill should still be #7.", () => {
                dex.SortDex(TPP.Pokedex.DexSorting["First Owned"]);
                assert.equal(dex.Entries[0].Number, 7);
            });
            it("MissingNo. should be first with default numeric sorting.", () => {
                dex.SortDex();
                assert.equal(dex.Entries[0].Pokemon, "MissingNo.");
            });
            it("Azumarill should be first with alphabetical sorting.", () => {
                dex.SortDex(TPP.Pokedex.DexSorting.Alphabetical);
                assert.equal(dex.Entries[0].Pokemon, "Azumarill");
            });
        });

        describe("Filtering", () => {
            it("Should only get Owned Dex entries.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                dex.Entries.shift(); //get rid of MissingNo
                assert.equal(dex.Owned.length, dex.TotalOwned);
            });
            it("Should only get Unowned Dex entries.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                assert.equal(dex.Unowned.length, dex.TotalInDex - dex.TotalOwned);
            });
            it("Should only contain Owned Dex entries.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                dex.FilterDexToOwned();
                assert.equal(dex.TotalInDex, dex.TotalOwned);
            });
            it("Should only contain Unowned Dex entries.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                dex.FilterDexToUnowned();
                assert.equal(dex.TotalOwned, 0);
            });
            it("Should only own Dex entries that are owned by specified runs.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                var total = dex.TotalInDex;
                dex.FilterOwnedInDexToRuns(["Test2", mockRevisit]);
                assert.equal(dex.TotalOwned, 2, "Filter to Mew and Azumarill")
                assert.equal(dex.TotalInDex, total, "Still have complete dex");
            });
            it("Should only contain Dex entries for specified Pokémon.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                dex.FilterDexPokemon(["Marill", "Azumarill"]);
                assert.equal(dex.TotalInDex, 2);
            });
            it("Should only contain Dex entries for Pokémon in the Hall of Fame.", () => {
                var dex = new GlobalDex(collectionSummary, mockDex);
                dex.FilterDexToHallOfFame();
                assert.equal(dex.TotalInDex, 3);
            });
            describe("GlitchMon Filter", ()=> {
                it("Should not remove MissingNo.", () => {
                    var dex = new GlobalDex(collectionSummary, mockDex);
                    dex.FilterUnownedGlitchMon();
                    assert.notEqual(dex.Entries.length, dex.TotalInDex);
                });
                it("Should remove MissingNo.", () => {
                    var dex = new GlobalDex(collectionSummary, mockDex);
                    dex.Entries[0].Owners = [];
                    dex.FilterUnownedGlitchMon();
                    assert.equal(dex.Entries.length, dex.TotalInDex);
                });
                it("Should always remove MissingNo.", () => {
                    var dex = new GlobalDex(collectionSummary, mockDex);
                    dex.FilterGlitchMon();
                    assert.equal(dex.Entries.length, dex.TotalInDex);
                });
            });
        });
    });

    describe("Pokedex.GlobalDex (Regional)", () => {
        it("Should not contain null Pokemon", () => assert.equal(regionalDex.Entries.filter(e => !e.Pokemon).length, 0));
        it("Pikachu should be #1.", () => assert.equal(regionalDex.Entries[0].Number, 1));
        it("Dex Total should be 5.", () => assert.equal(regionalDex.TotalInDex, 5));
        it("Owned count should be 4.", () => assert.equal(regionalDex.TotalOwned, 4));
    });
}