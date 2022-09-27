/**
Given five positive integers, find the minimum and maximum values that 
can be calculated by 
summing exactly four of the five integers. 
Then print the respective minimum and maximum values 
as a single line of two space-separated long integers.
**/

/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr = arr.sort((a,b)=> a-b);
    let same = 0;
    for(let i=1;i<arr.length-1;i++) {
        same += arr[i];
    }
    console.log((same+arr[0])+' '+(same+arr[arr.length-1]));
}

function main() {
    //prints: 16 24
    const arr = [1,3,5,7,9];
  
    miniMaxSum(arr);
}
main();