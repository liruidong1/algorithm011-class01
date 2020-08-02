package dp.homework;

public class NumDecodings {

    /**
     * 1. 最多可以有两位
     * @param s
     * @return
     */
    public int numDecodings(String s) {

        if(s == null || "".equals(s) || s.startsWith("0")) {
            return 0;
        }

        //dp[i] 代表s的前i个字符串 可以解码的所有可能性
        int[] dp = new int[s.length()+1];
        dp[0] = 1;
        dp[1] = 1;

        char current, pre;

        for(int i = 2; i <= s.length(); i++){
            if((current = s.charAt(i-1)) == '0') {
                //如果当前位置为0，前一个位置必须要被使用才行，所以不增加可能性
                pre = s.charAt(i-2);
                if(pre == '1' || pre == '2') {
                    dp[i] = dp[i-2];
                } else {
                    return 0;
                }
            } else if((pre = s.charAt(i-2)) == '1' || pre == '2' && current >= '1' && current <= '6') {
                dp[i] = dp[i-1] + dp[i-2];
            } else {
                dp[i] = dp[i-1];
            }
        }

        return dp[s.length()];
    }

    public static void main(String[] args) {
        NumDecodings numDecodings = new NumDecodings();
        numDecodings.numDecodings("12");
    }

}
