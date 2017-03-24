namespace TPP.Display {
    export function Discount(text: string, newTab=true) {
        return text
            .replace(/\[([^\]]*)\]\(([^\)]*)\)/g, `<a href="$2"${newTab ? ' target="_blank"' : ''}>$1</a>`) //[text](url)
            .replace(/\n/g, "<br/>"); //linebreaks
    }
}