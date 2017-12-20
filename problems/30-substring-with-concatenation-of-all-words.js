// 30. Substring with Concatenation of All Words
// Hard 22% locked:false

// You are given a string, s, and a list of words, words, that are all of the
// same length. Find all starting indices of substring(s) in s that is a
// concatenation of each word in words exactly once and without any intervening
// characters.

// For example, given:
// s: "barfoothefoobarman"
// words: ["foo", "bar"]

// You should return the indices: [0,9]. (order does not matter).

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
const findSubstring = function(s, words) {
  const n = s.length, m = words.length
  if (m === 0) return []
  const result = [], len = words[0].length

  const iter = (i, include) => {
    let count = 0
    include.forEach(v => count++)
    if (count === m) return true
    const str = s.substr(i, len)
    let index = words.indexOf(str)
    while (index !== -1 && include[index] !== void 0) {
      index = words.indexOf(str, index + 1)
    }
    if (index !== -1) {
      include[index] = true
      return iter(i + len, include)
    } else {
      return false
    }
  }

  for (let i = 0; i < n && n - i >= m * len; i++) {
    if (iter(i, new Array(m)) === true) result.push(i)
  }

  return result
}

// console.log(findSubstring('barfoothefoobarman', ['foo', 'bar'])) // [0, 9]
// console.log(findSubstring("bccbcc", ["bc","cc","cb"])) // [0]
// console.log(findSubstring("wordgoodgoodgoodbestword", ["word","good","best","good"])) // [8]

// travel all the words combinations to maintain a window
// there are wl(word len) times travel
// each time, n/wl words, mostly 2 times travel for each word
// one left side of the window, the other right side of the window
// so, time complexity O(wl * 2 * N/wl) = O(2N)
const Other = function(s, words) {
//vector<int> findSubstring(string s, vector<string> &words)
  const ans = []
  const n = s.length, cnt = words.length
  if (n <= 0 || cnt <= 0) return ans

  const dict = {}
  for (let i = 0; i < cnt; ++i) {
    dict[words[i]] = dict[words[i]] ? dict[words[i]] + 1 : 1
  }

  // travel all sub string combinations
  const wl = words[0].length
  for (let i = 0; i < wl; ++i) {
    let left = i, count = 0, tdict = {}
    for (let j = i; j <= n - wl; j += wl) {
      const str = s.substr(j, wl)
      // a valid word, accumulate results
      if (dict[str]) {
        tdict[str] = tdict[str] ? tdict[str] + 1 : 1
        if (tdict[str] <= dict[str]) count++
        else {
          // a more word, advance the window left side possiablly
          while (tdict[str] > dict[str]) {
            const str1 = s.substr(left, wl)
            tdict[str1]--
            if (tdict[str1] < dict[str1]) count--
            left += wl
          }
        }
        // come to a result
        if (count == cnt) {
          ans.push(left)
          // advance one word
          tdict[s.substr(left, wl)]--
          count--
          left += wl
        }
      }
      // not a valid word, reset all vars
      else {
        tdict = {}
        count = 0
        left = j + wl
      }
    }
  }

  return ans
}
console.log(Other("wordgoodgoodgoodbestword", ["word","good","best","good"])) // [8]
