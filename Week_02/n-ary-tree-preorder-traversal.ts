import {TreeNode} from "./n-ary-tree-postorder-traversal";

function preOrder(root : TreeNode) : number[] {

    if(!root) return [];

    let result = [];
    let stack = [root];
    let cur: TreeNode;

    while (stack.length){
        cur = stack.pop();
        result.push(cur.val);

        let children = cur.children;
        let length = children.length;

        for(let i = length - 1; i >=0 ; i--){
            stack.push(children[i]);
        }
    }

    return result;
}