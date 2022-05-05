// Input: rowIndex = 3
// Output: [1,3,3,1]
// Example 2:

// Input: rowIndex = 0
// Output: [1]
// Example 3:

// Input: rowIndex = 1
// Output: [1,1]


var getRow = function(numRows) {
    let arr = [];
    arr[0] = [1]
    if(numRows=== 0) {
       return arr[0]
    }
    arr[1] = [1,1]
    if(numRows=== 1) {
        return arr[1];
    }
    for(let i = 2;i<=numRows ;i++){
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
    return arr[numRows]
};

//console.log(generate(4));
console.log(getRow(1));