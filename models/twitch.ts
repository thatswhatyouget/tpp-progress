/// <reference path="../ref/jquery.d.ts" />
namespace Twitch {
    var offsetExp = /offset=(\d*)/i;
    var clientId = 'l6ejgsj101ymei0f6v4a6nkjw9upml9'; //hardcoded 'cause it doesn't matter

    export interface TwitchCall {
        _total: number;
        _links: { next: string; };
        videos: TwitchVideo[]
    }

    export interface TwitchVideo {
        recorded_at: string;
        length: number;
        url: string;
    }
    
    export class Video implements TwitchVideo {
        public StartTime: number;
        public EndTime: number;
        constructor(public recorded_at:string, public length:number, public url:string, public source:string) {
            this.StartTime = new Date(recorded_at).valueOf() / 1000;
            this.EndTime = this.StartTime + length;
        }
    }
    
    export function GetVideos(channel: string, getAll = true): JQueryPromise<Video[]> {
        var videos:Video[] = [], getAllVideos = (r: TwitchCall):(Video[] | JQueryPromise<Video[]>) => {
            if (r.videos.length) {
                videos = videos.concat.apply(videos, r.videos.map(v=> new Video(v.recorded_at, v.length, v.url, "Twitch")));
                if (getAll && r._total) {
                    return callApi(r._links.next).then(getAllVideos);
                }
            }
            return videos;
        };
        return $.when(
            callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?broadcasts=true&limit=100").then(getAllVideos), //past broadcasts
            callApi("https://api.twitch.tv/kraken/channels/" + channel + "/videos?limit=100").then(getAllVideos)                  //highlights
        );
    }

    function callApi(url: string) {
        return $.get(url + (url.indexOf('?') > 0 ? '&' : '?') + "client_id=" + clientId);
    } 
}
