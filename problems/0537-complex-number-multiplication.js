// 537. Complex Number Multiplication
// Medium   63%

// Given two strings representing two complex numbers.

// You need to return a string representing their multiplication. Note i^2 = -1
// according to the definition.

// Example 1:

// Input: "1+1i", "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i2 + 2 * i = 2i, and you need convert it
// to the form of 0+2i.

// Example 2:

// Input: "1+-1i", "1+-1i"
// Output: "0+-2i"
// Explanation: (1 - i) * (1 - i) = 1 + i2 - 2 * i = -2i, and you need convert it
// to the form of 0+-2i.

// Note:

// The input strings will not have extra blank.
// The input strings will be given in the form of a+bi, where the integer a and b
// will both belong to the range of [-100, 100]. And the output should be also in
// this form.


/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
const complexNumberMultiply = function(a, b) {
  function getRI(s) {
    const RI = s.slice(0, s.length - 1).split('+')
    return [parseInt(RI[0]), parseInt(RI[1])]
  }

  const [aR, aI] = getRI(a), [bR, bI] = getRI(b)
  return (aR * bR - aI * bI) + '+' + (aR * bI + aI * bR) + 'i'
}

;[
  ['1+1i', '1+1i'],             // '0+2i'
  ['1+-1i', '1+-1i'],           // '0+-2i'
].forEach(args => {
  console.log(complexNumberMultiply(...args))
})

// Solution:
//   (a+bi)(c+di)
// = a*c + a*di + bi*c + bi*di
// = a*c + (a*d)i + (b*c)i + (i*i)*b*d
// = a*c + (a*d)i + (b*c)i - b*d
// = (a*c - b*d) + (a*d + b*c)i

// Submission Result: Accepted
