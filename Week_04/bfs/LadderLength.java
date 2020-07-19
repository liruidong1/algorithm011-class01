package bfs;

import java.util.*;

public class LadderLength {

    /**
     * 感觉使用深度优先算法较好
     */
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        if (!wordSet.contains(endWord)) {
            return 0;
        }

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);
        int changeCount = 1;

        int wordLength = beginWord.length();

        while (!queue.isEmpty()) {

            int size = queue.size();
            while (size-- > 0) {
                String current = queue.poll();
                assert current != null;

                char[] chars = current.toCharArray();
                for(int i = 0; i < wordLength; i++) {
                    char original = chars[i];
                    for(char _char = 'a'; _char <= 'z'; _char++) {
                        if(_char == original) {
                            continue;
                        }
                        chars[i] = _char;
                        String newString = new String(chars);
                        if(wordSet.contains(newString)) {
                            if(newString.equals(endWord)) {
                                return ++changeCount;
                            }
                            queue.offer(newString);
                            wordSet.remove(newString);
                        }
                    }
                    chars[i] = original;
                }

            }
            ++changeCount;
        }

        return 0;
    }

    public static void main(String[] args) {
        String beginWord = "hit";
        String endWord = "cog";
        List<String> wordList = new ArrayList<>();
        String[] wordListArray = new String[]{"hot", "dot", "dog", "lot", "log", "cog"};
        Collections.addAll(wordList, wordListArray);
        LadderLength solution = new LadderLength();
        int res = solution.ladderLength(beginWord, endWord, wordList);
        System.out.println(res);
    }

}
