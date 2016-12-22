/// <reference path="tpp-progress.ts" />
class RunSummary {
    public RunName: string;
    public StartDate: Date;
    public Duration: Duration;
    public HostName: string;
    public Badges: number;
    public Pokedex: number;

    constructor(run: TPP.Run) {
        this.RunName = run.RunName;
        this.StartDate = new Date(run.StartTime * 1000);
        this.Duration = Duration.parse(run.Duration, run.StartTime);
        this.HostName = run.HostName;
        this.Badges = run.Events.filter(e => e.Group == "Badges").length;
        this.Pokedex = run.Events.filter(e => e.Group == "Pokemon" && e.Name != "Egg").length;
    }
}

interface HofInfo {
    Pokemon: string;
    Ribbon: string;
    RunName: string;
    HostName: string;
    Nickname: string;
    UnmodifiedNick: string;
    PreviousNick: string;
    Time: number;
}

class PokedexSummary {
    public OwnedDict: { [key: string]: boolean | number };
    public HallOfFame: HofInfo[] = [];
    constructor(public Run: TPP.Run) {
        if (Run.Events.filter(e => e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0)).length) {
            this.OwnedDict = {};
            PokeList.forEach(p => this.OwnedDict[p] = false);
            Run.Events.filter(e => e.Group == "Pokemon").forEach(p => {
                if (PokeList.indexOf(p.Name) >= 0)
                    this.OwnedDict[p.Name] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
                else if (PokeList.indexOf(p.Class) >= 0)    //catch Pokemon with unusual names
                    this.OwnedDict[p.Class] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
            });
            Run.Events.filter(e => (<TPP.HallOfFame>e).Party && Duration.parse(e.Time, Run.StartTime).TotalSeconds >= 0).forEach(hof => (<TPP.HallOfFame>hof).Party.forEach(p => {
                var mon = PokeList.indexOf(p.Pokemon) >= 0 ? p.Pokemon : PokeList.indexOf(p.Class) >= 0 ? p.Class : null;
                if (mon) {
                    this.HallOfFame.push({
                        Pokemon: mon,
                        Ribbon: hof.Image,
                        RunName: Run.RunName,
                        HostName: Run.HostName,
                        Nickname: (p.Nickname || p.Pokemon).replace(/π/g, 'ᴾk').replace(/µ/g, 'ᴹn'),
                        UnmodifiedNick: p.Nickname,
                        PreviousNick: p.PreviousNick,
                        Time: Duration.parse(hof.Time, Run.StartTime).TotalSeconds + Run.StartTime
                    });
                }
            }));
        }
    }
}

function generateRunSummary(tppData: TPP.Collection[]) {
    var $table = $("<table>").append($("<thead>").append($("<tr>").append(["Run", "Started", "Duration", "Host", "Badges Earned", "Species Caught"].map(th => $("<th>").text(th)))));
    var $tbody = $('<tbody>').appendTo($table);
    tppData.forEach(c => c.Runs.forEach(r => {
        if (r.StartTime * 1000 > Date.now()) return;
        var $row = $("<tr>");
        $tbody.append($row);
        $.when(r.Scraper ? Scrape(r) : r).then(r => new RunSummary(r)).then(summary => $row.append([
            summary.RunName,
            summary.StartDate.toISOString(),
            summary.Duration.toString(c.Scale),
            summary.HostName,
            summary.Badges,
            summary.Pokedex || "-----"
        ].map(td => $("<td>").text(td))).css({ 'background-color': r.ColorPrimary, 'border-color': r.ColorSecondary }))
    }));
    return $table;
}


function dexSummarize(tppData: TPP.Collection[]): JQueryPromise<PokedexSummary[]> {
    return $.when.apply($,
        Array.prototype.concat.apply([],
            tppData.map(c => c.Runs.map(r => $.when(r.Scraper && r.Scraper.pokemon ? Scrape(r) : r).then(r => new PokedexSummary(r))))
        )
    ).then((...summaries: PokedexSummary[]) => summaries.filter(s => !!s.OwnedDict));
}

function generatePokedexSummary(tppData: TPP.Collection[]) {
    var $table = $("<table>");
    dexSummarize(tppData).then(summaries => {
        $table.append($("<thead>").append($("<tr>").append($("<th>").text("Pokemon")).append(summaries.map(s => $("<th>").text(s.Run.RunName).css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary })))));
        $('<tbody>').appendTo($table).append(PokeList.map(p => $("<tr>").append($("<th>").text(p)).append(summaries.map(s => $("<td>").text(s.OwnedDict[p] ? "X" : "").css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary, 'text-align': "center" })))));
    });
    return $table;
}

