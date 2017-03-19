/// <reference path="../models/collection.ts" />
/// <reference path="../models/pokedex.ts" />
/// <reference path="shared.ts" />

module TPP.Display.Pokedex {
    export function DrawOwnedCount(dex: TPP.Pokedex.GlobalDexBase) {
        return $("<h2 class='total'>Owned: <span>" + dex.TotalOwned + "/" + dex.TotalInDex + " (" + dex.OwnedPercentage.toFixed(2)  + "%)</span></h2>");
    }

    export function DrawDexEntry(entry: TPP.Pokedex.DexEntryBase, showOwnership = true) {
        var idx = entry.Number.toString(), index = ('000' + idx).substring(idx.length);
        var pokeName = cleanString(entry.Pokemon) || "unidentified";
        var $entry = $("<div class='dexEntry'>")
            .append("<h3>" + index + "</h3>")
            .append("<h4>" + entry.Pokemon + "</h4>")
            .append("<div class='pokesprite " + pokeName + "'><img src='img/missingno.png'></div>");
        if (!showOwnership) {
            $entry.addClass('owned');
        }
        else {
            var hofs = entry.HallOfFame;
            if (hofs.length) {
                var $hofRibbons = $("<div>").addClass("hofRibbon").appendTo($entry);
                hofs.forEach(mon => {
                    var title = mon.HostName + "'s " + mon.Nickname + " (" + mon.RunName + ")";
                    $hofRibbons.append($("<img>").attr('src', mon.Ribbon).attr("alt", title).attr('title', title));
                });
            }
            if (entry.IsOwned) {
                $entry.addClass("owned")
                    .attr('title', 'Owned by:\n' + entry.Owners.map(o => o.Run.HostName + " (" + o.Run.RunName + ")").join('\n'))
                    .css('background-color', entry.Owners[0].Run.ColorPrimary);
            }
            else
                $entry.attr('title', "Didn't Catch");
        }            
        return $entry;
    }

    export function DrawPokedex(dex: TPP.Pokedex.GlobalDexBase, showOwnership = true) {
        var $dex = $("<div class='pokedex'>");
        $dex.append(DrawOwnedCount(dex));
        $dex.append(dex.Entries.map(e => DrawDexEntry(e, showOwnership)));
        return $dex;
    }
}