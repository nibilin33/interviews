/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
// 选取右上角的数字，如果该数字大于查找的数字，剔除所在列，如果小于要查找的数字，剔除所在行
 var findNumberIn2DArray = function(matrix, target) {
    if(matrix.length === 0) {
        return false;
    }
    let found = false;
    let rows = matrix.length;
    let colums = matrix[0].length;
    let row = 0, colum = colums - 1;
    while(row<rows&&colum>=0){
        if(matrix[row][colum] == target) {
            found = true;
            break;
        }
        if(matrix[row][colum]>target) {
            colum --;
        }
        if(matrix[row][colum]<target) {
            row++;
        }
   
    }
    return found;
};