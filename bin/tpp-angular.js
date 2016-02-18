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
tppNg.controller('progressCharts', function ($scope) {
    tppData.forEach(function (c) { return c.Runs.forEach(function (r, i) {
        r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0);
        if (r.Scraper) {
            Scrape(r).then(function () { return $scope.$apply(); });
            r.Duration = "0d";
            setInterval(function () { return Scrape(r).then(function () { return $scope.$apply(); }); }, 15 * 60000);
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
