/*
 * @Description: Animal,Person,Monkey的接口
 */
export interface IAnimal {
    eat(food: string): string;
    sleep(environment: string): string;
}
export interface IPerson {
    dialog(): string;
}
export interface IMonkey {
    climbTree(): string;
}