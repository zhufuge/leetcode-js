// 374. Guess Number Higher or Lower
// Easy   42%


// We are playing the Guess Game. The game is as follows:
// I pick a number from 1 to n. You have to guess which number I picked.
// Every time you guess wrong, I'll tell you whether the number is higher or
// lower.
// You call a pre-defined API guess(int num) which returns 3 possible results
// (-1, 1, or 0):
// -1 : My number is lower
//  1 : My number is higher
//  0 : Congrats! You got it!
// Example :
// Input: n = 10, pick = 6
// Output: 6


/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	        -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
const guessNumber = function(n) {
  let i = 1, mid = 1, guessRes = 0
  while (i < n) {
    mid = (i + n) >>> 1
    guessRes = guess(mid)
    if (guessRes === 0) return mid
    else if (guessRes === 1) i = mid + 1
    else n = mid - 1
  }
  return i
}

const pick_obj = { number: 0 }
function guess(num) {
  if (pick_obj.number === num) return 0
  else if (pick_obj.number > num) return 1
  else return -1
}
;[
  [10, 6],
  [100, 1],
  [100, 100],
  [10, -1],
  [10, 11],
].forEach(([n, pick]) => {
  pick_obj.number = pick
  console.log(guessNumber(n))
})

// Solution:
// 二分查找法来完成。

// Submission Result: Accepted