# 学习笔记

### 树的遍历

1. 深度优先搜索时，递归可以解决前中后序遍历的问题，迭代方案调用栈的先进后出特性实现，当遍历顺序不一样时，注意子节点的入栈顺序，**后续遍历使用双端队列**。
2. 广度优先搜索时，使用迭代算法调用方队列的先进先出特性进行实现。
3. 二叉树的遍历，迭代实现
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
    - 3). 后序遍历（左->右->根），使用deque双端队列实现
    ``` 
        stack = [], cur = root, result = [];
        while(cur || stack.length){
            while(cur){
                stack.push(cur);
                result.unshift(cur.val)
                cur = cur.right;
            }
            
            cur = cur.pop().left;
        }
    ```

### HashMap

1. 基于jdk1.8进行
2. `put`方法调用了内部方法`putVal`，在调用`putVal`方法前，先调用`hash`方法获得了对应key的哈希值，然后在
`putVal`方法中判断空间不足的情况下进行空间的申请或扩容，然后判断目标位置是否被占用，为空的话则在该位置插入新put的
结点，否则获取目标位置存放的结点`p`，如果`p`的hash值和key与新的结点的hash和key相等，则修改`p`的value即可，否则
将循环得到链表的下一个节点，循环中需要判断循环结点和新节点的hash及key是否相等，相等的话跳出循环，否则将新节点挂载到尾结点的next指向的位置。
put完成后会进行容量计算，当size大于某个值时，将进行`reszie`，`resize`方法会对map中的键值对在`table`中进行新的hash下标计算。
3. `get`方法先调用`hash`方法获取key对应的哈希值，然后调用`getNode`方法进行查询，根据下标找到hash对应的结点，判断该结点的hash和key是否
等于方法接收到hash和key，相等的话返回该结点，不相等的话判断该结点是否有next结点，进行类似链表方式的遍历，知道找到满足条件的结点然后返回，没找到则
返回`null`。


# 打卡提交题目

1. day8: valid-anagram
2. day9: binary-tree-inorder-traversal
3. day10: ugly-number-ii
4. day11: n-ary-tree-postorder-traversal
5. day12: min-stack
6. day13: merge-two-sorted-lists
7. day14: largest-rectangle-in-histogram