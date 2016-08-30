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

class PokedexSummary {
    public OwnedDict: { [key: string]: boolean | number };
    constructor(public Run: TPP.Run) {
        this.OwnedDict = {};
        PokeList.forEach(p => this.OwnedDict[p] = false);
        Run.Events.filter(e => e.Group == "Pokemon").forEach(p => {
            if (PokeList.indexOf(p.Name) >= 0)
                this.OwnedDict[p.Name] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
            else if (PokeList.indexOf(p.Class) >= 0)    //catch Pokemon with unusual names
                this.OwnedDict[p.Class] = Duration.parse(p.Time, Run.StartTime).TotalSeconds + Run.StartTime
        });
    }
}

function generateRunSummary(tppData: TPP.Collection[]) {
    var $table = $("<table>").append($("<thead>").append($("<tr>").append(["Run", "Started", "Duration", "Host", "Badges Earned", "Species Caught"].map(th => $("<th>").text(th)))));
    var $tbody = $('<tbody>').appendTo($table);
    tppData.forEach(c => c.Runs.forEach(r => {
        if (r.StartTime * 1000 > Date.now()) return;
        var summary = new RunSummary(r);
        $tbody.append($("<tr>").append([
            summary.RunName,
            summary.StartDate.toISOString(),
            summary.Duration.toString(c.Scale),
            summary.HostName,
            summary.Badges,
            summary.Pokedex || "???"
        ].map(td => $("<td>").text(td))).css({ 'background-color': r.ColorPrimary, 'border-color': r.ColorSecondary }));
    }));
    return $table;
}


function dexSummarize(tppData: TPP.Collection[]) {
    var summaries: PokedexSummary[] = [];
    tppData.forEach(c => c.Runs.forEach(r => {
        if (r.Events.filter(e => e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0)).length) {
            summaries.push(new PokedexSummary(r));
        }
    }));
    return summaries;
}

function generatePokedexSummary(tppData: TPP.Collection[]) {
    var summaries = dexSummarize(tppData);
    var $table = $("<table>").append($("<thead>").append($("<tr>").append($("<th>").text("Pokemon")).append(summaries.map(s => $("<th>").text(s.Run.RunName).css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary })))));
    $('<tbody>').appendTo($table).append(PokeList.map(p => $("<tr>").append($("<th>").text(p)).append(summaries.map(s => $("<td>").text(s.OwnedDict[p] ? "X" : "").css({ 'background-color': s.Run.ColorPrimary, 'border-color': s.Run.ColorSecondary, 'text-align': "center" })))));
    return $table;
}

function generateGlobalDex(tppData: TPP.Collection[]) {
    if (QueryString["nowifi"]) {
        tppData.forEach(c => c.Runs.forEach(r => r.Events = r.Events.filter(e => e.Class != "WifiTrade")));
    }
    if (QueryString["only"]) {
        tppData = tppData.filter(c => QueryString["only"].split(',').filter(f => c.Name.indexOf(f.trim()) >= 0).length > 0);
    }
    if (QueryString["g"]) {
        PokeList = PokeList.slice(0, (GenSlice[parseInt(QueryString["g"] || "0")] || PokeList.length) + 1);
    }
    var summaries = dexSummarize(tppData).sort((s1, s2) => s1.Run.StartTime - s2.Run.StartTime);
    var fullList = {};
    return $("<div>").append(PokeList.map((p, i) => {
        var idx = i.toString(), index = ('000' + idx).substring(idx.length);
        var $entry = $("<div class='dexEntry'>")
            .append("<h3>" + index + "</h3>")
            .append("<h4>" + p + "</h4>")
            .append("<div class='pokesprite " + cleanString(p) + "'><img src='img/missingno.png'></div>");
        var ownedBy = [];
        var bgColor;
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
        if (ownedBy.length)
            $entry.attr('title', 'Owned by:\n' + ownedBy.join('\n'));
        else
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
    })).prepend("<h2 class='total'>Owned: <span>" + Object.keys(fullList).length + "/" + (PokeList.length - 1) + "</span></div>");
}

