

function Student(name) {
    this.name = name;
}

let mark;
SingleINSTANCE = function () {
    return mark || (mark = new Student("小明"));
}

let a = SingleINSTANCE();
let b = SingleINSTANCE();

console.log(a)
console.log(Object.is(a,b))

//闭包 感觉写错了
// function package() {
//     var margic = "outer";
//     function make(temp) {
//         return margic + "and" + temp
//     }
//     return make;
// }
