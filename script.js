document.body.addEventListener("yt-navigate-finish", function (event) {
    try {
        document.getElementsByTagName("box")[0].remove();
    } catch (error) {
        console.info(error);
    }
    console.log("RELOADED");
    doSomething();
});

function doSomething() {
    console.info("DOM loaded");
    setTimeout(() => {
        afterwait();
    }, 3000);
}

function afterwait() {
    const currentUrl = window.location.href;
    console.log(currentUrl);
    if (currentUrl.includes("watch")) {
        console.log("I have waited 3 seconds after DOM");
        
        var elements = document.getElementById("above-the-fold");
        const ChannelName = elements.getElementsByClassName("style-scope ytd-channel-name complex-string").item(0).children[0].innerText;

        switch (ChannelName) {
            case 'PragerU':
                console.log(`${ChannelName} is probably propaganda.`)
                MakeBar(ChannelName, "the Wilks brothers and the Lynde and Harry Bradley Foundation.", `<a href="https://en.wikipedia.org/wiki/PragerU#Finances">Source</a>`);
                break;
            default:
                console.log(`${ChannelName} is probably not propaganda.`);
        }
    }
    else {
        console.log("not a watch page");
    }
}

function MakeBar(name, proptype, link) {
    const bar = document.getElementById("clarify-box");

    let html = `
    <box><span>${name} is in whole or in part funded by ${proptype} ${link}</span></box>
    `;

    bar.insertAdjacentHTML("afterend", html);
}