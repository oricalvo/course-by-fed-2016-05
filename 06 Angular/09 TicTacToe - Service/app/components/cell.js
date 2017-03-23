var CellController = (function () {
    function CellController() {
    }
    CellController.prototype.click = function () {
        if (this.cell.player != Player.None) {
            return;
        }
        this.onClick({ cell: this.cell });
    };
    return CellController;
}());
var Player;
(function (Player) {
    Player[Player["None"] = 0] = "None";
    Player[Player["X"] = 1] = "X";
    Player[Player["O"] = 2] = "O";
})(Player || (Player = {}));
angular.module("myApp").component("cell", {
    templateUrl: "app/components/cell.html",
    controller: CellController,
    bindings: {
        cell: "<",
        onClick: "&",
    }
});
//# sourceMappingURL=cell.js.map