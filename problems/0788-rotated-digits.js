// 788. Rotated Digits
// Easy   57%


// X is a good number if after rotating each digit individually by 180 degrees,
// we get a valid number that is different from X.  Each digit must be rotated -
// we cannot choose to leave it alone.
// A number is valid if each digit remains a digit after rotation. 0, 1, and 8
// rotate to themselves; 2 and 5 rotate to each other (on this case they are
// rotated in a different direction, in other words 2 or 5 gets mirrored); 6 and
// 9 rotate to each other, and the rest of the numbers do not rotate to any other
// number and become invalid.
// Now given a positive number N, how many numbers X from 1 to N are good?
// Example:
// Input: 10
// Output: 4
// Explanation:
// There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after
// rotating.
// Note:
//     N  will be in range [1, 10000].


/**
 * @param {number} N
 * @return {number}
 */
const rotatedDigits = function(N) {
  let res = 0
  for (let i = 1; i <= N; i++) {
    let n = i, p = false, q = true
    while (n > 0 && q) {
      const j = n % 10
      if (j === 2 || j === 5 || j === 6 || j === 9) p = true
      if (j === 3 || j === 4 || j === 7) q = false
      n = Math.floor(n / 10)
    }
    if (p && q) res++
  }
  return res
}

;[
  10, // 4
  20, // 9
].forEach((N) => {
  console.log(rotatedDigits(N))
})

// Solution:
// 当出现数字 3，4，7 时，一定不是
// 至少包含（2，5，6，9）中的一个

// Submission Result: Accepted