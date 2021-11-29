namespace TPP {
    export interface Event {
        Group: string;
        Image?: string;
        ImageSource?: string;
        Class?: string;
        Name: string;
        OT?: string;
        Estimate?: boolean;
        Time: string;
        UnixTime?: number;
        Attempts?: number;
    }

    export type PokemonGender = "Male" | "Female";

    export interface HallOfFame extends Event {
        Party: {
            Nickname?: string;
            PreviousNick?: string;
            Pokemon: string;
            Level: number;
            ShowSpecies?: boolean;
            Gender?: PokemonGender;
            Number?: number | string;
            Type1?: string;
            Type2?: string;
            OT?: string;
            Met?: string;
            IDNo?: string;
            Shiny?: boolean;
            Form?: string;
            Class?: string;
        }[];
        IDNo?: string;
        FirstAttemptDate?: string;
        FirstAttemptUnixTime?: number;
    }
    export interface DisplayEvent extends Event {
        New?: boolean;
        Element?: HTMLDivElement;
    }
    export interface DisplayHallOfFame extends HallOfFame, DisplayEvent {

    }
}