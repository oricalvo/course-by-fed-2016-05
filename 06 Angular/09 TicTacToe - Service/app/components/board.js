var BoardController = (function () {
    function BoardController(gameService) {
        this.gameService = gameService;
        this.rows = gameService.rows;
    }
    BoardController.prototype.onCellClicked = function (cell) {
        this.gameService.step(cell);
    };
    return BoardController;
}());
angular.module("myApp").component("board", {
    templateUrl: "app/components/board.html",
    controller: BoardController,
    bindings: {}
});
//# sourceMappingURL=board.js.map