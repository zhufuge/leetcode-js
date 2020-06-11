// 1217. Play with Chips
// Easy   64%


// There are some chips, and the i-th chip is at position chips[i].
// You can perform any of the two following types of moves any number of times
// (possibly zero) on any chip:
//     Move the i-th chip by 2 units to the left or to the right with a cost of
// 0.
//     Move the i-th chip by 1 unit to the left or to the right with a cost of 1.
// There can be two or more chips at the same position initially.
// Return the minimum cost needed to move all the chips to the same position (any
// position).

// Example 1:
// Input: chips = [1,2,3]
// Output: 1
// Explanation: Second chip will be moved to positon 3 with cost 1. First chip
// will be moved to position 3 with cost 0. Total cost is 1.
// Example 2:
// Input: chips = [2,2,2,3,3]
// Output: 2
// Explanation: Both fourth and fifth chip will be moved to position two with
// cost 1. Total minimum cost will be 2.

// Constraints:
//     1 <= chips.length <= 100
//     1 <= chips[i] <= 10^9


/**
 * @param {number[]} chips
 * @return {number}
 */
const minCostToMoveChips = function(chips) {
  let res = 0
  for (let p of chips) {
    if (p % 2) res++
  }
  return Math.min(res, chips.length - res)
}

;[
  [1,2,3],
  [2,2,2,3,3],
  [1,2,3,4,5,6,7,8,9],
].forEach((chips) => {
  console.log(minCostToMoveChips(chips))
})

// Solution:
// 因为移动2个单元格的费用为0，所以可以将所有奇数位置移动到同一个位置 i 上，所有偶数位置也移动
// 到同一个位置 j 上。再将 i 上的全部移动到 j 的旁边（左或右，j-1或j+1）上。
// 比较 i 和 j 上的数量，将小的一边移动到大的一边，费用为小的一边的数量。
// 即只需计算数组中奇数的数量和偶数的数量，并取其小者。

// Submission Result: Accepted