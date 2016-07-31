var ClockController = (function () {
    function ClockController($interval) {
        var _this = this;
        this.time = new Date();
        $interval(function () {
            _this.time = new Date();
            _this.onTick({ time: _this.time });
        }, 1000);
    }
    return ClockController;
}());
angular.module("myApp").component("clock", {
    templateUrl: "app/clock.html",
    controller: ClockController,
    bindings: {
        format: "<",
        onTick: "&",
    }
});
//# sourceMappingURL=clock.js.map