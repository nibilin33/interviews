/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
// 找到子树root位置，两边同时比较，同时为null
var isSubtree = function(root, subRoot) {
    function dosTreeHas(o,t) {
        if (!o && !t) {
            return true;
        }
        if ((o && !t) || (!o && t) || (o.val != t.val)) {
            return false;
        }
        return dosTreeHas(o.left,t.left) && dosTreeHas(o.right,t.right);
    }
   
    function loopTree(o,t) {
        if (!o) {
            return false;
        }
        return dosTreeHas(o, t) || loopTree(o.left, t) || loopTree(o.right, t);
    }
    
    return loopTree(root,subRoot);
};
// @lc code=end
// [3,4,5,1,2,null,null,null,null,0]\n[4,1,2]
// [4,1,2]
// [1,1]\n[1]

