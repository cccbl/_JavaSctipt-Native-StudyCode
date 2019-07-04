

// listSize（属性） 列表的元素个数 
// pos （属性） 列表的当前位置 
// length （属性） 返回列表中元素的个数 
// clear （方法） 清空列表中的所有元素 
// toString （方法） 返回列表的字符串形式 
// getElement （方法） 返回当前位置的元素 
// insert （方法） 在现有元素后插入新元素 
// append （方法） 在列表的末尾添加新元素 
// remove （方法） 从列表中删除元素 
// front （方法） 将列表的当前位置设移动到第一个元素 
// end （方法） 将列表的当前位置移动到最后一个元素 
// prev（方法） 将当前位置后移一位 
// next （方法） 将当前位置前移一位 
// currPos （方法） 返回列表的当前位置 
// moveTo（方法） 将当前位置移动到指定位置


function list() {
    this.dataStore = []
    this.listSize = 0;//长度length
    this.pos = 0;//当前位置
    this.clear = clear;
    this.showData = showDataDB;//实际上为show改数组

    this.append = append;
    this.insert = insert;
    this.remove = remove;
    this.getElement = getElement;
    this.contain = contain;

    this.front = front;
    this.end = end;
    this.prev = previous;
    this.next = next;
    this.currPos = currentPosition;
    this.moveTo = moveTo;
}

function clear() {
    this.dataStore = [];
    this.listSize = this.pos = 0;
}

function showDataDB() {
    return console.log(this.dataStore)
}

function length() {
    return this.listSize
}


//向数组添加一个元素
function append(ele) {
    this.dataStore[this.listSize++] = ele
}

//找到该元素的位置i
function find(ele) {
    //这里有this指向问题
    for (let i = 0; i < this.dataStore.length; i++) {
        if (ele === this.dataStore[i]) {
            return i
        }
    }
    return -1
}

function remove(ele) {
    let index = find.call(this, ele)
    if (index === -1)
        return '无法找到该元素'

    this.dataStore.splice(index, 1)
    this.listSize--
    return '删除成功'
}

//插入在存在元素后面
// function insert(ele, curretEle) {
//     let index = find.call(this, curretEle)
//     if (index === -1)
//         return console.log('想插入的元素不存在，需要插入在存在的元素后面')
//     this.dataStore.splice(index + 1, 0, ele)
//     this.listSize++
//     return console.log( '添加成功')
// }
//插入在对应索引值后面,如果索引值过大或过小，定格对应位置显示
function insert(ele, index) {
    this.dataStore.splice(index + 1, 0, ele)
    this.listSize++
    return console.log(`添加元素${ele}成功`)
}

function contain(ele) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (ele === this.dataStore[i]) {
            console.log(`元素存在:${this.dataStore[i]}`)
            return
        }
    }
    console.log(`${ele}元素不存在`)
}



function front() {
    this.pos = 0
}
function end() {
    this.pos = this.listSize - 1
}
function previous() {
    this.pos--
    // if (this.dataStore[this.pos--])
    //     this.pos
    // else {
    //     this.pos++
    //     console.log('到达首位，无法再寻找上一个')
    // }
}
function next() {
    this.pos++
}
function currentPosition() {
    console.log(this.pos)
    return this.pos
}
function moveTo(position) {
    if (this.dataStore[position])
        this.pos = position
    else console.log('位置不存在，恢复默认0')

}
function getElement() {
    console.log(this.dataStore[this.pos])
    return this.dataStore[this.pos]
}

// let test = new list();
// test.append('aaa')
// test.append('bbb')
// test.append('ccc')
// test.append('ddd')
// test.append('eee')

// test.remove('aaa')
// // test.prev()
// // test.currPos()
// // test.getElement()
// // test.contain('aaa')
// test.insert('asdsa')
// test.showData()

//电影集合
// let textFile = 'C:\Users\-xc\Desktop\study\javaScriptPPP\study\list\films.txt'


let  test=[1,2,3,4]
let a=1,b=2;
console.log([a,b])
