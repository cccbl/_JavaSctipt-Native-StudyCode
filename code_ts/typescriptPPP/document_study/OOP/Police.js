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
var Police = /** @class */ (function (_super) {
    __extends(Police, _super);
    function Police() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // public maintainSafe(): string {
    //     return `${this.getName()}是一名${this.getGender() ? '男' : '女'}警察，主要负责维护治安`;
    // }
    Police.prototype.duty = function () {
        return this.name + "\u7684\u804C\u8D23\u662F\u7EF4\u62A4\u793E\u4F1A\u7684\u6CBB\u5B89";
    };
    return Police;
}(Person_1.Person));
exports.Police = Police;
var police1 = new Police("小红花", false, "chinese");
console.log(police1.duty());
