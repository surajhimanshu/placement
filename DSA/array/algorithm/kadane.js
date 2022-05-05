let arr = [-2, -3, 4, -1, -2, 1, 5, -3];

let sum = 0;
let max = Number.MIN_SAFE_INTEGER;
for(let i=0;i<arr.length;i++){
    sum += arr[i];
    max = Math.max(sum,max);
    // if(sum > max){
    //     max = sum;
    // }
    if(max < 0){
        sum = 0;
    }
} 
console.log(max)  