/*
 * @lc app=leetcode.cn id=19 lang=javascript
 *
 * [19] 删除链表的倒数第N个节点
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    var preHead = new ListNode(0);
    preHead.next = head;
    var before = preHead;
    var tail = preHead;
    var index = 0;
    while(tail) {
        tail = tail.next;
        if(index>n) {
            before = before.next;
        }
        index++;
    }
    before.next = before.next.next;
    return preHead.next;
};
// @lc code=end

