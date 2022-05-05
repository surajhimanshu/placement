var containsNearbyDuplicate = function(nums, k) {
    for(let i=0;i<nums.length;i++){
        let j = i+1;
        for(let l=0;l<=k;l++,j++){
            if(i === j) continue
            if(nums[i] === nums[j] && Math.abs(i-j) <= k){
                return true
            }
        }
    }
    return false
};
console.log(containsNearbyDuplicate([99,99],2)) //true
console.log(containsNearbyDuplicate([2,2],3))  //trur
console.log(containsNearbyDuplicate([1,2,3,1,2,3],2)) //false
console.log(containsNearbyDuplicate([1,2,3,1],3)) //true
console.log(containsNearbyDuplicate([1,0,1,1],1)) // true
 console.log(containsNearbyDuplicate([4,1,2,3,1,5], 3)) //true
 console.log(containsNearbyDuplicate([1,2,3,4,5,6,7,8,9,9],3 )) //true
