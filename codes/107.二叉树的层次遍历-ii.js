/*
 * @lc app=leetcode.cn id=107 lang=javascript
 *
 * [107] 二叉树的层次遍历 II
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
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
    if(!root) return [];
    let result = [];
    const deep = (node,depth) =>{
        if(!node) return;
        if(typeof result[depth]=='undefined') {
            result[depth]=[];
        }
        result[depth].push(node.val);
        deep(node.left,depth+1);
        deep(node.right,depth+1);

    }
    deep(root,0);
    return result.reverse();
};
// @lc code=end

