(function() {
    "use strict";

    var contacts = [];
    var nextId = 0;
    var button;
    var input;
    var contactList;

    init();

    function init() {
        button = getElementBySelector("#buttonAdd");
        button.on("click", onButtonAddClicked);

        input = getElementBySelector("#inputName");

        contactList = getElementBySelector("#contacts");
    }

    function onButtonAddClicked() {
        var name = input.val();
        if(!name) {
            alert("Please specify a name");
            return;
        }

        var contact = {
            id: --nextId,
            name: name,
        };

        contacts.push(contact);

        updateUI();
    }

    function updateUI() {
        contactList.empty();

        contacts.forEach(function(contact) {
            var li = $("<li />");
            li.text(contact.name);
            contactList.append(li);
        });
    }

    function getElementBySelector(selector) {
        var element = $(selector);
        if (element.length == 0) {
            throw new Error("Element with selector: " + selector + " was not found");
        }

        return element;
    }

})();
