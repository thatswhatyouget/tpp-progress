/// <reference path="../../ref/tpp-transforms.d.ts" />
/// <reference path="../../ref/reactdom.d.ts" />
/// <reference path="../shared.ts" />
/// <reference path="../querystring.ts" />
/// <reference path="../controls.ts" />
/// <reference path="../discount.ts" />

namespace TPP.Controllers {
    export abstract class ControllerBase {
        tppData: Collection[] = [];
        queryString: { [key: string]: string } = {};
        controls: HTMLLIElement[] = [];
        pageTitle: string;
        contentTitle: JSX.Element | JQuery | string;
        seeAlso: JSX.Element | JQuery | string;
        credits: string[] = [];


        constructor(data: Collection[]) {
            this.tppData = Transforms.Data.Clone(data);
            this.queryString = QueryString;
            if (this.queryString["monochrome"])
                $("body").append(`<link rel="stylesheet" href="css/monochrome.css" />`);
            if (this.queryString["kiosk"]) {
                $("html").addClass("kiosk");
                (function animateScroll(duration: number, wait: number) {
                    setTimeout(() => $("body").animate({ scrollTop: document.body.scrollHeight - window.screen.height }, duration, () => $("body").animate({ scrollTop: 0 }, duration, () => animateScroll(duration, wait))), wait);
                })(this.queryString["scrollDuration"] ? parseFloat(this.queryString["scrollDuration"]) * 1000 : 60000, this.queryString["scrollWait"] ? parseFloat(this.queryString["scrollWait"]) * 1000 : 10000);
            }
        }

        cleanString = Display.cleanString;

        abstract render(): JSX.Element | JQuery | string;

        private placeOnPage(content: any, destination: HTMLElement | string) {
            if (!content)
                return;
            if (!(destination instanceof HTMLElement))
                destination = document.getElementById(destination);
            if ((content as JSX.Element).type)
                return ReactDOM.render(content as JSX.Element, destination);
            $(destination).html(content);
        }

        private get wrappedCredits() {
            return this.credits.map(c => $("<div class='credits'>").html(Display.Discount(c)));
        }

        Render() {
            $('head title').text('TPP ' + this.pageTitle);
            this.placeOnPage(this.pageTitle, "page-title");
            this.placeOnPage(this.render(), "contents");
            this.placeOnPage(this.contentTitle || this.pageTitle, "content-title");
            this.placeOnPage(this.seeAlso, "see-also");
            this.placeOnPage(this.wrappedCredits, "credits");
            this.placeOnPage(this.controls, "controls");
        }
    }
}