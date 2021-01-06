namespace TPP {
    export class Duration {
        private static parseReg = /^\s*(?:(\d*)w)?\s*(?:(\d*)d)?\s*(?:(\d*)h)?\s*(?:(\d*)m)?\s*(?:(\d*)s)?\s*$/i;

        get TotalSeconds() {
            return this.seconds + (this.minutes * 60) + (this.hours * 60 * 60) + (this.days * 60 * 60 * 24);
        }
        get TotalHours() {
            return this.TotalSeconds / 60 / 60;
        }
        get TotalDays() {
            return this.TotalHours / 24;
        }
        get TotalWeeks() {
            return this.TotalDays / 7;
        }

        set TotalSeconds(value) {
            this.seconds = Math.floor(value % 60);
            this.minutes = Math.floor(value / 60) % 60;
            this.hours = Math.floor(value / 60 / 60) % 24;
            this.days = Math.floor(value / 60 / 60 / 24);
        }
        set TotalHours(value) {
            this.TotalSeconds = value * 60 * 60;
        }
        set TotalDays(value) {
            this.TotalHours = value * 24;
        }
        set TotalWeeks(value) {
            this.TotalDays = value * 7;
        }

        AddDays(days: number) {
            this.TotalDays += days;
            return this;
        }
        AddHours(hours: number) {
            this.TotalHours += hours;
            return this;
        }
        AddMinutes(minutes: number) {
            this.TotalSeconds += minutes * 60;
            return this;
        }
        AddSeconds(seconds: number) {
            this.TotalSeconds += seconds;
            return this;
        }
        MultiplyBy(factor: number) {
            this.TotalSeconds *= factor;
            return this;
        }

        TotalTime(scale: TPP.Scale) {
            switch (scale) {
                case TPP.Scale.Weeks:
                    return this.TotalWeeks;
                case TPP.Scale.Hours:
                    return this.TotalHours / 4;
                case TPP.Scale.Minutes:
                    return this.TotalHours * 6;
            }
            return this.TotalDays;
        }

        toString(scale = TPP.Scale.Days) {
            return (scale == TPP.Scale.Minutes ? (this.days * 24 + this.hours) * 60 + this.minutes : (scale == TPP.Scale.Hours ? this.days * 24 + this.hours : (scale == TPP.Scale.Weeks ? Math.floor(this.days / 7) + "w " + (this.days % 7) : this.days) + "d " + this.hours) + "h " + this.minutes) + "m" + (this.seconds ? " " + this.seconds + "s" : "");
        }

        static parse(time: string, baseTime?: number) {
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
        }

        static canParse(time: string) {
            return this.parseReg.test(time);
        }

        constructor(weeks: string | number, private days = 0, private hours = 0, private minutes = 0, private seconds = 0) {
            if (typeof (weeks) === "string") {
                var parsed = Duration.parse(<string>weeks);
                this.days = parsed.days;
                this.hours = parsed.hours;
                this.minutes = parsed.minutes;
                this.seconds = parsed.seconds;
            }
            else this.days += <number>weeks * 7;
        }
    }
}