// 17. Letter Combinations of a Phone Number
// Medium   35%

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

  const LETTERS = [
    ' ',                        // 0
    '',                         // 1
    'abc',                      // 2
    'def',                      // 3
    'ghi',                      // 4
    'jkl',                      // 5
    'mno',                      // 6
    'pqrs',                     // 7
    'tuv',                      // 8
    'wxyz'                      // 9
  ]
  const result = ['']
  for (let digit of digits) {
    for (let i = 0, m = result.length; i < m; i++) {
      const prev = result.shift()
      for (let letter of LETTERS[digit]) {
        result.push(prev + letter)
      }
    }
  }
  return result
}

;[
  '',                           // []
  '23',
].forEach(digits => {
  console.log(letterCombinations(digits))
})

// Solution:
// 像是一棵树一样在增长。
// 每输入一个数，树就的每个分子都增长一层。
// 利用先进先出队列模拟树的层级生长。
// 每个输入的数字代表一层。
// 每进入一层，都记录当前分支的长度，即当前队列的长度。
// 对该层的每个元素从头弹出队列，并与该层的数字代表的所有字母组合，
// 然后添加到队尾。

// Submission Result: Accepted
