class Solution:
    def replaceElements(self, arr: List[int]) -> List[int]:
        q = deque()
        max = -1
        for i, x in reversed(list(enumerate(arr))):
            q.append(max)
            if max < x:
                max = x
        return list(reversed(q))