/*
 * @lc app=leetcode.cn id=98 lang=javascript
 *
 * [98] 验证二叉搜索树
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
 * @return {boolean}
 */
var isValidBST = function(root) {
    const deep = (root,low,up)=>{
        if(!root) return true;
        if (root.val <= low || root.val >= up) return false;
        return deep(root.left, low, root.val) && deep(root.right, root.val, up);

    }
    return deep(root,-Infinity,Infinity);
};
//[2,1,3]true,[1,1]false
// @lc code=end

