class HomeController {
    format1: string;

    constructor() {
        this.format1 = 'ss';
    }

    change() {
        this.format1 = "HH:mm:ss";
    }

    onClock1Tick(time) {
        console.log("Tick: " + time);
    }
}

declare var angular;

angular.module("myApp").component("home", {
    templateUrl: "app/home.html",
    controller: HomeController,
});
