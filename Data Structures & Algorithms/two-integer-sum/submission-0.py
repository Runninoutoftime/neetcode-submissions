class Solution:
    def twoSum(self, nums: List[int], target: int) -> List[int]:
        # Create hashmap
        hashmap = dict()
        for index, value in enumerate(nums):
            if hashmap.get(target - value) != None:
                return [hashmap.get(target - value), index]
            hashmap.update({value: index})