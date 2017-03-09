namespace TPP {
    export namespace Org {
        export namespace V1 {
            export interface General {
                status: string;
                data: {
                    last_update: string;
                    last_update_unix: number;
                }[];
            }
            export interface Badges {
                status: string;
                data: {
                    name: string;
                    leader: string;
                    attempts: number;
                    time: string;
                    time_unix: number;
                    region: string;
                }[];
            }
            export interface PokemonTimeline {
                status: string;
                data: {
                    pokemon: string;
                    name: string;
                    time: string;
                    time_unix: number;
                    nickname: string[];
                    status: string;
                }[];
            }
            export interface EliteFour {
                status: string;
                data: {
                    name: string;
                    type: string;
                    attempts: number;
                    wins: number;
                    losses: number;
                    time: string;
                    time_unix: number;
                    is_rematch: boolean;
                }[];
            }
        }
    }
}