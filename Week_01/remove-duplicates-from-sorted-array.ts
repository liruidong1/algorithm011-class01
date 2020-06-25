/**
 * 删除给定<b>排序数组</b>中重复的元素
 * @param nums
 */
function removeDuplicates(nums: number[]): number {
    let length;
    if (!nums || (length = nums.length) < 2) return length;

    //使用快慢指针，slow，quick
    let slow = 0, quick = 1;

    while (quick < length) {
        if (nums[quick] !== nums[slow]) {
            //当快慢指针对应的值不相等，慢指针加1，并赋值为快指针处的数值
            nums[++slow] = nums[quick];
        }
        quick++;
    }

    let result = slow + 1;

    // nums.splice(result); //删除数组result及其之后的元素

    return result;
}