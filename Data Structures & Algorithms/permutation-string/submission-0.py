class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        for index, c in enumerate(s2):
            if s1[0] == c:
                i = 0
                while i < len(s1):
                    if (s1[i] != s2[index]):
                        break
                    i = i + 1
                if i == len(s1) - 1:
                    return True
        return False