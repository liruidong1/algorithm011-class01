/**
 * 爬楼梯
 */
type ClimbStairs = (stairsCount:number) => number;

/**
 * 获取爬到n层楼梯方法总数
 * 使用数组存储，初始化0-2阶楼梯的爬行方法，分别为1、1、2，从第三级开始计算存储为 [n-1] + [n-2]中方法
 * 时间复杂度O(n)
 * 空间复杂度O(n)
 * @param stairsCount 楼梯总数
 */
const climbStairs:ClimbStairs = function(stairsCount: number) {

    let nums: number[] = [];
    nums.push(1, 1, 2);

    for (let i = 3; i <= stairsCount; i++) {
        nums.push(nums[i - 2] + nums[i - 1]);
    }

    return nums[stairsCount];

}


/**
 * 递归获取爬到n层楼梯的方法，加入数据缓存，防止重复计算
 * @param stairsCount
 */
const climbStairs2: ClimbStairs = function (stairsCount) {

    let nums: Array<number> = [1,1,2];

    function climb(count:number, nums: number[]) :number {
        if(!nums[count]){
            nums.push(climb(count-2, nums)+climb(count-1, nums));
        }

        return nums[count];
    }

    if(stairsCount > 2){
        climb(stairsCount,nums);
    }

    return nums[stairsCount];

}