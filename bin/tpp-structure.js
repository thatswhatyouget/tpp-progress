var TPP;
(function (TPP) {
    (function (Scale) {
        Scale[Scale["Days"] = 0] = "Days";
        Scale[Scale["Weeks"] = 1] = "Weeks";
        Scale[Scale["Hours"] = 2] = "Hours";
        Scale[Scale["Minutes"] = 3] = "Minutes";
    })(TPP.Scale || (TPP.Scale = {}));
    var Scale = TPP.Scale;
})(TPP || (TPP = {}));
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
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "TotalDays", {
        get: function () {
            return this.TotalHours / 24;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Duration.prototype, "TotalWeeks", {
        get: function () {
            return this.TotalDays / 7;
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
    Duration.parseReg = /^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i;
    return Duration;
})();
