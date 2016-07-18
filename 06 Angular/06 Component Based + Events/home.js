var HomeController = (function () {
    function HomeController() {
        this.contacts1 = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
        this.contacts2 = [
            { id: 1, name: "Udi" },
            { id: 2, name: "Beni" },
        ];
    }
    return HomeController;
}());
angular.module("myApp").component("home", {
    templateUrl: "home.html",
    controller: HomeController
});
//# sourceMappingURL=home.js.map