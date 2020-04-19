/*
 * @lc app=leetcode.cn id=32 lang=javascript
 *
 * [32] 最长有效括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
// 对于遇到的每个( ，我们将它的下标放入栈中。
// 对于遇到的每个) ，我们弹出栈顶的元素并将
// 当前元素的下标与弹出元素下标作差，得出当前有效括号字符串的长度

var longestValidParentheses = function(s) {
    let max = 0;
    let stack = [];
    stack.push(-1);
    for(let i=0;i<s.length;i++) {
        if(s[i] === '(') {
            stack.push(i);
        }else{
            stack.pop();
            if(stack.length) {
                max = Math.max(max,i - stack[stack.length - 1]);
            }else{
                stack.push(i);
            }
        }
    }
    return max;

};
// var input = ')()())';
// longestValidParentheses(input);
// @lc code=end

