//var num;

function initializeBrowser() {

    // pollyfill

    if (typeof BLABLA == "undefined") {
        window["BLABLA"] = {
            dump: function () {
                console.log("dump");
            }
        };
    }

    return BLABLA;
}

initializeBrowser();

BLABLA.dump();
