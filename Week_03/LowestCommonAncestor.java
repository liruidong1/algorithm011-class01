package recursion;

import entity.TreeNode;

public class LowestCommonAncestor {

    /**
     * 二叉树的最近公共祖先
     *
     * //TODO 该方法判断目标结点是否为当前结点（root）的子代结点，包含一个就算
     */
    public TreeNode lowestCommonAncestor(TreeNode root, TreeNode p, TreeNode q) {

        if (root == null) {
            return null;
        }

        if (root.equals(p) || root.equals(q)) {
            return root;
        }

        TreeNode lTree = lowestCommonAncestor(root.left, p, q);
        TreeNode rTree = lowestCommonAncestor(root.right, p, q);

        if (lTree != null && rTree != null) {
            //TODO 结点分别存在两个子树中，那只能是当前结点为公共祖先
            return root;
        } else if (lTree != null) {
            //TODO 此时rTree必定为空，证明lTree即为公共祖先，
            //TODO 注意lTree不一定是root.left
            return lTree;
        } else {
            return rTree;
        }

    }
}
