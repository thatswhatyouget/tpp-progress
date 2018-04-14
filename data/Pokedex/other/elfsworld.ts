/// <reference path="../regional.ts" />
module Pokedex {

    //Vietnamese Crystal Pokédex data from here: https://github.com/Taldrain/pokedex-vietnamese-crystal

    const elfDex = [
        {
            "name": "Bulbasaur",
            "number": 1,
            "elf": "SEED",
            "species": "SE",
            "entry": "?AFTER BORNED FULL OF SEEDS AND NUTRITION ON BACK."
        },
        {
            "name": "Ivysaur",
            "number": 2,
            "elf": "GRASS",
            "species": "SE",
            "entry": "?PUB ON BACK ABSORB NUTRITION BEGIN TO SWELL."
        },
        {
            "name": "Venusaur",
            "number": 3,
            "elf": "FLOWE",
            "species": "SE",
            "entry": "?BODY BECOME WARM AFTER SUNSHIND PATEL FLAGRAND."
        },
        {
            "name": "Charmander",
            "number": 4,
            "elf": "SHAD",
            "species": "LIZ",
            "entry": "?FLAME ON TAIL WHEN CONDITION GOOD WILL NOT EXTINHUISH."
        },
        {
            "name": "Charmeleon",
            "number": 5,
            "elf": "CABR",
            "species": "FIR",
            "entry": "?WHEN EXCITING WILL SPRAY FLAM TO BURN AROUND."
        },
        {
            "name": "Charizard",
            "number": 6,
            "elf": "SNAKE",
            "species": "FIR",
            "entry": "?FIGHT EXPERIENCE RISED TEMPERATURE OF FLAME RISE."
        },
        {
            "name": "Squirtle",
            "number": 7,
            "elf": "GOLD",
            "species": "TURT",
            "entry": "?HIDE IT FEET IN SHELL IN DANGER AND SPRAY WATER."
        },
        {
            "name": "Wartortle",
            "number": 8,
            "elf": "COW",
            "species": "TU",
            "entry": "?LONG TAIL IS A SYMBLE OF LONG LIVE."
        },
        {
            "name": "Blastoise",
            "number": 9,
            "elf": "GUIKI",
            "species": "SHE",
            "entry": "?SPRAY WATER FROM BACK CAN STAMP THE EARTH HARD."
        },
        {
            "name": "Caterpie",
            "number": 10,
            "elf": "PEDAL",
            "species": "SCOR",
            "entry": "?TO HIDE IN LEAF TO COVER ITSELF BY SAME COLOR."
        },
        {
            "name": "Metapod",
            "number": 11,
            "elf": "DELAN",
            "species": "PUP",
            "entry": "?WHEN INVOLING, BODY IS HARD KEEP UNMOVING."
        },
        {
            "name": "Butterfree",
            "number": 12,
            "elf": "B-FLY",
            "species": "BUTTE",
            "entry": "?FLAYING IN FLOWER AND FLY REMOVE TO DETECT WHAT FLOWER."
        },
        {
            "name": "Weedle",
            "number": 13,
            "elf": "BIDE",
            "species": "WOR",
            "entry": "?PROTECT ITSELF BY THE POISON OF ITS TOXIC PIN."
        },
        {
            "name": "Kakuna",
            "number": 14,
            "elf": "KEYU",
            "species": "PUP",
            "entry": "?WILL NOT MOVE WHEN LEAN ON TREE TO INVOLVE."
        },
        {
            "name": "Beedrill",
            "number": 15,
            "elf": "FORK",
            "species": "BEE",
            "entry": "\"?TO STAB THE RIVAL TO DEATH ENEN IT IS STRONG."
        },
        {
            "name": "Pidgey",
            "number": 16,
            "elf": "LAP",
            "species": "BIR",
            "entry": "?TO SNATCH WORM BY FLAP WINGS TO RAISE SAND."
        },
        {
            "name": "Pidgeotto",
            "number": 17,
            "elf": "PIGE",
            "species": "BI",
            "entry": "?WHIRLING IN AIR TO HUNT."
        },
        {
            "name": "Pidgeot",
            "number": 18,
            "elf": "PIJIA",
            "species": "BI",
            "entry": "?CAN SEE A COIN FROM 1000M BY CUTE EYE-SIGHT."
        },
        {
            "name": "Rattata",
            "number": 19,
            "elf": "CAML",
            "species": "RAT",
            "entry": "?SURVIVAL ANYWHERE AND QUANTITIES IS INCREASING."
        },
        {
            "name": "Raticate",
            "number": 20,
            "elf": "LAT",
            "species": "RAT",
            "entry": "?FORD BY FEET TO FIND EATING IN BIG RANGE."
        },
        {
            "name": "Spearow",
            "number": 21,
            "elf": "BIRD",
            "species": "BIR",
            "entry": "?TO PROTECT ITS TERRITORY WITH SOUND AND FLYING."
        },
        {
            "name": "Fearow",
            "number": 22,
            "elf": "BABOO",
            "species": "BEAK",
            "entry": "?TO EAT WORM WITH ITS LONG PEAK."
        },
        {
            "name": "Ekans",
            "number": 23,
            "elf": "VIV",
            "species": "SN",
            "entry": "?DETECT THE SMELL OF ANIMAL WITH TONGUE AND SWALLOW."
        },
        {
            "name": "Arbok",
            "number": 24,
            "elf": "ABOKE",
            "species": "COB",
            "entry": "?FRIGHTENED THE RIVAIL BY ODD SOUND FROM MOUTH."
        },
        {
            "name": "Pikachu",
            "number": 25,
            "elf": "PIKAQ",
            "species": "RAT",
            "entry": "?RELEASE THE SAVED ELECTRICITY WHEN RAGE."
        },
        {
            "name": "Raichu",
            "number": 26,
            "elf": "RYE",
            "species": "RAT",
            "entry": "?TO COLLECT ELECTRICITY BY UPSIDING ITS TAIL."
        },
        {
            "name": "Sandshrew",
            "number": 27,
            "elf": "SAN",
            "species": "RAT",
            "entry": "?TO PROTECT ITSELF WITH DRY SAND."
        },
        {
            "name": "Sandslash",
            "number": 28,
            "elf": "BREAD",
            "species": "RAT",
            "entry": "?TO ATTACK FROM UPPER BY CROUCHING."
        },
        {
            "name": "Nidoran♀",
            "number": 29,
            "elf": "LIDEL",
            "species": "BEE",
            "entry": "??TO PROTECT ITSELF BY TOXIC STING WHEN BE ATTACKED."
        },
        {
            "name": "Nidorina",
            "number": 30,
            "elf": "LIDEL",
            "species": "BEE",
            "entry": "??THE STINGS WILL BE UPRIGHT WHEN BE ATTACKED."
        },
        {
            "name": "Nidoqueen",
            "number": 31,
            "elf": "LIDE",
            "species": "BAB",
            "entry": "?IT IS COVERED BY HARD NAIL FEARS NOTHING."
        },
        {
            "name": "Nidoran♂",
            "number": 32,
            "elf": "LIDEL",
            "species": "BEE",
            "entry": "??DETECT THE DANGEOUS BY UPRIGHT ITS BIG EARS."
        },
        {
            "name": "Nidorino",
            "number": 33,
            "elf": "LIDEL",
            "species": "BEE",
            "entry": "??ATTACK ENEMY WITH HORN WHEN FINDING."
        },
        {
            "name": "Nidoking",
            "number": 34,
            "elf": "LIDE",
            "species": "BAB",
            "entry": "?THE HERCULES WITH FAT FEET AND TAIL IS GOOD AT WRESTLE."
        },
        {
            "name": "Clefairy",
            "number": 35,
            "elf": "PIP",
            "species": "ELF",
            "entry": "??CAN FIND ITS TRACE WHEN IT IS FULLNOON."
        },
        {
            "name": "Clefable",
            "number": 36,
            "elf": "PIKEX",
            "species": "ELF",
            "entry": "\"?LIVE BEHIND THE PEACE HILL TO AVOID BE SEEN."
        },
        {
            "name": "Vulpix",
            "number": 37,
            "elf": "ROK",
            "species": "FOX",
            "entry": "?FUR OF SIX TAILS BECOME BEAUTY WHEN GROWING"
        },
        {
            "name": "Ninetales",
            "number": 38,
            "elf": "JUGEN",
            "species": "FOX",
            "entry": "?EVERY TAIL HAS MAGIC POWER AND LIVE FOR 1000 YEAR."
        },
        {
            "name": "Jigglypuff",
            "number": 39,
            "elf": "PUD",
            "species": "BALL",
            "entry": "?LET RIVAIL SLEEP BY SINGING AND WHIRLING EYEBALL."
        },
        {
            "name": "Wigglytuff",
            "number": 40,
            "elf": "BUDE",
            "species": "BALL",
            "entry": "?FEELING COMFORTABLE BY STROKING ITS FUR."
        },
        {
            "name": "Zubat",
            "number": 41,
            "elf": "ZHIB",
            "species": "BAT",
            "entry": "??HANG UP SIDE DOWN CROWINGLY ON HOUSE OR CAVE."
        },
        {
            "name": "Golbat",
            "number": 42,
            "elf": "GELU",
            "species": "BAT",
            "entry": "%?ABSORB 300CC BLOOD SOON WHEN TEETH THRUST IN ANIMAL."
        },
        {
            "name": "Oddish",
            "number": 43,
            "elf": "GRAS",
            "species": "WEED",
            "entry": "?HIDE IN SHADE TO AVOID SUNSHINE AND GROW IN NOONLINE."
        },
        {
            "name": "Gloom",
            "number": 44,
            "elf": "FLOW",
            "species": "WEED",
            "entry": "?THE TASE OF POLLEN CAN MAKE STIFLE."
        },
        {
            "name": "Vileplume",
            "number": 45,
            "elf": "LAFUL",
            "species": "FLOW",
            "entry": "?MAKING AIR YELLOW WHEN SHAKING TO RAISE POLLEN."
        },
        {
            "name": "Paras",
            "number": 46,
            "elf": "ATH",
            "species": "FUN",
            "entry": "?ORDER THE GERM TO ABSORB NUTRITION FROM ROOT"
        },
        {
            "name": "Parasect",
            "number": 47,
            "elf": "BALA",
            "species": "FUN",
            "entry": "?FIND GERM AND SEED SPORE WHEN CAN'T ABSORB JUICE."
        },
        {
            "name": "Venonat",
            "number": 48,
            "elf": "CORN",
            "species": "INSEC",
            "entry": "?SLEEP IN HOLE FOR THE WORM AS FORAGE ACTIVE AT NIGHT."
        },
        {
            "name": "Venomoth",
            "number": 49,
            "elf": "MOLUF",
            "species": "MOS",
            "entry": "?WHEN MEETING THE CAST SCALES BODYS BECOME UNNORMAL."
        },
        {
            "name": "Diglett",
            "number": 50,
            "elf": "DESP",
            "species": "STO",
            "entry": "?THRILLED UNDER THE EARTH TO BITE ROOT."
        },
        {
            "name": "Dugtrio",
            "number": 51,
            "elf": "DAKED",
            "species": "STO",
            "entry": "?NO ONE KNOW WHAT IT IS UNDER GROUND FOR 100KMS."
        },
        {
            "name": "Meowth",
            "number": 52,
            "elf": "MIMI",
            "species": "CAT",
            "entry": "??LIKE SHINING THING WHEN SEEN SHINING FOREHARD SHINE TOO."
        },
        {
            "name": "Persian",
            "number": 52,
            "elf": "BOLUX",
            "species": "CAT",
            "entry": ">\"?HAVING THE WILD SIDE TO TEAR THE CAPTURE CASUALY"
        },
        {
            "name": "Psyduck",
            "number": 54,
            "elf": "KODA",
            "species": "DUC",
            "entry": "?ONLY AWAKE SLEEP BRAIN-CELL CAN THE WILLING BE USED."
        },
        {
            "name": "Golduck",
            "number": 55,
            "elf": "GELUD",
            "species": "DUC",
            "entry": "?THE SWINGING GESTURE IS GRACE IN PEACE RIVER."
        },
        {
            "name": "Mankey",
            "number": 56,
            "elf": "MONK",
            "species": "MONK",
            "entry": "?BECOME LONELY AND RAGE WHEN LEAVING GROUP."
        },
        {
            "name": "Primeape",
            "number": 57,
            "elf": "SUMOY",
            "species": "MONK",
            "entry": "?CAPTURE ENDLESSLY UNTILL EAT IT WHEN RAGED."
        },
        {
            "name": "Growlithe",
            "number": 58,
            "elf": "GEDI",
            "species": "DOG",
            "entry": "?HAVING WIDE TERRITORY, SHOUT AT UNFAMILIAR RIVAIL."
        },
        {
            "name": "Arcanine",
            "number": 59,
            "elf": "WENDI",
            "species": "STOR",
            "entry": "?THE GESTURE OF GOING THROUGH PRAIRIE IS RECORD."
        },
        {
            "name": "Poliwag",
            "number": 60,
            "elf": "NILEM",
            "species": "EGG",
            "entry": "?AFTER EATING CAN SEE PART OF THE ORGANS CLEARLY."
        },
        {
            "name": "Poliwhirl",
            "number": 61,
            "elf": "NILE",
            "species": "EGG",
            "entry": "?LIKE LIVING IN WATER TO AVOID BEING ATTACKED."
        },
        {
            "name": "Poliwrath",
            "number": 62,
            "elf": "NILEC",
            "species": "EGG",
            "entry": "?USEING DEVELOPED FEET TO RUN ON THE SURFACE OF WATER."
        },
        {
            "name": "Abra",
            "number": 63,
            "elf": "KEZI",
            "species": "POWE",
            "entry": "?ESCAPE BY FEELING EVEN IN SLEEPING WHEN IN DANGEOUS."
        },
        {
            "name": "Kadabra",
            "number": 64,
            "elf": "YONGL",
            "species": "POWE",
            "entry": "?THE WAVES FROM SURFACE DOUBLE WHEN CLOSE EYES."
        },
        {
            "name": "Alakazam",
            "number": 65,
            "elf": "HUDE",
            "species": "POWE",
            "entry": "?INTELLIGENCE INDEX 5000. PLAT WHILE FIGHTING."
        },
        {
            "name": "Machop",
            "number": 66,
            "elf": "WANLI",
            "species": "FORC",
            "entry": "?CAN RAISE THE DUMBBELL EASIELY."
        },
        {
            "name": "Machoke",
            "number": 67,
            "elf": "GELI",
            "species": "FORC",
            "entry": "?MUSCLE USED IN BATTLE BECOME STRONGER."
        },
        {
            "name": "Machamp",
            "number": 68,
            "elf": "GUAIL",
            "species": "FORC",
            "entry": "?REACT QUICKLY AND CAN HIT HEAVY BOXING."
        },
        {
            "name": "Bellsprout",
            "number": 69,
            "elf": "MADAQ",
            "species": "FLOW",
            "entry": "?REACT QUICKLY AND STRENGTH VINE WHEN SOMETHING MOVEING."
        },
        {
            "name": "Weepinbell",
            "number": 70,
            "elf": "WUCI",
            "species": "WARE",
            "entry": "?WAVING SHARP LEAF WHEN HUNGRY."
        },
        {
            "name": "Victreebel",
            "number": 71,
            "elf": "WUCI",
            "species": "WARE",
            "entry": "?ANYTHING WHICH IS SWALLOWED WILL MELT AND DIGESTED."
        },
        {
            "name": "Tentacool",
            "number": 72,
            "elf": "MUJEF",
            "species": "JEF",
            "entry": "?PUNCTURED ANYTHING WITH TOXIC TENTACLE WHEN RUSH BY WAVE."
        },
        {
            "name": "Tentacruel",
            "number": 73,
            "elf": "JELLY",
            "species": "JEL",
            "entry": "8?TENTACLES SPREAD WHEN WATERED, CATCH CAPTURE AS A NET."
        },
        {
            "name": "Geodude",
            "number": 74,
            "elf": "SICIB",
            "species": "ROCK",
            "entry": "?BE PROUD OF HARD BODY KNOCK EACH OTHER TO COMPETE."
        },
        {
            "name": "Graveler",
            "number": 74,
            "elf": "GELU",
            "species": "ROCK",
            "entry": "?ROLLING ON ROAD OF HILL, STOP WHEN MEETING ROCK"
        },
        {
            "name": "Golem",
            "number": 76,
            "elf": "NELUO",
            "species": "MEGA",
            "entry": "?BODYS IS HARD AS ROCK CANN'T BEHURT EVEN EXPOILD."
        },
        {
            "name": "Ponyta",
            "number": 77,
            "elf": "BOLI",
            "species": "SEA",
            "entry": "\"?THE SPRING BEING EXERCISED IS ONE OF THE BEST IN ELF."
        },
        {
            "name": "Rapidash",
            "number": 78,
            "elf": "JIALE",
            "species": "SEA",
            "entry": "&?LIKE RUNNING LONG HAIR FLYING WHEN RUNNING FASTER."
        },
        {
            "name": "Slowpoke",
            "number": 79,
            "elf": "YED",
            "species": "FOO",
            "entry": "?ALWAYS OBEYING, DO NOT NOTICE EVEN THE CAPTURE BITE."
        },
        {
            "name": "Slowbro",
            "number": 80,
            "elf": "YEDE",
            "species": "RENT",
            "entry": "?XLB WANT THE SWEET EXUDATION OF TAIL RELUCTANT TO LEAVE."
        },
        {
            "name": "Magnemite",
            "number": 81,
            "elf": "CLO",
            "species": "MAGN",
            "entry": "?RING BE MAGNETIC WHEN EMIT STRONG CURRENCY BOTH SIDE."
        },
        {
            "name": "Magneton",
            "number": 82,
            "elf": "SCARE",
            "species": "MAGN",
            "entry": "?MAGNETIC STORM TO MESSED COMMUNICATE WHEN RING GYRE."
        },
        {
            "name": "Farfetch'd",
            "number": 83,
            "elf": "AOCO",
            "species": "DUCK",
            "entry": "?TO PROTECT PENGUIN MACHINE MERGED THE TRAINING MAN."
        },
        {
            "name": "Doduo",
            "number": 84,
            "elf": "DEDE",
            "species": "ISLE2",
            "entry": "?FIND ENEMY RUNNING AT SPEED OF 100KM/H ON PRIARIE."
        },
        {
            "name": "Dodrio",
            "number": 85,
            "elf": "DEDEI",
            "species": "ISLE3",
            "entry": "?BE PECKED BY BEAK WHEN NELECTED A BIT."
        },
        {
            "name": "Seel",
            "number": 86,
            "elf": "BAWU",
            "species": "DON",
            "entry": "?RESISTANT, LIKE SEA FLOAT WITH ICE."
        },
        {
            "name": "Dewgong",
            "number": 87,
            "elf": "JIUG",
            "species": "DON",
            "entry": "?SLEEP ON BEACH DAYTIME, SWIM TO FIND FOOD AT NIGHT."
        },
        {
            "name": "Grimer",
            "number": 88,
            "elf": "BADEB",
            "species": "PLA",
            "entry": "?BODYS TANGLED EACH OTHER TO MAKE POISON WHEN MET."
        },
        {
            "name": "Muk",
            "number": 89,
            "elf": "BADEB",
            "species": "PLA",
            "entry": "?POISON IS PERMEATE WHEN PASSED, ODD SMELL LAST 3 YEAR."
        },
        {
            "name": "Shellder",
            "number": 90,
            "elf": "HOLE",
            "species": "TIME",
            "entry": "??CLIPPED THE SHELL APPEARS THE SOFT BODY"
        },
        {
            "name": "Cloyster",
            "number": 91,
            "elf": "BODUX",
            "species": "TIME",
            "entry": "(?THE STING USED TO THRUST RIVAIL IS HARDER THAN SHELL."
        },
        {
            "name": "Gastly",
            "number": 92,
            "elf": "GES",
            "species": "LOCK",
            "entry": "?(?TANGLE THE CAPTURE SEND POISON INTO SKIN TO WEAK IT."
        },
        {
            "name": "Haunter",
            "number": 93,
            "elf": "FANT",
            "species": "LOCK",
            "entry": "??HIDE IN DARK PREPARE TO SWALLOW THE CAPTURE."
        },
        {
            "name": "Gengar",
            "number": 94,
            "elf": "QUAR",
            "species": "SECT",
            "entry": "?WHEN BE NOTICED BODY COOLING BIT AND BIT "
        },
        {
            "name": "Onix",
            "number": 95,
            "elf": "YIHE",
            "species": "SNAK",
            "entry": "?ABSORB HARD THING WHILE GOING, TO MAKE HARD BODYS."
        },
        {
            "name": "Drowzee",
            "number": 96,
            "elf": "SWAB",
            "species": "HYPN",
            "entry": "?KNOWING ANYBODY, ANYWHERE TO DREAM WHAT, BY SNIFFING."
        },
        {
            "name": "Hypno",
            "number": 97,
            "elf": "SLIPP",
            "species": "HYP",
            "entry": "?THE MORE VIOLENT WAVING THE LONGER OF HYPNOSITIZING."
        },
        {
            "name": "Krabby",
            "number": 98,
            "elf": "CLU",
            "species": "CRAB",
            "entry": "?TO EAT SAND TO ABSORB NUTRITION WHEN HUNTED NONE."
        },
        {
            "name": "Kingler",
            "number": 99,
            "elf": "DEPOS",
            "species": "CUT",
            "entry": "?THE CLIP WITH BIG DESTORY FORCE IS HEAVY, UNCONVIENT."
        },
        {
            "name": "Voltorb",
            "number": 100,
            "elf": "BILIY",
            "species": "BAL",
            "entry": "?BODY IS MAKE OF THE UNEXIST THINGS IN NATURE."
        },
        {
            "name": "Electrode",
            "number": 101,
            "elf": "YUANO",
            "species": "BAL",
            "entry": "?THE MORE THE ELECTRICITY THE MORE EASY EXPLOID"
        },
        {
            "name": "Exeggcute",
            "number": 102,
            "elf": "SOME",
            "species": "EGG",
            "entry": "?BEING THE STRONG ATTRACTION THE 6 GETHER SOON."
        },
        {
            "name": "Exeggutor",
            "number": 103,
            "elf": "NO",
            "species": "COCO",
            "entry": "?MANY HEADS FALL AND GROW IN GOOD CONDITION."
        },
        {
            "name": "Cubone",
            "number": 104,
            "elf": "YELA",
            "species": "SOL",
            "entry": "?DIE SOON AFTER GROWN, MOTHER WILL APPEAR REAL FACE."
        },
        {
            "name": "Marowak",
            "number": 105,
            "elf": "EMPT",
            "species": "BONE",
            "entry": "?THE BONE IN AND IS PICK UP FROM TOMB FIELDS."
        },
        {
            "name": "Hitmonlee",
            "number": 106,
            "elf": "ZECUN",
            "species": "KIC",
            "entry": "?USING FREELY FOOT TO KICK MANY STUNTS."
        },
        {
            "name": "Hitmonchan",
            "number": 107,
            "elf": "XIAHE",
            "species": "HIT",
            "entry": "?THE FIST HIT WITH WHIRLING TO INCREASE POWER."
        },
        {
            "name": "Lickitung",
            "number": 108,
            "elf": "BOLEL",
            "species": "WHIRL",
            "entry": "?CLEAR THE BODY WITH LICKING BY 2M TONGUE."
        },
        {
            "name": "Koffing",
            "number": 109,
            "elf": "DEJI",
            "species": "POIS",
            "entry": "?JETED TOXIC GAS IS SEEN BOILING IN THE BODYS."
        },
        {
            "name": "Weezing",
            "number": 110,
            "elf": "MACID",
            "species": "TOXI",
            "entry": "-?BODY WILL SWELL AND FOUL WHEN ABSORB POISON GAS."
        },
        {
            "name": "Rhyhorn",
            "number": 111,
            "elf": "XIHON",
            "species": "STIN",
            "entry": "?ANY EXCUSE WILL FOGET SOON WHEN GO AHEAD."
        },
        {
            "name": "Rhydon",
            "number": 112,
            "elf": "XITO",
            "species": "DIG",
            "entry": "?WHIRLING THE HORN BECOME DRILL-HEAD POWERING THE ROCK."
        },
        {
            "name": "Chansey",
            "number": 113,
            "elf": "LUCK",
            "species": "EGG",
            "entry": "?MANY MEN WANT TO GET NUTRITION EGGS IT'S HARD BE SEEN."
        },
        {
            "name": "Tangela",
            "number": 114,
            "elf": "MENJI",
            "species": "SPREA",
            "entry": "?TENTACLES MOVED ENDLESS TO THREAT WHEN IN FIGHTING."
        },
        {
            "name": "Kangaskhan",
            "number": 115,
            "elf": "GELU",
            "species": "DAD",
            "entry": "?SLEEP WITH SITTING TO PROTECT BABY IN BELLY."
        },
        {
            "name": "Horsea",
            "number": 116,
            "elf": "DECI",
            "species": "DGON",
            "entry": "?TAILS TANGLED EACH OTHER TO PLAY WITH IN SAFE PLACE."
        },
        {
            "name": "Seadra",
            "number": 117,
            "elf": "XIDE",
            "species": "DGON",
            "entry": "?EXPEL ANYTHING CLOSED, WHEN MALE CARE BABY."
        },
        {
            "name": "Goldeen",
            "number": 118,
            "elf": "DASAJ",
            "species": "FISH",
            "entry": "?SWIMMING TO MAKE SPOUSE IN LYING EGGS SEASON."
        },
        {
            "name": "Seaking",
            "number": 119,
            "elf": "DONGN",
            "species": "FISH",
            "entry": "?MALE BEGIN TO PETOL TO PROTECT ITS NEST IN AUTOMN."
        },
        {
            "name": "Staryu",
            "number": 120,
            "elf": "RICUL",
            "species": "STAR",
            "entry": "?WHEN START TWINCLE IN SKY, CENTER OF BODY SHINNING."
        },
        {
            "name": "Starmie",
            "number": 121,
            "elf": "MINXI",
            "species": "RID",
            "entry": "?CENTER OF BODY EMIT 7 COLOR LIGHTS."
        },
        {
            "name": "Mr. Mime",
            "number": 122,
            "elf": "BALIY",
            "species": "BLOC",
            "entry": "?ENERGY EMIT BY FINGER WILL ICED THE AIR AROUND."
        },
        {
            "name": "Scyther",
            "number": 123,
            "elf": "ZENDA",
            "species": "COCK",
            "entry": "?IT'S SO QUICK THAT FEELESS THE RIVAIL BEING KNOCK DOWN."
        },
        {
            "name": "Jynx",
            "number": 124,
            "elf": "LUZEL",
            "species": "PUPP",
            "entry": "?THE CRY HAS MANY KINDS AND ALL HAVE MEANS."
        },
        {
            "name": "Electabuzz",
            "number": 125,
            "elf": "HELE5",
            "species": "HIT",
            "entry": "?TO COMMUTE BY CURRENCY WHEN BODYS TOUCHING."
        },
        {
            "name": "Magmar",
            "number": 126,
            "elf": "OFENB",
            "species": "FIR",
            "entry": "?WOUND IN FIGHT WILL BE HEALED BY LAVA."
        },
        {
            "name": "Pinsir",
            "number": 127,
            "elf": "KAIL",
            "species": "WING",
            "entry": "?SLEEP ON TREE OR ROOT AT NIGHT THEN COOLING."
        },
        {
            "name": "Tauros",
            "number": 128,
            "elf": "JIAND",
            "species": "COW",
            "entry": "?FIGHT IN HEART TO ENSURE ITS HARDNESS"
        },
        {
            "name": "Magikarp",
            "number": 129,
            "elf": "CARP",
            "species": "FISH",
            "entry": "?WEAK, AND FLOAT WITH WATER."
        },
        {
            "name": "Gyarados",
            "number": 130,
            "elf": "JINDE",
            "species": "FIRCE",
            "entry": "?BURNED UP AROUND, WHEN FIGHTINGS BECOME MORE OFTEN."
        },
        {
            "name": "Lapras",
            "number": 131,
            "elf": "LAPU",
            "species": "TOOL",
            "entry": "?LIKE TO BACK SOMEONE TO WANDER AROUND"
        },
        {
            "name": "Ditto",
            "number": 132,
            "elf": "MUDE",
            "species": "DRES",
            "entry": "?WHEN MET, IT WILL ACT MORE VIOLENTLY."
        },
        {
            "name": "Eevee",
            "number": 133,
            "elf": "YIFU",
            "species": "MEL",
            "entry": "?REACT ENVIRONMENT QUICKLY, HAVING POSIBLE TO ENVOLVE."
        },
        {
            "name": "Vaporeon",
            "number": 134,
            "elf": "LINLI",
            "species": "FOAM",
            "entry": "?TAIL HAVING FIN, WHEN SWIM LIKE MELT IN WATER."
        },
        {
            "name": "Jolteon",
            "number": 135,
            "elf": "SANDI",
            "species": "THUN",
            "entry": "?MAKING MANY IONS BETWEEN FURTHER, AND, MAKE SOUND."
        },
        {
            "name": "Flareon",
            "number": 136,
            "elf": "HUSI",
            "species": "FIR",
            "entry": "?BST'S TEMPERATURE RICE TO 900C, WHEN FIRE ACCUMULATED."
        },
        {
            "name": "Porygon",
            "number": 137,
            "elf": "JINC",
            "species": "FIRE",
            "entry": "?NOT MAN MADE PROGRAM TO STUDY ELF."
        },
        {
            "name": "Omanyte",
            "number": 138,
            "elf": "OUMU",
            "species": "WHIR",
            "entry": "?ATE MICROBE, FOSSIL ARE OFTEN BE FOUND SWIM AT SEA BOTTOM."
        },
        {
            "name": "Omastar",
            "number": 139,
            "elf": "OUMUX",
            "species": "WHIR",
            "entry": "?SHELL IS HEAVY ONLY EAT FOOD NEAR SO IS EXTINGUISH."
        },
        {
            "name": "Kabuto",
            "number": 140,
            "elf": "CAP",
            "species": "NUT",
            "entry": "?LIVE At SEA BOTTOM 300 MILLION YEAR AGO SHINE ON BACK."
        },
        {
            "name": "Kabutops",
            "number": 142,
            "elf": "KUIZA",
            "species": "NUT",
            "entry": "?SCISSORS FOLD TO SMALL, MOVE QUICKLY IN WATER."
        },
        {
            "name": "Aerodactyl",
            "number": 142,
            "elf": "PUD",
            "species": "ROC",
            "entry": "?FLEW IN AIR LONG AGO, FEARED NOTHING."
        },
        {
            "name": "Snorlax",
            "number": 143,
            "elf": "TIAO",
            "species": "DOZE",
            "entry": "?NO MATTER, EVEN EAT SOMETHING RUSTY OR DETERIORATE."
        },
        {
            "name": "Articuno",
            "number": 144,
            "elf": "FRMAN",
            "species": "COOL",
            "entry": "?COOLING THE AIR NEAR TO SNOW."
        },
        {
            "name": "Zapdos",
            "number": 145,
            "elf": "CLAU",
            "species": "HIT",
            "entry": "%?LEGEND BIRD TO MAKE STORM WHILE FLYING AT SUMMER."
        },
        {
            "name": "Moltres",
            "number": 146,
            "elf": "SPARK",
            "species": "FIR",
            "entry": "?HEARSAID BIRD FLEW FROM SOUNTH IN SPRING."
        },
        {
            "name": "Dratini",
            "number": 147,
            "elf": "DRAGO",
            "species": "DGON",
            "entry": "?ECDYSISING, GROWING, UNDER THE PROTECT OF WATER FALL."
        },
        {
            "name": "Dragonair",
            "number": 148,
            "elf": "BOLIU",
            "species": "DGON",
            "entry": "?THE WEATHER AROUND CHANGED BY BODY'S FLAME."
        },
        {
            "name": "Dragonite",
            "number": 149,
            "elf": "GUAIL",
            "species": "DGON",
            "entry": "?IN THE WIDE SEA THER ARE CENTRALIZE ISLANDS."
        },
        {
            "name": "Mewtwo",
            "number": 150,
            "elf": "MIYOU",
            "species": "GENE",
            "entry": "?SLEEP IN CAVE BORN FOR FIGHTING."
        },
        {
            "name": "Mew",
            "number": 151,
            "elf": "MIY",
            "species": "KIND",
            "entry": "?TO REMBER SKILLS BEGIN TO STUDY ELF'S ANCESTOR."
        },
        {
            "name": "Chikorita",
            "number": 152,
            "elf": "QIAOK",
            "species": "LEA",
            "entry": "?LIKE SUNSHINE, USEING LEAF FIND WARM PLACE."
        },
        {
            "name": "Bayleef",
            "number": 153,
            "elf": "BEIL",
            "species": "LEA",
            "entry": "?EVERYONE FULLE OF POWER WHEN SMELL FAGRANT FROM LEAF."
        },
        {
            "name": "Meganium",
            "number": 154,
            "elf": "MUKEI",
            "species": "WEE",
            "entry": "?BESIDE MKNI, PEOPLE FEELING GOOD AS BEING WASHED."
        },
        {
            "name": "Cyndaquil",
            "number": 155,
            "elf": "RIDED",
            "species": "RAT",
            "entry": "?TO AFRAID ENEMY BY JET OUT FLAME ON BACK."
        },
        {
            "name": "Quilava",
            "number": 156,
            "elf": "MADAM",
            "species": "HIL",
            "entry": "?BACK TO ENEMY, TO LET IT SEE THE FIRE ON BACK."
        },
        {
            "name": "Typhlosion",
            "number": 157,
            "elf": "BAGEP",
            "species": "HIL",
            "entry": "?SMOKE RISE FROM BK IS A SYMBLE OF FIGHTING."
        },
        {
            "name": "Totodile",
            "number": 158,
            "elf": "CROC",
            "species": "FOOT",
            "entry": "BITE EVERYING SEEN BE CARE NOT TO GO AHEAD OF IT."
        },
        {
            "name": "Croconaw",
            "number": 159,
            "elf": "ALIGE",
            "species": "FOOT",
            "entry": "ANYTHING BE BITTEN CAN'T ESCAPED"
        },
        {
            "name": "Feraligatr",
            "number": 160,
            "elf": "OUDAL",
            "species": "FOOT",
            "entry": "?HUGE BODY MOVE QUICKLY WITH STRONG LEG."
        },
        {
            "name": "Sentret",
            "number": 161,
            "elf": "OUD",
            "species": "KEE",
            "entry": "?????Z???? ?X?? ???? ???E??X???? ???C???E????."
        },
        {
            "name": "Furret",
            "number": 162,
            "elf": "DADA",
            "species": "BODY",
            "entry": "?THE SAND CAVE MADE BY ITS BODY LIKE LABYRINTH."
        },
        {
            "name": "Hoothoot",
            "number": 163,
            "elf": "HEHE",
            "species": "OWL",
            "entry": "?ALWAYS LOUD AT SET TIME BRING IT AS CLOCK."
        },
        {
            "name": "Noctowl",
            "number": 164,
            "elf": "YEDEA",
            "species": "OWL",
            "entry": "?SOFT BONE, MAKE NO SOUND WHEN FLYING."
        },
        {
            "name": "Ledyba",
            "number": 165,
            "elf": "NUXI",
            "species": "FIGER",
            "entry": "?TELL ITS POSITION BY TAST OF LIQUID FROM FOOT."
        },
        {
            "name": "Ledian",
            "number": 166,
            "elf": "NUXIN",
            "species": "FNGER",
            "entry": "?SLEEP CALMLY WHEN KNOCK UNDER BIG LEAF AT DAYTIME."
        },
        {
            "name": "Spinarak",
            "number": 167,
            "elf": "ROUY",
            "species": "????",
            "entry": "KEEP UNMOVING TILL DARK WHILE CATCHING CAPTURE."
        },
        {
            "name": "Ariados",
            "number": 168,
            "elf": "ALIAD",
            "species": "FOOT",
            "entry": "?HUNTING WHEN IT IS DARK, NESTING UNFIXED PLACE."
        },
        {
            "name": "Crobat",
            "number": 169,
            "elf": "STICK",
            "species": "BAT",
            "entry": "?BACK FOOT GROWS FURTHER TO FLY SMOOTHLY."
        },
        {
            "name": "Chinchou",
            "number": 170,
            "elf": "QIANG",
            "species": "FISH",
            "entry": "?TENTACLE CHANGED FROM FIN FLOAT WITH ELECTRON."
        },
        {
            "name": "Lanturn",
            "number": 171,
            "elf": "LAAND",
            "species": "LIG",
            "entry": "?THE PART EMIT RAY TO ATTRACT CAPTURE COMES FROM FIN."
        },
        {
            "name": "Pichu",
            "number": 172,
            "elf": "PIQI",
            "species": "RAT",
            "entry": "?IT WILL DISCHARGE WHEN IS SIMULATED."
        },
        {
            "name": "Cleffa",
            "number": 173,
            "elf": "PI",
            "species": "STAR",
            "entry": "?YOU WILL FIND FUR IF FOUND THE PLACE THAT METEOR FALLED."
        },
        {
            "name": "Igglybuff",
            "number": 174,
            "elf": "PUPI",
            "species": "BALL",
            "entry": "?LIKE TO USE SOFT BODY TO MOVE WITH LEAPING."
        },
        {
            "name": "Togepi",
            "number": 175,
            "elf": "DEKE",
            "species": "NIDD",
            "entry": "?SYMBLE OF LUCKLY FULL OF HAPPYNESS IN BODY."
        },
        {
            "name": "Togetic",
            "number": 176,
            "elf": "DEKEJ",
            "species": "LUCK",
            "entry": "?DO NOT FLAP WING, AFTER FLOATING FOLLOW BEHIND."
        },
        {
            "name": "Natu",
            "number": 177,
            "elf": "NADI",
            "species": "BIR",
            "entry": "?CLIMB ON TREE TO EAT THE NEW SPROUT."
        },
        {
            "name": "Xatu",
            "number": 178,
            "elf": "NADIO",
            "species": "ELF",
            "entry": "?UNMOVED WHEN SPRAYING OR SEEING SUNRISE."
        },
        {
            "name": "Mareep",
            "number": 179,
            "elf": "MALI",
            "species": "WOO",
            "entry": "?MANY LOOPHOLES IN FAIRS COOL SUMMER HOT IN WINTER."
        },
        {
            "name": "Flaaffy",
            "number": 180,
            "elf": "PEA",
            "species": "WOO",
            "entry": "?INSULATE SKIN SMOOTH AS RUBBER BRING ELECTRICITY."
        },
        {
            "name": "Ampharos",
            "number": 181,
            "elf": "ELECT",
            "species": "FIR",
            "entry": "?SEE THE LIGTH EMIT FROM ELECT-TAIL REMOTE AT NIGHT."
        },
        {
            "name": "Bellossom",
            "number": 182,
            "elf": "FLOWE",
            "species": "FLOW",
            "entry": "?BEAUTIFUL FLOWER DANCING, PETALS KNOCK EACH OTHER."
        },
        {
            "name": "Marill",
            "number": 183,
            "elf": "MAL",
            "species": "MOUSE",
            "entry": "?FAIR IS PREVENT TO WATER, DRY EVEN AFTER WASHED."
        },
        {
            "name": "Azumarill",
            "number": 184,
            "elf": "MALI",
            "species": "HARE",
            "entry": "?SHOW ITS GESTURE IN WATER BY THE RINGS AROUND BELLY."
        },
        {
            "name": "Sudowoodo",
            "number": 185,
            "elf": "HUSHU",
            "species": "AS",
            "entry": "?TREE IS FAKE WHEN WAVES IN NOWIND. HIDE IN THE RAIN."
        },
        {
            "name": "Politoed",
            "number": 186,
            "elf": "NILEE",
            "species": "FOG",
            "entry": "?NLM AND NLZ AROUND CAME SOON WHEN MAKE LOUD SOUND."
        },
        {
            "name": "Hoppip",
            "number": 187,
            "elf": "YUZI",
            "species": "COTT",
            "entry": "?FLOAT WHEN BREEZED AND DRIFT TO THE TOWN NEARBY."
        },
        {
            "name": "Skiploom",
            "number": 188,
            "elf": "POPOZ",
            "species": "COTT",
            "entry": "?CLOSE FLOWER WHEN RAIN AND HIDE UNDER SHADE."
        },
        {
            "name": "Jumpluff",
            "number": 189,
            "elf": "DUZI",
            "species": "COTT",
            "entry": "?GO TO ANYWHERE BY CONTROL VILLUS DESPITE OF WIND."
        },
        {
            "name": "Aipom",
            "number": 190,
            "elf": "HEBA",
            "species": "TAI",
            "entry": "?HANG ON TREE BY TAIL, MOVE BY BODY'S SWAYING."
        },
        {
            "name": "Sunkern",
            "number": 191,
            "elf": "XIAN",
            "species": "ZI",
            "entry": "?VERY WEAK, WHEN BE ATTCKED ONLY CAN WAVE LEAF."
        },
        {
            "name": "Sunflora",
            "number": 192,
            "elf": "SHAN",
            "species": "SUN",
            "entry": "?BECOME ACTIVE PETALS ARE VIVID AT SUMMER."
        },
        {
            "name": "Yanma",
            "number": 193,
            "elf": "YEYEA",
            "species": "FURT",
            "entry": "?SEE CLEARLY IN ALL DIRECTIONS EVEN UNMOVED EYEBALLS."
        },
        {
            "name": "Wooper",
            "number": 194,
            "elf": "WUY",
            "species": "FISH",
            "entry": "?COVERED BY TRANSPARENT MUCUS, NUMBED WHEN TOUCH."
        },
        {
            "name": "Quagsire",
            "number": 195,
            "elf": "LUO",
            "species": "FISH",
            "entry": "?BODYS ARE ALL WET, CARELESS OF KNOCK AT BOTTOM OF RIVER."
        },
        {
            "name": "Espeon",
            "number": 196,
            "elf": "KEFE",
            "species": "SUN",
            "entry": "?WHEN FORESEE THE RIVIAL'S ACTION, TAIL MOVE DELICATE."
        },
        {
            "name": "Umbreon",
            "number": 197,
            "elf": "HULA",
            "species": "NOON",
            "entry": "?STRIPE EMIT YELLOW LIGH AT NIGHT OF FULLNOON OR EXCITE."
        },
        {
            "name": "Murkrow",
            "number": 198,
            "elf": "CROW",
            "species": "DARK",
            "entry": "?HIDE IN SECRET PLACE, WHEN PICKED SHINNING THINGS."
        },
        {
            "name": "Slowking",
            "number": 199,
            "elf": "YADEH",
            "species": "KING",
            "entry": "?JET POISON FROM XLUT WHEN YAWN INTELLIGENT ADDED."
        },
        {
            "name": "Misdreavus",
            "number": 200,
            "elf": "MOW",
            "species": "CRY",
            "entry": "?APPEAR SUDDENLY CRYING, LIKE TO SEE THE LOOK OF AFRAID."
        },
        {
            "name": "Unown",
            "number": 201,
            "elf": "ANNAN",
            "species": "SYMB",
            "entry": "?THERE ARE SOME KINDS ALL HAVE DIFFERENT POWERS."
        },
        {
            "name": "Wobbuffet",
            "number": 202,
            "elf": "SUONI",
            "species": "BAR",
            "entry": "?HID IN DARK CAVE TO HIDE BLACK TAIL TILL NIGHT."
        },
        {
            "name": "Girafarig",
            "number": 203,
            "elf": "KYLI",
            "species": "NECK",
            "entry": "?DRIVE ENEMY AWAY BY EMIT ODD POWER WHEN IN DANGEROUS."
        },
        {
            "name": "Pineco",
            "number": 204,
            "elf": "HULU",
            "species": "INSE",
            "entry": "?LIQUID JET FROM MOUSE IS GLUE, HARD WHEN MET AIR."
        },
        {
            "name": "Forretress",
            "number": 205,
            "elf": "HUDEL",
            "species": "INSE",
            "entry": "?ATTACH TO TRUNK, WHEN FEEL BAD WILL JET OUT PIECES."
        },
        {
            "name": "Dunsparce",
            "number": 206,
            "elf": "YEHE",
            "species": "SNAK",
            "entry": "?KEEP STANDING IN DEEP HOLE WHERE SUNRAY CAN'T REACH."
        },
        {
            "name": "Gligar",
            "number": 207,
            "elf": "GULAE",
            "species": "SCORP",
            "entry": "?NESTING ON CLIFF, AFTER GLIDING, JUMP TO HOUSE."
        },
        {
            "name": "Steelix",
            "number": 208,
            "elf": "YEHE",
            "species": "SNAK",
            "entry": "?SHINE UNDER SUNLINE, FULL OF PIECES OF IRON."
        },
        {
            "name": "Snubbull",
            "number": 209,
            "elf": "BLU",
            "species": "ELF",
            "entry": "?MAKE NO SOUND TO HIDE ITS FEARNESS."
        },
        {
            "name": "Granbull",
            "number": 210,
            "elf": "GELAN",
            "species": "ELF",
            "entry": "?OPEN MOUSE TO SHOW TEETH, AS GOING TO ESCAPED."
        },
        {
            "name": "Qwilfish",
            "number": 211,
            "elf": "BOAT",
            "species": "BALL",
            "entry": "?ABSORB MORE WATER TO SWELL ITS BODYS."
        },
        {
            "name": "Scizor",
            "number": 212,
            "elf": "NIP",
            "species": "KNI",
            "entry": "?EVERTHING WILL BE PIECES WHEN SNATCH BY IRON CLAW."
        },
        {
            "name": "Shuckle",
            "number": 213,
            "elf": "POIT",
            "species": "LIGHT",
            "entry": "?MIXED OF FRUIT AND LIQUID FROM FOOT INTO DRINKING."
        },
        {
            "name": "Heracross",
            "number": 214,
            "elf": "HELAK",
            "species": "\"LIGH",
            "entry": "?WEIGH AS 100 MULTIFY ITS WEIGH CAN BE CAST EASY."
        },
        {
            "name": "Sneasel",
            "number": 215,
            "elf": "XINL",
            "species": "CLAW",
            "entry": "?VERY CUNNING, ATTACK CAPTURE IN DARK PLACE."
        },
        {
            "name": "Teddiursa",
            "number": 216,
            "elf": "BEAR",
            "species": "BEA",
            "entry": "?ALWAYS LICK HONEY, PALM IS FULL OF HONEY"
        },
        {
            "name": "Ursaring",
            "number": 217,
            "elf": "LINB",
            "species": "HIB",
            "entry": "?EAT AND SLEEP ON THE TREE, CLIMB TREE QUICKLY."
        },
        {
            "name": "Slugma",
            "number": 218,
            "elf": "MAGEH",
            "species": "LAVA",
            "entry": "?SKINS GET HARD IN PLACE OF MGS GATHERED."
        },
        {
            "name": "Magcargo",
            "number": 219,
            "elf": "MAGEJ",
            "species": "LAVA",
            "entry": "?ROLLING, HOT AS LAVA, AND HAVE SPARKLE FROM SHELL."
        },
        {
            "name": "Swinub",
            "number": 220,
            "elf": "WULI",
            "species": "BOAR",
            "entry": "?FIND FOOD, BY DRILL HOLE WITH NORSE NO MATTER COLD."
        },
        {
            "name": "Piloswine",
            "number": 221,
            "elf": "YIDE",
            "species": "BOAR",
            "entry": "?GLIDE ON SNOW FEET ARE SHORT HOOF AS SAW."
        },
        {
            "name": "Corsola",
            "number": 222,
            "elf": "RIVE",
            "species": "COR",
            "entry": "?WILL NOT LIVE IN DURTY SEA GROW WITH NET WATER."
        },
        {
            "name": "Remoraid",
            "number": 223,
            "elf": "FISH",
            "species": "SPRY",
            "entry": "?USEING THE JET OUT WATER TO ESCAPE BACKWARD."
        },
        {
            "name": "Octillery",
            "number": 224,
            "elf": "AOGU",
            "species": "SPRY",
            "entry": "?HAVING PRORERTY OF DRILLING, SLEEP IN OTHER'S NEST."
        },
        {
            "name": "Delibird",
            "number": 225,
            "elf": "DELIE",
            "species": "CARY",
            "entry": "?CAST FOOT TO PROTECT ITSELF WHEN BE ATTACTED."
        },
        {
            "name": "Mantine",
            "number": 226,
            "elf": "MANTE",
            "species": "KIT",
            "entry": "?SWIM FREELY, ATE FOOD RUN TO ITS MOUSE BY CHANCE."
        },
        {
            "name": "Skarmory",
            "number": 227,
            "elf": "KONMU",
            "species": "BIRD",
            "entry": "\"?DEPRIVED FURTHER IS THIN AND SHARP AS KNIFE"
        },
        {
            "name": "Houndour",
            "number": 228,
            "elf": "DELU",
            "species": "DAR",
            "entry": "?TO ANNOUCE ITS TERRITORY BY LOUD AS DAY BREAK."
        },
        {
            "name": "Houndoom",
            "number": 229,
            "elf": "HELU",
            "species": "DAR",
            "entry": "?FLAME JET OUT FROM MOUSE IS BURNED FROM BODY'S POISON."
        },
        {
            "name": "Kingdra",
            "number": 230,
            "elf": "HUAN",
            "species": "DGON",
            "entry": "?SLEEP AND ACCUMULATE POWER IN DEEP SEA."
        },
        {
            "name": "Phanpy",
            "number": 231,
            "elf": "HUMA",
            "species": "NOSE",
            "entry": "?DRAW WATER TO WASH WITH LONG NORSE AT RIVERSIDE EARLY."
        },
        {
            "name": "Donphan",
            "number": 232,
            "elf": "DONGF",
            "species": "NAI",
            "entry": "?COVERED BY THICK SKIN SO WILL NOT BE WOUNDED."
        },
        {
            "name": "Porygon2",
            "number": 233,
            "elf": "JINCA",
            "species": "ARMOR",
            "entry": "?MEN MADE ELF SHOWS REACTION WHICH IS NOT IN PROGRAMING."
        },
        {
            "name": "Stantler",
            "number": 234,
            "elf": "HEDE",
            "species": "HORN",
            "entry": "?SLEEP GOOD AFTER POWDER MADE BY ROOT OF HORN."
        },
        {
            "name": "Smeargle",
            "number": 235,
            "elf": "DEFU",
            "species": "MAP",
            "entry": "??COLORS OF LIQUID SECRETE BY TAIL IS DIFFERENCE."
        },
        {
            "name": "Tyrogue",
            "number": 236,
            "elf": "LIBY",
            "species": "NOI",
            "entry": "?CHALLENGE ALL KIND RIVIAL TO EXERCISE ITS FIGHT POWER."
        },
        {
            "name": "Hitmontop",
            "number": 237,
            "elf": "JIAPA",
            "species": "STAN",
            "entry": "?DISTURB THE RIVAIL BY UPSIDE DOWN THEN KICK THEM."
        },
        {
            "name": "Smoochum",
            "number": 238,
            "elf": "MEJI",
            "species": "WORD",
            "entry": "?WHEN MET SOMETHING UNFAMILAR, TOUCH WITH LIP FIRST."
        },
        {
            "name": "Elekid",
            "number": 239,
            "elf": "HELE",
            "species": "SEN",
            "entry": "?AS VIOLENT THUNDER FULL OF CHARGE, JET RAY BETWEEN HORNS."
        },
        {
            "name": "Magby",
            "number": 240,
            "elf": "BUHU",
            "species": "SED",
            "entry": "?JET FIRE AS BORN BD IS ANTICIPATE OF JET FLAME."
        },
        {
            "name": "Miltank",
            "number": 241,
            "elf": "MILK",
            "species": "COW",
            "entry": "?THE KNACK IS UP TO DOWN AND JOSTLE WHEN MILKING."
        },
        {
            "name": "Blissey",
            "number": 242,
            "elf": "HABI",
            "species": "LUCK",
            "entry": "?BORNS HAPPY EGGS ALL SHOW SMILE FACE AFTER ATE."
        },
        {
            "name": "Raikou",
            "number": 243,
            "elf": "THUN",
            "species": "THUN",
            "entry": "?EMIT BY STRIKE OF LIGHTING TO PENETRATE THE EARTH."
        },
        {
            "name": "Entei",
            "number": 244,
            "elf": "GARD",
            "species": "FIR",
            "entry": "?JET OUT FIRE HOTER HAN LAVA OF VOLCANO."
        },
        {
            "name": "Suicune",
            "number": 245,
            "elf": "DON",
            "species": "OULA",
            "entry": "?FIND CLEAR WATER CROSS THROUGHT THE EARTH, HOLY."
        },
        {
            "name": "Larvitar",
            "number": 246,
            "elf": "YANGQ",
            "species": "FUR",
            "entry": "%?UNDER GROUND AFTER ATE MUCH EARTH IT BECOME TO PUPA."
        },
        {
            "name": "Pupitar",
            "number": 247,
            "elf": "SANAQ",
            "species": "BULT",
            "entry": "?PUPA WILL NOT UNCHANGED, HARD SHELL IS GROWN."
        },
        {
            "name": "Tyranitar",
            "number": 248,
            "elf": "BANQ",
            "species": "NAI",
            "entry": "?DAMAGE HILL BY HAND INCUR EARTHQUACK WITH HUGE ENERGE."
        },
        {
            "name": "Lugia",
            "number": 249,
            "elf": "LUJ",
            "species": "SUBM",
            "entry": "?THE POWER TO PEACE THE TSUNAMI MERGED WHEN STORM COMES."
        },
        {
            "name": "Ho-oh",
            "number": 250,
            "elf": "PHIX",
            "species": "COLO",
            "entry": "?SHOW COLORFUL WING BEFORE ELF, AND THEN EMERGED."
        },
        {
            "name": "Celebi",
            "number": 251,
            "elf": "SIEI",
            "species": "GONE",
            "entry": "?BE SACRIFICED AS WOODS DIVINE, SNB EMERGED IN WOODS."
        }
    ];

    alternateNames["Elf's World"] = Array.prototype.concat([null], elfDex.map(d => d.elf));
}