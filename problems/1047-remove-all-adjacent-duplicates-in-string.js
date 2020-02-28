// 1047. Remove All Adjacent Duplicates In String
// Easy   66%


// Given a string S of lowercase letters, a duplicate removal consists of
// choosing two adjacent and equal letters, and removing them.
// We repeatedly make duplicate removals on S until we no longer can.
// Return the final string after all such duplicate removals have been made.  It
// is guaranteed the answer is unique.

// Example 1:
// Input: "abbaca"
// Output: "ca"
// Explanation:
// For example, in "abbaca" we could remove "bb" since the letters are adjacent
// and equal, and this is the only possible move.  The result of this move is
// that the string is "aaca", of which only "aa" is possible, so the final string
// is "ca".

// Note:
//     1 <= S.length <= 20000
//     S consists only of English lowercase letters.


/**
 * @param {string} S
 * @return {string}
 */
const removeDuplicates = function(S) {
  const n = S.length
  const arr = S.split('')
  let i = 0
  for (let j = 0; j < n; j++, i++) {
    arr[i] = arr[j]
    if (i > 0 && arr[i] == arr[i - 1]) i -= 2
  }
  return arr.slice(0, i).join('')
}

;[
  'abbaca',             // 'ca'
].forEach((S) => {
  console.log(removeDuplicates(S))
})

// Solution:
// 使用两个指针，一个负责遍历数组，
// 另一个随机变动，遇到相同数则往回指（相当于跳过），只有不同时才往后指。

// Submission Result: Accepted