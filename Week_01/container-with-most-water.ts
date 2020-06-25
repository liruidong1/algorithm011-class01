/**
 * 寻找面积最大的两个值
 * 双指针法
 * @param nums
 */
function maxArea(nums: number[]): number {
    let length;
    if (!nums || (length = nums.length) < 2) return 0;
    if (length === 2) {
        return Math.min(nums[0], nums[1]);
    }

    let left = 0, right = length-1, max = 0, area = 0, height;

    while (left<right){
        //取短边作为容器的高，并且保留长边，短边指针向中间移动，后置自增自减操作保证先取到值后短边指针向内移动
        height = nums[left] < nums[right] ? nums[left++] : nums[right--];
        //由于上一步自增或自减操作，此处左右指针的差要加1
        area = (right - left + 1) * height;
        max = Math.max(area,max);
    }

    return max;
}