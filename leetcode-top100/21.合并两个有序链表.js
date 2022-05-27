/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    let point = new ListNode(-Infinity,null);
    let head = point;
    while(list1 && list2) {
        if(list1.val > list2.val) {
            point.next = list2;
            list2 = list2.next;
        }else{
            point.next = list1;
            list1 = list1.next;
        }
        point = point.next;
    }
    if(list1) {
        point.next = list1;
    }
    if(list2) {
        point.next = list2;
    }
    return head.next;
};
// @lc code=end

