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
  if (prices.length === 0) return 0

  let max = 0, minPrice = prices[0], profit = 0
  for (let price of prices) {
    if (price < minPrice) minPrice = price
    if (price - minPrice > profit) profit = price - minPrice
    else {
      max += profit
      minPrice = price
      profit = 0
    }
  }
  return max + profit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))
