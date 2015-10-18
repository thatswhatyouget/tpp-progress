var ppd = 64;
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
    Object.defineProperty(Duration.prototype, "SizeInPixels", {
        get: function () {
            return this.TotalSeconds / 60 / 60 / 24 * ppd;
        },
        enumerable: true,
        configurable: true
    });
    Duration.parse = function (time) {
        var matches = /^\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i.exec(time);
        return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0);
    };
    return Duration;
})();
function makeGrid() {
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
function createChart(data) {
    var chart = document.createElement("div");
    chart.className = "progressChart";
    setTimeout(function () { document.body.appendChild(chart); }, 1);
    chart.style.paddingLeft = chart.style.paddingRight = (ppd / 2) + "px";
    chart.style.backgroundImage = 'url("' + makeGrid() + '")';
    var width = 0;
    data.forEach(function (run) {
        var runWidth = Duration.parse(run.Duration).SizeInPixels;
        if (width < runWidth)
            width = runWidth;
        chart.appendChild(drawRun(run));
    });
    chart.style.width = width + "px";
    var ruler = document.createElement("div");
    ruler.className = "ruler";
    chart.insertBefore(ruler, chart.firstChild);
    for (var i = 0; i - .5 < width / ppd; i++) {
        var stop = document.createElement('div');
        ruler.appendChild(stop);
        stop.className = "stop";
        stop.style.left = i * ppd - (ppd / 2);
        stop.style.width = ppd;
    }
}
function drawRun(runInfo) {
    var run = document.createElement("div");
    run.className = "run";
    run.style.width = Duration.parse(runInfo.Duration).SizeInPixels + "px";
    run.title = runInfo.RunName + ": " + runInfo.Duration;
    run.style.backgroundColor = runInfo.ColorPrimary;
    run.style.borderColor = runInfo.ColorSecondary;
    run.appendChild(drawHost(runInfo));
    runInfo.Events.sort(function (e1, e2) { return Duration.parse(e1.Time).TotalSeconds - Duration.parse(e2.Time).TotalSeconds; }).forEach(function (event) { return run.appendChild(drawEvent(event)); });
    return run;
}
function drawHost(runInfo) {
    var host = drawEvent({
        Group: "host",
        Name: runInfo.HostName,
        Image: runInfo.HostImage,
        Time: ''
    });
    host.style.left = -ppd / 2;
    return host;
}
function drawEvent(eventInfo) {
    var event = document.createElement("div");
    var eventImg = document.createElement("img");
    event.appendChild(eventImg);
    event.className = "event " + eventInfo.Group.replace(/[^A-Z0-9]/i, '').toLowerCase();
    eventImg.title = eventInfo.Name;
    if (eventInfo.Time)
        eventImg.title += ": " + eventInfo.Time;
    if (eventInfo.Attempts)
        eventImg.title += " (" + eventInfo.Attempts + " Attempts)";
    eventImg.src = eventInfo.Image;
    eventImg.alt = eventImg.title;
    event.style.left = Duration.parse(eventInfo.Time).SizeInPixels + "px";
    return event;
}
var data = [
    {
        RunName: "Red",
        ColorPrimary: "red",
        ColorSecondary: "darkred",
        Duration: "16d 7h 45m 30s",
        HostName: "RED",
        HostImage: "http://www.twitchplayspokemon.org/img/trainers/red.png",
        Events: [
            {
                Group: "Badges",
                Name: "Boulder Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/boulder.png",
                Time: "0d 9h 12m"
            },
            {
                Group: "Badges",
                Name: "Cascade Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/cascade.png",
                Time: "1d 18h 46m"
            },
            {
                Group: "Badges",
                Name: "Thunder Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/thunder.png",
                Time: "2d 11h 29m"
            },
            {
                Group: "Badges",
                Name: "Rainbow Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/rainbow.png",
                Time: "4d 0h 47m"
            },
            {
                Group: "Badges",
                Name: "Soul Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/soul.png",
                Time: "8d 7h 18m"
            },
            {
                Group: "Badges",
                Name: "Marsh Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/marsh.png",
                Time: "9d 18h 25m"
            },
            {
                Group: "Badges",
                Name: "Volcano Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/volcano.png",
                Time: "12d 8h 27m"
            },
            {
                Group: "Badges",
                Name: "Earth Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/earth.png",
                Time: "13d 13h 55m"
            },
            // {
            // 	Group: "Elite 4",
            // 	Name: "Lorelei",
            // 	Image: "http://twitchplayspokemon.org/red/img/trainers/lorelei.png",
            // 	Time: "15d 18h 26m",
            // 	Attempts: 4
            // },
            // {
            // 	Group: "Elite 4",
            // 	Name: "Bruno",
            // 	Image: "http://twitchplayspokemon.org/red/img/trainers/bruno.png",
            // 	Time: "15d 18h 33m",
            // 	Attempts: 1
            // },
            // {
            // 	Group: "Elite 4",
            // 	Name: "Agatha",
            // 	Image: "http://twitchplayspokemon.org/red/img/trainers/agatha.png",
            // 	Time: "15d 19h 15m",
            // 	Attempts: 2
            // },
            // {
            // 	Group: "Elite 4",
            // 	Name: "Lance",
            // 	Image: "http://twitchplayspokemon.org/red/img/trainers/lance.png",
            // 	Time: "15d 19h 32m",
            // 	Attempts: 1
            // },
            {
                Group: "Champion",
                Name: "BLUE",
                Image: "http://twitchplayspokemon.org/red/img/trainers/blue.png",
                Time: "16d 7h 45m 30s",
                Attempts: 2
            }
        ]
    },
    {
        RunName: "Crystal",
        ColorPrimary: "blue",
        ColorSecondary: "darkblue",
        Duration: "13d 2h 2m",
        HostName: "AJDNNW",
        HostImage: "http://cdn.bulbagarden.net/upload/2/2d/Spr_C_Ethan.png",
        Events: [
            {
                Group: "Badges",
                Name: "Zephyr Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/zephyr.png",
                Time: "0d 8h 5m 14s"
            },
            {
                Group: "Badges",
                Name: "Hive Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/hive.png",
                Time: "0d 20h 38m 0s"
            },
            {
                Group: "Badges",
                Name: "Plain Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/plain.png",
                Time: "1d 5h 54m 8s"
            },
            {
                Group: "Badges",
                Name: "Fog Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/fog.png",
                Time: "2d 14h 30m 3s"
            },
            {
                Group: "Badges",
                Name: "Glacier Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/glacier.png",
                Time: "4d 12h 18m 40s"
            },
            {
                Group: "Badges",
                Name: "Storm Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/storm.png",
                Time: "3d 5h 30m 45s"
            },
            {
                Group: "Badges",
                Name: "Mineral Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/mineral.png",
                Time: "3d 16h 3m 0s"
            },
            {
                Group: "Badges",
                Name: "Rising Badge",
                Image: "http://www.twitchplayspokemon.org/img/badges/rising.png",
                Time: "6d 23h 36m 0s"
            },
            {
                Group: "Badges",
                Name: "Boulder Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/boulder.png",
                Time: "11d 16h 27m 28s"
            },
            {
                Group: "Badges",
                Name: "Cascade Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/cascade.png",
                Time: "11d 3h 21m 0s"
            },
            {
                Group: "Badges",
                Name: "Thunder Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/thunder.png",
                Time: "10d 4h 54m 0s"
            },
            {
                Group: "Badges",
                Name: "Rainbow Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/rainbow.png",
                Time: "10d 8h 13m 46s"
            },
            {
                Group: "Badges",
                Name: "Soul Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/soul.png",
                Time: "11d 10h 28m 31s"
            },
            {
                Group: "Badges",
                Name: "Marsh Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/marsh.png",
                Time: "10d 6h 19m 43s"
            },
            {
                Group: "Badges",
                Name: "Volcano Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/volcano.png",
                Time: "11d 19h 0m 0s"
            },
            {
                Group: "Badges",
                Name: "Earth Badge",
                Image: "http://twitchplayspokemon.org/red/img/badges/earth.png",
                Time: "11d 22h 24m 42s"
            },
            {
                Group: "Champion",
                Name: "Lance",
                Image: "http://twitchplayspokemon.org/red/img/trainers/lance.png",
                Time: "9d 21h 24m"
            },
            {
                Group: "Champion",
                Name: "RED",
                Image: "http://www.twitchplayspokemon.org/img/trainers/red.png",
                Time: "13d 2h 2m",
                Attempts: 7
            }
        ]
    },
    {
        RunName: "Emerald",
        ColorPrimary: "lime",
        ColorSecondary: "green",
        Duration: "20d 21h 55m",
        HostName: "A",
        HostImage: "http://cdn.bulbagarden.net/upload/a/a4/Spr_E_May.png",
        Events: [
            {
                Group: "Badges",
                Name: "Stone Badge",
                Image: "http://twitchplayspokemon.org/img/badges/stone.png",
                Time: "1d 5h 42m",
                Attempts: 9
            },
            {
                Group: "Badges",
                Name: "Knuckle Badge",
                Image: "http://twitchplayspokemon.org/img/badges/knuckle.png",
                Time: "1d 18h 49m",
                Attempts: 4
            },
            {
                Group: "Badges",
                Name: "Dynamio Badge",
                Image: "http://twitchplayspokemon.org/img/badges/dynamo.png",
                Time: "4d 8h 31m",
                Attempts: 23
            },
            {
                Group: "Badges",
                Name: "Heat Badge",
                Image: "http://twitchplayspokemon.org/img/badges/heat.png",
                Time: "5d 16h 39m",
                Attempts: 1
            },
            {
                Group: "Badges",
                Name: "Balance Badge",
                Image: "http://twitchplayspokemon.org/img/badges/balance.png",
                Time: "5d 21h 57m",
                Attempts: 1
            },
            {
                Group: "Badges",
                Name: "Feather Badge",
                Image: "http://twitchplayspokemon.org/img/badges/feather.png",
                Time: "8d 10h 25m",
                Attempts: 2
            },
            {
                Group: "Badges",
                Name: "Mind Badge",
                Image: "http://twitchplayspokemon.org/img/badges/mind.png",
                Time: "11d 15h 43m",
                Attempts: 4
            },
            {
                Group: "Badges",
                Name: "Rain Badge",
                Image: "http://twitchplayspokemon.org/img/badges/rain.png",
                Time: "14d 2h 22m",
                Attempts: 1
            },
            {
                Group: "Elite 4",
                Name: "Sidney",
                Image: "http://www.twitchplayspokemon.org/img/trainers/sidney.png",
                Time: "14d 15h 8m",
                Attempts: 2
            },
            {
                Group: "Elite 4",
                Name: "Phoebe",
                Image: "http://twitchplayspokemon.org/img/trainers/phoebe.png",
                Time: "14d 15h 22m",
                Attempts: 1
            },
            {
                Group: "Elite 4",
                Name: "Glacia",
                Image: "http://twitchplayspokemon.org/img/trainers/glacia.png",
                Time: "15d 0h 50m",
                Attempts: 5
            },
            {
                Group: "Elite 4",
                Name: "Drake",
                Image: "http://twitchplayspokemon.org/img/trainers/drake.png",
                Time: "17d 7h 39m",
                Attempts: 19
            },
            {
                Group: "Champion",
                Name: "Wallace",
                Image: "http://twitchplayspokemon.org/img/trainers/wallace.png",
                Time: "20d 21h 56m 0s",
                Attempts: 21
            }
        ]
    }
];
createChart(data);
