type Rotate = (nums: number[], k: number) => void;

/**
 * 将数组nums向左移动k次
 * @param nums
 * @param k
 */
const rotate:Rotate = function (nums: number[], k: number) : void {

    let length = nums.length;
    if(length < 2) return;

    k %= length; //取模运算，防止当k>length时，进行重复的移动

    let moveCount = 0; //移动次数，最大值为length

    for(let start = 0; moveCount < length; start++){
        let current = start;
        let currentValue = nums[start];

        do{
            let next = (current+k) % length;
            let nextValue = nums[next];
            nums[next] = currentValue;
            current = next;
            currentValue = nextValue;
            moveCount ++;
        }while (current !== start)

    }

}