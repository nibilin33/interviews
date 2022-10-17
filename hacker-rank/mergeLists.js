// Complete the mergeLists function below.

/*
 * For your reference:
 *
 * SinglyLinkedListNode {
 *     int data;
 *     SinglyLinkedListNode next;
 * }
 *
 */
function mergeLists(head1, head2) {
  let point = new SinglyLinkedListNode();
  let newHead = point;
  let h1 = head1;
  let h2 = head2;
  while (h1 && h2) {
    let h1next = h1.next;
    let h2next = h2.next;
    if (h1.data < h2.data) {
      point.next = new SinglyLinkedListNode(h1.data);
      point = point.next;
      h1 = h1next;
    } else {
      point.next = new SinglyLinkedListNode(h2.data);
      point = point.next;
      h2 = h2next;
    }
  }
  if (h1) {
    point.next = h1;
  }
  if (h2) {
    point.next = h2;
  }
  return newHead.next;
}
