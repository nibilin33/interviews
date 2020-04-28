/*
 * @lc app=leetcode.cn id=24 lang=javascript
 *
 * [24] 两两交换链表中的节点
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
// 解递归题的三部曲：
// 找整个递归的终止条件：递归应该在什么时候结束？
// 找返回值：应该给上一级返回什么信息？
// 本级递归应该做什么：在这一级递归中，应该完成什么任务？
var swapPairs = function(head) {
    //终止条件：链表只剩一个节点或者没节点了，没得交换了。返回的是已经处理好的链表
    if(head == null || head.next == null){
        return head;
    }
    //交换这3个节点中的前两个节点
    let next = head.next;
    head.next = swapPairs(next.next);
    next.next = head;
    // 返回交换好的节点
    return next;
};
// @lc code=end

