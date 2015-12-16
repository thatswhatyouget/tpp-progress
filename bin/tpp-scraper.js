/// <reference path="tpp-structure" />
/// <reference path="../ref/jquery" />
function Scrape(run) {
    var deferred = $.Deferred();
    $.ajax({
        url: "https://crossorigin.me/" + run.ScrapeUrl,
        type: "GET",
        dataType: "text"
    }).then(function (page) {
        var $lastUpdate = $(page).find('.last-update');
        var $badges = $(page).find("h3 strong:contains(Bosses), h3 strong:contains(Badges), h3 strong:contains('Elite Four')");
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
                        Image: $col.find('img').attr('src').replace(/^\//, run.ScrapeUrl + "/"),
                        Name: title,
                        Time: $($col[1]).text().trim(),
                        Attempts: parseInt($col.find('strong').text() || '0')
                    });
                }
            });
        });
        deferred.resolve(run);
    }, function (jqXHR, status, err) { return deferred.reject(err); });
    return deferred.promise();
}
