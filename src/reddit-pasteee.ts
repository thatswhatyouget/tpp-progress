/// <reference path="../ref/jquery.d.ts" />
module Reddit.Pasteee.Live {

    export class Entry {
        NextEntryTimestamp: number;

        get Duration() {
            return this.NextEntryTimestamp - this.Timestamp;
        }

        constructor(public Timestamp: number, public Text: string) {

        }
    }

    export class EntryCollection {

        Longest: number = -1;
        Shortest: number = -1;

        Add(entry: Entry) {
            this.Entries.unshift(entry);
            if (entry.Duration > this.Longest)
                this.Longest = entry.Duration;
            if (this.Shortest < 0 || entry.Duration < this.Shortest)
                this.Shortest = entry.Duration;
        }

        constructor(public Entries: Entry[] = []) {

        }
    }

    function parseLine(line: string): Entry {
        if (!line) return null;
        line = line.trim();
        var words = line.split(' ');
        var timestamp = Math.floor(Date.parse(words.shift().replace("+00:00:", "Z")) / 1000);
        return new Entry(timestamp, words.join(' '));
    }

    function parse(html: string) {
        var $list = $(html).find('ol li');
        var entries = new EntryCollection();
        var lastEntry:Entry = null;
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

    var waitingPromises: { [key: string]: JQueryDeferred<EntryCollection> } = {};

    function capture(html: string) {
        var url: string
        Object.keys(waitingPromises).forEach(k => {
            if (html.indexOf(k) > 0)
                url = k;
        });
        waitingPromises[url].resolve(parse(html));
    }

    export function Fetch(url: string): JQueryPromise<EntryCollection> {
        var deferred = $.Deferred<EntryCollection>();
        waitingPromises[url] = deferred;
        document.write = capture;
        $("<script>").attr('src', url.replace('.ee/p/', '.ee/e/')).appendTo($(document.head));
        return deferred.promise();
    }

    export function Test() {
        Fetch("https://paste.ee/p/9zU5C").then(data => { console.log("Colosseum"); console.log(data); });
        Fetch("https://paste.ee/p/DcMdp").then(data => { console.log("X"); console.log(data);});
        return "Started test";
    }

}