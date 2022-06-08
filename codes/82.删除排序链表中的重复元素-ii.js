/*
 * @lc app=leetcode.cn id=82 lang=javascript
 *
 * [82] 删除排序链表中的重复元素 II
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
 * @return {ListNode}
 */
// 有序，判断前后两个节点是否相等，如果相等，删除到不存在这个节点值为止
var deleteDuplicates = function(head) {
    let pre = new ListNode(0,head);
    let cur = pre;
    while(cur.next && cur.next.next) {
        if (cur.next.val == cur.next.next.val) {
            let x = cur.next.val;
            while (cur.next && cur.next.val == x) {
                cur.next = cur.next.next;
            }
        }
        else {
            cur = cur.next;
        }
    }
    return pre.next;
    
};
// @lc code=end
// [1,1,1,2,3]

