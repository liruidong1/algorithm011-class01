package bfs;

public class NumIslands {

    public int numIslands(char[][] grid) {
        int rows, cols, count = 0;
        if(grid != null && (rows = grid.length) > 0 && (cols = grid[0].length) > 0){

            for(int row = 0; row < rows; row++) {
                for(int col = 0; col < cols; col++) {
                    if(grid[row][col] == '1') {
                        bfsMarking(grid, row, col, rows, cols);
                        count++;
                    }
                }
            }

        }

        return count;
    }

    private void bfsMarking(char[][] grid, int row, int col, int rows, int cols) {
        if(row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] == '0') {
            return;
        }
        grid[row][col] = '0';
        bfsMarking(grid, row + 1, col, rows, cols);
        bfsMarking(grid, row - 1, col, rows, cols);
        bfsMarking(grid, row, col + 1, rows, cols);
        bfsMarking(grid, row, col - 1, rows, cols);
    }

}
