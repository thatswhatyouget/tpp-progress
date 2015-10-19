/// <reference path="tpp-structure.ts" />
class Duration {
	days: number;

	get TotalSeconds() {
		return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
	}

	get TotalDays() {
		return this.TotalSeconds / 60 / 60 / 24;
	}

	static parse(time: string) {
		var matches = /^\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i.exec(time);
		return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0);
	}

	constructor(days: string | number, public hours?: number, public minutes?: number, public seconds?: number) {
		if (typeof (days) === "string") {
			var parsed = Duration.parse(<string>days);
			this.days = parsed.days;
			this.hours = parsed.hours;
			this.minutes = parsed.minutes;
			this.seconds = parsed.seconds;
		}
		else this.days = <number>days;
	}
}

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

var globalPpd: number;

function createChart(data: TPP.Run[], label: string, ppd?: number) {
	globalPpd = ppd = globalPpd || ppd || window.innerWidth / days;
	var chart = document.createElement("div");
	chart.className = "progressChart";
	chart.setAttribute("data-label", label);
	setTimeout(function() { document.body.appendChild(chart); }, 1);
	var days = 0;
	data.forEach(run=> {
		var runLength = Duration.parse(run.Duration).TotalSeconds / 60 / 60 / 24;
		if (days < runLength) days = runLength;
		chart.appendChild(drawRun(run));
	});
	var ruler = document.createElement("div");
	ruler.className = "ruler";
	chart.insertBefore(ruler, chart.firstChild);
	for (var i = 0; i - .5 < days; i++) {
		var stop = document.createElement('div');
		ruler.appendChild(stop);
		stop.className = "stop";
	}
	setTimeout(() => applyScale(ppd), 10);
}

function drawRun(runInfo: TPP.Run) {
	var run = document.createElement("div");
	run.className = "run";
	run.setAttribute("data-time", runInfo.Duration);
	run.setAttribute("data-label", runInfo.RunName + ": " + runInfo.Duration);
	run.setAttribute("data-run", runInfo.RunName);
	run.style.backgroundColor = runInfo.ColorPrimary;
	run.style.borderColor = run.style.color = runInfo.ColorSecondary;
	run.appendChild(drawHost(runInfo));
	runInfo.Events.sort((e1, e2) => Duration.parse(e1.Time).TotalSeconds - Duration.parse(e2.Time).TotalSeconds).forEach(event=> run.appendChild(drawEvent(event)));
	return run;
}

function drawHost(runInfo: TPP.Run) {
	var host = drawEvent({
		Group: "host",
		Name: runInfo.HostName,
		Image: runInfo.HostImage,
		Time: ''
	});
	host.style.left = "0";
	return host;
}

function drawEvent(eventInfo: TPP.Event) {
	var event = document.createElement("div");
	var eventImg = document.createElement("img");
	event.appendChild(eventImg);
	event.className = "event " + eventInfo.Group.replace(/[^A-Z0-9]/i, '').toLowerCase();
	var label = eventInfo.Name;
	if (eventInfo.Time) label += "\n" + eventInfo.Time;
	if (eventInfo.Attempts) label += "\n(" + eventInfo.Attempts + " Attempt" + (eventInfo.Attempts > 1 ? "s" : "") + ")";
	eventImg.src = eventInfo.Image;
	eventImg.alt = label;
	event.setAttribute('data-label', label);
	event.setAttribute("data-time", eventInfo.Time);
	return event;
}

function applyScale(ppd: number) {
	ppd = Math.pow(2, Math.floor(Math.log(ppd || 64) / Math.log(2))); //floor to power of 2
	var $: (selector: string) => Array<HTMLElement> = selector => Array.prototype.slice.call(document.querySelectorAll(selector));
	var $find: (elements: Array<HTMLElement>, selector: string) => Array<Array<HTMLElement>> = (elements, selector) => elements.map(e=> Array.prototype.slice.call(e.querySelectorAll(selector)));
	$('.progressChart').forEach(chart=> {
		// chart.style.paddingLeft = chart.style.paddingRight = (ppd / 2) + "px";
		chart.style.backgroundImage = 'url("' + makeGrid(ppd) + '")';
	});
	$find($(".progressChart .ruler"), ".stop").forEach(clump=> clump.forEach((stop, i) => {
		stop.style.left = i * ppd + "px";
		// stop.style.width = ppd + "px";
	}));
	$(".progressChart .run").forEach(run=> run.getAttribute('data-time') && (run.style.width = Duration.parse(run.getAttribute('data-time')).TotalDays * ppd + "px"));
	$(".progressChart .run .event").forEach(event=> event.getAttribute('data-time') && (event.style.left = Duration.parse(event.getAttribute('data-time')).TotalDays * ppd + "px"));
}