class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueSet = new Set();
        nums.forEach((num) => uniqueSet.add(num))

        if (nums.length === uniqueSet.size) {
            return false;
        }
        return true;
    }
}
