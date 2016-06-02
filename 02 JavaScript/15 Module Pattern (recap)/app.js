(function() {

    contactStorage.add({id:1, name: "Ori"});

    contactStorage.removeById(1);

    contactStorage.getAll().forEach(function(contact) {
        console.log(contact.id + ": " + contact.name);
    });

})();

