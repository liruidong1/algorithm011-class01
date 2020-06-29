/**
 * 方法就是寻找每一个字符串的解
 * @param strs
 */

function groupAnagrams(strs: string[]): string[][] {
    let map: any = {};

    let offset = 'a'.charCodeAt(0);

    for(let str of strs){
        //计算map的key
        let arr = [...new Array(26)].map(()=>0);
        for(let char of str){
            arr[char.charCodeAt(0)-offset]++;
        }
        let key = arr.join('');

        if(map[key]){
            map[key].push(str);
        }else{
            map[key] = [str];
        }

    }

    let result: string[][] = [];
    for(let key in map){
        result.push(map[key]);
    }

    return result;
}