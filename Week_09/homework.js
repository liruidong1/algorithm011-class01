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
function uniquePathsWithObstacles(obstacleGrid) {

    let n = obstacleGrid.length, m = obstacleGrid[0].length;
    let f = Array.from({length: m}, (val)=>0)


    f[0] = obstacleGrid[0][0] === 0 ? 1 : 0;
    for (let i = 0; i < n; ++i) {
        for (let j = 0; j < m; ++j) {
            if (obstacleGrid[i][j] === 1) {
                f[j] = 0;
                continue;
            }
            if (j - 1 >= 0 && obstacleGrid[i][j - 1] === 0) {
                f[j] += f[j - 1];
            }
        }
    }

    return f[m - 1];
}
