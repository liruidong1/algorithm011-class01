export class TreeNode {
    val: number;
    children: TreeNode[] = [];
    
    constructor(val) {
        this.val = val;
    }
    
}

function postOrder(root : TreeNode) : number[] {

    if(!root) return [];

    let result = [];
    let stack = [root];
    let cur: TreeNode;

    while (stack.length){
        cur = stack.pop();
        result.unshift(cur.val);
        for(let child of cur.children){
            stack.push(child);
        }
    }

    return result;
}


type TreeNodeType = TreeNode | null | undefined;

/**
 * 方法二 递归实现
 * @param root
 */
function postOrder2(root: TreeNode) :number[] {
    if(!root) return [];

    let result = [];
    traversal(root,result);
    return result;
}

function traversal(root: TreeNodeType, result:number[]){
    if(root != null){
        for(let child of root.children){
            traversal(child,result);
        }
        result.push(root.val);
    }
}