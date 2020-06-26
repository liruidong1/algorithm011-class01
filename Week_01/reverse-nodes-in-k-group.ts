import {NodeType,ListNode} from "./reverse-linked-list";

interface ReturnType {
    head: NodeType;
    tail: NodeType
}

function reverseKGroup(head: NodeType, k: number) {

    if(!head || !head.next) return head;

    //hair作为head的前置节点，避免掉了head特殊的边界问题
    let hair = new ListNode(-1);
    hair.next = head;

    let pre = hair;

    while (head){
        let tail = pre;

        for(let i = 0; i < k; i++){
            tail = tail.next;
            if(!tail){
                //不够k个节点，直接返回
                return hair.next;
            }
        }

        //此时head到tail为要反转的k个节点
        let result = reverse(head,tail);
        //反转过后，tail->next指向的是正确的后继节点
        head = result.head;
        tail = result.tail;
        //第一次循环时 pre.next === hair.next
        pre.next = head;
        //需要遍历下一次的节点 tail.next
        pre = tail;
        head = tail.next;
    }

    return hair.next;

}

function reverse(head: NodeType, tail: NodeType) : ReturnType{

    let pre = tail.next;
    let cur = head;
    let temp;

    while (cur !== tail){
        //cur === tail 已经遍历到尾部了

        //指向下次循环需要访问的节点
        temp = cur.next;
        cur.next = pre;
        //当前的节点将作为下次循环节点的next
        pre = cur;
        cur = temp;
    }

    return {
        tail: head,
        head: tail
    }
}