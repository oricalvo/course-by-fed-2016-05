class CellController {
    cell: BoardCell;
    onClick: any;

    constructor() {
    }

    click() {
        if(this.cell.player != Player.None) {
            return;
        }

        this.onClick({cell: this.cell});
    }
}

interface BoardCell {
    player: Player;
}

enum Player {
    None,
    X,
    O,
}

declare var angular;

angular.module("myApp").component("cell", {
    templateUrl: "app/components/cell.html",
    controller: CellController,
    bindings: {
        cell: "<",
        onClick: "&",
    }
});
