const { default: webViewJavaScriptBridge } = require("webview-javascript-bridge");

// http://stackoverflow.com/questions/24571548/javascript-how-to-detect-if-the-custom-url-scheme-is-available-or-not-availabl
function goto(url, fallback) {
    var script = document.createElement('script'); 

    script.onload = function() { 
        document.location = url;
    } 
    script.onerror = function() { 
        document.location = fallback;
    } 
    script.setAttribute('src', url); 

    document.getElementsByTagName('head')[0].appendChild(script);
}

self.close();