import {TreeNode} from "./n-ary-tree-postorder-traversal";

function levelOrder(root : TreeNode) : number[][] {
    if(!root) return [];
    let result = [];

    let queue = [root];
    let cur: TreeNode;
    while(queue.length){
        let tempStack = [];
        let _result = [];
        while((cur = queue.shift())){
            _result.push(cur.val);
            let children = cur.children;
            if(children){
                tempStack.push(...children);
            }
        }
        result.push(_result);

        queue = tempStack;
    }

    return result;
}