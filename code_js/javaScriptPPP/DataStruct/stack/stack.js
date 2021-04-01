
//栈，先进后出

// peek() 方法返回数组的第 top-1 个位置的元素，即栈顶元素：
// 如果对一个空栈调用 peek() 方法，结果为 undefined。这是因为栈是空的，栈顶没有任何元素。


function stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = stackPush;
    this.pop = stackPop;
    this.peek = stackPeek;
    this.clear = stackClear;
    this.length = stackLenght;
};

//压栈
function stackPush(ele) {
    this.dataStore[this.top++] = ele
};

//弹栈
function stackPop() {
    return this.dataStore[--this.top]
}

//栈顶
function stackPeek() {
    return this.dataStore[this.top - 1]
}

//清栈
function stackClear() {
    this.top = 0;
}

//栈长度
function stackLenght() {
    return this.top
}



//阶乘函数
function testFunc(n) {
    let test = new stack();
    //进栈
    for (let i = n; i > 1; i--) {
        test.push(i)  //test=[n,n-1,...,1]
    }

    let temp = 1;
    for (let i = test.length(); i > 0; i--) {
        temp *= test.pop()
    }

    return temp

    //进栈
    // while (n > 1) {
    //     test.push(n--)
    // }
    // let temp=0
    // while (test.length() > 0) {
    //     temp*=test.pop();
    // }

}


let a = testFunc(5)
console.log(a)


function factorial(n) {
    //阶乘到0， 乘1不做处理
    if (n === 0) {
        return 1;
    }
    else {
        return n * factorial(n - 1)
    }
}

let b = factorial(5)
console.log(b)

