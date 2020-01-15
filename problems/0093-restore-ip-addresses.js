// 93. Restore IP Addresses
// Medium 27% locked:false

// Given a string containing only digits, restore it by returning all possible
// valid IP address combinations.

// For example:
//Given "25525511135",
// return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)

/**
 * @param {string} s
 * @return {string[]}
 */
const restoreIpAddresses = function(s) {
  const n = s.length
  if (n < 4 || n > 12) return []

  const res = []
  const iter = (p, i) => {
    const m = p.length
    if (m === 4) res.push(p)
    else {
      let num = ''
      for (let j = 0; j < 3 && i + j <= n; j++) {
        num += s[i + j] ? s[i + j] : ''
        if (n - (i + j) >= 4 - m &&
            n - (i + j) <= (4 - m - 1) * 3 + 1 &&
            num - '0' < 256) {
          iter([...p, num], i + j + 1)
        }
        if (num === '0') break
      }
    }
  }
  iter([], 0)
  return res.map(p => p.join('.'))
}

console.log(restoreIpAddresses('25525511135'))
