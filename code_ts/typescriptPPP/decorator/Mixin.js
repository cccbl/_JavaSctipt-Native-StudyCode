/*
 * @Author: cbl
 * @Date: 2020-04-24 20:37:46
 * @Des: 混个多个类
 * @Tips:
 */
var A = /** @class */ (function () {
    function A() {
    }
    A.prototype.aFoo = function () { return "A"; };
    return A;
}());
var B = /** @class */ (function () {
    function B() {
    }
    B.prototype.bFoo = function () { return "B"; };
    return B;
}());
var C = /** @class */ (function () {
    function C() {
    }
    return C;
}());
/**
 * 混和类～
 * @param constructor 混和出的类
 * @param ...args 需要混合的类(多个)
 */
function mixin(constructor) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        for (var _a = 0, args_1 = args; _a < args_1.length; _a++) {
            var arg = args_1[_a];
            // 获取单个类所有方法名
            for (var _b = 0, _c = Object.getOwnPropertyNames(arg.prototype); _b < _c.length; _b++) {
                var key = _c[_b];
                if (key === "constructor") {
                    continue;
                }
                // 赋值方法
                Object.defineProperty(constructor.prototype, key, Object.getOwnPropertyDescriptor(arg.prototype, key) // 这一句是拿到key对应的方法. {foo:()=>{}} 传入foo, 拿到函数
                );
            }
        }
    };
}
mixin(C)(A, B);
var temp = new C();
console.log(temp.bFoo());
