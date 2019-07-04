

//去重
let tempArr = [2, 1, 5, 3, 6, 3, 5, 36, 3, 8, 12, 4, 3, 4, 4, 4, 4, 4, 2, 4, 3, 4, 4];
//方式一：Set 去重
let unique = [...new Set(tempArr)].sort((a, b) => { return a - b });

//方式二：新数组indexOf去重   不存在的值indexOf===-1
let unique2 = [];
tempArr.forEach(v => {
    unique2.indexOf(v) === -1 ? unique2.push(v) : null
})
console.log(unique2.sort((a, b) => a - b))