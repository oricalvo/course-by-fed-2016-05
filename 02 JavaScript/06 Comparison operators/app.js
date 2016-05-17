console.log("1" == 1);
console.log(undefined == null);
console.log("" == false);

var input = document.getElementById("name");

var button1 = document.getElementById("button1");
button1.addEventListener("click", function() {
    //console.log(input.attributes["checked"].nodeValue);
    console.log(input.checked);
});
