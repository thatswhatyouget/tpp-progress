/// <reference path="tpp-structure.ts" />
/// <reference path="tpp-scraper.ts" />
/// <reference path="tpp-data.ts" />
/// <reference path="twitch-videos.ts" />

var fakeQuery: (selector: string) => Array<HTMLElement> = selector => Array.prototype.slice.call(document.querySelectorAll(selector));
var $find: (elements: Array<HTMLElement>, selector: string) => Array<Array<HTMLElement>> = (elements, selector) => elements.map(e=> e ? Array.prototype.slice.call(e.querySelectorAll(selector)) : []);
function getLeft(element: HTMLElement) {
    return parseInt(element.style.left.replace('px', ''));
}
function getWidth(element: HTMLElement) {
    return element.offsetWidth;
}
function findImage(element: HTMLElement) {
    return $find([element], "img").pop().pop() || new Image();
}
function marginTop(element: HTMLElement) {
    return parseInt((element.style.marginTop || '0').replace('px', '')) || 0;
}
var globalPpd: number = 64, groups: { [key: string]: string } = {};
var vidWait: JQueryDeferred<Twitch.Video[]> = $.Deferred(), videos = vidWait.promise(),
    getTwitchVideos = function() {
        var $li = $('.controls .fa-twitch').removeClass('fa-twitch').addClass('fa-pulse fa-spinner').removeAttr('onclick').attr('title', 'Loading...').parent();
        Twitch.GetVideos("twitchplayspokemon").then(vidWait.resolve, vidWait.reject).then(() => $li.fadeOut());
    };

