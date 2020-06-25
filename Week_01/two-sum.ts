function twoSum(nums: number[], target: number): number[] {

    let result: number[] = [];
    let map: any = {};
    let diff;
    for (let i = 0; i < nums.length; i++) {
        diff = target - nums[i];
        if (map[diff] !== undefined) {
            return [map[diff], i];
        } else {
            map[nums[i]] = i;
        }
    }

    return result;
}