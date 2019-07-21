
import { Singeton } from "./Singleton";
import { SingletonLazy } from "./SingletonLazy";

/**
 * @description: 单例测试
 */
let normal1 = Singeton.SingletonINSTANCE;
let normal2 = Singeton.SingletonINSTANCE;
console.log("normal1 test : ", normal1.getTestNum());
console.log("normal2 test : ", normal2.getTestNum());
normal1.setTestNum(5);
console.log("normal1 test : ", normal1.getTestNum());
console.log("normal2 test : ", normal2.getTestNum());


console.log("\n")
let lazy1 = SingletonLazy.getSingletonINSTANCE();
let lazy2 = SingletonLazy.getSingletonINSTANCE();
console.log("lazy1 test : ", lazy1.getTestNum());
console.log("lazy2 test : ", lazy2.getTestNum());
lazy1.setTestNum(111);
console.log("lazy1 test : ", lazy1.getTestNum());
console.log("lazy2 test : ", lazy2.getTestNum());

