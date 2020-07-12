package recursion;

import entity.TreeNode;

import java.util.HashMap;
import java.util.Map;

public class BuildTree {

    public static TreeNode buildTree(int[] preorder, int[] inorder) {
        int length;

        if (preorder == null || inorder ==  null || (length = preorder.length) != inorder.length) {
            return null;
        }

        Map<Integer, Integer> cache = new HashMap<>(length);
        for(int i = 0; i < length; i++){
            cache.put(inorder[i], i);
        }

        return build(preorder, inorder, cache, 0 , length - 1, 0, length - 1);
    }

    public static TreeNode build(int[] preOrder, int[] inOrder,
                                 Map<Integer, Integer> cache, int preLeft, int preRight, int inLeft, int inRight) {
        if (preLeft > preRight) {
            return null;
        }

        //TODO 前序遍历的第一个元素为根节点
        int inRoot = cache.get(preOrder[preLeft]);
        //TODO 构建根节点
        TreeNode root = new TreeNode(preOrder[preLeft]);

        //TODO 计算左子树长度
        int leftTreeCount = inRoot - inLeft;
        //TODO 构建左子树，传入左子树的前序和中序遍历的起点和终点
        root.left = build(preOrder, inOrder, cache,
                preLeft + 1, preLeft + leftTreeCount, inLeft, inRoot - 1);
        //TODO 构建右子树，传入右子树的前序和中序遍历的起点和终点
        root.right = build(preOrder, inOrder, cache,
                preLeft + leftTreeCount + 1 ,preRight, inRoot + 1, inRight);

        return root;
    }

}
