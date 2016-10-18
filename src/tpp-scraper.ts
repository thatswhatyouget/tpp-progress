/// <reference path="tpp-structure.ts" />
/// <reference path="../ref/jquery.d.ts" />
function Scrape(run: TPP.Run) {
    $('.doItLive').text('Live');
    var deferred = $.Deferred<TPP.Run>(),
        durationExp = /(?:(\d*)w)? *(?:(\d*)d)? *(?:(\d*)h) *(?:(\d*)m) *(?:(\d*)s)?/im,
        attemptsExp = /Attempt[^\d]*(\d*)/i,
        promise = deferred.promise();
    if (run.Scraper.url == "http://twitchplayspokemon.org/") promise = TppOrgApi(run, deferred);
    else {
        $.ajax({
            url: "http://crossorigin.me/" + run.Scraper.url,
            type: "GET",
            dataType: "text",
            timeout: 1000
        }).then(r => r, e => $.ajax({
            url: "http://cors.io/?u=" + run.Scraper.url,
            type: "GET",
            dataType: "text",
            timeout: 1000
        })).then(page => {
            page = page.replace(/\bsrc=/ig, 'crs=');
            var $lastUpdate = $(page).find('.last-update');
            run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
            var $events = $(page).find(run.Scraper.parts.map(p => "h3 strong:contains(" + p + ")").join(','));
            if (run.Scraper.runtime && $lastUpdate.is('*')) {
                run.Duration = ($lastUpdate.text().split(':').pop() || "0d").trim();
                if (!Duration.canParse(run.Duration)) run.Duration = new Date().toISOString();
            }
            var knownEvents: { [key: string]: TPP.Event } = {};
            run.Events.forEach(e => knownEvents[(e.Name + e.Time).toLowerCase()] = e);
            $events.each((i, group) => {
                var groupName = $(group).text();
                function parseEvents($table: JQuery) {
                    $table.find('th a').remove();   //remove More Info buttons
                    $table.find('th').each((i, th) => {
                        var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
                        if ($col.find('img').is('.greyed-out')) return;
                        var title = $(th).text().trim();
                        var time = (($col.text().match(durationExp) || []).shift() || '').trim();
                        if (time && Duration.canParse(time) && !knownEvents[(title + time).toLowerCase()]) {
                            run.Events.push({
                                Group: groupName,
                                Image: ($col.find('img').attr('crs') || '').replace(/^\//, run.Scraper.url + "/"),
                                Name: title,
                                Time: time,
                                Attempts: parseInt(($col.text().match(attemptsExp) || []).pop() || '0'),
                                New: true
                            });
                        }
                    });
                }
                var $element = $(group).parent();
                while ($element.nextAll('h3, .table-pokemon').first().is('.table-pokemon'))
                    parseEvents($element = $element.nextAll('.table-pokemon').first());
            });
            if (run.Scraper.hostname) {
                run.HostName = $(page).find('td.text-left:contains("Trainer Name")').next('td.text-right').text() || run.HostName;
            }
            if (run.Scraper.pokemon) {
                var pkmn: { [key: string]: TPP.Event } = {};
                run.Events.filter(e => e.Group == "Pokemon").forEach(e => pkmn[e.Name] = e);
                $(page).find('.history-obtained').each(function () {
                    var $element = $(this);
                    var $img = $element.find('img');
                    if (!$img.is('*')) {
                        var title = $element.attr('title').split('(').shift().trim();
                    }
                    else {
                        var title = $img.attr('title') || "";
                    }
                    var time = $element.text().replace(/[()]/g, '').trim();
                    if (!pkmn[title] /*&& title.toLowerCase() != "egg"*/ && Duration.canParse(time))
                        pkmn[title] = {
                            Name: title,
                            Time: time,
                            Group: "Pokemon",
                            New: true
                        };
                });
                Object.keys(pkmn).filter(mon => !knownEvents[(pkmn[mon].Name + pkmn[mon].Time).toLowerCase()]).forEach(mon => run.Events.push(pkmn[mon]));
            }
            deferred.resolve(run);
            $(page).find('img').attr('src', '');
        }, () => deferred.reject("Could not load live run data."));
    }
    return promise.then(r => r, e => $.when(run));
}

function TppOrgApi(run: TPP.Run, deferred: JQueryDeferred<TPP.Run>) {
    interface EventDict { [key: string]: TPP.Event };
    var promises: JQueryPromise<any>[] = [], knownEvents: EventDict = {}, pkmn: EventDict = {}, runFolder = "";
    var eventMerge = (events: TPP.Event[]) =>
        events.filter(e => !!e.Time).forEach(e => {
            var key = (e.Name + Duration.parse(e.Time, run.StartTime).toString()).toLowerCase();
            if (!knownEvents[key]) {
                run.Events.push(e);
                knownEvents[key] = e;
                e.New = true;
            }
        });
    if (run.Scraper.runtime) promises.push($.get("http://api.twitchplayspokemon.org/v1/general").then((api: TPP.Org.V1.General) =>
        run.Duration = new Date(api.data.pop().last_update_unix * 1000).toISOString()
    ));
    if (run.Scraper.parts.indexOf("Badge") >= 0) promises.push($.get("http://api.twitchplayspokemon.org/v1/badges").then((api: TPP.Org.V1.Badges) =>
        eventMerge(api.data.filter(b => b.time_unix >= run.StartTime).map(b => (<TPP.Event>{
            Group: (b.region.toLowerCase().indexOf("rematch") >= 0 ? "Rematch " : "") + "Badges",
            Name: b.name.trim() + " Badge",
            Time: new Date(b.time_unix * 1000).toISOString(),
            Attempts: b.attempts,
            Image: "img/badges/" + (b.region.toLowerCase().indexOf("rematch") >= 0 ? "rematch/" : "") + b.name.toLowerCase() + ".png"
        })))
    ));
    if (run.Scraper.parts.indexOf("Elite Four") >= 0) promises.push($.get("http://api.twitchplayspokemon.org/v1/elite-four").then((api: TPP.Org.V1.EliteFour) =>
        eventMerge(api.data.filter(t => t.time_unix >= run.StartTime).map(t => (<TPP.Event>{
            Group: "Elite Four" + (t.is_rematch ? " Rematch" : ""),
            Name: t.name.trim(),
            Time: new Date(t.time_unix * 1000).toISOString(),
            Attempts: t.attempts,
            Image: "img/trainers/" + runFolder + (t.is_rematch ? "rematch/" : "") + t.name.toLowerCase() + ".png"
        })))
    ));
    if (run.Scraper.pokemon) promises.push($.get("http://api.twitchplayspokemon.org/v1/pokemon-timeline").then((api: TPP.Org.V1.PokemonTimeline) => {
        api.data.filter(p => p.time_unix >= run.StartTime).map(p => (<TPP.Event>{
            Group: "Pokemon",
            Name: p.pokemon.trim(),
            Time: new Date(p.time_unix * 1000).toISOString(),
        })).forEach(p => {
            var pkname = p.Name.toLowerCase();
            if (!pkmn[pkname] || Duration.parse(pkmn[pkname].Time, run.StartTime).TotalSeconds > Duration.parse(p.Time, run.StartTime).TotalSeconds)
                pkmn[pkname] = p;
        });
        return eventMerge(Object.keys(pkmn).map(k => pkmn[k]));
    }));
    if (!promises.length) deferred.reject("Nothing to fetch!");
    else {
        $.when.apply($, promises).then(() => {
            deferred.resolve(run);
        }, deferred.reject);
        run.Events.forEach(e => knownEvents[(e.Name + Duration.parse(e.Time, run.StartTime).toString()).toLowerCase()] = e);
        run.Events.filter(e => e.Group == "Pokemon").forEach(e => pkmn[e.Name.toLowerCase()] = e);
        runFolder = (run.BaseGame ? run.BaseGame : run.RunName).toLowerCase().replace(/(randomized)|(anniversary)|([^a-z0-9]*)/gi, '') + "/";
    }
    return deferred.promise();
}
