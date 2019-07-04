/**ES6 */
class Student {
    constructor(name, score) {
        this.name = name
        this.score = score
        this.quality=100
    };
    sumScore(){
        return this.score+this.quality
    }
}
var a=new Student('我是你爹',95)
console.log(a.name+'\t'+a.score+'\t'+a.sumScore())


/***ES5 */
function Student5(name5,score5){
    this.name5=name5
    this.score5=score5
    this.quality5=100

    this.sumSore5=function(){
        return this.score5+this.quality5
    }
}

var b=new Student5('你娘是我',22)
console.log(b.name5+'\t'+b.score5+'\t'+b.sumSore5())

