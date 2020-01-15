// 91. Decode Ways
// Medium 19% locked:false

// A message containing letters from A-Z is being encoded to numbers using the
// following mapping:

// 'A' -> 1
// 'B' -> 2
// ...
// 'Z' -> 26

// Given an encoded message containing digits, determine the total number of
// ways to decode it.

// For example,
// Given encoded message "12", it could be decoded as "AB" (1 2) or "L" (12).

// The number of ways decoding "12" is 2.

/**
 * @param {string} s
 * @return {number}
 */
const numDecodings = function(s) {
  if (s.length === 0) return 0

  const set = s.split(/\D/).filter(v => v.length !== 0)

  let res = 0
  for (let ns of set) {
    const n = ns.length
    let i = 0, prev = 0, curr = ns[0] === '0' ? 0 : 1
    for (; i < n && ns[i] !== '0'; i++) {
      if (ns[i + 1] === '0') {
        i++
        prev = curr
      } else if (ns[i - 1] !== '0') {
        if (i === 0 || ns[i - 1] + ns[i] - '0' <= 26) {
          [curr, prev] = [curr + prev, curr]
        } else {
          prev = curr
        }
      }
    }
    res += i === n ? curr : 0
  }

  return res
}

console.log(numDecodings("1234212011"))
