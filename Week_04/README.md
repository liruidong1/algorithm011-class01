## 学习笔记


### 贪心算法
1. 贪心算法，在每一步的选择中都选中当前状态下最优的选择，从而达成全局最优的结果；
2. 贪心算法区别与动态规划，贪心算法的每一步确定后是无法回退的，动态规划则会保留前边的计算结果，并根据
前边的结果对当前的状态进行选择，是可以回退的；
3. 贪心算法可以解决`图中的最小生成树`、`哈夫曼编码`等问题；
4. 一旦一个问题可以通过贪心算法来解决，那么贪心算法就是这个问题的最好解决方法。

### 二分查找

1. 时间复杂度：O(log(n))
2. 使用前提：
    * 目标函数具有单调性（单调递增或递减），**数据有序**
    * 存在上下界
    * 能够通过索引访问
3. 二分查找的模板
   ```
    public int binarySearch(int[] array, int target) {
        int left = 0, right = array.length - 1, mid;
        while (left <= right) {
            mid = (right - left) / 2 + left;
    
            if (array[mid] == target) {
                return mid;
            } else if (array[mid] > target) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    
        return -1;
    }
   ```