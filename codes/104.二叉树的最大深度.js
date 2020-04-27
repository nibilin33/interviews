/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
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
 * @return {number}
 */
var maxDepth = function(root) {
    let level = 0;
    const deep = (node,depth)=>{
        if(!node){
            level = level<depth?depth:level;
            return;
        }
        deep(node.left,depth+1);
        deep(node.right,depth+1);
    }
    deep(root,0);
    return level;
};
// @lc code=end

