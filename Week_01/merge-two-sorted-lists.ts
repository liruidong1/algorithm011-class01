class ListNode {
    val: number
    next: ListNode | null

    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

type NodeType = ListNode | null | undefined;

/**
 * 合并两个排序后的数组
 * @param l1
 * @param l2
 */
function mergeTwoLists(l1: NodeType | null, l2: NodeType | null): NodeType {

    if(!l1) return l2;
    if(!l2) return l1;

    if(l1.val < l2.val){
        l1.next = mergeTwoLists(l1.next,l2);
        return l1;
    }else{
        l2.next = mergeTwoLists(l2.next,l1);
        return l2;
    }
}
