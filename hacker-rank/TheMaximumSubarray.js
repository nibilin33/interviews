/*
 * Complete the 'maxSubarray' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY arr as parameter.
 */
// 返回最大子序列的和，和对应下标的和
function maxSubarray(arr) {
    // Write your code here
    let sum = 0;
    let i = 0;
    let maxSum = 0;
    let maxSequence = 0;
    while(i<arr.length){
        if(arr[i]>0) {
            maxSequence+=arr[i];
        }
        if(sum+arr[i]<0) {
            sum = 0;
        }else{
            sum+=arr[i];
            if(maxSum < sum) {
                maxSum = sum;
            }
        }
        i++;
    }
    if(maxSum === 0) {
       let sub = Math.max(...arr);
       if(sub<0) {
           maxSum = sub;
           maxSequence = sub;
       }
    }
    return [maxSum,maxSequence];

}

function main() {
    const arr = [-2,-3,-1,-4,-6];

    const result = maxSubarray(arr);
    console.log(result);
}
main();
