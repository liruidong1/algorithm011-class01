/**
 * 删除数组中的重复项
 * @param nums
 */

function removeDuplicates(nums) {
    if (!nums || nums.length < 1) return 0;

    if (nums.length === 1) return 1;

    //快慢指针
    let slow = 0, fast = 1;

    while (fast < nums.length) {
        //当slow位置和fast位置的值不相等时，slow指针后移一位，并将fast位置的值赋值给slow位置
        if (nums[slow] !== nums[fast]) {
            ++slow;
            nums[slow] = nums[fast];
        }
        fast++;
    }

    return slow + 1;
}