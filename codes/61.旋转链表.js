/*
 * @lc app=leetcode.cn id=61 lang=javascript
 *
 * [61] 旋转链表
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
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    if(!head) return head;
    if(k<0) return null;
    var first = head;
    var preHead = head;
    var pre = head;
    var count = 0;
    while(head) {
        count++;
        head = head.next;
    }
    k = k > count? k%count:k;
    if(k == 0 || k === count) {
        return first;
    }
    k = count - k;
    head = first;
    while(head && head.next) {
        if(k === 1){
            pre = head;
        }
        head = head.next;
        k--;
    }
    preHead = pre.next;
    pre.next = null;
    head.next = first;
    return preHead;
    
};
// @lc code=end

