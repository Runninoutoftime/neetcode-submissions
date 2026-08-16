class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {

        let minValue = prices[0];
        let minIndex = 0;
        let maxValue = 0;
        let maxIndex = prices.length;

        prices.forEach((price, index) => {
            if (price < minValue && index < maxIndex) {
                minValue = price;
                minIndex = index;
            }
            if (price > maxValue && index > minIndex) {
                maxValue = price;
                maxIndex = index;
            }


            console.log('maxVal', [maxValue, maxIndex], 'minVal', [minValue, minIndex])
        })

        if (maxValue - minValue < 0 ) {
            return 0
        }

        return maxValue - minValue

        // prices.forEach((price, index) => {
        //     if (price > maxValue[0] && (minValue[1] > index || minValue[1] === -1)) {
        //         maxValue = [price, index]
        //         console.log('maxValue', maxValue)
        //     };
        //     if ((price < minValue[0] && maxValue[1] < index) || (minValue[1] === -1 && maxValue[0] > minValue[0])) {
        //         minValue = [price, index]
        //         console.log('minValue', minValue)
        //     }
        // })
        
        // if (minValue[1] === -1) {
        //     return 0
        // }
        // return maxValue[1] - minValue[1]
        // 
    }
}
