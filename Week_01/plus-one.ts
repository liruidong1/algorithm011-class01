function plusOne(digits: number[]): number[] {

    for (let i = digits.length - 1; i >= 0; i--) {
        digits[i]++; //等价于 digits[i] += 1
        digits[i] %= 10;
        if (digits[i] !== 0) {
            //不等于0证明无进位
            return digits;
        }
    }

    //走到此处，证明有进位，且是[9], [9,9], [9,...,9]这种特殊情况
    let arr: number[] = [...new Array(digits.length+1)].map(()=>0);
    arr[0] = 1;
    return arr;
}