/// <reference path="tpp-structure" />
/// <reference path="../ref/jquery" />
function Scrape(run: TPP.Run) {
    $('.doItLive').text('Live');
    var deferred = $.Deferred<TPP.Run>();
    $.ajax({
        url: "https://crossorigin.me/" + run.Scraper.url,
        type: "GET",
        dataType: "text"
    }).then(page=> {
        //page.replace(/\bsrc=/ig, 'data-src=');
        var $lastUpdate = $(page).find('.last-update');
        run.Scraper.parts = run.Scraper.parts || ["Badge", "Elite Four"];
        var $events = $(page).find(run.Scraper.parts.map(p=> "h3 strong:contains(" + p + ")").join(','));
        if (run.Scraper.runtime && $lastUpdate.is('*')) {
            run.Duration = ($lastUpdate.text().split(':').pop() || "0d").trim();
            if (!Duration.canParse(run.Duration)) run.Duration = new Date().toISOString();
        }
        $events.each((i, group) => {
            var $table = $(group).parent().next('.table-pokemon'), groupName = $(group).text();
            $table.find('th').each((i, th) => {
                var title = $(th).text();
                var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
                var time = $($col[1]).text().trim();
                if (!$col.find('img').is('.greyed-out') && !run.Events.filter(e=> e.Name == title && e.Time == time).length) {
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
            var pkmn: { [key: string]: TPP.Event } = {};
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
                        Group: "Pokemon"
                    };
            });
            Object.keys(pkmn).forEach(mon=> run.Events.push(pkmn[mon]));
        }
        deferred.resolve(run);
    }, (jqXHR, status, err) => deferred.reject(err));
    return deferred.promise();
}