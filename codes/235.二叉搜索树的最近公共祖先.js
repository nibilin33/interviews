/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
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
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
// 如果p、q均小于root，则应该由root的左子树返回p、q的最近公共祖先；
// 如果p、q均大于root，则应该由root的右子树返回p、q的最近公共祖先。
// 直到p、q既不同时大于root，也不同时小于root，则root就是p、q的最近公共祖先，返回root。

var lowestCommonAncestor = function(root, p, q) {
    while(root) {
        let val = root.val;
        let pval = p.val;
        let qval = q.val;
        if(val>pval && val>qval) {
            return lowestCommonAncestor(root.left,p,q);
        }else if(val<pval && val < qval) {
            return lowestCommonAncestor(root.right,p,q);
        }else{
            return root;
        }
    }
    return null;
};
// @lc code=end

