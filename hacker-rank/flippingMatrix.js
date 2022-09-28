/*
 * Complete the 'flippingMatrix' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts 2D_INTEGER_ARRAY matrix as parameter.
 * example see flippingmatrix.png
 */
// each time pick max value from 4 corner value
// left-top matrix[row][col]
// right-top matrix[row][2*n-col-1]
// left-bottom maxtrix[2*n-row-1][col]
// right-bottom maxtrix[2*n-row-1][2*n-col-1]
function flippingMatrix(matrix) {
    // Write your code here
    const n = matrix.length/2;
    let sum = 0;
    for(let i=0;i<n;i++) {
       for(let j=0;j<n;j++) {
         let max = Math.max(
             matrix[i][j],
             matrix[i][2*n-j-1],
             matrix[2*n-i-1][j],
             matrix[2*n-i-1][2*n-j-1]
         )
         sum+=max;
       }
    }
    return sum;

}
function main(){
    const matrix = [[112,42,83,119],[56,125,56,49],[15,78,101,43],[62,98,114,108]];// 414
    const result = flippingMatrix(matrix);
    console.log(result);
}
main();