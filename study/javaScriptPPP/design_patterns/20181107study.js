
function Student(name, subject) {
    this.name = name;
    this.subject = subject;
}
function Factory(name, type) {
    switch (type) {
        case 'wenke':
            return new Student(name, "文科")
            break;
        case 'like':
            return new Student(name,'理科')
            break;
        default:
            throw 'fucking off'
    }
}
var xiaoming=Factory('小明','wenke')
var xiaohong=Factory('小红','like')
console.log(xiaoming)
console.log(xiaohong)
console.log(xiaoming===xiaohong)
// var HHH=Factory('我是来捣乱的','qqq')


/*********************ES6 */

// class Student1 {
//     constructor(name, subject) {
//         this.name = name
//         this.subject = subject
//     }
// }
// function Factory1(name, type) {
//     if(type==='wenke'){
//         return new Student1(name,['啊啊啊啊'])
//     }
//     else if(type==='like'){
//         return new Student1(name,['哦哦哦哦哦哦'])
//     }
//     else {
//         throw 'fucking off, son of bitch'
//     }
// }
// var A=new Factory1('A','wenke')
// console.log(A)
// var B=new Factory1('B','like')
// console.log(B)
// // var CCC=new Factory1('cc','hhhhhh')
// // console.log(CCC)

