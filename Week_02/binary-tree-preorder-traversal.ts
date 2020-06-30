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

type TreeNodeType = TreeNode | null;

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

