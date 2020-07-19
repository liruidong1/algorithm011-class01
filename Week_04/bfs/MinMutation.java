package bfs;


import java.util.*;

public class MinMutation {

    /**
     * 最小基因变化
     * //TODO 理解题意：起始基因的每次变化需要在基因库里才是能变的
     * //TODO 每次变换结果在基因库中要在基因库中存在且未被访问过才会加入队列和访问库中
     * //TODO 编译后可以检测下是否和目标基因一致，可提前返回
     */
    public static int minMutation(String start, String end, String[] bank) {
        if(start.equals(end)) {
            return 0;
        }
        Set<String> bankSet = new HashSet<>(Arrays.asList(bank)), visited = new HashSet<>();
        char[] charSet = new char[]{'A', 'C', 'G', 'T'};
        int step = 0;
        Queue<String> queue = new LinkedList<>();
        queue.offer(start);
        visited.add(start);
        while(!queue.isEmpty()) {
            int size = queue.size();
            while(size-- > 0) {
                String curr = queue.poll();
                if(curr.equals(end)) {
                    return step;
                }
                char[] currArray = curr.toCharArray();
                for(int i = 0; i < currArray.length; i++) {
                    char old = currArray[i];
                    for(char c: charSet) {
                        if(old == c) {
                            if(!visited.contains(curr) && bankSet.contains(curr)) {
                                visited.add(curr);
                            }
                            continue;
                        }
                        currArray[i] = c;
                        String next = new String(currArray);

                        if(next.equals(end)  && bankSet.contains(next)) {
                            return ++step;
                        }

                        if(!visited.contains(next) && bankSet.contains(next)) {
                            visited.add(next);
                            queue.offer(next);
                        }
                    }
                    currArray[i] = old;
                }
            }
            step++;
        }
        return -1;
    }

    public static void main(String[] args) {
        minMutation("AACCGGTT","AACCGCTA", new String[]{"AACCGGTA","AACCGCTA","AAACGGTA"});
    }

}
