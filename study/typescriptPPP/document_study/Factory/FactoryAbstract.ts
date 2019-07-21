/** 抽象工厂模式 */


// 专门生产轮胎的工厂
interface IWheelFactory {
    createWheel(): string;
}

class BMWWheelFactory implements IWheelFactory {
    createWheel() {
        console.log("生产宝马轮胎");
        return "宝马轮胎";
    }
}

class MercedesWheelFactory implements IWheelFactory {
    createWheel() {
        console.log("生产奔驰轮胎");
        return "奔驰轮胎";
    }
}


interface IUnderpanFactory {
    createUnderpan(): string;
}

class BMWUnderpanFactory implements IUnderpanFactory {
    createUnderpan() {
        console.log("生产宝马底盘");
        return "宝马底盘";
    }
}

class MercedesUnderpanFactory implements IUnderpanFactory {
    createUnderpan() {
        console.log("生产奔驰底盘");
        return "奔驰底盘";
    }
}

// 汽车工厂
interface ICarFactory {
    underpan(): void ;
    wheel(): void ;
}

class BMWCarFactory implements ICarFactory {
    underpan(): void {
        let UnderpanFactory: BMWUnderpanFactory = new BMWUnderpanFactory();
        let underpan: string = UnderpanFactory.createUnderpan();
        console.log("安装底盘:", underpan)
    }
    wheel(): void {
        let WheelFactory: BMWWheelFactory = new BMWWheelFactory();
        let wheel: string = WheelFactory.createWheel();
        console.log("安装轮胎:", wheel)
    }
}

class MercedesCarFactory implements ICarFactory {
    underpan(): void {
        let UnderpanFactory: MercedesUnderpanFactory = new MercedesUnderpanFactory();
        let underpan: string = UnderpanFactory.createUnderpan();
        console.log("安装底盘:", underpan)
    }
    wheel(): void {
        let WheelFactory: MercedesWheelFactory = new MercedesWheelFactory();
        let wheel: string = WheelFactory.createWheel();
        console.log("安装轮胎:", wheel)
    }
}

let bmwFactory: ICarFactory = new BMWCarFactory();
bmwFactory.underpan();
bmwFactory.wheel();

console.log("\n")
let mercedesFactory: ICarFactory = new MercedesCarFactory();
mercedesFactory.underpan();
mercedesFactory.wheel();




