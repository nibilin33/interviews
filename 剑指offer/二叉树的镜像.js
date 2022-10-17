// 左右交换
var mirrorTree = function(root) {
  function exchange(node) {
    if (node === null) {
      return;
    }
    if (node.left === null && node.right === null) {
      return;
    }
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    exchange(node.left);
    exchange(node.right);
  }
  exchange(root);
  return root;
};
