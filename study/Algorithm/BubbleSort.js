
//冒跑排序 ：普通版和优化版

function bubble(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
            }
        }
    }
    return arr;
}

// 优化版冒泡： 新增一个判断属性isChange，如果遍历过一遍，发现没有交换过，那么可以确定该排序已经完成，直接break
function bubbleOptimize(arr) {
    let isChange;
    for (let i = 0; i < arr.length - 1; i++) {
        isChange = false;
        for (let j = 0; j < arr.length - 1 - i; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
                isChange = true;
            }
        }
        if (!isChange) break;
    }
    return arr;
}
let testArr = [1, 3, 2, 4, 5, 23, 4, 6, 11, 23, 45, 67, 89, 100, 111, 222, 333, 444, 555, 666, 777, 45654, 325, 456, 346, 324, 435, 32, 46, 32, 436, 435, 4356, 325, 4444, 5555, 66666666, 77777777777, 5, 32, 6, 438, 4565, 32532, 5, 2888, 9999999999999]
let test1 = bubble(testArr)
let testOptimize = bubbleOptimize(testArr)
console.log(testOptimize)


