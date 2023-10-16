/// <reference path="../ref/jquery.d.ts" />
/// <reference path="../ref/react.d.ts" />
/// <reference path="../ref/tpp-transforms.d.ts" />
/// <reference path="../ref/pokedex-data.d.ts" />
/// <reference path="../ref/reactdom.d.ts" />
declare var fakeQuery: (selector: string) => Array<HTMLElement>;
declare var $find: (elements: Array<HTMLElement>, selector: string) => Array<Array<HTMLElement>>;
declare namespace TPP.Tv {
    interface RunStatus extends TrainerData {
        party: PartyData;
        pc: CombinedPCData;
        events: Event[];
    }
    interface Event {
        group: string;
        name: string;
        timestamp: string;
        attempts?: number;
    }
    interface TrainerData {
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
        game_stats?: {
            [key: string]: number;
        };
    }
    interface PartyData extends Array<PartyPokemon> {
    }
    interface PCData {
        current_box_number: number;
    }
    interface BoxData {
        box_number: number;
        box_name: string;
        box_contents: BoxedPokemon[];
    }
    interface CombinedPCData extends PCData {
        boxes: BoxData[];
    }
    interface Pokemon {
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
        };
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
        };
        met: {
            area_id: number;
            area_name: string;
            level: number;
            game: string;
            caught_in: string;
            caught?: string;
            date?: string;
        };
        ribbons: string[];
        is_egg: boolean;
        is_shadow?: boolean;
        purification?: {
            current: number;
            initial?: number;
        };
    }
    interface Evolution {
        level?: number;
        required_item?: Item;
        is_trade?: boolean;
        required_happiness?: number;
        required_map_id?: number;
        required_map_name?: string;
        required_time_of_day?: "Morn" | "Day" | "Night" | "MornDay";
        special_condition?: string;
    }
    interface BoxedPokemon extends Pokemon {
        box_slot: number;
    }
    interface PartyPokemon extends Pokemon {
        health: number[];
        status: string;
        stats: Stats;
        pokerus_remaining?: number;
    }
    interface Item {
        id: number;
        name: string;
        count?: number;
        key_item?: boolean;
    }
    interface Trainer {
        id: number;
        name: string;
        gender?: string;
        secret?: number;
    }
    interface Move {
        id: number;
        name: string;
        pp: number;
        pp_up?: number;
        max_pp?: number;
        type?: string;
        accuracy?: number;
        base_power?: number;
    }
    interface Stats {
        hp: number;
        attack: number;
        defense: number;
        speed: number;
        special_attack: number;
        special_defense: number;
    }
    interface ContestStats {
        coolness: number;
        beauty: number;
        cuteness: number;
        smartness: number;
        toughness: number;
        feel: number;
    }
    interface Options {
        button_mode: string;
        frame: string;
        text_speed: string;
        sound: string;
        battle_style: string;
        battle_scene: string;
    }
    interface SidegameInput {
        id: {
            game: string;
            position: number;
        };
        imgur_screenshot_id: string;
        timestamp: string;
        winning_input: string;
    }
}
declare var dexData: (typeof Pokedex);
declare module TPP.Display {
    var cleanString: (str: string) => string;
    function pokeRedCondenseText(text: string): string;
}
interface Setting {
    displayName: string;
    defaultValue: boolean;
    extraAction?: (value?: boolean) => void;
}
declare var updatePage: any;
declare var reprocessCharts: any;
declare var baseSettings: {
    [key: string]: Setting;
};
declare var settings: {
    [key: string]: boolean;
};
declare var showGroups: {
    [key: string]: boolean;
};
declare function toggleSetting(element: HTMLInputElement): void;
declare function toggleGroup(element: HTMLInputElement): void;
declare var QueryString: {
    [key: string]: string;
};
declare function SerializeQueryString(): string;
declare var groupList: HTMLUListElement;
declare var groups: {
    [key: string]: string;
};
declare function updateGroups(): void;
declare function icon(ico: string, title: string, action?: () => void): HTMLAnchorElement;
declare function listControl(ico: string, name: string): {
    controlElement: HTMLLIElement;
    listElement: HTMLUListElement;
};
declare function qsListMenu(icon: string, name: string, qsParam: string, options: string[], defaultOption?: string, prefix?: string): HTMLLIElement;
declare function qsOptionsMenu(icon: string, name: string, options: {
    [key: string]: string;
}): HTMLLIElement;
declare var zoomIn: any, zoomOut: any;
declare function zoomButtons(): HTMLLIElement[];
declare function settingsMenu(): HTMLLIElement;
declare function groupsMenu(): HTMLLIElement;
declare function dayMenu(maxDaysParam?: number | TPP.DisplayCollection[]): HTMLLIElement;
declare function regionMenu(regionsParam: string[] | TPP.Collection[]): HTMLLIElement;
declare var pokedexGenerationsMenu: () => HTMLLIElement;
declare var pokedexRegionsMenu: () => HTMLLIElement;
declare var pokedexSortMenu: () => HTMLLIElement;
declare var getTwitchVideos: any;
declare function twitchButton(): HTMLLIElement;
declare function defaultControls(...extraControls: HTMLLIElement[]): HTMLLIElement[];
declare function drawControls(controls: HTMLLIElement[], container?: HTMLElement): void;
declare namespace TPP.Display {
    function Discount(text: string, newTab?: boolean): string;
}
declare module TPP.Display.RunStatus {
    function GetCurrentRun(tppData: Collection[]): Run;
    function GetSpecifiedRun(tppData: Collection[], runName: string): Run;
    function RenderRunStatus(run: TPP.Run, dex?: TPP.Pokedex.GlobalDexBase): JQuery;
    function UpdateRunStatus(run: TPP.Run, $container: JQuery, tppData: Collection[], dexFunction?: (tppData: Collection[]) => TPP.Pokedex.GlobalDexBase): JQueryPromise<void>;
}
declare namespace TPP.Controllers {
    abstract class ControllerBase {
        tppData: Collection[];
        queryString: {
            [key: string]: string;
        };
        controls: HTMLLIElement[];
        pageTitle: string;
        contentTitle: JSX.Element | JQuery | string;
        seeAlso: JSX.Element | JQuery | string;
        credits: string[];
        constructor(data: Collection[]);
        cleanString: (str: string) => string;
        abstract render(): JSX.Element | JQuery | string;
        private placeOnPage;
        private get wrappedCredits();
        Render(): void;
    }
}
declare namespace TPP.Display.ViewModels {
    interface Dict {
        [key: string]: string | number;
    }
    export class PartyDisplay {
        Host: {
            Name: string;
            Image: string;
            ImageSource: string;
            Info: Dict;
        };
        Party: {
            Name: string;
            Pokemon: string;
            Level: number;
            Gender: string;
            Shiny: boolean;
            Form: string;
            Class: string;
            Info: Dict;
        }[];
        Colors: {
            ColorPrimary: string;
            ColorSecondary: string;
        };
        Run: Run;
        Time: number;
        RunTime: string;
        Attempts: string;
        Ribbon: string;
        Title: string;
        Class: string;
        private cleanInfo;
        private infoAddSpeciesAndMoves;
        private dexNumStr;
        constructor(data: Tv.RunStatus, run: Run, scale: Scale);
        constructor(data: HallOfFame, run: Run, scale: Scale);
    }
    export {};
}
declare namespace TPP.Display.ViewModels {
    interface RunEvent extends Event {
        RunTime: string;
        Scale?: Scale;
    }
}
declare namespace TPP.Display.Elements {
    class PokeSprite extends React.PureComponent<{
        pokemon: string;
        gender?: string;
        shiny?: boolean;
        form?: string;
        className?: string;
        baseUrl?: string;
    }, {}> {
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements {
    interface PartyDisplayProps {
        partyInfo: ViewModels.PartyDisplay;
    }
    interface PartyDisplayState {
    }
    export class PartyDisplay extends React.Component<PartyDisplayProps, PartyDisplayState> {
        private get style();
        private get party();
        private preserveSpacing;
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Controllers {
    class HallOfFameController extends ControllerBase {
        constructor(data: Collection[]);
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements.Pokedex {
    interface DexEntryProps {
        entry: TPP.Pokedex.DexEntryBase;
        showOwnership?: boolean;
        spriteClass?: string;
    }
    interface DexEntryState {
    }
    export class DexEntry extends React.Component<DexEntryProps, DexEntryState> {
        Number: string;
        private entry;
        private showOwnership;
        constructor(props: any);
        private get className();
        private get pokeName();
        private get owners();
        private get style();
        private get hallOfFame();
        shouldComponentUpdate(nextProps: any, nextState: any): boolean;
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.Pokedex {
    interface DexProps {
        dex: TPP.Pokedex.GlobalDexBase;
        caughtList?: number[];
        run?: TPP.Run;
        showOwnership?: boolean;
        ownedOnly?: boolean;
        className?: string;
        spriteClass?: string;
        label?: string;
        onClickTotal?: () => void;
    }
    interface DexState {
        filteredDex: TPP.Pokedex.GlobalDexBase;
    }
    export class Dex extends React.Component<DexProps, DexState> {
        constructor(props: DexProps);
        private get className();
        private FilterDex;
        private get entries();
        private get ownedDisplay();
        componentWillReceiveProps(nextProps: any): void;
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Controllers {
    class PokedexController extends ControllerBase {
        dexData: typeof globalThis.Pokedex;
        constructor(data: Collection[]);
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements {
    interface PokeBoxProps {
        className?: string;
        title?: string;
    }
    interface PokeBoxState {
    }
    export class PokeBox extends React.Component<PokeBoxProps, PokeBoxState> {
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.RunStatus {
    interface EventDisplayProps {
        events: ViewModels.RunEvent[];
        liveEvents?: TPP.Tv.Event[];
        title?: string;
    }
    interface EventDisplayState {
    }
    export class EventDisplay extends React.Component<EventDisplayProps, EventDisplayState> {
        private get title();
        private get events();
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.RunStatus {
    interface ItemDisplayProps {
        items: TPP.Tv.Item[];
        title: string;
    }
    export class ItemDisplay extends React.Component<ItemDisplayProps, {}> {
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.RunStatus {
    class CurrentParty extends React.Component<{
        party: TPP.Tv.PartyData;
        trainer?: TPP.Tv.TrainerData;
        run: TPP.Run;
    }, {}> {
        render(): JSX.Element;
    }
    class Pokemon extends React.Component<{
        pokemon: TPP.Tv.PartyPokemon | TPP.Tv.BoxedPokemon;
        className?: string;
        baseUrl?: string;
        ignoreHealth?: boolean;
        trainer: TPP.Tv.Trainer;
    }, {
        infoMode: number;
        showTabs?: boolean;
    }> {
        state: {
            infoMode: number;
            showTabs: boolean;
        };
        private renderInfo;
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements.RunStatus {
    class PC extends React.Component<{
        pc: TPP.Tv.CombinedPCData;
        trainer: TPP.Tv.Trainer;
    }, {}> {
        render(): JSX.Element;
    }
    class PCBox extends React.Component<{
        boxName: string;
        boxNumber?: number;
        boxContents: Tv.BoxedPokemon[];
        trainer: TPP.Tv.Trainer;
    }, {}> {
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements.RunStatus {
    class CurrentLocation extends React.PureComponent<{
        mapName: string;
        areaName: string;
    }, {}> {
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements.RunStatus {
    interface GameStatsDisplayProps {
        gameStats: {
            [key: string]: number;
        };
        title: string;
    }
    export class GameStats extends React.Component<GameStatsDisplayProps, {}> {
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.RunStatus {
    interface RunStatusProps {
        run: Run;
        autoUpdate?: number;
        buildDex?: (run: Run) => TPP.Pokedex.GlobalDexBase;
    }
    interface RunStatusState {
        run?: Run;
        status?: Tv.RunStatus;
        updatingRunData?: boolean;
        updatingStatus?: boolean;
        updatingScreenshot?: boolean;
        error?: string;
        lastScreen?: string;
        lastScreenTime?: string;
        dexSeen?: boolean;
    }
    export class App extends React.Component<RunStatusProps, RunStatusState> {
        private UpdateRunData;
        private UpdateRunStatus;
        private UpdateScreenshot;
        constructor(props: RunStatusProps);
        private updateLoop;
        componentDidMount(): any;
        componentWillUnmount(): void;
        shouldComponentUpdate(nextProps: any, nextState: any): boolean;
        private get wouldHaveRunStatus();
        private get inTestMode();
        private get inLocalTestMode();
        private get loading();
        private get updating();
        private get Pokedex();
        private PokedexOutOfDate;
        private bakeEvents;
        private get numBadges();
        private get badgesOutOfDate();
        private get badges();
        private get eliteFour();
        private get eliteFourRematch();
        private get pastHosts();
        private get rematchBadges();
        private get noblePokemon();
        private get partyDisplay();
        private get isFutureRun();
        private get timeUntilRun();
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Controllers {
    class RunStatusController extends ControllerBase {
        constructor(data: Collection[]);
        render(): JSX.Element;
    }
}
declare namespace TPP.Display.Elements.ProgressBars {
    interface EventProps {
        events: ViewModels.RunEvent[];
        pixelsPerDay: number;
    }
    interface EventState {
    }
    export class Event extends React.Component<EventProps, EventState> {
    }
    export {};
}
declare namespace TPP.Display.Elements.ProgressBars {
    interface RunProps {
        run: TPP.Run;
        scale: Scale;
        offset?: number;
        twitchVideos?: JQueryPromise<Twitch.Video[]>;
        pixelsPerDay: number;
    }
    interface RunState {
    }
    export class Run extends React.Component<RunProps, RunState> {
        private get data();
        private get style();
        private get duration();
        private get label();
        private get className();
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.ProgressBars {
    interface CollectionProps {
        collection: TPP.Collection;
        offset?: number;
        pixelsPerDay: number;
    }
    interface CollectionState {
    }
    export class Collection extends React.Component<CollectionProps, CollectionState> {
        private get data();
        private get offset();
        private get style();
        private get scale();
        private get longestRunDuration();
        private get ruler();
        private get runs();
        render(): JSX.Element;
    }
    export {};
}
declare namespace TPP.Display.Elements.ProgressBars {
    interface Props {
        data: TPP.Collection[];
        offset?: number;
        pixelsPerDay: number;
    }
    interface State {
    }
    export class App extends React.Component<Props, State> {
    }
    export {};
}
