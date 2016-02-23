var tppNg = angular.module('tpp-progress', []), tppData = tppData;
tppNg.controller("credits", function ($scope) {
    $scope.extraCredits = [
        { Name: "TheSwordUser" },
        { Name: "UDie2day" },
        { Name: "AsterJ" },
        { Name: "Rabbeseking" },
        { Name: "Tiesoul" },
        { Name: "valence_d", User: "Persona_Alio" },
        { Name: "ChezMere" },
        { Name: "T-chan" },
        { Name: "yoshord" }
    ];
    $scope.live = tppData.filter(function (c) { return c.Runs.filter(function (r) { return r.Scraper && true; }).length > 0; }).length > 0 ? "Live" : "Most";
});
tppNg.controller('progressCharts', function ($scope, $http) {
    tppData.forEach(function (c) { return c.Runs.forEach(function (r, i) {
        r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
        if (r.Scraper) {
            var scrape = function () { return $http.get("https://crossorigin.me/" + r.Scraper.url).then(function (p) { return scrapeRun(r, p.data); }); };
            scrape();
            r.Duration = "0d";
            setInterval(function () { return scrape(); }, 15 * 60000);
        }
        if (r.CopyEvents) {
            var events = [];
            tppData.forEach(function (c) { return c.Runs.filter(function (u) { return r.CopyEvents.indexOf(u.RunName) >= 0; }).forEach(function (u) { return events = events.concat.apply(events, u.Events); }); });
            events.forEach(function (e) { return !r.Events.filter(function (e2) { return e2.Name == e.Name && e2.Time == e.Time; }).length ? r.Events.push(e) : ""; });
        }
    }); });
    $scope.tppData = tppData.filter(function (c) { return c.Runs.filter(function (r) { return r.StartTime < Date.now() / 1000; }).length > 0; });
    $scope.cleanText = function (dirty) { return dirty.replace(/[^A-Z0-9]/ig, '').toLowerCase(); };
    $scope.duration = function (time, scale, baseTime) {
        if (scale === void 0) { scale = TPP.Scale.Weeks; }
        return Duration.parse(time, baseTime).toString(scale);
    };
    $scope.time = function (time, scale, baseTime) {
        if (scale === void 0) { scale = TPP.Scale.Days; }
        return Duration.parse(time, baseTime).TotalTime(scale);
    };
    $scope.width = function (time, scale, baseTime) {
        if (scale === void 0) { scale = TPP.Scale.Days; }
        return $scope.time(time, scale, baseTime) * $scope.ppd;
    };
    $scope.ppd = 64;
    $scope.concurrentRuns = function (run, scale) {
        if (scale === void 0) { scale = TPP.Scale.Days; }
        if (!run.ContainsRunsFrom)
            return [];
        var baseDuration = Duration.parse(run.Duration), baseEndTime = run.StartTime + baseDuration.TotalSeconds;
        return tppData.filter(function (c) { return run.ContainsRunsFrom.indexOf(c.Name) >= 0; }).map(function (c) { return c.Runs.filter(function (r) { return run.StartTime < r.StartTime && baseEndTime > r.StartTime; }).map(function (r) {
            var runStart = Duration.parse(r.StartDate, run.StartTime), runEnd = Duration.parse(r.Duration, r.StartTime);
            r['Label'] = (c.SingularName || c.Name) + "\n" + r.RunName + "\nStarted: " + runStart.toString(scale) + (r.Ongoing ? "" : "\nEnded: " + runEnd.toString(scale));
            return r;
        }); });
    };
    $scope.steps = function (chart) {
        var longestRun = new Duration(0);
        chart.Runs.filter(function (r) { return r.StartTime < Date.now() / 1000; }).forEach(function (run) {
            var runLength = Duration.parse(run.EndDate || run.Duration, run.StartTime);
            if (longestRun.TotalSeconds < runLength.TotalSeconds)
                longestRun = runLength;
        });
        var steps = longestRun.TotalTime(chart.Scale), stepArr = [];
        for (var i = 0; i <= steps + 1; stepArr.push(i++))
            ;
        return stepArr;
    };
    $scope.makeGrid = function (ppd) {
        if (ppd === void 0) { ppd = $scope.ppd; }
        var bgImageSrc = document.createElement("canvas");
        bgImageSrc.height = 1;
        bgImageSrc.width = ppd / 2;
        var draw = bgImageSrc.getContext("2d");
        draw.strokeStyle = "darkgray";
        draw.moveTo(ppd / 2, -1);
        draw.lineTo(ppd / 2, 2);
        draw.stroke();
        return bgImageSrc.toDataURL();
    };
    $scope.scale = function (s) { return TPP.Scale[s]; };
    $scope.zoomIn = function () { return $scope.ppd *= 2; };
    $scope.zoomOut = function () { return $scope.ppd /= 2; };
});
function scrapeRun(run, page) {
    page = page.replace(/\bsrc\=/gi, "crs=");
    var $lastUpdate = $(page).find('.last-update');
    run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
    var $events = $(page).find(run.Scraper.parts.map(function (p) { return "h3 strong:contains(" + p + ")"; }).join(','));
    if (run.Scraper.runtime && $lastUpdate.is('*')) {
        run.Duration = ($lastUpdate.text().split(':').pop() || "0d").trim();
        if (!Duration.canParse(run.Duration))
            run.Duration = new Date().toISOString();
    }
    var knownEvents = {};
    run.Events.forEach(function (e) { return knownEvents[e.Name + e.Time] = e; });
    $events.each(function (i, group) {
        var $table = $(group).parent().next('.table-pokemon'), groupName = $(group).text();
        $table.find('th').each(function (i, th) {
            var title = $(th).text();
            var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
            var time = $($col[1]).text().trim();
            if (!$col.find('img').is('.greyed-out') && !knownEvents[title + time]) {
                run.Events.push({
                    Group: groupName,
                    Image: ($col.find('img').attr('crs') || '').replace(/^\//, run.Scraper.url + "/"),
                    Name: title,
                    Time: time,
                    Attempts: parseInt($col.find('strong').text() || '0'),
                    New: true
                });
            }
        });
    });
    if (run.Scraper.hostname) {
        run.HostName = $(page).find('td.text-left:contains("Trainer Name")').next('td.text-right').text() || run.HostName;
    }
    if (run.Scraper.pokemon) {
        var pkmn = {};
        run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (e) { return pkmn[e.Name] = e; });
        $(page).find('.history-obtained').each(function () {
            var $element = $(this);
            var $img = $element.find('img');
            if (!$img.is('*')) {
                var title = $element.attr('title').split('(').shift().trim();
            }
            else {
                var title = $img.attr('title') || "";
            }
            var time = $element.text().replace(/[()]/g, '').trim();
            if (!pkmn[title] && Duration.canParse(time))
                pkmn[title] = {
                    Name: title,
                    Time: time,
                    Group: "Pokemon",
                    New: true
                };
        });
        Object.keys(pkmn).forEach(function (mon) { return run.Events.push(pkmn[mon]); });
    }
}
