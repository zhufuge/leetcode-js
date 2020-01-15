// 123. Best Time to Buy and Sell Stock III
// Hard 29% locked:false

// Say you have an array for which the ith element is the price of a given stock
// on day i.

// Design an algorithm to find the maximum profit. You may complete at most two
// transactions.

// Note: You may not engage in multiple transactions at the same time (ie, you
// must sell the stock before you buy again).

/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function(prices) {
  if (prices.length <= 1) return 0
  let hold1 = -Infinity, hold2 = -Infinity,
      release1 = 0, release2 = 0
  for (let price of prices) {
    release2 = Math.max(release2, hold2 + price)
    hold2 = Math.max(hold2, release1 - price)
    release1 = Math.max(release1, hold1 + price)
    hold1 = Math.max(hold1, -price)
  }
  return release2
}

;[
  [1,2,4,2,5,7,2,4,9,0],
].forEach(prices => {
  console.log(maxProfit(prices))
})


// 尝试：
// 找出每一个连续递增的段，在从中找出提升最大的两个。
