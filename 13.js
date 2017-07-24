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

  const n = s.length
  let result = 0
  for (let i = n - 1; i >= 0; i--) {
    const p = Roman[s[i]], q = Roman[s[i + 1]]
    result += p * (p < q ? -1 : 1)
  }

  return result
}

console.log(romanToInt('I'), 1)
