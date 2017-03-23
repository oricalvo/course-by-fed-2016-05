var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var ClockController = (function (_super) {
    __extends(ClockController, _super);
    function ClockController($interval, $attrs, $scope) {
        _super.call(this, $attrs, $scope);
        this.$interval = $interval;
        this.time = new Date();
        this.start();
    }
    ClockController.prototype.start = function () {
        var _this = this;
        if (this.intervalId) {
            return;
        }
        this.intervalId = this.$interval(function () {
            _this.time = new Date();
            _this.onTick({ time: _this.time });
        }, 1000);
    };
    ClockController.prototype.stop = function () {
        console.log("Stop");
        if (this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
    };
    return ClockController;
}(ComponentBase));
angular.module("myApp").component("clock", {
    templateUrl: "app/clock.html",
    controller: ClockController,
    bindings: {
        format: "<",
        onTick: "&",
    }
});
//# sourceMappingURL=clock.js.map