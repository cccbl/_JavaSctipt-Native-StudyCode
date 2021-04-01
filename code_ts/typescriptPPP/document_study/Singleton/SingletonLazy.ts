
/**
 * @description: 懒汉单例模式，默认不生成，只有调用时才生成单例模式，
 */
export class SingletonLazy {

    private static SingletonINSTANCE: SingletonLazy = null;

    private testNum: number = 0;

    private constructor() {
        console.log("构造懒汉单例模式")
    }

    public static getSingletonINSTANCE(): SingletonLazy {
        if (!SingletonLazy.SingletonINSTANCE) {
            SingletonLazy.SingletonINSTANCE = new SingletonLazy();
        }
        return SingletonLazy.SingletonINSTANCE;
    }

    public getTestNum(): number {
        return this.testNum;
    }

    public setTestNum(val: number): void {
        this.testNum = val;
    }
}