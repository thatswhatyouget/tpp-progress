/// <reference path="shared.ts" />

module TPP.Display.RunStatus {

    interface TMList { [key: string]: string }

    var mapLocations: { [key: string]: string[] } = {};
    var TMs: { [key: string]: TMList } = {};
    var keyItems: { [ley: string]: string[] } = {};
    mapLocations["Red"] = mapLocations["Blue"] = mapLocations["Yellow"] = ["Pallet Town", "Viridian City", "Pewter City", "Cerulean City", "Lavender Town", "Vermilion City", "Celadon City", "Fuchsia City", "Cinnabar Island", "Pokémon League", "Saffron City", "Unused Fly location", "Route 1", "Route 2", "Route 3", "Route 4", "Route 5", "Route 6", "Route 7", "Route 8", "Route 9", "Route 10", "Route 11", "Route 12", "Route 13", "Route 14", "Route 15", "Route 16", "Route 17", "Route 18", "Sea Route 19", "Sea Route 20", "Sea Route 21", "Route 22", "Route 23", "Route 24", "Route 25", "Red's house (first floor)", "Red's house (second floor)", "Blue's house", "Professor Oak's Lab", "Pokémon Center (Viridian City)", "Poké Mart (Viridian City)", "School (Viridian City)", "House 1 (Viridian City)", "Pokémon Gym (Viridian City)", "Diglett's Cave (Route 2 entrance)", "Gate (Viridian City/Pewter City) (Route 2)", "Oak's Aide House 1 (Route 2)", "Gate (Route 2)", "Gate (Route 2/Viridian Forest) (Route 2)", "Viridian Forest", "Pewter Museum (floor 1)", "Pewter Museum (floor 2)", "Pokémon Gym (Pewter City)", "House with disobedient Nidoran♂ (Pewter City)", "Poké Mart (Pewter City)", "House with two Trainers (Pewter City)", "Pokémon Center (Pewter City)", "Mt. Moon (Route 3 entrance)", "Mt. Moon", "Mt. Moon", "Invaded house (Cerulean City)", "Poliwhirl for Jynx trade house (Red/Blue)Bulbasaur adoption house (Pokémon Yellow)", "Pokémon Center (Cerulean City)", "Pokémon Gym (Cerulean City)", "Bike Shop (Cerulean City)", "Poké Mart (Cerulean City)", "Pokémon Center (Route 4)", "Invaded house - alternative music (Cerulean City)", "Saffron City Gate (Route 5)", "Entrance to Underground Path (Kanto Routes 5-6) (Route 5)", "Daycare Center (Route 5)", "Saffron City Gate (Route 6)", "Entrance to Underground Path (Route 6)", "Entrance to Underground Path 2 (Route 6)", "Saffron City Gate (Route 7)", "Entrance to Underground Path (Route 7)", "Entrance to Underground Path 2 (Route 7)", "Saffron City Gate (Route 8)", "Entrance to Underground Path (Route 8)", "Pokémon Center (Rock Tunnel)", "Rock Tunnel", "Power Plant", "Gate 1F (Route 11-Route 12)", "Diglett's Cave (Vermilion City entrance)", "Gate 2F (Route 11-Route 12)", "Gate (Route 12-Route 13)", "Sea Cottage", "Pokémon Center (Vermilion City)", "Pokémon Fan Club (Vermilion City)", "Poké Mart (Vermilion City)", "Pokémon Gym (Vermilion City)", "House with Pidgey (Vermilion City)", "Vermilion Harbor (Vermilion City)", "S.S. Anne 1F", "S.S. Anne 2F", "S.S. Anne 3F", "S.S. Anne B1F", "S.S. Anne (Deck)", "S.S. Anne (Kitchen)", "S.S. Anne (Captain's room)", "S.S. Anne 1F (Gentleman's room)", "S.S. Anne 2F (Gentleman's room)", "S.S. Anne B1F (Sailor/Fisherman's room)", "Unused (Victory Road)", "Unused (Victory Road)", "Unused (Victory Road)", "Victory Road (Route 23 entrance)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Lance's Elite Four room", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Unused (Pokémon League)", "Hall of Fame", "Underground Path (Route 5-Route 6)", "Blue's room", "Underground Path (Route 7-Route 8)", "Celadon Department Store 1F", "Celadon Department Store 2F", "Celadon Department Store 3F", "Celadon Department Store 4F", "Celadon Department Store Rooftop Square", "Celadon Department Store Lift", "Celadon Mansion 1F", "Celadon Mansion 2F", "Celadon Mansion 3F", "Celadon Mansion 4F", "Celadon Mansion 4F (Eevee building)", "Pokémon Center (Celadon City)", "Pokémon Gym (Celadon City)", "Rocket Game Corner (Celadon City)", "Celadon Department Store 5F", "Prize corner (Celadon City)", "Restaurant (Celadon City)", "House with Team Rocket members (Celadon City)", "Hotel (Celadon City)", "Pokémon Center (Lavender Town)", "Pokémon Tower F1", "Pokémon Tower F2", "Pokémon Tower F3", "Pokémon Tower F4", "Pokémon Tower F5", "Pokémon Tower F6", "Pokémon Tower F7", "Mr. Fuji's house (Lavender Town)", "Poké Mart (Lavender Town)", "House with NPC discussing Cubone's mother", "Poké Mart (Fuchsia City)", "House with NPCs discussing Bill (Fuchsia City)", "Pokémon Center (Fuchsia City)", "Warden's house (Fuchsia City)", "Safari Zone gate (Fuchsia City)", "Pokémon Gym (Fuchsia City)", "House with NPCs discussing Baoba (Fuchsia City)", "Seafoam Islands", "Seafoam Islands", "Seafoam Islands", "Seafoam Islands", "Vermilion City Fishing Brother", "Fuchsia City Fishing Brother", "Pokémon Mansion (1F)", "Pokémon Gym (Cinnabar Island)", "Pokémon Lab (Cinnabar Island)", "Pokémon Lab - Trade room (Cinnabar Island)", "Pokémon Lab - Room with scientists (Cinnabar Island)", "Pokémon Lab - Fossil resurrection room (Cinnabar Island)", "Pokémon Center (Cinnabar Island)", "Poké Mart (Cinnabar Island)", "Poké Mart - alternative music (Cinnabar Island)", "Pokémon Center (Indigo Plateau)", "Copycat's house 1F (Saffron City)", "Copycat's house 2F (Saffron City)", "Fighting Dojo (Saffron City)", "Pokémon Gym (Saffron City)", "House with Pidgey (Saffron City)", "Poké Mart (Saffron City)", "Silph Co. 1F", "Pokémon Center (Saffron City)", "Mr. Psychic's house (Saffron City)", "Gate 1F (Route 15)", "Gate 2F (Route 15)", "Gate 1F (Cycling Road (Route 16)", "Gate 2F (Cycling Road (Route 16)", "Secret house (Cycling Road) (Route 16)", "Route 12 Fishing Brother", "Gate 1F (Route 18)", "Gate 2F (Route 18)", "Seafoam Islands", "Badges check gate (Route 22)", "Victory Road", "Gate 2F (Route 12)", "House with NPC and HM moves advice Vermilion City", "Diglett's Cave", "Victory Road", "Team Rocket Hideout (B1F)", "Team Rocket Hideout (B2F)", "Team Rocket Hideout (B3F)", "Team Rocket Hideout (B4F)", "Team Rocket Hideout (Lift)", "Unused (Team Rocket Hideout)", "Unused (Team Rocket Hideout)", "Unused (Team Rocket Hideout)", "Silph Co. (2F)", "Silph Co. (3F)", "Silph Co. (4F)", "Silph Co. (5F)", "Silph Co. (6F)", "Silph Co. (7F)", "Silph Co. (8F)", "Pokémon Mansion (2F)", "Pokémon Mansion (3F)", "Pokémon Mansion (B1F)", "Safari Zone (Area 1)", "Safari Zone (Area 2)", "Safari Zone (Area 3)", "Safari Zone (Entrance)", "Safari Zone (Rest house 1)", "Safari Zone (Prize house)", "Safari Zone (Rest house 2)", "Safari Zone (Rest house 3)", "Safari Zone (Rest house 4)", "Unknown Dungeon", "Unknown Dungeon 1F", "Unknown Dungeon B1F", "Name Rater's house (Lavender Town)", "Cerulean City (Gym Badge man)", "Unused (Rock Tunnel)", "Rock Tunnel", "Silph Co. 9F", "Silph Co. 10F", "Silph Co. 11F", "Silph Co. Lift", "(Invalid)", "(Invalid)", "Cable Club Trade Center(*)", "Cable Club Colosseum(*)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "Lorelei's room", "Bruno's room", "Agatha's room", "Summer Beach House (Pokémon Yellow)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "(Invalid)", "?"];

