var moveZeroes = function(nums) {
    let count = 0;
    let n = nums.length -1
    for(let i=0;i<n;i++){
        if(nums[i] !== 0){
            console.log(nums[i] , "not equal to 0")
            nums[count++] = nums[i];
        }
    }
    while(count < n){
        nums[count++] = 0
    }
    return nums
};

//console.log(moveZeroes([0,1,0,3,12]))