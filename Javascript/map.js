function CustomArray () {
    Object.defineProperty(this,'length',{
        enumerable:false,
        writable:true,
        value:0
    })
}

CustomArray.prototype.push = function (element){
    this[this.length++] = element;
    return this.length;
}
CustomArray.prototype.pop = function (element){
    let popValue = this[this.length--];
    delete this[this.length];
    return popValue;
}

CustomArray.prototype.maps = function (callback){
    let res = new CustomArray();
    for(let index in this){
        if(this.hasOwnProperty(index)){
            let val = callback(this[index] , index, Object.values(this));
            res.push(val);
        }
    }
    return res
}

CustomArray.prototype.filter = function (callback){
    let result = new CustomArray();
    for(let index in this){
        if(this.hasOwnProperty(index) && callback(this[index], index, Object.values(this))){
            result.push(this[index]);
        }
    }
    return result
}
const arr = new CustomArray();
arr.push(1)
arr.push(3)
arr.push(4)
arr.push(0)
arr.push(10)
arr.push(9)
arr.pop()
let result = arr.maps((item) => item * 22);
console.log(Object.values(result))
let fltered = arr.filter((item) =>  item % 2 === 0 );
console.log(Object.values(fltered))







// for practice purpose
// class CustomArray {
//   constructor() {
//     this.length = 0;
//     this.array = [];
//   }
//   newData(){
//       return this.array
//   }
//   push(item) {
//     this.array[this.length] = item;
//     this.length++;
//   }
//   maps(callback) {
//     const length = this.length;
//     let data = [...this.array];
//     for (let i = 0; i < length; i++) {
//       data[i] = callback(data[i]);
//     }
//     return data;
//   }
// }
//  let arr = new CustomArray();

// arr.push(9);
// arr.push(8);
// arr.push(7);
// let result = arr.maps((item) => item * 2);
// console.log(result);
// console.log(arr.newData())