    TMs["Red"] = TMs["Blue"] = TMs["Yellow"] = { "TM01": "Mega Punch", "TM02": "Razor Wind", "TM03": "Swords Dance", "TM04": "Whirlwind", "TM05": "Mega Kick", "TM06": "Toxic", "TM07": "Horn Drill", "TM08": "Body Slam", "TM09": "Take Down", "TM10": "Double-Edge", "TM11": "BubbleBeam", "TM12": "Water Gun", "TM13": "Ice Beam", "TM14": "Blizzard", "TM15": "Hyper Beam", "TM16": "Pay Day", "TM17": "Submission", "TM18": "Counter", "TM19": "Seismic Toss", "TM20": "Rage", "TM21": "Mega Drain", "TM22": "SolarBeam", "TM23": "Dragon Rage", "TM24": "Thunderbolt", "TM25": "Thunder", "TM26": "Earthquake", "TM27": "Fissure", "TM28": "Dig", "TM29": "Psychic", "TM30": "Teleport", "TM31": "Mimic", "TM32": "Double Team", "TM33": "Reflect", "TM34": "Bide", "TM35": "Metronome", "TM36": "Selfdestruct", "TM37": "Egg Bomb", "TM38": "Fire Blast", "TM39": "Swift", "TM40": "Skull Bash", "TM41": "Softboiled", "TM42": "Dream Eater", "TM43": "Sky Attack", "TM44": "Rest", "TM45": "Thunder Wave", "TM46": "Psywave", "TM47": "Explosion", "TM48": "Rock Slide", "TM49": "Tri Attack", "TM50": "Substitute", "HM01": "Cut", "HM02": "Fly", "HM03": "Surf", "HM04": "Strength", "HM05": "Flash" };

