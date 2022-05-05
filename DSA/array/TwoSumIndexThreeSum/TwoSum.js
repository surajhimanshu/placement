let arr = [-3,3];
let n = arr.length - 1;
let target  = 6;
function twoSum(arr,n,target){
    let ob = {};
    let flag = false;
    for(let key of arr){
        if(target - key in ob){
            flag = true;
            break
        }
        ob[key] = (ob[key] || 0) + 1;
        
    }
    // for(let key of arr){
    //     if(target - key in ob){
    //         flag = true;
    //         break
    //     }
    // }
    console.log(ob)
    console.log(flag)

}
twoSum(arr,n, target)