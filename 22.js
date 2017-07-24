// Given n pairs of parentheses, write a function to generate all combinations
// of well-formed parentheses.

// For example, given n = 3, a solution set is:

// [
//   "((()))",
//   "(()())",
//   "(())()",
//   "()(())",
//   "()()()"
// ]

/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function(n) {
  const pare = [[], ['()']]

  for (let i = 2; i <= n; i++) {
    pare[i] = pare[i - 1].map(v => `(${v})`)
    for (let j = i - 1; j > 0; j--)
      for (let p of pare[j])
        for (let q of pare[i - j])
          if (!pare[i].includes(p + q))
            pare[i].push(p + q)
  }

  return pare[n]
}

console.log(generateParenthesis(4))

const easier = function(n) {
  const list = []
  const backtrack = (str, open, close) => {
    if(str.length === n * 2){
      list.push(str)
      return
    }

    if(open < n) backtrack(str + '(', open + 1, close)
    if(close < open) backtrack(str + ')', open, close + 1)
  }

  backtrack('', 0, 0, n)
  return list
}

console.log(easier(4))