    keyItems["Red"] = keyItems["Blue"] = keyItems["Yellow"] = ["Bicycle", "Bike Voucher", "Card Key", "Coin Case", "Dome Fossil", "Gold Teeth", "Good Rod", "Helix Fossil", "Itemfinder", "Lift Key", "Oak's Parcel", "Old Amber", "Old Rod", "Poké Flute", "Secret Key", "Silph Scope", "S.S.Ticket", "Super Rod", "Town Map", "HM01", "HM02", "HM03", "HM04", "HM05"].map(s => s.toUpperCase());


    function fetchRunStatus(): JQueryPromise<TPP.Tv.RunStatus> {
        return $.get("https://twitchplayspokemon.tv/api/run_status");
    }

    export function GetCurrentRun(tppData: Collection[]) {
        return tppData.filter(c => c.Name.indexOf("Season") == 0).map(c => c.Runs[c.Runs.length - 1]).pop();
    }

    export function GetSpecifiedRun(tppData: Collection[], runName: string) {
        runName = runName.trim();
        return tppData.map(c => c.Runs.filter(r => r.RunName == runName).shift()).filter(c => !!c).shift() || tppData.map(c => c.Runs.filter(r => r.RunName.indexOf(runName) >= 0).shift()).filter(c => !!c).shift() || GetCurrentRun(tppData);
    }

