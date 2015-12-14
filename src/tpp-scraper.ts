/// <reference path="tpp-structure" />
/// <reference path="../bin/jquery" />
function Scrape(run:TPP.Run) {
	var deferred = $.Deferred<TPP.Run>();
	$.get("https://crossorigin.me/" + run.ScrapeUrl).then(page=> {
		var $lastUpdate = $(page).find('.last-update');
		var $badges = $(page).find("h3 strong:contains(Bosses), h3 strong:contains(Badges), h3 strong:contains('Elite 4')");
		if ($lastUpdate.is('*')) {
			console.log($lastUpdate.text());
			run.Duration = $lastUpdate.text().split(':').pop().trim();
		}
		$badges.each((i, group) => {
			var $table = $(group).parent().next('.table-pokemon'), groupName = $(group).text();
			$table.find('th').each((i, th)=> {
				var title = $(th).text();
				console.log(title);
				var $col = $table.find('tr td:nth-child(' + (i + 1) + ')');
				if (!$col.find('img').is('.greyed-out')) {
					run.Events.push({
						Group: groupName,
						Image: $col.find('img').attr('src').replace(/^\//, run.ScrapeUrl+"/"),
						Name: title,
						Time: $($col[1]).text().trim(),
						Attempts: parseInt($col.find('strong').text() || '0')
					});
				}
			});
		});
		deferred.resolve(run);
	}, (jqXHR, status, err) => deferred.reject(err));
	return deferred.promise();
}
