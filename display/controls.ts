/// <reference path="settings.ts" />
/// <reference path="../ref/pokedex-data.d.ts" />
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
    var container = document.createElement("a");
    container.href = "javascript:void(0)";
    container.appendChild(icon);
    if (action)
        container.onclick = action;
    return container;
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

function qsListMenu(icon: string, name: string, qsParam: string, options: string[], defaultOption = "All", prefix = "") {
    var menu = listControl(icon, name);
    var selected = QueryString[qsParam];
    QueryString[qsParam] = null;
    if (options.length > 30)
        menu.listElement.className = "very-long";
    else if (options.length > 20)
        menu.listElement.className = "long";
    options.forEach(i => {
        var option = document.createElement('li');
        var link = document.createElement('a');
        if (i) {
            link.innerText = link.innerHTML = prefix + (QueryString[qsParam] = i);
        }
        else
            link.innerText = link.innerHTML = defaultOption;
        link.href = window.location.href.split('?').shift() + SerializeQueryString();
        menu.listElement.appendChild(option);
        option.appendChild(link);
        if (selected == i)
            option.classList.add('selected');
    });
    QueryString[qsParam] = selected;
    return menu.controlElement;
}

function qsOptionsMenu(icon: string, name: string, options: { [key: string]: string }) {
    var menu = listControl(icon, name);
    Object.keys(options).forEach(i => {
        var option = document.createElement('li');
        var link = document.createElement('a');
        var selected = QueryString[i];
        QueryString[i] = selected ? null : "true";
        link.innerText = link.innerHTML = options[i];
        link.href = window.location.href.split('?').shift() + SerializeQueryString();
        menu.listElement.appendChild(option);
        option.appendChild(link);
        QueryString[i] = selected;
        if (selected)
            option.classList.add('selected');
    });
    return menu.controlElement;
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

function dayMenu(maxDaysParam: number | TPP.DisplayCollection[] = 40) {
    var maxDays = 0, currDay = parseInt(QueryString["day"] || "0") || 0;
    if (Array.isArray(maxDaysParam))
        maxDaysParam.forEach(c => c.Runs.forEach(r => maxDays = Math.max(maxDays, Math.ceil(TPP.Duration.parse(r.Duration, r.StartTime).TotalTime(c.Scale) + (c.Offset || 0) + currDay))));
    else
        maxDays = maxDaysParam;
    var menu = listControl("fa-calendar", "Day");
    var setting = document.createElement("li");
    var dropdown = document.createElement("select");
    dropdown.id = "day";
    for (var i = 0; i < maxDays + 1; i++) {
        var option = document.createElement("option");
        if (i)
            option.value = option.innerText = option.innerHTML = i.toFixed(0);
        else
            option.innerText = option.innerHTML = "All";
        if (currDay == i)
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

function regionMenu(regionsParam: string[] | TPP.Collection[]) {
    var regions: string[];
    if (regionsParam[0] && (<TPP.Collection>regionsParam[0]).Name) {
        var data: TPP.Collection[] = <TPP.Collection[]>regionsParam;
        regions = [];
        data.forEach(function (c) {
            c.Runs.forEach(function (r) {
                if (r.Unfinished) return;
                if (r.Region && regions.indexOf(r.Region) < 0) regions.push(r.Region);
                (r.AdditionalRegions || []).forEach(function (r) {
                    if (r.Name && regions.indexOf(r.Name) < 0) regions.push(r.Name);
                });
            });
        });
    }
    else {
        regions = <string[]>regionsParam;
    }
    return qsListMenu("fa-globe", "Region", "region", regions);
}

var pokedexGenerationsMenu = () => qsListMenu("fa-gamepad", "Generations", "g", Pokedex.GenSlice.map((g, i) => i ? i.toFixed(0) : null), "All", "Generation ");

var pokedexRegionsMenu = () => qsListMenu("fa-globe", "Region", "dex", Object.keys(Pokedex.Regional).map((m, i) => i ? m : null), "National");

var pokedexSortMenu = () => qsListMenu("fa-sort", "Sort", "sort", Object.keys(TPP.Pokedex.DexSorting).filter(k=>!isNaN(<any>k)).map(i => parseInt(i) ? TPP.Pokedex.DexSorting[i] : null), TPP.Pokedex.DexSorting[0]);

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