(function() {
    appDispatcher.subscribe("USER_LOGGED_IN", function() {
        console.log("LOGGED_IN");
    });

    appDispatcher.subscribe("USER_LOGGED_OUT", function() {
        console.log("USER_LOGGED_OUT");
    });

    appDispatcher.emit("USER_LOGGED_IN");

    appDispatcher.emit("USER_LOGGED_OUT");
})();
