/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    if(!root) return [];
    let max = 0;
    let obj = new Object();
    const deep = (root)=>{
        if(!root) return;
        if(typeof obj[root.val]=== 'undefined') {
            obj[root.val] = 0;
        }
        obj[root.val]++;
        if(max<obj[root.val]) {
            max = obj[root.val];
        }
        deep(root.right);
        deep(root.left);
    }
    deep(root);
    let result = [];
    for(let n in obj) {
        if(obj[n]===max) {
            result.push(n);
        }
    }
    return result;

};
// @lc code=end

