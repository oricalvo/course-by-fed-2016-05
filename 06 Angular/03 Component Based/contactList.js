(function() {
    "use strict";

    function ContactListController($scope) {
        $scope.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];

        $scope.add = function () {
            if (!$scope.newName) {
                alert("Please specify a name");
                return;
            }

            var contact = {
                id: -1,
                name: $scope.newName,
            };

            $scope.contacts.push(contact);
        }

        $scope.remove = function (index) {
            $scope.contacts.splice(index, 1);
        }
    }

    angular.module("myApp").component("contactList", {
        templateUrl: "contactList.html",
        controller: ContactListController
    });

})();
