/// <reference path="tpp-progress.ts" />
/// <reference path="../ref/pokedex-data.d.ts" />


class RunSummary {
    public RunName: string;
    public StartDate: Date;
    public Duration: Duration;
    public HostName: string;
    public Badges: number;
    public Pokedex: number;

    constructor(run: TPP.Run) {
        this.RunName = run.RunName;
        this.StartDate = new Date(run.StartTime * 1000);
        this.Duration = Duration.parse(run.Duration, run.StartTime);
        this.HostName = run.HostName;
        this.Badges = run.Events.filter(e => e.Group == "Badges").length;
        this.Pokedex = run.Events.filter(e => e.Group == "Pokemon" && e.Name != "Egg").length;
    }
}

interface HofInfo {
    Pokemon: string;
    Ribbon: string;
    RunName: string;
    HostName: string;
    Nickname: string;
    UnmodifiedNick: string;
    PreviousNick: string;
    Time: number;
}

class PokedexSummary {
    public OwnedDict: { [key: string]: false | number };
    public HallOfFame: HofInfo[] = [];
    constructor(public Run: TPP.Run) {
        if (Run.Events.filter(e => e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0)).length) {
            this.OwnedDict = {};
            PokeList.forEach(p => this.OwnedDict[p] = false);
            Run.Events.filter(e => e.Group == "Pokemon").forEach(p => {
                if (PokeList.indexOf(p.Name) >= 0)
                    this.OwnedDict[p.Name] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
                else if (PokeList.indexOf(p.Class) >= 0)    //catch Pokemon with unusual names
                    this.OwnedDict[p.Class] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
            });
            Run.Events.filter(e => (<TPP.HallOfFame>e).Party && Duration.parse(e.Time, Run.StartTime).TotalSeconds >= 0).forEach(hof => (<TPP.HallOfFame>hof).Party.forEach(p => {
                var mon = PokeList.indexOf(p.Pokemon) >= 0 ? p.Pokemon : PokeList.indexOf(p.Class) >= 0 ? p.Class : null;
                if (mon) {
                    this.HallOfFame.push({
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
            }));
        }
    }
}

function generateRunSummary(tppData: TPP.Collection[]) {
    var $table = $("<table>").append($("<thead>").append($("<tr>").append(["Run", "Started", "Duration", "Host", "Badges Earned", "Species Caught"].map(th => $("<th>").text(th)))));
    var $tbody = $('<tbody>').appendTo($table);
    tppData.forEach(c => c.Runs.forEach(r => {
        if (r.StartTime * 1000 > Date.now()) return;
        var $row = $("<tr>");
        $tbody.append($row);
        $.when(r.Scraper ? Scrape(r) : r).then(r => new RunSummary(r)).then(summary => $row.append([
            summary.RunName,
            summary.StartDate.toISOString(),
            summary.Duration.toString(c.Scale),
            summary.HostName,
            summary.Badges,
            summary.Pokedex || "-----"
        ].map(td => $("<td>").text(td))).css({ 'background-color': r.ColorPrimary, 'border-color': r.ColorSecondary }))
    }));
    return $table;
}


function dexSummarize(tppData: TPP.Collection[]): JQueryPromise<PokedexSummary[]> {
    return $.when.apply($,
        Array.prototype.concat.apply([],
            tppData.map(c => c.Runs.map(r => $.when(r.Scraper && r.Scraper.pokemon ? Scrape(r) : r).then(r => new PokedexSummary(r))))
        )
    ).then((...summaries: PokedexSummary[]) => summaries.filter(s => !!s.OwnedDict));
}

function generatePokedexSummary(tppData: TPP.Collection[]) {
    var $table = $("<table>");
    dexSummarize(tppData).then(summaries => {
        $table.append($("<thead>").append($("<tr>").append($("<th>").text("Pokemon")).append(summaries.map(s => $("<th>").text(s.Run.RunName).css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary })))));
        $('<tbody>').appendTo($table).append(PokeList.map(p => $("<tr>").append($("<th>").text(p)).append(summaries.map(s => $("<td>").text(s.OwnedDict[p] ? "X" : "").css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary, 'text-align': "center" })))));
    });
    return $table;
}

