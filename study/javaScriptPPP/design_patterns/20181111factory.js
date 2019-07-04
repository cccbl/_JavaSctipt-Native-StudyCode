
function teacher() {
    this.a = 'teacherrrr'
}
function student() {
    this.a = 'studentttt'
}

function teacherFactory() {
    return new teacher()
}
function studentFactory() {
    return new student();
}

function chooseFactory(a) {
    switch (a) {
        case 'student':
            return studentFactory
            break;
        case 'teacher':
            return teacherFactory
            break;
        default:
            throw '什么都没有';
            break;
    }
}
var x=new chooseFactory('student');
// console.log(t)


