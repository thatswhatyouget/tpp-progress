/// <reference path="../models/collection.ts" />
/// <reference path="../models/duration.ts" />
/// <reference path="../models/run_status.ts" />
/// <reference path="pokedex.ts" />

module TPP.Display.RunStatus {

    var mapLocations = {};
    mapLocations["Red"] = mapLocations["Blue"] = mapLocations["Yellow"] = ["Pallet Town", "Viridian City", "Pewter City", "Cerulean City", "Lavender Town", "Vermilion City", "Celadon City", "Fuchsia City", "Cinnabar Island", "Pokémon League", "Saffron City", "Unused Fly location", "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6", "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12", "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18", "Sea Route 19", "Sea Route 20", "Sea Route 21", "Route 22", "Route 23", "Route 24", "Route 25", "Red's house (first floor)", "Red's house (second floor)", "Blue's house", "Professor Oak's Lab", "Pokémon Center (Viridian City)", "Poké Mart (Viridian City)", "School (Viridian City)", "House 1 (Viridian City)", "Pokémon Gym (Viridian City)", "Diglett's Cave (Route 2 entrance)", "Gate (Viridian City/Pewter City) (Route 2)", "Oak's Aide House 1 (Route 2)", "Gate (Route 2)", "Gate (Route 2/Viridian Forest) (Route 2)", "Viridian Forest", "Pewter Museum (floor 1)", "Pewter Museum (floor 2)", "Pokémon Gym (Pewter City)", "House with disobedient Nidoran♂ (Pewter City)", "Poké Mart (Pewter City)", "House with two Trainers (Pewter City)", "Pokémon Center (Pewter City)", "Mt. Moon (Route 3 entrance)", "Mt. Moon", "Mt. Moon", "Invaded house (Cerulean City)", "Poliwhirl for Jynx trade house (Red/Blue)Bulbasaur adoption house (Pokémon Yellow)", "Pokémon Center (Cerulean City)", "Pokémon Gym (Cerulean City)", "Bike Shop (Cerulean City)", "Poké Mart (Cerulean City)", "Pokémon Center (Route 4)", "Invaded house - alternative music (Cerulean City)", "Saffron City Gate (Route 5)", "Entrance to Underground Path (Kanto Routes 5-6) (Route 5)", "Daycare Center (Route 5)", "Saffron City Gate (Route 6)", "Entrance to Underground Path (Route 6)", "Entrance to Underground Path 2 (Route 6)", "Saffron City Gate (Route 7)", "Entrance to Underground Path (Route 7)", "Entrance to Underground Path 2 (Route 7)", "Saffron City Gate (Route 8)", "Entrance to Underground Path (Route 8)", "Pokémon Center (Rock Tunnel)", "Rock Tunnel", "Power Plant", "Gate 1F (Route 11-Route 12)", "Diglett's Cave (Vermilion City entrance)", "Gate 2F (Route 11-Route 12)", "Gate (Route 12-Route 13)", "Sea Cottage", "Pokémon Center (Vermilion City)", "Pokémon Fan Club (Vermilion City)", "Poké Mart (Vermilion City)", "Pokémon Gym (Vermilion City)", "House with Pidgey (Vermilion City)", "Vermilion Harbor (Vermilion City)", "S.S. Anne 1F", "S.S. Anne 2F", "S.S. Anne 3F", "S.S. Anne B1F", "S.S. Anne (Deck)", "S.S. Anne (Kitchen)", "S.S. Anne (Captain's room)", "S.S. Anne 1F (Gentleman's room)", "S.S. Anne 2F (Gentleman's room)", "S.S. Anne B1F (Sailor/Fisherman's room)", "Unused (Victory Road)", "Unused (Victory Road)", "Unused (Victory Road)", "Victory Road (Route 23 entrance)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Lance's Elite Four room", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Hall of Fame", "Underground Path (Route 5-Route 6)", "Blue's room", "Underground Path (Route 7-Route 8)", "Celadon Department Store 1F", "Celadon Department Store 2F", "Celadon Department Store 3F", "Celadon Department Store 4F", "Celadon Department Store Rooftop Square", "Celadon Department Store Lift", "Celadon Mansion 1F", "Celadon Mansion 2F", "Celadon Mansion 3F", "Celadon Mansion 4F", "Celadon Mansion 4F (Eevee building)", "Pokémon Center (Celadon City)", "Pokémon Gym (Celadon City)", "Rocket Game Corner (Celadon City)", "Celadon Department Store 5F", "Prize corner (Celadon City)", "Restaurant (Celadon City)", "House with Team Rocket members (Celadon City)", "Hotel (Celadon City)", "Pokémon Center (Lavender Town)", "Pokémon Tower F1", "Pokémon Tower F2", "Pokémon Tower F3", "Pokémon Tower F4", "Pokémon Tower F5", "Pokémon Tower F6", "Pokémon Tower F7", "Mr. Fuji's house (Lavender Town)", "Poké Mart (Lavender Town)", "House with NPC discussing Cubone's mother", "Poké Mart (Fuchsia City)", "House with NPCs discussing Bill (Fuchsia City)", "Pokémon Center (Fuchsia City)", "Warden's house (Fuchsia City)", "Safari Zone gate (Fuchsia City)", "Pokémon Gym (Fuchsia City)", "House with NPCs discussing Baoba (Fuchsia City)", "Seafoam Islands", "Seafoam Islands", "Seafoam Islands", "Seafoam Islands", "Vermilion City Fishing Brother", "Fuchsia City Fishing Brother", "Pokémon Mansion (1F)", "Pokémon Gym (Cinnabar Island)", "Pokémon Lab (Cinnabar Island)", "Pokémon Lab - Trade room (Cinnabar Island)", "Pokémon Lab - Room with scientists (Cinnabar Island)", "Pokémon Lab - Fossil resurrection room (Cinnabar Island)", "Pokémon Center (Cinnabar Island)", "Poké Mart (Cinnabar Island)", "Poké Mart - alternative music (Cinnabar Island)", "Pokémon Center (Indigo Plateau)", "Copycat's house 1F (Saffron City)", "Copycat's house 2F (Saffron City)", "Fighting Dojo (Saffron City)", "Pokémon Gym (Saffron City)", "House with Pidgey (Saffron City)", "Poké Mart (Saffron City)", "Silph Co. 1F", "Pokémon Center (Saffron City)", "Mr. Psychic's house (Saffron City)", "Gate 1F (Route 15)", "Gate 2F (Route 15)", "Gate 1F (Cycling Road (Route 16)", "Gate 2F (Cycling Road (Route 16)", "Secret house (Cycling Road) (Route 16)", "Route 12 Fishing Brother", "Gate 1F (Route 18)", "Gate 2F (Route 18)", "Seafoam Islands", "Badges check gate (Route 22)", "Victory Road", "Gate 2F (Route 12)", "House with NPC and HM moves advice Vermilion City", "Diglett's Cave", "Victory Road", "Team Rocket Hideout (B1F)", "Team Rocket Hideout (B2F)", "Team Rocket Hideout (B3F)", "Team Rocket Hideout (B4F)", "Team Rocket Hideout (Lift)", "Unused (Team Rocket Hideout)", "Unused (Team Rocket Hideout)", "Unused (Team Rocket Hideout)", "Silph Co. (2F)", "Silph Co. (3F)", "Silph Co. (4F)", "Silph Co. (5F)", "Silph Co. (6F)", "Silph Co. (7F)", "Silph Co. (8F)", "Pokémon Mansion (2F)", "Pokémon Mansion (3F)", "Pokémon Mansion (B1F)", "Safari Zone (Area 1)", "Safari Zone (Area 2)", "Safari Zone (Area 3)", "Safari Zone (Entrance)", "Safari Zone (Rest house 1)", "Safari Zone (Prize house)", "Safari Zone (Rest house 2)", "Safari Zone (Rest house 3)", "Safari Zone (Rest house 4)", "Unknown Dungeon", "Unknown Dungeon 1F", "Unknown Dungeon B1F", "Name Rater's house (Lavender Town)", "Cerulean City (Gym Badge man)", "Unused (Rock Tunnel)", "Rock Tunnel", "Silph Co. 9F", "Silph Co. 10F", "Silph Co. 11F", "Silph Co. Lift", "(Invalid)", "(Invalid)", "Cable Club Trade Center(*)", "Cable Club Colosseum(*)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "Lorelei's room", "Bruno's room", "Agatha's room", "Summer Beach House (Pokémon Yellow)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "?"];

