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
var Season4: TPP.Collection = {
    Name: "Season 4",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Season5: TPP.Collection = {
    Name: "Season 5",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Season6: TPP.Collection = {
    Name: "Season 6",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Season7: TPP.Collection = {
    Name: "Season 7",
    Scale: TPP.Scale.Days,
    Runs: []
};
var Sidegames: TPP.Collection = {
    Name: "Sidegames",
    SingularName: "Sidegame",
    Scale: TPP.Scale.Weeks,
    Runs: []
};
var QuickSidegames: TPP.Collection = {
    Name: "Quick Sidegames",
    SingularName: "Quick Sidegame",
    Scale: TPP.Scale.Days,
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
var tppData: TPP.Collection[] = [Season1, Season2, Season3, Season4, Season5, Season6, Season7, Sidegames, QuickSidegames, Revisits, LongIntermissions, Intermissions, ShortIntermissions];

var exports = exports || {};
exports.tppData = tppData;

//post-processing
setTimeout(() => {
    //remove runs with blank start dates
    tppData.forEach(c => c.Runs = c.Runs.filter(r => r.StartDate != ""));
    //remove events with blank times   
    tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.filter(e => e.Time != "")));

    //set StartTime/EndTime for each run and UnixTime for each event
    tppData.forEach(c => c.Runs.forEach(r => {
        r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
        r.EndTime = r.EndTime || (TPP.Duration.parse(r.EndDate || r.Duration, r.StartTime).TotalSeconds + r.StartTime);
        r.Events.forEach(e => {
            e.UnixTime = TPP.Duration.parse(e.Time, r.StartTime).TotalSeconds + r.StartTime;
            if ((<TPP.HallOfFame>e).FirstAttemptDate) {
                (<TPP.HallOfFame>e).FirstAttemptUnixTime = TPP.Duration.parse((<TPP.HallOfFame>e).FirstAttemptDate, r.StartTime).TotalSeconds + r.StartTime;
            }
        });
    }));

    //split Sidegames by duration/speed
    QuickSidegames.Runs = [].concat.apply(QuickSidegames.Runs, Sidegames.Runs.filter(r =>
        (TPP.Duration.parse(r.Duration, r.StartTime).TotalSeconds + r.StartTime > (Date.now() / 1000) ?
            ((Date.now() / 1000) - r.StartTime) / 60 / 60 / 24 < 21 :
            TPP.Duration.parse(r.Duration, r.StartTime).TotalDays < 21
        ) &&
        r.Events.filter(e => e.Group != "Pokemon" && TPP.Duration.parse(e.Time, r.StartTime).TotalDays < 1).length > 0
    ));
    Sidegames.Runs = Sidegames.Runs.filter(r => QuickSidegames.Runs.indexOf(r) < 0);

    //split Intermissions by length
    ShortIntermissions.Runs = [].concat.apply(ShortIntermissions.Runs, Intermissions.Runs.filter(r => TPP.Duration.parse(r.Duration, r.StartTime).TotalHours < 3.5));
    LongIntermissions.Runs = [].concat.apply(LongIntermissions.Runs, Intermissions.Runs.filter(r => TPP.Duration.parse(r.Duration, r.StartTime).TotalHours >= 100));
    Intermissions.Runs = Intermissions.Runs.filter(r => ShortIntermissions.Runs.indexOf(r) < 0 && LongIntermissions.Runs.indexOf(r) < 0);

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

    //autonumber unnumbered Hall of Fame/Champion Tournament entries
    tppData.forEach(c => c.Runs.forEach(r => r.Events.filter(e => (<TPP.HallOfFame>e).Party && e.Name.toLowerCase().trim() == "hall of fame").forEach((hof, i, hofArr) => hof.Name += hofArr.length > 1 ? " #" + (i + 1) : "")));
    tppData.forEach(c => c.Runs.forEach(r => r.Events.filter(e => (<TPP.HallOfFame>e).Party && e.Name.toLowerCase().trim() == "champion tournament").forEach((hof, i, hofArr) => hof.Name += hofArr.length > 1 ? " #" + (i + 1) : "")));
    tppData.forEach(c => c.Runs.forEach(r => r.Events.filter(e => (<TPP.HallOfFame>e).Party && e.Name.toLowerCase().trim() == "galarian star tournament").forEach((hof, i, hofArr) => hof.Name += hofArr.length > 1 ? " #" + (i + 1) : "")));

    //filter out empty collections
    tppData = tppData.filter(c => c.Runs.length > 0);

}, 0);