function generateGlobalDex(tppData: TPP.Collection[]) {
    var element = $("<div>").append("<i class='fa fa-spinner fa-pulse'>");
    var skipCheckOwnership = QueryString["justmon"];
    var hofOnly = !!QueryString["hofonly"];
    if (QueryString["nowifi"]) {
        tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.filter(e => e.Class != "WifiTrade")));
    }
    if (QueryString["ms"]) {
        $('#pokedex').addClass("ms");
    }
    if (QueryString["only"]) {
        tppData = tppData.filter(c => QueryString["only"].split(',').filter(f => c.Name.indexOf(f.trim()) >= 0).length > 0);
    }
    if (QueryString["run"]) {
        tppData = tppData.map(c => {
            c.Runs = c.Runs.filter(r => QueryString["run"].split(',').filter(f => r.RunName.indexOf(f.trim()) >= 0).length > 0);
            return c;
        }).filter(c => c.Runs.length > 0);
    }
    if (QueryString["g"]) {
        PokeList = PokeList.slice(0, (GenSlice[parseInt(QueryString["g"] || "0")] || PokeList.length) + 1);
    }
    if (QueryString["dex"]) {
        var dexName: string = Array.prototype.concat.apply(
            ['National'],
            Object.keys(Regional).filter(k => k.toLowerCase() == QueryString["dex"].toLowerCase())
        ).pop();
        PokeList = Regional[dexName].map(i => typeof i === "string" ? i : PokeList[i]);
        $('#dexName').text(dexName + (dexName.toLowerCase().indexOf('book') + dexName.indexOf('dex') > 0 ? "" : " Pokédex"));
        $('#pokedex').addClass(specialClasses[dexName]);
        if (runRestrictions[dexName]) {
            tppData = tppData.map(c => {
                c.Runs = c.Runs.filter(r => runRestrictions[dexName].toLowerCase().split(',').filter(f => r.RunName.toLowerCase().indexOf(f.trim()) >= 0).length > 0);
                return c;
            }).filter(c => c.Runs.length > 0);
        }
    }
    dexSummarize(tppData).then(summaries => {
        summaries = summaries.sort((s1, s2) => s1.Run.StartTime - s2.Run.StartTime);
        var hofData: HofInfo[] = summaries.map(s => s.HallOfFame).reduce((a, b) => a.concat(b)).sort((h1, h2) => h1.Time - h2.Time);
        hofData = hofData.filter(c => hofData.filter(i => i.HostName == c.HostName && i.Pokemon == c.Pokemon && (i.Nickname == c.Nickname || c.PreviousNick == i.UnmodifiedNick)).shift() == c);
        var fullList = {};
        console.dir(hofData);
        element.find('*').remove();
        element.append(PokeList.map((p, i) => {
            if (!p) return;
            var idx = i.toString(), index = ('000' + idx).substring(idx.length);
            var pokeName = cleanString(p) || "unidentified";
            var $entry = $("<div class='dexEntry'>")
                .append("<h3>" + index + "</h3>")
                .append("<h4>" + p + "</h4>")
                .append("<div class='pokesprite " + pokeName + "'><img src='img/missingno.png'></div>");
            var ownedBy = [];
            var bgColor;
            if (skipCheckOwnership) {
                $entry.addClass('owned');
            }
            else {
                var hofs = hofData.filter(mon => mon.Pokemon == p);
                if (hofs.length) {
                    var $hofRibbons = $("<div>").addClass("hofRibbon").appendTo($entry);
                    hofs.forEach(mon => {
                        var title = mon.HostName + "'s " + mon.Nickname + " (" + mon.RunName + ")";
                        $hofRibbons.append($("<img>").attr('src', mon.Ribbon).attr("alt", title).attr('title', title));
                    });
                }
                else if (hofOnly) {
                    return $entry.hide();
                }
                summaries.forEach(s => {
                    var addHost = ownedBy.push;
                    if (s.OwnedDict[p]) {
                        $entry.addClass('owned');
                        fullList[p] = fullList[p] || s.OwnedDict[p];
                        bgColor = bgColor || s.Run.ColorPrimary;
                        if (s.OwnedDict[p] < fullList[p]) { //claim it
                            fullList[p] = s.OwnedDict[p];
                            bgColor = s.Run.ColorPrimary;
                            addHost = ownedBy.unshift;
                        }
                        if (!s.Run.Revisit || ownedBy.indexOf(s.Run.HostName + " (" + s.Run.Revisit.Run + ")") < 0)
                            addHost.call(ownedBy, s.Run.HostName + " (" + s.Run.RunName + ")");
                    }
                });
            }
            if (ownedBy.length)
                $entry.attr('title', 'Owned by:\n' + ownedBy.join('\n'));
            else if (!skipCheckOwnership)
                $entry.attr('title', "Didn't Catch");
            if (bgColor)
                $entry.css('background-color', bgColor);
            if (p == "MissingNo.") {
                if (fullList[p])
                    delete fullList[p];
                else
                    $entry.hide();
            }
            return $entry;
        }));
        if (!skipCheckOwnership) {
            var numOwned = Object.keys(fullList).length;
            var numTotal = PokeList.filter(p => !!p && p != "MissingNo.").length;
            var percent = (numOwned / numTotal * 100).toFixed(1);
            element.prepend("<h2 class='total'>Owned: <span>" + numOwned + "/" + numTotal + " (" + percent + "%)</span></div>");
        }
        else {
            element.prepend("<br>");
        }
    });
    return element;
}

