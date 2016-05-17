// function g() {
//     var num = 0;
//
//     return function() {
//         ++num;
//
//         console.log(num);
//     };
// }
//
// var f1 = g();
// f1();
// f1();
//
// var f2 = g();
//
// f1();
// f2();

function Counter(num) {
    return {
        inc: function() {
            ++num;
        },
        dec: function() {
            --num;
        },
        dump: function() {
            console.log(num);
        }
    };
}

var c1 = new Counter(0);
c1.num = 1000;
c1.inc();

var c2 = new Counter(10);
c2.dec();

c1.dump();
c2.dump();
