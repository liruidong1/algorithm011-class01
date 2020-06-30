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
function inorderTraversal(root: TreeNodeType): number[] {

    if(!root) return [];
    let result:number[] = [];
    traversal(root,result);
    return result;
}

function traversal(root: TreeNodeType,result:number[]){
    if(root != null){
        traversal(root.left, result);
        result.push(root.val);
        traversal(root.right, result);
    }
}

/**
 * 解法二 使用迭代，使用栈作为数据结构
 * @param root
 */
function inorderTraversal2(root: TreeNodeType): number[] {
    if(!root) return [];

    let stack: TreeNode[] = [];
    let result: number[] = [];

    let cur:TreeNodeType = root;

    //当节点不为空或者栈中有元素时，都应该继续遍历
    while (cur || stack.length){
        while (cur){
            //中序遍历，需要先找到结点的最左子节点
            stack.push(cur);
            cur = cur.left;
        }
        cur = stack.pop() as TreeNode;
        result.push(cur.val);
        cur = cur.right;
    }

    return result;
}