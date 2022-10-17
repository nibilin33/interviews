/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第 N 个结点
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
 * @param {number} n
 * @return {ListNode}
 */
// 遍历获得长度，到长度-n的时候，next = next.next,
// 如果没有前节点（删除头节点）， head 往后走
var removeNthFromEnd = function(head, n) {
  let count = 0;
  let countHead = head;
  while (countHead) {
    countHead = countHead.next;
    count++;
  }
  let del = head;
  let pre = null;
  let hhead = del;
  let step = 0;
  while (del) {
    if (count - n === step) {
      let next = del.next;
      if (pre) {
        pre.next = next;
      } else {
        hhead = hhead.next;
      }
      break;
    }
    pre = del;
    del = del.next;
    step++;
  }
  return hhead;
};
// @lc code=end
// [1,2] 2
