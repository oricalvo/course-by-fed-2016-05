class ContactDetailsController {
    remove() {
        alert("ddd");
    }
}

declare var angular;

angular.module("myApp").component("contactDetails", {
    templateUrl: "contactDetails.html",
    controller: ContactDetailsController,
    bindings: {
        contact: "<",
    }
});
