declare class Duration {
    hours: number;
    minutes: number;
    seconds: number;
    days: number;
    TotalSeconds: number;
    TotalDays: number;
    static parse(time: string): Duration;
    constructor(days: string | number, hours?: number, minutes?: number, seconds?: number);
}
declare function makeGrid(ppd: number): string;
declare var globalPpd: number;
declare function createChart(data: TPP.Run[], label: string, ppd?: number): void;
declare function queueRun(runInfo: TPP.Run): HTMLDivElement;
declare function drawRun(runInfo: TPP.Run, run?: HTMLDivElement): void;
declare function drawHost(runInfo: TPP.Run): HTMLDivElement;
declare function drawEvent(eventInfo: TPP.Event): HTMLDivElement;
declare function applyScale(ppd: number): void;
