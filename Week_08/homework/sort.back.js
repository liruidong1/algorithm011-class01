/**
 * 插入排序的思路是默认第一个元素为已排序区间，然后取未排序区间的第一个元素 插入到已排序区间的特定位置
 * @param arr {number[]}
 * @return {number[]}
 */
function insertSort(arr) {

    let len = arr.length;

    for(let i = 1; i < len; i++) {
        let val = arr[i];
        let j = i - 1;
        for(; j >= 0; j--) {
            if(arr[j] > val) {
                arr[j+1] = arr[j];
            }else {
                break;
            }
        }

        arr[j+1] = val;
    }

    return arr;
}

console.log(insertSort([2,8,7,5,4,6,9,10,0]))