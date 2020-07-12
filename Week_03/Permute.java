package recursion;

import java.util.ArrayDeque;
import java.util.ArrayList;
import java.util.Deque;
import java.util.List;

public class Permute {

    private final List<List<Integer>> result = new ArrayList<>();

    private int length;

    public List<List<Integer>> permute(int[] nums) {
        if(nums == null || (length = nums.length) < 1){
            return new ArrayList<>();
        }

        trace(nums, new ArrayDeque<>(), new boolean[length]);
        return result;
    }

    public void trace(int[] nums, Deque<Integer> cache, boolean[] used){
        if(cache.size() == length){
            result.add(new ArrayList<>(cache));
            return;
        }

        for(int i = 0; i < length; i++){
            if(!used[i]){
                cache.addLast(nums[i]);
                used[i] = !used[i];
                trace(nums, cache, used);
                used[i] = !used[i];
                cache.removeLast();
            }
        }
    }

}
