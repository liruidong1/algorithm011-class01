# 学习笔记

# 1 不同路径2 的状态转移方程

## 1.1 二维数组定义dp方程
1. dp = [][], `dp[i][j]` 表示从起点(`obstacleGrid[0][0]`)到点P(`obstacleGrid[i][j]`)的所有路径
2. 分以下情况：
    * `obstacleGrid[i][j] === 1`，表示该点有障碍物，则`dp[i][j]=0`
    * `i === 0 && j === 0`，起点，`dp[i][j] === 1`
    * `i === 0`，第一行，`dp[i][j] === dp[i][j-1]`
    * `j === 0`，第一列，`dp[i][j] === dp[i-1][j]`
    * 对于普通行列，`dp[i][j] === dp[i-1][j] + dp[i][j-1]`
```js
function uniquePathsWithObstacles(obstacleGrid) {

    let m, n;

    if(!obstacleGrid || (m = obstacleGrid.length) < 1 || (n = obstacleGrid[0].length) < 1) return 0;

    let arr = Array.from({length: m}, ()=>[]);

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] === 1 ) {
                arr[i][j] = 0;
                continue;
            }
            if(i === 0 && j === 0) {
                arr[i][j] = 1;
            }else if( i === 0) {
                arr[i][j] = arr[i][j-1];
            }else if(j ===  0){
                arr[i][j] = arr[i-1][j];
            } else {
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            }
        }
    }

    return arr[m-1][n-1];
}
```

## 1.2 一维数组定义dp方程
1. dp = []，根据1.1可以简化存储结构为1维数组，`dp[j]`表示从起点(`obstacleGrid[0][0]`)到点P(`obstacleGrid[i][j]`)，但是此处i为虚拟的
2. 当开始遍历下一行的节点时，dp存储的刚好是上一行各个点到原点的所有路径数，根据 1.1 的推导，可以分析出如下情况：
    * `obstacleGrid[0][0] === 0`，起点位置有障碍物，则`dp[j]=0`，然后开始进入循环
    * `obstacleGrid[i][j] === 1`，表示该点有障碍物，则`dp[j]=0`
    * 当`j === 0`时，`dp[j]`保持不变
    * 当`j !== 0`时，`dp[j] = dp[j] + dp[j-1]`
```js
function uniquePathsWithObstacles(obstacleGrid) {

    let m = obstacleGrid.length, n = obstacleGrid[0].length;
    let dp = Array.from({length: n}, (val)=>0)


    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < m; ++i) {
        for (let j = 0; j < n; ++j) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j - 1 >= 0) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[n - 1];
}
```    