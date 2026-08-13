# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def maxDepth(self, root: Optional[TreeNode]) -> int:
        maxHeight = 1
        def dfs(node):
            height = 1;
            if node is None:
                return 0

            leftHeight = dfs(node.left)
            rightHeight = dfs(node.right)

            return max(leftHeight, rightHeight) + 1

        return dfs(root)
        