// 717. 1-bit and 2-bit Characters
// Easy   52%


// We have two special characters. The first character can be represented by one
// bit 0. The second character can be represented by two bits (10 or 11).

// Now given a string represented by several bits. Return whether the last
// character must be a one-bit character or not. The given string will always end
// with a zero.

// Example 1:

// Input:
// bits = [1, 0, 0]
// Output: True
// Explanation:
// The only way to decode it is two-bit character and one-bit character. So the
// last character is one-bit character.

// Example 2:

// Input:
// bits = [1, 1, 1, 0]
// Output: False
// Explanation:
// The only way to decode it is two-bit character and two-bit character. So the
// last character is NOT one-bit character.

// Note:

// 1 <= len(bits) <= 1000.
// bits[i] is always 0 or 1.


/**
 * @param {number[]} bits
 * @return {boolean}
 */
const isOneBitCharacter = function(bits) {
  for (let i = 0, n = bits.length; i < n; i++) {
    if (i === n - 1) return true
    if (bits[i]) i++
  }
  return false
}

;[
  [1,0,0],                      // true
  [1,1,1,0],                    // false
].forEach(bits => {
  console.log(isOneBitCharacter(bits))
})

// Solution:
// 遇到一则跳过一个下一个比特，否则不跳过。
// 最后看是否能遍历到最后一个比特0，若能则返回true，否则false。

// Submission Result: Accepted
