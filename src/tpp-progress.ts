/// <reference path="tpp-structure.ts" />
/// <reference path="tpp-scraper.ts" />
/// <reference path="tpp-data.ts" />
/// <reference path="twitch-videos.ts" />
/// <reference path="reddit-pasteee.ts" />

var pageData: TPP.Collection[];

var fakeQuery: (selector: string) => Array<HTMLElement> = selector => Array.prototype.slice.call(document.querySelectorAll(selector));
var $find: (elements: Array<HTMLElement>, selector: string) => Array<Array<HTMLElement>> = (elements, selector) => elements.map(e => e ? Array.prototype.slice.call(e.querySelectorAll(selector)) : []);
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
    return parseInt((element.style.marginTop || '0').replace('/(px)|(em)/g', '')) || 0;
}
var globalPpd: number = 64, groups: { [key: string]: string } = {};
var vidWait: JQueryDeferred<Twitch.Video[]> = $.Deferred(), videos = vidWait.promise(),
    getTwitchVideos = function () {
        var $li = $('.controls .fa-twitch').removeClass('fa-twitch').addClass('fa-pulse fa-spinner').removeAttr('onclick').attr('title', 'Loading...').parent();
        //Twitch.GetVideos("twitchplayspokemon").then(vidWait.resolve, vidWait.reject).then(() => $li.fadeOut());
        vidWait.resolve([]);
        $li.fadeOut();
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
    if (QueryString["only"]) {
        data = data.filter(c => QueryString["only"].split(',').filter(f => c.Name.indexOf(f.trim()) >= 0).length > 0);
    }
    if (QueryString["run"]) {
        data = data.map(c => {
            c.Runs = c.Runs.filter(r => QueryString["run"].split(',').filter(f => r.RunName.indexOf(f.trim()) >= 0).length > 0);
            return c;
        }).filter(c => c.Runs.length > 0);
    }
    pageData = data.filter(c => c.Runs.filter(r => r.StartTime < Date.now() / 1000).length > 0);
    pageData.forEach(createChart)
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
    data.Runs.filter(r => r.StartTime < Date.now() / 1000).forEach(run => {
        // //truncate runs that end in the future
        if (Duration.parse(run.EndDate || run.Duration, run.StartTime).TotalSeconds > ((Date.now() / 1000) - run.StartTime)) {
            run.Duration = new Date().toISOString();
            run.Ongoing = true;
        }
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

function reprocessCharts(data: TPP.Collection[] = pageData) {
    data.forEach(c => c.Runs.filter(r => r.StartTime < Date.now() / 1000).forEach(r => queueRun(r)));
}

function queueRun(runInfo: TPP.Run, scale = TPP.Scale.Days) {
    runInfo.Element = runInfo.Element || document.createElement("div");
    runInfo.Hidden = (settings["hideUnfinished"] && (runInfo.Unfinished && !runInfo.Ongoing));
    if (runInfo.Hidden) runInfo.Element.classList.add('hidden'); //if hidden, don't do any more work
    else if (runInfo.Element.hasAttribute('data-label')) runInfo.Element.classList.remove('hidden'); //if element has data, just un-hide
    else if (runInfo.Scraper) Scrape(runInfo).then(r => drawRun(r, runInfo.Element, scale), console.error);
    else setTimeout(() => drawRun(runInfo, runInfo.Element, scale), 0);
    return runInfo.Element;
}

function drawRun(runInfo: TPP.Run, run?: HTMLDivElement, scale = TPP.Scale.Days, events = true) {
    run = run || document.createElement("div");
    run.className = "run";
    if (runInfo.Ongoing) run.className += " ongoing";
    if (runInfo.Class) run.className += " " + runInfo.Class;
    if (runInfo.Region) run.className += " " + cleanString(runInfo.Region);
    var duration = Duration.parse(runInfo.Duration, runInfo.StartTime);
    runInfo.Duration = duration.toString(TPP.Scale.Weeks);
    run.setAttribute("data-duration", runInfo.Duration);
    run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
    run.setAttribute("data-start", runInfo.StartTime.toString());
    run.setAttribute("data-label", runInfo.RunName + ": " + duration.toString(scale));
    run.setAttribute("data-startDate", new Date(runInfo.StartDate).toISOString().replace(/-/g, '/').replace(/T/, ' ').replace(/:\d+\.\d+/, '').replace(/Z/, ' UTC'));
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.backgroundImage = runInfo.BackgroundImage;
    run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    setUniqueId(run, runInfo.RunName);
    if (runInfo.HostImage && runInfo.HostName) run.appendChild(drawHost(runInfo, scale));
    if (events) {
        runInfo.Events.filter(e => Duration.parse(e.Time, runInfo.StartTime).TotalSeconds >= 0).sort((e1, e2) => Duration.parse(e1.Time, runInfo.StartTime).TotalSeconds - Duration.parse(e2.Time, runInfo.StartTime).TotalSeconds).forEach(event => run.appendChild(drawEvent(event, runInfo, scale)));
        runInfo.Events.forEach(e => delete e.New);
        drawVideos(runInfo, run, scale);
        setTimeout(() => updateRun(runInfo, run, scale), 15 * 60000);
        drawConcurrentRuns(runInfo, run, scale);
    }
    $(run).on('click', function (e) {
        if (e.shiftKey) {
            $(this).hide();
            if (!$(this).siblings(".run:visible").is("*"))
                $(this).parent().hide();
        }
        else if (e.ctrlKey || e.metaKey) {
            console.log(JSON.stringify(runInfo));
        }
        else if (e.altKey) {
            $(this).find('.event').each(function () { $(this).trigger('describe') });
        }
    });
    setTimeout(() => scaleRun(run), 0);
    return run;
}

function updateRun(runInfo: TPP.Run, run: HTMLDivElement, scale) {
    if (!(runInfo.Scraper && runInfo.Ongoing)) return;
    Scrape(runInfo).then(r => {
        var duration = Duration.parse(runInfo.Duration, runInfo.StartTime).toString(scale);
        console.log("Updating " + runInfo.RunName + " to " + duration);
        run.setAttribute("data-duration", duration);
        run.setAttribute("data-endtime", Duration.parse(runInfo.EndDate || runInfo.Duration, runInfo.StartTime).toString(TPP.Scale.Weeks));
        run.setAttribute("data-label", runInfo.RunName + ": " + Duration.parse(runInfo.Duration, runInfo.StartTime).toString(scale));
        runInfo.Events.filter(e => e.New).forEach(event => run.appendChild(drawEvent(event, runInfo, scale)));
        scaleRun(run);
        //if ($(run).find('.videos a').is('*')) drawVideos(runInfo, run, scale);
    });
    setTimeout(() => updateRun(runInfo, run, scale), 15 * 60000);
}

var cleanString = (str: string) => str.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();

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
    var innerRuns = new Array<{ time: number, div: HTMLDivElement }>();
    tppData.filter(c => baseRunInfo.ContainsRunsFrom.indexOf(c.Name) >= 0).map(c => c.Runs.filter(r => baseRunInfo != r && baseRunInfo.StartTime <= r.StartTime && baseEndTime > r.StartTime).forEach(r => {
        var innerRun = document.createElement("div");
        var runStart = Duration.parse(r.StartDate, baseRunInfo.StartTime),
            runEnd = Duration.parse(r.Duration, r.StartTime);
        innerRun.setAttribute("data-time", runStart.toString(TPP.Scale.Weeks));
        innerRuns.push({ time: runStart.TotalSeconds, div: innerRun });
        drawRun(r, innerRun, scale, false);
        if (runEnd.TotalSeconds + runStart.TotalSeconds >= baseDuration.TotalSeconds) {
            runEnd.TotalSeconds = baseDuration.TotalSeconds - runStart.TotalSeconds;
            innerRun.setAttribute("data-duration", runEnd.toString(TPP.Scale.Weeks));
            innerRun.setAttribute("data-endtime", runEnd.toString(TPP.Scale.Weeks));
        }
        runEnd.TotalSeconds += runStart.TotalSeconds;
        innerRun.classList.add("inner" + cleanString(r.RunName));
        innerRun.setAttribute('data-label', (c.SingularName || c.Name) + "\n" + r.RunName + "\nStarted: " + runStart.toString(scale) + (r.Ongoing ? "" : "\nEnded: " + runEnd.toString(scale)));
    }));
    innerRuns.sort((r1, r2) => r1.time - r2.time).forEach(e => runElement.appendChild(e.div));
}

function drawEvent(eventInfo: TPP.Event, runInfo: TPP.Run, scale: TPP.Scale) {
    delete eventInfo.New;
    var groupName = eventInfo.Group.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase();
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    event.classList.add("event");
    if (eventInfo.Class) eventInfo.Class.split(' ').forEach(c => event.classList.add(c.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase()));
    if (eventInfo.Group.toLowerCase() == "pokemon" && !eventInfo.Image) {
        event.classList.add("pokesprite");
    }
    if (event.classList.contains("pokesprite")) {
        event.classList.add(eventInfo.Name.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '').toLowerCase() || "missingno");
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
    if ((<TPP.HallOfFame>eventInfo).Party) {
        var hof = drawHallOfFame(<TPP.HallOfFame>eventInfo, runInfo, scale);
        hof.classList.add("extra");
        event.appendChild(hof);
    }
    $(event).on('describe', function (e) {
        console.log(`${new Date((runInfo.StartTime + time.TotalSeconds) * 1000).toISOString()} (${time.toString()}) - ${eventInfo.Group}: ${eventInfo.Name}${eventInfo.Estimate ? " (Estimated)" : ""}`);
    });
    return event;
}

function drawHallOfFame(hofInfo: TPP.HallOfFame, runInfo: TPP.Run, scale = TPP.Scale.Days) {
    var $hof = $("<div class='hallOfFameDisplay'>");
    $hof.addClass(cleanString(runInfo.RunName) + " " + (runInfo.Class || "") + " " + (runInfo.BaseGame || ""));
    $hof.css('background-color', runInfo.ColorPrimary);
    $hof.css('border-color', runInfo.ColorSecondary);
    var time = new Date((Duration.parse(hofInfo.Time, runInfo.StartTime).TotalSeconds + runInfo.StartTime) * 1000);
    $hof.append($("<h3>").text(hofInfo.Name + " - " + time.toLocaleDateString()));
    $hof.append($("<h4>").text(Duration.parse(hofInfo.Time, runInfo.StartTime).toString(scale)));
    if (hofInfo.Attempts) $hof.append($("<h5>").text(hofInfo.Attempts + " Attempts"));
    $hof.append($("<img>").attr('src', hofInfo.Image));
    var $hofRow = $("<tr>").appendTo($("<table>").appendTo($hof));
    var $host = $("<div class='entry host'>").appendTo($("<td>").appendTo($hofRow));
    var $hostImg = $("<img>").attr('src', runInfo.HostImage).attr('alt', runInfo.HostName).attr('title', runInfo.HostName);
    if (runInfo.HostImageSource) {
        $hostImg = $("<a>").attr('href', runInfo.HostImageSource).append($hostImg);
    }
    $host.append($hostImg);
    var $hostInfo = $('<div class="info">').append($('<div class="name">').text(runInfo.HostName)).appendTo($host);
    if (hofInfo.IDNo) {
        $hostInfo.append($('<div data-entry="IDNo">').text(hofInfo.IDNo));
    }
    hofInfo.Party.forEach(p => {
        var name = (p.Nickname || p.Pokemon).replace(/\s/g, "&nbsp;");//.replace(/π/g, "<i class='pk'></i>").replace(/µ/g, "<i class='mn'></i>");
        var $entry = $("<div class='entry'>").addClass((p.Gender || '').toLowerCase());
        $entry.append($("<span class='level'>").text(p.Level));
        $entry.append($("<div class='pokesprite'><img src='img/missingno.png'/></div>").addClass(cleanString(p.Pokemon)).addClass(p.Shiny ? "shiny" : "").addClass((p.Gender || "").toLowerCase()).addClass(p.Class).addClass(cleanString(p.Form || "")).attr('title', p.Pokemon));
        var $info = $("<div class='info'>").append($("<div class='name'>").html(name)).appendTo($entry);
        //if (p.PreviousNick) $info.append($("<div data-entry='Née'>").text(p.PreviousNick));
        if (p.Number) {
            var idx = p.Number.toString(), index = ('000' + idx).substring(idx.length);
            $info.append($("<div data-entry='" + index + "'>").text(p.Pokemon));
        }
        if (p.Met) $info.append($("<div data-entry='Met'>").text(p.Met));
        if (p.Type1) $info.append($("<div data-entry='Type 1'>").text(p.Type1));
        if (p.Type2) $info.append($("<div data-entry='Type 2'>").text(p.Type2));
        if (p.OT) $info.append($("<div data-entry='OT'>").text(p.OT));
        if (p.IDNo) $info.append($("<div data-entry='IDNo'>").text(p.IDNo));
        $hofRow.append($("<td>").append($entry));
    });
    for (var i = hofInfo.Party.length; i < 6; i++) {
        $("<div class='entry'>").appendTo($("<td>").appendTo($hofRow));
    }

    return $hof.get(0);
}

function applyScale(ppd?: number) {
    globalPpd = ppd = Math.pow(2, Math.floor(Math.log(ppd || globalPpd || 64) / Math.log(2))); //floor to power of 2
    fakeQuery('.progressChart').forEach(chart => {
        chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
        if (!$(chart).find('.run:not(.hidden)').is('*'))
            chart.classList.add('hidden');
        else
            chart.classList.remove('hidden');
    });
    $find(fakeQuery(".progressChart .ruler"), ".stop").forEach(ruler => ruler.forEach((stop, i) => {
        var offset = parseFloat($(stop).parents('.progressChart').data('offset') || '0');
        stop.style.left = (i + offset) * ppd + "px";
    }));
    fakeQuery(".progressChart > .run").forEach(run => scaleRun(run, ppd));
}

function scaleRun(run: HTMLElement, ppd?: number) {
    if ($(run).is('.hidden')) return;
    $(run).parents('.hidden').removeClass('hidden');
    ppd = ppd || globalPpd;
    var scale = TPP.Scale[run.parentElement.getAttribute('data-scale')] || TPP.Scale[run.parentElement.parentElement.getAttribute('data-scale')] || 0;
    var durationAttribute = settings["postgame"] ? "data-endtime" : "data-duration",
        duration = Duration.parse(run.getAttribute(durationAttribute));
    if (run.getAttribute(durationAttribute)) run.style.width = duration.TotalTime(scale) * ppd + "px";
    var runs = $find([run], ".run").pop(),
        events = $find([run], ".event").pop().filter(e => !e.classList.contains('hidden') && e.parentElement == run),
        videos = $find([run], ".videos a").pop();
    [].concat(events).concat(runs).concat(videos).forEach(event => {
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
        staggerStackedEvents(events.filter(e => e.style.display != "none"), run.offsetHeight);
    }
    var offset = parseFloat($(run).parents('.progressChart').data('offset') || '0');
    run.style.marginLeft = offset * ppd + "px";
    $(run).find('.hosts').first().css('margin-left', -offset * ppd + "px");
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
    [allEvents.filter(e => e.className.indexOf("pokemon") < 0 && e.className.indexOf("halloffame") < 0), allEvents.filter(e => e.className.indexOf("pokemon") >= 0)].forEach(events => {
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
                    myImg.style.zIndex = d > 0 ? '1' : '0';
                }
            }
            if (i > 1 && events[i - 1]) pushEvent(events[i - 1]);
            if (events[i + 1]) pushEvent(events[i + 1]);
        });
    });
    findImage(allEvents[0]).style.marginTop = "0";
    if (!$(allEvents[0]).parents('.run').is('.ongoing'))
        findImage(allEvents[allEvents.length - 1]).style.marginTop = "0";
}

