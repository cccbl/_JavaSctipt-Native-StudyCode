"use strict";
exports.__esModule = true;
var Animal = /** @class */ (function () {
    function Animal(name, gender) {
        this.name = name;
        this.gender = gender;
    }
    Animal.prototype.eat = function (food) {
        return this.name + " is eating " + food;
    };
    Animal.prototype.sleep = function (environment) {
        return this.name + " is sleeping in the " + environment;
    };
    Animal.prototype.getName = function () {
        return this.name;
    };
    Animal.prototype.setName = function (value) {
        this.name = value;
    };
    Animal.prototype.getGender = function () {
        return this.gender;
    };
    Animal.prototype.setGender = function (value) {
        this.gender = value;
    };
    return Animal;
}());
exports.Animal = Animal;
