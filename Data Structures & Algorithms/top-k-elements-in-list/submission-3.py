class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        d = {}
        for num in nums:
            d[num] = d.get(num, 0) + 1
        d = dict(sorted(d.keys(), key=lambda x: x[1], reverse=True))
        print(d)

        return list(d.keys())[:k]
        