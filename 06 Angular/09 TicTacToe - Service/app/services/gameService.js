var GameService = (function () {
    function GameService() {
        this.currentPlayer = Player.X;
        this.rows = [];
        for (var y = 0; y < 3; y++) {
            var row = { cells: [] };
            this.rows.push(row);
            for (var x = 0; x < 3; x++) {
                row.cells.push({ player: Player.None });
            }
        }
    }
    GameService.prototype.step = function (cell) {
        cell.player = this.currentPlayer;
        this.switchPlayers();
    };
    GameService.prototype.switchPlayers = function () {
        if (this.currentPlayer == Player.X) {
            this.currentPlayer = Player.O;
        }
        else {
            this.currentPlayer = Player.X;
        }
    };
    return GameService;
}());
angular.module("myApp").service("gameService", GameService);
//# sourceMappingURL=gameService.js.map