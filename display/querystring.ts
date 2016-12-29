var QueryString = (() => {
    var retobj: { [key: string]: string } = {}
    window.location.search.substring(1).split("&").forEach(vars => {
        if (vars.indexOf("=") > 0) {
            var pair = vars.split("=");
            retobj[pair.shift()] = decodeURI(pair.join('='));
        }
        else
            retobj[vars] = "true";
    });
    return retobj;
})();

function SerializeQueryString() {
    if (Object.keys(QueryString).filter(k => QueryString[k]).length)
        return "?" + Object.keys(QueryString).filter(k => QueryString[k]).map(k => k + (QueryString[k] == "true" ? "" : "=" + encodeURI(QueryString[k]))).join('&');
    return "";
}