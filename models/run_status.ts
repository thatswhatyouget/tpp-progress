module TPP.Tv {
    export interface Item {
        id: number;
        name: string;
        count: number;
    }

    export interface Pokemon {
        experience: number;
        health: number[];
        level: number;
        moves: {
            id: number;
            name: string;
            pp: number;
        }[];
        name: string;
        species: {
            id: number;
            name: string;
        }
        status: number;
    }

    export interface RunStatus {
        badges: number;
        caught: number;
        coins?: number;
        items?: Item[];
        map_id: number;
        money: number;
        party: Pokemon[];
        pc_items: Item[];
        seen: number;
        x: number;
        y: number;
    }
}
