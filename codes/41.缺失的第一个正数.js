/*
 * @lc app=leetcode.cn id=41 lang=javascript
 *
 * [41] 缺失的第一个正数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 只需要关注1~n+1
// 如果说数组的长度是n的话，那么显然，可以断定，最小未出现的正整数一定小于等于n+1
var firstMissingPositive = function(nums) {
    if(nums.length == 0) {
        return 1;
    }
    let map = new Set();
    let len = nums.length;
    nums.forEach((it)=>{
        if(it>0 && it<=len) {
            map.add(it);
        }
    });
    for(let i=1;i<=len+1;i++) {
        if(!map.has(i)) {
            return i;
        }
    }
};

// @lc code=end

