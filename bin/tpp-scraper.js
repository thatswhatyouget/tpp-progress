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
        run.Scraper.parts = run.Scraper.parts || ["Badges", "Elite Four"];
        var $badges = $(page).find(run.Scraper.parts.map(function (p) { return "h3 strong:contains(" + p + ")"; }).join(','));
        if ($lastUpdate.is('*')) {
            run.Duration = $lastUpdate.text().split(':').pop().trim();
        }
        $badges.each(function (i, group) {
            var $table = $(group).parent().next('.table-pokemon'), groupName = $(group).text();
            $table.find('th').each(function (i, th) {
                var title = $(th).text();
                var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
                if (!$col.find('img').is('.greyed-out')) {
                    run.Events.push({
                        Group: groupName,
                        Image: $col.find('img').attr('src').replace(/^\//, run.Scraper.url + "/"),
                        Name: title,
                        Time: $($col[1]).text().trim(),
                        Attempts: parseInt($col.find('strong').text() || '0')
                    });
                }
            });
        });
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
                if (!pkmn[title])
                    pkmn[title] = {
                        Name: title,
                        Image: "http://twitchplayspokemon.org/img/pokemon/sprites/menu-static/" + title.toLowerCase() + ".png",
                        Time: $element.text().replace(/[()]/g, '').trim(),
                        Group: "Pokemon"
                    };
            });
            Object.keys(pkmn).forEach(function (mon) { return run.Events.push(pkmn[mon]); });
        }
        deferred.resolve(run);
    }, function (jqXHR, status, err) { return deferred.reject(err); });
    return deferred.promise();
}
