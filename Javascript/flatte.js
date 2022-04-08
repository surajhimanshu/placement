let arr = [1, [2, 3], [3], [[[5]], 6]];


const flatten = (arr) => {
  let newArray = arr.reduce((acc, item) => {
    if (Array.isArray(item)) {
        acc = [ ...acc , ...(flatten(item))]
      //  acc = acc.concat(flatten(item));
      } else {
      acc = [...acc, item];
      //acc.push(item);
    } 
    return acc;
  }, []);
  return newArray;
};
//console.log(flatten(arr));

// const flatten = (arr) => {
//   let newArray = arr.reduce((acc, item) => {
//     if (Array.isArray(item)) {
//         // acc = [ ...acc , ...(flat(item))]
//         acc = acc.concat(flatten(item));
//       } else {
//       acc = [...acc, item];
//       //acc.push(item);
//     } 
//     return acc;
//   }, []);
//   return newArray;
// };



// const flat = (arr) => {
//   return arr.reduce((acc, item) => {
//       if(Array.isArray(item)){
//         //  acc = acc.concat(flat(item));
//          acc = [ ...acc , ...(flat(item))]
//       }else{
//         acc.push(item)
//       }
//       return acc
//   },[])
// }

// console.log(flat(arr));

let a = [1,2];
let b = a;
b.push(4)
console.log(  b,a)
console.log( a)