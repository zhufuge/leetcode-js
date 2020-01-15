// 66. Plus One
// Easy   38%

// Given a non-negative integer represented as a non-empty array of digits, plus
// one to the integer.

// You may assume the integer do not contain any leading zero, except the number
// 0 itself.

// The digits are stored such that the most significant digit is at the head of
// the list.

/**
 * @param {number[]} digits
 * @return {number[]}
 */
const plusOne = function(digits) {
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i]++
      return digits
    }
    digits[i] = 0
  }
  digits[0] = 1
  digits.push(0)
  return digits
}

;[
  [0],                          // [1]
  [8, 9, 9],                    // [9, 0, 0]
  [9, 9, 9],                    // [1, 0, 0, 0]
].forEach(digits => {
  console.log(plusOne(digits))
})

// Solution:
// 从后向前开始检查数组，
// 若数不为9，则该数加1，并返回数组；
// 若数为9，则把该数改为0，继续向前检查。

// 直到检查完整个数组，若都为9，则将第一个数改为1，并在数组的最后添加一个0。
// （因为要保留数组开始的指针）

// Submission Result: Accepted
