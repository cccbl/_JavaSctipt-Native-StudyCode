foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
}
console.log(2);
// 1
// 2

let tBtoa = btoa("123")
console.log(tBtoa);