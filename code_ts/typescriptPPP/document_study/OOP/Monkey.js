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
var Monkey = /** @class */ (function (_super) {
    __extends(Monkey, _super);
    function Monkey() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Monkey.prototype.climbTree = function () {
        return "Monkeys will climb trees";
    };
    return Monkey;
}(Animal_1.Animal));
exports.Monkey = Monkey;
var monkey1 = new Monkey("monkey one", false);
console.log(monkey1.climbTree());
console.log(monkey1.eat("banane"));
console.log(monkey1.sleep("group"));
var monkey2 = new Monkey("monkey two~~~", true);
console.log(monkey2.climbTree());
console.log(monkey2.eat("rice"));
console.log(monkey2.sleep("board"));
console.log("\n");
console.log(monkey1 instanceof Monkey);
