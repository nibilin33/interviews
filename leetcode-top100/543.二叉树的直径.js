/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
// 每个节点都做为根节点，计算左右高度合，留最大值，因为不一定是过root就是最大的
var diameterOfBinaryTree = function(root) {
    let max = 0;
    function calcHeight(node) {
       if(node === null) {
           return 0;
       }
       let left = 0,right =0;
       if(node.left) {
           left = left+calcHeight(node.left)+1;
       }
       if(node.right) {
           right = right+calcHeight(node.right)+1;
       }
       max = Math.max(max,left+right);
       return Math.max(left,right);
    }
    calcHeight(root);
    return max;
};
// @lc code=end
// [4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2]
