function moveZeroes(nums: number[]): void {

    let slow = 0, value;

    for (let quick = 0; quick < nums.length; quick++) {
        if ((value = nums[quick]) !== 0) {
            if (quick > slow) {
                nums[slow] = value;
                nums[quick] = 0;
            }

            slow++;
        }
    }

}