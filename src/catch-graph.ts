/// <reference path="tpp-data.ts" />
/// <reference path="../ref/jquery.flot.d.ts" />

function qsFilter(event: TPP.Event, run: TPP.Run, index: number) {
    return !(QueryString["day"] && Duration.parse(event.Time, run.StartTime).TotalDays > parseFloat(QueryString["day"]))
        && !(QueryString["pokemon"] && index >= parseInt(QueryString["pokemon"]))
        && !(!QueryString["wifi"] && (event.Class || '').indexOf("WifiTrade") >= 0);
}

$.when.apply($,
    Array.prototype.concat.apply([],
        tppData.filter(c => c.Name.indexOf("Season") == 0)
            .map(c => c.Runs.filter(r => (r.Scraper && r.Scraper.pokemon) || r.Events.filter(e => e.Group == "Pokemon").length > 0).map(r => $.when(r.Scraper ? Scrape(r) : r).then(r => {
                // //truncate runs that end in the future
                if (Duration.parse(r.EndDate || r.Duration, r.StartTime).TotalSeconds > ((Date.now() / 1000) - r.StartTime)) {
                    r.Duration = new Date().toISOString();
                    r.Ongoing = true;
                }
                var dataSeries: jquery.flot.dataSeries = {
                    color: r.ColorPrimary,
                    label: r.RunName,
                    data: r.Events.filter(e => e.Group == "Pokemon" && e.Name != "Egg")
                        .sort((e1, e2) => Duration.parse(e1.Time, r.StartTime).TotalTime(c.Scale) - Duration.parse(e2.Time, r.StartTime).TotalTime(c.Scale))
                        .filter((e, i) => qsFilter(e, r, i))
                        .map((e, i) => [Duration.parse(e.Time, r.StartTime).TotalTime(TPP.Scale.Days), i + 1]),
                };
                var runTime = Duration.parse(r.Duration, r.StartTime).TotalTime(TPP.Scale.Days);
                if (QueryString['day'] && runTime > parseFloat(QueryString['day']))
                    runTime = parseFloat(QueryString['day']);
                if (dataSeries.data[dataSeries.data.length - 1][0] < runTime && (!QueryString['pokemon'] || dataSeries.data.length < parseInt(QueryString['pokemon'])))
                    dataSeries.data.push([runTime, dataSeries.data.length]);
                dataSeries.data.unshift([0, 0]);
                return dataSeries;
            }))))
).then((...data: jquery.flot.dataSeries[]) => {
    console.dir(data);
    var $tooltip = null;

    $.plot($('.charts')
        .css({ width: '80vw', height: '80vh', margin: 'auto' })
        .on('plothover', (e, pos, item) => {
            if (item) {
                $tooltip = $tooltip || $('<div class="tooltip">').appendTo('body').css('position', 'absolute');
                var dur = new Duration(0);
                dur.TotalDays = item.datapoint[0];
                var label = item.series.label + "\n" + item.datapoint[1] + " Pokémon\n" + dur.toString(TPP.Scale.Days);
                console.log(label);
                $tooltip.css({ left: item.pageX, top: item.pageY })
                    .attr('data-label', label)
                    .show();
            }
            else if ($tooltip)
                $tooltip.hide();
        }),
        data,
        {
            legend: {
                backgroundOpacity: .5
            },
            grid: {
                hoverable: true
            }
        }
    );

    var $chartTitle = $('<h3>').text('Pokédex "Owned" Over Time');

    $('.charts').append($("<div class='axisLabel'>").text('Days'))
        .append($("<div class='axisLabel yaxisLabel'>").text('Pokémon'))
        .append($chartTitle);

    if (QueryString["day"]) $chartTitle.append("<small>(First " + QueryString["day"] + " Days)</small>");
    if (QueryString["pokemon"]) $chartTitle.append("<small>(First " + QueryString["pokemon"] + " Pokémon)</small>");
});
