namespace TPP.Tv {
    
    export interface RunStatus extends TrainerData {
        party: PartyData;
        pc: CombinedPCData;
        events: Event[];
    }

    export interface Event {
        group: string;
        name: string;
        timestamp: string;
        attempts?: number;
    }

    export interface TrainerData {
        badges: number;
        ball_count: number;
        caught: number;
        caught_list: number[];
        coins?: number;
        daycare?: BoxedPokemon[];
        id: number;
        items: {
            [key: string]: Item[];
            items?: Item[];
            free_space?: Item[];
            key?: Item[];
            balls?: Item[];
            mail?: Item[];
            battle?: Item[];
            medicine?: Item[];
            berries?: Item[];
            berry?: Item[];
            z_crystals?: Item[];
            rotom_powers?: Item[];
            tms?: Item[];
            tm?: Item[];
            pc?: Item[];
        };
        level_cap?: number;
        map_bank: number;
        map_id: number;
        map_name?: string;
        area_id: number;
        area_name: string;
        money: number;
        name: string;
        options: Options;
        phone_book?: string[];
        seen: number;
        seen_list: number[];
        secret: number;
        x: number;
        y: number;
        game_stats?: { [key: string]: number };
    }

    export interface PartyData extends Array<PartyPokemon> { }

    export interface PCData {
        current_box_number: number;
    }

    export interface BoxData {
        box_number: number;
        box_name: string;
        box_contents: BoxedPokemon[];
    }


    //subtypes
    export interface CombinedPCData extends PCData {
        boxes: BoxData[];
    }

    export interface Pokemon {
        personality_value: number;
        original_trainer: Trainer;
        name: string;
        held_item: Item;
        gender: string;
        shiny: boolean;
        species: {
            id: number;
            name: string;
            type1?: string;
            type2?: string;
            egg_cycles: number;
            egg_type1?: string;
            egg_type2?: string;
            growth_rate?: string;
            national_dex?: number;
            evolutions?: Evolution[];
        }
        experience: {
            current: number;
            next_level?: number;
            this_level?: number;
            remaining?: number;
        };
        moves: Move[];
        language?: number;
        level: number;
        ability?: string;
        nature?: string;
        marking?: string;
        characteristic?: string;
        ivs?: Stats;
        evs?: Stats;
        condition?: ContestStats;
        friendship?: number;
        affection?: number;
        pokerus?: {
            infected: boolean;
            days_left: number;
            strain: number;
            cured: boolean;
        }
        met: {
            area_id: number;
            area_name: string;
            level: number;
            game: string;
            caught_in: string;
            caught?: string;
            date?: string;
        }
        ribbons: string[]
        is_egg: boolean;
        is_shadow?:boolean;
        purification?: {
            current: number;
            initial?: number;
        };
    }

    export interface Evolution {
        level?: number;
        required_item?: Item;
        is_trade?: boolean;
        required_happiness?: number;
        required_map_id?: number;
        required_map_name?: string;
        required_time_of_day?: "Morn" | "Day" | "Night" | "MornDay";
        special_condition?: string;
    }

    export interface BoxedPokemon extends Pokemon {
        box_slot: number;
    }

    export interface PartyPokemon extends Pokemon {
        health: number[];
        status: string;
        stats: Stats;
        pokerus_remaining?: number;
    }

    export interface Item {
        id: number;
        name: string;
        count?: number;
        key_item?: boolean;
    }

    export interface Trainer {
        id: number;
        name: string;
        gender?: string;
        secret?: number;
    }

    export interface Move {
        id: number;
        name: string;
        pp: number;
        pp_up ?: number;
        max_pp ?: number;
        type ?: string;
        accuracy ?: number;
        base_power ?: number;
    }

    export interface Stats {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special_attack: number;
        special_defense: number;
    }

    export interface ContestStats {
        coolness: number;
        beauty: number;
        cuteness: number;
        smartness: number;
        toughness: number;
        feel: number;
    }

    export interface Options {
        button_mode:string;
        frame:string;
        text_speed:string;
        sound:string;
        battle_style:string;
        battle_scene:string;
    }

    export interface SidegameInput {
        id: {
            game: string;
            position: number;
        },
        imgur_screenshot_id: string;
        timestamp: string;
        winning_input: string;
    }
}
