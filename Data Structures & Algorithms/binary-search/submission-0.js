class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number}
     */
    search(nums, target) {
        // 1, 2, 3, 4, 5
        let index = Math.floor(nums.length / 2);
        if (nums[index] === target) {
            return index;
        } else if (nums[index] < target) {
            const newNums = nums.slice(index, nums.length);
            return search(newNums, target);
        } else if (nums[index] > target) {
            const newNums = nums.slice(0, index);
            return search(newNums, target);
        } else {
            return -1;
        }
    }
}
