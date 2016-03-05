/// <reference path="tpp-structure" />
/// <reference path="../ref/jquery" />
function Scrape(run: TPP.Run) {
    $('.doItLive').text('Live');
    var deferred = $.Deferred<TPP.Run>(),
        durationExp = /(?:(\d*)w)? *(?:(\d*)d)? *(?:(\d*)h) *(?:(\d*)m) *(?:(\d*)s)?/im,
        attemptsExp = /Attempt[^\d]*(\d*)/i;
    $.ajax({
        url: "http://crossorigin.me/" + run.Scraper.url,
        type: "GET",
        dataType: "text",
        timeout: 1000
    }).then(r=> r, e=> $.ajax({
        url: "http://cors.io/?u=" + run.Scraper.url,
        type: "GET",
        dataType: "text",
        timeout: 1000
    })).then(r=> r, e=> $.ajax({
        url: "tpp.org/snapshot.html",
        type: "GET",
        dataType:"text",
    })).then(page=> {
        page = page.replace(/\bsrc=/ig, 'crs=');
        var $lastUpdate = $(page).find('.last-update');
        run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
        var $events = $(page).find(run.Scraper.parts.map(p=> "h3 strong:contains(" + p + ")").join(','));
        if (run.Scraper.runtime && $lastUpdate.is('*')) {
            run.Duration = ($lastUpdate.text().split(':').pop() || "0d").trim();
            if (!Duration.canParse(run.Duration)) run.Duration = new Date().toISOString();
        }
        var knownEvents: { [key: string]: TPP.Event } = {};
        run.Events.forEach(e=> knownEvents[(e.Name + e.Time).toLowerCase()] = e);
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
            run.Events.filter(e=> e.Group == "Pokemon").forEach(e=> pkmn[e.Name] = e);
            $(page).find('.history-obtained').each(function() {
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
            Object.keys(pkmn).filter(mon=>!knownEvents[(pkmn[mon].Name + pkmn[mon].Time).toLowerCase()]).forEach(mon=> run.Events.push(pkmn[mon]));
        }
        deferred.resolve(run);
        $(page).find('img').attr('src', '');
    }, () => deferred.reject("Could not load live run data."));
    return deferred.promise();
}
