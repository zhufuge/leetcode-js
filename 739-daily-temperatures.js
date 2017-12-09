// 739. Daily Temperatures
// Medium   52%


// Given a list of daily temperatures, produce a list that, for each day in the
// input, tells you how many days you would have to wait until a warmer
// temperature.  If there is no future day for which this is possible, put 0
// instead.

// For example, given the list temperatures = [73, 74, 75, 71, 69, 72, 76, 73],
// your output should be [1, 1, 4, 2, 1, 1, 0, 0].

// Note:
// The length of temperatures will be in the range [1, 30000].
// Each temperature will be an integer in the range [30, 100].


/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function(temperatures) {
  const result = [0], stack = [0]
  for (let i = 1, n = temperatures.length; i < n; i++) {
    while (temperatures[i] > temperatures[stack[stack.length - 1]]) {
      const j = stack.pop()
      result[j] = i - j
    }
    result[i] = 0
    stack.push(i)
  }
  return result
}

;[
  [73,74,75,71,69,72,76,73],    // [1,1,4,2,1,1,0,0]
].forEach(temperatures => {
  console.log(dailyTemperatures(temperatures))
})

// Solution:
// 使用栈来保存数的位置。
// 栈里自底向上依次保存递减的温度，
// 每天都从顶部开始检查栈里哪天温度比今天低，取出并计算那天到今天的天数，
// 保存在那天的槽里，直到遇到一个比今天温度高的。最后将这天推入栈顶。

// Submission Result: Accepted
