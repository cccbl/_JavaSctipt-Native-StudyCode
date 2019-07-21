import { Animal } from "./Animal";
import { IPerson } from "./interfaceAnimal/IInterface";

export class Person extends Animal implements IPerson {
    
    private language: string;

    public constructor(name: string, gender: boolean, language: string) {
        super(name, gender);
        this.language = language;
    }

    public dialog(): string {
        return `${this.getName()} speaks ${this.language}`
    }
    public sleep(environment: string): string {
        return `${this.getName()} is ${this.getGender() ? "男" : "女"} , and sleeping in the ${environment}`
    }
    public duty(): string {
        return `${this.name}没有职责感`;
    }
}

// let chinese = new Person("张三", true, "chinese");
// console.log(chinese.dialog());
// console.log(chinese.eat("rice"));
// console.log(chinese.sleep("bed"))

// let english = new Person("smith", true, "english");
// console.log(english.dialog());
// console.log(english.eat("hamburger"))
// console.log(english.sleep("soft bed"))