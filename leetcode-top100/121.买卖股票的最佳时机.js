/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
// 记录最低点，在最低点买入
var maxProfit = function(prices) {
    let min = Infinity;
    let max = -Infinity;
    for(let i=0;i<prices.length;i++) {
        if(prices[i]<min) {
            min=prices[i];
        }else if(prices[i]-min>max) {
            max = prices[i]-min;
        }
    }
    return max > 0 ? max : 0;
};
// @lc code=end

