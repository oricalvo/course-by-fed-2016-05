class ContactListController {
    contacts: any[];
    newName: string;

    constructor() {
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
    
    onContactRemove(contact, index) {
        if(confirm("Delete contact " + contact.name + " ?")) {
            this.contacts.splice(index, 1);
        }
    }
}

angular.module("myApp").component("contactList", {
    templateUrl: "contactList.html",
    controller: ContactListController,
    bindings: {
        contacts: "<",
    }
});
