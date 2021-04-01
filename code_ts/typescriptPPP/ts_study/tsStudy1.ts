

/**
 * 学习下TS
 * 努力 ！！  
 * 奋斗 ！！
 * 
 */



type Name = String;
let getFunc: (n: Name) => String = function getName(n: Name): String {
    return `${n}  !!!!!~~~嘻嘻`
}



let t = getFunc("TTTT");
console.log(t)