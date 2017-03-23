class BoardController {
    rows: BoardRow[];

    constructor(private gameService: GameService) {
        this.rows = gameService.rows;
    }

    onCellClicked(cell: BoardCell) {
        this.gameService.step(cell);
    }
}

declare var angular;

angular.module("myApp").component("board", {
    templateUrl: "app/components/board.html",
    controller: BoardController,
    bindings: {
    }
});
