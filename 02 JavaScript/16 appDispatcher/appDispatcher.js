var appDispatcher = (function () {
    "use strict";

    var events = {};
    
    function emit(name, args) {
        var callbacks = events[name];
        if(!callbacks) {
            return;
        }
        
        callbacks.forEach(function(callback) {
            callback(args);
        });
    }
    
    function subscribe(name, callback) {
        if(!events[name]) {
            events[name] = [];
        }
        
        events[name].push(callback);
    }
    
    return {
        emit: emit,
        subscribe: subscribe,
    };
})();
