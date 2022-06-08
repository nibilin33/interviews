/*
 * @lc app=leetcode.cn id=22 lang=javascript
 *
 * [22] 括号生成
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[]}
 */
// 回溯
var generateParenthesis = function(n) {
    let result = [];
    function backtrack(left, right, path) {
        // 如果是右括弧，出栈判断是否有效，无效直接返回
         // 数量小于0，不合法
         if (left < 0 || right < 0) return
         // 若左括号剩下的多，说明不合法
         if (right < left) return
         // 所有括号用完，得到合法组合
         if (left == 0 && right == 0) {
            result.push(path.join(''))
             return
         }
         path.push('(');
         backtrack(left-1,right,path);
         path.pop();
         path.push(')');
         backtrack(left,right-1,path);
         path.pop();
    }
    backtrack(n,n,[]);
    return result;
};
// @lc code=end

