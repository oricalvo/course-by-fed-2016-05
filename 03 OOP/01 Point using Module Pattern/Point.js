function Point(x, y) {
    "use strict";

    function dump() {
        console.log(x + ", " + y);
    }

    function move() {
    }
    
    return {
        dump: dump,
        move: move,
    };
};

