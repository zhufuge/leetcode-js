// 1018. Binary Prefix Divisible By 5
// Easy   47%


// Given an array A of 0s and 1s, consider N_i: the i-th subarray from A[0] to
// A[i] interpreted as a binary number (from most-significant-bit to
// least-significant-bit.)
// Return a list of booleans answer, where answer[i] is true if and only if N_i
// is divisible by 5.
// Example 1:
// Input: [0,1,1]
// Output: [true,false,false]
// Explanation:
// The input numbers in binary are 0, 01, 011; which are 0, 1, and 3 in base-10. 
// Only the first number is divisible by 5, so answer[0] is true.
// Example 2:
// Input: [1,1,1]
// Output: [false,false,false]
// Example 3:
// Input: [0,1,1,1,1,1]
// Output: [true,false,false,false,true,false]
// Example 4:
// Input: [1,1,1,0,1]
// Output: [false,false,false,false,false]

// Note:
//     1 <= A.length <= 30000
//     A[i] is 0 or 1


/**
 * @param {number[]} A
 * @return {boolean[]}
 */
const prefixesDivBy5 = function(A) {
  const result = []
  let num = 0
  for (let i of A) {
    num = (num * 2 + i) % 5
    result.push(num === 0)
  }
  return result
}

;[
  [0,1,1],      // [true, false, false]
  [1,1,1],      // [false,false, false]
  [0,1,1,1,1,1],// [true,false,false,false,true,false]
  [1,1,1,0,1],  // [false,false,false,false,false]
  [1,1,0,0,0,1,0,0,1], // [false,false,false,false,false,false,false,false,false]
  [1,0,1,0,0,0,0,0,0,0,0,1,1,1,0,0,1,0,1,1,1,1,1,1,0,0,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,0,0,1,0,0,0,0,0,1,0,0,1,1,0,0,1,1,1],
].forEach((A) => {
  console.log(prefixesDivBy5(A))
})

// Solution:
// 二进制数转十进制，从前遍历只需前面的值乘 2 再加上该位置的数即可
// 本题关键在于数组的长度非常大时，得到的十进制数也十分大，超出了 % 运算符正常运算的范围
// 这就需要一些取模运算的法则了
// <= to be continued

// Submission Result: Accepted