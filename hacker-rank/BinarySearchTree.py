from logging import exception


class Node:
    def __init__(self, info): 
        self.info = info  
        self.left = None  
        self.right = None 
        self.level = None 

    def __str__(self):
        return str(self.info) 

class BinarySearchTree:
    def __init__(self): 
        self.root = None

    def create(self, val):  
        if self.root == None:
            self.root = Node(val)
        else:
            current = self.root
         
            while True:
                if val < current.info:
                    if current.left:
                        current = current.left
                    else:
                        current.left = Node(val)
                        break
                elif val > current.info:
                    if current.right:
                        current = current.right
                    else:
                        current.right = Node(val)
                        break
                else:
                    break

# Enter your code here. Read input from STDIN. Print output to STDOUT
'''
class Node:
      def __init__(self,info): 
          self.info = info  
          self.left = None  
          self.right = None 
           

       // this is a node of the tree , which contains info as data, left , right
'''
def treeLoop(node,v,result):
    if node == None:
        return
    result.append(node)
    if node.info == v:
        return
    if node.info < v:
        treeLoop(node.right,v,result)
    else:
        treeLoop(node.left,v,result)
def lca(root, v1, v2):
  #Enter your code here

    v1list = []
    treeLoop(root,v1,v1list)
    near = None
    while root:
        for i, j in enumerate(v1list):
            if j is root:
                near = j
        if root.info == v2:
            break
        if root.info < v2:
            root = root.right
        else:
            root = root.left
    return near



tree = BinarySearchTree()
t = 8

arr = list(map(int, '9 7 8 5 6 4 3 1'.split()))

for i in range(t):
    tree.create(arr[i])

v = list(map(int, '1 6'.split()))

ans = lca(tree.root, v[0], v[1])
print(ans.info)

