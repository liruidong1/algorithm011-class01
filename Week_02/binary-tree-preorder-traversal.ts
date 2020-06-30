//前序遍历

class TreeNode {
    val: number
    left: TreeNodeType
    right: TreeNodeType

    constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
        this.val = val || 0
        this.left = left || null
        this.right = right || null
    }

}

type TreeNodeType = TreeNode | null | undefined;

/**
 * 解法一 使用递归，该方法的解法思路最简洁明白
 * @param root
 */
function preorderTraversal(root: TreeNodeType): number[] {

    if(!root) return [];
    let result:number[] = [];
    traversal(root,result);
    return result;
}

function traversal(root: TreeNodeType,result:number[]){
    if(root != null){
        result.push(root.val);
        traversal(root.left, result);
        traversal(root.right, result);
    }
}

/**
 * 解法二 使用迭代
 * @param root
 */
function preorderTraversal2(root: TreeNodeType): number[] {
    if(!root) return [];
    let result:number[] = [];

    let rightStack:TreeNode[] = [];

    let cur:TreeNodeType = root;
    //栈不为空，或者当前节点不为空
    while (cur || rightStack.length){
        if(cur){
            result.push(cur.val);
            if(cur.right) rightStack.push(cur.right);
            cur = cur.left ? cur.left : rightStack.length ? rightStack.pop() : null;
        }else{
            cur = rightStack.pop();
        }

    }

    // while (cur){
    //     result.push(cur.val);
    //     if(cur.right) rightStack.push(cur.right);
    //     cur = cur.left;
    //     if(!cur && rightStack.length){
    //         cur = rightStack.pop();
    //     }
    // }

    return result;
}
