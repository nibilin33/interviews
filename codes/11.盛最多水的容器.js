/*
 * @lc app=leetcode.cn id=11 lang=javascript
 *
 * [11] 盛最多水的容器
 */

// @lc code=start
/**
 * @param {number[]} height
 * @return {number}
 */
// 找出x*y最大的,双指针,体积由较小的决定
var maxArea = function(height) {
    let max = 0;
    let i=0,j=height.length-1;
    while(i!=j) {
        let ht = Math.min(height[i],height[j]);
        max = Math.max(max,ht*(j-i));
        if(height[i]<height[j]) {
            i++;
        }else{
            j--;
        }
    }
    return max;
};
// @lc code=end

