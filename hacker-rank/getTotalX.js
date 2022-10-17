/*
 * Complete the 'getTotalX' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */
// 找出存在几个数都能被数组整除
function getTotalX(a, b) {
  // Write your code here
  const all = [...a, ...b];
  let group1 = a[0],
    group2 = b[0];
  let possibleFactors = new Set();
  let count = 0;
  function getFacotors(value) {
    for (let i = 1; i < value; i++) {
      if (value % i === 0 && i > group1) {
        possibleFactors.add(i);
        if (value / i > group1) {
          possibleFactors.add(value / i);
        }
      }
    }
  }
  getFacotors(group1);
  getFacotors(group2);
  possibleFactors.forEach(data => {
    if (
      all.every(item => {
        if (data > item) {
          return data % item === 0;
        } else {
          return item % data === 0;
        }
      })
    ) {
      count++;
    }
  });
  return count;
}

function main() {
  const a = [2, 6];
  const b = [24, 36]; // 2
  const result = getTotalX(a, b);
  console.log(result);
}
main();
