// 345. Reverse Vowels of a String
// Easy   38%


// Write a function that takes a string as input and reverse only the vowels of a
// string.

// Example 1:
// Given s = "hello", return "holle".

// Example 2:
// Given s = "leetcode", return "leotcede".

// Note:
// The vowels does not include the letter "y".


/**
 * @param {string} s
 * @return {string}
 */
const reverseVowels = function(s) {
  const VOWELS = { a: true, e: true, i: true, o: true, u: true ,
                   A: true, E: true, I: true, O: true, U: true }
  const stack = []
  for (let c of s) if (VOWELS[c]) stack.push(c)

  let result = ''
  for (let c of s) result += VOWELS[c] ? stack.pop() : c
  return result
}

;[
  'hello',                      // 'holle'
  'leetcode',                   // 'leotcede'
  'Aa',                         // 'aA'
].forEach(s => {
  console.log(reverseVowels(s))
})

// Solution:
// 用一个哈希表保存元音字母，方便判断某字母是否为元音
// 用一个栈来保存字符串中出现的元音字母
// 最后构造新字符时，若不是元音则直接用原来的字符，
// 否则，用从栈顶弹出的字符。

// Submission Result: Accepted