    function fetchRunStatus(): JQueryPromise<TPP.Tv.RunStatus> {
        return $.get("https://twitchplayspokemon.tv/api/run_status");
    }

    export function GetCurrentRun(tppData: Collection[]) {
        return tppData.filter(c => c.Name.indexOf("Season") == 0).map(c => c.Runs[c.Runs.length - 1]).pop();
    }

    export function RenderRunStatus(run: TPP.Run, dex: TPP.Pokedex.GlobalDexBase = null) {
        run.Duration = new Date().toISOString();
        var $container = $("<div>");
        $container.append("<i class='fa fa-spinner fa-pulse'>");
        fetchRunStatus().then(status => {
            $container.children().remove();
            $container.append($("<h1>").text(run.RunName));
            $container.append(DrawParty(run, status));
            $container.append(DrawLocation(run, status));
            $container.append(DrawItems(status.items));
            $container.append(DrawBadges(run));
            $container.append(DrawItems(status.pc_items, run.HostName + "'s PC"));
            if (dex) {
                var entries = dex.Entries.filter(e => e.Owners.filter(o => o.Run == run).length > 0);
                dex.Entries = dex.Entries.map(e => {
                    if (entries.indexOf(e) < 0)
                        e.Owners = [];
                    return e;
                });
                $container.append(PokeBox().addClass("pokedex")
                    .append($("<h3>").text("Pokédex"))
                    .append(entries.length < status.caught ? $("<h6>").text("(Outdated)") : "")
                    .append(TPP.Display.Pokedex.DrawOwnedCount(dex))
                    .append(entries.map(e => TPP.Display.Pokedex.DrawDexEntry(e)))
                    .append($("<a>").addClass("plug").attr('href', "pokedex.html").text("See Global Pokédex"))
                )
            }
        }, err => {
            $container.children().remove();
            $container.append($("<h1 class='error'>").text("Run Status is not currently available."));   
        });
        return $container;
    }

