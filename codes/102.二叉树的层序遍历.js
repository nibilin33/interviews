/*
 * @lc app=leetcode.cn id=102 lang=javascript
 *
 * [102] 二叉树的层序遍历
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
 * @return {number[][]}
 */
var levelOrder = function(root) {
    if(!root) {
        return [];
    }
    let que = [root];
    let result = [];
    let visited = [];
    let level = 0;
    while(que.length>0) {
        let node = que.shift();
        if(typeof result[level] === 'undefined') {
            result[level] = [];
        }
        result[level].push(node.val);
        if(node.left) {
            visited.push(node.left);
        }
        if(node.right) {
            visited.push(node.right);
        }
        if(que.length === 0) {
            level++;
            que = que.concat(visited);
            visited = [];
        }
    }
    return result;
};
// @lc code=end
// [1,2,3,4,5]

