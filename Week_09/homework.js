/**
 * @param {string} s
 * @return {number}
 */
function firstUniqChar(s) {

    if(!s) return -1;

    let map = new Map();

    for(let char of s) {
        if(map.has(char)) {
            map.set(char, map.get(char)+1);
        }else {
            map.set(char, 1);
        }
    }

    let index = -1;
    for(let char of s){
        index++;
        if(map.get(char) === 1) {
            return index;
        }
    }

    return -1;
}


/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
function reverseStr(s, k) {
    let sLen = s.length;
    let arr = s.split('');

    for(let start = 0; start < sLen; start+=2*k) {
        let _start = start;
        let _end = Math.min(start + k - 1, sLen - 1 );

        while (_start < _end) {
            [arr[_start], arr[_end]] = [arr[_end], arr[_start]];
            _start++;
            _end--;
        }

    }

    return arr.join('');
}

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
function uniquePathsWithObstacles1(obstacleGrid) {

    let m, n;

    if(!obstacleGrid || (m = obstacleGrid.length) < 1 || (n = obstacleGrid[0].length) < 1) return 0;

    let arr = Array.from({length: m}, ()=>[]);

    for(let i = 0; i < m; i++) {
        for(let j = 0; j < n; j++) {
            if(obstacleGrid[i][j] === 1 ) {
                arr[i][j] = 0;
                continue;
            }
            if(i === 0 && j === 0) {
                arr[i][j] = 1;
            }else if( i === 0) {
                arr[i][j] = arr[i][j-1];
            }else if(j ===  0){
                arr[i][j] = arr[i-1][j];
            } else {
                arr[i][j] = arr[i-1][j] + arr[i][j-1];
            }
        }
    }

    return arr[m-1][n-1];
}

function uniquePathsWithObstacles(obstacleGrid) {

    let n = obstacleGrid.length, m = obstacleGrid[0].length;
    let dp = Array.from({length: m}, (val)=>0)


    dp[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (obstacleGrid[i][j] === 1) {
                dp[j] = 0;
                continue;
            }
            if (j - 1 >= 0) {
                dp[j] += dp[j - 1];
            }
        }
    }

    return dp[m - 1];
}

uniquePathsWithObstacles([[0],[0]]);