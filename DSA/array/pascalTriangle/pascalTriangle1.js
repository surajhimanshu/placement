// Input: numRows = 5
// Output: [[1],[1,1],[1,2,1],[1,3,3,1],[1,4,6,4,1]]
// Example 2:

// Input: numRows = 1
// Output: [[1]]

var generate = function(numRows) {
    let arr = [];
    arr[0] = [1]
    if(numRows === 1) {
       return arr
    }
    arr[1] = [1,1]
    if(numRows === 2) {
        return arr;
    }
    for(let i = 2;i<numRows ;i++){
        let pas = [];
        let prev = arr[i-1];
        for(let j=0;j<=prev.length;j++){
            if(j === 0 || j === prev.length){
                pas.push(1)
            }else{
                pas.push(prev[j-1] + prev[j])
            }
        }
        arr.push(pas)
        
    }
    return arr
};

console.log(generate(4));
console.log(generate(2));

