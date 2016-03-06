function Scrape(run) {
    $('.doItLive').text('Live');
    var deferred = $.Deferred(), durationExp = /(?:(\d*)w)? *(?:(\d*)d)? *(?:(\d*)h) *(?:(\d*)m) *(?:(\d*)s)?/im, attemptsExp = /Attempt[^\d]*(\d*)/i;
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
    }); }).then(function (r) { return r; }, function (e) { return $.ajax({
        url: "tpp.org/snapshot.html",
        type: "GET",
        dataType: "text",
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
