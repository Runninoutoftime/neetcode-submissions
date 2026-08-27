class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        if len(s1) > len(s2):
            return False

        freq = defaultdict(int)
        for val in s1:
            freq[val] += 1
        start = 0
        end = 0
        window = defaultdict(int)
        while end < len(s1):
            window[s2[end]] += 1
            end += 1
        while end < len(s2):
            if window == freq:
                return True
            else:
                window[s2[start]] -= 1
                if window[s2[start]] == 0:
                    del window[s2[start]]
                window[s2[end]] += 1
            start += 1
            end += 1
        return window == freq

            

