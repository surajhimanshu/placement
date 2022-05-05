// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2

var majorityElement = function (nums) {
  let count = 1;
  let major = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[major] === nums[i]) {
      count++;
    } else {
      count--;
    }

    if (count === 0) {
      major = i;
      count = 1;
    }
  }
  return nums[major];
};

console.log(majorityElement([3, 2, 3 ,3]));
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
