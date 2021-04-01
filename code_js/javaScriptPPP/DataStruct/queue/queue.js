
//队列 先进先出

function Queue() {
    this.dataStore = [];
    this.enqueue = enqueue;  //进
    this.dequeue = dequeue; //出
    this.front = front; //头
    this.back = back; //尾
    this.toString = toString; //显示全部元素
    this.empty = empty; //判断是否为空
}

function enqueue(ele) {
    this.dataStore.push(ele)
}

function dequeue() {
    this.dataStore.shift();
}

function front() {
    return this.dataStore[0]
}

function back() {
    return this.dataStore[this.dataStore.length - 1]
}

function toString() {
    let temp = '';
    this.dataStore.forEach(v => {
        temp += (v + '  ')
    })
    return temp
}

function empty() {
    if (this.dataStore.length === 0) return true
    else return false
}


let test = new Queue();
test.enqueue('1')
test.enqueue(2)
test.enqueue('5')
test.dequeue()
test.enqueue('6')
test.enqueue('sdaf')
test.enqueue('sdafhhh')
console.log(test.dataStore)

// ----------------------------------队列，自己写一遍-------------------------------------------------

function QueueSelf() {
    this.arr = [];
    this.enqueueSelf = enqueueSelf;
    this.dequeueSelf = dequeueSelf;
    this.queueTostring = queueTostring;
}

function enqueueSelf(e) {
    this.arr.push(e)
}
function dequeueSelf() {
    this.arr.shift();
}
function queueTostring() {
    let temp = [];
    this.arr.forEach(v => {
        temp.push(v + "")
    })
    return temp;
}

let tSelf = new QueueSelf();
tSelf.enqueueSelf(1)
tSelf.enqueueSelf(2)
tSelf.enqueueSelf('as')
tSelf.enqueueSelf(77)
tSelf.enqueueSelf('32')
let temp = tSelf.queueTostring();
console.log(temp)