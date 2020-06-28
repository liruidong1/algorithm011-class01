//栈和双指针两种解法

/**
 * 双指针解法
 * 一个柱子最大的储水量由它左右边界最小的高度决定，体积是最小高度减去柱子本身高度
 * @param height
 */
function trap(height: number[]): number {
    let length;
    if ((length = height.length) < 3) return 0;
    let area = 0;
    let left = 0, right = length - 1;
    let leftMax = height[left], rightMax = height[right];

    while (left < right) {

        //注意此处的比较条件，是判定当前左右指针位置的高度，哪个方向高，就向高的方向遍历
        if (height[left] < height[right]) {
            height[left] >= leftMax ? leftMax = height[left++] : area += leftMax - height[left++];
        } else {
            height[right] >= rightMax ? rightMax = height[right--] : area += rightMax - height[right--];
        }
    }

    return area;

}

/**
 * 栈解法
 * 单调递减栈，遇到新的即将入栈的元素大于栈顶元素时，出栈并累加高度
 * @param height
 */
function trap2(height: number[]): number {

    let length;
    if ((length = height.length) < 3) return 0;
    let i = 0, area = 0;
    let stack: number[] = [];
    let top:number | undefined;
    let stackLength:number | undefined;
    while (i < length) {
        while ((stackLength = stack.length) && (height[top = stack[stackLength-1]]) < height[i]){
            //当栈不为空，且栈顶元素小于当前位置元素时，出栈
            top = stack.pop() as number;
            //需要再次判定栈是不是空
            if(!(stackLength = stack.length)){
                //栈空了，表示没了左边界，盛不住雨水
                break;
            }

            //求面积
            let newTop = stack[stackLength-1];
            let width = i - newTop - 1;
            let minHeight = Math.min(height[i],height[newTop]) - height[top];

            area += width * minHeight;
        }

        stack.push(i++);
    }


    return area;
}