function nthUglyNumber(n: number): number {

    let result: number[] = [1];

    let i = 0, j = 0, k = 0;
    while(result.length <= n){
        let min = Math.min(result[i]*2, result[j]*3, result[k]*5);
        result.push(min);

        if(min === result[i] * 2) i++;
        if(min === result[j] * 3) j++;
        if(min === result[k] * 5) k++;
    }

    return result[n-1];

}
