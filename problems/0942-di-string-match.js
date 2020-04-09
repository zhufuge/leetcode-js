// 942. DI String Match
// Easy   71%


// Given a string S that only contains "I" (increase) or "D" (decrease), let N =
// S.length.
// Return any permutation A of [0, 1, ..., N] such that for all i = 0, ..., N-1:
//     If S[i] == "I", then A[i] < A[i+1]
//     If S[i] == "D", then A[i] > A[i+1]

// Example 1:
// Input: "IDID"
// Output: [0,4,1,3,2]
// Example 2:
// Input: "III"
// Output: [0,1,2,3]
// Example 3:
// Input: "DDI"
// Output: [3,2,0,1]

// Note:
//     1 <= S.length <= 10000
//     S only contains characters "I" or "D".


/**
 * @param {string} S
 * @return {number[]}
 */
const diStringMatch = function(S) {
  let p = 0, q = S.length
  const result = []
  for (let c of S) result.push(c == 'I' ? p++ : q--)
  result.push(p)
  return result
}

;[
  'IDID', // [0,4,1,3,2]
  'III',  // [0,1,2,3]
  'DDI',  // [3,2,0,1]
].forEach((S) => {
  console.log(diStringMatch(S))
})

// Solution:
// 先将 p 和 q 指向数列 [0, 1, ..., N] 的两端，从两端开始取数，
// 遍历字符串
// 若字符为 'I'，则将 最左端的数（最小）插入，这样就确保了无论后一位是什么数，都会大于该数。
// 若字符不为 'I' （为 'D'），则将 最右端的数（最大）插入，理由同上（小于）。

// Submission Result: Accepted