# Definition for a binary tree node.
# class TreeNode:
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right

class Solution:
    def isSameTree(self, p: Optional[TreeNode], q: Optional[TreeNode]) -> bool:
        queueP = deque()
        queueQ = deque()

        if p is None and q is None:
            return True
        if p is None and q is not None:
            return False
        if p is not None and q is None:
            return False;

        queueP.append(p)
        queueQ.append(q)

        while queueP:
            pVal = queueP.pop()
            qVal = queueQ.pop()

            if pVal is None and qVal is None:
                continue
            
            if pVal is None or qVal is None:
                return False

            if pVal.val != qVal.val:
                return False

            queueP.append(pVal.left)
            queueP.append(pVal.right)
            queueQ.append(qVal.left)
            queueQ.append(qVal.right)
        return True
