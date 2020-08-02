package dp.homework;

public class MaximalSquare {

    public int maximalSquare(char[][] matrix) {

        int maxSide = 0;
        if (matrix == null || matrix.length == 0 || matrix[0].length == 0) {
            return maxSide;
        }

        int rows = matrix.length;
        int cols = matrix[0].length;

        //增加一行一列可以省略第一行和第一列的条件判断
        int[][] dp = new int[rows+1][cols+1];

        for(int row = 1; row <= rows; row++) {
            for(int col = 1; col <= cols; col++) {
                char _char = matrix[row][col];
                if(_char == '1') {
                    dp[row][col] = Math.min(dp[row][col-1], Math.min(dp[row-1][col], dp[row-1][col-1])) + 1;
                    maxSide = Math.max(dp[row][col],maxSide);
                }
            }
        }

        return maxSide * maxSide;

    }

}
