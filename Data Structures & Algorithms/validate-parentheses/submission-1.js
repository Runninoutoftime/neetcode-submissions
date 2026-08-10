class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        const map = {
            '(' : ')',
            '[' : ']',
            '{' : '}'
        }
        // Stack is LIFO
        const stack = [];
        const charArray = s.split('');
        for (let char of charArray) {
            if (char === '(' || char === '[' || char === '{')
                stack.push(char);
            if (char === ')' || char === ']' || char === '}') {
                const pop = stack.pop();
                if (map[pop] !== char) {
                    return false;
                }
            }
        }
        if (stack.length === 0)
            return true;
        else
            return false;
        // console.log(charArray)
    }
}
