class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) == 0:
            return 0
        nums_set = set(nums)
        seq_starts = defaultdict(int)
        for num in nums_set:
            if num - 1 not in nums_set:
                i = num
                while i + 1 in nums_set:
                    seq_starts[num] += 1
                    i += 1
        if len(seq_starts) == 0:
            return 0
        if len(seq_starts) == 1:
            return 1
        return max(seq_starts.values()) + 1