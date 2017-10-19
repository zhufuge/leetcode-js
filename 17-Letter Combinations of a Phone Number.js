// 17. Letter Combinations of a Phone Number
// Medium 35% locked:false

// Given a digit string, return all possible letter combinations that the number
// could represent.

// A mapping of digit to letters (just like on the telephone buttons) is given
// below.

// Input:Digit string "23"
// Output: ["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].

// Note: Although the above answer is in lexicographical order, your answer
// could be in any order you want.

/**
 * @param {string} digits
 * @return {string[]}
 */
const letterCombinations = function(digits) {
  if (digits.length === 0) return []

  const convert = [' ', '', 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let result = ['']
  digits.split('').forEach(d => {
    const t = []
    convert[d].split('').forEach(
      v => result.forEach(
        r => t.push(r + v)))
    result = t
  })

  return result
}

console.log(letterCombinations(''))
