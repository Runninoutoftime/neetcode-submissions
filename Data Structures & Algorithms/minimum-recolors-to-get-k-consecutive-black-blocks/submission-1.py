class Solution:
    def minimumRecolors(self, blocks: str, k: int) -> int:
        start = 0
        end = k
        white_count = 0

        for i in range(k):
            if blocks[i] == 'W':
                white_count += 1

        best = white_count

        while end < len(blocks):
            if white_count < best:
                best = white_count
            if blocks[end] == 'W':
                white_count += 1
            if blocks[start] == 'W':
                white_count -= 1
            start += 1
            end += 1
        
        return best