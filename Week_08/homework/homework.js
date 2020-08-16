function quickSort(arr , compare = (val1, val2) => val1 - val2) {
    function _sort(begin, end){
        if(begin >= end) {
            return;
        }

        let pivot = _pivot(begin, end);
        _sort(begin, pivot - 1);
        _sort(pivot + 1, end);
    }

    function _pivot(begin, end){
        let counter = begin; let pivot = end;
        for(let i = begin; i < end; i++) {
            if(compare(arr[i], arr[pivot]) < 0) {
                [arr[i], arr[counter]] = [arr[counter], arr[i]];
                counter++;
            }
        }
        [arr[pivot], arr[counter]] = [arr[counter], arr[pivot]];

        return counter;
    }

    _sort(0, arr.length - 1);

    return arr;
}

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
function merge(intervals) {

    if(intervals.length < 1) return [];

    intervals.sort((arr1, arr2) => {
        return arr1[0] - arr2[0];
    })

    let result = [intervals.shift()];

    function _merge(arr2) {
        let arr1 = result[result.length - 1];
        let temp = [];

        if(arr1[1] >= arr2[0]) {
            temp[0] = Math.min(arr1[0], arr2[0]);
            temp[1] = Math.max(arr1[1], arr2[1]);
            result[result.length - 1] = temp;
        }else {
            result.push(arr2);
        }

    }

    for(let arr of intervals) {
        _merge(arr);
    }


    return result;
}

/**
 * @param {number[]} nums
 * @return {number}
 */
function reversePairs(nums) {
    if(!nums || nums.length < 1) return 0;

    //归并排序
    let count = 0;

    function _mergeSort(arr) {

        function _sort(begin, end){
            if(begin >= end) return ;
            let middle = (begin + end) >> 1;

            _sort(begin, middle);
            _sort(middle + 1, end);
            _merge(begin, middle, end);
        }

        function _merge(begin, middle, end) {
            //合并 begin->middle middle+1->end
            let left = begin,  right = middle+1, start = 0, temp = [];

            while(right <= end) {
                let _left = begin;
                while (_left <= middle) {
                    if(arr[_left] >> 1 > arr[right]) {
                        count++;
                    }
                    _left++;
                }
                while (left <= middle && arr[left] < arr[right]) temp[start++] = arr[left++];
                temp[start++] = arr[right++];
            }

            while (left <= middle) {
                temp[start++] = arr[left++];
            }

            //合并
            arr.splice(begin, end -begin + 1, ...temp);
        }

        _sort(0, arr.length - 1);

        return arr;
    }

    _mergeSort(nums);
    return count;
}

