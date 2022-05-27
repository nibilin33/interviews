/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子数组和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let res = nums[0];
    let sum = 0;
    for(let i=0;i<nums.length;i++) {
        if(sum>0) {
            sum = sum + nums[i]
        }else{
            sum = nums[i]
        }
        res = Math.max(sum,res);
    }
    return res;
};
// @lc code=end
/**
 * 对于含有正数的序列而言,最大子序列肯定是正数,所以头尾肯定都是正数.
 * 我们可以从第一个正数开始算起,每往后加一个数便更新一次和的最大值;
 * 当当前和成为负数时,则表明此前序列无法为后面提供最大子序列和,因此必须重新确定序列首项.
   上文引用来自https://www.cnblogs.com/sunnysola/p/4795691.html
 */

