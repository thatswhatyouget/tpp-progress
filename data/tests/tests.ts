/// <reference path="../tpp-data.ts" />
/// <reference path="../pokedex/regional.ts" />

var exports = exports || {};

const dexClean = (str: string) => (str || '').toString().replace(/♀/g, 'F').replace(/♂/g, 'M').replace(/\?/g, '-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();


exports.tests = function () {
    const runTotal = tppData.reduce((sum, s) => sum + s.Runs.length, 0);
    console.log(`Checking ${runTotal} runs for invalid events...`);
    tppData.forEach(season =>
        season.Runs.forEach(run => {
            // console.info(run.RunName);
            const dex = (Pokedex.Regional[run.Pokedex || run.Region] || [])
                .concat((run.DexMapping || []))
                .map(p => typeof p == "number" ? Pokedex.PokeList[p] : p)
                .concat(Pokedex.PokeList)
                .filter(p => !!p)
                .map(dexClean);
            run.Events.forEach(event => {
                // console.info(event.Name);
                if (event.Group == "Pokemon" && !dex.includes(dexClean(event.Name || "")) && !dex.includes(dexClean(event.Class || "")))
                    console.warn(`${season.Name} ${run.RunName}: ${event.Group} ${event.Name}${event.Class ? ` (${event.Class})` : ""} does not match any regional or national Pokedex entries.`.replace('\n', ' '));
                if (!!event.Time && !event.UnixTime)
                    console.error(`${season.Name} ${run.RunName}: ${event.Group} ${event.Name}${event.Class ? ` (${event.Class})` : ""} has an invalid Time: "${event.Time}"`.replace('\n', ' '));
            });
        })
    );

    console.log("Done.");
}