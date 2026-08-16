class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        class HashMap {

    constructor(array) {
        this.arraySize = array.length;
        this.hashMap = new Array(this.arraySize).fill(null).map(() => []);
    }

    hashFunction = (value) => {
        return value % this.arraySize;
    }

    add = (value) => {
        let index = this.hashFunction(value);
        if (!this.hashMap[index].includes(value)) {
            this.hashMap[index].push(value);
        }
    }

    has = (value) => {
        let hashedValue = this.hashFunction(value);
        return this.hashMap[index].includes(value);
    }

    length = () => {
        return this.hashMap.reduce((acc, bucket) => acc + bucket.length, 0);
    }
}
const hashMap = new HashMap(nums);
nums.forEach((num) => hashMap.add(num))
console.log(hashMap.length())
if (hashMap.length() !== nums.length) {
    return true;
}
return false;
    }
}
