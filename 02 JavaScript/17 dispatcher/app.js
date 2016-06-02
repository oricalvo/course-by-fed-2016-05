(function() {

    var d1 = new Dispatcher();
    var d2 = new Dispatcher();

    d1.subscribe("USER_LOGGED_IN", function() {
        console.log("LOGGED_IN");
    });

    d1.emit("USER_LOGGED_IN");

    console.log(d1.emit == d2.emit);
})();
