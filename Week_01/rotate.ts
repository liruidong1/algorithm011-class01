/**
 *
 * @param nums 数组
 * @param k 移动次数
 */
function rotate(nums: Array<number>, k: number): void {

    let length = nums.length;
    k = k % length; //取模 方式k>n时进行重复移动

    //当前操作位置及该位置的值
    let current, currentValue,
        //要移动到的位置及该位置的原始值
        next, nextValue;

    //需要移动操作的次数，最大值为nums的长度
    let count = 0;

    for (let start = 0; count < length; start++) {
        current = start;
        currentValue = nums[start];

        do{
            next = (current + k) % length;
            nextValue = nums[next];
            nums[next] = currentValue;

            current = next;
            currentValue = nextValue;

            count ++;
        }while (current !== start)

    }
}
