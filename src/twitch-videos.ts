/// <reference path="../ref/jquery" />
module Twitch {
    export interface TwitchCall {
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
                if (getAll) return $.get(r._links.next).then(getAllVideos);
            }
            return videos;
        };
        return $.get("https://api.twitch.tv/kraken/channels/" + channel + "/videos?broadcasts=true&limit=100").then(getAllVideos);
    }
}