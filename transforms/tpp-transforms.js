var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var TPP;
(function (TPP) {
    var Scale;
    (function (Scale) {
        Scale[Scale["Weeks"] = 0] = "Weeks";
        Scale[Scale["Days"] = 1] = "Days";
        Scale[Scale["Hours"] = 2] = "Hours";
        Scale[Scale["Minutes"] = 3] = "Minutes";
    })(Scale = TPP.Scale || (TPP.Scale = {}));
})(TPP || (TPP = {}));
var Twitch;
(function (Twitch) {
    var offsetExp = /offset=(\d*)/i;
    var clientId = 'l6ejgsj101ymei0f6v4a6nkjw9upml9';
    var Video = (function () {
        function Video(recorded_at, length, url, source) {
            this.recorded_at = recorded_at;
            this.length = length;
            this.url = url;
            this.source = source;
            this.StartTime = new Date(recorded_at).valueOf() / 1000;
            this.EndTime = this.StartTime + length;
        }
        return Video;
    }());
    Twitch.Video = Video;
    function GetVideos(channel, getAll) {
        if (getAll === void 0) { getAll = true; }
        var videos = [], getAllVideos = function (r) {
            if (r.videos.length) {
                videos = videos.concat.apply(videos, r.videos.map(function (v) { return new Video(v.recorded_at, v.length, v.url, "Twitch"); }));
                if (getAll && r._total) {
                    return callApi(r._links.next).then(getAllVideos);
                }
            }
            return videos;
        };
        return $.when(callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?broadcasts=true&limit=100").then(getAllVideos), callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?limit=100").then(getAllVideos));
    }
    Twitch.GetVideos = GetVideos;
    function callApi(url) {
        return $.get(url + (url.indexOf('?') > 0 ? '&' : '?') + "client_id=" + clientId);
    }
})(Twitch || (Twitch = {}));
var TPP;
(function (TPP) {
    var Duration = (function () {
        function Duration(weeks, days, hours, minutes, seconds) {
            if (days === void 0) { days = 0; }
            if (hours === void 0) { hours = 0; }
            if (minutes === void 0) { minutes = 0; }
            if (seconds === void 0) { seconds = 0; }
            this.days = days;
            this.hours = hours;
            this.minutes = minutes;
            this.seconds = seconds;
            if (typeof (weeks) === "string") {
                var parsed = Duration.parse(weeks);
                this.days = parsed.days;
                this.hours = parsed.hours;
                this.minutes = parsed.minutes;
                this.seconds = parsed.seconds;
            }
            else
                this.days += weeks * 7;
        }
        Object.defineProperty(Duration.prototype, "TotalSeconds", {
            get: function () {
                return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
            },
            set: function (value) {
                this.seconds = Math.floor(value % 60);
                this.minutes = Math.floor(value / 60) % 60;
                this.hours = Math.floor(value / 60 / 60) % 24;
                this.days = Math.floor(value / 60 / 60 / 24);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalHours", {
            get: function () {
                return this.TotalSeconds / 60 / 60;
            },
            set: function (value) {
                this.TotalSeconds = value * 60 * 60;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalDays", {
            get: function () {
                return this.TotalHours / 24;
            },
            set: function (value) {
                this.TotalHours = value * 24;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Duration.prototype, "TotalWeeks", {
            get: function () {
                return this.TotalDays / 7;
            },
            set: function (value) {
                this.TotalDays = value * 7;
            },
            enumerable: true,
            configurable: true
        });
        Duration.prototype.TotalTime = function (scale) {
            switch (scale) {
                case TPP.Scale.Weeks:
                    return this.TotalWeeks;
                case TPP.Scale.Hours:
                    return this.TotalHours / 4;
                case TPP.Scale.Minutes:
                    return this.TotalHours * 6;
            }
            return this.TotalDays;
        };
        Duration.prototype.toString = function (scale) {
            if (scale === void 0) { scale = TPP.Scale.Days; }
            return (scale == TPP.Scale.Minutes ? (this.days * 24 + this.hours) * 60 + this.minutes : (scale == TPP.Scale.Hours ? this.days * 24 + this.hours : (scale == TPP.Scale.Weeks ? Math.floor(this.days / 7) + "w " + (this.days % 7) : this.days) + "d " + this.hours) + "h " + this.minutes) + "m" + (this.seconds ? " " + this.seconds + "s" : "");
        };
        Duration.parse = function (time, baseTime) {
            var retval = new Duration(0, 0, 0, 0);
            if (time) {
                if (this.canParse(time)) {
                    try {
                        var matches = this.parseReg.exec(time);
                        return new Duration(parseInt(matches[1]) || 0, parseInt(matches[2]) || 0, parseInt(matches[3]) || 0, parseInt(matches[4]) || 0, parseInt(matches[5]) || 0);
                    }
                    catch (e) { }
                }
                if (baseTime) {
                    retval.TotalSeconds = (Date.parse(time) / 1000) - baseTime;
                }
            }
            return retval;
        };
        Duration.canParse = function (time) {
            return this.parseReg.test(time);
        };
        return Duration;
    }());
    Duration.parseReg = /^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i;
    TPP.Duration = Duration;
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Pokedex;
    (function (Pokedex) {
        var RunSummaryBase = (function () {
            function RunSummaryBase() {
                this.OwnedDict = {};
                this.HallOfFame = [];
            }
            return RunSummaryBase;
        }());
        Pokedex.RunSummaryBase = RunSummaryBase;
        var CollectionSummaryBase = (function () {
            function CollectionSummaryBase() {
                this.Summary = [];
                this.HallOfFame = [];
            }
            return CollectionSummaryBase;
        }());
        Pokedex.CollectionSummaryBase = CollectionSummaryBase;
        var DexEntryBase = (function () {
            function DexEntryBase() {
                this.Owners = [];
                this.HallOfFame = [];
            }
            Object.defineProperty(DexEntryBase.prototype, "IsOwned", {
                get: function () {
                    return this.Owners && this.Owners.length > 0;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DexEntryBase.prototype, "FirstOwnedRun", {
                get: function () {
                    return this.IsOwned ? this.Owners[0].Run : {};
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(DexEntryBase.prototype, "FirstCaughtDate", {
                get: function () {
                    return this.IsOwned ? this.Owners[0].CaughtOn : false;
                },
                enumerable: true,
                configurable: true
            });
            return DexEntryBase;
        }());
        Pokedex.DexEntryBase = DexEntryBase;
        var GlobalDexBase = (function () {
            function GlobalDexBase() {
                this.Entries = [];
            }
            Object.defineProperty(GlobalDexBase.prototype, "NoGlitchMon", {
                get: function () {
                    return this.Entries.filter(function (e) { return !(e.Number == 0 && e.Pokemon == "MissingNo."); });
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "TotalOwned", {
                get: function () {
                    return this.NoGlitchMon.filter(function (e) { return e.IsOwned; }).length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "TotalInDex", {
                get: function () {
                    return this.NoGlitchMon.length;
                },
                enumerable: true,
                configurable: true
            });
            Object.defineProperty(GlobalDexBase.prototype, "OwnedPercentage", {
                get: function () {
                    return (this.TotalOwned / this.TotalInDex) * 100;
                },
                enumerable: true,
                configurable: true
            });
            return GlobalDexBase;
        }());
        Pokedex.GlobalDexBase = GlobalDexBase;
    })(Pokedex = TPP.Pokedex || (TPP.Pokedex = {}));
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Transforms;
    (function (Transforms) {
        var Pokedex;
        (function (Pokedex) {
            var RunSummary = (function (_super) {
                __extends(RunSummary, _super);
                function RunSummary(Run, PokeList) {
                    var _this = _super.call(this) || this;
                    _this.Run = Run;
                    if (Run.Events.filter(function (e) { return e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0); }).length) {
                        _this.FillOwnedDict(PokeList);
                        _this.FillHallOfFame(PokeList);
                    }
                    return _this;
                }
                RunSummary.prototype.FillOwnedDict = function (PokeList) {
                    var _this = this;
                    this.InitOwnedDict(PokeList);
                    this.Run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (p) {
                        var timestamp = TPP.Duration.parse(p.Time, _this.Run.StartTime).TotalSeconds + _this.Run.StartTime;
                        if (!_this.AddOwnedPokemonIfRecognized(p.Name, timestamp, PokeList)) {
                            _this.AddOwnedPokemonIfRecognized(p.Class, timestamp, PokeList);
                        }
                    });
                };
                RunSummary.prototype.AddOwnedPokemonIfRecognized = function (mon, timestamp, PokeList) {
                    if (PokeList.indexOf(mon) < 0)
                        return false;
                    this.OwnedDict[mon] = this.OwnedDict[mon] && this.OwnedDict[mon] < timestamp ? this.OwnedDict[mon] : timestamp;
                    return true;
                };
                RunSummary.prototype.InitOwnedDict = function (PokeList) {
                    var _this = this;
                    this.OwnedDict = {};
                    PokeList.forEach(function (p) { return _this.OwnedDict[p] = false; });
                };
                RunSummary.prototype.FillHallOfFame = function (PokeList) {
                    var _this = this;
                    this.Run.Events.filter(function (e) { return e.Party && TPP.Duration.parse(e.Time, _this.Run.StartTime).TotalSeconds >= 0; }).forEach(function (hof) { return hof.Party.forEach(function (p) {
                        var mon = PokeList.indexOf(p.Pokemon) >= 0 ? p.Pokemon : PokeList.indexOf(p.Class) >= 0 ? p.Class : null;
                        if (mon) {
                            _this.HallOfFame.push({
                                Pokemon: mon,
                                Ribbon: hof.Image,
                                RunName: _this.Run.RunName,
                                HostName: _this.Run.HostName,
                                Nickname: (p.Nickname || p.Pokemon).replace(/π/g, 'ᴾk').replace(/µ/g, 'ᴹn'),
                                UnmodifiedNick: p.Nickname,
                                PreviousNick: p.PreviousNick,
                                Time: TPP.Duration.parse(hof.Time, _this.Run.StartTime).TotalSeconds + _this.Run.StartTime
                            });
                        }
                    }); });
                };
                return RunSummary;
            }(TPP.Pokedex.RunSummaryBase));
            Pokedex.RunSummary = RunSummary;
        })(Pokedex = Transforms.Pokedex || (Transforms.Pokedex = {}));
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Transforms;
    (function (Transforms) {
        var Pokedex;
        (function (Pokedex) {
            var CollectionSummary = (function (_super) {
                __extends(CollectionSummary, _super);
                function CollectionSummary(tppData, PokeList) {
                    var _this = _super.call(this) || this;
                    var summaries = [];
                    tppData.forEach(function (c) { return c.Runs.forEach(function (r) { return summaries.push(new Pokedex.RunSummary(r, PokeList)); }); });
                    _this.Summary = summaries.sort(function (s1, s2) { return s1.Run.StartTime - s2.Run.StartTime; });
                    _this.FilterHoFToUniques();
                    return _this;
                }
                CollectionSummary.prototype.FilterHoFToUniques = function () {
                    var hofData = this.Summary.map(function (s) { return s.HallOfFame; }).reduce(function (a, b) { return a.concat(b); }).sort(function (h1, h2) { return h1.Time - h2.Time; });
                    this.HallOfFame = hofData.filter(function (c) { return hofData.filter(function (i) { return i.HostName == c.HostName && i.Pokemon == c.Pokemon && (i.Nickname == c.Nickname || c.PreviousNick == i.UnmodifiedNick); }).shift() == c; });
                };
                return CollectionSummary;
            }(TPP.Pokedex.CollectionSummaryBase));
            Pokedex.CollectionSummary = CollectionSummary;
        })(Pokedex = Transforms.Pokedex || (Transforms.Pokedex = {}));
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Transforms;
    (function (Transforms) {
        var Pokedex;
        (function (Pokedex) {
            var DexEntry = (function (_super) {
                __extends(DexEntry, _super);
                function DexEntry(pokemon, number, collectionSummary) {
                    var _this = _super.call(this) || this;
                    _this.Number = number;
                    _this.Pokemon = pokemon;
                    if (pokemon) {
                        _this.GatherPokemonFromRuns(collectionSummary);
                        _this.GatherHallOfFameEntries(collectionSummary);
                    }
                    return _this;
                }
                DexEntry.prototype.GatherPokemonFromRuns = function (collectionSummary) {
                    var _this = this;
                    collectionSummary.Summary.forEach(function (s) {
                        return s.OwnedDict[_this.Pokemon] && _this.Owners.push({ Run: s.Run, CaughtOn: s.OwnedDict[_this.Pokemon] });
                    });
                    this.Owners = this.Owners.sort(function (o1, o2) { return o1.CaughtOn - o2.CaughtOn; });
                    this.FilterRevisitsIfPreviouslyOwned();
                };
                DexEntry.prototype.FilterRevisitsIfPreviouslyOwned = function () {
                    var _this = this;
                    this.Owners = this.Owners.filter(function (o) { return !o.Run.Revisit || _this.Owners.filter(function (o2) { return o2.Run.RunName == o.Run.Revisit.Run; }).length == 0; });
                };
                DexEntry.prototype.GatherHallOfFameEntries = function (collectionsummary) {
                    var _this = this;
                    this.HallOfFame = collectionsummary.HallOfFame.filter(function (h) { return h.Pokemon == _this.Pokemon; }).sort(function (h1, h2) { return h1.Time - h2.Time; });
                };
                return DexEntry;
            }(TPP.Pokedex.DexEntryBase));
            Pokedex.DexEntry = DexEntry;
        })(Pokedex = Transforms.Pokedex || (Transforms.Pokedex = {}));
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Transforms;
    (function (Transforms) {
        var Pokedex;
        (function (Pokedex) {
            var natDex = ((window || {}).Pokedex || {}).PokeList || [];
            function DexMerge(Regional, National) {
                if (National === void 0) { National = natDex; }
                return Regional.map(function (i) { return typeof i === "string" ? i : National[i]; });
            }
            Pokedex.DexMerge = DexMerge;
            function ClipDex(highestDexNumber, National) {
                if (National === void 0) { National = natDex; }
                return National.filter(function (p, i) { return i <= highestDexNumber; });
            }
            Pokedex.ClipDex = ClipDex;
        })(Pokedex = Transforms.Pokedex || (Transforms.Pokedex = {}));
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
var TPP;
(function (TPP) {
    var Transforms;
    (function (Transforms) {
        var Pokedex;
        (function (Pokedex) {
            var DexSorting;
            (function (DexSorting) {
                DexSorting[DexSorting["Pok\u00E9dex Number"] = 0] = "Pok\u00E9dex Number";
                DexSorting[DexSorting["Alphabetical"] = 1] = "Alphabetical";
                DexSorting[DexSorting["First Owned"] = 2] = "First Owned";
            })(DexSorting = Pokedex.DexSorting || (Pokedex.DexSorting = {}));
            var GlobalDex = (function (_super) {
                __extends(GlobalDex, _super);
                function GlobalDex(collectionSummary, PokeList) {
                    var _this = _super.call(this) || this;
                    _this.Entries = PokeList.map(function (p, i) { return new Pokedex.DexEntry(p, i, collectionSummary); }).filter(function (e) { return !!e.Pokemon; });
                    return _this;
                }
                return GlobalDex;
            }(TPP.Pokedex.GlobalDexBase));
            Pokedex.GlobalDex = GlobalDex;
        })(Pokedex = Transforms.Pokedex || (Transforms.Pokedex = {}));
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
