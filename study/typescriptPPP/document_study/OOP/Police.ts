import { Person } from "./Person";


export class Police extends Person {

    public duty(): string {
        return `${this.name}的职责是维护社会的治安`;
    }
}

let police1: Police = new Police("小红花", false, "chinese");
console.log(police1.duty());