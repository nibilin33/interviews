// 分析循环结束的条件（要打印几圈）， 5*5 矩阵，起点（0，0），（1，1），（2，2）
var printMatrixCicle = function(numbers, colum, row, start) {
  let endX = colum - start - 1;
  let endY = row - start - 1;
};
var printMatrix = function(numbers, colum, row) {
  let start = 0;
  while (colum > start * 2 && row > start * 2) {
    printMatrixCicle(numbers, colum, row, start);
    start++;
  }
};
