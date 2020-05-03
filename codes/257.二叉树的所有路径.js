/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
    let result = [];
    const deep=(path,node)=>{
        if(!node) return;
        path+=node.val;
        if((node.left == null) && (node.right == null)) {
            result.push(path);
        }else{
            path+='->';
            deep(path,node.left);
            deep(path,node.right);
        }
    }
    deep('',root);
    return result;
};
// @lc code=end

