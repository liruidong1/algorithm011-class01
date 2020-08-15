//从未排序数组中找到最小的元素插入到已排序数组的后方
function selectionSort(arr) {
    console.time();
    console.log('--------selectionSort start----------');
    let len = arr.length;
    let min;

    for (let i = 0; i < len; i++) {
        min = i;
        for (let j = i + 1; j < len; j++) {
            if (arr[j] < arr[min]) {
                min = j;
            }
        }

        if (min !== i) {
            [arr[i], arr[min]] = [arr[min], arr[i]];
        }
    }
    console.timeEnd();
    console.log('--------selectionSort end----------');
    return arr;
}

//插入排序是默认第一个元素是有序的，然后向前遍历已有序的数据，寻找合适的位置插入元素
function insertSort(arr) {
    console.time();
    console.log('--------insertSort start----------');
    let len = arr.length;

    for (let i = 1; i < len; i++) {
        let val = arr[i];
        let j = i - 1;
        for (; j >= 0; j--) {
            if (arr[j] > val) {
                arr[j + 1] = arr[j];
            } else {
                break;
            }
        }
        arr[j + 1] = val;
    }

    console.timeEnd();
    console.log('--------insertSort end----------');
    return arr;
}

//每次冒泡查找最大的放到相应的位置
function bubbleSort(arr) {
    console.time();
    console.log('--------bubbleSort start----------');
    let len = arr.length;

    for (let i = 0; i < len - 1; i++) {
        let hasExchange = false;
        for (let j = 0; j < len - i - 1; j++) {
            if (arr[j] > arr[j + 1]) {
                [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
                hasExchange = true;
            }
        }

        if (!hasExchange) {
            //一次循环中没有交换说明已经完全有序
            break;
        }
    }
    console.timeEnd();
    console.log('--------bubbleSort end----------');
    return arr;
}

function shellSort(arr) {
    console.time();
    console.log('--------shellSort start----------');
    let len = arr.length;

    for (let gap = Math.floor(len / 2); gap > 0; gap = Math.floor(gap / 2)) {
        // 注意：这里和动图演示的不一样，动图是分组执行，实际操作是多个分组交替执行
        for (let i = gap; i < len; i++) {
            let j = i;
            let current = arr[i];
            while (j - gap >= 0 && current < arr[j - gap]) {
                arr[j] = arr[j - gap];
                j = j - gap;
            }
            arr[j] = current;
        }
    }
    console.timeEnd();
    console.log('--------shellSort end----------');
    return arr;
}


//归并和快排具有相似性
//归并：先排序左右子数组然后合并左右子数组
//快排：先调配处左右数组然后对于左右子数组排序

//快排使用的是寻找一个位置，
function quickSort(arr) {
    console.time();
    console.log('--------quickSort start----------');

    function _sort(begin, end) {
        if(begin >= end) {
            return;
        }

        let pivot = _pivot(begin, end);
        _sort(begin, pivot - 1);
        _sort(pivot + 1, end);
    }

    //寻找标杆
    function _pivot(begin, end) {
        let counter = begin, pivot = end;
        for(let i = begin; i < end; i++) {
            if(arr[i] < arr[pivot]) {
                if(i !== counter) {
                    [arr[counter], arr[i]] = [arr[i], arr[counter]];
                }
                counter++;
            }
        }

        [arr[counter], arr[pivot]] = [arr[pivot], arr[counter]];

        return counter;
    }

    _sort(0, arr.length - 1);
    console.timeEnd();
    console.log('--------quickSort end----------');
    return arr;
}

function mergeSort(arr) {
    console.time();
    console.log('--------mergeSort start----------');

    function _sort(begin, end) {
        if(begin >= end) {
            return;
        }

        let middle = (begin + end) >> 1;
        _sort(begin, middle);
        _sort(middle+1, end);
        merge(begin, middle, end);
    }

    //合并左右数组
    function merge(left, middle, right) {
        //申请临时数组，长度为right - left + 1
        let _arr = [];
        let i = left, j = middle + 1, k = 0;
        while (i <= middle && j <= right ) {
            _arr[k++] = arr[j] > arr[i] ? arr[i++] : arr[j++];
        }

        while (i <= middle) {
            _arr[k++] = arr[i++];
        }

        while (j <= right) {
            _arr[k++] = arr[j++];
        }

        arr.splice(left, right - left + 1, ..._arr);
    }

    _sort(0, arr.length - 1);
    console.timeEnd();
    console.log('--------mergeSort end----------');
    return arr;
}

//TODO 堆排序待实现
function heapSort(arr) {
    console.time();
    console.log('--------heapSort start----------');

    function heap() {

    }

    console.timeEnd();
    console.log('--------heapSort end----------');
}

//计数排序，非基于比较，适用于一定范围内数字的排序
function countingSort(arr) {
    console.time();
    console.log('--------heapSort start----------');
    let len = arr.length;

    let counting = [];
    for(let num of arr){
        if(counting[num] === undefined || counting[num] == null){
            counting[num] = 0;
        }

        counting[num]++;
    }

    let newIndex = 0;
    for(let index = 0; index < counting.length; index++) {
        let count = counting[index];
        while (count > 0) {
            arr[newIndex++] = index;
            count--;
        }
    }

    console.timeEnd();
    console.log('--------heapSort end----------');

    return arr;
}

//桶排序
//bucketSize 每个桶的容量
function bucketSort(arr, bucketSize = 5) {
    console.time();
    console.log('--------bucketSort start----------');
    let min = arr[0], max = arr[0];

    for(let num of arr) {
        if(num < min) {
            min = num;
        }else if(num > max) {
            max = num;
        }
    }

    //计算桶的数量
    let buckets = [];
    for(let num of arr) {
        let bucketIndex = Math.floor(num / 5);
        if(!buckets[bucketIndex]) {
            buckets[bucketIndex] = [];
        }

        buckets[bucketIndex].push(num);
    }

    let newIndex = 0;
    for(let bucket of buckets) {

        insertSort(bucket);

        for(let num of bucket) {
            arr[newIndex++] = num;
        }
    }

    console.timeEnd();
    console.log('--------bucketSort end----------');

    return arr;
}

function radixSort(arr) {
    console.time();
    console.log('--------radixSort start----------');

    let max = arr[0];
    for(let num of arr) {
        if(num > max) {
            max = num;
        }
    }

    let mod = 10;
    let dev = 1;

    let loop = 0;
    while (max > 0) {
        loop++;
        max = Math.floor(max / mod);
    }

    let counters = [];

    while (loop > 0) {
        for(let num of arr) {
            let counterIndex = parseInt((num % mod) / dev);
            if(!counters[counterIndex]) {
                counters[counterIndex] = [];
            }
            counters[counterIndex].push(num);
        }

        let newIndex = 0;
        for(let counter of counters) {
            while(counter.length > 0) {
                arr[newIndex++] = counter.shift();
            }
        }

        mod *= 10;
        dev *= 10;
        loop--;
    }


    console.timeEnd();
    console.log('--------radixSort end----------');
    return arr;
}

// console.log(selectionSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
// console.log(insertSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
// console.log(bubbleSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
// console.log(shellSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
// console.log(quickSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
//console.log(radixSort([10, 9, 8, 7, 6, 5, 4, 3, 2, 1]))
console.log(quickSort([1,0]))


