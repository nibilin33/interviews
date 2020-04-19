/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let root = new ListNode(0);
    let head = root;
    let cr = 0;
    while(l1&&l2) {
        let total = l1.val + l2.val + cr;
        let node = new ListNode(total%10);
        if(total>9) {
            cr = 1;
        } else { 
            cr = 0;
        }
        head.next = node;
        head = head.next;
        l1 = l1.next;
        l2 = l2.next;
    }
    if(l2) {
        head.next = l2;
    }else if(l1) {
        head.next = l1;
    }
    while(cr) {
        if(head.next) {
            head = head.next;
            head.val = (head.val+1)%10;
            if(head.val) {
                cr = 0;
            }
        }else{
            head.next = new ListNode(1);
            cr = 0;
        }
    }
    return root.next;
};
//[1]
// [9,9]
// @lc code=end

