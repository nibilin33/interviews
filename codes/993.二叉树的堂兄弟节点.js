/*
 * @lc app=leetcode.cn id=993 lang=javascript
 *
 * [993] 二叉树的堂兄弟节点
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
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
// 深度相同，父节点不同
// 如果当前的左右子树命中目标，结束
// 层序遍历，如果目标不在同一层，结束
var isCousins = function(root, x, y) {
    if(root === null) {
        return false;
    }
    let que = [root];
    let visited = [];
    let result = false;
    while(que.length > 0) {
        let node = que.shift();
        let left = node.left;
        let right = node.right;
        if(left && right && (left.val === x || right.val === x) && (left.val === y || right.val === y)) {
            break;
        }
        if(left){
            visited.push(left);
        }
        if(right) {
            visited.push(right);
        }
        if(que.length === 0) {
            let hasXY = visited.filter((it)=>it.val === x || it.val === y);
            if(hasXY.length > 1) {
                result = true;
                break;
            }
            que = visited;
            visited = [];
        }
    }
    return result;

};
// @lc code=end

