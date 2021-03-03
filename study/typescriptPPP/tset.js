var a = {};
var b = { key: 'b' };
var c = { key: 'c' };
var d = [3, 5, 6];
a[b] = 123;
a[c] = 345;
a[d] = 333;
console.log(b, a[b]);  // 345
console.log(c, a[c]);  // 345
console.log(d, a[d]);  // 333