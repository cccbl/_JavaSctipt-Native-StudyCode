
/*function* 这种声明方式(function关键字后跟一个星号）
    会定义一个生成器函数 (generator function)，
    它返回一个  Generator  对象。
**/

function* fibs() {
    let a = 0;
    let b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}
let [first, second, third, fourth, fifth, sixth] = fibs();
console.log([first, second, third, fourth, fifth, sixth])
// [1,2,3,4,5,6]

/******************************* */
//解构赋值
function example() {
    return [1, 2, 3];
}
let [a, b, c] = example();
console.log([a])
  //1



