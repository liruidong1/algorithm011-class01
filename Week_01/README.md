## 学习笔记

### 1. 关于学习方法

1. 多看，多思考，多动手，画图可以更形象的理解算法
2. 代码多注释，有助于巩固复习

### 2. 链表相关问题

对于链表相关问题的处理上，一般考虑以下几点
1. 对于head特殊的边界问题，可以考虑新建一个节点，新建节点的next指向head，该方法可以巧妙解决边界特殊的情况；
2. 对于链表翻转(整个链表翻转、 K 个一组翻转链表)一类的问题，注意的就是在每次迭代中，要先创建引用`temp`，
指向本次迭代不会涉及到的节点，然后要注意的就是要交换节点next指向的顺序，这个顺序是固定的，要注意指针丢失问题；


# 打卡提交题目

1. day1: container-with-most-water
2. day2: 3Sum
3. day3: rotate-array
4. day4: merge-sorted-array
5. day5: linked-list-cycle-ii
6. day6: reverse-nodes-in-k-group
7. day7: sliding-window-maximum

# 作业

### 1. 调用addFirst等新的api

```
    Deque<String> deque = new ArrayDeque<>();

    //push方法调用的是addFirst
    deque.addFirst("a");
    deque.addFirst("b");
    deque.addFirst("c");
    System.out.println(deque);

    //peek调用的是peekFirst方法查询的是队头
    String str = deque.peekFirst();
    System.out.println(str);
    System.out.println(deque);

    while (deque.size() > 0) {
        System.out.println(deque.removeFirst());
    }
    System.out.println(deque);
```

### 2. Queue源码分析

Queue在Java中是一个接口，定义了队列的行为，其中`add`行为等同于`offer`，区别在于`add`对于失败的入队操作会抛出异常，而`offer`只会返回`false`作为入队失败的标识。
类似的出队操作有`remove`和`poll`，其中`remove`会在出队失败是抛出异常，而`poll`会返回`null`。
Queue接口中还定义了`element`和`peek`两个方法用于查看队首的元素，但是不会出队，对于队首元素为空的情况，`element`会抛出异常。

### 3. PriorityQueue源码分析

`PriorityQueue<E>`继承了AbstractQueue，在查询上实现了`peek`操作，对于`element`方法则是由AbstractQueue进行了实现；
对于入队和出队操作，PriorityQueue进行了优先度的计算，在`offer`的实现上，当入队元素为`null`的时候会抛出异常，当队列不为空时（队列中存在元素），
PriorityQueue会调用私有的`siftUp`方法，根据队列元素的类型`E`调用指定的优先级判断方法，对队列中已有的元素进行优先级排序，然后插入，
`E`需要实现`Comparable`接口，或者需要在创建`PriorityQueue`对象时，传入一个`Comparator`对象;出队`poll`方法，在活动出队的对象后，如果队列
不为空，会再次进行排序，然后返回出队的对象。
