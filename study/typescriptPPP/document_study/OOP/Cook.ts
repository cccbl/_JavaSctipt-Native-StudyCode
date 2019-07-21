import { Person } from "./Person";


/**
 * @description: 厨师类
 */
export class Cook extends Person {

    duty(): string {
        return `${this.name}的职责是烹制出可口的饭菜`;
    }

}

let cook1: Cook = new Cook("飞刀小厨", true, "chinese");
console.log(cook1.duty());

let personTest = new Person("人造人", true, "japan");
console.log(personTest.duty())