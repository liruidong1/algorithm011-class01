package recursion;

import java.util.HashMap;
import java.util.Map;

public class IsValidSudoku {

    public boolean isValidSudoku(char[][] board) {
        if(board == null) {
            return false;
        }


        int len = board.length;

        Map<Integer,Integer>[] rowMap = new HashMap[len],
            colMap = new HashMap[len],
            blockMap = new HashMap[len];

        for (int i = 0; i < len; i++) {
            rowMap[i] = new HashMap<Integer, Integer>();
            colMap[i] = new HashMap<Integer, Integer>();
            blockMap[i] = new HashMap<Integer, Integer>();
        }

        for(int row = 0; row < len; row++) {
            for(int col = 0; col < len; col++) {
                char _char = board[row][col];
                if(_char != '.') {
                    int number = (int)_char;

                    int borderIndex = (row/3)*3 + col/3;

                    rowMap[row].put(number, rowMap[row].getOrDefault(number,0) + 1);
                    colMap[col].put(number, colMap[col].getOrDefault(number,0) + 1);
                    blockMap[borderIndex].put(number, blockMap[borderIndex].getOrDefault(number,0) + 1);

                    if (rowMap[row].get(number) > 1 || colMap[col].get(number) > 1 || blockMap[borderIndex].get(number) > 1) {
                        return false;
                    }

                }
            }
        }

        return true;

    }
}
