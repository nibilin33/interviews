/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
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
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 如果两个数相加大于10，增加一个进位符，当前值为0，下一个相加加上进位符
var addTwoNumbers = function(l1, l2) {
    let inter = 0;
    let head = null;
    let move = null;
    while(l1||l2) {
        let add = (l1? l1.val:0) + (l2?l2.val:0) + inter;
        let next = new ListNode();
        inter = parseInt(add / 10);
        add = add % 10;
        next.val = add;
        l1 = l1 ? l1.next : null;
        l2 = l2 ? l2.next : null;
        if(move === null) {
            move = next;
            head = move;
        }else{
            move.next = next;
            move = move.next;
        }
    }
    if(inter > 0) {
        let next = new ListNode();
        next.val = 1;
        move.next = next;
    }
    return head;
};
// @lc code=end

