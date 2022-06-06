/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
// 层序遍历，同一层，头尾判断是否相等,为null的地方也要填充
 var isSymmetric = function(root) {
    if(root === null) {
       return true;
   }
   let check = true;
   let que = [root];
   let levelQue = [];
   let visited = [];
   while(que.length > 0) {
       let node = que.shift();
       if(node !== null) {
           levelQue.push(node.val);
           visited.push(node.left);
           visited.push(node.right);
       }else{
           levelQue.push(-1);
       }

       // 处理同一层
       if(que.length === 0) {
           que = visited;
           visited = [];
           for(let i=0,j=levelQue.length-1;i<j;i++,j--) {
               if(levelQue[i]!==levelQue[j]) {
                   check = false;
                   break;
               }
           }
           if(!check) {
               break;
           }
           levelQue = [];
       }
   }
   return check;
};