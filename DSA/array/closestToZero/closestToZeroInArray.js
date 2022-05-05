let arr = [2,4,-4,-1,1,-1,3];
let arr1 = [ 7, -10, 13, -0.001, 8, 4, -7.2, -12, -0.001, -3.7, 3.5, -9.6, 6.5, -1.7, -6.2,7,];
let arr2 =  [5, 6, 7, 9 , -2,  2];
let arr3 =  [-1,-1,-1];

var closest = function (arr){
    if(arr.length === 0){
        console.log("no input")
        return
    }
    let absClosest = Number.MAX_SAFE_INTEGER;
    let closest;
    for(let key of arr){
        if(Math.abs(key) < absClosest){
            absClosest = Math.abs(key);
            closest = key;
        }
         else if(Math.abs(key) === absClosest &&  closest < 0){
          closest = key;
      }
    }
    console.log(closest)
}

closest(arr)
closest(arr1)
closest(arr2)
closest(arr3)


///website 
// function closestToZero(numbers)
// {
//     if (numbers.length === 0) return 0;
    
//     let closest = numbers[0];

//     for(let i = 0; i < numbers.length;i++){
//         let number = numbers[i];
//         let absNumber =  Math.abs(number);
//         let absClosest = Math.abs(closest);

//         if (absNumber < absClosest) 
//         {
//             closest = number;
//         } 
//         else if (absNumber === absClosest && closest < 0) 
//         {
//             closest = number;
//         }
//     }

//     return closest;
// }
//https://ourcodeworld.com/articles/read/1470/how-to-find-the-closest-value-to-zero-from-an-array-with-positive-and-negative-numbers-in-javascript