var PokeList = ["MissingNo.", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "NidoranF", "Nidorina", "Nidoqueen", "NidoranM", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion", "Rowlet", "Dartrix", "Decidueye", "Litten", "Torracat", "Incineroar", "Popplio", "Brionne", "Primarina", "Pikipek", "Trumbeak", "Toucannon", "Yungoos", "Gumshoos", "Grubbin", "Charjabug", "Vikavolt", "Crabrawler", "Crabominable", "Oricorio", "Cutiefly", "Ribombee", "Rockruff", "Lycanroc", "Wishiwashi", "Mareanie", "Toxapex", "Mudbray", "Mudsdale", "Dewpider", "Araquanid", "Fomantis", "Lurantis", "Morelull", "Shiinotic", "Salandit", "Salazzle", "Stufful", "Bewear", "Bounsweet", "Steenee", "Tsareena", "Comfey", "Oranguru", "Passimian", "Wimpod", "Golisopod", "Sandygast", "Palossand", "Pyukumuku", "Type: Null", "Silvally", "Minior", "Komala", "Turtonator", "Togedemaru", "Mimikyu", "Bruxish", "Drampa", "Dhelmise", "Jangmo-o", "Hakamo-o", "Kommo-o", "Tapu Koko", "Tapu Lele", "Tapu Bulu", "Tapu Fini", "Cosmog", "Cosmoem", "Solgaleo", "Lunala", "Nihilego", "Buzzwole", "Pheromosa", "Xurkitree", "Celesteela", "Kartana", "Guzzlord", "Necrozma", "Magearna", "Marshadow"];

var GenSlice = [PokeList.length, 151, 251, 386, 493, 649, 721, 802];

var Regional: { [key: string]: (number | string)[] } = {
    "National": PokeList.map((v, i) => i),
    "Kanto": PokeList.map((v, i) => i).filter(i => i <= GenSlice[1]),
    "New": [],
    "Johto": [-1, 152, 153, 154, 155, 156, 157, 158, 159, 160, 16, 17, 18, 21, 22, 163, 164, 19, 20, 161, 162, 172, 25, 26, 10, 11, 12, 13, 14, 15, 165, 166, 167, 168, 74, 75, 76, 41, 42, 169, 173, 35, 36, 174, 39, 40, 175, 176, 27, 28, 23, 24, 206, 179, 180, 181, 194, 195, 92, 93, 94, 201, 95, 208, 69, 70, 71, 187, 188, 189, 46, 47, 60, 61, 62, 186, 129, 130, 118, 119, 79, 80, 199, 43, 44, 45, 182, 96, 97, 63, 64, 65, 132, 204, 205, 29, 30, 31, 32, 33, 34, 193, 469, 191, 192, 102, 103, 185, 202, 48, 49, 123, 212, 127, 214, 109, 110, 88, 89, 81, 82, 100, 101, 190, 424, 209, 210, 37, 38, 58, 59, 234, 183, 184, 50, 51, 56, 57, 52, 53, 54, 55, 66, 67, 68, 236, 106, 107, 237, 203, 128, 241, 240, 126, 238, 124, 239, 125, 122, 235, 83, 177, 178, 211, 72, 73, 98, 99, 213, 120, 121, 90, 91, 222, 223, 224, 170, 171, 86, 87, 108, 463, 114, 465, 133, 134, 135, 136, 196, 197, 116, 117, 230, 207, 225, 220, 221, 473, 216, 217, 231, 232, 226, 227, 84, 85, 77, 78, 104, 105, 115, 111, 112, 198, 228, 229, 218, 219, 215, 200, 137, 233, 113, 242, 131, 138, 139, 140, 141, 142, 143, 1, 2, 3, 4, 5, 6, 7, 8, 9, 144, 145, 146, 243, 244, 245, 147, 148, 149, 246, 247, 248, 249, 250, 150, 151, 251],
    "Hoenn": [],
    "New Hoenn": [-1, 252, 253, 254, 255, 256, 257, 258, 259, 260, 261, 262, 263, 264, 265, 266, 267, 268, 269, 270, 271, 272, 273, 274, 275, 276, 277, 278, 279, 280, 281, 282, 475, 283, 284, 285, 286, 287, 288, 289, 63, 64, 65, 290, 291, 292, 293, 294, 295, 296, 297, 118, 119, 129, 130, 298, 183, 184, 74, 75, 76, 299, 476, 300, 301, 41, 42, 169, 72, 73, 302, 303, 304, 305, 306, 66, 67, 68, 307, 308, 309, 310, 311, 312, 81, 82, 462, 100, 101, 313, 314, 43, 44, 45, 182, 84, 85, 406, 315, 407, 316, 317, 318, 319, 320, 321, 322, 323, 218, 219, 324, 88, 89, 109, 110, 325, 326, 27, 28, 327, 227, 328, 329, 330, 331, 332, 333, 334, 335, 336, 337, 338, 339, 340, 341, 342, 343, 344, 345, 346, 347, 348, 174, 39, 40, 349, 350, 351, 120, 121, 352, 353, 354, 355, 356, 477, 357, 433, 358, 359, 37, 38, 172, 25, 26, 54, 55, 360, 202, 177, 178, 203, 231, 232, 127, 214, 111, 112, 464, 361, 362, 478, 363, 364, 365, 366, 367, 368, 369, 222, 170, 171, 370, 116, 117, 230, 371, 372, 373, 374, 375, 376, 377, 378, 379, 380, 381, 382, 383, 384, 385, 386],
    "Sinnoh": [],
    "Enhanced Sinnoh": [-1, 387, 388, 389, 390, 391, 392, 393, 394, 395, 396, 397, 398, 399, 400, 401, 402, 403, 404, 405, 63, 64, 65, 129, 130, 406, 315, 407, 41, 42, 169, 74, 75, 76, 95, 208, 408, 409, 410, 411, 66, 67, 68, 54, 55, 412, 413, 414, 265, 266, 267, 268, 269, 415, 416, 417, 418, 419, 420, 421, 422, 423, 214, 190, 424, 425, 426, 427, 428, 92, 93, 94, 200, 429, 198, 430, 431, 432, 118, 119, 339, 340, 433, 358, 434, 435, 307, 308, 436, 437, 77, 78, 438, 185, 439, 122, 440, 113, 242, 173, 35, 36, 441, 172, 25, 26, 163, 164, 442, 443, 444, 445, 446, 143, 201, 447, 448, 194, 195, 278, 279, 203, 449, 450, 298, 183, 184, 451, 452, 453, 454, 455, 223, 224, 456, 457, 72, 73, 349, 350, 458, 226, 459, 460, 215, 461, 480, 481, 482, 483, 484, 490, 479, 207, 472, 299, 476, 280, 281, 282, 475, 108, 463, 133, 134, 135, 136, 196, 197, 470, 471, 333, 334, 175, 176, 468, 228, 229, 81, 82, 462, 114, 465, 193, 469, 357, 111, 112, 464, 355, 356, 477, 137, 233, 474, 123, 212, 239, 125, 466, 240, 126, 467, 220, 221, 473, 361, 362, 478, 359, 487],
    "Unova": [494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 506, 507, 508, 509, 510, 511, 512, 513, 514, 515, 516, 517, 518, 519, 520, 521, 522, 523, 524, 525, 526, 527, 528, 529, 530, 531, 532, 533, 534, 535, 536, 537, 538, 539, 540, 541, 542, 543, 544, 545, 546, 547, 548, 549, 550, 551, 552, 553, 554, 555, 556, 557, 558, 559, 560, 561, 562, 563, 564, 565, 566, 567, 568, 569, 570, 571, 572, 573, 574, 575, 576, 577, 578, 579, 580, 581, 582, 583, 584, 585, 586, 587, 588, 589, 590, 591, 592, 593, 594, 595, 596, 597, 598, 599, 600, 601, 602, 603, 604, 605, 606, 607, 608, 609, 610, 611, 612, 613, 614, 615, 616, 617, 618, 619, 620, 621, 622, 623, 624, 625, 626, 627, 628, 629, 630, 631, 632, 633, 634, 635, 636, 637, 638, 639, 640, 641, 642, 643, 644, 645, 646, 647, 648, 649],
    "New Unova": [494, 495, 496, 497, 498, 499, 500, 501, 502, 503, 504, 505, 509, 510, 519, 520, 521, 540, 541, 542, 191, 192, 506, 507, 508, 179, 180, 181, 54, 55, 298, 183, 184, 447, 448, 206, 531, 511, 512, 513, 514, 515, 516, 543, 544, 545, 109, 110, 81, 82, 462, 58, 59, 240, 126, 467, 239, 125, 466, 19, 20, 41, 42, 169, 88, 89, 527, 528, 524, 525, 526, 95, 208, 532, 533, 534, 529, 530, 300, 301, 427, 428, 546, 547, 548, 549, 517, 518, 173, 35, 36, 133, 134, 135, 136, 196, 197, 470, 471, 551, 552, 553, 554, 555, 550, 568, 569, 572, 573, 627, 628, 629, 630, 27, 28, 557, 558, 559, 560, 556, 561, 328, 329, 330, 562, 563, 564, 565, 566, 567, 599, 600, 601, 406, 315, 407, 574, 575, 576, 577, 578, 579, 415, 416, 587, 214, 127, 522, 523, 418, 419, 570, 571, 580, 581, 588, 589, 616, 617, 585, 586, 590, 591, 351, 299, 476, 304, 305, 306, 343, 344, 636, 637, 595, 596, 597, 598, 602, 603, 604, 592, 593, 594, 610, 611, 612, 335, 336, 605, 606, 607, 608, 609, 631, 632, 613, 614, 615, 641, 642, 645, 451, 452, 227, 322, 323, 325, 326, 425, 426, 353, 354, 278, 279, 337, 338, 359, 114, 465, 619, 620, 207, 472, 624, 625, 638, 639, 640, 535, 536, 537, 618, 213, 458, 226, 223, 224, 222, 120, 121, 320, 321, 131, 363, 364, 365, 333, 334, 37, 38, 436, 437, 215, 461, 225, 582, 583, 584, 220, 221, 473, 132, 374, 375, 376, 86, 87, 538, 539, 626, 621, 622, 623, 633, 634, 635, 287, 288, 289, 341, 342, 174, 39, 40, 108, 463, 193, 469, 357, 455, 453, 454, 246, 247, 248, 643, 644, 646, 647, 648, 649],
    "Central Kalos": [-1, 650, 651, 652, 653, 654, 655, 656, 657, 658, 659, 660, 263, 264, 661, 662, 663, 16, 17, 18, 664, 665, 666, 10, 11, 12, 13, 14, 15, 511, 512, 513, 514, 515, 516, 172, 25, 26, 399, 400, 206, 298, 183, 184, 412, 413, 414, 283, 284, 129, 130, 341, 342, 118, 119, 318, 319, 667, 668, 54, 55, 83, 447, 448, 280, 281, 282, 475, 669, 670, 671, 406, 315, 407, 165, 166, 415, 416, 300, 301, 1, 2, 3, 4, 5, 6, 7, 8, 9, 672, 673, 674, 675, 676, 84, 85, 311, 312, 316, 317, 559, 560, 63, 64, 65, 43, 44, 45, 182, 161, 162, 290, 291, 292, 677, 678, 352, 679, 680, 681, 543, 544, 545, 531, 235, 453, 454, 580, 581, 682, 683, 684, 685, 313, 314, 187, 188, 189, 446, 143, 293, 294, 295, 307, 308, 41, 42, 169, 610, 611, 612, 719, 720, 721],
    "Coastal Kalos": [-1, 425, 426, 619, 620, 335, 336, 325, 326, 359, 686, 687, 337, 338, 371, 372, 373, 278, 279, 276, 277, 688, 689, 557, 558, 72, 73, 320, 321, 370, 690, 691, 692, 693, 120, 121, 90, 91, 211, 116, 117, 230, 369, 551, 552, 553, 694, 695, 449, 450, 111, 112, 464, 95, 208, 527, 528, 66, 67, 68, 104, 105, 115, 303, 696, 697, 698, 699, 142, 597, 598, 209, 210, 309, 310, 228, 229, 133, 134, 135, 136, 196, 197, 470, 471, 700, 587, 193, 469, 701, 561, 622, 623, 299, 476, 296, 297, 538, 539, 396, 397, 398, 434, 435, 29, 30, 31, 32, 33, 34, 702, 433, 358, 439, 122, 577, 578, 579, 360, 202, 524, 525, 526, 302, 703, 128, 241, 179, 180, 181, 127, 214, 417, 79, 80, 199, 102, 103, 441, 458, 226, 366, 367, 368, 223, 224, 222, 170, 171, 594, 131, 144, 145, 146],
    "Mountain Kalos": [-1, 50, 51, 328, 329, 330, 443, 444, 445, 74, 75, 76, 218, 219, 213, 451, 452, 194, 195, 704, 705, 706, 588, 589, 616, 617, 69, 70, 71, 455, 92, 93, 94, 60, 61, 62, 186, 23, 24, 618, 339, 340, 509, 510, 261, 262, 504, 505, 624, 625, 707, 198, 430, 590, 591, 270, 271, 272, 418, 419, 550, 708, 709, 710, 711, 607, 608, 609, 479, 81, 82, 462, 100, 101, 568, 569, 220, 221, 473, 712, 713, 613, 614, 238, 124, 582, 583, 584, 459, 460, 225, 215, 461, 532, 533, 534, 324, 27, 28, 304, 305, 306, 246, 247, 248, 631, 632, 167, 168, 21, 22, 615, 227, 714, 715, 207, 472, 163, 164, 174, 39, 40, 353, 354, 570, 571, 574, 575, 576, 438, 185, 327, 216, 217, 108, 463, 123, 212, 132, 333, 334, 621, 633, 634, 635, 147, 148, 149, 716, 717, 718, 150],
    "Alola": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 200, 429, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 371, 372, 373, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 759, 760, 761, 762, 763, 764, 127, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 408, 409, 410, 411, 566, 567, 564, 565, 708, 709, 299, 476, 771, 170, 171, 772, 773, 718, 568, 569, 227, 132, 173, 35, 36, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 777, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 707, 778, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 209, 210, 422, 423, 369, 781, 318, 319, 320, 321, 131, 102, 103, 782, 783, 784, 587, 123, 212, 198, 430, 447, 448, 147, 148, 149, 142, 785, 786, 787, 788, 789, 790, 791, 792, 793, 794, 795, 796, 797, 798, 799, 800, 801, 802],
    "Melemele Island": [-1, 722, 723, 724, 725, 726, 727, 728, 729, 730, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 165, 166, 167, 168, 172, 25, 26, 736, 737, 738, 438, 185, 440, 113, 242, 446, 143, 79, 80, 199, 278, 279, 63, 64, 65, 52, 53, 81, 82, 462, 88, 89, 58, 59, 96, 97, 296, 297, 235, 739, 740, 92, 93, 94, 425, 426, 200, 429, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 225, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 327, 72, 73, 456, 457, 746, 370, 222, 747, 748, 90, 91, 371, 372, 373, 785],
    "Akala Island": [-1, 731, 732, 733, 734, 735, 19, 20, 10, 11, 12, 736, 737, 738, 438, 185, 440, 113, 242, 278, 279, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 741, 54, 55, 129, 130, 339, 340, 72, 73, 456, 457, 746, 370, 222, 747, 748, 506, 507, 508, 133, 134, 135, 136, 196, 197, 470, 471, 700, 749, 750, 174, 39, 40, 128, 241, 283, 284, 751, 752, 753, 754, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 349, 350, 594, 661, 662, 663, 757, 758, 104, 105, 115, 240, 126, 467, 759, 760, 761, 762, 763, 764, 127, 765, 766, 704, 705, 706, 351, 767, 768, 120, 121, 769, 770, 408, 409, 410, 411, 566, 567, 564, 565, 708, 709, 299, 476, 771, 170, 171, 786],
    "Ula'ula Island": [-1, 731, 732, 733, 734, 735, 19, 20, 165, 166, 167, 168, 736, 737, 738, 440, 113, 242, 79, 80, 199, 278, 279, 52, 53, 81, 82, 462, 88, 89, 739, 740, 92, 93, 94, 41, 42, 169, 50, 51, 21, 22, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 72, 73, 456, 457, 746, 749, 750, 283, 284, 751, 752, 755, 756, 46, 47, 60, 61, 62, 186, 118, 119, 704, 705, 706, 351, 568, 569, 227, 132, 173, 35, 36, 774, 374, 375, 376, 137, 233, 474, 674, 675, 775, 324, 776, 777, 239, 125, 466, 74, 75, 76, 551, 552, 553, 328, 329, 330, 443, 444, 445, 707, 778, 779, 780, 359, 361, 362, 478, 215, 461, 27, 28, 37, 38, 582, 583, 584, 787],
    "Poni Island": [-1, 731, 732, 733, 734, 735, 19, 20, 440, 113, 242, 278, 279, 96, 97, 296, 297, 739, 740, 41, 42, 169, 50, 51, 21, 22, 627, 628, 629, 630, 56, 57, 741, 742, 743, 548, 549, 546, 547, 54, 55, 129, 130, 339, 340, 66, 67, 68, 524, 525, 526, 703, 302, 744, 745, 72, 73, 456, 457, 749, 750, 128, 241, 759, 760, 127, 704, 705, 706, 351, 767, 768, 227, 209, 210, 422, 423, 369, 781, 318, 319, 320, 321, 131, 102, 103, 782, 783, 784, 587, 123, 212, 198, 430, 447, 448, 147, 148, 149, 142, 788],
    "Rijon": [228, 229, 214, 193, 469, 167, 168, 170, 171, 220, 221, 473, 177, 178, 179, 180, 181, 183, 184, 198, 430, 246, 247, 248, 231, 232, 194, 195, 175, 176, 468, 207, 472, 215, 461, 236, 237, 200, 429, 196, 197, 470, 471, 462, 466, 467, 233, 474, 465, 212, 208, 199, 230, 464, 242, 169, 186, 243, 244, 245, 249, 250, 408, 409, 700], //starting from 161
    "Beta Naljo": [-1, 246, 247, 248, 371, 372, 373, 152, 153, 154, 155, 156, 157, 158, 159, 160, 403, 404, 405, 361, 362, 478, 74, 75, 76, 41, 42, 169, 16, 17, 18, 270, 271, 272, 207, 472, 10, 11, 12, 276, 277, 280, 281, 282, 475, 161, 162, 331, 332, 63, 64, 65, 174, 39, 40, 46, 47, 37, 38, 177, 178, 179, 180, 181, 436, 437, 193, 469, 133, 134, 135, 136, 196, 197, 470, 471, "Prizmeon", 453, 454, 66, 67, 68, 69, 70, 71, 79, 80, 199, 216, 217, 228, 229, 218, 219, 95, 208, 172, 25, 26, 48, 49, 313, 314, 451, 452, 167, 168, 123, 212, 236, 106, 107, 237, 109, 110, 129, 130, 220, 221, 473, 200, 429, 113, 242, 115, 304, 305, 306, 293, 294, 295, 81, 82, 462, 111, 112, 464, 231, 232, 374, 375, 376, 337, 338, 296, 297, 322, 323, 77, 78, 58, 59, 309, 310, 175, 176, 468, 204, 205, 239, 125, 466, 240, 126, 467, 102, 103, 170, 171, 183, 184, 72, 73, 425, 426, 302, 442, 353, 354, 355, 356, 92, 93, 94, 433, 358, 21, 22, 328, 329, 330, 349, 350, 320, 321, 283, 284, 285, 286, 333, 334, 114, 465, 118, 119, 137, 233, 474, 443, 444, 445, 215, 461, 147, 148, 149, 132, 143, 324, 303, 369, 359, 455, 447, 448, 427, 428, 408, 409, 410, 411, 345, 346, 347, 348, 1, 2, 3, 4, 5, 6, 7, 8, 9, 249, 250, 383, 382, 384, 485, 483, 484],
    "Naljo": [-1, 246, 247, 248, 371, 372, 373, 152, 153, 154, 155, 156, 157, 158, 159, 160, 403, 404, 405, 361, 362, 478, 74, 75, 76, 41, 42, 169, 16, 17, 18, 270, 271, 272, 207, 472, 10, 11, 12, 276, 277, 280, 281, 282, 475, 161, 162, 331, 332, 63, 64, 65, 174, 39, 40, 46, 47, 37, 38, 177, 178, 179, 180, 181, 436, 437, 193, 469, 133, 134, 135, 136, 196, 197, 470, 471, 700, 349, 350, 66, 67, 68, 69, 70, 71, 79, 80, 199, 216, 217, 228, 229, 218, 219, 95, 208, 172, 25, 26, 48, 49, 313, 314, 451, 452, 167, 168, 123, 212, 236, 106, 107, 237, 109, 110, 129, 130, 220, 221, 473, 200, 429, 113, 242, 115, 304, 305, 306, 293, 294, 295, 81, 82, 462, 111, 112, 464, 231, 232, 337, 338, 296, 297, 322, 323, 77, 78, 58, 59, 309, 310, 175, 176, 468, 204, 205, 239, 125, 466, 240, 126, 467, 102, 103, 170, 171, 183, 184, 72, 73, 425, 426, 302, 442, 353, 354, 355, 356, 92, 93, 94, 433, 358, 21, 22, 328, 329, 330, 320, 321, 283, 284, 285, 286, 333, 334, 114, 465, 118, 119, 137, 233, 474, 443, 444, 445, 215, 461, 374, 375, 376, 132, 143, 324, 303, 369, 359, 455, 447, 448, 427, 428, 408, 409, 410, 411, 345, 346, 347, 348, 1, 2, 3, 4, 5, 6, 7, 8, 9, "Phancero", 144, 145, 146, 150, 151, 249, 250, 383, 382, 384, "Varaneous", "Raiwato", "Fambaco", "Libabeel"],
};
Regional["New"] = Regional["Johto"].filter(i => i <= GenSlice[2]);
Regional["Hoenn"] = Regional["New Hoenn"].filter(i => i <= GenSlice[3]);
Regional["Sinnoh"] = Regional["Enhanced Sinnoh"].filter((v, i) => i <= 151);
Regional["Rijon"] = Array.prototype.concat.apply(Regional["National"].filter(i => i <= 160), Regional["Rijon"]);

