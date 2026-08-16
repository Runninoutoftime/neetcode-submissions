class Solution:
    def containsNearbyDuplicate(self, nums: List[int], k: int) -> bool:
        pointer1 = 0
        pointer2 = 1
        duplicates = 0
        for num in nums:
            if (pointer2 < len(nums) and pointer1 < pointer2 - 1 and nums[pointer1] == nums[pointer2] and abs(pointer1 - pointer2) <= k):
                duplicates = duplicates + 1
                pointer2 = pointer2 + 1
            else:
                pointer1 = pointer1 + 1
            print('pointer1', pointer1)
            print('pointer2', pointer2)
            print('dups', duplicates)

        if duplicates >= 2:
            return True
        return False