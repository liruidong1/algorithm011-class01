import {NodeType} from "./reverse-linked-list";

function hasCycle(head:NodeType): boolean {

    if(!head || !head.next || !head.next.next) return false;

    let slow = head.next;
    let fast = head.next.next;

    while (fast){
        if(!fast.next){
            return false;
        }

        if(slow === fast){
            return true;
        }

        slow = slow.next;
        fast = fast.next;
    }

    return false;

}