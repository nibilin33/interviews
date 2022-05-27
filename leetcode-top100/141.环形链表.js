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
// 给节点加个访问属性，如果发现访问了两遍，就是有环
var hasCycle = function(head) {
    let isCycle = false;
    while(head) {
        if(typeof head.count  == 'undefined') {
            head.count = 1;
        }else{
            isCycle = true;
            break;
        }
        head = head.next;
    }
    return isCycle;
};
// @lc code=end

