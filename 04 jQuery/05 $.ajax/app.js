(function() {
    "use strict";

    $("button.get").click(getData);
    $("button.send").click(sendData);
    
    function getData() {
        $.ajax({
            type: "GET",
            url: "http://google.com/contacts.txt",
            success: function(data) {
                console.log("OK");
                console.log(JSON.parse(data));
            },
            error: function(jqXHR, textStatus, errorThrown ) {
                console.log(jqXHR);

                console.log("ERROR: " + jqXHR.status);
            }
        });

        console.log("AFTER");
    }

    function sendData() {
        var contact = {
            id: -1,
            name: "Udi",
            sibling: {
                id: -2,
                name: "Beni",
            }
        };
        
        $.ajax({
            type: "POST",
            url: "/api/AddContact",
            data: JSON.stringify(contact),
            contentType: "application/json",
            success: function(data) {
                console.log("OK");
            },
            error: function(jqXHR, textStatus, errorThrown ) {
                console.log("ERROR: " + jqXHR.status);
            }
        });

        console.log("AFTER");
    }
})();
