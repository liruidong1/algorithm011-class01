/**
 * 求滑动窗口的最大值
 * @param nums
 * @param k
 */
function maxSlidingWindow(nums: number[], k:number) : number[] {

    if(k<=0) return [];
    if(k===1) return nums;

    let result: number[] = [];
    let deque: number[] = [];

    for(let i = 0; i < nums.length; i++){
        //这里需要明确记住的一点是每完成一次循环，队头一定指向了(i-k+1,i)中的最大值

        while (deque.length && deque[0] <= i-k){
            //当deque不为空时，当对头指向的位置 不在(i-k+1,i)范围内时，对头需要出队
            deque.shift();
        }

        while (deque.length && nums[deque[deque.length-1]] <= nums[i]){
            //当deque不为空时，当栈顶元素指向位置的值小于或等于当前(i)位置的值时，要进行出栈
            deque.pop();
        }

        deque.push(i);

        if(i >= k - 1){
            result.push(nums[deque[0]]);
        }
    }

    return result;

}