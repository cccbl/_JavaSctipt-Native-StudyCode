import * as AnimalInterface from "./interfaceAnimal/IInterface";

export class Animal implements AnimalInterface.IAnimal {

    protected name: string;
    /** 0为女 1为男 */
    private gender: boolean;

    public constructor(name: string, gender: boolean) {
        this.name = name;
        this.gender = gender;
    }

    eat(food: string): string {
        return `${this.name} is eating ${food}`;
    }
    sleep(environment: string): string {
        return `${this.name} is sleeping in the ${environment}`;
    }

    public getName(): string {
        return this.name;
    }
    public setName(value: string): void {
        this.name = value;
    }

    public getGender(): boolean {
        return this.gender;
    }
    public setGender(value: boolean): void {
        this.gender = value;
    }


}


