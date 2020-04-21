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
    function bfs(node) {
        if(!(node instanceof Node)) {
            return node;
        }
        let clone = new Node(node.val,[]);
        visited[clone.val] = clone;
        let visiteque = [];
        visiteque.unshift(node);
        while(visiteque.length){
            let tmp = visiteque.pop();//当前访问的节点
            tmp.neighbors.forEach((item)=>{
                if(!visited[item.val]) {//如果临节点未访问，进入访问队列，在当前节点的临接节点都访问过后作为新的遍历节点
                    visited[item.val] = new Node(item.val,[]);
                    visiteque.unshift(item);
                }
                visited[tmp.val].neighbors.push(visited[item.val]);
            })
        }
        return clone;
    }
    return bfs(node);
};
// @lc code=end

