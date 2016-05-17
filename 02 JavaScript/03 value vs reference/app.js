function g(x) {
    //x = [1,2,3,4,5];
    x[1] = 12;
    //x.id = 11;
    // x = {
    //   id: 11,
    // };
}

// var x = {
//     id: 12,
// };

var x = [1,2,3];

g(x);

console.log(x[1]);
