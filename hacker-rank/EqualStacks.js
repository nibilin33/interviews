/*
 * Complete the 'equalStacks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY h1
 *  2. INTEGER_ARRAY h2
 *  3. INTEGER_ARRAY h3
 * Returns int: the height of the stacks when they are equalized
 */
// 找出通过删除top的元素达到三个等高
function equalStacks(h1, h2, h3) {
    // Write your code here
    function getAllPossibleSum(arr) {
        const len = arr.length - 1;
        let result = [arr[len]];
        for(let i=len-1;i>=0;i--) {
            result.unshift(arr[i]+result[0]);
        }
        return result;
    }
    let sum1 = getAllPossibleSum(h1), sum2 = getAllPossibleSum(h2), sum3 = getAllPossibleSum(h3);
    for(let i=0;i<sum1.length;i++) {
        if(sum2.indexOf(sum1[i])>-1 && sum3.indexOf(sum1[i])>-1) {
            return sum1[i];
        }
    }
    return 0;
}
function main() {
    const h1 = [1,1,1,1,1];
    const h2 = [3,2];
    const h3 = [1,3,1];
    const result = equalStacks(h1, h2, h3);
    console.log(result);
}
main();