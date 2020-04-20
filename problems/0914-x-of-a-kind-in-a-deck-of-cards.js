// 914. X of a Kind in a Deck of Cards
// Easy   34%


// In a deck of cards, each card has an integer written on it.
// Return true if and only if you can choose X >= 2 such that it is possible to
// split the entire deck into 1 or more groups of cards, where:
//     Each group has exactly X cards.
//     All the cards in each group have the same integer.

// Example 1:
// Input: deck = [1,2,3,4,4,3,2,1]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[3,3],[4,4].
// Example 2:
// Input: deck = [1,1,1,2,2,2,3,3]
// Output: false
// Explanation: No possible partition.
// Example 3:
// Input: deck = [1]
// Output: false
// Explanation: No possible partition.
// Example 4:
// Input: deck = [1,1]
// Output: true
// Explanation: Possible partition [1,1].
// Example 5:
// Input: deck = [1,1,2,2,2,2]
// Output: true
// Explanation: Possible partition [1,1],[2,2],[2,2].

// Constraints:
//     1 <= deck.length <= 10^4
//     0 <= deck[i] < 10^4


/**
 * @param {number[]} deck
 * @return {boolean}
 */
const hasGroupsSizeX = function(deck) {
  const hash = {}
  for (let a of deck) hash[a] = (hash[a] || 0) + 1

  function gcd(a, b) {
    return a % b ? gcd(b, a % b) : b
  }

  let res = 0
  for (let key in hash) res = gcd(res, hash[key])
  return res > 1
}

;[
  [1,2,3,4,4,3,2,1], // true
  [1,1,1,2,2,2,3,3], // false
  [1],               // false
  [1,1],             // true
  [1,1,2,2,2,2],     // true
  [1,1,1,1,2,2,2,2,2,2], // true
].forEach((deck) => {
  console.log(hasGroupsSizeX(deck))
})

// Solution:
// 用 hash 记录每一个数出现的次数，
// 找出最少次数和最多次数，
// 若最少次数小于 2, 返回 false，
// 否则 寻找 从 2 开始到 max 中，是否有一个数为所有次数的公约数，若是则返回true。

// 数论的方法（使用最大公约数）
// 同样用 hash 记录每一个数出现的次数，
// 求所有数的最大公约数，若该数大于 1，则返回 true , 否则false

// Submission Result: Accepted