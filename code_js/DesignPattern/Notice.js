/*
 * @Author: saury
 * @Date: 2021-03-03 20:10:12
 * @Des:
 * @Tips:
 */
var Observer = /** @class */ (function () {
    function Observer() {
        this.arr = {};
    }
    Observer.prototype.add = function (key, foo) {
        this.arr[key] == null ? this.arr[key] = [foo] : this.arr[key].push(foo);
    };
    Observer.prototype.remove = function (key, foo) {
        // if (!this.arr[key].includes(foo)) {
        //     return;
        // }
        var index = this.arr[key].indexOf(foo);
        this.arr[key].splice(index, 1);
    };
    Observer.prototype.emit = function (key) {
        var param = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            param[_i - 1] = arguments[_i];
        }
        if (!this.arr[key]) {
            return;
        }
        this.arr[key].forEach(function (foo) { foo.apply(void 0, param); });
    };
    return Observer;
}());
var notice = new Observer();
var a = function (p) {
    console.log("a...", p);
};
var a1 = function (p) {
    console.log("a1...", p);
};
var b = function (p) {
    console.log("b...", p);
};
notice.add("a", a);
notice.add("a", a1);
notice.add("b", b);
// notice.emit("a", 111)
// notice.remove("a", a1);
// notice.emit("a", 111);
// notice.emit("b", 222)
