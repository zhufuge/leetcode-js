// 9. Palindrome Number
// Easy 35% locked:false

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
  if (x < 0) return false
  let n = 0
  for (let t = x; t > 0; n++) t = Math.trunc(t / 10)

  while (n > 0) {
    if (Math.trunc(x / (Math.pow(10, n - 1))) !== (x % 10)) return false
    x = Math.trunc(x % (Math.pow(10, n - 1)) / 10)
    n -= 2
  }

  return true
}

console.log(isPalindrome(-12321))

const best = function(x) {
  if (x < 0 || (x !== 0 && x % 10 === 0)) return false
  let rev = 0
  while (x > rev){
    rev = rev * 10 + x % 10
    x = Math.trunc(x / 10)
  }
  return x === rev || x === Math.trunc(rev / 10)
}
