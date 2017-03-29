/// <reference path="../shared.ts" />
namespace TPP.Display.ViewModels {
    export interface RunEvent extends Event {
        RunTime: string;
        Scale?: Scale;
    }
}