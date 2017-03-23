class GameService {
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

    step(cell: BoardCell) {
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

angular.module("myApp").service("gameService", GameService);
