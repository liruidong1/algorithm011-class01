package trie;

public class Trie {

    private static class TrieNode {

        TrieNode[] nodes;

        boolean isEnd = false;

        public TrieNode(){
            this.nodes = new TrieNode[26];
        }

        TrieNode getNode(char key) {
            return nodes[key - 'a'];
        }

        boolean containsKey(char key) {
            return getNode(key) != null;
        }

        TrieNode pushKey(char key) {
            TrieNode node = getNode(key);
            if(node == null){
                node = new TrieNode();
                nodes[key-'a'] = node;
            }

            return node;
        }
    }

    private final TrieNode root;

    public Trie() {
        root = new TrieNode();
    }

    /** Inserts a word into the trie. */
    public void insert(String word) {
        TrieNode node = root;
        for(char key : word.toCharArray()) {
            node = node.pushKey(key);
        }
        node.isEnd = true;
    }

    /** Returns if the word is in the trie. */
    public boolean search(String word) {
        TrieNode node = root;
        for(char key : word.toCharArray()) {
            if(node.containsKey(key)) {
                node = node.getNode(key);
            }else {
                return false;
            }
        }

        return node != null && node.isEnd;
    }

    /** Returns if there is any word in the trie that starts with the given prefix. */
    public boolean startsWith(String prefix) {
        TrieNode node = root;
        for(char key : prefix.toCharArray()) {
            if(node.containsKey(key)) {
                node = node.getNode(key);
            }else {
                return false;
            }
        }

        return node != null;
    }

}
