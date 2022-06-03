/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */
//  题目是想让我们深度拷贝，如果是普通链表的话，顺序遍历来创建新的节点就行；但是本题的难点在于随机指针的存在，当我们拷贝节点时，
// 「当前节点的随机指针指向的节点」可能还没创建
//  解题步骤：
//  先从头节点顺序遍历链表直至链尾，把每个遍历到的节点都存储到map中
//  再从头节点顺序遍历，更新map中对应节点的next指针和random指针
//  返回map中的头节点，也就是复制后的头节点
 
/**
 * @param {Node} head
 * @return {Node}
 */
 var copyRandomList = function(head) {
    let map = new Map();
    let node = head;
    while(node) {
        map.set(node,new Node(node.val));
        node = node.next;
    }
    node = head;
    while(node) {
       map.get(node).next = map.get(node.next) || null;
       map.get(node).random = map.get(node.random) || null;
       node = node.next;
    }
    return map.get(head);
};