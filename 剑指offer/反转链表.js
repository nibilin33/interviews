// 定义一个函数，输入一个链表的头节点，反转该链表并输出反转后链表的头节点。
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
// 当前的next 指向之前的 
var reverseList = function(head) {
    let pre = null;
    let cur = head;
    while(cur!=null) {
        let nextTemp = curr.next;
        cur.next = pre;
        pre = cur;
        cur = nextTemp;
    }
    return pre;
};