function makeGrid(ppd: number) {
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

function createCharts(data: TPP.Collection[]) {
    data.forEach(c=> c.Runs.forEach(r=> r.StartTime = r.StartTime || (r.StartDate ? Math.floor(Date.parse(r.StartDate) / 1000) : 0)));
    data.filter(c=> c.Runs.filter(r=> r.StartTime < Date.now() / 1000).length > 0).forEach(createChart);
    setTimeout(() => updatePage(), 1);
}

function createChart(data: TPP.Collection) {
    var chart = document.createElement("div");
    chart.className = "progressChart";
    chart.setAttribute("data-label", data.Name);
    setUniqueId(chart, data.Name);
    chart.setAttribute("data-scale", TPP.Scale[data.Scale]);
    var offset = parseInt(QueryString["offset"] || "0") + (data.Offset || 0);
    if (offset) chart.setAttribute("data-offset", offset.toString());
    var pageTarget = fakeQuery(".charts")[0] || document.body;
    setTimeout(() => pageTarget.appendChild(chart), 1);
    var longestRun = new Duration(0);
    data.Runs.filter(r=> r.StartTime < Date.now() / 1000).forEach(run=> {
        var runLength = Duration.parse(run.EndDate || run.Duration, run.StartTime);
        if (longestRun.TotalSeconds < runLength.TotalSeconds) longestRun = runLength;
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

function queueRun(runInfo: TPP.Run, scale = TPP.Scale.Days) {
    var div = document.createElement("div");
    if (runInfo.Scraper) Scrape(runInfo).then(r=> {
        drawRun(r, div, scale);
        setTimeout(() => updatePage(), 0);
    }, console.error);
    else setTimeout(() => drawRun(runInfo, div, scale), 0);
    return div;
}

function drawRun(runInfo: TPP.Run, run?: HTMLDivElement, scale = TPP.Scale.Days, events = true) {
    run = run || document.createElement("div");
    run.className = "run";
    if (runInfo.Ongoing) run.className += " ongoing";
    var duration = Duration.parse(runInfo.Duration, runInfo.StartTime);
    runInfo.Duration = duration.toString(TPP.Scale.Weeks);
    run.setAttribute("data-duration", runInfo.Duration);
    run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
    run.setAttribute("data-start", runInfo.StartTime.toString());
    run.setAttribute("data-label", runInfo.RunName + ": " + duration.toString(scale));
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    setUniqueId(run, runInfo.RunName);
    if (runInfo.HostImage && runInfo.HostName) run.appendChild(drawHost(runInfo, scale));
    if (events) {
        importEvents(runInfo);
        runInfo.Events.filter(e=> Duration.parse(e.Time, runInfo.StartTime).TotalSeconds >= 0).sort((e1, e2) => Duration.parse(e1.Time, runInfo.StartTime).TotalSeconds - Duration.parse(e2.Time, runInfo.StartTime).TotalSeconds).forEach(event=> run.appendChild(drawEvent(event, runInfo, scale)));
        runInfo.Events.forEach(e=> delete e.New);
        drawVideos(runInfo, run, scale);
        setTimeout(() => updateRun(runInfo, run, scale), 15 * 60000);
    }
    drawConcurrentRuns(runInfo, run, scale);
    $(run).on('click', function(e) {
        if (e.shiftKey) {
            $(this).hide();
            if (!$(this).siblings(".run:visible").is("*"))
                $(this).parent().hide();
        }
        else if (e.ctrlKey || e.metaKey) {
            console.log(JSON.stringify(runInfo));
        }
    });
}

function updateRun(runInfo: TPP.Run, run: HTMLDivElement, scale) {
    if (!(runInfo.Scraper && runInfo.Ongoing)) return;
    Scrape(runInfo).then(r=> {
        console.log("Updating " + runInfo.RunName + " to " + runInfo.Duration);
        run.setAttribute("data-duration", runInfo.Duration);
        run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
        run.setAttribute("data-label", runInfo.RunName + ": " + Duration.parse(runInfo.Duration, runInfo.StartTime).toString(scale));
        runInfo.Events.filter(e=> e.New).forEach(event=> run.appendChild(drawEvent(event, runInfo, scale)));
        updatePage();
        if ($(run).find('.videos a').is('*')) drawVideos(runInfo, run, scale, Twitch.GetVideos("twitchplayspokemon", false));
    });
    setTimeout(() => updateRun(runInfo, run, scale), 15 * 60000);
}

var cleanString = (str:string) => str.replace(/[^A-Z0-9]/ig, '').toLowerCase();

function setUniqueId(element: HTMLElement, id: string) {
    var original = id = cleanString(id);
    for (var i = 1; document.getElementById(id); id = original + i++);
    element.setAttribute("id", id);
    element.classList.add(original);
}

function drawHost(runInfo: TPP.Run, scale: TPP.Scale) {
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

function drawConcurrentRuns(baseRunInfo: TPP.Run, runElement: HTMLDivElement, scale: TPP.Scale) {
    if (!baseRunInfo.ContainsRunsFrom || !baseRunInfo.ContainsRunsFrom.length) return;
    var baseDuration = Duration.parse(baseRunInfo.Duration),
        baseEndTime = baseRunInfo.StartTime + baseDuration.TotalSeconds;
    tppData.filter(c=> baseRunInfo.ContainsRunsFrom.indexOf(c.Name) >= 0).map(c=> c.Runs.filter(r=> baseRunInfo.StartTime < r.StartTime && baseEndTime > r.StartTime).forEach(r=> {
        var innerRun = document.createElement("div");
        var runStart = Duration.parse(r.StartDate, baseRunInfo.StartTime),
            runEnd = Duration.parse(r.Duration, r.StartTime);
        innerRun.setAttribute("data-time", runStart.toString(TPP.Scale.Weeks));
        runElement.appendChild(innerRun);
        drawRun(r, innerRun, scale, false);
        if (runEnd.TotalSeconds + runStart.TotalSeconds > baseDuration.TotalSeconds) {
            runEnd.TotalSeconds = baseDuration.TotalSeconds - runStart.TotalSeconds;
            innerRun.setAttribute("data-duration", runEnd.toString(TPP.Scale.Weeks));
            innerRun.setAttribute("data-endtime", runEnd.toString(TPP.Scale.Weeks));
        }
        runEnd.TotalSeconds += runStart.TotalSeconds;
        innerRun.classList.add("inner" + cleanString(r.RunName));
        innerRun.setAttribute('data-label', (c.SingularName || c.Name) + "\n" + r.RunName + "\nStarted: " + runStart.toString(scale) + (r.Ongoing ? "" : "\nEnded: " + runEnd.toString(scale)));
    }));
}

function importEvents(baseRunInfo: TPP.Run) {
    if (!baseRunInfo.CopyEvents) return;
    var events: TPP.Event[] = [];
    tppData.forEach(c=> c.Runs.filter(r=> baseRunInfo.CopyEvents.indexOf(r.RunName) >= 0).forEach(r=> events = events.concat.apply(events, r.Events)));
    events.forEach(e=> !baseRunInfo.Events.filter(e2=> e2.Name == e.Name && e2.Time == e.Time).length ? baseRunInfo.Events.push(e) : console.log("Skipped event " + e.Name));
}

function drawEvent(eventInfo: TPP.Event, runInfo: TPP.Run, scale: TPP.Scale) {
    delete eventInfo.New;
    var groupName = eventInfo.Group.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    event.classList.add("event");
    if (eventInfo.Class) eventInfo.Class.split(' ').forEach(c=> event.classList.add(c.replace(/[^A-Z0-9]/ig, '').toLowerCase()));
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
    else event.appendChild(eventImg);
    event.classList.add(groupName);
    var time = Duration.parse(eventInfo.Time, runInfo.StartTime);
    var label = eventInfo.Name;
    if (eventInfo.Time) {
        label += "\n" + time.toString(scale);
        //eventInfo.Time = time.toString(TPP.Scale.Weeks);
    }
    if (eventInfo.Estimate) label += "\n(estimated)";
    if (eventInfo.Attempts) label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
    eventImg.src = imageUrl;
    eventImg.alt = label;
    event.setAttribute('data-label', label);
    event.setAttribute("data-time", time.toString(TPP.Scale.Weeks));
    if (showGroups[groupName] === false) event.classList.add('hidden');
    groups[groupName] = eventInfo.Group;
    return event;
}

function applyScale(ppd?: number) {
    globalPpd = ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2))); //floor to power of 2
    fakeQuery('.progressChart').forEach(chart=> {
        chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
    });
    $find(fakeQuery(".progressChart .ruler"), ".stop").forEach(ruler=> ruler.forEach((stop, i) => {
        var offset = parseFloat($(stop).parents('.progressChart').data('offset') || '0');
        stop.style.left = (i + offset) * ppd + "px";
    }));
    fakeQuery(".progressChart > .run").forEach(run=> {
        var scale = TPP.Scale[run.parentElement.getAttribute('data-scale')] || TPP.Scale[run.parentElement.parentElement.getAttribute('data-scale')] || 0;
        var durationAttribute = settings["postgame"] ? "data-endtime" : "data-duration",
            duration = Duration.parse(run.getAttribute(durationAttribute));
        if (run.getAttribute(durationAttribute)) run.style.width = duration.TotalTime(scale) * ppd + "px";
        var runs = $find([run], ".run").pop(),
            events = $find([run], ".event").pop().filter(e=> !e.classList.contains('hidden') && e.parentElement == run),
            videos = $find([run], ".videos a").pop();
        [].concat(events).concat(runs).concat(videos).forEach(event=> {
            if (event.getAttribute('data-time')) {
                var time = Duration.parse(event.getAttribute('data-time'))
                event.style.left = time.TotalTime(scale) * ppd + "px";
                event.style.display = !settings["postgame"] && !$(event).parents('.run').is('.ongoing') && time.TotalSeconds > duration.TotalSeconds ? "none" : "block";
            }
            if (event.getAttribute(durationAttribute)) event.style.width = Duration.parse(event.getAttribute(durationAttribute)).TotalTime(scale) * ppd + "px";
            var img = findImage(event);
            if (img) img.style.marginTop = event.style.marginTop = "0";
        });
        staggerStackedRuns(runs, run.offsetHeight);
        if (settings["explode"]) {
            staggerStackedEvents(events.filter(e=> e.style.display != "none"), run.offsetHeight);
        }
        var offset = parseFloat($(run).parents('.progressChart').data('offset') || '0');
        run.style.marginLeft = offset * ppd + "px";
        $(run).find('.hosts').first().css('margin-left', -offset * ppd + "px");
    });
}

function staggerStackedRuns(runs: HTMLElement[], runHeight: number) {
    var dir = -((runHeight / 2) - 2);
    runs.forEach((r, i) => {
        var d = dir *= -1;
        var myStart = Duration.parse(r.getAttribute('data-time')).TotalSeconds,
            myEnd = myStart + Duration.parse(r.getAttribute('data-duration')).TotalSeconds;
        function pushRun(run) {
            var thisStart = Duration.parse(run.getAttribute('data-time')).TotalSeconds,
                thisEnd = thisStart + Duration.parse(run.getAttribute('data-duration')).TotalSeconds;
            if ((myStart <= thisStart && myEnd > thisStart) || (myStart < thisEnd && myEnd >= thisEnd)) {
                d > 0 && (run.style.marginTop = d + "px");
                d < 0 && (r.style.marginTop = -d + "px");
                run.style.height = r.style.height = Math.abs(d) + "px";
            }
        }
        if (runs[i - 1]) pushRun(runs[i - 1]);
        if (runs[i + 1]) pushRun(runs[i + 1]);
    });
}

function staggerStackedEvents(allEvents: HTMLElement[], runHeight: number) {
    var dir = .1;
    [allEvents.filter(e=> e.className.indexOf("pokemon") < 0), allEvents.filter(e=> e.className.indexOf("pokemon") >= 0)].forEach(events=> {
        var width = (element: HTMLElement, pokeMode?: boolean) => pokeMode ? 25 : getWidth(element) || runHeight;
        events.forEach((e, i) => {
            var d = dir *= -1;
            if (i == 0) return;
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
            if (i > 1 && events[i - 1]) pushEvent(events[i - 1]);
            if (events[i + 1]) pushEvent(events[i + 1]);
        });
    });
    findImage(allEvents[0]).style.marginTop = findImage(allEvents[allEvents.length - 1]).style.marginTop = "0";
}

function updatePage(ppd = globalPpd) {
    setTimeout(() => applyScale(ppd), 0);
    var extant = fakeQuery(".groups input").map(i=> i.id.split('-').pop()) || [];
    var groupList = fakeQuery(".groups ul").pop();
    Object.keys(groups).filter(g=> extant.indexOf(g) < 0).forEach(g=> {
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
        input.onchange = () => toggleGroup(input);
    });
}

function drawVideos(baseRunInfo: TPP.Run, runElement: HTMLDivElement, scale: TPP.Scale, videoCollection = videos) {
    var vidDiv = $('<div class="videos">').appendTo(runElement);
    videoCollection.then(vids=> vids.filter(vid=> (vid.StartTime < baseRunInfo.StartTime + new Duration(baseRunInfo.Duration).TotalSeconds) && (vid.EndTime > baseRunInfo.StartTime)
        ).forEach(vid=> {
            var time = vid.StartTime - baseRunInfo.StartTime, startOffset = 0, duration = vid.length, vidStart = new Duration(0), vidEnd = new Duration(0),
                runEnd = baseRunInfo.StartTime + new Duration(baseRunInfo.Duration).TotalSeconds;
            if (vid.StartTime < baseRunInfo.StartTime) {
                time = 0;
                duration -= (startOffset = baseRunInfo.StartTime - vid.StartTime);
            }
            if (vid.EndTime > runEnd && !baseRunInfo.Ongoing) duration -= vid.EndTime - runEnd;
            vidStart.TotalSeconds = time;
            vidEnd.TotalSeconds = duration;
            var $video = $(runElement).find('.videos a[href="' + vid.url + '"]');
            if (!$video.is('*')) {
                $video = $("<a target='_blank'>").addClass(vid.source.toLowerCase()).attr('href', vid.url).appendTo(vidDiv).mousemove(function(e) {
                    var vidTime = new Duration(0), runTime = new Duration(0), percentage = (Math.abs(e.pageX - $(this).offset().left) / $(this).width()),
                        time = Duration.parse($(this).data('time')).TotalSeconds, duration = Duration.parse($(this).data('duration')).TotalSeconds;
                    vidTime.TotalSeconds = (percentage * duration) + startOffset;
                    runTime.TotalSeconds = (percentage * duration) + time;
                    $(this).attr('href', vid.url + "?t=" + vidTime.toString(TPP.Scale.Hours).replace(/\s/g, ''));
                    $(this).find('.playhead').css('left', percentage * $(this).width()).attr('data-label', runTime.toString(scale));
                }).click(e=> e.stopPropagation()).append($("<div class='playhead'>"));
            }
            $video.attr('data-time', vidStart.toString()).attr('data-duration', vidEnd.toString());
            $(runElement).addClass("hasVideos");
            if (!$("#group-videos").is('*'))
                $("<li>")
                    .append($('<input type="checkbox" id="group-videos" checked>').change(function() { $("div.videos").toggleClass('hidden', $(this).val()); }))
                    .append($('<label for="group-videos">').text("Videos"))
                    .appendTo($("li.groups ul"));
        })).then(() => updatePage());
}

//controls and settings
var zoomIn = () => applyScale(globalPpd * 2);
var zoomOut = () => applyScale(globalPpd / 2);

var settings: { [key: string]: boolean } = JSON.parse(localStorage.getItem("settings") || '{"explode":true}');
var showGroups: { [key: string]: boolean } = JSON.parse(localStorage.getItem("showGroups") || "{}");
window.addEventListener("load", () => {
    fakeQuery('.settings input').forEach(element => (<HTMLInputElement>element).checked = settings[element.id]);
    fakeQuery('.groups input').forEach(element => (<HTMLInputElement>element).checked = showGroups[element.id.split('-').pop()] !== false);
    updatePage();
});
function toggleSetting(element: HTMLInputElement) {
    settings[element.id] = element.checked;
    localStorage.setItem("settings", JSON.stringify(settings));
    updatePage();
}
function toggleGroup(element: HTMLInputElement) {
    var group = element.id.split('-').pop(), visible = element.checked;
    showGroups[group] = visible;
    localStorage.setItem("showGroups", JSON.stringify(showGroups));
    $('.' + group.replace(/[^A-Z0-9]/ig, '')).toggleClass("hidden", !visible);
    updatePage();
}
