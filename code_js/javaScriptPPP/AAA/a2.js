/**
 * 现代的模块机制
大多数模块依赖加载器 / 管理器本质上都是将这种模块定义封装进一个友好的 API。
这里并不会研究某个具体的库，为了宏观了解我会简单地介绍一些核心概念：
 */
// var MyModules = (function Manager() {
//     var modules = {};
//     function define(name, deps, impl) {
//         for (var i = 0; i < deps.length; i++) {
//             deps[i] = modules[deps[i]];
//         }
//         modules[name] = impl.apply(impl, deps);
//     }
//     function get(name) {
//         return modules[name];
//     }
//     return {
//         define: define,
//         get: get
//     };
// })();

/******************************************************** */

// function foo() {
//     console.log(this.a);
// }
// var obj = {
//     a: 2
// };
// foo.call(obj)


/************************************************************** */
// var myObject = {};
// Object.defineProperty(
//     myObject,
//     "a",
//     { enumerable: true, value: 2 },
// );
// console.log(myObject)
/************************************************************* */
function seek(arr, target) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let midPonit = Math.floor((start + end) / 2);
        if (target === arr[midPonit]) {
            return midPonit;
        }
        else if (target > arr[midPonit]) {
            start = midPonit + 1
        }
        else {
            end = midPonit - 1
        }
    }
    return -1
}
// console.log(seek([1, 2, 4, 5, 8, 11, 24, 54], 11))

//重新写了一遍
function bSearch(arr, k) {
    let start = 0;
    let end = arr.length - 1;

    while (start <= end) {
        let mid = Math.floor((start + end) / 2);
        if (k > arr[mid]) {
            start = mid + 1;
        }
        else if (k < arr[mid]) {
            end = mid - 1;
        }
        else {
            return mid;
        }
    }
    return -1;
}
// console.log(bSearch([1, 2, 4, 5, 8, 11, 24, 54], 11));
