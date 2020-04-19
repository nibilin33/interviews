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
var maxProfit = function(prices) {
    let max = 0;
    let i = 0 ;
    let j = prices.length-1;
    while(i<prices.length-1){
        if(j<i+1) {
            i++;
            j=prices.length-1;
        }
        if(prices[i]>prices[j]) {
            j--;
        }else {
            if(max<prices[j]-prices[i]) {
                max = prices[j]-prices[i];
            }
            j--;
        }
    }
    return max;
};
// @lc code=end

