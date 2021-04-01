/** 简单工厂 */

// 学科枚举
const enum SubjectType {
    NORMAL = "normal",
    ARTS = "arts",
    SCIENCE = "science"
}

interface IBehavior {
    currSubject(),
}

// 抽象方法
abstract class Student implements IBehavior {
    protected name: string;
    protected subject: SubjectType;

    public constructor(name: string, subject: SubjectType) {
        this.name = name;
        this.subject = subject;
    }

    abstract currSubject();

}

class NormalStudent extends Student {
    public constructor(name, subject) {
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "暂未分科的学生");
    }
}

class ArtsStudent extends Student {
    public constructor(name, subject) {
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "我是文科生");
    }
}

class ScienceStudent extends Student {
    public constructor(name, subject) {
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "简简单单理科生");
    }
}

// 工厂
class Factory {
    public static SubjectCategory(name: string, type?: SubjectType): Student {
        switch (type) {
            case SubjectType.ARTS:
                return new ArtsStudent(name, type);
                break;
            case SubjectType.SCIENCE:
                return new ScienceStudent(name, type);
                break;
            case SubjectType.NORMAL:
                return new NormalStudent(name, type);
                break;
            default:
                return new NormalStudent(name, SubjectType.NORMAL);
        }
    }
}

let normal1 = Factory.SubjectCategory("普通小敏", SubjectType.NORMAL);
let normal2 = Factory.SubjectCategory("未选班小红");
let arts = Factory.SubjectCategory("文科李琦", SubjectType.ARTS);
let science = Factory.SubjectCategory("理科王武", SubjectType.SCIENCE);
normal1.currSubject();
normal2.currSubject();
arts.currSubject();
science.currSubject();





