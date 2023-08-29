let htmlCodeElem = document.getElementById("htmlCodeEl");
let cssCodeElem = document.getElementById("cssCodeEl");
let jsCodeElem = document.getElementById("jsCodeEl");

function run() {
    let htmlCode = htmlCodeElem.value;
    let cssCode = cssCodeElem.value;
    let jsCode = jsCodeElem.value;
    let displayOutput = document.getElementById("output");

    displayOutput.contentDocument.body.innerHTML = htmlCode + "<style>" + cssCode + "/style>";
    displayOutput.contentWindow.eval(jsCode);
}


function save() {
    let htmlCode = htmlCodeElem.value;
    localStorage.setItem("htmlCode", htmlCode);

    let cssCode = cssCodeElem.value;
    localStorage.setItem("cssCode", cssCode);

    let jsCode = jsCodeElem.value;
    localStorage.setItem("jsCode", jsCode);
}
let storedHtmlCode = localStorage.getItem("htmlCode");
let storedCssCode = localStorage.getItem("cssCode");
let storedJsCode = localStorage.getItem("jsCode");

htmlCodeElem.value = storedHtmlCode;
cssCodeElem.value = storedCssCode;
jsCodeElem.value = storedJsCode;


function clearHtml() {
    htmlCodeElem.value = "";
    localStorage.removeItem("htmlCode");
}

function clearCss() {
    cssCodeElem.value = "";
    localStorage.removeItem("cssCode");
}

function clearJs() {
    jsCodeElem.value = "";
    localStorage.removeItem("jsCode");
}
