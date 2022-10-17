/*
 * @lc app=leetcode.cn id=133 lang=javascript
 *
 * [133] 克隆图
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, neighbors) {
 *    this.val = val === undefined ? 0 : val;
 *    this.neighbors = neighbors === undefined ? [] : neighbors;
 * };
 */

/**
 * @param {Node} node
 * @return {Node}
 */
var cloneGraph = function(node) {
  let visited = {};
  function dfs(node) {
    if (!(node instanceof Node)) {
      return node;
    }
    if (visited[node.val]) {
      return visited[node.val];
    }
    let clone = new Node(node.val, []);
    visited[node.val] = clone;
    for (let i = 0; i < node.neighbors.length; i++) {
      let item = node.neighbors[i];
      clone.neighbors.push(dfs(item));
    }
    return clone;
  }
  return dfs(node);
};
// @lc code=end
