class BoardController {
    rows: BoardRow[];
    currentPlayer: Player;

    constructor() {
        this.currentPlayer = Player.X;

        this.rows = [];

        for(var y=0; y<3; y++) {
            var row = {cells: []};
            this.rows.push(row);

            for(var x=0; x<3; x++) {
                row.cells.push({player: Player.None});
            }
        }
    }

    onCellClicked(cell: BoardCell) {
        cell.player = this.currentPlayer;

        this.switchPlayers();
    }

    switchPlayers() {
        if(this.currentPlayer == Player.X) {
            this.currentPlayer = Player.O;
        }
        else {
            this.currentPlayer = Player.X;
        }
    }
}

interface BoardRow {
    cells: BoardCell[];
}

declare var angular;

angular.module("myApp").component("board", {
    templateUrl: "app/components/board.html",
    controller: BoardController,
    bindings: {
    }
});
