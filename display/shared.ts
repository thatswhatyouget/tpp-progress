/// <reference path="../ref/jquery.d.ts" />

module TPP.Display {

    export var cleanString = (str: string) => str.replace(/[^A-Z0-9]/ig, '').toLowerCase();

}