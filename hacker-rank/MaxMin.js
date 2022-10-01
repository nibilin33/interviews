
/*

you will be given a list of integers,arr , and a single integer k. 
You must create an array of length k from elements of arr such that its unfairness is minimized. 
Call that array arr'. Unfairness of an array is calculated as
max(arr')-min(arr')

*/
/*
 * Complete the 'maxMin' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY arr
 * pick k elements from array 
 * return max(arr)-min(arr)
 */

function maxMin(k, arr) {
    // Write your code here
    let n = arr.length - k;
    if(n === 0) {
        return Math.max(...arr) - Math.min(...arr);
    }
    // through sorting to reduce the time limit
    arr.sort((a,b)=>b-a);
    let min = Infinity;
    for(let i=0;i<=n;i++) {
        let tempMin = arr[i]-arr[i+k-1];
        if(tempMin<min) {
            min = tempMin;
        }
    }
    return min;
}
function main() {

    const k = 5;
    let arr = [4504,
        1520,
        5857,
        4094,
        4157,
        3902,
        822,
        6643,
        2422,
        7288,
        8245,
        9948,
        2822,
        1784,
        7802,
        3142,
        9739,
        5629,
        5413,
        7232]; // 1335
    const result = maxMin(k, arr);
    console.log(result);
}
main();