function generateGlobalDex(tppData: TPP.Collection[]) {
    var element = $("<div>").append("<i class='fa fa-spinner fa-pulse'>");
    var shouldShowPokemon = function (p, i) {
        return true;
    };
    var skipCheckOwnership = QueryString["justmon"];
    var hofOnly = !!QueryString["hofonly"];
    var ownedOnly = !!QueryString["owned"];
    if (QueryString["nowifi"]) {
        tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.filter(e => e.Class != "WifiTrade")));
    }
    if (QueryString["ms"]) {
        $('#pokedex').addClass("ms");
    }
    if (QueryString["only"]) {
        tppData = tppData.filter(c => QueryString["only"].split(',').filter(f => c.Name.indexOf(f.trim()) >= 0).length > 0);
    }
    if (QueryString["pokemon"]) {
        var pokemonList = QueryString["pokemon"].split(',').map(p => p.trim().toLowerCase());
        shouldShowPokemon = function (p, i) {
            return !pokemonList.length ||
                pokemonList.indexOf(p.toLowerCase()) >= 0 ||
                pokemonList.indexOf(i.toString()) >= 0 ||
                !!pokemonList.filter(o => parseInt(o) > 0 && parseInt(o) == i).length;
        }
    }
    if (QueryString["run"]) {
        tppData = tppData.map(c => {
            c.Runs = c.Runs.filter(r => QueryString["run"].split(',').filter(f => r.RunName.indexOf(f.trim()) >= 0).length > 0);
            c.Runs.forEach(r => $('#pokedex').addClass(cleanString(r.RunName)));
            return c;
        }).filter(c => c.Runs.length > 0);
    }
    if (QueryString["g"]) {
        PokeList = PokeList.slice(0, (GenSlice[parseInt(QueryString["g"] || "0")] || PokeList.length) + 1);
    }
    if (QueryString["dex"]) {
        var dexName: string = Array.prototype.concat.apply(
            ['National'],
            Object.keys(Regional).filter(k => k.toLowerCase() == QueryString["dex"].toLowerCase())
        ).pop();
        PokeList = Regional[dexName].map(i => typeof i === "string" ? i : PokeList[i]);
        $('#dexName').text(dexName + (dexName.toLowerCase().indexOf('book') + dexName.indexOf('dex') > 0 ? "" : " Pokédex"));
        $('#pokedex').addClass(specialClasses[dexName]);
        if (runRestrictions[dexName]) {
            tppData = tppData.map(c => {
                c.Runs = c.Runs.filter(r => runRestrictions[dexName].toLowerCase().split(',').filter(f => r.RunName.toLowerCase().indexOf(f.trim()) >= 0).length > 0);
                return c;
            }).filter(c => c.Runs.length > 0);
        }
    }
    if ("Alphabetical" == QueryString["sort"]) {
        PokeList.sort();
    }
    if ("First Owned" == QueryString["sort"]) {
        dexSummarize(tppData).then(summaries => {
            let firstTimes: { [key: string]: false | number } = {};
            PokeList.forEach(p => firstTimes[p] = false);
            // Put the earliest owned time across runs into `firstTimes`
            summaries.forEach(summary => {
                if (summary.OwnedDict) {
                    Object.keys(summary.OwnedDict).forEach(p => {
                        // Apparently, type inference can't figure out that `summary.OwnedDict[p]` is not false
                        // inside the if statement, even though it can figure out that `newTime` is not false
                        let newTime = summary.OwnedDict[p];
                        if (newTime) {
                            if (firstTimes[p]) {
                            	if (firstTimes[p] > newTime) {
                                    firstTimes[p] = newTime;
                                }
                            } else {
                            	firstTimes[p] = newTime;
                            }
                        }
                    })
                }
            });
            // Sort `false` names after "number" names;
            // sort number names in descending order 
            PokeList.sort((a, b) => {
                let a2 = firstTimes[a];
                let b2 = firstTimes[b];
                if (a2) {
                    if (b2) {
                        return a2 - b2;
                    } else {
                        return -1;
                    }
                } else {
                    if (b2) {
                        return 1;
                    } else {
                        return 0;
                    }
                }
            });
        });
    }
    dexSummarize(tppData).then(summaries => {
        summaries = summaries.sort((s1, s2) => s1.Run.StartTime - s2.Run.StartTime);
        var hofData: HofInfo[] = summaries.map(s => s.HallOfFame).reduce((a, b) => a.concat(b)).sort((h1, h2) => h1.Time - h2.Time);
        hofData = hofData.filter(c => hofData.filter(i => i.HostName == c.HostName && i.Pokemon == c.Pokemon && (i.Nickname == c.Nickname || c.PreviousNick == i.UnmodifiedNick)).shift() == c);
        var fullList = {};
        element.find('*').remove();
        element.append(PokeList.map((p, i) => {
            if (!p) return;
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
                var hofs = hofData.filter(mon => mon.Pokemon == p);
                if (hofs.length) {
                    var $hofRibbons = $("<div>").addClass("hofRibbon").appendTo($entry);
                    hofs.forEach(mon => {
                        var title = mon.HostName + "'s " + mon.Nickname + " (" + mon.RunName + ")";
                        $hofRibbons.append($("<img>").attr('src', mon.Ribbon).attr("alt", title).attr('title', title));
                    });
                }
                else if (hofOnly) {
                    return $entry.hide();
                }
                summaries.forEach(s => {
                    var addHost = ownedBy.push;
                    if (s.OwnedDict[p]) {
                        $entry.addClass('owned');
                        fullList[p] = fullList[p] || s.OwnedDict[p];
                        bgColor = bgColor || s.Run.ColorPrimary;
                        if (s.OwnedDict[p] < fullList[p]) { //claim it
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
            var numTotal = PokeList.filter((p, i) => !!p && p != "MissingNo." && shouldShowPokemon(p, i)).length;
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
var GenSlice = Pokedex.GenSlice
var Regional = Pokedex.Regional;
var specialClasses = Pokedex.specialClasses;
var runRestrictions = Pokedex.runRestrictions