// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


// var rotate = function(nums, k) {
//     k  %= nums.length  ;
//     if(k === 0){
//         return nums;
//     }
//     var reverse = function (nums,l,h){
//     while(l<=h){
//         [nums[l],nums[h]] = [nums[h],nums[l]];
//         h--;
//         l++;
//         }
//     }
//     reverse(nums,0,nums.length - k - 1);
//     reverse(nums, nums.length - k,nums.length -1)
//     reverse(nums, 0, nums.length -1);
//     return nums
// };

// console.log(rotate([1,2,3,4,5,6,7],3))
// console.log(rotate([-1,-100,3,99],2))


// var merge = function (nums1, m, nums2, n) {
//     let arr = [...nums1];
//     let i = 0;
//     let j = 0;
//     let c = 0;
//     while (i < m && j < n) {
//       if (arr[i] < nums2[j]) {
//         console.log(nums1,i,j)

//         nums1[c++] = arr[i++]
//       } else {
//         console.log(nums1,i,j)
//         nums1[c++] = nums2[j++];
//       }
//     }
//     //console.log(nums1)
//     while (i < m) {
//       nums1[c++] = arr[i++]
//     }
//     while (j < n) {
//       nums1[c++] = nums2[j++];
//     }
//     return nums1
//   };

//    //console.log(merge([1,2,3,0,0,0],3,[2,5,6],3))

//    const containsDuplicate = nums => {
//     let map = new Map()
  
//     for (const num of nums) {
//       if (map.has(num)) {
//         return true
//       }
//       map.set(num)
//     }
//   console.log(map);
//     return false
//   }
//   containsDuplicate([1,2])











  var rotate = function(nums, k) {
    k  %= nums.length  ;
    if(k === 0){
        return nums;
    }
    var reverse = function (nums,l,h){
    while(l<=h){
        [nums[l],nums[h]] = [nums[h],nums[l]];
        h--;
        l++;
        }
    }
    reverse(nums, 0, nums.length -1);
    reverse(nums,0, k -  1);
    reverse(nums, k,nums.length -1)
    return nums
};

console.log(rotate([1,2,3,4,5,6,7],3))
console.log(rotate([-1,-100,3,99],2))