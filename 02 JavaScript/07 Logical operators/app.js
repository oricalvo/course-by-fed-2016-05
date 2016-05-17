//var x = function(){};
var x = null;
var y = {};

console.log(x || y);
console.log(x && y);

//var manager = super || worker;

var report;
// var res;
// if(report) {
//     res = report.run();
// }
// else {
//     res = false;
// }

var res = report && report.run();