(function() {
    "use strict";

    $("button").click(function() {
        console.log("Click");
    });

    setTimeout(function() {
        console.log("XXX");
    }, 1000);
    
    execute(2500);
    console.log("after execute");
    
    function execute(timeout) {
        var begin = new Date();
        while (true) {
            var now = new Date();
            if (now - begin >= timeout) {
                break;
            }
        }
    }

})();
