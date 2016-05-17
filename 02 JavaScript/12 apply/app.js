function g(num1, num2) {
    console.log(num1);
    console.log(num2);
    //console.log(arguments);
}

var original = JSON.parse;
JSON.parse = function() {
    return original.apply(this, arguments);
}

var arr = [];
arr.push(1);
arr.push(10);
arr.push(12);

//g(1,2);

g.apply("doiduiodh", arr);


function f() {
    console.log(obj.firstName);
}

var obj = {};

f();

obj.firstName = "Ori";

f();
