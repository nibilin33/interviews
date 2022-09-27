/*
There are two -element arrays of integers,  Aand B. 
Permute them into some  A'and B' such that the relation A'[i]+B'[i]>=k holds for all i where 0<=i<n
There will be q queries consisting of A, B, and k. 
For each query, return YES if some permutation ,  
satisfying the relation exists. Otherwise, return NO.
*/

/*
 * Complete the 'twoArrays' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY A
 *  3. INTEGER_ARRAY B
 */

function twoArrays(k, A, B) {
    // Write your code here
    A = A.sort((a,b)=>a-b);
    B = B.sort((a,b)=>b-a);
    for(let i=0;i<A.length;i++) {
        if(A[i]+B[i]<k) {
            return 'NO';
        }
    }
    return 'YES';
}
function main() {
    const k = 10;
    const A = [2, 1, 3];
    const B = [7, 8, 9];
    const result = twoArrays(k, A, B);
    console.log(result);
}
main();