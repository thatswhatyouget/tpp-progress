/// <reference path="settings.ts" />
/// <reference path="../models/collection.ts" />
/// <reference path="../models/duration.ts" />
/// <reference path="querystring.ts" />


var groupList: HTMLUListElement;
var groups: { [key: string]: string };
function updateGroups() {
    if (groups && groupList) {
        var extant = $find([groupList], "input").pop().map(i => i.id.split('-').pop()) || [];
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
    }
}

function icon(ico: string, title: string, action?: () => void) {
    var icon = document.createElement("i");
    icon.classList.add("fa", ico);
    icon.title = title;
    if (action)
        icon.onclick = action;
    return icon;
}

function listControl(ico: string, name: string) {
    var control = document.createElement("li");
    control.appendChild(icon(ico, name));
    var list = document.createElement("ul");
    control.appendChild(list);
    return {
        controlElement: control,
        listElement: list
    };
}

var zoomIn = zoomIn || function () { }, zoomOut = zoomOut || zoomIn;
function zoomButtons() {
    var zoomInButton = document.createElement("li");
    var zoomOutButton = document.createElement("li");
    zoomInButton.appendChild(icon("fa-search-plus", "Zoom In", () => zoomIn()));
    zoomOutButton.appendChild(icon("fa-search-minus", "Zoom Out", () => zoomOut()));
    return [zoomInButton, zoomOutButton];
}

function settingsMenu() {
    var menu = listControl("fa-gear", "Settings");
    Object.keys(baseSettings).forEach(s => {
        var setting = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = s;
        checkbox.checked = settings[s];
        checkbox.onchange = () => toggleSetting(checkbox);
        setting.appendChild(checkbox);
        var label = document.createElement("label");
        label.htmlFor = checkbox.id;
        label.innerText = label.innerHTML = baseSettings[s].displayName;
        setting.appendChild(label);
        menu.listElement.appendChild(setting);
    });
    menu.controlElement.classList.add("settings");
    return menu.controlElement;
}

function groupsMenu() {
    var menu = listControl("fa-eye", "Groups");
    groupList = menu.listElement;
    menu.controlElement.classList.add("groups");
    updateGroups();
    return menu.controlElement;
}

function dayMenu(maxDaysParam: number | TPP.Collection[] = 40) {
    var maxDays = 0;
    if (Array.isArray(maxDaysParam))
        maxDaysParam.forEach(c => c.Runs.forEach(r => maxDays = Math.max(maxDays, TPP.Duration.parse(r.Duration, r.StartTime).TotalTime(c.Scale))));
    else
        maxDays = maxDaysParam;
    var menu = listControl("fa-calendar", "Day");
    var setting = document.createElement("li");
    var dropdown = document.createElement("select");
    dropdown.id = "day";
    for (var i = 0; i < maxDays; i++) {
        var option = document.createElement("option");
        if (i)
            option.value = option.innerText = option.innerHTML = i.toFixed(0);
        else
            option.innerText = option.innerHTML = "All";
        if (QueryString["day"] == i.toFixed(0))
            option.selected = true;
        dropdown.appendChild(option);
    }
    var label = document.createElement("label");
    label.htmlFor = dropdown.id;
    label.innerHTML = "Day:&nbsp;";
    setting.appendChild(label);
    setting.appendChild(dropdown);
    menu.listElement.appendChild(setting);
    dropdown.onchange = () => {
        QueryString["day"] = dropdown.value == "All" ? null : dropdown.value;
        window.location.href = window.location.href.split('?').shift() + SerializeQueryString();
    };
    return menu.controlElement;
}

var getTwitchVideos = getTwitchVideos || function () { };
function twitchButton() {
    var button = document.createElement("li");
    button.appendChild(icon("fa-twitch", "Twitch Videos", () => getTwitchVideos()));
    return button;
}

function defaultControls(...extraControls: HTMLLIElement[]) {
    var controls = zoomButtons();
    controls.push(settingsMenu());
    controls.push(groupsMenu());
    extraControls.forEach(c => controls.push(c));
    controls.push(twitchButton());
    return controls;
}

function drawControls(controls: HTMLLIElement[], container?: HTMLElement) {
    container = container || (document.currentScript || (<HTMLScriptElement[]>Array.prototype.concat.apply([], document.getElementsByTagName("script"))).pop()).parentElement;
    controls.forEach(c => {
        container.appendChild(c)
        container.appendChild(document.createTextNode("\n"));
    });
}