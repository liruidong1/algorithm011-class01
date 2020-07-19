package tree;

import entity.TreeNode;

import java.util.*;

/**
 * 二叉树的层序遍历
 */
public class LevelOrder {

    public List<List<Integer>> levelOrder(TreeNode root) {
        List<List<Integer>> result = new ArrayList<>();
        if(root != null) {
//            bfs(new LinkedList<>(), root, result);
            dfs(root, result, 0);
        }
        return result;
    }

    //TODO 深度优先搜索
    public void dfs(TreeNode root, List<List<Integer>> result, int level) {
        if(result.size() - 1 < level) {
            result.add(new ArrayList<>());
        }

        result.get(level).add(root.val);

        if(root.left != null) {
            dfs(root.left, result, level + 1);
        }

        if(root.right != null) {
            dfs(root.right, result, level + 1);
        }

    }


    //TODO 广度度优先搜索
    public void bfs(Queue<TreeNode> queue, TreeNode root, List<List<Integer>> result) {
        if(root != null) {
            queue.add(root);
        }

        TreeNode node;

        while (!queue.isEmpty()) {
            List<Integer> _result = new ArrayList<>();
            Queue<TreeNode> _queue = new LinkedList<>();

            while ((node = queue.poll()) != null){
                _result.add(node.val);
                if(node.left != null) {
                    _queue.offer(node.left);
                }
                if(node.right != null) {
                    _queue.offer(node.right);
                }
            }
            queue = _queue;
            result.add(_result);
        }

    }

}
