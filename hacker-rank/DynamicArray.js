/*
 * Complete the 'dynamicArray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. 2D_INTEGER_ARRAY queries
 */
// int[]: the results of each type 2 query in the order they are presented
function dynamicArray(n, queries) {
  // Write your code here
  let result = new Array(n);
  let out = [];
  let lastAnswer = 0;
  for (let i = 0; i < queries.length; i++) {
    let item = queries[i].split(" ");
    console.log(item);
    let query = item[0];
    let x = item[1];
    let y = item[2];
    let idx = (x ^ lastAnswer) % n;
    if (query == "1") {
      if (typeof result[idx] === "undefined") {
        result[idx] = [y];
      } else {
        result[idx].push(y);
      }
    }
    if (query == "2") {
      lastAnswer = result[idx][y % result[idx].length];
      console.log(lastAnswer);
      out.push(lastAnswer);
    }
  }
  return out;
}
function main() {
  const n = 2;
  let queries = ["1 0 5", "1 1 7", "1 0 3", "2 1 0", "2 1 1"]; // [7,3]
  const result = dynamicArray(n, queries);
  console.log(result);
}
main();
