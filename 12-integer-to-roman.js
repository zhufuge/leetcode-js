// 12. Integer to Roman
// Medium 45% locked:false

// Given an integer, convert it to a roman numeral.

// Input is guaranteed to be within the range from 1 to 3999.

/**
 * @param {number} num
 * @return {string}
 */
const intToRoman = function(num) {
  if (num > 3999) return ''

  const Roman = ['', 'I', 'V', 'X', 'L', 'C', 'D', 'M']

  let result = ''
  for (let i = 1; num > 0; i += 2) {
    const p = num % 10, q = p % 5
    if (q > 0 && q <= 3) result = (p > 5 ? Roman[i + 1] : '').concat(Roman[i].repeat(q), result)
    else if (q === 4) result = Roman[i].concat(Roman[i + (p > 5 ? 2 : 1)], result)
    else if (p === 5) result = Roman[i + 1].concat(result)
    num = Math.trunc(num / 10)
  }

  return result
}

const r = Math.trunc(Math.random() * 4000)
console.log(intToRoman(r), r)
