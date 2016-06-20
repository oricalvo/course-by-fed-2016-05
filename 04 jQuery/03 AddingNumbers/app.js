(function() {
    "use strict";

    var numbers = [];
    var button;
    var input;
    var ul;

    // $(function() {
    //     init();
    // });

    // $(document).ready(function() {
    //     init();
    // });

    //$(document).ready(init);

    $(init);

    function init() {
        console.log("init BEGIN");

        button = getElementBySelector("#buttonAdd");
        button.on("click", onButtonAddClicked);

        input = getElementBySelector("#inputName");

        ul = getElementBySelector("#numbers");

        console.log("init END");
    }

    function onButtonAddClicked() {
        var num = input.val();
        if(num === "") {
            alert("Please specify a name");
            return;
        }

        numbers.push(num);
        numbers.sort();

        updateUI();
    }

    function updateUI() {
        ul.empty();

        numbers.forEach(function(num) {
            var li = $("<li><span></span><button>Delete</button></li>");
            li.find("span").text(num);

            var button = li.find("button");
            button.data("num", num);

            button.click(function() {
                var button = $(this);
                var num = button.data("num");
                removeNum(num);
                //updateUI();
                button.closest("li").remove();
            });

            ul.append(li);
        });
    }

    function removeNum(num) {
        for(var i=0; i<numbers.length; i++) {
            if(numbers[i] == num) {
                numbers.splice(i, 1);
                return;
            }
        }
    }

    function getElementBySelector(selector) {
        var element = $(selector);
        if (element.length == 0) {
            throw new Error("Element with selector: " + selector + " was not found");
        }

        return element;
    }

})();