var PokeList = ["MissingNo.", "Bulbasaur", "Ivysaur", "Venusaur", "Charmander", "Charmeleon", "Charizard", "Squirtle", "Wartortle", "Blastoise", "Caterpie", "Metapod", "Butterfree", "Weedle", "Kakuna", "Beedrill", "Pidgey", "Pidgeotto", "Pidgeot", "Rattata", "Raticate", "Spearow", "Fearow", "Ekans", "Arbok", "Pikachu", "Raichu", "Sandshrew", "Sandslash", "NidoranF", "Nidorina", "Nidoqueen", "NidoranM", "Nidorino", "Nidoking", "Clefairy", "Clefable", "Vulpix", "Ninetales", "Jigglypuff", "Wigglytuff", "Zubat", "Golbat", "Oddish", "Gloom", "Vileplume", "Paras", "Parasect", "Venonat", "Venomoth", "Diglett", "Dugtrio", "Meowth", "Persian", "Psyduck", "Golduck", "Mankey", "Primeape", "Growlithe", "Arcanine", "Poliwag", "Poliwhirl", "Poliwrath", "Abra", "Kadabra", "Alakazam", "Machop", "Machoke", "Machamp", "Bellsprout", "Weepinbell", "Victreebel", "Tentacool", "Tentacruel", "Geodude", "Graveler", "Golem", "Ponyta", "Rapidash", "Slowpoke", "Slowbro", "Magnemite", "Magneton", "Farfetch'd", "Doduo", "Dodrio", "Seel", "Dewgong", "Grimer", "Muk", "Shellder", "Cloyster", "Gastly", "Haunter", "Gengar", "Onix", "Drowzee", "Hypno", "Krabby", "Kingler", "Voltorb", "Electrode", "Exeggcute", "Exeggutor", "Cubone", "Marowak", "Hitmonlee", "Hitmonchan", "Lickitung", "Koffing", "Weezing", "Rhyhorn", "Rhydon", "Chansey", "Tangela", "Kangaskhan", "Horsea", "Seadra", "Goldeen", "Seaking", "Staryu", "Starmie", "Mr. Mime", "Scyther", "Jynx", "Electabuzz", "Magmar", "Pinsir", "Tauros", "Magikarp", "Gyarados", "Lapras", "Ditto", "Eevee", "Vaporeon", "Jolteon", "Flareon", "Porygon", "Omanyte", "Omastar", "Kabuto", "Kabutops", "Aerodactyl", "Snorlax", "Articuno", "Zapdos", "Moltres", "Dratini", "Dragonair", "Dragonite", "Mewtwo", "Mew", "Chikorita", "Bayleef", "Meganium", "Cyndaquil", "Quilava", "Typhlosion", "Totodile", "Croconaw", "Feraligatr", "Sentret", "Furret", "Hoothoot", "Noctowl", "Ledyba", "Ledian", "Spinarak", "Ariados", "Crobat", "Chinchou", "Lanturn", "Pichu", "Cleffa", "Igglybuff", "Togepi", "Togetic", "Natu", "Xatu", "Mareep", "Flaaffy", "Ampharos", "Bellossom", "Marill", "Azumarill", "Sudowoodo", "Politoed", "Hoppip", "Skiploom", "Jumpluff", "Aipom", "Sunkern", "Sunflora", "Yanma", "Wooper", "Quagsire", "Espeon", "Umbreon", "Murkrow", "Slowking", "Misdreavus", "Unown", "Wobbuffet", "Girafarig", "Pineco", "Forretress", "Dunsparce", "Gligar", "Steelix", "Snubbull", "Granbull", "Qwilfish", "Scizor", "Shuckle", "Heracross", "Sneasel", "Teddiursa", "Ursaring", "Slugma", "Magcargo", "Swinub", "Piloswine", "Corsola", "Remoraid", "Octillery", "Delibird", "Mantine", "Skarmory", "Houndour", "Houndoom", "Kingdra", "Phanpy", "Donphan", "Porygon2", "Stantler", "Smeargle", "Tyrogue", "Hitmontop", "Smoochum", "Elekid", "Magby", "Miltank", "Blissey", "Raikou", "Entei", "Suicune", "Larvitar", "Pupitar", "Tyranitar", "Lugia", "Ho-Oh", "Celebi", "Treecko", "Grovyle", "Sceptile", "Torchic", "Combusken", "Blaziken", "Mudkip", "Marshtomp", "Swampert", "Poochyena", "Mightyena", "Zigzagoon", "Linoone", "Wurmple", "Silcoon", "Beautifly", "Cascoon", "Dustox", "Lotad", "Lombre", "Ludicolo", "Seedot", "Nuzleaf", "Shiftry", "Taillow", "Swellow", "Wingull", "Pelipper", "Ralts", "Kirlia", "Gardevoir", "Surskit", "Masquerain", "Shroomish", "Breloom", "Slakoth", "Vigoroth", "Slaking", "Nincada", "Ninjask", "Shedinja", "Whismur", "Loudred", "Exploud", "Makuhita", "Hariyama", "Azurill", "Nosepass", "Skitty", "Delcatty", "Sableye", "Mawile", "Aron", "Lairon", "Aggron", "Meditite", "Medicham", "Electrike", "Manectric", "Plusle", "Minun", "Volbeat", "Illumise", "Roselia", "Gulpin", "Swalot", "Carvanha", "Sharpedo", "Wailmer", "Wailord", "Numel", "Camerupt", "Torkoal", "Spoink", "Grumpig", "Spinda", "Trapinch", "Vibrava", "Flygon", "Cacnea", "Cacturne", "Swablu", "Altaria", "Zangoose", "Seviper", "Lunatone", "Solrock", "Barboach", "Whiscash", "Corphish", "Crawdaunt", "Baltoy", "Claydol", "Lileep", "Cradily", "Anorith", "Armaldo", "Feebas", "Milotic", "Castform", "Kecleon", "Shuppet", "Banette", "Duskull", "Dusclops", "Tropius", "Chimecho", "Absol", "Wynaut", "Snorunt", "Glalie", "Spheal", "Sealeo", "Walrein", "Clamperl", "Huntail", "Gorebyss", "Relicanth", "Luvdisc", "Bagon", "Shelgon", "Salamence", "Beldum", "Metang", "Metagross", "Regirock", "Regice", "Registeel", "Latias", "Latios", "Kyogre", "Groudon", "Rayquaza", "Jirachi", "Deoxys", "Turtwig", "Grotle", "Torterra", "Chimchar", "Monferno", "Infernape", "Piplup", "Prinplup", "Empoleon", "Starly", "Staravia", "Staraptor", "Bidoof", "Bibarel", "Kricketot", "Kricketune", "Shinx", "Luxio", "Luxray", "Budew", "Roserade", "Cranidos", "Rampardos", "Shieldon", "Bastiodon", "Burmy", "Wormadam", "Mothim", "Combee", "Vespiquen", "Pachirisu", "Buizel", "Floatzel", "Cherubi", "Cherrim", "Shellos", "Gastrodon", "Ambipom", "Drifloon", "Drifblim", "Buneary", "Lopunny", "Mismagius", "Honchkrow", "Glameow", "Purugly", "Chingling", "Stunky", "Skuntank", "Bronzor", "Bronzong", "Bonsly", "Mime Jr.", "Happiny", "Chatot", "Spiritomb", "Gible", "Gabite", "Garchomp", "Munchlax", "Riolu", "Lucario", "Hippopotas", "Hippowdon", "Skorupi", "Drapion", "Croagunk", "Toxicroak", "Carnivine", "Finneon", "Lumineon", "Mantyke", "Snover", "Abomasnow", "Weavile", "Magnezone", "Lickilicky", "Rhyperior", "Tangrowth", "Electivire", "Magmortar", "Togekiss", "Yanmega", "Leafeon", "Glaceon", "Gliscor", "Mamoswine", "Porygon-Z", "Gallade", "Probopass", "Dusknoir", "Froslass", "Rotom", "Uxie", "Mesprit", "Azelf", "Dialga", "Palkia", "Heatran", "Regigigas", "Giratina", "Cresselia", "Phione", "Manaphy", "Darkrai", "Shaymin", "Arceus", "Victini", "Snivy", "Servine", "Serperior", "Tepig", "Pignite", "Emboar", "Oshawott", "Dewott", "Samurott", "Patrat", "Watchog", "Lillipup", "Herdier", "Stoutland", "Purrloin", "Liepard", "Pansage", "Simisage", "Pansear", "Simisear", "Panpour", "Simipour", "Munna", "Musharna", "Pidove", "Tranquill", "Unfezant", "Blitzle", "Zebstrika", "Roggenrola", "Boldore", "Gigalith", "Woobat", "Swoobat", "Drilbur", "Excadrill", "Audino", "Timburr", "Gurdurr", "Conkeldurr", "Tympole", "Palpitoad", "Seismitoad", "Throh", "Sawk", "Sewaddle", "Swadloon", "Leavanny", "Venipede", "Whirlipede", "Scolipede", "Cottonee", "Whimsicott", "Petilil", "Lilligant", "Basculin", "Sandile", "Krokorok", "Krookodile", "Darumaka", "Darmanitan", "Maractus", "Dwebble", "Crustle", "Scraggy", "Scrafty", "Sigilyph", "Yamask", "Cofagrigus", "Tirtouga", "Carracosta", "Archen", "Archeops", "Trubbish", "Garbodor", "Zorua", "Zoroark", "Minccino", "Cinccino", "Gothita", "Gothorita", "Gothitelle", "Solosis", "Duosion", "Reuniclus", "Ducklett", "Swanna", "Vanillite", "Vanillish", "Vanilluxe", "Deerling", "Sawsbuck", "Emolga", "Karrablast", "Escavalier", "Foongus", "Amoonguss", "Frillish", "Jellicent", "Alomomola", "Joltik", "Galvantula", "Ferroseed", "Ferrothorn", "Klink", "Klang", "Klinklang", "Tynamo", "Eelektrik", "Eelektross", "Elgyem", "Beheeyem", "Litwick", "Lampent", "Chandelure", "Axew", "Fraxure", "Haxorus", "Cubchoo", "Beartic", "Cryogonal", "Shelmet", "Accelgor", "Stunfisk", "Mienfoo", "Mienshao", "Druddigon", "Golett", "Golurk", "Pawniard", "Bisharp", "Bouffalant", "Rufflet", "Braviary", "Vullaby", "Mandibuzz", "Heatmor", "Durant", "Deino", "Zweilous", "Hydreigon", "Larvesta", "Volcarona", "Cobalion", "Terrakion", "Virizion", "Tornadus", "Thundurus", "Reshiram", "Zekrom", "Landorus", "Kyurem", "Keldeo", "Meloetta", "Genesect", "Chespin", "Quilladin", "Chesnaught", "Fennekin", "Braixen", "Delphox", "Froakie", "Frogadier", "Greninja", "Bunnelby", "Diggersby", "Fletchling", "Fletchinder", "Talonflame", "Scatterbug", "Spewpa", "Vivillon", "Litleo", "Pyroar", "Flabébé", "Floette", "Florges", "Skiddo", "Gogoat", "Pancham", "Pangoro", "Furfrou", "Espurr", "Meowstic", "Honedge", "Doublade", "Aegislash", "Spritzee", "Aromatisse", "Swirlix", "Slurpuff", "Inkay", "Malamar", "Binacle", "Barbaracle", "Skrelp", "Dragalge", "Clauncher", "Clawitzer", "Helioptile", "Heliolisk", "Tyrunt", "Tyrantrum", "Amaura", "Aurorus", "Sylveon", "Hawlucha", "Dedenne", "Carbink", "Goomy", "Sliggoo", "Goodra", "Klefki", "Phantump", "Trevenant", "Pumpkaboo", "Gourgeist", "Bergmite", "Avalugg", "Noibat", "Noivern", "Xerneas", "Yveltal", "Zygarde", "Diancie", "Hoopa", "Volcanion"];

var GenSlice = [PokeList.length, 151, 251, 386, 493, 649, 721];