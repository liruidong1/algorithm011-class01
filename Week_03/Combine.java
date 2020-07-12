package recursion;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class Combine {

    private final List<List<Integer>> result = new ArrayList<>();

    public List<List<Integer>> combine(int n, int k) {
        if(k < 1 || n < k){
            return result;
        }
        trace(n, k, 1, new ArrayDeque<>());
        return result;
    }

    public void trace(int n, int k, int start, Deque<Integer> stack){
        if(stack.size() == k){
            //TODO 够 k 个加入结果集
            result.add(new ArrayList<>(stack));
            return;
        }

        //TODO 这里可以优化一个剪枝操作，可以砍掉不满足条件的分支
        //TODO 当栈中有m=stack.size()个元素时，可以放k-m个元素，所以必须保证从i开始有k-m个元素，
        //TODO 所以i最大只能到 n -（k - m）+ 1, n本身也算一个，所以要+1，所以 i <= n - (k - m) + 1
        for (int i = start; i < n + 1; i++){
            stack.addLast(i);
            trace(n, k, i + 1, stack);
            stack.removeLast();
        }
    }

}
