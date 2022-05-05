// 122. Best Time to Buy and Sell Stock II
// Input: prices = [7,1,5,3,6,4]
// Output: 7
// Explanation: Buy on day 2 (price = 1) and sell on day 3 (price = 5), profit = 5-1 = 4.
// Then buy on day 4 (price = 3) and sell on day 5 (price = 6), profit = 6-3 = 3.
// Total profit is 4 + 3 = 7.
// Example 2:

// Input: prices = [1,2,3,4,5]
// Output: 4
// Explanation: Buy on day 1 (price = 1) and sell on day 5 (price = 5), profit = 5-1 = 4.
// Total profit is 4.
// Example 3:

// Input: prices = [7,6,4,3,1]
// Output: 0
// Explanation: There is no way to make a positive profit, so we never buy the stock to achieve the maximum profit of 0.

// var maxProfit = function(prices) {
//     let minNo = prices[0];
//     let sum = 0;

//     for(let i=1;i<prices.length;i++){
//             if( minNo < prices[i]){
//                 sum += prices[i] - prices[i-1];
//                 minNo = prices[i];
//             }else{
//                 minNo = prices[i]
//             }
//     }
//     return sum
// };

// console.log(maxProfit([1,2,3,4,5]))
// console.log(maxProfit([7,6,4,3,1]))
// console.log(maxProfit([7,1,5,3,6,4]))

