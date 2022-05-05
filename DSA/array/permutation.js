let res = [];
var permute = function(nums) {
    permutation(nums,0)
    return res
};

function permutation(arr,curr){
    if(curr == arr.length){
        res.push([...arr]);
        return
    }
    for(let i=curr;i<arr.length;i++){
        [arr[i],arr[curr]] = [arr[curr],arr[i]];
        permutation(arr,curr + 1);
        [arr[i],arr[curr]] = [arr[curr],arr[i]];
    }
    
}
permute([1,2,3]);

console.log(res)