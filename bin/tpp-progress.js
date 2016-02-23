var fakeQuery = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
var $find = function (elements, selector) { return elements.map(function (e) { return e ? Array.prototype.slice.call(e.querySelectorAll(selector)) : []; }); };
function getLeft(element) {
    return parseInt(element.style.left.replace('px', ''));
}
function getWidth(element) {
    return element.offsetWidth;
}
function findImage(element) {
    return $find([element], "img").pop().pop() || new Image();
}
function marginTop(element) {
    return parseInt((element.style.marginTop || '0').replace('px', '')) || 0;
}
var globalPpd = 64, groups = {};
var vidWait = $.Deferred(), videos = vidWait.promise(), getTwitchVideos = function () {
    var $li = $('.controls .fa-twitch').removeClass('fa-twitch').addClass('fa-pulse fa-spinner').removeAttr('onclick').attr('title', 'Loading...').parent();
    Twitch.GetVideos("twitchplayspokemon").then(vidWait.resolve, vidWait.reject).then(function () { return $li.fadeOut(); });
};
function makeGrid(ppd) {
    var bgImageSrc = document.createElement("canvas");
    bgImageSrc.height = 1;
    bgImageSrc.width = ppd / 2;
    var draw = bgImageSrc.getContext("2d");
    draw.strokeStyle = "darkgray";
    draw.moveTo(ppd / 2, -1);
    draw.lineTo(ppd / 2, 2);
    draw.stroke();
    return bgImageSrc.toDataURL();
}
function createCharts(data) {
    data.forEach(function (c) { return c.Runs.forEach(function (r) { return r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0); }); });
    data.filter(function (c) { return c.Runs.filter(function (r) { return r.StartTime < Date.now() / 1000; }).length > 0; }).forEach(createChart);
    setTimeout(function () { return updatePage(); }, 1);
}
function createChart(data) {
    var chart = document.createElement("div");
    chart.className = "progressChart";
    chart.setAttribute("data-label", data.Name);
    setUniqueId(chart, data.Name);
    chart.setAttribute("data-scale", TPP.Scale[data.Scale]);
    var pageTarget = fakeQuery(".charts")[0] || document.body;
    setTimeout(function () { return pageTarget.appendChild(chart); }, 1);
    var longestRun = new Duration(0);
    data.Runs.filter(function (r) { return r.StartTime < Date.now() / 1000; }).forEach(function (run) {
        var runLength = Duration.parse(run.EndDate || run.Duration, run.StartTime);
        if (longestRun.TotalSeconds < runLength.TotalSeconds)
            longestRun = runLength;
        chart.appendChild(queueRun(run, data.Scale));
    });
    var ruler = document.createElement("div");
    ruler.className = "ruler";
    chart.insertBefore(ruler, chart.firstChild);
    var steps = longestRun.TotalTime(data.Scale);
    for (var i = 0; i <= steps + 1; i++) {
        var stop = document.createElement('div');
        ruler.appendChild(stop);
        stop.className = "stop";
        stop.setAttribute("data-scale", TPP.Scale[data.Scale]);
    }
}
function queueRun(runInfo, scale) {
    if (scale === void 0) { scale = TPP.Scale.Days; }
    var div = document.createElement("div");
    if (runInfo.Scraper)
        Scrape(runInfo).then(function (r) {
            drawRun(r, div, scale);
            setTimeout(function () { return updatePage(); }, 0);
        }, console.error);
    else
        setTimeout(function () { return drawRun(runInfo, div, scale); }, 0);
    return div;
}
function drawRun(runInfo, run, scale, events) {
    if (scale === void 0) { scale = TPP.Scale.Days; }
    if (events === void 0) { events = true; }
    run = run || document.createElement("div");
    run.className = "run";
    if (runInfo.Ongoing)
        run.className += " ongoing";
    var duration = Duration.parse(runInfo.Duration, runInfo.StartTime);
    runInfo.Duration = duration.toString(TPP.Scale.Weeks);
    run.setAttribute("data-duration", runInfo.Duration);
    run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
    run.setAttribute("data-start", runInfo.StartTime.toString());
    run.setAttribute("data-label", runInfo.RunName + ": " + duration.toString(scale));
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    setUniqueId(run, runInfo.RunName);
    if (runInfo.HostImage && runInfo.HostName)
        run.appendChild(drawHost(runInfo, scale));
    if (events) {
        if (runInfo.Scraper)
            setTimeout(function () { return run.setAttribute("data-json", JSON.stringify(runInfo)); }, 10);
        importEvents(runInfo);
        runInfo.Events.filter(function (e) { return Duration.parse(e.Time, runInfo.StartTime).TotalSeconds >= 0; }).sort(function (e1, e2) { return Duration.parse(e1.Time, runInfo.StartTime).TotalSeconds - Duration.parse(e2.Time, runInfo.StartTime).TotalSeconds; }).forEach(function (event) { return run.appendChild(drawEvent(event, runInfo, scale)); });
        runInfo.Events.forEach(function (e) { return delete e.New; });
        drawVideos(runInfo, run, scale);
        setTimeout(function () { return updateRun(runInfo, run, scale); }, 15 * 60000);
    }
    drawConcurrentRuns(runInfo, run, scale);
    $(run).on('click', function (e) {
        if (e.shiftKey) {
            $(this).hide();
            if (!$(this).siblings(".run:visible").is("*"))
                $(this).parent().hide();
        }
    });
}
function updateRun(runInfo, run, scale) {
    if (!(runInfo.Scraper && runInfo.Ongoing))
        return;
    Scrape(runInfo).then(function (r) {
        console.log("Updating " + runInfo.RunName + " to " + runInfo.Duration);
        run.setAttribute("data-duration", runInfo.Duration);
        run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
        run.setAttribute("data-label", runInfo.RunName + ": " + Duration.parse(runInfo.Duration, runInfo.StartTime).toString(scale));
        setTimeout(function () { return run.setAttribute("data-json", JSON.stringify(runInfo)); }, 10);
        runInfo.Events.filter(function (e) { return e.New; }).forEach(function (event) { return run.appendChild(drawEvent(event, runInfo, scale)); });
        updatePage();
        if ($(run).find('.videos a').is('*'))
            drawVideos(runInfo, run, scale, Twitch.GetVideos("twitchplayspokemon", false));
    });
    setTimeout(function () { return updateRun(runInfo, run, scale); }, 15 * 60000);
}
function setUniqueId(element, id) {
    var original = id = id.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    for (var i = 1; document.getElementById(id); id = original + i++)
        ;
    element.setAttribute("id", id);
    element.classList.add(original);
}
function drawHost(runInfo, scale) {
    var host = drawEvent({
        Group: "Hosts",
        Name: runInfo.HostName,
        Image: runInfo.HostImage,
        ImageSource: runInfo.HostImageSource,
        Time: ''
    }, runInfo, scale);
    host.style.left = "0";
    return host;
}
function drawConcurrentRuns(baseRunInfo, runElement, scale) {
    if (!baseRunInfo.ContainsRunsFrom || !baseRunInfo.ContainsRunsFrom.length)
        return;
    var baseDuration = Duration.parse(baseRunInfo.Duration), baseEndTime = baseRunInfo.StartTime + baseDuration.TotalSeconds;
    tppData.filter(function (c) { return baseRunInfo.ContainsRunsFrom.indexOf(c.Name) >= 0; }).map(function (c) { return c.Runs.filter(function (r) { return baseRunInfo.StartTime < r.StartTime && baseEndTime > r.StartTime; }).forEach(function (r) {
        var innerRun = document.createElement("div");
        var runStart = Duration.parse(r.StartDate, baseRunInfo.StartTime), runEnd = Duration.parse(r.Duration, r.StartTime);
        innerRun.setAttribute("data-time", runStart.toString(TPP.Scale.Weeks));
        runElement.appendChild(innerRun);
        drawRun(r, innerRun, scale, false);
        if (runEnd.TotalSeconds + runStart.TotalSeconds > baseDuration.TotalSeconds) {
            runEnd.TotalSeconds = baseDuration.TotalSeconds - runStart.TotalSeconds;
            innerRun.setAttribute("data-duration", runEnd.toString(TPP.Scale.Weeks));
            innerRun.setAttribute("data-endtime", runEnd.toString(TPP.Scale.Weeks));
        }
        runEnd.TotalSeconds += runStart.TotalSeconds;
        innerRun.classList.add("inner" + r.RunName.replace(/[^A-Z0-9]/ig, '').toLowerCase());
        innerRun.setAttribute('data-label', (c.SingularName || c.Name) + "\n" + r.RunName + "\nStarted: " + runStart.toString(scale) + (r.Ongoing ? "" : "\nEnded: " + runEnd.toString(scale)));
    }); });
}
function importEvents(baseRunInfo) {
    if (!baseRunInfo.CopyEvents)
        return;
    var events = [];
    tppData.forEach(function (c) { return c.Runs.filter(function (r) { return baseRunInfo.CopyEvents.indexOf(r.RunName) >= 0; }).forEach(function (r) { return events = events.concat.apply(events, r.Events); }); });
    events.forEach(function (e) { return !baseRunInfo.Events.filter(function (e2) { return e2.Name == e.Name && e2.Time == e.Time; }).length ? baseRunInfo.Events.push(e) : console.log("Skipped event " + e.Name); });
}
function drawEvent(eventInfo, runInfo, scale) {
    delete eventInfo.New;
    var groupName = eventInfo.Group.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    event.classList.add("event");
    if (eventInfo.Class)
        eventInfo.Class.split(' ').forEach(function (c) { return event.classList.add(c.replace(/[^A-Z0-9]/ig, '').toLowerCase()); });
    if (eventInfo.Group.toLowerCase() == "pokemon") {
        event.classList.add("pokesprite");
    }
    if (event.classList.contains("pokesprite")) {
        event.classList.add(eventInfo.Name.replace(/[^A-Z0-9]/ig, '').toLowerCase());
    }
    var imageUrl = eventInfo.Image || "img/missingno.png";
    if (eventInfo.ImageSource) {
        var imgSource = document.createElement("a");
        event.appendChild(imgSource);
        imgSource.appendChild(eventImg);
        imgSource.setAttribute("href", eventInfo.ImageSource);
        imgSource.setAttribute("target", "_blank");
    }
    else
        event.appendChild(eventImg);
    event.classList.add(groupName);
    var time = Duration.parse(eventInfo.Time, runInfo.StartTime);
    var label = eventInfo.Name;
    if (eventInfo.Time) {
        label += "\n" + time.toString(scale);
    }
    if (eventInfo.Estimate)
        label += "\n(estimated)";
    if (eventInfo.Attempts)
        label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
    eventImg.src = imageUrl;
    eventImg.alt = label;
    event.setAttribute('data-label', label);
    event.setAttribute("data-time", time.toString(TPP.Scale.Weeks));
    if (showGroups[groupName] === false)
        event.classList.add('hidden');
    groups[groupName] = eventInfo.Group;
    return event;
}
function applyScale(ppd) {
    globalPpd = ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2)));
    fakeQuery('.progressChart').forEach(function (chart) {
        chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
    });
    $find(fakeQuery(".progressChart .ruler"), ".stop").forEach(function (ruler) { return ruler.forEach(function (stop, i) {
        var offset = parseFloat($(stop).parents('.progressChart').data('offset') || '0');
        stop.style.left = (i + offset) * ppd + "px";
    }); });
    fakeQuery(".progressChart > .run").forEach(function (run) {
        var scale = TPP.Scale[run.parentElement.getAttribute('data-scale')] || TPP.Scale[run.parentElement.parentElement.getAttribute('data-scale')] || 0;
        var durationAttribute = settings["postgame"] ? "data-endtime" : "data-duration", duration = Duration.parse(run.getAttribute(durationAttribute));
        if (run.getAttribute(durationAttribute))
            run.style.width = duration.TotalTime(scale) * ppd + "px";
        var runs = $find([run], ".run").pop(), events = $find([run], ".event").pop().filter(function (e) { return !e.classList.contains('hidden') && e.parentElement == run; }), videos = $find([run], ".videos a").pop();
        [].concat(events).concat(runs).concat(videos).forEach(function (event) {
            if (event.getAttribute('data-time')) {
                var time = Duration.parse(event.getAttribute('data-time'));
                event.style.left = time.TotalTime(scale) * ppd + "px";
                event.style.display = !settings["postgame"] && !$(event).parents('.run').is('.ongoing') && time.TotalSeconds > duration.TotalSeconds ? "none" : "block";
            }
            if (event.getAttribute(durationAttribute))
                event.style.width = Duration.parse(event.getAttribute(durationAttribute)).TotalTime(scale) * ppd + "px";
            var img = findImage(event);
            if (img)
                img.style.marginTop = event.style.marginTop = "0";
        });
        staggerStackedRuns(runs, run.offsetHeight);
        if (settings["explode"]) {
            staggerStackedEvents(events.filter(function (e) { return e.style.display != "none"; }), run.offsetHeight);
        }
        var offset = parseFloat($(run).parents('.progressChart').data('offset') || '0');
        run.style.marginLeft = offset * ppd + "px";
        $(run).find('.hosts').first().css('margin-left', -offset * ppd + "px");
    });
}
function staggerStackedRuns(runs, runHeight) {
    var dir = -((runHeight / 2) - 2);
    runs.forEach(function (r, i) {
        var d = dir *= -1;
        var myStart = Duration.parse(r.getAttribute('data-time')).TotalSeconds, myEnd = myStart + Duration.parse(r.getAttribute('data-duration')).TotalSeconds;
        function pushRun(run) {
            var thisStart = Duration.parse(run.getAttribute('data-time')).TotalSeconds, thisEnd = thisStart + Duration.parse(run.getAttribute('data-duration')).TotalSeconds;
            if ((myStart <= thisStart && myEnd > thisStart) || (myStart < thisEnd && myEnd >= thisEnd)) {
                d > 0 && (run.style.marginTop = d + "px");
                d < 0 && (r.style.marginTop = -d + "px");
                run.style.height = r.style.height = Math.abs(d) + "px";
            }
        }
        if (runs[i - 1])
            pushRun(runs[i - 1]);
        if (runs[i + 1])
            pushRun(runs[i + 1]);
    });
}
function staggerStackedEvents(allEvents, runHeight) {
    var dir = .15;
    [allEvents.filter(function (e) { return e.className.indexOf("pokemon") < 0; }), allEvents.filter(function (e) { return e.className.indexOf("pokemon") >= 0; })].forEach(function (events) {
        var width = function (element, pokeMode) { return pokeMode ? 25 : getWidth(element) || runHeight; };
        events.forEach(function (e, i) {
            var d = dir *= -1;
            if (i == 0)
                return;
            var pokeMode = e.className.indexOf("pokemon") >= 0;
            var myImg = findImage(e);
            var myWidth = width(myImg, pokeMode);
            var myLeft = getLeft(e) - myWidth / 2;
            function pushEvent(event) {
                var thisImg = findImage(event);
                var thisWidth = width(thisImg, pokeMode);
                var thisLeft = getLeft(event) - thisWidth / 2;
                if (thisLeft + thisWidth > myLeft && thisLeft < myLeft + myWidth) {
                    thisImg.style.marginTop = (marginTop(thisImg) - (thisLeft + thisWidth - myLeft) * d) + "px";
                    myImg.style.marginTop = (marginTop(myImg) + (thisLeft + thisWidth - myLeft) * d) + "px";
                }
            }
            if (i > 1 && events[i - 1])
                pushEvent(events[i - 1]);
            if (events[i + 1])
                pushEvent(events[i + 1]);
        });
    });
    findImage(allEvents[0]).style.marginTop = findImage(allEvents[allEvents.length - 1]).style.marginTop = "0";
}
function updatePage(ppd) {
    if (ppd === void 0) { ppd = globalPpd; }
    setTimeout(function () { return applyScale(ppd); }, 0);
    var extant = fakeQuery(".groups input").map(function (i) { return i.id.split('-').pop(); }) || [];
    var groupList = fakeQuery(".groups ul").pop();
    Object.keys(groups).filter(function (g) { return extant.indexOf(g) < 0; }).forEach(function (g) {
        var li = document.createElement("li");
        var input = document.createElement("input");
        var label = document.createElement("label");
        li.appendChild(input);
        li.appendChild(label);
        groupList.appendChild(li);
        input.type = "checkbox";
        label.htmlFor = input.id = "group-" + g;
        input.checked = showGroups[g] !== false;
        label.innerText = groups[g];
        input.onchange = function () { return toggleGroup(input); };
    });
}
function drawVideos(baseRunInfo, runElement, scale, videoCollection) {
    if (videoCollection === void 0) { videoCollection = videos; }
    var vidDiv = $('<div class="videos">').appendTo(runElement);
    videoCollection.then(function (vids) { return Array.prototype.concat.apply(vids, extraVids); })
        .then(function (vids) { return vids.filter(function (vid) { return (vid.StartTime < baseRunInfo.StartTime + new Duration(baseRunInfo.Duration).TotalSeconds) && (vid.EndTime > baseRunInfo.StartTime); }).forEach(function (vid) {
        var time = vid.StartTime - baseRunInfo.StartTime, startOffset = 0, duration = vid.length, vidStart = new Duration(0), vidEnd = new Duration(0), runEnd = baseRunInfo.StartTime + new Duration(baseRunInfo.Duration).TotalSeconds;
        if (vid.StartTime < baseRunInfo.StartTime) {
            time = 0;
            duration -= (startOffset = baseRunInfo.StartTime - vid.StartTime);
        }
        if (vid.EndTime > runEnd && !baseRunInfo.Ongoing)
            duration -= vid.EndTime - runEnd;
        vidStart.TotalSeconds = time;
        vidEnd.TotalSeconds = duration;
        var $video = $(runElement).find('.videos a[href="' + vid.url + '"]');
        if (!$video.is('*')) {
            $video = $("<a target='_blank'>").addClass(vid.source.toLowerCase()).attr('href', vid.url).appendTo(vidDiv).mousemove(function (e) {
                var vidTime = new Duration(0), runTime = new Duration(0), percentage = (Math.abs(e.pageX - $(this).offset().left) / $(this).width()), time = Duration.parse($(this).data('time')).TotalSeconds, duration = Duration.parse($(this).data('duration')).TotalSeconds;
                vidTime.TotalSeconds = (percentage * duration) + startOffset;
                runTime.TotalSeconds = (percentage * duration) + time;
                $(this).attr('href', vid.url + "?t=" + vidTime.toString(TPP.Scale.Hours).replace(/\s/g, ''));
                $(this).find('.playhead').css('left', percentage * $(this).width()).attr('data-label', runTime.toString(scale));
            }).click(function (e) { return e.stopPropagation(); }).append($("<div class='playhead'>"));
        }
        $video.attr('data-time', vidStart.toString()).attr('data-duration', vidEnd.toString());
        $(runElement).addClass("hasVideos");
        if (!$("#group-videos").is('*'))
            $("<li>")
                .append($('<input type="checkbox" id="group-videos" checked>').change(function () { $("div.videos").toggleClass('hidden', $(this).val()); }))
                .append($('<label for="group-videos">').text("Videos"))
                .appendTo($("li.groups ul"));
    }); }).then(function () { return updatePage(); });
}
var zoomIn = function () { return applyScale(globalPpd * 2); };
var zoomOut = function () { return applyScale(globalPpd / 2); };
var settings = JSON.parse(localStorage.getItem("settings") || '{"explode":true}');
var showGroups = JSON.parse(localStorage.getItem("showGroups") || "{}");
window.addEventListener("load", function () {
    fakeQuery('.settings input').forEach(function (element) { return element.checked = settings[element.id]; });
    fakeQuery('.groups input').forEach(function (element) { return element.checked = showGroups[element.id.split('-').pop()] !== false; });
    updatePage();
});
function toggleSetting(element) {
    settings[element.id] = element.checked;
    localStorage.setItem("settings", JSON.stringify(settings));
    updatePage();
}
function toggleGroup(element) {
    var group = element.id.split('-').pop(), visible = element.checked;
    showGroups[group] = visible;
    localStorage.setItem("showGroups", JSON.stringify(showGroups));
    $('.' + group.replace(/[^A-Z0-9]/ig, '')).toggleClass("hidden", !visible);
    updatePage();
}
