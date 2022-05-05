// Input: digits = [1,2,3]
// Output: [1,2,4]
// Explanation: The array represents the integer 123.
// Incrementing by one gives 123 + 1 = 124.
// Thus, the result should be [1,2,4].
// Example 2:

// Input: digits = [4,3,2,1]
// Output: [4,3,2,2]
// Explanation: The array represents the integer 4321.
// Incrementing by one gives 4321 + 1 = 4322.
// Thus, the result should be [4,3,2,2].
// Example 3:

// Input: digits = [9]
// Output: [1,0]
// Explanation: The array represents the integer 9.
// Incrementing by one gives 9 + 1 = 10.
// Thus, the result should be [1,0].

var plusOne = function(digits) {
    digits.reverse();
    let carry = 1;
    
    for(let i=0;i<digits.length;i++){
        let sum =digits[i] + carry;
        if(sum > 9){
            digits[i] = sum - 10;
            carry = 1
        }else{
            digits[i] = sum;
            carry = 0
        }
        sum = 0
    }
    if(carry === 1){
        digits.push(1)
    }
    return digits.reverse()
};

console.log(plusOne([9,9,9]))
console.log(plusOne([9]))
console.log(plusOne([1,2,3]))
console.log(plusOne([4,3,2,1]))