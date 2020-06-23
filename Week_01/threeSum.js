function threeSum(nums) {

    if (!nums || nums.length < 3) return [];

    nums.sort((a, b) => a - b);

    let result = [], sum = 0;

    for (let k = 0; k < nums.length - 2; k++) {
        if (nums[k] > 0) break; //排序过后，取值大于0，和将不会再等于0
        if (nums[k] === nums[k - 1]) continue; //与前一种情况相同，忽略

        let left = k + 1, right = nums.length - 1;

        while (left < right) {
            sum = nums[k] + nums[left] + nums[right];
            if (sum > 0) {
                //表示 nums[left] + nums[right]过大，需要右指针向左移动，当新位置和原位置数值相等时需要继续左移
                while (left < right && nums[right] === nums[--right]) ;
            } else if (sum < 0) {
                //表示 nums[left] + nums[right]小了，需要左指针向右移动，当新位置和原位置数值相等时需要继续右移
                while (left < right && nums[left] === nums[++left]) ;
            } else {
                //和等于0
                result.push([nums[k], nums[left], nums[right]]);
                while (left < right && nums[right] === nums[--right]) ;
                while (left < right && nums[left] === nums[++left]) ;
            }
        }
    }

    return result;

}