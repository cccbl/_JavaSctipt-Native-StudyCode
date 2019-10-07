

// function sayHello(name: string): string {
//     return `helloooo ${name}`;
// }
// console.log(sayHello("阿B"));

class Array1 extends Array {
    static get [Symbol.species]() { return Array }

    public testFoo(str: number | String): Array<String> | string {
        return str == 0 ? ["asdasds"] : String(str);
    }
}

let arr0 = [1, 2, 3, 4, 5];
console.log({ arr0 });
let arr1 = Array.of(4, 4, 1, 34);
console.log({ arr1 });
// let arr = Array1.of(123);
// console.log(arr);
// console.log(arr instanceof Array1);
// console.log(arr instanceof Array);