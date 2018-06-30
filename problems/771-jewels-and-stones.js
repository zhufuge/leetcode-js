// 771. Jewels and Stones
// Easy 82%

// You're given strings J representing the types of stones that are jewels, and
// S representing the stones you have.  Each character in S is a type of stone
// you have.  You want to know how many of the stones you have are also jewels.

// The letters in J are guaranteed distinct, and all characters in J and S are
// letters. Letters are case sensitive, so "a" is considered a different type
// of stone from "A".

// Example 1:

// Input: J = "aA", S = "aAAbbbb"
// Output: 3

// Example 2:

// Input: J = "z", S = "ZZ"
// Output: 0

// Note:
//   - S and J will consist of letters and have length at most 50.
//   - The characters in J are distinct.

/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
const numJewelsInStones = function(J, S) {
  const hash = {}
  for (let j of J) hash[j] = true
  let result = 0
  for (let s of S) {
    if (hash[s]) result++
  }
  return result
}

;[
  ['aA', 'aAAbbbb'],
  ['z', 'ZZ'],
].forEach(args => {
  console.log(numJewelsInStones(...args))
})

// Solution:
// 使用一个哈希表保存宝石种类,
// 再判断 S 中的每个字符代表的是否宝石。

// Submission Result: Accepted