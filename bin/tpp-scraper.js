function Scrape(run) {
    $('.doItLive').text('Live');
    var deferred = $.Deferred(), durationExp = /(?:(\d*)w)? *(?:(\d*)d)? *(?:(\d*)h) *(?:(\d*)m) *(?:(\d*)s)?/im, attemptsExp = /Attempt[^\d]*(\d*)/i;
    if (run.Scraper.url == "http://twitchplayspokemon.org/")
        return TppOrgApi(run, deferred);
    $.ajax({
        url: "http://crossorigin.me/" + run.Scraper.url,
        type: "GET",
        dataType: "text",
        timeout: 1000
    }).then(function (r) { return r; }, function (e) { return $.ajax({
        url: "http://cors.io/?u=" + run.Scraper.url,
        type: "GET",
        dataType: "text",
        timeout: 1000
    }); }).then(function (page) {
        page = page.replace(/\bsrc=/ig, 'crs=');
        var $lastUpdate = $(page).find('.last-update');
        run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
        var $events = $(page).find(run.Scraper.parts.map(function (p) { return "h3 strong:contains(" + p + ")"; }).join(','));
        if (run.Scraper.runtime && $lastUpdate.is('*')) {
            run.Duration = ($lastUpdate.text().split(':').pop() || "0d").trim();
            if (!Duration.canParse(run.Duration))
                run.Duration = new Date().toISOString();
        }
        var knownEvents = {};
        run.Events.forEach(function (e) { return knownEvents[(e.Name + e.Time).toLowerCase()] = e; });
        $events.each(function (i, group) {
            var groupName = $(group).text();
            function parseEvents($table) {
                $table.find('th a').remove();
                $table.find('th').each(function (i, th) {
                    var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
                    if ($col.find('img').is('.greyed-out'))
                        return;
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
            var pkmn = {};
            run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (e) { return pkmn[e.Name] = e; });
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
                if (!pkmn[title] && Duration.canParse(time))
                    pkmn[title] = {
                        Name: title,
                        Time: time,
                        Group: "Pokemon",
                        New: true
                    };
            });
            Object.keys(pkmn).filter(function (mon) { return !knownEvents[(pkmn[mon].Name + pkmn[mon].Time).toLowerCase()]; }).forEach(function (mon) { return run.Events.push(pkmn[mon]); });
        }
        deferred.resolve(run);
        $(page).find('img').attr('src', '');
    }, function () { return deferred.reject("Could not load live run data."); });
    return deferred.promise();
}
function TppOrgApi(run, deferred) {
    ;
    var promises = [], knownEvents = {}, pkmn = {}, runFolder = "";
    var eventMerge = function (events) {
        return events.filter(function (e) { return !!e.Time; }).forEach(function (e) {
            var key = (e.Name + Duration.parse(e.Time, run.StartTime).toString()).toLowerCase();
            if (!knownEvents[key]) {
                run.Events.push(e);
                knownEvents[key] = e;
                e.New = true;
            }
        });
    };
    if (run.Scraper.runtime)
        promises.push($.get("http://api.twitchplayspokemon.org/v1/general").then(function (api) {
            return run.Duration = new Date(api.data.pop().last_update_unix * 1000).toISOString();
        }));
    if (run.Scraper.parts.indexOf("Badge") >= 0)
        promises.push($.get("http://api.twitchplayspokemon.org/v1/badges").then(function (api) {
            return eventMerge(api.data.filter(function (b) { return b.time_unix >= run.StartTime; }).map(function (b) { return ({
                Group: (b.region.toLowerCase().indexOf("rematch") >= 0 ? "Rematch " : "") + "Badges",
                Name: b.name.trim() + " Badge",
                Time: new Date(b.time_unix * 1000).toISOString(),
                Attempts: b.attempts,
                Image: "img/badges/" + (b.region.toLowerCase().indexOf("rematch") >= 0 ? "rematch/" : "") + b.name.toLowerCase() + ".png"
            }); }));
        }));
    if (run.Scraper.parts.indexOf("Elite Four") >= 0)
        promises.push($.get("http://api.twitchplayspokemon.org/v1/elite-four").then(function (api) {
            return eventMerge(api.data.filter(function (t) { return t.time_unix >= run.StartTime; }).map(function (t) { return ({
                Group: "Elite Four" + (t.is_rematch ? " Rematch" : ""),
                Name: t.name.trim(),
                Time: new Date(t.time_unix * 1000).toISOString(),
                Attempts: t.attempts,
                Image: "img/trainers/" + runFolder + (t.is_rematch ? "rematch/" : "") + t.name.toLowerCase() + ".png"
            }); }));
        }));
    if (run.Scraper.pokemon)
        promises.push($.get("http://api.twitchplayspokemon.org/v1/pokemon-timeline").then(function (api) {
            api.data.filter(function (p) { return p.time_unix >= run.StartTime; }).map(function (p) { return ({
                Group: "Pokemon",
                Name: p.pokemon.trim(),
                Time: new Date(p.time_unix * 1000).toISOString(),
            }); }).forEach(function (p) {
                var pkname = p.Name.toLowerCase();
                if (!pkmn[pkname] || Duration.parse(pkmn[pkname].Time, run.StartTime).TotalSeconds > Duration.parse(p.Time, run.StartTime).TotalSeconds)
                    pkmn[pkname] = p;
            });
            return eventMerge(Object.keys(pkmn).map(function (k) { return pkmn[k]; }));
        }));
    if (!promises.length)
        deferred.reject("Nothing to fetch!");
    else {
        $.when.apply($, promises).then(function () {
            deferred.resolve(run);
        }, deferred.reject);
        run.Events.forEach(function (e) { return knownEvents[(e.Name + Duration.parse(e.Time, run.StartTime).toString()).toLowerCase()] = e; });
        run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (e) { return pkmn[e.Name.toLowerCase()] = e; });
        runFolder = (run.BaseGame ? run.BaseGame : run.RunName).toLowerCase().replace(/(randomized)|(anniversary)|([^a-z0-9]*)/gi, '') + "/";
    }
    return deferred.promise();
}
