class HomeController {
    constructor() {
    }

    newGame() {
    }
}

declare var angular;

angular.module("myApp").component("home", {
    templateUrl: "app/components/home.html",
    controller: HomeController,
});
