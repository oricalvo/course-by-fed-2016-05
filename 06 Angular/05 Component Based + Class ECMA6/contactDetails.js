var ContactDetailsController = (function () {
    function ContactDetailsController() {
    }
    ContactDetailsController.prototype.remove = function () {
        alert("ddd");
    };
    return ContactDetailsController;
}());
angular.module("myApp").component("contactDetails", {
    templateUrl: "contactDetails.html",
    controller: ContactDetailsController,
    bindings: {
        contact: "<",
    }
});
//# sourceMappingURL=contactDetails.js.map