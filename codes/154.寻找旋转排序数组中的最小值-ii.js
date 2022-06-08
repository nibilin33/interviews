/*
 * @lc app=leetcode.cn id=154 lang=javascript
 *
 * [154] 寻找旋转排序数组中的最小值 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
// 原来就是局部有序，旋转几次，前面就增加几个有序，找到临界点
var findMin = function(numbers) {
    for(let i=0;i<numbers.length;i++) {
        let j = i+1;
        if(numbers[j]<numbers[i]) {
            return numbers[j];
        }
    }
    return numbers[0];
};
// @lc code=end

