import webViewJavaScriptBridge from "webview-javascript-bridge";

async function sendingMessage() {
    let response = await webViewJavaScriptBridge
      .sendMessage({
        action: "tester",
        params: 123456,
      })
    console.log("tester's response", response)
}

sendingMessage()