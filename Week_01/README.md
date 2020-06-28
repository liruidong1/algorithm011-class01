# 学习笔记

#### 打卡提交题目

1. day1: container-with-most-water
2. day2: 3Sum
3. day3: rotate-array
4. day4: merge-sorted-array
5. day5: linked-list-cycle-ii
6. day6: reverse-nodes-in-k-group
7. day7: sliding-window-maximum

#### 作业

##### 1. 调用addFirst等新的api

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

##### 2. Queue源码分析

Queue在Java中是一个接口，定义了队列的行为，其中add行为等同于offer，区别在于add对于失败的入队操作会抛出异常，而offer只会返回false作为入队失败的标识。
类似的出队操作有remove和poll，其中remove会在出队失败是抛出异常，而poll会返回null。
Queue接口中还定义了element和peek两个方法用于查看队首的元素，但是不会出队，对于队首元素为空的情况，element会抛出异常。