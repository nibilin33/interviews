/*
 * @lc app=leetcode.cn id=142 lang=javascript
 *
 * [142] 环形链表 II
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
// 相遇后，p1从头开始，p1到入环点距离=p2到入环点距离
var detectCycle = function(head) {
    let p1 = head;
    let p2 = head;
    let hd = head;
    let count = 0;
    while(p2!=null&&p2.next!=null) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            count++;
            break;
        }
    }
    if(count>0) {
        p1 = hd;
        while(p2!=null) {
            if(p1 === p2) {
                return p1;
            }
            p1 = p1.next;
            p2 = p2.next;
        }
    }
    return null;
    
};
// @lc code=end

