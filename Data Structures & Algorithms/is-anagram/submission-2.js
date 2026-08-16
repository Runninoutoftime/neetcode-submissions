class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length) {
            return false
        }

        const setS = new Set();
        const setT = new Set();

        for (let i = 0; i < s.length; i++) {
            setS.add(s[i])
            setT.add(t[i])
        }

        const finalSet = setS.difference(setT);
        if (finalSet.size === 0) {
            return true
        }
        return false

    }
}
