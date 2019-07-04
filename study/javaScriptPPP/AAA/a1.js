

//arr[i]*=2
// forEach = function (ary, fn) {
//     for (var i = 0, l = ary.length; i < l; i++) {
//         if (fn.call(ary[i], ary[i]) === false) {
//             return false;
//         }
//     }
// }
// forEach([1, 2, 3], function (n) {
//     console.log(n * 2)
// })

/*********************************************************************** */



// 首字母大写
var array=['asd','efdsf','tbvsd']
var a=array.map((v)=>{
    return v[0].toUpperCase()+v.slice(1);
})
console.log(a)


/*********************************************************************** */

// function foo() {
//     let a = 2;
//     function fooInside() {
//         console.log(a)
//     }
//     return fooInside();
// }
// foo()
















