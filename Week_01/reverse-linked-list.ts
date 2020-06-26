export class ListNode {
    val: number
    next: NodeType

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

export type NodeType = ListNode | null | undefined;

function reverseList(head: NodeType): NodeType {
    if (!head) {
        return head;
    }

    let cur: NodeType = head, pre: NodeType = null, temp: NodeType;

    while (cur != null) {
        temp = cur.next;
        cur.next = pre;
        pre = cur;
        cur = temp;
    }

    return pre;
}

//递归方法
function reverseList2(head: NodeType) : NodeType {

    if(!head || !head.next){
        //!head 标识为空链表 ！head.next表示为链表尾节点
        return head;
    }

    let cur = reverseList2(head.next);
    head.next.next = head;
    head.next =null;
    return cur;
}