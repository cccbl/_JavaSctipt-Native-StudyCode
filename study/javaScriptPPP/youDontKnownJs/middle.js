
/**
 * @tips  `-` 为另一个测试,如果一个函数内出现 - 这个符号，
 *        那么我是多个测试写在一个函数内了，阅读时顺延阅读，注释也是顺延注释
 */




//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-= // FIXME-IDLE

// 基本值类型是不会被传参然后改变的
function numAdd(num) {
    num = num + 1; // 输出3,但num实际还是2
}
let testNum = 2;
numAdd(2); // testNum依旧是2


// 符合类型值，会被函数改动
function arrAdd(arr) {
    arr.push("xxx");    // -
    // arr = [4, 5, 6]; // -重新赋值，但是对象的引用并没有改变，所以此句无效
    // arr.length = 0; // -是清空数组,重新push,那么会改变对象的值
    // arr.push(7, 8, 9);
}
let testArr = [1, 2, 3];
arrAdd(testArr); // 输出[1,2,3,"xxx"];

/**
 * @小结 :简单标量基本类型值（字符串和数字等）通过值复制来赋值 / 传递，
 *          而复合值（对象等）通过引用复制来赋值 / 传递。
 *          JavaScript 中的引用和其他语言中的引用 / 指针不同，
 *          它们不能指向别的变量 / 引用，只能指向值F
 */




//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-= // FIXME-IDLE

function fakeJoin(arr, connector) {
    var str = "";
    for (var i = 0; i < arr.length; i++) {
        if (i > 0) {
            str += connector;
        } if (arr[i] !== undefined) {
            str += arr[i];
        }
    }
    return str;
}
var a = new Array(3); // 输出 [ <3 empty items> ]
let t = fakeJoin(a, "-"); // 输出 "--"

/**
 * @小结 :
 */



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-= // FIXME-IDLE

// 符号(全局唯一,名字相同也无所谓)
let onlyKey = {
    [Symbol("cat")]: "阿猫",
    [Symbol("cat")]: "阿猫测试",
}
Symbol("cat")===Symbol("cat");  // 返回false
let onlyVal = {
    cat: Symbol("阿猫"),
    blackCat: Symbol("阿猫"),
    whiteCat: Symbol("阿猫"),
}

onlyVal.cat === onlyVal.blackCat; // 返回false



//-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=--=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-=-==-=-= // FIXME-IDLE

/** @假值 */
// undefined
// null
// false
// +0 、-0 和 NaN
// ""

/** @真值 */
// var a = "false";
// var b = "0";
// var c = "''";
// var a = []; 
// var b = {}; 
// var c = function(){}; 