import {NodeType} from "./reverse-linked-list";

function detectCycle(head:NodeType): NodeType {

    if(!head || !head.next || !head.next.next) return null;

    let slow = head.next;
    let fast = head.next.next;


    while (fast){
        if(!fast.next || !fast.next.next) return null;
        if(slow === fast){
            break;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    //走到此处，表示存在环，且快慢指针均指向了交点

    fast = head;
    while (fast !== slow){
        fast = fast.next;
        slow = slow.next;
    }

    return fast;
}