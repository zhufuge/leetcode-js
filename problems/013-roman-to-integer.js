// 13. Roman to Integer
// Easy   46%

// Given a roman numeral, convert it to an integer.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function(s) {
  const Roman = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let result = 0
  for (let i = s.length - 1; i >= 0; i--) {
    const high = Roman[s[i]], low = (Roman[s[i + 1]] || 0)
    result += (high < low ? -1 : 1) * high
  }

  return result
}

;[
  'I',                          // 1
  'IV',                         // 4
  'MMMCMXCIX',                  // 3999
].forEach(s => {
  console.log(romanToInt(s))
})

// Solution:
// 难点在于辨别比标志符号代表的数小1的符号。如 4=IV，9=IX。

// 用一个对象保存符号代表的数值。
// 从字符串尾部开始向前遍历，遍历到的字符转换成其代表的数值
// 如果该位的数值大于其后一位字符表示的数值，则直接将该值加入到结果中。
// 否则减去该数值。

// 例如
// IV = (-1)*1 + 1*5 = 4
// IX = (-1)*1 + 1*10 = 9
// MMMCMXCIX = 1*1000 + 1*1000 + 1*1000 + (-1)*100 + 1*1000
//             (-1)*10 + 1*100 + (-1)*1 + 1*10
//           = 3000 - 100 + 1000 - 10 + 100 - 1 + 10
//           = 3000 + 900 + 90 + 9
//           = 3999

// Submission Result: Accepted
