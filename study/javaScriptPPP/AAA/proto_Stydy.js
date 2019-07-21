
//关于原型prototype,__proto__ 和 ES6写法 的学习


//////////原型写法 注意Object.create(obj.prototype)///////////
function Animal(name, energy) {
    let animal = Object.create(Animal.prototype);
    animal.name = name;
    animal.energy = energy;
    return animal;
}
Animal.prototype.eat = function (amount) {
    console.log(`${this.name} is eating`)
    this.energy += amount;
}
Animal.prototype.sleep = function (amount) {
    console.log(`${this.name} is sleeping`);
    this.energy += amount;
}
Animal.prototype.play = function (amount) {
    console.log(`${this.name} is playing`);
    this.energy -= amount;
}

// const fff=new Animal("纷纷",10);
// fff.eat(5)
// fff.play(3)
// console.log(fff)


/////////////// 用class 关键字实现////////////////
class Animal2 {
    constructor(name, energy) {
        this.name = name;
        this.energy = energy;
    }
    eat(amount) {
        console.log(`${this.name} is eating`)
        this.energy += amount;
    }
    sleep(amount) {
        console.log(`${this.name} is sleeping`)
        this.energy += amount;
    }
    play(amount) {
        console.log(`${this.name} is playing`)
        this.energy -= amount;
    }
}
// const test=new Animal2("叉烧包",10)
// test.play(9);
// test.sleep(5);
// console.log(test)

class Person extends Animal2 {
    constructor(name, energy, money) {
        super(name, energy);
        this.money = money;
    }
    sayHi() {
        return `Hi ${this.name}`
    };
    getMoney() {
        return `you have ${this.money} dollar`
    };

}
const personTest = new Person('纷纷', 1, 5);
let t = personTest.getMoney();
personTest.eat(99);
console.log(personTest)
console.log(t)