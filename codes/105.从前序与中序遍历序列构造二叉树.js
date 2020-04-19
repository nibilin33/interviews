/*
 * @lc app=leetcode.cn id=105 lang=javascript
 *
 * [105] 从前序与中序遍历序列构造二叉树
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
// var preorder = [3,9,20,15,7];
// var inorder = [9,3,15,20,7];
// 前序遍历是根左右，中序是左根右
// 3是根节点，那在中序的数组中，3的左边就是左树，右边就是右树
// 而前序root节点的下一位是左树
// 每个小树都是一样的判断，就递归       
var buildTree = function(preorder, inorder) {
    if(preorder.length===0||preorder.length!=inorder.length) {
        return null;
    }
    let root = new TreeNode(preorder[0]);
    let index = inorder.indexOf(root.val);
    root.left = buildTree(preorder.slice(1,index+1),inorder.slice(0,index));
    root.right = buildTree(preorder.slice(index+1, preorder.length),inorder.slice(index+1,inorder.length));
    return root;
    
};
// var preorder = [3,9,20,15,7];
// var inorder = [9,3,15,20,7];
// let index = inorder.indexOf(preorder[0]);
// let root = buildTree(preorder,inorder);
// console.log(root)
// @lc code=end

