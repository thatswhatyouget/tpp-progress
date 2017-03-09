/// <reference path="../clone.ts" />

namespace TPP.Transforms.Data.Processing {

    function filterPokemon(run: Run, startTime, day = 0, scale = Scale.Days) {
        return run.Events.filter(e => {
            var t = Duration.parse(e.Time, run.StartTime).TotalTime(scale);
            return e.Group == "Pokemon" && e.Name != "Egg" && (!day || t < day) && (t >= startTime);
        });
    }

    export function CatchReport(tppData: Run, day?: number, collection?: Collection): Run;
    export function CatchReport(tppData: Run[], day?: number, collection?: Collection): Run[];
    export function CatchReport(tppData: Collection, day?: number): Collection;
    export function CatchReport(tppData: Collection[], day?: number): Collection[];
    export function CatchReport(tppData, day = 0, collection?: Collection) {
        var mappingFunc = Traversal.RunLevel((r, c) => {
            c = c || collection;
            var scale = c.Scale || Scale.Days;
            var startFrom = Duration.parse((
                r.Events.filter(e => e.Group == "Hosts" && (!day || Duration.parse(e.Time, r.StartTime).TotalDays < day))
                    .sort((e1, e2) => Duration.parse(e1.Time, r.StartTime).TotalSeconds - Duration.parse(e2.Time, r.StartTime).TotalSeconds)
                    .pop() || <Event>{ Group: null, Name: null, Time: null }).Time || "2014-01-01T00:00:00Z",
                r.StartTime).TotalTime(scale);
            var mons = filterPokemon(r, startFrom, day, scale);
            var singleDay = day ? mons.filter(e => Duration.parse(e.Time, r.StartTime).TotalTime(scale) >= day - 1) : mons;
            r["CatchReport"] = "* " + (day ? `On Day ${day}` : "Overall") + `, ${r.HostName} caught **${singleDay.length}** Pokémon: " + ${singleDay.map(m => m.Name).join(", ")}`;
            r.Ongoing = true;
            r.Events.push({
                Group: "Catch Report",
                Name: mons.length.toFixed(0),
                Time: Duration.parse(r.Duration, r.StartTime).toString(),
            });
            return r;
        });
        var filterFunc = Traversal.RunLevel(r => (!r.Revisit || r.CopyEvents) && (!r.Unfinished || r.Ongoing) && r.Events.filter(e => e.Group == "Pokemon").length > 0, true)
        var data = <any>Clone(tppData);
        return <any>mappingFunc(filterFunc(data));
    }

}