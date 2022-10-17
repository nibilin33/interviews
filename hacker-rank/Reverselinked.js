/*
 * Complete the 'reverse' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts INTEGER_SINGLY_LINKED_LIST llist as parameter.
 */

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
// return SinglyLinkedListNode pointer: a reference to the head of the reversed list
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
