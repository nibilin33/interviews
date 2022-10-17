/*
Given an integer n , find each x such that:
0<= x < n
n+x = n xor x
*/
/*
 * Complete the 'sumXor' function below.
 *
 * The function is expected to return a LONG_INTEGER.
 * The function accepts LONG_INTEGER n as parameter.
 * return int: the number of values found
 */
// 返回满足条件的数的个数
/*
 思路：等价于二进制0的个数的排列组合
 */
function sumXor(n) {
  // Write your code here
  if (n === 0) {
    return 1;
  }
  return Math.pow(
    2,
    n
      .toString(2)
      .split("")
      .filter(name => name == 0).length
  );
}

function main() {
  const n = 1000000000000000; // 1073741824
  const result = sumXor(n);
  console.log(result);
}
main();
