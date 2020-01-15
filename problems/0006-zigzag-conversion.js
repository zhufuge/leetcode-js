// 6. ZigZag Conversion
// Medium  26%

// The string "PAYPALISHIRING" is written in a zigzag pattern on a given number
// of rows like this: (you may want to display this pattern in a fixed font for
// better legibility)

// P   A   H   N
// A P L S I I G
// Y   I   R

// And then read line by line: "PAHNAPLSIIGYIR"

// Write the code that will take a string and make this conversion given a
// number of rows:

// string convert(string text, int nRows);

// convert("PAYPALISHIRING", 3) should return "PAHNAPLSIIGYIR".

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
const convert = function(s, numRows) {
  if (numRows <= 1) return s

  const rows = Array(numRows).fill('')
  let pos = 0, direct = true
  for (let i = 0, n = s.length; i < n; i++) {
    if (pos === 0) direct = true
    if (pos === numRows - 1) direct = false

    rows[pos] += s[i]
    pos += direct ? 1 : -1
  }

  return rows.join('')
}

;[
  ['PAYPALISHIRING', 3],        // 'PAHNAPLSIIGYIR'
  ['AB', 1],                    // 'AB'
  ['ABCDEFGHIJKLMN', 4],        // 'AGMBFHLNCEIKDJ'
].forEach(args => {
  console.log(convert(...args))
})

// Solution:
// 每行用一个数组保存。
// 每行利用“电梯”的升降的方法来添加字符。
// 用一个变量来保存的升降的方向。

// Submission Result: Accepted
