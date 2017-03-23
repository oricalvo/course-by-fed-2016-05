var BoardController = (function () {
    function BoardController() {
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
    BoardController.prototype.onCellClicked = function (cell) {
        cell.player = this.currentPlayer;
        this.switchPlayers();
    };
    BoardController.prototype.switchPlayers = function () {
        if (this.currentPlayer == Player.X) {
            this.currentPlayer = Player.O;
        }
        else {
            this.currentPlayer = Player.X;
        }
    };
    return BoardController;
}());
angular.module("myApp").component("board", {
    templateUrl: "app/components/board.html",
    controller: BoardController,
    bindings: {}
});
//# sourceMappingURL=board.js.map