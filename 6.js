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
  const n = s.length
  const rows = Array(numRows).fill('')

  let pos = 0, dir = true
  for (let i = 0; i < n; i++) {
    if (pos === 0) dir = true
    if (pos === numRows - 1) dir = false

    rows[pos] += s[i]
    if (numRows !== 1) pos += dir ? 1 : -1 
  }

  return rows.join('')
}

console.log(convert('PAYPALISHIRING', 3), 'PAHNAPLSIIGYIR');
console.log(convert('AB', 1));
