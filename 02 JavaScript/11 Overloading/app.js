var originalJSONParse = JSON.parse;
JSON.parse = function(text) {
    console.log("JSON.parse: " + text);
    
    var res = originalJSONParse.apply(this, arguments);

    console.log("JSON.parse result: " + res);

    return res;
}

// function g(num) {
//     if(num!==undefined) {
//         console.log("111");
//     }
//     else {
//         console.log("222");
//     }
// }
//
// g(0);
//
// console.log(g.toString());

// $("button").html("1iouh123iu3h");
//
// $("button").html();

var json = JSON.stringify({
    id: 123,
    name: "Ori",
    emails: ["123", "12312"],
    dump: function() {
    }
});
console.log(json);


var json = '{"id": 123, "name": "Ori"}';
var obj = JSON.parse(json);
console.log(obj.id);

