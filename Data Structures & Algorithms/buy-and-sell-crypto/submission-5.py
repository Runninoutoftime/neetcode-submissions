class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        
        left = 0
        right = 1
        best_profit = 0

        while right < len(prices):

            if prices[right] < prices[left]:
                left = right
            else:
                if prices[right] - prices[left] > best_profit:
                    best_profit = prices[right] - prices[left]
            
            right = right + 1
        
        return best_profit
        