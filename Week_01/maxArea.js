function maxArea(height) {
    let area = 0;
    let length = height.length;
    if (length < 2) return 0;

    let left = 0,
        right = length - 1;

    while (right > left) {
        //使用后置自增自减，确保取得的是当前下边未改变时height的值
        let minHeight = height[left] < height[right] ? height[left++] : height[right--];
        //在此时 原始left和right的差值已经缩小了1，所以要加上1
        area = Math.max((right - left + 1) * minHeight, area);
    }

    return area;

}