package recursion;

import java.util.ArrayList;
import java.util.List;

public class GenerateParenthesis {

    /**
     * 生成括号
     * @param n 括号个数
     * @return 符合条件的组合
     */
    public List<String> generateParenthesis(int n) {

        List<String> result = new ArrayList<>(16);
        recursion(result, "", 0, 0, n);
        return result;
    }

    void recursion(List<String> result, String string, int left, int right, int n) {

        if(string.length() == 2*n) {
            result.add(string);
            return;
        }

        if(left < n) {
            //表示可以继续添加左括号
            recursion(result, string + "(", left+1, right, n);
        }

        if(right < left) {
            //表示可以继续添加右括号
            recursion(result, string + ")", left, right+1, n);
        }
    }

    public List<String> generateParenthesis2(int n) {
        List<String>[] dp = new ArrayList[n + 1];
        List<String> dp0 = new ArrayList<>();
        dp0.add("");
        dp[0] = dp0;
        for (int i = 1; i <= n; i++) {
            List<String> cur = new ArrayList<>();
            for (int m = 0; m < i; m++) {
                int k = i - 1 - m;
                List<String> str1 = dp[m];
                List<String> str2 = dp[k];
                for (String s1 : str1) {
                    for (String s2 : str2) {
                        cur.add("(" + s1 + ")" + s2);
                    }
                }
            }
            dp[i] = cur;
        }
        return dp[n];
    }

    public static void main(String[] args) {
        GenerateParenthesis generateParenthesis = new GenerateParenthesis();
        generateParenthesis.generateParenthesis2(3);
    }
}
