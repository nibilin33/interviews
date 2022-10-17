/**
 * @param {number[]} nums
 * @return {number}
 */
// 1.双指针，i=0,j=i+1, 如果相加和小于0，i往后移动，max记录最大值
// 2.动态规划 f(i)=max{f(i−1)+nums[i],nums[i]}
var maxSubArray = function(nums) {
  if (nums.length === 1) {
    return nums[0];
  }
  let max = nums[0];
  let pre = 0;
  for (let i = 0; i < nums.length; i++) {
    pre = Math.max(pre + nums[i], nums[i]);
    max = Math.max(max, pre);
  }
  return max;
};
