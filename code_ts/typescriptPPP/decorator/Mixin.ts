/*
 * @Author: cbl
 * @Date: 2020-04-24 20:37:46
 * @Des: 混个多个类
 * @Tips: 
 */


class A {
    aFoo() { return "A"; }
}

class B {
    bFoo() { return "B"; }
}

class C { }

/**
 * 混和类～
 * @param constructor 混和出的类
 * @param ...args 需要混合的类(多个)
 */
function mixin(constructor) {
    return (...args) => {
        for (const arg of args) {
            // 获取单个类所有方法名
            for (const key of Object.getOwnPropertyNames(arg.prototype)) {
                if (key === "constructor") { continue; }
                // 赋值方法
                Object.defineProperty(
                    constructor.prototype,
                    key,
                    Object.getOwnPropertyDescriptor(arg.prototype, key) // 这一句是拿到key对应的方法. {foo:()=>{}} 传入foo, 拿到函数
                );
            }
        }
    }
}

mixin(C)(A, B);

let temp = new C() as any;
console.log(temp.bFoo())