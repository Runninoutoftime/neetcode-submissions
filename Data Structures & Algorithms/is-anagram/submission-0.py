class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        sDict = dict()
        tDict = dict()
        for char in s:
            sDict[char] = sDict.get(char, 0) + 1
        for char in t:
            tDict[char] = tDict.get(char, 0) + 1
        for key, val in sDict.items():
            if tDict.get(key) == None or tDict.get(key) != val:
                return False
        print
        return True