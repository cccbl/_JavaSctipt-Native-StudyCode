/*
 * @Author: saury
 * @Date: 2021-03-03 20:10:12
 * @Des: 
 * @Tips: 
 */
class Observer {
    private arr: { [key: string]: any[] } = {};

    add(key: string, foo: any) {
        this.arr[key] == null ? this.arr[key] = [foo] : this.arr[key].push(foo);
    }

    remove(key: string, foo: any) {
        // if (!this.arr[key].includes(foo)) {
        //     return;
        // }
        let index = this.arr[key].indexOf(foo);
        this.arr[key].splice(index, 1);
    }

    emit(key: string, ...param) {
        if (!this.arr[key]) {
            return;
        }

        this.arr[key].forEach(foo => { foo(...param) });
    }
}

let notice = new Observer();

let a = (p) => {
    console.log("a...", p);
};
let a1 = (p) => {
    console.log("a1...", p);
};
let b = (p) => {
    console.log("b...", p);
}

notice.add("a", a);
notice.add("a", a1);
notice.add("b", b);

// notice.emit("a", 111)
// notice.remove("a", a1);
// notice.emit("a", 111);
// notice.emit("b", 222)