//paste the following into console to scrape regional dex from Bulbapedia:
//var pokemon = [0]; $("table tbody tr").each(function() { var $me = $(this); var t1 = $me.find('td').first().text(); var t2 = $me.find('td + td').first().text(); if (t1) pokemon[parseInt(t1.replace('#',''))] = parseInt(t2.replace('#',''));  }); console.log(JSON.stringify(pokemon));


//other sprite sets

//Regional["Moedex"] = Regional["National"].filter(i => i <= GenSlice[3]);

Regional["Art Book"] = [-1, "CSanae", "Sanae", "CAlice", "Alice", "CReisen", "Reisen", "CLilyWhite", "LilyWhite", "CLilyBlack", "LilyBlack", "CMomiji", "Momiji", "CShizuha", "Shizuha", "CMedicine", "Medicine", "CKoakuma", "Koakuma", "CNazrin", "Nazrin", "CTokiko", "Tokiko", "CRemilia", "Remilia", "CCirno", "Cirno", "CRumia", "Rumia", "Shanghai", "CFlandre", "Flandre", "Hourai", "CYoumu", "Youmu", "CYukari", "Yukari", "CSuika", "Suika", "CMystia", "Mystia", "CMinoriko", "Minoriko", "CKeine", "Keine", "AKeine", "CIku", "Iku", "CKoishi", "Koishi", "CYamame", "Yamame", "CChen", "Chen", "CYorihime", "Yorihime", "CKaguya", "Kaguya", "CMokou", "Mokou", "CHatate", "Hatate", "CLetty", "Letty", "CPatchouli", "Patchouli", "CYuugi", "Yuugi", "CTenshi", "Tenshi", "CParsee", "Parsee", "CMurasa", "Murasa", "CKisume", "Kisume", "CKogasa", "Kogasa", "CSatori", "Satori", "CEirin", "Eirin", "CRan", "Ran", "Yousei", "Daiyousei", "CNitori", "Nitori", "CHina", "Hina", "CKomachi", "Komachi", "CYuyuko", "Yuyuko", "CMeiling", "Meiling", "CSakuya", "Sakuya", "CLunasa", "Lunasa", "CMerlin", "Merlin", "CLyrica", "Lyrica", "CLayla", "Layla", "CKanako", "Kanako", "CRin", "Rin", "CUtsuho", "Utsuho", "CIchirin", "Ichirin", "CSunny", "Sunny", "CLuna", "Luna", "CStar", "Star", "CYuuka", "Yuuka", "CAya", "Aya", "CEiki", "Eiki", "CShou", "Shou", "CWriggle", "Wriggle", "CTewi", "Tewi", "Kedama", "CNue", "Nue", "CSuwako", "Suwako", "Gyokuto", "CMarisa", "Marisa", "CReimu", "Reimu", "CByakuren", "Byakuren", "Kongala", "Kikuri", "Yuugen", "CToyohime", "Toyohime", "Goliath", "Sariel", "Satsuki", "Akyuu", "Genji", "Tori", "Oonamazu", "CElly", "Elly", "COrange", "Orange", "Youki", "CChiyuri", "Chiyuri", "CYumemi", "Yumemi", "CEllen", "Ellen", "CKazami", "Kazami", "CMeira", "Meira", "CSara", "Sara", "CLouise", "Louise", "CAlice-K", "Alice-K", "CKana", "Kana", "CHakurei", "Hakurei", "CKirisame", "Kirisame", "CKotohime", "Kotohime", "CYumeko", "Yumeko", "CShinki", "Shinki", "Mimi-chan", "Ruukoto", "CRika", "Rika", "CMugetsu", "Mugetsu", "CGengetsu", "Gengetsu", "CKurumi", "Kurumi", "CRikako", "Rikako", "Rinnosuke", "CYuki", "Yuki", "CMai", "Mai", "DSunny", "TLuna", "HStar", "ANitori", "TNitori", "AMokou", "DMokou", "DReisen", "TReisen", "TSakuya", "HSakuya", "ARumia", "SRumia", "HMystia", "AMystia", "AChen", "TChen", "DYoumu", "SYoumu", "AYuuka", "TYuuka", "SAya", "TAya", "ATenshi", "DTenshi", "DParsee", "TParsee", "AKoishi", "SKoishi", "DByakuren", "TByakuren", "DIchirin", "TIchirin", "AKanako", "DKanako", "AKaguya", "DKaguya", "ShingyokuO", "ShingyokuM", "ShingyokuF", "AUtsuho", "SUtsuho", "DMomiji", "Elis", "Mima", "Isami", "SKomachi", "AKomachi", "AEirin", "HEirin", "DYukari", "TYukari", "AAlice", "TAlice", "AReimu", "DReimu", "SCirno", "TCirno", "DYuyuko", "AYuyuko", "HLunasa", "HMerlin", "HLyrica", "ARan", "HRan", "AMedicine", "TMedicine", "AHina", "DHina", "SShizuha", "HShizuha", "ASuwako", "DSuwako", "SYamame", "TYamame", "TSatori", "DSatori", "SKogasa", "TKogasa", "AShou", "TShou", "TNazrin", "HNazrin", "TKisume", "SRin", "ARin", "Zombie-F", "DIku", "TIku", "AMinoriko", "DMinoriko", "TSuika", "ASuika", "SWriggle", "DWriggle", "DMeiling", "SMeiling", "DPatchouli", "APatchouli", "SMarisa", "AMarisa", "DLetty", "HLetty", "ASanae", "TSanae", "ANue", "TNue", "DMurasa", "AMurasa", "DYuugi", "AYuugi", "HKeine", "DKeine", "ARemilia", "DRemilia", "SFlandre", "AFlandre", "ADaiyousei", "HKoakuma", "HLilyWhite", "SLilyBlack", "ATokiko", "DTewi", "ATewi", "DEiki", "AEiki", "TToyohime", "SYorihime", "CShingyoku", "CKikuri", "CMima", "CKongala", "CYuugen", "CElis", "CSariel", "THatate", "DHatate", "ASunny", "ALuna", "AStar", "AKazami", "SMedicine", "DDaiyousei", "AkiSisters", "DLayla", "Fairy", "Tensoku", "SSariel", "ALilyWhite", "ALilyBlack", "CKasen", "Kasen", "CVIVIT", "VIVIT", "A-VIVIT", "CKyouko", "CMiyako", "CSeiga", "CTojiko", "CFuto", "CMiko", "CMamizou", "Cirno-A", "Reisen-A", "Meiling-A", "Mystia-A", "Letty-A", "Tewi-A", "Marisa-A", "Alice-A", "Mokou-A", "Yukari-A", "Ran-A", "Chen-A", "Marisa-Ex", "Alice-B", "CTenma", "Tenma", "CSendai", "Sendai", "Ayakashi", "Kyouko", "Miyako", "Seiga", "Tojiko", "Futo", "Miko", "Mamizou", "Prismriver", "MP-Suika", "SG-Sanae", "Tensoku-G", "Youmu-A", "Yuyuko-A", "Eirin-A", "STenma", "TSendai", "Unown"];

