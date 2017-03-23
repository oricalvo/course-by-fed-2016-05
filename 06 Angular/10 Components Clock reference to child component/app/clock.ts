class ClockController extends  ComponentBase{
    time: Date;
    format: string;
    onTick: any;
    intervalId: any;

    constructor(private $interval, $attrs, $scope) {
        super($attrs, $scope);

        this.time = new Date();

        this.start();
    }

    start() {
        if(this.intervalId) {
            return;
        }

        this.intervalId = this.$interval(() => {
            this.time = new Date();

            this.onTick({time: this.time});
        }, 1000);
    }

    stop() {
        console.log("Stop");

        if(this.intervalId) {
            this.$interval.cancel(this.intervalId);
            this.intervalId = null;
        }
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
