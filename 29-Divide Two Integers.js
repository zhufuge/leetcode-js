// 29. Divide Two Integers
// Medium 15% locked:false

// Divide two integers without using multiplication, division and mod operator.

// If it is overflow, return MAX_INT.

/**
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
const divide = function(dividend, divisor) {
  if (divisor === 0) return 0

  const sign = (dividend > 0) ^ (divisor > 0) // 0 is positive, 1 is negative
  dividend = Math.abs(dividend)
  divisor = Math.abs(divisor)

  const memory = [divisor], times = [1]
  for (let i = 0; memory[i] < dividend; i++) {
    memory[i + 1] = memory[i] + memory[i]
    times[i + 1] = times[i] + times[i]
  }

  let result = 0
  for (let i = memory.length - 1; i >= 0; i--) {
    console.log(dividend);
    if (dividend >= memory[i]) {
      result += sign === 0 ? times[i] : -times[i]
      dividend -= memory[i]
    }

    if (result > 0x7fffffff || result < -0x80000000)
      return sign === 0 ? 0x7fffffff : -0x80000000
  }

  return result
}

console.log(divide(2147483647, 1)) //
