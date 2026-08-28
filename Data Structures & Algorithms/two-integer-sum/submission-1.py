class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # x + y = target
        # x = target - y
        numSet = {}

        for i, val in enumerate(nums):
            if target - val in numSet:
                return [numSet[target - val], i]
            numSet[val] = i