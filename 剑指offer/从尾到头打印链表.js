/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {number[]}
 */
 var reversePrint = function(head) {
    let result = [];
    function reverse(node) {
        if(node === null) {
            return;
        }
        reverse(node.next);
        result.push(node.val);
    }
    reverse(head);
    return result;
};