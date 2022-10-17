var isSubtree = function(s, t) {
  if (s == null) {
    return false;
  }
  if (isSameTree(s, t)) {
    return true;
  }
  return isSubtree(s.left, t) || isSubtree(s.right, t); // 有一个true就true
};
/*
  isSameTree
    两树同为 null 则相同
    一个 null 一个不是，则不同；
    两个树都不为 null，则递归判断左右子树是否相同
*/
function isSameTree(s, t) {
  // 100题
  if (s == null && t == null) {
    return true;
  }
  if (s == null || t == null) {
    return false;
  }
  return (
    s.val == t.val && isSameTree(s.left, t.left) && isSameTree(s.right, t.right)
  );
}
