package recursion;

import java.util.*;

public class PermuteUnique {

    private final List<List<Integer>> result = new ArrayList<>();

    private int length;

    public List<List<Integer>> permuteUnique(int[] nums) {

        if(nums == null || (length = nums.length) < 1){
            return new ArrayList<>();
        }
        //TODO 注意排序
        Arrays.sort(nums);

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
                //TODO 剪枝，重复的条件是本次遍历和上次遍历了相同的值，且上次的值未使用，
                //TODO 注意防止数组越界
                if (i > 0 && nums[i] == nums[i - 1] && !used[i - 1]) {
                    continue;
                }

                cache.addLast(nums[i]);
                used[i] = !used[i];
                trace(nums, cache, used);
                used[i] = !used[i];
                cache.removeLast();
            }
        }
    }

}
