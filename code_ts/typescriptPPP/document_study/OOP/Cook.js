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
var Person_1 = require("./Person");
/**
 * @description: 厨师类
 */
var Cook = /** @class */ (function (_super) {
    __extends(Cook, _super);
    function Cook() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // public cookFood(): string {
    //     return `${this.getName()}是一名${this.getGender() ? '男' : '女'}厨师，主要负责食物加工`;
    // }
    Cook.prototype.duty = function () {
        return this.name + "\u7684\u804C\u8D23\u662F\u70F9\u5236\u51FA\u53EF\u53E3\u7684\u996D\u83DC";
    };
    return Cook;
}(Person_1.Person));
exports.Cook = Cook;
var cook1 = new Cook("飞刀小厨", true, "chinese");
console.log(cook1.duty());
var personTest = new Person_1.Person("人造人", true, "japan");
console.log(personTest.duty());
