class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        output = defaultdict(list);
        for val in strs:
            sortedString = ''.join(sorted(val))
            output[sortedString].append(val)
        return list(output.values())


