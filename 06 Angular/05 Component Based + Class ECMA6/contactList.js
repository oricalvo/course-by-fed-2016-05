var ContactListController = (function () {
    function ContactListController() {
        this.contacts = [
            { id: 1, name: "Ori" },
            { id: 2, name: "Roni" },
        ];
    }
    ContactListController.prototype.add = function () {
        if (!this.newName) {
            alert("Please specify a name");
            return;
        }
        var contact = {
            id: -1,
            name: this.newName,
        };
        this.contacts.push(contact);
    };
    ContactListController.prototype.remove = function (index) {
        this.contacts.splice(index, 1);
    };
    return ContactListController;
}());
angular.module("myApp").component("contactList", {
    templateUrl: "contactList.html",
    controller: ContactListController
});
//# sourceMappingURL=contactList.js.map