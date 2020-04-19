/*
 * @lc app=leetcode.cn id=946 lang=javascript
 *
 * [946] 验证栈序列
 */

// @lc code=start
/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function(pushed, popped) {
    if(pushed.length!=popped.length) {
        return false;
    }
    let j = 0;
    let stack = [];
    for(let i=0;i<pushed.length;i++) {
        stack.push(pushed[i]);
        // 如果遇到pop队列的数，就pop出来
        while(stack.length&&stack[stack.length-1]===popped[j]) {
            stack.pop();
            j++;
        }
    }
    return stack.length === 0;
};
// @lc code=end

