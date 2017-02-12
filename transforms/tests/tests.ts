/// <reference path="../../ref/mocha.d.ts" />
/// <reference path="../../ref/node.d.ts" />

//using import statements apparently still makes Typescript ignore ref links, so we'll fake it
var assert: {
    fail(actual: any, expected: any, message: string, operator: string): void;
    ok(value: any, message?: string): void;
    equal(actual: any, expected: any, message?: string): void;
    notEqual(actual: any, expected: any, message?: string): void;
    deepEqual(actual: any, expected: any, message?: string): void;
    notDeepEqual(acutal: any, expected: any, message?: string): void;
    strictEqual(actual: any, expected: any, message?: string): void;
    notStrictEqual(actual: any, expected: any, message?: string): void;
    deepStrictEqual(actual: any, expected: any, message?: string): void;
    notDeepStrictEqual(actual: any, expected: any, message?: string): void;
} = require("assert");