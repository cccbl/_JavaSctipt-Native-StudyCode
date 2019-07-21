"use strict";
exports.__esModule = true;
/**
 * @description: 饿汉单例，直接实例化单例
 */
var Singeton = /** @class */ (function () {
    function Singeton() {
        this.testNum = 0;
        console.log("构造饿汉单例");
    }
    Singeton.prototype.getTestNum = function () {
        return this.testNum;
    };
    Singeton.prototype.setTestNum = function (val) {
        this.testNum = val;
    };
    Singeton.SingletonINSTANCE = new Singeton();
    return Singeton;
}());
exports.Singeton = Singeton;
