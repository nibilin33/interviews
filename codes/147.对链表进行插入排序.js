/*
 * @lc app=leetcode.cn id=147 lang=javascript
 *
 * [147] 对链表进行插入排序
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
var insertionSortList = function(head) {
    if(!head) return head;
    var preHead = new ListNode(-Infinity);
    var curr = head;
    // 找下一个插入的位置
    var pre = preHead;
    var next = null;
    while(curr){
        next = curr.next;
        while(pre.next && pre.next.val < curr.val){
            pre = pre.next;
        }
        curr.next = pre.next;
        pre.next = curr;
        pre = preHead;
        curr = next;
    }
    return preHead.next;
};

// @lc code=end

