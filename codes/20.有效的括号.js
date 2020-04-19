/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = [];
    for(let i=0;i<s.length;i++) {
        if('({['.includes(s[i])){
            stack.push(s[i]);
        }else{
            let sp = stack[stack.length - 1];
            if(typeof sp === 'undefined') {
                return false;
            }
            if(s[i] === ')' && sp === '('||s[i] === ']'&& sp === '['||s[i] === '}'&& sp === '{') {
                stack.pop();
            }else {
                return false;
            }
        }
    }
    return stack.length === 0;

};
// var input = "([)]";
// console.log(isValid(input));
// @lc code=end

