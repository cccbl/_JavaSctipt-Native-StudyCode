"use strict";
exports.__esModule = true;
var Singleton_1 = require("./Singleton");
var SingletonLazy_1 = require("./SingletonLazy");
/**
 * @description: 单例测试
 */
var normal1 = Singleton_1.Singeton.SingletonINSTANCE;
var normal2 = Singleton_1.Singeton.SingletonINSTANCE;
console.log("normal1 test : ", normal1.getTestNum());
console.log("normal2 test : ", normal2.getTestNum());
normal1.setTestNum(5);
console.log("normal1 test : ", normal1.getTestNum());
console.log("normal2 test : ", normal2.getTestNum());
console.log("\n");
var lazy1 = SingletonLazy_1.SingletonLazy.getSingletonINSTANCE();
var lazy2 = SingletonLazy_1.SingletonLazy.getSingletonINSTANCE();
console.log("lazy1 test : ", lazy1.getTestNum());
console.log("lazy2 test : ", lazy2.getTestNum());
lazy1.setTestNum(111);
console.log("lazy1 test : ", lazy1.getTestNum());
console.log("lazy2 test : ", lazy2.getTestNum());
