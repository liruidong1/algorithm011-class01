package bfs;

import java.util.*;

public class FindLadders {

    /**
     * 单词接龙 II
     */
    public List<List<String>> findLadders(String beginWord, String endWord, List<String> wordList) {
        Set<String> wordSet = new HashSet<>(wordList);
        List<List<String>> result = new ArrayList<>();
        if(!wordList.contains(endWord)) {
            return result;
        }

        //bfs查询最短路径
        Map<String, Set<String>> successors = new HashMap<>();
        if(bfs(wordSet, beginWord, endWord, successors)){
            //获得路径后dfs构建路径，多叉树
            Deque<String> path = new ArrayDeque<>();
            path.addLast(beginWord);

            dfs(result, successors, beginWord, endWord, path);
        }

        return result;
    }

    public boolean bfs(Set<String> wordSet, String beginWord, String endWord, Map<String, Set<String>> successors) {

        wordSet.remove(beginWord);

        Queue<String> queue = new LinkedList<>();
        queue.offer(beginWord);

        int wordLength = beginWord.length();
        boolean found = false;

        //在每一层循环中我们需要保存所有满足条件的接龙，在本层处理完后才将相应的下一层元素入队
        Set<String> nextSet = new HashSet<>();

        while (!queue.isEmpty()) {

            int loop = queue.size();
            while(loop-- > 0) {
                String current = queue.poll();
                assert current != null;

                char[] chars = current.toCharArray();
                for(int i = 0; i < wordLength; i++) {
                    char original = chars[i];
                    for(char _char = 'a'; _char <= 'z'; _char++) {
                        if(original == _char){
                            continue;
                        }
                        chars[i] = _char;
                        String newWord = new String(chars);
                        if(wordSet.contains(newWord)) {
                            successors.computeIfAbsent(current, (a) -> new HashSet<>());
                            successors.get(current).add(newWord);

                            if(newWord.equals(endWord)) {
                                found = true;
                            }else {
                                nextSet.add(newWord);
                            }
                        }

                    }
                    chars[i] = original;
                }

            }

            if(found){
                break;
            }

            //移除已访问的结点
            wordSet.removeAll(nextSet);
            queue.addAll(nextSet);
            nextSet.clear();
        }

        return found;
    }

    public void dfs(List<List<String>> result, Map<String, Set<String>> successors, String beginWord, String endWord, Deque<String> path){
        if (beginWord.equals(endWord)) {
            result.add(new ArrayList<>(path));
            return;
        }

        if (!successors.containsKey(beginWord)) {
            return;
        }

        Set<String> successorWords = successors.get(beginWord);
        for (String nextWord : successorWords) {
            path.addLast(nextWord);
            dfs(result, successors, nextWord, endWord, path);
            path.removeLast();
        }

    }

    public static void main(String[] args) {
        List<String> wordList = new ArrayList<>();
        wordList.add("hot");
        wordList.add("dot");
        wordList.add("dog");
        wordList.add("lot");
        wordList.add("log");
        wordList.add("cog");


        FindLadders solution = new FindLadders();
        String beginWord = "hit";
        String endWord = "cog";
        List<List<String>> res = solution.findLadders(beginWord, endWord, wordList);
        System.out.println(res);
    }



//    public static void main(String[] args) {
//        String[] words = {"ted","tex","red","tax","tad","den","rex","pee"};
//        List<String> wordList = new ArrayList<>();
//        Collections.addAll(wordList, words);
//
//        FindLadders solution = new FindLadders();
//        String beginWord = "red";
//        String endWord = "tax";
//        List<List<String>> res = solution.findLadders(beginWord, endWord, wordList);
//        System.out.println(res);
//    }
}
