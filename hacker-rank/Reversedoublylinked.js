/*
 * For your reference:
 *
 * DoublyLinkedListNode {
 *     int data;
 *     DoublyLinkedListNode next;
 *     DoublyLinkedListNode prev;
 * }
 *
 */

function reverse(llist) {
  // Write your code here
  let head = llist;
  let point = null;
  while (head) {
    let next = head.next;
    head.next = point;
    point = head;
    head = next;
  }
  return point;
}
