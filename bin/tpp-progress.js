/// <reference path="tpp-structure" />
var Duration = (function () {
    function Duration(days, hours, minutes, seconds) {
        this.hours = hours;
        this.minutes = minutes;
        this.seconds = seconds;
        if (typeof (days) === "string") {
            var parsed = Duration.parse(days);
            this.days = parsed.days;
            this.hours = parsed.hours;
            this.minutes = parsed.minutes;
            this.seconds = parsed.seconds;
        }
        else
            this.days = days;
    }
    Object.defineProperty(Duration.prototype, "TotalSeconds", {
        get: function () {
            return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "TotalDays", {
        get: function () {
            return this.TotalSeconds / 60 / 60 / 24;
        },
        enumerable: true,
        configurable: true
    });
    Duration.parse = function (time) {
        try {
            var matches = /^\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i.exec(time);
            return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0);
        }
        catch (e) {
            return new Duration(0, 0, 0, 0);
        }
    };
    return Duration;
})();
var fakeQuery = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
var $find = function (elements, selector) { return elements.map(function (e) { return Array.prototype.slice.call(e.querySelectorAll(selector)); }); };
function getLeft(element) {
    return parseInt(element.style.left.replace('px', ''));
}
function getWidth(element) {
    return element.offsetWidth;
}
function findImage(element) {
    return $find([element], "img").pop().pop();
}
function marginTop(element) {
    return parseInt((element.style.marginTop || '0').replace('px', '')) || 0;
}
var globalPpd = 64, groups = {};
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
function createChart(data, label, ppd) {
    globalPpd = ppd = globalPpd || ppd || window.innerWidth / days;
    var chart = document.createElement("div");
    chart.className = "progressChart";
    chart.setAttribute("data-label", label);
    setTimeout(function () { return document.body.appendChild(chart); }, 1);
    var days = 0;
    data.forEach(function (run) {
        var runLength = Duration.parse(run.Duration).TotalSeconds / 60 / 60 / 24;
        if (days < runLength)
            days = runLength;
        chart.appendChild(queueRun(run));
    });
    var ruler = document.createElement("div");
    ruler.className = "ruler";
    chart.insertBefore(ruler, chart.firstChild);
    for (var i = 0; i - .5 < days; i++) {
        var stop = document.createElement('div');
        ruler.appendChild(stop);
        stop.className = "stop";
    }
    setTimeout(function () { return updatePage(ppd); }, 1);
}
function queueRun(runInfo) {
    var div = document.createElement("div");
    if (runInfo.Scraper)
        Scrape(runInfo).then(function (r) {
            drawRun(r, div);
            setTimeout(function () { return updatePage(); }, 0);
        }, console.error);
    else
        setTimeout(function () { return drawRun(runInfo, div); }, 0);
    return div;
}
function drawRun(runInfo, run) {
    run = run || document.createElement("div");
    run.className = "run";
    run.setAttribute("data-time", runInfo.Duration);
    run.setAttribute("data-label", runInfo.RunName + ": " + runInfo.Duration);
    run.setAttribute("data-json", JSON.stringify(runInfo));
    run.setAttribute("id", runInfo.RunName.replace(/[^A-Z0-9]/ig, '').toLowerCase());
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.borderColor = run.style.color = runInfo.ColorSecondary;
    run.appendChild(drawHost(runInfo));
    runInfo.Events.sort(function (e1, e2) { return Duration.parse(e1.Time).TotalSeconds - Duration.parse(e2.Time).TotalSeconds; }).forEach(function (event) { return run.appendChild(drawEvent(event)); });
}
function drawHost(runInfo) {
    var host = drawEvent({
        Group: "Hosts",
        Name: runInfo.HostName,
        Image: runInfo.HostImage,
        ImageSource: runInfo.HostImageSource,
        Time: ''
    });
    host.style.left = "0";
    return host;
}
function drawEvent(eventInfo) {
    var groupName = eventInfo.Group.replace(/[^A-Z0-9]/ig, '').toLowerCase();
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    if (eventInfo.ImageSource) {
        var imgSource = document.createElement("a");
        event.appendChild(imgSource);
        imgSource.appendChild(eventImg);
        imgSource.setAttribute("href", eventInfo.ImageSource);
        imgSource.setAttribute("target", "_blank");
    }
    else
        event.appendChild(eventImg);
    event.className = "event " + groupName;
    var label = eventInfo.Name;
    if (eventInfo.Time)
        label += "\n" + eventInfo.Time;
    if (eventInfo.Attempts)
        label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
    eventImg.src = eventInfo.Image;
    eventImg.alt = label;
    event.setAttribute('data-label', label);
    event.setAttribute("data-time", eventInfo.Time);
    if (showGroups[groupName] === false)
        eventImg.style.opacity = "0";
    groups[groupName] = eventInfo.Group;
    return event;
}
function applyScale(ppd) {
    globalPpd = ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2)));
    var $ = fakeQuery;
    $('.progressChart').forEach(function (chart) {
        chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
    });
    $find($(".progressChart .ruler"), ".stop").forEach(function (ruler) { return ruler.forEach(function (stop, i) {
        stop.style.left = i * ppd + "px";
    }); });
    $(".progressChart .run").forEach(function (run) {
        if (run.getAttribute('data-time'))
            run.style.width = Duration.parse(run.getAttribute('data-time')).TotalDays * ppd + "px";
        var events = $find([run], ".event").pop().filter(function (e) { return findImage(e).style.opacity != "0"; });
        events.forEach(function (event) {
            if (event.getAttribute('data-time'))
                event.style.left = Duration.parse(event.getAttribute('data-time')).TotalDays * ppd + "px";
            findImage(event).style.marginTop = "0";
        });
        if (settings["explode"]) {
            var dir = .15;
            [events.filter(function (e) { return e.className.indexOf("pokemon") < 0; }), events.filter(function (e) { return e.className.indexOf("pokemon") >= 0; })].forEach(function (events) {
                var width = function (element, pokeMode) { return pokeMode ? 25 : getWidth(element) || run.offsetHeight; };
                events.forEach(function (event, i) {
                    var d = dir *= -1;
                    if (i == 0)
                        return;
                    var pokeMode = event.className.indexOf("pokemon") >= 0;
                    var myImg = findImage(event);
                    var myWidth = width(myImg, pokeMode);
                    var myLeft = getLeft(event) - myWidth / 2;
                    if (i > 1 && events[i - 1]) {
                        var thisImg = findImage(events[i - 1]);
                        var thisWidth = width(thisImg, pokeMode);
                        var thisLeft = getLeft(events[i - 1]) - thisWidth / 2;
                        if (thisLeft + thisWidth > myLeft) {
                            thisImg.style.marginTop = (marginTop(thisImg) - (thisLeft + thisWidth - myLeft) * d) + "px";
                            myImg.style.marginTop = (marginTop(myImg) + (thisLeft + thisWidth - myLeft) * d) + "px";
                        }
                    }
                    if (events[i + 1]) {
                        var thisImg = findImage(events[i + 1]);
                        var thisWidth = width(thisImg, pokeMode);
                        var thisLeft = getLeft(events[i + 1]) - thisWidth / 2;
                        if (myLeft + myWidth > thisLeft) {
                            thisImg.style.marginTop = (marginTop(thisImg) - (myLeft + myWidth - thisLeft) * d) + "px";
                            myImg.style.marginTop = (marginTop(myImg) + (myLeft + myWidth - thisLeft) * d) + "px";
                        }
                    }
                });
            });
            findImage(events[0]).style.marginTop = findImage(events[events.length - 1]).style.marginTop = "0";
        }
    });
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
var zoomIn = function () { return applyScale(globalPpd * 2); };
var zoomOut = function () { return applyScale(globalPpd / 2); };
var settings = JSON.parse(localStorage.getItem("settings") || "{}");
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
    fakeQuery('.' + group.replace(/[^A-Z0-9]/ig, '').toLowerCase()).forEach(function (event) {
        event.style.pointerEvents = visible ? "all" : "none";
        findImage(event).style.opacity = visible ? "1" : "0";
    });
    updatePage();
}
