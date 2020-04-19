/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @return {boolean}
 */
// 快慢指针：
// p1每次移动一节，p2 移动2节，然后比较两个指针    
// 节点是否一样。
var hasCycle = function(head) {
    let p1 = head;
    let p2 = head;
    while(p2!=null && p2.next!=null) {
        p1 = p1.next;
        p2 = p2.next.next;
        if(p1 === p2) {
            return true;
        }
    }
    return false;
    
};
// @lc code=end

