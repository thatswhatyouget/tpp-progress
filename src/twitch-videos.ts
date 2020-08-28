/// <reference path="../ref/jquery.d.ts" />
/// <reference path="./tpp-structure.ts" />
module Twitch {
    var offsetExp = /offset=(\d*)/i;
    var clientId = 'l6ejgsj101ymei0f6v4a6nkjw9upml9'; //hardcoded 'cause it doesn't matter

    export function GetVideos(channel: string, getAll = true): JQueryPromise<Video[]> {
        var videos: Video[] = [], getAllVideos = (r: TwitchVideoResponse, link: string): (Video[] | JQueryPromise<Video[]>) => {
            if (r.data.length) {
                videos = videos.concat.apply(videos, r.data.map(v => new Video(v.created_at, v.duration, v.url, "Twitch")));
                if (getAll && r.pagination && r.pagination.cursor) {
                    return callApi(link + `&after=${r.pagination.cursor}`).then(data => getAllVideos(data, link));
                }
            }
            return videos;
        };
        return callApi(`https://api.twitch.tv/helix/users?login=${channel}`).then(data => {
            const url = `https://api.twitch.tv/helix/videos?user_id=${data[0].id}&first=100`;
            callApi(url).then(data => getAllVideos(data, url));
        });
    }

    function callApi(url: string) {
        return $.ajax({
            url,
            headers: {
                "Client-ID": clientId
            }
        });
    }
}
