/**
 * 求nums中三个数之和等于0
 * 思路：对数组先进性排序，然后使用双指针方法进行左右夹逼计算和
 * @param nums
 */
function threeSum(nums: number[]): number[][] {
    let length;
    if (!nums || (length = nums.length) < 3) return [];

    //排序
    nums.sort((a, b) => a - b);

    let left, right, result = [], sum, val;
    for (let start = 0; start < length - 2; start++) {
        val = nums[start];
        if (val > 0) break; //取值大于0后无需继续循环
        if (start > 0 && val === nums[start - 1]) continue; //前后相，无需进行此次循环

        left = start + 1;
        right = length - 1;

        while (left < right) {
            sum = val + nums[left] + nums[right];
            if (sum < 0) {
                // nums[left]+nums[right] 过小，需要左指针向中心移动，如果移动后与移动前位置的值相等，需要继续移动，同时需要保证left<right
                while (left < right && nums[left] === nums[++left]) ;
                // same as
                // while (left < right && nums[left] === nums[left+1]){
                //     ++left;
                // }
            } else if (sum > 0) {
                // nums[left]+nums[right] 过大，需要右指针向中心移动，如果移动后与移动前位置的值相等，需要继续移动，同时需要保证left<right
                while (left < right && nums[right] === nums[--right]) ;
            } else {
                result.push([val,nums[left],nums[right]]);
                //过滤重复的数据
                while (left < right && nums[right] === nums[--right]) ;
                while (left < right && nums[left] === nums[++left]) ;
            }
        }

    }

    return result;
}