// 122. Best Time to Buy and Sell Stock II
// Easy   47%

// Say you have an array for which the ith element is the price of a given stock
// on day i.

// Design an algorithm to find the maximum profit. You may complete as many
// transactions as you like (ie, buy one and sell one share of the stock
// multiple times). However, you may not engage in multiple transactions at the
// same time (ie, you must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  const length = prices.length
  let res = 0
  for (let i = 1; i < length; i++) {
    const profit = prices[i] - prices[i - 1]
    if (profit > 0) {
      res += profit
    }
  }
  return res
}

;[
  [7, 1, 5, 3, 6, 4],
].forEach(prices => {
  console.log(maxProfit(prices))
})

// Solution:
// 记录每一个递增的段落。

// Submission Result: Accepted
