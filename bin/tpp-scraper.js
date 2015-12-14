/// <reference path="tpp-structure" />
/// <reference path="../bin/jquery" />
function Scrape(run) {
    var deferred = $.Deferred();
    $.get("https://crossorigin.me/" + run.ScrapeUrl).then(function (page) {
        var $lastUpdate = $(page).find('.last-update');
        var $badges = $(page).find("#badges").next('.table-pokemon');
        if ($lastUpdate.is('*')) {
            console.log($lastUpdate.text());
            run.Duration = $lastUpdate.text().split(':').pop().trim();
        }
        if ($badges.is('*')) {
            $badges.find('th').each(function (i, th) {
                var title = $(th).text();
                console.log(title);
                var $col = $badges.find('tr td:nth-child(' + (i + 1) + ')');
                if (!$col.find('img').is('.greyed-out')) {
                    run.Events.push({
                        Group: "Badge",
                        Image: $col.find('img').attr('src').replace(/^\//, run.ScrapeUrl + "/"),
                        Name: title,
                        Time: $($col[1]).text().trim(),
                        Attempts: parseInt($col.find('strong').text() || '0')
                    });
                }
            });
        }
        deferred.resolve(run);
    }, function (jqXHR, status, err) { return deferred.reject(err); });
    return deferred.promise();
}