var pageUpdateTimeout = null;

function updatePage(ppd = globalPpd) {
    if (pageUpdateTimeout) clearTimeout(pageUpdateTimeout);
    pageUpdateTimeout = setTimeout(() => {
        setTimeout(() => applyScale(ppd), 0);
        var extant = fakeQuery(".groups input").map(i => i.id.split('-').pop()) || [];
        var groupList = fakeQuery(".groups ul").pop();
        Object.keys(groups).filter(g => extant.indexOf(g) < 0).forEach(g => {
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
    }, 0);
}


function drawVideos(baseRunInfo: TPP.Run, runElement: HTMLDivElement, scale: TPP.Scale, videoCollection = videos) {
    var vidDiv = $('<div class="videos">').appendTo(runElement);
    videoCollection.then(() => {
        var duration = new Duration(baseRunInfo.Duration);
        var $video = $("<a target='_blank'>").addClass('twitch').appendTo(vidDiv).mousemove(function (e) {
            var percentage = (Math.abs(e.pageX - $(this).offset().left) / $(this).width());
            var runTime = new Duration(0);
            runTime.TotalSeconds = (percentage * duration.TotalSeconds);
            var realTime = new Date((baseRunInfo.StartTime + runTime.TotalSeconds) * 1000);
            $(this).attr('href', `https://tpp.chat/jump/vod/${realTime.toISOString()}`);
            $(this).find('.playhead').css('left', percentage * $(this).width()).attr('data-label', `${runTime.toString(scale)}\n${realTime.toLocaleString()}`);
        }).click(e => e.stopPropagation()).append($("<div class='playhead'>"));
        $video.attr('data-time', new Duration(0).toString()).attr('data-duration', duration.toString());
        $(runElement).addClass("hasVideos");
        if (!$("#group-videos").is('*'))
            $("<li>")
                .append($('<input type="checkbox" id="group-videos" checked>').change(function () { $("div.videos").toggleClass('hidden', $(this).val()); }))
                .append($('<label for="group-videos">').text("Videos"))
                .appendTo($("li.groups ul"));
        setTimeout(() => scaleRun(runElement), 0);
    });
}

class HeatMap {
    Color: (current: number) => string;
    constructor(low: number, high: number) {
        this.Color = (current: number) => {
            var num = ((current - low) / (high - low)) * Math.PI;
            return "rgb(" + Math.sin(num).toFixed(0) + ",0," + Math.cos(num).toFixed(0) + ")";
        }
    }
}

function drawRedditLive(baseRunInfo: TPP.Run, runElement: HTMLDivElement, entries: JQueryPromise<Reddit.Pasteee.Live.EntryCollection>) {
    var vidDiv = $('<div class="videos">').appendTo(runElement);
    var totalDuration = new Duration(baseRunInfo.Duration).TotalSeconds;
    //TODO: Finish this

}

//controls and settings
var zoomIn = () => applyScale(globalPpd * 2);
var zoomOut = () => applyScale(globalPpd / 2);

var defaultSettings: { [key: string]: boolean } = {
    "explode": true,
    "hideUnfinished": true
};

var settings: { [key: string]: boolean } = JSON.parse(localStorage.getItem("settings") || '{}');
Object.keys(defaultSettings).forEach(s => settings[s] = typeof (settings[s]) === "boolean" ? settings[s] : defaultSettings[s]);
var showGroups: { [key: string]: boolean } = JSON.parse(localStorage.getItem("showGroups") || "{}");
window.addEventListener("load", () => {
    fakeQuery('.settings input').forEach(element => (<HTMLInputElement>element).checked = settings[element.id]);
    fakeQuery('.groups input').forEach(element => (<HTMLInputElement>element).checked = showGroups[element.id.split('-').pop()] !== false);
    updatePage();
});
function toggleSetting(element: HTMLInputElement) {
    var setting = element.id;
    settings[setting] = element.checked;
    localStorage.setItem("settings", JSON.stringify(settings));
    if (setting == "hideUnfinished") reprocessCharts();
    updatePage();
}
function toggleGroup(element: HTMLInputElement) {
    var group = element.id.split('-').pop(), visible = element.checked;
    showGroups[group] = visible;
    localStorage.setItem("showGroups", JSON.stringify(showGroups));
    $('.' + group.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9-]/ig, '')).toggleClass("hidden", !visible);
    updatePage();
}
