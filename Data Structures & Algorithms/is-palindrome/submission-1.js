class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        s = s.replace(/[^a-z0-9]/gi, "")
        s = s.replaceAll(' ', '')
        let pointer1Idx = 0;
        let pointer2Idx = s.length - 1;

        while (pointer1Idx !== pointer2Idx) {
            if (s[pointer1Idx].toLowerCase() !== s[pointer2Idx].toLowerCase()) {
                return false;
            }
            pointer1Idx += 1;
            pointer2Idx -= 1;
        }
        return true;

    }
}
