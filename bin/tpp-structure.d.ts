declare module TPP {
    interface Run {
        HostImage: string;
        HostImageSource?: string;
        HostName: string;
        RunName: string;
        Duration: string;
        ColorPrimary: string;
        ColorSecondary: string;
        ScrapeUrl?: string;
        Events: TPP.Event[];
    }
    interface Event {
        Group: string;
        Image: string;
        ImageSource?: string;
        Name: string;
        Verb?: string;
        Time: string;
        Attempts?: number;
    }
}
