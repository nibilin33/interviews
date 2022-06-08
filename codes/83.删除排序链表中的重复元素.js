/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    let visited = new Set();
    let hd = head;
    let pre = null;
    while(head) {
        let next = head.next;
        // 如果出现重复相同节点，pre不能移动
        if(visited.has(head.val)) {
            pre.next = next;
        }else{
            pre=head;
        }
        visited.add(head.val);
        head=next;
    }
    return hd;
};
// @lc code=end

