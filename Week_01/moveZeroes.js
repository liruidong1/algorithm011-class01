/**
 * 1. 定义 i、j两个指针
 * 2. 正向遍历数组，
 * 3. j增加条件，当本次循环获取的值不为0时
 * 4. 非0值和0交换的条件：当本次循环的值不为0，且i和j不相等时
 */

function moveZeroes (nums) {
    let j = 0;
    let value;
    for (let i = 0; i < nums.length; i++) {
        if ((value = nums[i]) !== 0) {
            if (i > j) {
                nums[j] = value;
                nums[i] = 0;
            }
            j++;
        }
    }
}