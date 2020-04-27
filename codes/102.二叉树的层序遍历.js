/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let result = [];
    const levelDeep = (node,depth)=>{
        if(!node) {
            return;
        }
        if(typeof result[depth] === 'undefined') {
            result[depth] = [];
        }
        result[depth].push(node.val);
        levelDeep(node.left,depth+1);
        levelDeep(node.right,depth+1);
    }
    levelDeep(root,0);
    return result;

};
//[1,2,3,4,null,null,5]
// @lc code=end

