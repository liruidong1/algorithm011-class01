/**
 * 判断s、t是否为字母异位词
 * @param s
 * @param t
 */
function isAnagram(s: string, t: string): boolean {
    if(s === t) return true;

    let map: any = {};

    for(let char of s){
        let code = char.charCodeAt(0);
        if(map[code]){
            map[code]++;
        }else{
            map[code] = 1;
        }
    }

    for(let char of t){
        let code = char.charCodeAt(0);
        if(map[code]){
            map[code]--;
        }else{
            return false;
        }
    }

    for(let code in map){
        if(map[code] !== 0) return false;
    }

    return true;
}

/**
 * 使用数组存储每个字母出现的次数，注意此方法使用 比较的字符串中只存在小写字母
 * @param s
 * @param t
 */
function isAnagram2(s: string, t: string): boolean{

    if(s.length !== t.length) return false;

    //申请长度为26的数组，每一位填充0
    let arr:number[] = [...Array(26)].map(()=>0);

    let code = 'a'.charCodeAt(0);

    for(let i=0;i<s.length;i++){
        arr[s.charCodeAt(i)-code]++;
        arr[t.charCodeAt(i)-code]--;
    }

    for(let count of arr){
        if(count !== 0) return false;
    }

    return true;
}