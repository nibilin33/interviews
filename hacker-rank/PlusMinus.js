// Given an array of integers, calculate the ratios of its elements that are positive, negative, and zero.
// Print the decimal value of each fraction on a new line with
// 6 places after the decimal.

"use strict";
/*
 * Complete the 'plusMinus' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function plusMinus(arr) {
  // Write your code here
  // print positive, negative, zero
  // rounded to 6 decimal places Number().toFixed(6)
  const len = arr.length;
  let result = {
    0: 0,
    1: 0,
    "-1": 0
  };
  if (len > 0) {
    for (let i = 0; i < len; i++) {
      if (arr[i] == 0) {
        result[0]++;
      } else if (arr[i] > 0) {
        result[1]++;
      } else {
        result[-1]++;
      }
    }
  }

  function printResult(value) {
    if (typeof value == "undefined" || value == 0) {
      console.log(Number(0).toFixed(6));
    } else {
      console.log(Number(value / len).toFixed(6));
    }
  }
  printResult(result[1]);
  printResult(result[-1]);
  printResult(result[0]);
}

function main() {
  const arr = [-4, 3, -9, 0, 4, 1];
  plusMinus(arr);
}
main();
