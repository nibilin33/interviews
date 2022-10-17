/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let len = prices.length;
  let max = 0;
  let i = 0;
  while (i < len) {
    for (let j = len - 1; j > i; j--) {
      if (prices[j] > prices[i]) {
        max = Math.max(max, prices[j] - prices[i]);
      }
    }
    i++;
  }
  return max;
};
// 第二种解法 贪心算法
/*
先定义最低价格和利润
遍历数组，更新最低价格和利润
最后遍历完成，返回利润
const maxProfit = prices => {
    // 先定义第一天为最低价格
    let min = prices[0];
    // 利润
    let profit = 0;
    // 遍历数据
    for (let i = 1; i < prices.length; i++) {
        // 如果发现比最低价格还低的，更新最低价格
        min = Math.min(min, prices[i]);
        // 如果发现当前利润比之前高的，更新利润
        profit = Math.max(profit, prices[i] - min);
    }
    return profit;
};
*/
