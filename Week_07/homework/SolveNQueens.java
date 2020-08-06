package recursion;

import java.util.ArrayList;
import java.util.List;

public class SolveNQueens {

    private int[] rows, queens;

    private int[] uphills;

    private int[] downhills;

    private int n;

    List<List<String>> output = new ArrayList<>();

    public List<List<String>> solveNQueens(int n) {
        this.n = n;
        rows = new int[n];
        uphills = new int[2*n - 1];
        downhills = new int[2*n - 1];
        queens = new int[n];

        backtrack(0);

        return output;
    }

    public void addSolution() {
        List<String> solution = new ArrayList<String>();
        for (int i = 0; i < n; ++i) {
            int col = queens[i];
            StringBuilder sb = new StringBuilder();
            for(int j = 0; j < col; ++j) {
                sb.append(".");
            }
            sb.append("Q");
            for(int j = 0; j < n - col - 1; ++j) {
                sb.append(".");
            }
            solution.add(sb.toString());
        }
        output.add(solution);
    }


    private void backtrack(int row) {
        for (int col = 0; col < n; col++) {
            if (isNotUnderAttack(row, col)) {
                pushQueen(row, col);

                if (row + 1 == n) {
                    addSolution();
                }else {
                    backtrack(row + 1);
                }

                removeQueen(row, col);
            }
        }
    }

    private boolean isNotUnderAttack(int row, int col) {
        return (rows[col] + uphills[row + col] + downhills[row - col + n - 1]) == 0;
    }

    private void pushQueen(int row, int col) {
        queens[row] = col;
        rows[col] = 1;
        uphills[row + col] = 1;
        downhills[row - col + n - 1] = 1;
    }

    private void removeQueen(int row, int col) {
        queens[row] = 0;
        rows[col] = 0;
        uphills[row + col] = 0;
        downhills[row - col + n - 1] = 0;
    }

}
