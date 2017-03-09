/// <reference path="scale.ts" />
/// <reference path="run.ts" />
namespace TPP {
    export interface Collection {
        Name: string;
        SingularName?: string;
        Scale: Scale;
        Runs: Run[];
    }
    export interface DisplayCollection extends Collection {
        Offset?: number;
        Element?: HTMLDivElement;
    }
}