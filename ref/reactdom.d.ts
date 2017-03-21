//Very barebones, just tell TypeScript how to use ReactDOM

/// <reference path="react.d.ts" />

declare namespace ReactDOM {
    function render(item: JSX.Element, container: HTMLElement);
}