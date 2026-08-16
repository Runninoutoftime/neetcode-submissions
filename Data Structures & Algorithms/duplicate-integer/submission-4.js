class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let set = new Set(nums);
        if (set.length === nums.length) {
            return false;
        }
        return true;
    }
}
