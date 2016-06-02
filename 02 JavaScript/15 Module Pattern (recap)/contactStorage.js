var contactStorage = (function () {
    "use strict";

    var contacts = null;
    
    function load() {
        if(!contacts) {
            var json = localStorage.getItem("contacts");
            if(json) {
                contacts = JSON.parse(json);
            }
            else {
                contacts = [];
            }
        }
    }
    
    function save() {
        if(!contacts) {
            contacts = [];
        }
        
        localStorage.setItem("contacts", JSON.stringify(contacts));
    }
    
    function getAll() {
        load();
        
        return contacts;
    }
    
    function add(contact) {
        load();
        
        contacts.push(contact);
        
        save();
    }
    
    function removeById(id) {
        load();
        
        for(var i=0; i<contacts.length; i++) {
            if(contacts[i].id == id) {
                contacts.splice(i, 1);
                break;
            }
        }
        
        save();
    }
    
    return {
        getAll: getAll,
        add: add,
        removeById: removeById,
    };
})();
