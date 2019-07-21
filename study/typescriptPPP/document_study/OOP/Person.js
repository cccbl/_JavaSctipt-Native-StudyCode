"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Animal_1 = require("./Animal");
var Person = /** @class */ (function (_super) {
    __extends(Person, _super);
    function Person(name, gender, language) {
        var _this = _super.call(this, name, gender) || this;
        _this.language = language;
        return _this;
    }
    Person.prototype.dialog = function () {
        return this.getName() + " speaks " + this.language;
    };
    Person.prototype.sleep = function (environment) {
        return this.getName() + " is " + (this.getGender() ? "男" : "女") + " , and sleeping in the " + environment;
    };
    Person.prototype.duty = function () {
        return this.name + "\u6CA1\u6709\u804C\u8D23\u611F";
    };
    return Person;
}(Animal_1.Animal));
exports.Person = Person;
// let chinese = new Person("张三", true, "chinese");
// console.log(chinese.dialog());
// console.log(chinese.eat("rice"));
// console.log(chinese.sleep("bed"))
// let english = new Person("smith", true, "english");
// console.log(english.dialog());
// console.log(english.eat("hamburger"))
// console.log(english.sleep("soft bed"))
