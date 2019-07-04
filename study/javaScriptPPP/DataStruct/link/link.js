
//新节点
function Node(element) {
    this.element = element;
    this.next = null
    this.previous = null;//双向链表
}

//链表
function LList() {
    this.head = new Node("head");
    this.head.next = this.head;//循环链表
    this.find = find;
    this.insert = insert;
    this.findPrevious = findPrevious;
    this.remove = remove;
    this.display = display;
    this.findLast = findLast;
    this.dispReverse = dispReverse;
}

//查找
//首先，创建一个新节点，并将链表的头节点赋
// 给这个新创建的节点。然后在链表上进行循环，如果当前节点的 element 属性和我们要找
// 的信息不符，就从当前节点移动到下一个节点。如果查找成功，该方法返回包含该数据的
// 节点；否则，返回 null
function find(ele) {
    let currNode = this.head;
    //元素不等于要查找元素,就查找下一个
    while (currNode.element != ele) {
        currNode = currNode.next;
    }
    return currNode;
}
//插入
//找到节点后，将节点的next设置为找到节点的next
//重新设置next的指向
function insert(newElement, item) {
    let current = this.find(item);
    let newNode = new Node(newElement);
    current.next = newNode;//目标元素item的next为新节点
    newNode.previous = current;//新元素的上一个元素指向item
    newNode.next = current.next;//节点next指向item的下一节点（我也不太理解，这里极有可能是错误的）
}
//显示链表元素
//当节点的next为null，则循环结束
//为了只显示包含数据的节点（换句话说，不显示头节点），程序只访问
// 当前节点的下一个节点中保存的数据
function display() {
    let currentNode = this.head;
    while (!(currentNode.next == null) && !(currentNode.next.element == 'head')) {
        console.log(currentNode.next.element)
        currentNode = currentNode.next
    }
}
// 从链表中删除节点时，需要先找到待删除节点前面的节点。找到这个节点后，修改它的
// next 属性，使其不再指向待删除节点，而是指向待删除节点的下一个节点。我们可以定义
// 一个方法 findPrevious()，来做这件事。该方法遍历链表中的元素，检查每一个节点的下
// 一个节点中是否存储着待删除数据。如果找到，返回该节点（即“前一个”节点），这样
// 就可以修改它的 next 属性了。findPrevious() 方法的定义如
function findPrevious(item) {//双向链表用不到了，删除.
    // var currNode = this.head;
    // while (!(currNode.next == null) &&
    //     (currNode.next.element != item)) {
    //     currNode = currNode.next;
    // } return currNode;
}
// 这里跳过了待删除节点，让“前一个”节点指向了待删除节点的后一个节点
// function remove(item) {
//     let prevNode = this.findPrevious(item);
//     if ((prevNode.next !== null)) {
//         prevNode.next = prevNode.next.next
//     }
// }
//双向链表删除节点
function remove(item) {
    let currentNode = this.find(item)
    if (currentNode.next !== null) {
        currentNode.previous.next = currentNode.next//[删除节点]的上一个节点next指向[删除节点]的下一个节点 例如:1,2,3=》1，3
        currentNode.next.previous = currentNode.previous//同上
        currentNode.next = null;
        currentNode.previous = null
    }
}
//findLast() 方法找出了链表中的最后一个节点，同时免除了从前往后遍历链表之苦
function findLast() {
    let currNode = this.head;
    while (currNode.next !== null && currNode.next.element !== 'head') {
        currNode = currNode.next
    }
    // console.log('lastNode:', currNode)
    return currNode;
}
//反向展示链表
function dispReverse() {
    let currentNode = this.head;
    currentNode = this.findLast();
    while (!(currentNode.previous == null)) {
        console.log(currentNode.element)
        currentNode = currentNode.previous
    }
}




let cities = new LList();
cities.insert('candy', 'head');
cities.insert('6666', 'candy')
cities.insert('today', '6666')
cities.remove('6666')
cities.insert('abc', 'candy')
cities.insert('funny', 'today')
cities.display()
console.log('\n')
cities.dispReverse()




