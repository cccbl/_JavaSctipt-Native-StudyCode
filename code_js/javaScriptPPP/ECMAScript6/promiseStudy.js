/*
 * @Author: cbl
 * @Date: 2020-04-24 20:08:06
 * @Des: 数组的遍历你都会用了，那Promise版本的呢
 * @Tips: https://juejin.im/post/5ae0aee451882567244daaee 
 */

// 写不出来..
let mapPromise = [1, 2, 3].map(async v => v ** 2)
async function t() { await Promise.all(mapPromise); }
console.log(t());