/*
Watson gives Sherlock an array of integers. 
His challenge is to find an element of the array 
such that the sum of all elements to the left is equal 
to the sum of all elements to the right.
*/
/*
 * Complete the 'balancedSums' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// Returns string: either YES or NO
function balancedSums(arr) {
  // Write your code here
  if (arr.length <= 1) {
    return "YES";
  }
  let left = 0;
  let total = arr.reduce((pre, current) => pre + current);
  for (let i = 0; i < arr.length; i++) {
    let right = total - left - arr[i];
    if (right == left) {
      return "YES";
    }
    left += arr[i];
  }
  return "NO";
}
function main() {
  const arr = [1];
  const result = balancedSums(arr); // yes
  console.log(result);
}
main();
