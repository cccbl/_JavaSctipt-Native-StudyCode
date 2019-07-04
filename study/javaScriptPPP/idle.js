


// function makeFunc() {
//     var name = "Mozilla";
//     function displayName() {
//         console.log(name);
//     }
//     return displayName;
// }
// var myFunc = makeFunc();
// myFunc();
//***************************************** */
// function makeAdder(x) {
//     return function(y) {
//       return x + y;
//     };
//   }
//   var add5 = makeAdder(5);
//   var add10 = makeAdder(10);
//   console.log(add5(1));  // 6
//   console.log(add10(2)); // 12
/****************************************** */

// var a = {};
// Array.prototype.push.call(a, '5','6');
// console.log(a);
/***************************************** */

// 创建一个记录学生成绩的对象，提供一个添加成绩的方法，以及一个显示学生平均成绩 的方法。
// let temp=[];
function grade() {
    this.socre = []
    this.add = add
    this.avg = average
}
function add(obj) {
    this.socre.push(obj)
}
function average(arr) {
    let avg = null;
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i]
    }
    return avg = total / arr.length
}

let temp = new grade()
temp.add(4);
temp.add(8);
let asd = temp.avg(temp.socre)
console.log(asd)

// console.log(average(this.socre))







