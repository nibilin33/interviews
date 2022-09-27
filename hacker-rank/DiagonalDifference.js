/*
Given a square matrix, calculate the absolute difference between the sums of its diagonals.
1 2 3 
4 5 6 
9 8 9
The left-to-right diagonal = 1+5+9=15. The right to left diagonal = 3+5+9=17. 
Their absolute difference is |15-17| =2
*/

function diagonalDifference(arr) {
    // Write your code here
    const n = arr.length;
    let left = 0, right = 0;
    for(let i=0;i<n;i++) {
        left+= arr[i][i];
        right+= arr[n-i-1][i];
    }
    return Math.abs(left-right);
}
function main(){
    const arr = [[1,2,3],[4,5,6],[9,8,9]];
    const result = diagonalDifference(arr);
    console.log(result);
}
main();