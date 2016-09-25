var Reddit;
(function (Reddit) {
    var Pasteee;
    (function (Pasteee) {
        var Live;
        (function (Live) {
            var Entry = (function () {
                function Entry(Timestamp, Text) {
                    this.Timestamp = Timestamp;
                    this.Text = Text;
                }
                Object.defineProperty(Entry.prototype, "Duration", {
                    get: function () {
                        return this.NextEntryTimestamp - this.Timestamp;
                    },
                    enumerable: true,
                    configurable: true
                });
                return Entry;
            }());
            Live.Entry = Entry;
            var EntryCollection = (function () {
                function EntryCollection(Entries) {
                    if (Entries === void 0) { Entries = []; }
                    this.Entries = Entries;
                    this.Longest = -1;
                    this.Shortest = -1;
                }
                EntryCollection.prototype.Add = function (entry) {
                    this.Entries.unshift(entry);
                    if (entry.Duration > this.Longest)
                        this.Longest = entry.Duration;
                    if (this.Shortest < 0 || entry.Duration < this.Shortest)
                        this.Shortest = entry.Duration;
                };
                return EntryCollection;
            }());
            Live.EntryCollection = EntryCollection;
            function parseLine(line) {
                if (!line)
                    return null;
                line = line.trim();
                var words = line.split(' ');
                var timestamp = Math.floor(Date.parse(words.shift().replace("+00:00:", "Z")) / 1000);
                return new Entry(timestamp, words.join(' '));
            }
            function parse(html) {
                var $list = $(html).find('ol li');
                var entries = new EntryCollection();
                var lastEntry = null;
                $list.each(function () {
                    var entry = parseLine($(this).text());
                    entry.NextEntryTimestamp = lastEntry ? lastEntry.Timestamp : 0;
                    if (!entry.NextEntryTimestamp || entry.Duration > 10) {
                        lastEntry = entry;
                        entries.Add(entry);
                    }
                    else {
                        lastEntry.Text = entry.Text + "\n" + lastEntry.Text;
                    }
                });
                return entries;
            }
            var waitingPromises = {};
            function capture(html) {
                var url;
                Object.keys(waitingPromises).forEach(function (k) {
                    if (html.indexOf(k) > 0)
                        url = k;
                });
                waitingPromises[url].resolve(parse(html));
            }
            function Fetch(url) {
                var deferred = $.Deferred();
                waitingPromises[url] = deferred;
                document.write = capture;
                $("<script>").attr('src', url.replace('.ee/p/', '.ee/e/')).appendTo($(document.head));
                return deferred.promise();
            }
            Live.Fetch = Fetch;
            function Test() {
                Fetch("https://paste.ee/p/9zU5C").then(function (data) { return console.log("Colosseum") || console.log(data); });
                Fetch("https://paste.ee/p/DcMdp").then(function (data) { return console.log("X") || console.log(data); });
                return "Started test";
            }
            Live.Test = Test;
        })(Live = Pasteee.Live || (Pasteee.Live = {}));
    })(Pasteee = Reddit.Pasteee || (Reddit.Pasteee = {}));
})(Reddit || (Reddit = {}));
