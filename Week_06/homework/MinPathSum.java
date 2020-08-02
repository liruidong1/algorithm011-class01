package dp.homework;

public class MinPathSum {

    //方法一二维数组
    public int minPathSum(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[][] dp = new int[rows+1][cols+1];

        for(int row = rows - 1; row >= 0; row--){
            for(int col =cols - 1; col >= 0; col--){
                int bottom = dp[row+1][col];
                int right = dp[row][col+1];
                int min = 0;
                if(row == rows-1) {
                    min = right;
                }else if(col == cols - 1) {
                    min = bottom;
                }else {
                    min = Math.min(right,bottom);
                }
                dp[row][col] = grid[row][col] + min;
            }
        }

        return dp[0][0];

    }

    //方法一二 一维数组
    public int minPathSum1(int[][] grid) {
        int rows = grid.length;
        int cols = grid[0].length;

        int[] dp = new int[cols];
        dp[cols-1] = grid[rows-1][cols-1];

        for(int col = cols - 2; col >= 0; col--) {
            dp[col] = dp[col+1] + grid[rows-1][col];
        }

        for(int row = rows - 2; row >= 0; row--) {
            for(int col = cols - 1; col >= 0; col--) {
                if(col == cols - 1) {
                    dp[col] += grid[row][col];
                }else{
                    dp[col] = Math.min(dp[col+1], dp[col]) + grid[row][col];
                }

            }
        }

        return dp[0];

    }

    public static void main(String[] args) {
        MinPathSum minPathSum = new MinPathSum();

        int[][] array = new int[3][3];
        array[0] = new int[]{1,3,1};
        array[1] = new int[]{1,5,1};
        array[2] = new int[]{4,2,1};

        minPathSum.minPathSum(array);
    }
}
