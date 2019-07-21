"use strict";
exports.__esModule = true;
/**
 * @description: 懒汉单例模式，默认不生成，只有调用时才生成单例模式，
 */
var SingletonLazy = /** @class */ (function () {
    function SingletonLazy() {
        this.testNum = 0;
        console.log("构造懒汉单例模式");
    }
    SingletonLazy.getSingletonINSTANCE = function () {
        if (!SingletonLazy.SingletonINSTANCE) {
            SingletonLazy.SingletonINSTANCE = new SingletonLazy();
        }
        return SingletonLazy.SingletonINSTANCE;
    };
    SingletonLazy.prototype.getTestNum = function () {
        return this.testNum;
    };
    SingletonLazy.prototype.setTestNum = function (val) {
        this.testNum = val;
    };
    SingletonLazy.SingletonINSTANCE = null;
    return SingletonLazy;
}());
exports.SingletonLazy = SingletonLazy;
