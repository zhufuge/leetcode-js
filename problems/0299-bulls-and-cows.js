// 299. Bulls and Cows
// Medium   36%


// You are playing the following Bulls and Cows game with your friend: You write
// down a number and ask your friend to guess what the number is. Each time your
// friend makes a guess, you provide a hint that indicates how many digits in
// said guess match your secret number exactly in both digit and position (called
// "bulls") and how many digits match the secret number but locate in the wrong
// position (called "cows"). Your friend will use successive guesses and hints to
// eventually derive the secret number.
// Write a function to return a hint according to the secret number and friend's
// guess, use A to indicate the bulls and B to indicate the cows.
// Please note that both secret number and friend's guess may contain duplicate
// digits.

// Example 1:
// Input: secret = "1807", guess = "7810"
// Output: "1A3B"
// Explanation: 1 bull and 3 cows. The bull is 8, the cows are 0, 1 and 7.

// Example 2:
// Input: secret = "1123", guess = "0111"
// Output: "1A1B"
// Explanation: The 1st 1 in friend's guess is a bull, the 2nd or 3rd 1 is a cow.

// Note: You may assume that the secret number and your friend's guess only
// contain digits, and their lengths are always equal.

/**
 * @param {string} secret
 * @param {string} guess
 * @return {string}
 */
const getHint = function(secret, guess) {
  const digits = Array(10).fill(0)
  let bulls = 0, cows = 0
  for (let i = 0; i < secret.length; i++) {
    const si = secret[i], gi = guess[i]
    if (si === gi) {
      bulls++
    } else {
      if (digits[si] < 0) cows++
      digits[si]++
      if (digits[gi] > 0) cows++
      digits[gi]--
    }
  }
  return bulls + 'A' + cows + 'B'
}

;[
  ['', ''],               // 0A0B
  ['1807', '7810'],       // 1A3B
  ['1123', '0111'],       // 1A1B
  ['011101', '101010'],   // 1A4B
].forEach((args) => {
  console.log(getHint(...args))
})

// Solution:
// 方法一：
// 1. 使用一个长度为 10 的数组记录每个数在 secret 出现的次数；
// 2. 再遍历一遍，寻找 bulls, 以及看 guess 中有多少数字出现在了 secret
//   中（包括 bulls)；
// 3. 得到 bulls 和 cows。

// 方法二：
// 使用一个长度为 10 的数组 digits 记录数字的信息；在 secret 中出现，则用正数，
// 在 guess 中出现，则用负数。

// Submission Result: Accepted