    function PokeBox() {
        return $('<div>').addClass("pokeBorder").append($("<div class='border'>")).append($("<div class='border'>"));
    }

    function DrawItems(items: TPP.Tv.Item[], title = "Items") {
        items = items || [];
        var $items = PokeBox().addClass('itemsList');
        $items.append($("<h3>").text(title));
        var $list = $("<ul>").appendTo($items);
        items.forEach(i => $list.append($('<li>').text(i.name)));
        return $items;
    }

    function DrawBadges(run: TPP.Run) {
        var $badges = PokeBox().addClass('badgeList');
        $badges.append($("<h3>").text("Badges"));
        var $list = $("<ul>").appendTo($badges);
        run.Events.filter(e => e.Group == "Badges").forEach(b => {
            var $li = $('<li>').appendTo($list);
            $li.append($('<h3>').text(b.Name));
            $li.append($('<img>').attr('src', b.Image));
            $li.append($('<h4>').text(Duration.parse(b.Time, run.StartTime).toString(TPP.Scale.Days)));
            if (b.Attempts) {
                $li.append($('<h5>').text(b.Attempts.toString() + " Attempt" + (b.Attempts > 1 ? "s" : "")));
            }
        });
        return $badges;
    }

    function DrawLocation(run: TPP.Run, status: TPP.Tv.RunStatus) {
        var $location = $("<div class='location'>");
        if (mapLocations[run.BaseGame] && typeof status.map_id === "number") {
            $location.append($("<h2>").text("Current Location: " + mapLocations[run.BaseGame][status.map_id]));
        }
        return $location;
    }

