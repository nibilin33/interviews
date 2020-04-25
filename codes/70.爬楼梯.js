/*
 * @lc app=leetcode.cn id=70 lang=javascript
 *
 * [70] 爬楼梯
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */

// 到达第i阶的方法总数就是到第(i-1)阶和第(i−2) 阶的方法数之和。
// dp[i]=dp[i-1]+dp[i-2]

var climbStairs = function(n) {
    if(n===1) {
        return 1;
    }
    let dp=[];
    dp[1]=1;
    dp[2]=2;
    for(let i=3;i<=n;i++) {
        dp[i]=dp[i-1]+dp[i-2];
    }
    return dp[n];
};
// console.log(climbStairs(3));
// @lc code=end

