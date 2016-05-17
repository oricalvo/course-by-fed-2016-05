//
// var obj = {};
//
// obj["name"] = "Ori";
//
// obj.email = "ori@gmail.com";
// obj["email"] =  "ori@gmail.com";
//
// for(var key in obj) {
//     console.log(key + ": " + obj[key]);
// }
//
// var arr = [1,2,3];
// arr["name"] = "Ori";
// arr["10XXX"] = 100;
// console.log(arr.length);
// for(var num in arr) {
// }
//

var map = {};
map["name"] = "doidiodj";
map["email"] = undefined;

console.log(map.hasOwnProperty("email"));

delete map["email"];

console.log(map.hasOwnProperty("email"));

// if(map["email"]) {
// }

//console.log();

