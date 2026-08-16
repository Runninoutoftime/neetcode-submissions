class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let mappedString = '';
        strs.forEach((str) => {
            const length = str.length;
            mappedString += '#' + length.toString() + '#';
            mappedString += str;
        })
        return mappedString;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let returnStrings = [];
        let charArray = [...str]
        let firstEndingPound = charArray.indexOf('#', 1);
        let delimiterStart = 0
        let delimiterEnd = 0 + charArray.slice(1, firstEndingPound);
        console.log('ds: ', delimiterStart);
        console.log('de: ', delimiterEnd);
        console.log('ca: ', charArray);

        // while (delimiterEnd < str.length) {
        //     returnStrings.push(charArray.slice(delimiterStart + 1, delimiterEnd + 1).join(''));
        //     delimiterStart = delimiterEnd + 1;
        //     delimiterEnd += Number(charArray[delimiterEnd + 1]) + 1;
        // }
        console.log('::', returnStrings);
        return returnStrings;
    }
}
