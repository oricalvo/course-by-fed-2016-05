class ClockController {
    time: Date;
    format: string;
    onTick: any;

    constructor($interval) {
        this.time = new Date();

        $interval(() => {
            this.time = new Date();
            
            this.onTick({time: this.time});
        }, 1000);
    }
}

declare var angular;

angular.module("myApp").component("clock", {
    templateUrl: "app/clock.html",
    controller: ClockController,
    bindings: {
        format: "<",
        onTick: "&",
    }
});
