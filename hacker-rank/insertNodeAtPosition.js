/*
 * Complete the 'insertNodeAtPosition' function below.
 *
 * The function is expected to return an INTEGER_SINGLY_LINKED_LIST.
 * The function accepts following parameters:
 *  1. INTEGER_SINGLY_LINKED_LIST llist
 *  2. INTEGER data
 *  3. INTEGER position
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

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  let head = llist;
  let point = llist;
  let node = new SinglyLinkedListNode(data);
  let count = 0;
  while (head) {
    let next = head.next;
    count++;
    if (count == position) {
      head.next = node;
      node.next = next;
    }
    head = next;
  }
  return point;
}
