// 917. Reverse Only Letters
// Easy   57%


// Given a string S, return the "reversed" string where all characters that are
// not a letter stay in the same place, and all letters reverse their positions.

// Example 1:
// Input: "ab-cd"
// Output: "dc-ba"
// Example 2:
// Input: "a-bC-dEf-ghIj"
// Output: "j-Ih-gfE-dCba"
// Example 3:
// Input: "Test1ng-Leet=code-Q!"
// Output: "Qedo1ct-eeLg=ntse-T!"

// Note:
//     S.length <= 100
//     33 <= S[i].ASCIIcode <= 122
//     S doesn't contain \ or "


/**
 * @param {string} S
 * @return {string}
 */
const reverseOnlyLetters = function(S) {
  function isLetters(c) {
    return ('a' <= c && c <= 'z') || ('A' <= c && c <= 'Z')
  }
  S = S.split('')
  let i = 0, j = S.length - 1
  while (i < j) {
    if (!isLetters(S[i])) {
      i++
    } else if (!isLetters(S[j])) {
      j--
    } else {
      const t = S[i]
      S[i] = S[j]
      S[j] = t
      i++
      j--
    }
  }
  return S.join('')
}

;[
  'ab-cd',                // 'dc-ba'
  'a-bC-dEf-ghIj',        // 'j-Ih-gfE-dCba'
  'Test1ng-Leet=code-Q!', // 'Qedo1ct-eeLg=ntse-T!'
].forEach((S) => {
  console.log(reverseOnlyLetters(S))
})

// Solution:

// Submission Result: Accept