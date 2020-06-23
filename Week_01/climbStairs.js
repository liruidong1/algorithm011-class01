/**
 * 爬楼梯 解题思路：f(n) = f(n-1) + f(n-2)
 * 较低数量级可以采用在arr中初始化更多的解来降低时间复杂度
 */

function climbStairs(n) {
    let arr = [];
    arr.push(1, 1, 2, 3, 5);
    for (let index = 5; index <= n; index++) {
        arr.push(arr[index - 1] + arr[index - 2])
    }
    return arr[n];
}

// function climbStairs(n) {
//     let arr = [1,1,2];
//     if(n > 2){
//         stairsCache(n,arr);
//     }
//     return arr[n];
// }
//
// function stairsCache(n,arr) {
//     if(arr[n] === undefined){
//         arr[n] = stairsCache(n-2,arr) + stairsCache(n-1,arr);
//     }
//
//     return arr[n];
// }