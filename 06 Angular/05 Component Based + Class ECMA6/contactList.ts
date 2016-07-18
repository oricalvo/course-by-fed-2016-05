class ContactListController {
    contacts: any[];
    newName: string;

    constructor() {
        this.contacts = [
            {id: 1, name: "Ori"},
            {id: 2, name: "Roni"},
        ];
    }

    add() {
        if (!this.newName) {
            alert("Please specify a name");
            return;
        }

        var contact = {
            id: -1,
            name: this.newName,
        };

        this.contacts.push(contact);
    }

    remove(index) {
        this.contacts.splice(index, 1);
    }
}

angular.module("myApp").component("contactList", {
    templateUrl: "contactList.html",
    controller: ContactListController
});
