

/***
 * 队列 queue
 * enqueue(element)：此方法用于在队尾添加元素。
 * dequeue(): 此方法用于删除队列的队头元素。
 * peek():此方法用于队列的队头元素。
 * isEmpty(): 此方法用于判断队列是否为空，是的话返回True,否的话返回False。
 * size(): 此方法返回队列的大小，类似数组length属性。
 * clear():清空队列所有元素。
 * toString()：打印队列中的元素。

 */

class Queue {
    constructor() {
        this.count = 0;
        this.lowestCount = 0;
        this.items = {};
    }
    enqueue(element) {
        this.items[this.count++] = element
    }
    dequeue() {
        if (this.isEmpty()) {
            return 'queue is empty,can`t dequeue element!!! '
        }
        const result = this.items[this.lowestCount];
        delete this.items[this.lowestCount++];
        return result;
    }
    isEmpty() {
        return this.size() === 0;
    }
    peek() {
        if (this.isEmpty()) { return 'queue is empty' }
        return this.items[this.lowestCount];
    }
    size() {
        return this.count - this.lowestCount;
    }
    clear() {
        this.items = {};
        this.count = 0;
        this.lowestCount = 0;
    }
    toString() {
        if (this.isEmpty()) {
            return 'queue is empty'
        }
        let t = this.items[this.lowestCount];
        for (let i = this.lowestCount + 1; i < this.count; i++) {
            t = t + ',' + this.items[i];
        }
        return t;
    }
}


let queue = new Queue();
queue.enqueue(4)
queue.enqueue(3)
queue.enqueue(2)
queue.enqueue(1)
queue.dequeue()
queue.dequeue()
queue.enqueue(555)
queue.enqueue(566)
// queue.clear()
console.log(queue.toString())