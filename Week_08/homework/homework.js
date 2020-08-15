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

console.log(merge([[1,4],[0,0]]));
