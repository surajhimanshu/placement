// Input: prices = [7,1,5,3,6,4]
// Output: 5
// Explanation: Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6-1 = 5.
// Note that buying on day 2 and selling on day 1 is not allowed because you must buy before you sell.
// Example 2:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: In this case, no transactions are done and the max profit = 0.


var maxProfit = function(arr) {
    let minNo = arr[0];
   let maxP = 0;
    let n = arr.length;
    
   for(let i=1;i<n;i++){
        if(arr[i] > minNo){
           maxP = Math.max(maxP,arr[i] - minNo)

        }else{
            minNo = arr[i]
        }
   }
   return maxP
};

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))