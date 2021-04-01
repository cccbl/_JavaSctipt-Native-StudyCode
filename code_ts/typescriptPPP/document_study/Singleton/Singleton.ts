
/**
 * @description: 饿汉单例，直接实例化单例
 */
export class Singeton {

    public static readonly SingletonINSTANCE: Singeton = new Singeton();

    private testNum: number = 0;

    private constructor() {
        console.log("构造饿汉单例")
     }

    public getTestNum(): number {
        return this.testNum;
    }
    public setTestNum(val: number) {
        this.testNum = val;
    }
}