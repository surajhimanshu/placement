//let arr = [1,1,1,1,1];
//let arr = [-5 ,-2, -1, -7, -4];
// let arr = `14 19 18 16 10 12 7 10 10 8 5 2 18 8 2 12 9 7 1 2 5 18`;
 let arr = `18 20 19 2 1 19 11 6 12 16 8 1 1 8 20 1 6 7 9`;




var secondHighest = (arr) => {
   arr = arr.split(" ").map(Number);
    let max = Number.MIN_SAFE_INTEGER;
    let secondHighes = Number.MIN_SAFE_INTEGER;
    for(let key of arr){
        if(key > max) {
            secondHighes = max;
             max = key;
        }else if(secondHighes < key && max !== key){
            secondHighes = key
        }
    }
    console.log(secondHighes === Number.MIN_SAFE_INTEGER ? -1 : secondHighes); 

    //console.log(max)
}

secondHighest(arr);

// var secondHighest = (arr) => {
//     let max = Number.MIN_SAFE_INTEGER;
//     let secondHighes = Number.MIN_SAFE_INTEGER;
//     for(let key of arr){
//         max = Math.max(max , key);
//     }
   
//     for(let key of arr){
//         if(key < max){
//             secondHighes = Math.max(secondHighes , key)
//         }
//     }
//     console.log(secondHighes === max ? "NO second max" : secondHighes)
// }
// secondHighest(arr);


