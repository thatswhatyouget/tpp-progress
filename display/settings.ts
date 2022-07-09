/// <reference path="fakequery.ts" />
/// <reference path="shared.ts" />

interface Setting {
    displayName: string;
    defaultValue: boolean;
    extraAction?: (value?: boolean) => void;
}

var updatePage = updatePage || function () { };
var reprocessCharts = reprocessCharts || function () { };

var baseSettings: { [key: string]: Setting } = {
    "explode": {
        displayName: "Stagger Clumps",
        defaultValue: true
    },
    "hideUnfinished": {
        displayName: "Hide Runs Left Unfinished",
        defaultValue: true,
        extraAction: reprocessCharts
    }
};

var settings: { [key: string]: boolean } = JSON.parse(localStorage.getItem("settings") || '{}');
Object.keys(baseSettings).forEach(s => settings[s] = typeof (settings[s]) === "boolean" ? settings[s] : baseSettings[s].defaultValue);
var showGroups: { [key: string]: boolean } = JSON.parse(localStorage.getItem("showGroups") || "{}");

function toggleSetting(element: HTMLInputElement) {
    var setting = element.id;
    settings[setting] = element.checked;
    localStorage.setItem("settings", JSON.stringify(settings));
    $.when((baseSettings[setting].extraAction || function () { })()).always(updatePage);
}
function toggleGroup(element: HTMLInputElement) {
    var group = element.id.split('-').pop(), visible = element.checked;
    showGroups[group] = visible;
    localStorage.setItem("showGroups", JSON.stringify(showGroups));
    $('.' + group.replace(/♀/g,'F').replace(/♂/g,'M').replace(/\?/g,'-q').replace(/[^A-Z0-9]/ig, '')).toggleClass("hidden", !visible);
    updatePage();
}