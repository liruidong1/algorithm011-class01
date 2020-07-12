## 学习笔记

### 分治

1. 个人感觉分治算是递归算法的标准应用了，相比普通的范式递归多了最后一步的子问题结果合并；

2. 分治代码模板
```
    divideConquer(problem, ...params) {
        //问题解决
        if (problem id down) {
            //返回结果，或者使用集合装载结果并结束本次调用
            doSomething;
            return;
        }

        //处理当前问题，切割为子问题
        subProblems = splitProblem(problem);

        //下探解决子问题
        subResult1 = divideConquer(subProblems, ..._params);
        ...

        //合并结果
        result = processResult(subResult1, ...subResults);

    }    

```

### 回溯

1. 回溯是一种通过探索所有可能的候选解来找出所有的解的算法。如果候选解被确认不是一个解的话（或者至少不是最后一个解），
回溯算法会通过在上一步进行一些变化抛弃该解，即回溯并且再次尝试；

2. 回溯是一种特殊的递归，通过练习习题，可以发现回溯的实现是没有返回值的；回溯函数的参数，大部分是都是层层传递的，在存储
正确的解时要注意创建新的对象，否则会影响最终的结果；

3. 回溯要注意的是剪枝，剪枝操作可以有效的降低算法的执行效率。