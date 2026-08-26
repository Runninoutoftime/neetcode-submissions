class Solution:
    def isValid(self, s: str) -> bool:
        stack = []

        mapping = {
            "{" : "}",
            "[" : "]",
            "(" : ")"
        }

        for c in s:
            if c in mapping:
                stack.append(c)
            else:
                val = stack.pop()
                if mapping[val] != c:
                    return False
        
        return True