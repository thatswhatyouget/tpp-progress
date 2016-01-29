module TPP {
	export interface Run {
		HostImage?: string;
		HostImageSource?: string;
		HostName?: string;
        RunName: string;
        StartDate?: string;
        StartTime?: number;
        Duration: string;
        Ongoing?: boolean;
        EndDate?: string;
		ColorPrimary: string;
		ColorSecondary: string;
		Scraper?: {
			url: string;
            parts?: string[];
            runtime?: boolean;
            hostname?: boolean;
			pokemon?: boolean;
        };
        ContainsOtherRuns?: boolean;
		Events: Event[];
	}

	export interface Event {
		Group: string;
		Image: string;
		ImageSource?: string;
		Name: string;
		Estimate?: boolean;
		Time: string;
		Attempts?: number;
	}
    
    export interface Collection {
        Name: string;
        Scale: Scale;
        Runs: Run[];
    }
    
    export enum Scale {
        Days,
        Weeks,
        Hours,
        Minutes
    }
}