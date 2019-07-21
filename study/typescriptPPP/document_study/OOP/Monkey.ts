import { Animal } from "./Animal"
import { IMonkey } from "./interfaceAnimal/IInterface"

export class Monkey extends Animal implements IMonkey {

    climbTree(): string {
        return "Monkeys will climb trees";
    }

}

let monkey1: Monkey = new Monkey("monkey one", false);
console.log(monkey1.climbTree());
console.log(monkey1.eat("banane"))
console.log(monkey1.sleep("group"));


let monkey2 = new Monkey("monkey two~~~", true);
console.log(monkey2.climbTree());
console.log(monkey2.eat("rice"))
console.log(monkey2.sleep("board"));

console.log("\n")
console.log(monkey1 instanceof Monkey)