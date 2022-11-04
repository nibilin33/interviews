/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/** 如何在二叉树中找出与输入整数相等的所有路径。
 * @param {TreeNode} root
 * @param {number} target
 * @return {number[][]}
 */
// 回溯+深度优先遍历
 var pathSum = function(root, target) {
    let result = [];
    let path = [];
    function traceback(node,sum) {
        if(node === null) {
            return;
        }
        path.push(node.val);
        sum-=node.val;
        if(node.left==null && node.right==null && sum === 0) {
            result.push(path.slice(0));
        }
        traceback(node.left,sum);
        traceback(node.right,sum);
        path.pop();

    }
    traceback(root,target);
    return result;

};