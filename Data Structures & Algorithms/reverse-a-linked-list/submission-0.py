# Definition for singly-linked list.
# class ListNode:
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next

class Solution:
    def reverseList(self, head: Optional[ListNode]) -> Optional[ListNode]:
        stack = []
        while head is not None:
            print("inserting", head.val)
            stack.insert(0, head.val)
            head = head.next
        print(stack)
        return stack

