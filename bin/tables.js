var RunSummary = (function () {
    function RunSummary(run) {
        this.RunName = run.RunName;
        this.StartDate = new Date(run.StartTime * 1000);
        this.Duration = Duration.parse(run.Duration, run.StartTime);
        this.HostName = run.HostName;
        this.Badges = run.Events.filter(function (e) { return e.Group == "Badges"; }).length;
        this.Pokedex = run.Events.filter(function (e) { return e.Group == "Pokemon" && e.Name != "Egg"; }).length;
    }
    return RunSummary;
}());
var PokedexSummary = (function () {
    function PokedexSummary(Run) {
        var _this = this;
        this.Run = Run;
        this.HallOfFame = [];
        if (Run.Events.filter(function (e) { return e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0); }).length) {
            this.OwnedDict = {};
            PokeList.forEach(function (p) { return _this.OwnedDict[p] = false; });
            Run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (p) {
                if (PokeList.indexOf(p.Name) >= 0)
                    _this.OwnedDict[p.Name] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime;
                else if (PokeList.indexOf(p.Class) >= 0)
                    _this.OwnedDict[p.Class] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime;
            });
            Run.Events.filter(function (e) { return e.Party && Duration.parse(e.Time, Run.StartTime).TotalSeconds >= 0; }).forEach(function (hof) { return hof.Party.forEach(function (p) {
                var mon = PokeList.indexOf(p.Pokemon) >= 0 ? p.Pokemon : PokeList.indexOf(p.Class) >= 0 ? p.Class : null;
                if (mon) {
                    _this.HallOfFame.push({
                        Pokemon: mon,
                        Ribbon: hof.Image,
                        RunName: Run.RunName,
                        HostName: Run.HostName,
                        Nickname: (p.Nickname || p.Pokemon).replace(/π/g, 'ᴾk').replace(/µ/g, 'ᴹn'),
                        UnmodifiedNick: p.Nickname,
                        PreviousNick: p.PreviousNick,
                        Time: Duration.parse(hof.Time, Run.StartTime).TotalSeconds + Run.StartTime
                    });
                }
            }); });
        }
    }
    return PokedexSummary;
}());
function generateRunSummary(tppData) {
    var $table = $("<table>").append($("<thead>").append($("<tr>").append(["Run", "Started", "Duration", "Host", "Badges Earned", "Species Caught"].map(function (th) { return $("<th>").text(th); }))));
    var $tbody = $('<tbody>').appendTo($table);
    tppData.forEach(function (c) { return c.Runs.forEach(function (r) {
        if (r.StartTime * 1000 > Date.now())
            return;
        var $row = $("<tr>");
        $tbody.append($row);
        $.when(r.Scraper ? Scrape(r) : r).then(function (r) { return new RunSummary(r); }).then(function (summary) { return $row.append([
            summary.RunName,
            summary.StartDate.toISOString(),
            summary.Duration.toString(c.Scale),
            summary.HostName,
            summary.Badges,
            summary.Pokedex || "-----"
        ].map(function (td) { return $("<td>").text(td); })).css({ 'background-color': r.ColorPrimary, 'border-color': r.ColorSecondary }); });
    }); });
    return $table;
}
function dexSummarize(tppData) {
    return $.when.apply($, Array.prototype.concat.apply([], tppData.map(function (c) { return c.Runs.map(function (r) { return $.when(r.Scraper && r.Scraper.pokemon ? Scrape(r) : r).then(function (r) { return new PokedexSummary(r); }); }); }))).then(function () {
        var summaries = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            summaries[_i] = arguments[_i];
        }
        return summaries.filter(function (s) { return !!s.OwnedDict; });
    });
}
function generatePokedexSummary(tppData) {
    var $table = $("<table>");
    dexSummarize(tppData).then(function (summaries) {
        $table.append($("<thead>").append($("<tr>").append($("<th>").text("Pokemon")).append(summaries.map(function (s) { return $("<th>").text(s.Run.RunName).css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary }); }))));
        $('<tbody>').appendTo($table).append(PokeList.map(function (p) { return $("<tr>").append($("<th>").text(p)).append(summaries.map(function (s) { return $("<td>").text(s.OwnedDict[p] ? "X" : "").css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary, 'text-align': "center" }); })); }));
    });
    return $table;
}
function generateGlobalDex(tppData) {
    var element = $("<div>").append("<i class='fa fa-spinner fa-pulse'>");
    var shouldShowPokemon = function (p, i) {
        return true;
    };
    var skipCheckOwnership = QueryString["justmon"];
    var hofOnly = !!QueryString["hofonly"];
    var ownedOnly = !!QueryString["owned"];
    if (QueryString["nowifi"]) {
        tppData.forEach(function (c) { return c.Runs.forEach(function (r) { return r.Events = r.Events.filter(function (e) { return e.Class != "WifiTrade"; }); }); });
    }
    if (QueryString["ms"]) {
        $('#pokedex').addClass("ms");
    }
    if (QueryString["only"]) {
        tppData = tppData.filter(function (c) { return QueryString["only"].split(',').filter(function (f) { return c.Name.indexOf(f.trim()) >= 0; }).length > 0; });
    }
    if (QueryString["pokemon"]) {
        var pokemonList = QueryString["pokemon"].split(',').map(function (p) { return p.trim().toLowerCase(); });
        shouldShowPokemon = function (p, i) {
            return !pokemonList.length ||
                pokemonList.indexOf(p.toLowerCase()) >= 0 ||
                pokemonList.indexOf(i.toString()) >= 0 ||
                !!pokemonList.filter(function (o) { return parseInt(o) > 0 && parseInt(o) == i; }).length;
        };
    }
    if (QueryString["run"]) {
        tppData = tppData.map(function (c) {
            c.Runs = c.Runs.filter(function (r) { return QueryString["run"].split(',').filter(function (f) { return r.RunName.indexOf(f.trim()) >= 0; }).length > 0; });
            return c;
        }).filter(function (c) { return c.Runs.length > 0; });
    }
    if (QueryString["g"]) {
        PokeList = PokeList.slice(0, (GenSlice[parseInt(QueryString["g"] || "0")] || PokeList.length) + 1);
    }
    if (QueryString["dex"]) {
        var dexName = Array.prototype.concat.apply(['National'], Object.keys(Regional).filter(function (k) { return k.toLowerCase() == QueryString["dex"].toLowerCase(); })).pop();
        PokeList = Regional[dexName].map(function (i) { return typeof i === "string" ? i : PokeList[i]; });
        $('#dexName').text(dexName + (dexName.toLowerCase().indexOf('book') + dexName.indexOf('dex') > 0 ? "" : " Pokédex"));
        $('#pokedex').addClass(specialClasses[dexName]);
        if (runRestrictions[dexName]) {
            tppData = tppData.map(function (c) {
                c.Runs = c.Runs.filter(function (r) { return runRestrictions[dexName].toLowerCase().split(',').filter(function (f) { return r.RunName.toLowerCase().indexOf(f.trim()) >= 0; }).length > 0; });
                return c;
            }).filter(function (c) { return c.Runs.length > 0; });
        }
    }
    if ("Alphabetical" == QueryString["sort"]) {
        PokeList.sort();
    }
    if ("First Owned" == QueryString["sort"]) {
        dexSummarize(tppData).then(function (summaries) {
            var firstTimes = {};
            PokeList.forEach(function (p) { return firstTimes[p] = false; });
            summaries.forEach(function (summary) {
                if (summary.OwnedDict) {
                    Object.keys(summary.OwnedDict).forEach(function (p) {
                        var newTime = summary.OwnedDict[p];
                        if (newTime) {
                            if (firstTimes[p]) {
                                if (firstTimes[p] > newTime) {
                                    firstTimes[p] = newTime;
                                }
                            }
                            else {
                                firstTimes[p] = newTime;
                            }
                        }
                    });
                }
            });
            PokeList.sort(function (a, b) {
                var a2 = firstTimes[a];
                var b2 = firstTimes[b];
                if (a2) {
                    if (b2) {
                        return a2 - b2;
                    }
                    else {
                        return -1;
                    }
                }
                else {
                    if (b2) {
                        return 1;
                    }
                    else {
                        return 0;
                    }
                }
            });
        });
    }
    dexSummarize(tppData).then(function (summaries) {
        summaries = summaries.sort(function (s1, s2) { return s1.Run.StartTime - s2.Run.StartTime; });
        var hofData = summaries.map(function (s) { return s.HallOfFame; }).reduce(function (a, b) { return a.concat(b); }).sort(function (h1, h2) { return h1.Time - h2.Time; });
        hofData = hofData.filter(function (c) { return hofData.filter(function (i) { return i.HostName == c.HostName && i.Pokemon == c.Pokemon && (i.Nickname == c.Nickname || c.PreviousNick == i.UnmodifiedNick); }).shift() == c; });
        var fullList = {};
        element.find('*').remove();
        element.append(PokeList.map(function (p, i) {
            if (!p)
                return;
            var idx = i.toString(), index = ('000' + idx).substring(idx.length);
            var pokeName = cleanString(p) || "unidentified";
            var $entry = $("<div class='dexEntry'>")
                .append("<h3>" + index + "</h3>")
                .append("<h4>" + p + "</h4>")
                .append("<div class='pokesprite " + pokeName + "'><img src='img/missingno.png'></div>");
            var ownedBy = [];
            var bgColor;
            if (skipCheckOwnership) {
                $entry.addClass('owned');
            }
            else {
                var hofs = hofData.filter(function (mon) { return mon.Pokemon == p; });
                if (hofs.length) {
                    var $hofRibbons = $("<div>").addClass("hofRibbon").appendTo($entry);
                    hofs.forEach(function (mon) {
                        var title = mon.HostName + "'s " + mon.Nickname + " (" + mon.RunName + ")";
                        $hofRibbons.append($("<img>").attr('src', mon.Ribbon).attr("alt", title).attr('title', title));
                    });
                }
                else if (hofOnly) {
                    return $entry.hide();
                }
                summaries.forEach(function (s) {
                    var addHost = ownedBy.push;
                    if (s.OwnedDict[p]) {
                        $entry.addClass('owned');
                        fullList[p] = fullList[p] || s.OwnedDict[p];
                        bgColor = bgColor || s.Run.ColorPrimary;
                        if (s.OwnedDict[p] < fullList[p]) {
                            fullList[p] = s.OwnedDict[p];
                            bgColor = s.Run.ColorPrimary;
                            addHost = ownedBy.unshift;
                        }
                        if (!s.Run.Revisit || ownedBy.indexOf(s.Run.HostName + " (" + s.Run.Revisit.Run + ")") < 0)
                            addHost.call(ownedBy, s.Run.HostName + " (" + s.Run.RunName + ")");
                    }
                });
            }
            if (ownedBy.length)
                $entry.attr('title', 'Owned by:\n' + ownedBy.join('\n'));
            else if (ownedOnly)
                $entry.hide();
            else if (!skipCheckOwnership)
                $entry.attr('title', "Didn't Catch");
            if (bgColor)
                $entry.css('background-color', bgColor);
            if (p == "MissingNo.") {
                if (fullList[p])
                    delete fullList[p];
                else
                    $entry.hide();
            }
            if (!shouldShowPokemon(p, i)) {
                $entry.hide();
            }
            return $entry;
        }));
        if (!skipCheckOwnership) {
            var numOwned = Object.keys(fullList).filter(shouldShowPokemon).length;
            var numTotal = PokeList.filter(function (p, i) { return !!p && p != "MissingNo." && shouldShowPokemon(p, i); }).length;
            var percent = (numOwned / numTotal * 100).toFixed(1);
            element.prepend("<h2 class='total'>Owned: <span>" + numOwned + "/" + numTotal + " (" + percent + "%)</span></div>");
        }
        else {
            element.prepend("<br>");
        }
    });
    return element;
}
var PokeList = Pokedex.PokeList;
var GenSlice = Pokedex.GenSlice;
var Regional = Pokedex.Regional;
var specialClasses = Pokedex.specialClasses;
var runRestrictions = Pokedex.runRestrictions;
