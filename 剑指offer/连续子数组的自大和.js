// max, 如果当前小于0，抛弃，从当前开始
var maxSubArray = function(nums) {
    let sum = 0;
    let max = -Infinity;
    for(let i=0;i<nums.length;i++) {
        if(sum<=0) {
            sum = nums[i];
        }else{
            sum = sum+nums[i];
        }
        if(sum > max) {
            max = sum;
        }
    }
    return max;
};