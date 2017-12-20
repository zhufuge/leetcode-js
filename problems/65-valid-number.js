// 65. Valid Number
// Hard 12% locked:false

// Validate if a given string is numeric.

// Some examples:
// "0" => true
// " 0.1 " => true
// "abc" => false
// "1 a" => false
// "2e10" => true

// Note: It is intended for the problem statement to be ambiguous. You should
// gather all requirements up front before implementing one.

// Update (2015-02-10):

// The signature of the C++ function had been updated. If you still see your
// function signature accepts a const char * argument, please click the reload
// button to reset your code definition.

// '' => false
// ' ' => false
// ' 1' => true
// '1   ' => true
// ' 1 2' => false

// '.12' => true
// '123.' => true
// '.' => false

// e or E
// '1.2e-22' => true
// '1e1.2' => false
// '1e2e12' => false
// '3e' => false
// 'e3' => false

/**
 * @param {string} s
 * @return {boolean}
 */
const isNumber = function(s) {
  if (s === void 0 || s === null || s.length === 0) return false

  const matchSpace = (i) => {
    while (s[i] === ' ') i++
    return i
  }

  const isDigit = (c) => c !== ' ' && !Number.isNaN(c - '0')
  const matchInt = (i, sign) => {
    if (sign && (s[i] === '+' || s[i] === '-')) i++
    while (isDigit(s[i])) i++
    return i
  }

  const n = s.length
  let i = 0
  i = matchSpace(i)
  if (i === n) return false

  let least = false
  i = matchInt(i, true)
  if (isDigit(s[i - 1])) least = true

  if (s[i] === '.') {
    i = matchInt(i + 1, false)
    if (isDigit(s[i - 1])) least = true
  }
  if (least === false) return false

  if (s[i] === 'e') {
    i = matchInt(i + 1, true)
    if (!isDigit(s[i - 1])) return false
  }

  i = matchSpace(i)
  return i === n
}
