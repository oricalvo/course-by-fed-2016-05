class ContactDetailsController {
    onRemove: any;
    contact: any;

    remove() {
        this.onRemove({contact: this.contact});
    }
}

declare var angular;

angular.module("myApp").component("contactDetails", {
    templateUrl: "contactDetails.html",
    controller: ContactDetailsController,
    bindings: {
        contact: "<",
        onRemove: "&",
    }
});
