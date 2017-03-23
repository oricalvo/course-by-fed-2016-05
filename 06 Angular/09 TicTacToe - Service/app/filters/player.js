angular.module("myApp").filter("player", function () {
    return function (player) {
        if (player == Player.None) {
            return "";
        }
        else if (player == Player.X) {
            return "X";
        }
        else {
            return "O";
        }
    };
});
//# sourceMappingURL=player.js.map