/// <reference path="tpp-data.ts" />
/// <reference path="../ref/jquery.flot.d.ts" />

$.when.apply($,
Array.prototype.concat.apply([],    
    tppData.filter(c => c.Name.indexOf("Season") == 0)
        .map(c => c.Runs.filter(r => (r.Scraper && r.Scraper.pokemon) || r.Events.filter(e => e.Group == "Pokemon").length > 0).map(r => $.when(r.Scraper ? Scrape(r) : r).then(r => {
            return <jquery.flot.dataSeries>{
                color: r.ColorPrimary,
                label: r.RunName,
                data: r.Events.filter(e => e.Group == "Pokemon" && e.Name != "Egg")
                    .sort((e1, e2) => Duration.parse(e1.Time, r.StartTime).TotalTime(c.Scale) - Duration.parse(e2.Time, r.StartTime).TotalTime(c.Scale))
                    .map((e, i) => [Duration.parse(e.Time, r.StartTime).TotalTime(TPP.Scale.Days), i + 1]),
            }
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

    $('.charts').append($("<div class='axisLabel'>").text('Days'))
        .append($("<div class='axisLabel yaxisLabel'>").text('Pokémon'));
});