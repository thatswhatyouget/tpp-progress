var fakeQuery = function (selector) { return Array.prototype.slice.call(document.querySelectorAll(selector)); };
var $find = function (elements, selector) { return elements.map(function (e) { return e ? Array.prototype.slice.call(e.querySelectorAll(selector)) : []; }); };
var updatePage = updatePage || function () { };
var reprocessCharts = reprocessCharts || function () { };
var baseSettings = {
    "explode": {
        displayName: "Stagger Clumps",
        defaultValue: true
    },
    "hideUnfinished": {
        displayName: "Hide Runs Left Unfinished",
        defaultValue: true,
        extraAction: reprocessCharts
    }
};
var settings = JSON.parse(localStorage.getItem("settings") || '{}');
Object.keys(baseSettings).forEach(function (s) { return settings[s] = typeof (settings[s]) === "boolean" ? settings[s] : baseSettings[s].defaultValue; });
var showGroups = JSON.parse(localStorage.getItem("showGroups") || "{}");
function toggleSetting(element) {
    var setting = element.id;
    settings[setting] = element.checked;
    localStorage.setItem("settings", JSON.stringify(settings));
    $.when((baseSettings[setting].extraAction || function () { })()).always(updatePage);
}
function toggleGroup(element) {
    var group = element.id.split('-').pop(), visible = element.checked;
    showGroups[group] = visible;
    localStorage.setItem("showGroups", JSON.stringify(showGroups));
    $('.' + group.replace(/[^A-Z0-9]/ig, '')).toggleClass("hidden", !visible);
    updatePage();
}
var TPP;
(function (TPP) {
    var Scale;
    (function (Scale) {
        Scale[Scale["Weeks"] = 0] = "Weeks";
        Scale[Scale["Days"] = 1] = "Days";
        Scale[Scale["Hours"] = 2] = "Hours";
        Scale[Scale["Minutes"] = 3] = "Minutes";
    })(Scale = TPP.Scale || (TPP.Scale = {}));
})(TPP || (TPP = {}));
var Twitch;
(function (Twitch) {
    var offsetExp = /offset=(\d*)/i;
    var clientId = 'l6ejgsj101ymei0f6v4a6nkjw9upml9';
    var Video = (function () {
        function Video(recorded_at, length, url, source) {
            this.recorded_at = recorded_at;
            this.length = length;
            this.url = url;
            this.source = source;
            this.StartTime = new Date(recorded_at).valueOf() / 1000;
            this.EndTime = this.StartTime + length;
        }
        return Video;
    }());
    Twitch.Video = Video;
    function GetVideos(channel, getAll) {
        if (getAll === void 0) { getAll = true; }
        var videos = [], getAllVideos = function (r) {
            if (r.videos.length) {
                videos = videos.concat.apply(videos, r.videos.map(function (v) { return new Video(v.recorded_at, v.length, v.url, "Twitch"); }));
                if (getAll && r._total) {
                    return callApi(r._links.next).then(getAllVideos);
                }
            }
            return videos;
        };
        return $.when(callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?broadcasts=true&limit=100").then(getAllVideos), callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?limit=100").then(getAllVideos));
    }
    Twitch.GetVideos = GetVideos;
    function callApi(url) {
        return $.get(url + (url.indexOf('?') > 0 ? '&' : '?') + "client_id=" + clientId);
    }
})(Twitch || (Twitch = {}));
var TPP;
(function (TPP) {
    var Duration = (function () {
        function Duration(weeks, days, hours, minutes, seconds) {
            if (days === void 0) { days = 0; }
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
            if (typeof (weeks) === "string") {
                var parsed = Duration.parse(weeks);
                this.days = parsed.days;
                this.hours = parsed.hours;
                this.minutes = parsed.minutes;
                this.seconds = parsed.seconds;
            }
            else
                this.days += weeks * 7;
        }
        Object.defineProperty(Duration.prototype, "TotalSeconds", {
            get: function () {
                return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
            },
            set: function (value) {
                this.seconds = Math.floor(value % 60);
                this.minutes = Math.floor(value / 60) % 60;
                this.hours = Math.floor(value / 60 / 60) % 24;
                this.days = Math.floor(value / 60 / 60 / 24);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalHours", {
            get: function () {
                return this.TotalSeconds / 60 / 60;
            },
            set: function (value) {
                this.TotalSeconds = value * 60 * 60;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalDays", {
            get: function () {
                return this.TotalHours / 24;
            },
            set: function (value) {
                this.TotalHours = value * 24;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalWeeks", {
            get: function () {
                return this.TotalDays / 7;
            },
            set: function (value) {
                this.TotalDays = value * 7;
            },
            enumerable: true,
            configurable: true
        });
        Duration.prototype.TotalTime = function (scale) {
            switch (scale) {
                case TPP.Scale.Weeks:
                    return this.TotalWeeks;
                case TPP.Scale.Hours:
                    return this.TotalHours / 4;
                case TPP.Scale.Minutes:
                    return this.TotalHours * 6;
            }
            return this.TotalDays;
        };
        Duration.prototype.toString = function (scale) {
            if (scale === void 0) { scale = TPP.Scale.Days; }
            return (scale == TPP.Scale.Minutes ? (this.days * 24 + this.hours) * 60 + this.minutes : (scale == TPP.Scale.Hours ? this.days * 24 + this.hours : (scale == TPP.Scale.Weeks ? Math.floor(this.days / 7) + "w " + (this.days % 7) : this.days) + "d " + this.hours) + "h " + this.minutes) + "m" + (this.seconds ? " " + this.seconds + "s" : "");
        };
        Duration.parse = function (time, baseTime) {
            var retval = new Duration(0, 0, 0, 0);
            if (time) {
                if (this.canParse(time)) {
                    try {
                        var matches = this.parseReg.exec(time);
                        return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0, parseInt(matches[5]) || 0);
                    }
                    catch (e) { }
                }
                if (baseTime) {
                    retval.TotalSeconds = (Date.parse(time) / 1000) - baseTime;
                }
            }
            return retval;
        };
        Duration.canParse = function (time) {
            return this.parseReg.test(time);
        };
        return Duration;
    }());
    Duration.parseReg = /^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i;
    TPP.Duration = Duration;
})(TPP || (TPP = {}));
var QueryString = (function () {
    var retobj = {};
    window.location.search.substring(1).split("&").forEach(function (vars) {
        if (vars.indexOf("=") > 0) {
            var pair = vars.split("=");
            retobj[pair.shift()] = decodeURI(pair.join('='));
        }
        else
            retobj[vars] = "true";
    });
    return retobj;
})();
function SerializeQueryString() {
    if (Object.keys(QueryString).filter(function (k) { return QueryString[k]; }).length)
        return "?" + Object.keys(QueryString).filter(function (k) { return QueryString[k]; }).map(function (k) { return k + (QueryString[k] == "true" ? "" : "=" + encodeURI(QueryString[k])); }).join('&');
    return "";
}
var TPP;
(function (TPP) {
    var Pokedex;
    (function (Pokedex) {
        var RunSummaryBase = (function () {
            function RunSummaryBase() {
                this.OwnedDict = {};
                this.HallOfFame = [];
            }
            return RunSummaryBase;
        }());
        Pokedex.RunSummaryBase = RunSummaryBase;
        var CollectionSummaryBase = (function () {
            function CollectionSummaryBase() {
                this.Summary = [];
                this.HallOfFame = [];
            }
            return CollectionSummaryBase;
        }());
        Pokedex.CollectionSummaryBase = CollectionSummaryBase;
        var DexEntryBase = (function () {
            function DexEntryBase() {
                this.Owners = [];
                this.HallOfFame = [];
            }
            Object.defineProperty(DexEntryBase.prototype, "IsOwned", {
                get: function () {
                    return this.Owners && this.Owners.length > 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DexEntryBase.prototype, "FirstOwnedRun", {
                get: function () {
                    return this.IsOwned ? this.Owners[0].Run : {};
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DexEntryBase.prototype, "FirstCaughtDate", {
                get: function () {
                    return this.IsOwned ? this.Owners[0].CaughtOn : false;
                },
                enumerable: true,
                configurable: true
            });
            return DexEntryBase;
        }());
        Pokedex.DexEntryBase = DexEntryBase;
        var DexSorting;
        (function (DexSorting) {
            DexSorting[DexSorting["Pok\u00E9dex Number"] = 0] = "Pok\u00E9dex Number";
            DexSorting[DexSorting["Alphabetical"] = 1] = "Alphabetical";
            DexSorting[DexSorting["First Owned"] = 2] = "First Owned";
        })(DexSorting = Pokedex.DexSorting || (Pokedex.DexSorting = {}));
        var GlobalDexBase = (function () {
            function GlobalDexBase() {
                this.Entries = [];
            }
            Object.defineProperty(GlobalDexBase.prototype, "NoGlitchMon", {
                get: function () {
                    return this.Entries.filter(function (e) { return !(e.Number == 0 && e.Pokemon == "MissingNo."); });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "TotalOwned", {
                get: function () {
                    return this.NoGlitchMon.filter(function (e) { return e.IsOwned; }).length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "TotalInDex", {
                get: function () {
                    return this.NoGlitchMon.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "OwnedPercentage", {
                get: function () {
                    return (this.TotalOwned / this.TotalInDex) * 100;
                },
                enumerable: true,
                configurable: true
            });
            GlobalDexBase.prototype.SortDex = function (sortBy) {
                if (sortBy === void 0) { sortBy = 0; }
                switch (sortBy) {
                    case 0:
                    case DexSorting[0]:
                    default:
                        this.Entries = this.Entries.sort(function (e1, e2) { return e1.Number - e2.Number; });
                        break;
                    case 1:
                    case DexSorting[1]:
                        this.Entries = this.Entries.sort(function (e1, e2) { return e1.Pokemon.localeCompare(e2.Pokemon); });
                        break;
                    case 2:
                    case DexSorting[2]:
                        this.Entries = this.Entries.sort(function (e1, e2) { return (e1.FirstCaughtDate || Date.now()) - (e2.FirstCaughtDate || Date.now()); });
                        break;
                }
            };
            GlobalDexBase.prototype.FilterDexToOwned = function () {
                this.Entries = this.Entries.filter(function (e) { return e.IsOwned; });
            };
            GlobalDexBase.prototype.FilterDexToUnowned = function () {
                this.Entries = this.Entries.filter(function (e) { return !e.IsOwned; });
            };
            GlobalDexBase.prototype.FilterDexRuns = function (runList) {
                var runs = runList.map(function (r) { return typeof r === "string" ? r.toLowerCase().trim() : r; });
                this.Entries = this.Entries.filter(function (e) { return e.Owners.filter(function (o) { return runs.filter(function (r) {
                    if (typeof r === "string")
                        return o.Run.RunName.toLowerCase().indexOf(r) >= 0;
                    return o.Run.RunName == r.RunName;
                }).length > 0; }).length > 0; });
            };
            GlobalDexBase.prototype.FilterDexPokemon = function (pokeList) {
                pokeList = pokeList.map(function (p) { return p.toLowerCase().trim(); });
                this.Entries = this.Entries.filter(function (e) { return pokeList.indexOf(e.Pokemon.toLowerCase()) >= 0; });
            };
            GlobalDexBase.prototype.FilterDexToHallOfFame = function () {
                this.Entries = this.Entries.filter(function (e) { return e.HallOfFame.length > 0; });
            };
            return GlobalDexBase;
        }());
        Pokedex.GlobalDexBase = GlobalDexBase;
    })(Pokedex = TPP.Pokedex || (TPP.Pokedex = {}));
})(TPP || (TPP = {}));
var groupList;
var groups;
function updateGroups() {
    if (groups && groupList) {
        var extant = $find([groupList], "input").pop().map(function (i) { return i.id.split('-').pop(); }) || [];
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
}
function icon(ico, title, action) {
    var icon = document.createElement("i");
    icon.classList.add("fa", ico);
    icon.title = title;
    if (action)
        icon.onclick = action;
    return icon;
}
function listControl(ico, name) {
    var control = document.createElement("li");
    control.appendChild(icon(ico, name));
    var list = document.createElement("ul");
    control.appendChild(list);
    return {
        controlElement: control,
        listElement: list
    };
}
function qsListMenu(icon, name, qsParam, options, defaultOption, prefix) {
    if (defaultOption === void 0) { defaultOption = "All"; }
    if (prefix === void 0) { prefix = ""; }
    var menu = listControl(icon, name);
    var selected = QueryString[qsParam];
    QueryString[qsParam] = null;
    options.forEach(function (i) {
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
function qsOptionsMenu(icon, name, options) {
    var menu = listControl(icon, name);
    Object.keys(options).forEach(function (i) {
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
    zoomInButton.appendChild(icon("fa-search-plus", "Zoom In", function () { return zoomIn(); }));
    zoomOutButton.appendChild(icon("fa-search-minus", "Zoom Out", function () { return zoomOut(); }));
    return [zoomInButton, zoomOutButton];
}
function settingsMenu() {
    var menu = listControl("fa-gear", "Settings");
    Object.keys(baseSettings).forEach(function (s) {
        var setting = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.id = s;
        checkbox.checked = settings[s];
        checkbox.onchange = function () { return toggleSetting(checkbox); };
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
function dayMenu(maxDaysParam) {
    if (maxDaysParam === void 0) { maxDaysParam = 40; }
    var maxDays = 0, currDay = parseInt(QueryString["day"] || "0") || 0;
    if (Array.isArray(maxDaysParam))
        maxDaysParam.forEach(function (c) { return c.Runs.forEach(function (r) { return maxDays = Math.max(maxDays, Math.ceil(TPP.Duration.parse(r.Duration, r.StartTime).TotalTime(c.Scale) + (c.Offset || 0) + currDay)); }); });
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
    dropdown.onchange = function () {
        QueryString["day"] = dropdown.value == "All" ? null : dropdown.value;
        window.location.href = window.location.href.split('?').shift() + SerializeQueryString();
    };
    return menu.controlElement;
}
function regionMenu(regionsParam) {
    var regions;
    if (regionsParam[0] && regionsParam[0].Name) {
        var data = regionsParam;
        regions = [];
        data.forEach(function (c) {
            c.Runs.forEach(function (r) {
                if (r.Unfinished)
                    return;
                if (r.Region && regions.indexOf(r.Region) < 0)
                    regions.push(r.Region);
                (r.AdditionalRegions || []).forEach(function (r) {
                    if (r.Name && regions.indexOf(r.Name) < 0)
                        regions.push(r.Name);
                });
            });
        });
    }
    else {
        regions = regionsParam;
    }
    return qsListMenu("fa-globe", "Region", "region", regions);
}
var pokedexGenerationsMenu = function () { return qsListMenu("fa-gamepad", "Generations", "g", Pokedex.GenSlice.map(function (g, i) { return i ? i.toFixed(0) : null; }), "All", "Generation "); };
var pokedexRegionsMenu = function () { return qsListMenu("fa-globe", "Region", "dex", Object.keys(Pokedex.Regional).map(function (m, i) { return i ? m : null; }), "National"); };
var pokedexSortMenu = function () { return qsListMenu("fa-sort", "Sort", "sort", Object.keys(TPP.Pokedex.DexSorting).filter(function (k) { return !isNaN(k); }).map(function (i) { return parseInt(i) ? TPP.Pokedex.DexSorting[i] : null; }), TPP.Pokedex.DexSorting[0]); };
var getTwitchVideos = getTwitchVideos || function () { };
function twitchButton() {
    var button = document.createElement("li");
    button.appendChild(icon("fa-twitch", "Twitch Videos", function () { return getTwitchVideos(); }));
    return button;
}
function defaultControls() {
    var extraControls = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        extraControls[_i] = arguments[_i];
    }
    var controls = zoomButtons();
    controls.push(settingsMenu());
    controls.push(groupsMenu());
    extraControls.forEach(function (c) { return controls.push(c); });
    controls.push(twitchButton());
    return controls;
}
function drawControls(controls, container) {
    container = container || (document.currentScript || Array.prototype.concat.apply([], document.getElementsByTagName("script")).pop()).parentElement;
    controls.forEach(function (c) {
        container.appendChild(c);
        container.appendChild(document.createTextNode("\n"));
    });
}