    function DetermineStatus(status: number) {
        switch (status) {
            case 8:
                return "PSN";
            case 64:
                return "PAR";
        }
        return "";
    }

    function DrawParty(run: TPP.Run, status: TPP.Tv.RunStatus) {
        var $party = PokeBox().addClass('hallOfFameDisplay');
        $party.addClass(cleanString(run.RunName) + " " + (run.Class || "") + " " + (run.BaseGame || ""));
        // $party.css('background-color', run.ColorPrimary);
        // $party.css('border-color', run.ColorSecondary);
        $party.append($("<h3>").text("Current Party"));
        $party.append($("<h4>").text(Duration.parse(run.Duration, run.StartTime).toString(TPP.Scale.Days)));
        var $hofRow = $("<tr>").appendTo($("<table>").appendTo($party));
        var $host = $("<div class='entry host'>").appendTo($("<td>").appendTo($hofRow));
        var $hostImg = $("<img>").attr('src', run.HostImage).attr('alt', run.HostName).attr('title', run.HostName);
        if (run.HostImageSource) {
            $hostImg = $("<a>").attr('href', run.HostImageSource).append($hostImg);
        }
        $host.append($hostImg);
        var $hostInfo = $('<div class="info">').append($('<div class="name">').text(run.HostName)).appendTo($host);
        if (status.money) {
            $hostInfo.append($('<div data-entry="Money">').text("$" + status.money.toString()));
        }
        if (status.coins) {
            $hostInfo.append($('<div data-entry="Coins">').text(status.coins.toString()));
        }
        if (status.caught) {
            $hostInfo.append("<br>");
            $hostInfo.append($('<div data-entry="Owned">').text(status.caught.toString()));
        }
        if (status.seen) {
            $hostInfo.append($('<div data-entry="Seen">').text(status.seen.toString()));
        }
        status.party.forEach(p => {
            var name = (p.name || p.species.name).replace(/\s/g, "&nbsp;").replace(/Ë/g, "µ").replace(/Ê/g, "π");
            var $entry = $("<div class='entry'>");//.addClass((p.Gender || '').toLowerCase());
            if (p.health && !p.health[0]) {
                $entry.addClass("fainted");
            }
            else {
                $entry.addClass(DetermineStatus(p.status));
            }
            $entry.append($("<span class='level'>").text(p.level));
            $entry.append($("<div class='pokesprite'><img src='img/missingno.png'/></div>").addClass(cleanString(p.species.name))/*.addClass(p.Shiny ? "shiny" : "").addClass((p.Gender || "").toLowerCase()).addClass(p.Class).addClass(cleanString(p.Form || ""))*/.attr('title', p.species.name));
            var $info = $("<div class='info'>").append($("<div class='name'>").html(name)).appendTo($entry);
            //if (p.PreviousNick) $info.append($("<div data-entry='Née'>").text(p.PreviousNick));
            if (p.species.id) {
                var idx = p.species.id.toString(), index = ('000' + idx).substring(idx.length);
                $info.append($("<div data-entry='" + index + "'>").text(p.species.name));
            }
            (p.moves || []).forEach((m, i) => $info.append($("<div data-entry='Move " + (i + 1).toString() + "'>").text(m.name)));
            // if (p.IDNo) $info.append($("<div data-entry='IDNo'>").text(p.IDNo));
            $hofRow.append($("<td>").append($entry));
        });
        for (var i = status.party.length; i < 6; i++) {
            $("<div class='entry'>").appendTo($("<td>").appendTo($hofRow));
        }
        return $party.get(0);
    }

}

