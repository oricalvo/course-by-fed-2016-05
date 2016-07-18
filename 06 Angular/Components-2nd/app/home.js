var HomeController = (function () {
    function HomeController() {
        this.format1 = 'ss';
    }
    HomeController.prototype.change = function () {
        this.format1 = "HH:mm:ss";
    };
    HomeController.prototype.onClock1Tick = function (time) {
        console.log("Tick: " + time);
    };
    return HomeController;
}());
angular.module("myApp").component("home", {
    templateUrl: "app/home.html",
    controller: HomeController,
});
//# sourceMappingURL=home.js.map