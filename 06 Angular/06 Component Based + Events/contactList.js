var ContactListController = (function () {
    function ContactListController() {
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
    ContactListController.prototype.onContactRemove = function (contact, index) {
        if (confirm("Delete contact " + contact.name + " ?")) {
            this.contacts.splice(index, 1);
        }
    };
    return ContactListController;
}());
angular.module("myApp").component("contactList", {
    templateUrl: "contactList.html",
    controller: ContactListController,
    bindings: {
        contacts: "<",
    }
});
//# sourceMappingURL=contactList.js.map