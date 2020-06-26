class ListNode {
    val: number
    next: ListNode | NodeType

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

type NodeType = ListNode | null | undefined;

//递归
function swapPairs(head: NodeType): NodeType {
    //保证有最少两个节点
    if(!head || !head.next) return head;

    let temp = head.next.next;

    //head head.next

    let newHead = head.next;
    newHead.next = head;
    head.next = swapPairs(temp);

    return newHead;
}

//迭代
function swapPairs2(head: NodeType): NodeType {

    let before = new ListNode(-1);
    before.next = head;

    let pre = before;

    while (head && head.next){
        //循环条件，组内有元素且有两个元素

        //交换 head和head.next的指针
        let newHead = head.next;
        pre.next = newHead; //此处赋值只有在第一次循环时，将pre.next = before.next
        head.next = newHead.next;
        newHead.next = head;

        pre = head;

        head = head.next;
    }


    return pre.next;
}