// 9. Palindrome Number
// Easy   35%

// Determine whether an integer is a palindrome. Do this without extra space.

// click to show spoilers. Some hints:
// Could negative integers be palindromes? (ie, -1)

// If you are thinking of converting the integer to string, note the restriction
// of using extra space.

// You could also try reversing an integer. However, if you have solved the
// problem "Reverse Integer", you know that the reversed integer might overflow.
// How would you handle such case?

// There is a more generic way of solving this problem.

/**
 * @param {number} x
 * @return {boolean}
 */
const isPalindrome = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false
  let half = 0
  while (x > half) {
    half = half * 10 + x % 10
    x = Math.trunc(x / 10)
  }

  return x === half || x === Math.trunc(half / 10)
}

;[
  -12321,                       // false
  9,                            // true
].forEach(x => {
  console.log(isPalindrome(x))
})

// Solution:
// 若 x 小于0，则不可能是回文数
// 若 x 不为0且末位有0，也不可能为回文数，因为一个数不含前缀0。

// 构造一个新的数，其为原数字长度的一半或者一半多一。
// 其值为原数字的后一半的倒序。

// 如 x=1213121， 则新数为 half=1213，这时经过运算，原数字变为 x=121。
// 若 x 的位数为偶数，则比较 x 是否等于 half。
// 若为奇数，则比较 x 是否等于 half / 10。

// Submission Result: Accepted
