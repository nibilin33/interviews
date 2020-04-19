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
var maxArea = function(height) {
    let max = 0;
    if(height.length===2) {
        return Math.min(...height);
    }
    for(let i=0;i<height.length;i++) {
        let j = height.length - 1;
        while(i<=j-1) {
            let cross = 0;
            if(height[i]<height[j]) {
                cross = height[i]*(j-i);
            }else{
                cross = height[j]*(j-i);
            }
            max = max < cross? cross: max;
            j--;
        }
    }
    return max;

};
// var input = [2,3,10,5,7,8,9];
// console.log(maxArea(input));
// @lc code=end

