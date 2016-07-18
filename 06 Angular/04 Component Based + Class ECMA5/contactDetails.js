(function() {
    "use strict";

    function ContactDetailsController() {
        console.log(this);
    }

    ContactDetailsController.prototype.remove = function(index) {
        alert(index);
    } 

    angular.module("myApp").component("contactDetails", {
        templateUrl: "contactDetails.html",
        controller: ContactDetailsController,
        bindings: {
            contact: "<",
        }
    });

})();
