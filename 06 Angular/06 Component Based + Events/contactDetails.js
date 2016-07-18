var ContactDetailsController = (function () {
    function ContactDetailsController() {
    }
    ContactDetailsController.prototype.remove = function () {
        this.onRemove({ contact: this.contact });
    };
    return ContactDetailsController;
}());
angular.module("myApp").component("contactDetails", {
    templateUrl: "contactDetails.html",
    controller: ContactDetailsController,
    bindings: {
        contact: "<",
        onRemove: "&",
    }
});
//# sourceMappingURL=contactDetails.js.map