# 学习笔记

### 树的遍历

1. 深度优先搜索时，递归可以解决前中后序遍历的问题，迭代方案调用栈的先进后出特性实现，当遍历顺序不一样时，注意子节点的入栈顺序。
2. 广度优先搜索时，使用迭代算法调用方队列的先进先出特性进行实现。
3. 二叉树的遍历，迭代实现，均使用了栈的数据结构
    - 1). 中序遍历（左->根->右），循环找最远的左节点，经过的的节点依次入栈，找到后开始出栈，存储出栈节点的值，然后迭代出栈节点的右节点
    ```
        stack = [], cur = root, result = [];
        while(cur || stack.length){
            while(cur){ //寻找该节点最左节点
                stack.push(cur);
                cur = cur.left;
            }
            
            cur = cur.pop();
            result.push[cur.val];
            cur = cur.right;
        }
    ```
    - 2). 前序遍历（根->左->右），从根节点开始遍历，遇到节点就存储值，然后入栈右节点，迭代左节点，
    ```
        stack = [], cur = root, result = [];
        while(cur || stack.length){
            if(cur){
                result.push[cur.val];
                if(cur.right) stack.push(cur.right);
                cur = cur.left;
            }
            
            if(!cur) cur = stack.pop();
        }
    ```
    - 3). 后序遍历（左->右->根）
    ``` 
        
    ```



# 打卡提交题目

1. day8: valid-anagram
2. day9: binary-tree-inorder-traversal
3. day10: rotate-array
4. day11: merge-sorted-array
5. day12: linked-list-cycle-ii
6. day13: reverse-nodes-in-k-group
7. day14: sliding-window-maximum