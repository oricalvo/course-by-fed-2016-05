class HomeController {
    contacts1: any[];
    contacts2: any[];

    constructor() {
        this.contacts1 = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
        
        this.contacts2 = [
            {id: 1, name: "Udi"},
            {id: 2, name: "Beni"},
        ];
    }
}

angular.module("myApp").component("home", {
    templateUrl: "home.html",
    controller: HomeController
});
