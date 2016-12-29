/// <reference path="../models/collection.ts" />
/// <reference path="../models/duration.ts" />
var Season1: TPP.Collection = {
    Name: "Season 1",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Season2: TPP.Collection = {
    Name: "Season 2",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Season3: TPP.Collection = {
    Name: "Season 3",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Sidegames: TPP.Collection = {
    Name: "Sidegames",
    SingularName: "Sidegame",
    Scale: TPP.Scale.Weeks,
    Runs: []
};
var Revisits: TPP.Collection = {
    Name: "Revisits",
    SingularName: "Revisit",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var Intermissions: TPP.Collection = {
    Name: "Intermissions",
    SingularName: "Intermission",
    Scale: TPP.Scale.Hours,
    Runs: []
};
var LongIntermissions: TPP.Collection = {
    Name: "Long Intermissions",
    SingularName: "Long Intermission",
    Scale: TPP.Scale.Days,
    Runs: []
}
var ShortIntermissions: TPP.Collection = {
    Name: "Short Intermissions",
    SingularName: "Short Intermission",
    Scale: TPP.Scale.Minutes,
    Runs: []
}
var tppData: TPP.Collection[] = [Season1, Season2, Season3, Sidegames, Revisits, LongIntermissions, Intermissions, ShortIntermissions];

var exports = exports || {};
exports.tppData = tppData;

//post-processing
setTimeout(() => {
    //set StartTime for each run and UnixTime for each event
    tppData.forEach(c => c.Runs.forEach(r => {
        r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
        r.Events.forEach(e => {
            e.UnixTime = TPP.Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime;
            if ((<TPP.HallOfFame>e).FirstAttemptDate) {
                (<TPP.HallOfFame>e).FirstAttemptUnixTime = TPP.Duration.parse((<TPP.HallOfFame>e).FirstAttemptDate, r.StartTime).TotalSeconds + r.StartTime;
            }
        });
        //truncate runs that end in the future
        if (TPP.Duration.parse(r.Duration, r.StartTime).TotalSeconds > ((Date.now() / 1000) - r.StartTime)) {
            r.Duration = new Date().toISOString();
            r.Ongoing = true;
        }
    }));

    //split Intermissions by length
    ShortIntermissions.Runs = [].concat.apply(ShortIntermissions.Runs, Intermissions.Runs.filter(r => TPP.Duration.parse(r.Duration, r.StartTime).TotalHours < 4));
    LongIntermissions.Runs = [].concat.apply(LongIntermissions.Runs, Intermissions.Runs.filter(r => TPP.Duration.parse(r.Duration, r.StartTime).TotalHours >= 100));
    Intermissions.Runs = Intermissions.Runs.filter(r => { var d = TPP.Duration.parse(r.Duration, r.StartTime).TotalHours; return d >= 4 && d < 100; });

    //do event copying
    tppData.forEach(c => c.Runs.forEach(baseRunInfo => {
        if (!baseRunInfo.CopyEvents) return;
        var events: TPP.Event[] = [];
        tppData.forEach(c => c.Runs.filter(r => baseRunInfo != r && baseRunInfo.CopyEvents.indexOf(r.RunName) >= 0).forEach(r => events = events.concat.apply(events, r.Events.map(e => {
            var newE = <TPP.Event>{};
            Object.keys(e).forEach(k => newE[k] = e[k]);
            try {
                newE.Time = new Date((TPP.Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime) * 1000).toISOString();
            }
            catch (ex) {
                newE.Time = e.Time;
            }
            return newE;
        }))));
        events.forEach(e => !baseRunInfo.Events.filter(e2 => e2.Name == e.Name && e2.Time == e.Time).length ? baseRunInfo.Events.push(e) : null);
    }));

    //put runs in order
    tppData.forEach(c => c.Runs = c.Runs.sort((r1, r2) => r1.StartTime - r2.StartTime));
    //put events in order
    tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.sort((e1, e2) => e1.UnixTime - e2.UnixTime)));

}, 0);