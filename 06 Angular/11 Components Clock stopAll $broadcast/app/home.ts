class HomeController {
    format1: string;
    clock1: ClockController;
    clock2: ClockController;

    constructor(private $rootScope) {
        this.format1 = 'ss';
    }

    change() {
        this.format1 = "HH:mm:ss";
    }

    onClock1Tick(time) {
        //console.log("Tick: " + time);
    }

    stopClock() {
        //console.log("clock1: " + !!this.clock1);
        //console.log("clock2: " + !!this.clock2);

        this.clock1.stop();
    }

    stopAll() {
        this.$rootScope.$broadcast("stopAll");
    }
}

declare var angular;

angular.module("myApp").component("home", {
    templateUrl: "app/home.html",
    controller: HomeController,
});
