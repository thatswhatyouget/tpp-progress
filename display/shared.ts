/// <reference path="../ref/jquery.d.ts" />
/// <reference path="../ref/react.d.ts" />
/// <reference path="../ref/tpp-transforms.d.ts" />
/// <reference path="../models/run_status.ts" />

module TPP.Display {

    export var cleanString = (str: string) => str.replace(/[^A-Z0-9]/ig, '').toLowerCase();

}