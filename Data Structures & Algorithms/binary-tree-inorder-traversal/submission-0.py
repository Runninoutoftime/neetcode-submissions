# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution:
    def inorderTraversal(self, root: Optional[TreeNode]) -> List[int]:
        
        output = []
        def dfs(node):
            if node.left is None and node.right is None:
                return node.val

            dfs(node.left)
            dfs(node.right)

        return output