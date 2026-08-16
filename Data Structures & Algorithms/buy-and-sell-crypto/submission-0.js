class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        
        // index, value
        let maxValue = [0, 0];
        let minValue = [0, -1];
        prices.forEach((price, index) => {
            if (price > maxValue[1] && minValue[0] > index) {
                maxValue = [index, price]
                console.log('maxValue', maxValue)
            };
            if ((price < minValue[1] && maxValue[0] < index) || (minValue[1] === -1 && maxValue[0] < minValue[0])) {
                minValue = [index, price]
                console.log('minValue', minValue)
            }
        })
        
        if (minValue[1] === -1) {
            return 0
        }
        return maxValue[1] - minValue[1]
        // 
    }
}
