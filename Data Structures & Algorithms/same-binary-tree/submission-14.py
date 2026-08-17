# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        qLeft = deque()
        qRight = deque()
        qLeft.append(p.left)
        qRight.append(p.right)

        def bfs(node):
            if node is None:
                return
            qLeft.append(node.left)
            qLeft.append(node.right)
            qRight.append(node.left)
            qRight.append(node.left)
            bfs()
        
        bfs(p)

        return qLeft == qRight