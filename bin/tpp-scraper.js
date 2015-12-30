/// <reference path="tpp-structure" />
/// <reference path="../ref/jquery" />
function Scrape(run) {
    var deferred = $.Deferred();
    $.ajax({
        url: "https://crossorigin.me/" + run.Scraper.url,
        type: "GET",
        dataType: "text"
    }).then(function (page) {
        var $lastUpdate = $(page).find('.last-update');
        run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
        var $badges = $(page).find(run.Scraper.parts.map(function (p) { return "h3 strong:contains(" + p + ")"; }).join(','));
        if (run.Scraper.runtime && $lastUpdate.is('*')) {
            run.Duration = $lastUpdate.text().split(':').pop().trim();
        }
        $badges.each(function (i, group) {
            var $table = $(group).parent().next('.table-pokemon'), groupName = $(group).text();
            $table.find('th').each(function (i, th) {
                var title = $(th).text();
                var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
                var time = $($col[1]).text().trim();
                if (!$col.find('img').is('.greyed-out') && !run.Events.filter(function (e) { return e.Name == title && e.Time == time; }).length) {
                    run.Events.push({
                        Group: groupName,
                        Image: $col.find('img').attr('src').replace(/^\//, run.Scraper.url + "/"),
                        Name: title,
                        Time: time,
                        Attempts: parseInt($col.find('strong').text() || '0')
                    });
                }
            });
        });
        if (run.Scraper.hostname) {
            run.HostName = $(page).find('td.text-left:contains("Trainer Name")').next('td.text-right').text() || run.HostName;
        }
        if (run.Scraper.pokemon) {
            var pkmn = {};
            $(page).find('.history-obtained').each(function () {
                var $element = $(this);
                var $img = $element.find('img');
                if (!$img.is('*')) {
                    var title = $element.attr('title').split('(').shift().trim();
                }
                else {
                    var title = $img.attr('title');
                }
                var time = $element.text().replace(/[()]/g, '').trim();
                if (!pkmn[title] && Duration.canParse(time))
                    pkmn[title] = {
                        Name: title,
                        Image: $img.is('*') ? $img.attr('src').replace(/^\//, "http://twitchplayspokemon.org/") : "http://twitchplayspokemon.org/img/pokemon/sprites/menu-static/" + title.toLowerCase().replace(/\s+/g, '-').replace(/[^0-9A-Z-]/ig, '') + ".png",
                        Time: time,
                        Group: "Pokemon"
                    };
            });
            Object.keys(pkmn).forEach(function (mon) { return run.Events.push(pkmn[mon]); });
        }
        deferred.resolve(run);
    }, function (jqXHR, status, err) { return deferred.reject(err); });
    return deferred.promise();
}
