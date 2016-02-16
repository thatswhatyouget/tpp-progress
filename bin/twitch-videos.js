var Twitch;
(function (Twitch) {
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
    })();
    Twitch.Video = Video;
    function GetVideos(channel) {
        var videos = [], getAllVideos = function (r) {
            if (r.videos.length) {
                videos = videos.concat.apply(videos, r.videos.map(function (v) { return new Video(v.recorded_at, v.length, v.url, "Twitch"); }));
                return $.get(r._links.next).then(getAllVideos);
            }
            return videos;
        };
        return $.get("https://api.twitch.tv/kraken/channels/" + channel + "/videos?broadcasts=true&limit=100").then(getAllVideos);
    }
    Twitch.GetVideos = GetVideos;
})(Twitch || (Twitch = {}));
