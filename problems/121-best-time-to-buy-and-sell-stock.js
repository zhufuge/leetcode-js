// 121. Best Time to Buy and Sell Stock
// Easy   41%

// Say you have an array for which the ith element is the price of a given stock
// on day i.

// If you were only permitted to complete at most one transaction (ie, buy one
// and sell one share of the stock), design an algorithm to find the maximum
// profit.

// Example 1:

// Input: [7, 1, 5, 3, 6, 4]
// Output: 5

// max. difference = 6-1 = 5 (not 7-1 = 6, as selling price needs to be larger
// than buying price)

// Example 2:

// Input: [7, 6, 4, 3, 1]
// Output: 0

// In this case, no transaction is done, i.e. max profit = 0.

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (prices.length === 0) return 0
  let max = 0, minPrice = prices[0]
  for (let price of prices) {
    if (price < minPrice) minPrice = price
    if (price - minPrice > max) max = price - minPrice
  }
  return max
}


;[
  [7, 1, 5, 3, 6, 4],
  [7, 6, 4, 3, 1],
].forEach(prices => {
  console.log(maxProfit(prices))
})


// Solution:
// 设置两个变量
// max 表示最大的收益
// minPrice 表示从第一天开始时到当前天中的最小价格

// 遍历数组
// 若数比 minPrice 小，则更新 minPrice
// 若数减去 minPrice 比 max 大，则更新 max

// 最后返回 max 作为答案

// Submission Result: Accepted
