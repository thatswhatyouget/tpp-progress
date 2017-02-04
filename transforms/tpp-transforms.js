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
    var Transforms;
    (function (Transforms) {
        var PokedexRunSummary = (function () {
            function PokedexRunSummary(Run, PokeList) {
                this.HallOfFame = [];
                this.Run = Run;
                if (Run.Events.filter(function (e) { return e.Group == "Pokemon" && (PokeList.indexOf(e.Name) >= 0 || PokeList.indexOf(e.Class) >= 0); }).length) {
                    this.FillOwnedDict(PokeList);
                    this.FillHallOfFame(PokeList);
                }
            }
            PokedexRunSummary.prototype.FillOwnedDict = function (PokeList) {
                var _this = this;
                this.InitOwnedDict(PokeList);
                this.Run.Events.filter(function (e) { return e.Group == "Pokemon"; }).forEach(function (p) {
                    var timestamp = TPP.Duration.parse(p.Time, _this.Run.StartTime).TotalSeconds + _this.Run.StartTime;
                    if (!_this.AddOwnedPokemonIfRecognized(p.Name, timestamp, PokeList)) {
                        _this.AddOwnedPokemonIfRecognized(p.Class, timestamp, PokeList);
                    }
                });
            };
            PokedexRunSummary.prototype.AddOwnedPokemonIfRecognized = function (mon, timestamp, PokeList) {
                if (PokeList.indexOf(mon) < 0)
                    return false;
                this.OwnedDict[mon] = this.OwnedDict[mon] && this.OwnedDict[mon] < timestamp ? this.OwnedDict[mon] : timestamp;
                return true;
            };
            PokedexRunSummary.prototype.InitOwnedDict = function (PokeList) {
                var _this = this;
                this.OwnedDict = {};
                PokeList.forEach(function (p) { return _this.OwnedDict[p] = false; });
            };
            PokedexRunSummary.prototype.FillHallOfFame = function (PokeList) {
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
            return PokedexRunSummary;
        }());
        Transforms.PokedexRunSummary = PokedexRunSummary;
        function PokedexSummary(tppData, PokeList) {
        }
        Transforms.PokedexSummary = PokedexSummary;
    })(Transforms = TPP.Transforms || (TPP.Transforms = {}));
})(TPP || (TPP = {}));
