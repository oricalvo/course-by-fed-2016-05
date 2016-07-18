(function() {
    "use strict";

    function ContactDetailsController($scope) {
        console.log(this);
    }

    angular.module("myApp").component("contactDetails", {
        templateUrl: "contactDetails.html",
        controller: ContactDetailsController,
        bindings: {
            contact: "<",
        }
    });

})();