    function updateTPPData(tppData: Collection[]): JQueryPromise<Collection[]> {
        return $.get("http://thatswhatyouget.github.io/tpp-progress/bin/tpp-data.json").then((data: Collection[]) => {
            for (var c = 0; c < tppData.length; c++) {
                for (var r = 0; r < tppData[c].Runs.length; r++) {
                    tppData[c].Runs[r].Events = data[c].Runs[r].Events;
                }
            }
            return tppData;
        }, e => tppData);
    }

    function condenseText(text: string) {
        text = text.replace(/'l/ig, "|");
        text = text.replace(/'m/ig, "~");
        text = text.replace(/'r/ig, "%");
        text = text.replace(/'s/ig, "&");
        text = text.replace(/'t/ig, '}');
        text = text.replace(/'v/ig, "@");
        text = text.replace(/#/ig, "#.");
        return text;
    }

    export function RenderRunStatus(run: TPP.Run, dex: TPP.Pokedex.GlobalDexBase = null) {
        var $container = $("<div>");
        $container.append($("<i class='fa fa-spinner fa-pulse'>"));
        if (!run.Ongoing) {
            drawRunStatus(run, dex, <Tv.RunStatus>{}, $container);
        }
        else {
            fetchRunStatus().then(status => drawRunStatus(run, dex, status, $container), err => {
                $container.children().remove();
                $container.append($("<h1 class='error'>").text("Run Status is not currently available."));
            });
        }
        return $container;
    }

    export function UpdateRunStatus(run: TPP.Run, $container: JQuery, tppData: Collection[], dexFunction: (tppData: Collection[]) => TPP.Pokedex.GlobalDexBase = () => null) {
        $container.find('h1').first().css('position', 'relative').append($('<i class="fa fa-refresh fa-spin">').css({
            position: "absolute",
            right: "1em"
        }));
        var getStatus = fetchRunStatus();
        return updateTPPData(tppData).then(d => getStatus.then(status => drawRunStatus(run, dexFunction(tppData), status, $container), e => {
            $container.find('.fa-refresh').remove();
            console.log("Could not update run status.");
        }));
    }

    function drawRunStatus(run: TPP.Run, dex: TPP.Pokedex.GlobalDexBase, status: TPP.Tv.RunStatus, $container: JQuery) {
        run.Duration = new Date().toISOString();
        $container.children().remove();
        $container.append($("<h1>").text(run.RunName));
        if (status.party)
            $container.append(DrawParty(run, status));
        else if (run.Events.filter(e => (<HallOfFame>e).Party).length > 0)
            $container.append(DrawHallOfFame(run, <HallOfFame>run.Events.filter(e => (<HallOfFame>e).Party).pop()));
        if (status.map_id)
            $container.append(DrawLocation(run, status));
        if (extractPastHosts(run).length > 0)
            $container.append(DrawBadges(run, extractPastHosts(run)));
        if (extractEliteFourRematch(run).length > 0)
            $container.append(DrawBadges(run, extractEliteFourRematch(run)));
        if (extractRematchBadges(run).length > 0)
            $container.append(DrawBadges(run, extractRematchBadges(run)));
        if (extractEliteFour(run).length > 0)
            $container.append(DrawBadges(run, extractEliteFour(run)));
        if (extractBadges(run).length > 0)
            $container.append(DrawBadges(run));
        if (status.items)
            $container.append(DrawItems(status.items, undefined, TMs[run.BaseGame], keyItems[run.BaseGame]));
        if (status.pc_items)
            $container.append(DrawItems(status.pc_items, run.HostName + "'s PC", TMs[run.BaseGame], keyItems[run.BaseGame]));
        if (dex && dex.TotalOwnedBy(run) > 0) {
            var entries = dex.Entries.filter(e => e.Owners.filter(o => o.Run == run).length > 0);
            dex.Entries = dex.Entries.map(e => {
                if (entries.indexOf(e) < 0)
                    e.Owners = [];
                return e;
            });
            // $container.append(PokeBox().addClass("pokedex").addClass(cleanString(run.RunName))
            //     .append(WindowShadeButton())    
            //     .append($("<h3>").text("Pokédex"))
            //     .append(entries.length < status.caught ? $("<h6>").text("(Outdated)") : "")
            //     .append(TPP.Display.Pokedex.DrawOwnedCount(dex))
            //     .append(entries.map(e => TPP.Display.Pokedex.DrawDexEntry(e)))
            //     .append($("<a>").addClass("plug").attr('href', "pokedex.html").text("See Global Pokédex"))
            // )
        }
    }

    function PokeBox() {
        return $('<div>').addClass("pokeBorder").append($("<div class='border'>")).append($("<div class='border'>"));
    }

    function DrawItems(items: TPP.Tv.Item[], title = "Items", itemSupplement: TMList = {}, keyItems: string[] = []) {
        items = items || [];
        var $items = PokeBox().addClass('itemsList');
        $items.append(WindowShadeButton());
        $items.append($("<h3>").text(condenseText(title + " (" + items.length + ")")));
        var $list = $("<ul>").appendTo($items);
        items.map(i => {
            if (keyItems.indexOf(i.name.toUpperCase()) >= 0 && i.count < 2) {
                i.count = null;
            }
            if (itemSupplement[i.name.toUpperCase()]) {
                i.name += " " + itemSupplement[i.name.toUpperCase()];
            }
            return i;
        }).forEach(i => $list.append($('<li>').text(condenseText(i.name)).attr('data-quantity', i.count)));
        return $items;
    }

    function extractBadges(run: TPP.Run) {
        return run.Events.filter(e => e.Group == "Badges" || e.Group == "Bosses" || e.Group == "Kingdoms");
    }
    function extractEliteFour(run: TPP.Run) {
        return run.Events.filter(e => e.Group == "Elite Four" || e.Group == "Final Bosses" || (e.Group == "Champions" && e.Image.indexOf("rematch") < 0 && e.Image.indexOf("hosts") < 0));
    }
    function extractEliteFourRematch(run: TPP.Run) {
        return run.Events.filter(e => e.Group == "Elite Four Rematch" || (e.Group == "Champions" && e.Image.indexOf("rematch") > 0));
    }
    function extractPastHosts(run: TPP.Run) {
        return run.Events.filter(e => e.Group == "Past Hosts" || (e.Group == "Champions" && e.Image.indexOf("hosts") > 0));
    }
    function extractRematchBadges(run: TPP.Run) {
        return run.Events.filter(e => e.Group == "Rematch Badges");
    }

    function DrawBadges(run: TPP.Run, badges = extractBadges(run)) {
        var $badges = PokeBox().addClass('badgeList');
        $badges.append(WindowShadeButton());
        $badges.append($("<h3>").text(condenseText(badges[0].Group)));
        var $list = $("<ul>").appendTo($badges);
        badges.forEach(b => {
            var $li = $('<li>').appendTo($list);
            $li.append($('<h3>').text(b.Name));
            $li.append($('<img>').attr('src', b.Image));
            $li.append($('<h4>').text((Duration.parse(b.Time, run.StartTime).toString(TPP.Scale.Days)).replace(/m.*/, 'm')));
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
            case 1:
                return "SLP";
            case 2:
                return "FRZ";
            case 4:
                return "BRN";
            case 8:
                return "PSN";
            case 32:
                return "PSN";
            case 64:
                return "PAR";
        }
        return "";
    }

    function WindowShadeButton() {
        return $("<i>").addClass('fa fa-window-restore window-shade').click(function () {
            $(this).parent().children("*:not(h1,h2,h3,h4,h5,h6,.border,.window-shade)").slideToggle();
        });
    }

    function DrawParty(run: TPP.Run, status: TPP.Tv.RunStatus) {
        var $party = PokeBox().addClass('hallOfFameDisplay');
        $party.append(WindowShadeButton());
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
        if (status.badges) {
            var badges = status.badges.toString(2).match(/1/g).length; //convert to binary, count the 1s.
            $hostInfo.append($('<div data-entry="Badges">').text(badges));
        }
        if (status.caught) {
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

    function DrawHallOfFame(runInfo: TPP.Run, hofInfo: TPP.HallOfFame, scale = TPP.Scale.Days) {
        var $hof = PokeBox().addClass("hallOfFameDisplay");
        $hof.append(WindowShadeButton());
        $hof.addClass(cleanString(runInfo.RunName) + " " + (runInfo.Class || "") + " " + (runInfo.BaseGame || ""));
        // $hof.css('background-color', runInfo.ColorPrimary);
        // $hof.css('border-color', runInfo.ColorSecondary);
        var time = new Date((Duration.parse(hofInfo.Time, runInfo.StartTime).TotalSeconds + runInfo.StartTime) * 1000);
        $hof.append($("<h3>").text(condenseText(hofInfo.Name + " - " + time.toLocaleDateString())));
        $hof.append($("<h4>").text(Duration.parse(hofInfo.Time, runInfo.StartTime).toString(scale)));
        if (hofInfo.Attempts) $hof.append($("<h5>").text(hofInfo.Attempts + " Attempts"));
        $hof.append($("<img>").attr('src', hofInfo.Image));
        var $hofRow = $("<tr>").appendTo($("<table>").appendTo($hof));
        var $host = $("<div class='entry host'>").appendTo($("<td>").appendTo($hofRow));
        var $hostImg = $("<img>").attr('src', runInfo.HostImage).attr('alt', runInfo.HostName).attr('title', runInfo.HostName);
        if (runInfo.HostImageSource) {
            $hostImg = $("<a>").attr('href', runInfo.HostImageSource).append($hostImg);
        }
        $host.append($hostImg);
        var $hostInfo = $('<div class="info">').append($('<div class="name">').text(runInfo.HostName)).appendTo($host);
        if (hofInfo.IDNo) {
            $hostInfo.append($('<div data-entry="IDNo">').text(hofInfo.IDNo));
        }
        hofInfo.Party.forEach(p => {
            var name = (p.Nickname || p.Pokemon).replace(/\s/g, "&nbsp;");//.replace(/π/g, "<i class='pk'></i>").replace(/µ/g, "<i class='mn'></i>");
            var $entry = $("<div class='entry'>").addClass((p.Gender || '').toLowerCase());
            $entry.append($("<span class='level'>").text(p.Level));
            $entry.append($("<div class='pokesprite'><img src='img/missingno.png'/></div>").addClass(cleanString(p.Pokemon)).addClass(p.Shiny ? "shiny" : "").addClass((p.Gender || "").toLowerCase()).addClass(p.Class).addClass(cleanString(p.Form || "")).attr('title', p.Pokemon));
            var $info = $("<div class='info'>").append($("<div class='name'>").html(name)).appendTo($entry);
            //if (p.PreviousNick) $info.append($("<div data-entry='Née'>").text(p.PreviousNick));
            if (p.Number) {
                var idx = p.Number.toString(), index = ('000' + idx).substring(idx.length);
                $info.append($("<div data-entry='" + index + "'>").text(p.Pokemon));
            }
            if (p.Met) $info.append($("<div data-entry='Met'>").text(p.Met));
            if (p.Type1) $info.append($("<div data-entry='Type 1'>").text(p.Type1));
            if (p.Type2) $info.append($("<div data-entry='Type 2'>").text(p.Type2));
            if (p.OT) $info.append($("<div data-entry='OT'>").text(p.OT));
            if (p.IDNo) $info.append($("<div data-entry='IDNo'>").text(p.IDNo));
            $hofRow.append($("<td>").append($entry));
        });
        for (var i = hofInfo.Party.length; i < 6; i++) {
            $("<div class='entry'>").appendTo($("<td>").appendTo($hofRow));
        }

        return $hof.get(0);
    }

}

