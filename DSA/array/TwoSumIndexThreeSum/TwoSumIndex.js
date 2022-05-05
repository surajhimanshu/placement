let arr = [-4,1,3,-6];
let n = arr.length - 1;
let target  = -5;
function twoSum(arr,n,target){
    let ob = {};
    for(let i =0;i<=n;i++){
        if(target - arr[i] in ob){
            console.log(ob[target - arr[i]], i)
        }
        ob[arr[i]] = i;    
    }
}
twoSum(arr,n, target)