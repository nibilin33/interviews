/*
 * Complete the 'legoBlocks' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER m
 *  return int: the number of valid wall formations modulo (9 times 10 + 7)
 */
// 已知有w 1,2,3,4 类型 h,d 都是 1
function legoBlocks(n, m) {
  // Write your code here
  let count = 0;
  let current = 0;
  function traceBack(num) {
    if (num === m) {
      count++;
      return;
    }
    for (let i = 1; i <= 4; i++) {
      if (current + i > m) {
        continue;
      }
      console.log(current, i);
      current = current + i;
      traceBack(current);
      current = current - i;
    }
  }

  traceBack(0);
  console.log(count);
  return count % (Math.pow(10, 9) + 7);
}

function main() {
  const height = 1;

  const width = 6;

  const result = legoBlocks(height, width);
  console.log(result);
}
main();
