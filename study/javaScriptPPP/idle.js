


// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();




/****************************************** */
// call 和 apply 的功能相同，都是改变 this 的执行，并立即执行函数。区别在于传参方式不同。
// func.call(thisArg, arg1, arg2, ...)：第一个参数是 this 指向的对象，其它参数依次传入。
// func.apply(thisArg, [argsArray])：第一个参数是 this 指向的对象，第二个参数是数组或类数组。

var a = {};
Array.prototype.push.call(a, '5','6');
Array.prototype.push.apply(a, ['5','6']);
console.log(a);




/***************************************** */

// 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩 的方法。
// let temp=[];
// function grade() {
//     this.socre = []
//     this.add = add
//     this.avg = average
// }
// function add(obj) {
//     this.socre.push(obj)
// }
// function average(arr) {
//     let avg = null;
//     let total = 0;
//     for (let i = 0; i < arr.length; i++) {
//         total += arr[i]
//     }
//     return avg = total / arr.length
// }

// let temp = new grade()
// temp.add(4);
// temp.add(8);
// let asd = temp.avg(temp.socre)
// console.log(asd)

// console.log(average(this.socre))







