// 844. Backspace String Compare
// Easy   47%


// Given two strings S and T, return if they are equal when both are typed into
// empty text editors. # means a backspace character.
// Note that after backspacing an empty text, the text will continue empty.
// Example 1:
// Input: S = "ab#c", T = "ad#c"
// Output: true
// Explanation: Both S and T become "ac".
// Example 2:
// Input: S = "ab##", T = "c#d#"
// Output: true
// Explanation: Both S and T become "".
// Example 3:
// Input: S = "a##c", T = "#a#c"
// Output: true
// Explanation: Both S and T become "c".
// Example 4:
// Input: S = "a#c", T = "b"
// Output: false
// Explanation: S becomes "c" while T becomes "b".
// Note:
//     1 <= S.length <= 200
//     1 <= T.length <= 200
//     S and T only contain lowercase letters and '#' characters.
// Follow up:
//     Can you solve it in O(N) time and O(1) space?


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
const backspaceCompare = function(S, T) {
  let countS = 0, countT = 0
  let i = S.length - 1, j = T.length - 1
  while (i >= 0 || j >= 0) {
    if (S[i] === '#') {
      countS++
      i--
    } else if (countS > 0) {
      countS--
      i--
    } else if (T[j] === '#') {
      countT++
      j--
    } else if (countT > 0) {
      countT--
      j--
    } else if (countS === 0 && countT === 0) {
      if (S[i] !== T[j]) return false
      i--
      j--
    }
  }
  return (i < 0 && j < 0) || i === j
}

;[
  ['ab#c', 'ad#c'], // true
  ['ab##', 'c#d#'], // true
  ['a##c', '#a#c'], // true
  ['a#c', 'b'], // false
  ['ab#cab##ab#c', 'ad#cc#d#ad#c'], // true
  ['ab#c', 'xad#c'], // false
  ['xab#c', 'ad#c'], // false
  ['bxj##tw', 'bxo#j##tw'], // true
].forEach(([S, T]) => {
  console.log(backspaceCompare(S, T))
})


// Solution:
// 最简单的方法：使用两个栈
// 使用栈来获取最终输入的字符串。
// 遇到一般字母，则字符入栈；遇到 ‘#’，则出栈一个字符。

// 使用一个栈
// 用栈来获取 S 字符串的最终输入字符串。
// 从 T 的末尾遍历，遇到字符则与栈顶比较，不同则返回 false；遇到 ‘#’，则记录，用来跳过字符。
// 遍历完后判断栈是否为空。

// TO(N)-SO(1)
// 分析使用一个栈的方法，进一步思考，尝试从两个字符串末尾开始遍历。
// countS\countT 分别记录当前 ‘#’ 的个数，若其中一个大于0，则该字符串忽略一个字符，个数减一
// 若都为0，则判断两个字符是否相等


const twoStack = function(S, T) {
  const stackA = [], stackB = []
  for (let c of S) {
    if (c === '#') stackA.pop()
    else stackA.push(c)
  }
  for (let c of T) {
    if (c === '#') stackB.pop()
    else stackB.push(c)
  }
  return stackA.join('') === stackB.join('')
}

const oneStack = function(S, T) {
  const stack = []
  for (let c of S) {
    if (c === '#') stack.pop()
    else stack.push(c)
  }
  let count = 0
  for (let i = T.length - 1; i >= 0; i--) {
    if (T[i] === '#') count++
    else if (count > 0) count--
    else if (T[i] !== stack.pop()) return false
  }
  return stack.length === 0
}

// Submission Result: Accepted