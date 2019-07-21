/** 工厂模式 */

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

    public getName(): string {
        return this.name;
    }
}

class NormalStudent extends Student {
    public constructor(name, subject?) {
        // 如果未填选科目，默认填一个'未分科'
        if (!subject) {
            let tempSubject = SubjectType.NORMAL;
            super(name, tempSubject);
            return
        }
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "未分科");
    }
}

class ArtsStudent extends Student {
    public constructor(name, subject) {
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "文科生");
    }
}

class ScienceStudent extends Student {
    public constructor(name, subject) {
        super(name, subject);
    }
    currSubject() {
        console.log(this.name, "理科生");
    }
}


// 抽象工厂。 不同的工厂职能不同(开闭原则)
abstract class AbstractFactory {
    abstract create(name: string, subject: SubjectType): Student;
    abstract task(name);
}

class ArtsFactory extends AbstractFactory {
    public static readonly INSTANCE: ArtsFactory = new ArtsFactory();
    private constructor() { super() }

    create(name: string, subject: SubjectType): Student {
        let student = new ArtsStudent(name, subject);
        student.currSubject()
        this.task(student.getName());
        return student
    }
    task(name) {
        console.log(name, "学习文学知识");
    }
}

class ScienceFactory extends AbstractFactory {
    public static readonly INSTANCE: ScienceFactory = new ScienceFactory();
    private constructor() { super() }

    create(name: string, subject: SubjectType): Student {
        let student = new ScienceStudent(name, subject);
        student.currSubject()
        this.task(student.getName());
        return student;
    }
    task(name) {
        console.log(name, "实操理科知识")
    }
}

class NormalFactory extends AbstractFactory {
    public static readonly INSTANCE: NormalFactory = new NormalFactory();
    private constructor() { super() }

    create(name: string, subject?: SubjectType): Student {
        let student = subject ?
            new NormalStudent(name, subject) :
            new NormalStudent(name);
        student.currSubject()
        this.task(student.getName());
        return student;
    }
    task(name: any) {
        console.log(name, "普通生，做自己喜欢的事就好啦~");
    }
}


let arts = ArtsFactory.INSTANCE.create("小李", SubjectType.ARTS);
let science = ScienceFactory.INSTANCE.create("吴迪", SubjectType.SCIENCE);
let normal = NormalFactory.INSTANCE.create("阿水", SubjectType.NORMAL);
let normal2 = NormalFactory.INSTANCE.create("迪克斯");
