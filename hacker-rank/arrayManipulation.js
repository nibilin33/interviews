/*给你一个长度为N的列表，列表的初始值全是0。对此列表，你要进行M次查询，输出列表种最终N个值的最大值。
对每次查询，给你的是3个整数——a,b和k，
你要对列表中从位置a到位置b范围内的（包含a和b)的全部元素加上k。
求最终列表里的最大值
*/

/*
 * Complete the 'arrayManipulation' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
//
function arrayManipulation(n, queries) {
  // Write your code here
  let ar = new Array(n + 1).fill(0);
  let max = -1;
  for (let [start, end, k] of queries) {
    ar[start - 1] += k;
    ar[end] -= k;
  }
  let cur = 0;
  for (let i = 0; i < ar.length; i++) {
    cur += ar[i];
    if (max < cur) {
      max = cur;
    }
  }
  return max;
}

function main() {
  const n = 5;
  const m = 3;
  let queries = [
    [2, 6, 8],
    [3, 5, 7],
    [1, 8, 1],
    [5, 9, 15]
  ];

  const result = arrayManipulation(n, queries);
  console.log(result);
}
main();
