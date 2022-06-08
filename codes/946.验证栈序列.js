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
// popped 取出的数字，遍历pushed 如果不等于该数字push,数字相等pop
// 如果pushed已经遍历完，就只剩出栈
var validateStackSequences = function (pushed, popped) {
    let p = 0;
    let checkStack = [];
    for (let i = 0; i < pushed.length; ) {
        if (checkStack.length === 0) {
            if (popped[p] !== pushed[i]) {
                checkStack.push(pushed[i]);
            } else {
                p++;
            }
            i++;
        } else {
            // 先检查是否在之前的
            if (checkStack[checkStack.length - 1] === popped[p]) {
                checkStack.pop();
                p++;
            } else {
                if (popped[p] !== pushed[i]) {
                    checkStack.push(pushed[i]);
                } else {
                    p++;
                }
                i++;
            }
        }
    }
    if (p < popped.length) {
        for (let i = p; i < popped.length; i++) {
            if (popped[i] === checkStack[checkStack.length - 1]) {
                checkStack.pop();
            }
        }
    }
    return checkStack.length === 0;
};
// @lc code=end
// [9,5,0,8,1,6,2,7,4,3]\n[0,5,9,1,6,8,7,4,3,2]

