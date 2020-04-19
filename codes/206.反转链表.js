/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
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
 * @return {ListNode}
 */
// 将单链表中的每个节点的后继指针指向它的前驱节点
// 1.next = null
// 2.next = 1;
// 2,3
// 3.next = 2;
// 3,4
// 4.next = 3;
var reverseList = function(head) {
    let prev = null;
    let curr = head; 
    while (curr != null) {
        let nextTemp = curr.next;
        curr.next = prev;
        //待反转节点指向下一个节点 
        prev = curr;
        curr = nextTemp;
    }
    return prev;
};
// @lc code=end

