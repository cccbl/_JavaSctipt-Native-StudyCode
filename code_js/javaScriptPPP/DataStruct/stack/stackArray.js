


/**
 * Stack 栈数据结构 先进后出(后进先出)
 * push(element(s)): 此方法将新添加的元素添加至堆栈的顶部
 * pop():此方法删除栈顶的元素，同时返回已删除的元素
 * peek(): 返回堆栈的顶部元素
 * isEmpty(): 判断堆栈是否为空，如果为空，返回True, 否则返回False。
 * clear(): 清空堆栈所有的元素。
 * size(): 此方法返回堆栈元素的数量，类似数组的长度。
 * toArray(): 以数组的形式返回堆栈的元素。
 * toString()：以字符串的形式输出堆栈内容。

 */

class StackArray {
    constructor() {
        this.items = [];
    }
    push(element) {
        this.items.push(element)
    }
    pop() {
        return this.items.pop();
    }
    peek() {
        //返回顶部元素(最开始添加的元素)
        return this.items[this.items.length - 1];
    }
    isEmpty() {
        return this.items.length === 0;
    }
    size() {
        return this.items.length;
    }
    clear() {
        this.items = [];
    }
    toArray() {
        return this.items;
    }
    toString() {
        return this.items.toString();
    }
}

// const stack=new StackArray();
// stack.push(2)
// stack.push(5)
// stack.push("6")
// stack.pop();
// stack.push(999)
// let t=stack.toArray();
// console.log(t)






/***
 * 优化版 Stack
 * 我觉得有点花里胡哨，后面再改动
 */
class StackArrayOptimizing {
    constructor() {
        this.count = 0;
        this.items = {};
    }
    push(element) {
        this.items[this.count] = element;
        this.count++;
    }
    pop() {
        if (this.isEmpty()) {
            return '栈为空，不能再删了';
        }
        //将变量count的值减1，同时删除对应的属性
        const result = this.items[this.count];
        delete this.items[this.count]
        this.count--;
        return result;
    }
    peek() {
        //返回顶部元素(最开始添加的元素)
        if (this.isEmpty()) {
            return '栈为空，没有顶部元素';
        }
        return this.items[this.count - 1];
    }
    isEmpty() {
        return this.count === 0;
    }
    size() {
        return this.count;
    }
    clear() {
        this.items = [];
        this.count = 0;
    }
    toString() {
        if (this.isEmpty()) { return ''; }
        let string = this.items[0];
        for (let i = 1; i < this.count; i++) {
            string = string + ',' + this.items[i];
        }
        return string;
    }
}

let stackOptimize = new StackArrayOptimizing();
stackOptimize.push(1)
stackOptimize.push(2)
stackOptimize.push(5)
stackOptimize.push(7)
stackOptimize.pop();
stackOptimize.pop();
stackOptimize.push(755)
stackOptimize.push(9)
stackOptimize.push(1)
// stackOptimize.clear()
console.log(stackOptimize.toString())

