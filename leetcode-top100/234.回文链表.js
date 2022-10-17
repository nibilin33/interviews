/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
// 数组存访问过的，判断是否对称
var isPalindrome = function(head) {
  let visited = [];
  while (head) {
    visited.push(head.val);
    head = head.next;
  }
  let len = visited.length;
  for (let i = 0; i < len / 2; i++) {
    if (visited[i] !== visited[len - i - 1]) {
      return false;
    }
  }
  return true;
};
// @lc code=end