Regional["Phone Book"] = Array.prototype.concat([-1], [{ "image": 1, "name": "Tsunonasu", "bootleg": "Zinunas" }, { "image": 2, "name": "Kochia", "bootleg": "Kokia" }, { "image": 3, "name": "Oshe", "bootleg": "Osie" }, { "image": 4, "name": "Keshi", "bootleg": "Kesi" }, { "image": 5, "name": "Crypto", "bootleg": "Kuribute" }, { "image": 6, "name": "Monstera", "bootleg": "Manstla" }, { "image": 7, "name": "Fungus", "bootleg": "Fanges" }, { "image": 8, "name": "Hiougi", "bootleg": "Hiougi" }, { "image": 9, "name": "Punica", "bootleg": "Punika" }, { "image": 10, "name": "Gumi", "bootleg": "Gumi" }, { "image": 11, "name": "Suguri", "bootleg": "Sukori" }, { "image": 12, "name": "Ganraikou", "bootleg": "Tampala" }, { "image": 13, "name": "Byakubu", "bootleg": "Baibu" }, { "image": 14, "name": "Telopea", "bootleg": "Teropea" }, { "image": 15, "name": "Mantea", "bootleg": "Mantea" }, { "image": 16, "name": "Ixora", "bootleg": "Ikusora" }, { "image": 17, "name": "Myrtus", "bootleg": "Mierths" }, { "image": 18, "name": "Lychnis", "bootleg": "Liknis" }, { "image": 19, "name": "Lapeirousia", "bootleg": "Luyigia" }, { "image": 20, "name": "Bubaria", "bootleg": "Bubaria" }, { "image": 21, "name": "Angios", "bootleg": "Anjiosi" }, { "image": 22, "name": "Gymnos", "bootleg": "Jimunosi" }, { "image": 23, "name": "Liriope", "bootleg": "Liliaobe" }, { "image": 24, "name": "Waratah", "bootleg": "Warata" }, { "image": 25, "name": "Sorghum", "bootleg": "Surugem" }, { "image": 26, "name": "Eryngo", "bootleg": "Erinko" }, { "image": 27, "name": "Noriutsugi", "bootleg": "Noriwuts" }, { "image": 28, "name": "Pampas", "bootleg": "Banles" }, { "image": 29, "name": "Rhodanthe", "bootleg": "Rodansa" }, { "image": 30, "name": "Licorice", "bootleg": "Rikoris" }, { "image": 31, "name": "Viburnum", "bootleg": "Bibanam" }, { "image": 32, "name": "Funnel", "bootleg": "Phanel" }, { "image": 33, "name": "Vanda", "bootleg": "Banda" }, { "image": 34, "name": "Uikyou", "bootleg": "Wuikyo" }, { "image": 35, "name": "Obana", "bootleg": "Obana" }, { "image": 12, "name": "Firekokko", "bootleg": "Faikke" }, { "image": 2, "name": "Raygoten", "bootleg": "Rigoden" }, { "image": 3, "name": "Drilarmor", "bootleg": "Doria" }, { "image": 4, "name": "Chamelan", "bootleg": "Kameran" }, { "image": 5, "name": "Cryptoarm", "bootleg": "Kuribute" }, { "image": 6, "name": "Shellstera", "bootleg": "Sherstla" }, { "image": 7, "name": "Fungeist", "bootleg": "Fangist" }, { "image": 8, "name": "Balltamus", "bootleg": "Borutama" }, { "image": 9, "name": "Burenica", "bootleg": "Branika" }, { "image": 10, "name": "Geron", "bootleg": "Geron" }, { "image": 36, "name": "Berzelia", "bootleg": "Bazeria" }, { "image": 37, "name": "Nigella", "bootleg": "Nigera" }, { "image": 38, "name": "Musa", "bootleg": "Musa" }, { "image": 39, "name": "Netaro", "bootleg": "Netaro" }, { "image": 40, "name": "Nejiro", "bootleg": "Nejiro" }, { "image": 41, "name": "Godetia", "bootleg": "Gedejia" }, { "image": 42, "name": "Curcuma", "bootleg": "Kukuma" }, { "image": 43, "name": "Tessen", "bootleg": "Rasen" }, { "image": 44, "name": "Heliopsis", "bootleg": "Heriops" }, { "image": 45, "name": "Hagumanoki", "bootleg": "Sumac" }, { "image": 1, "name": "Gilerth", "bootleg": "Jieas" }, { "image": 2, "name": "Raygirth", "bootleg": "Larjias" }, { "image": 3, "name": "Armaru", "bootleg": "Armory" }, { "image": 4, "name": "Chameraid", "bootleg": "Icecream" }, { "image": 5, "name": "Cryptoride", "bootleg": "Kuripute" }, { "image": 6, "name": "Wormiterala", "bootleg": "Wamitera" }, { "image": 7, "name": "Fungblade", "bootleg": "Fenbuled" }, { "image": 8, "name": "Bulltamus", "bootleg": "Burtamas" }, { "image": 9, "name": "Puneedle", "bootleg": "Bunider" }, { "image": 10, "name": "Kerorin", "bootleg": "Gerlin" }, { "image": 11, "name": "Sugulai", "bootleg": "Sigeray" }, { "image": 12, "name": "Cortos", "bootleg": "Kaotes" }, { "image": 13, "name": "Gaiurus", "bootleg": "Geiwurus" }, { "image": 14, "name": "Midotor", "bootleg": "Medter" }, { "image": 15, "name": "Octor", "bootleg": "Aokuteru" }, { "image": 16, "name": "Hitodeight", "bootleg": "Hitodei" }, { "image": 17, "name": "Ghosboar", "bootleg": "Gaosboya" }, { "image": 46, "name": "Rasenmai", "bootleg": "Rasenmai" }, { "image": 19, "name": "Scorpil", "bootleg": "Skirpeal" }, { "image": 20, "name": "Armcrab", "bootleg": "Armkurab" }, { "image": 21, "name": "Angiorn", "bootleg": "Anjioen" }, { "image": 22, "name": "Gymrace", "bootleg": "Jimures" }, { "image": 23, "name": "Lirionpu", "bootleg": "Ririonpu" }, { "image": 24, "name": "Whitah", "bootleg": "Waita" }, { "image": 25, "name": "Potzal", "bootleg": "Bozuaru" }, { "image": 26, "name": "Araneida", "bootleg": "Aranita" }, { "image": 27, "name": "Gadhoro", "bootleg": "Jiadhelo" }, { "image": 28, "name": "Cliogera", "bootleg": "Kliaoger" }, { "image": 29, "name": "Gust", "bootleg": "Gust" }, { "image": 30, "name": "Reige", "bootleg": "Reige" }, { "image": 31, "name": "Togeruka", "bootleg": "Tegerka" }, { "image": 32, "name": "Raigaleon", "bootleg": "Raigarin" }, { "image": 33, "name": "Gadorkuma", "bootleg": "Gadoruk" }, { "image": 34, "name": "Abiras", "bootleg": "Agilis" }, { "image": 35, "name": "Alphagos", "bootleg": "Arfages" }, { "image": 31, "name": "Kiyoruka", "bootleg": "Kyoruka" }, { "image": 22, "name": "Gymgarth", "bootleg": "Jimges" }, { "image": 23, "name": "Baionpu", "bootleg": "Baionpu" }, { "image": 24, "name": "Warutah", "bootleg": "Warta" }, { "image": 25, "name": "Guntzatl", "bootleg": "Gantsu" }, { "image": 47, "name": "Arakuida", "bootleg": "Arakuita" }, { "image": 27, "name": "Badhoro", "bootleg": "Badhelo" }, { "image": 28, "name": "Lampgera", "bootleg": "Ranbrage" }, { "image": 29, "name": "Tempest", "bootleg": "Storm" }, { "image": 30, "name": "Zudoon", "bootleg": "Stone" }, { "image": 48, "name": "Hiyu", "bootleg": "Amaranth" }, { "image": 49, "name": "Gamazumi", "bootleg": "Biburnum" }, { "image": 50, "name": "Papaver", "bootleg": "Babarwur" }, { "image": 51, "name": "Gamuru", "bootleg": "Jiarm" }, { "image": 52, "name": "Bouvardi", "bootleg": "Bubarti" }, { "image": 53, "name": "Gaultheria", "bootleg": "Goteria" }, { "image": 54, "name": "Dipsacus", "bootleg": "Dipusaks" }, { "image": 55, "name": "Kaya", "bootleg": "Kaya" }, { "image": 56, "name": "Denfare", "bootleg": "Danver" }, { "image": 21, "name": "Angieon", "bootleg": "Andion" }, { "image": 57, "name": "Easydog", "bootleg": "Hat" }, { "image": 3, "name": "Tricerarmor", "bootleg": "Toriker" }, { "image": 5, "name": "Cryptosnipe", "bootleg": "Kuriputo" }, { "image": 7, "name": "Fungboost", "bootleg": "Fanbus" }, { "image": 9, "name": "Veenica", "bootleg": "Buinika" }, { "image": 11, "name": "Saiguliger", "bootleg": "Sagrika" }, { "image": 13, "name": "Armedurus", "bootleg": "Amdourus" }, { "image": 15, "name": "Octorifle", "bootleg": "Octobre" }, { "image": 17, "name": "Eraserboar", "bootleg": "Ireizab" }, { "image": 19, "name": "Spearneedle", "bootleg": "Spianid" }, { "image": 1, "name": "Gilgierth", "bootleg": "Girugias" }, { "image": 3, "name": "Uniarmor", "bootleg": "Uniama" }, { "image": 5, "name": "Cryptoburn", "bootleg": "Kuribute" }, { "image": 7, "name": "Fungmachine", "bootleg": "Gameboy" }, { "image": 9, "name": "Punisto", "bootleg": "Punisuto" }, { "image": 11, "name": "Suguline", "bootleg": "Sugurain" }, { "image": 13, "name": "Machurus", "bootleg": "Maharus" }, { "image": 15, "name": "Octagun", "bootleg": "Okutagan" }, { "image": 17, "name": "Mummyboar", "bootleg": "Amiboa" }, { "image": 19, "name": "Kingpin", "bootleg": "Kingpin" }, { "image": 57, "name": "Beebalm", "bootleg": "Beavermu" }, { "image": 58, "name": "Salal", "bootleg": "Sarae" }, { "image": 59, "name": "Enishida", "bootleg": "Genista" }, { "image": 60, "name": "Tulbaghia", "bootleg": "Tsurubak" }, { "image": 61, "name": "Kiringiku", "bootleg": "Chrysant" }, { "image": 21, "name": "Angilance", "bootleg": "Andirans" }, { "image": 22, "name": "Gymganon", "bootleg": "Gimugan" }, { "image": 23, "name": "Saiope", "bootleg": "Saiope" }, { "image": 24, "name": "Wattah", "bootleg": "Watta" }, { "image": 25, "name": "Quetzaking", "bootleg": "Kessarin" }, { "image": 26, "name": "Arakudabaran", "bootleg": "Arakudab" }, { "image": 27, "name": "Punkhoro", "bootleg": "Bangupal" }, { "image": 28, "name": "Vikingurin", "bootleg": "Baikingu" }, { "image": 29, "name": "Storm", "bootleg": "Storm" }, { "image": 30, "name": "Mutoom", "bootleg": "Mutomu" }, { "image": 62, "name": "Gypsophi", "bootleg": "Gipusofi" }, { "image": 63, "name": "Ruscus", "bootleg": "Husukasu" }, { "image": 64, "name": "Maoran", "bootleg": "Meolan" }, { "image": 65, "name": "Zea", "bootleg": "Zea" }, { "image": 66, "name": "Gonum", "bootleg": "Gonomu" }, { "image": 21, "name": "Angipower", "bootleg": "Angipao" }, { "image": 22, "name": "Gymzyrus", "bootleg": "Gimuzai" }, { "image": 23, "name": "Canonope", "bootleg": "Kanonope" }, { "image": 29, "name": "Calm", "bootleg": "Calm" }, { "image": 63, "name": "Ryuuguu", "bootleg": "Ryugu" }, { "image": 1, "name": "Gigagigerth", "bootleg": "Gigagigas" }, { "image": 3, "name": "Barriarm", "bootleg": "Barimu" }, { "image": 5, "name": "Cryptoknight", "bootleg": "Kuriput" }, { "image": 7, "name": "Fungwar", "bootleg": "Fanguo" }, { "image": 63, "name": "Bashou", "bootleg": "Bargier" }, { "image": 21, "name": "Angigorgo", "bootleg": "Angigogo" }, { "image": 22, "name": "Gymbaron", "bootleg": "Gimubar" }, { "image": 23, "name": "Lirimonarch", "bootleg": "Ririmona" }, { "image": 24, "name": "Enteioh", "bootleg": "Entio" }, { "image": 67, "name": "Golaking", "bootleg": "Gawerk" }, { "image": 68, "name": "Kanzou", "bootleg": "Lily" }, { "image": 69, "name": "Ornithogalum", "bootleg": "Ornith" }, { "image": 70, "name": "Gentiana", "bootleg": "Dragon" }, { "image": 71, "name": "Yarrow", "bootleg": "Chap" }, { "image": 21, "name": "Angioros", "bootleg": "Angioros" }, { "image": 22, "name": "Gymzatan", "bootleg": "Gimuzata" }, { "image": 71, "name": "Doomsday", "bootleg": "Domesday" }, { "image": 72, "name": "Dendel", "bootleg": "Dandel" }, { "image": 73, "name": "Teletel", "bootleg": "Tlaitlu" }].map(d => d.bootleg));

var specialClasses = {
    "Phone Book": "telefang",
    "Art Book": "touhoumon",
    "Moedex": "moemon",
    "Alola": "alolan",
    "Melemele Island": "alolan",
    "Akala Island": "alolan",
    "Ula'ula Island": "alolan",
    "Poni Island": "alolan",
};

var runRestrictions = {
    "Phone Book": "telefang",
    "Art Book": "touhoumon",
};
