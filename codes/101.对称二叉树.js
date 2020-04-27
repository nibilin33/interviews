/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 它们的两个根结点具有相同的值。
// 每个树的右子树都与另一个树的左子树镜像对称。
var isSymmetric = function(root) {

    const isMirror = (left,right)=>{
        if(left===null && right === null) return true;
        if(left===null||right===null)return false;
        return (left.val === right.val)&& isMirror(left.left,right.right)
        && isMirror(left.right,right.left);
    }
    return isMirror(root,root);
};
// @lc code=end

