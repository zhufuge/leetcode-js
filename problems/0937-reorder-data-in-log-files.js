// 937. Reorder Data in Log Files
// Easy   54%


// You have an array of logs.  Each log is a space delimited string of words.
// For each log, the first word in each log is an alphanumeric identifier.  Then,
// either:
//     Each word after the identifier will consist only of lowercase letters, or;
//     Each word after the identifier will consist only of digits.
// We will call these two varieties of logs letter-logs and digit-logs.  It is
// guaranteed that each log has at least one word after its identifier.
// Reorder the logs so that all of the letter-logs come before any digit-log.
// The letter-logs are ordered lexicographically ignoring identifier, with the
// identifier used in case of ties.  The digit-logs should be put in their
// original order.
// Return the final order of the logs.

// Example 1:
// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit
// dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5
// 1","dig2 3 6"]

// Constraints:
//     0 <= logs.length <= 100
//     3 <= logs[i].length <= 100
//     logs[i] is guaranteed to have an identifier, and a word after the
// identifier.


/**
 * @param {string[]} logs
 * @return {string[]}
 */
const reorderLogFiles = function(logs) {
  let digs = [], lets = []
  for (let s of logs) {
    const spaceIndex = s.indexOf(' ')
    const c = s[spaceIndex + 1]
    if (c <= '9') digs.push(s)
    else lets.push(s)
  }
  lets = lets.sort((a, b) => {
    const aSpaceIndex = a.indexOf(' ')
    const bSpaceIndex = b.indexOf(' ')
    const aSub = a.substring(aSpaceIndex + 1)
    const bSub = b.substring(bSpaceIndex + 1)
    if (aSub < bSub) return -1
    if (aSub > bSub) return 1

    const aId = a.substring(0, aSpaceIndex)
    const bId = b.substring(0, bSpaceIndex)
    if (aId < bId) return -1
    if (aId > bId) return 1
    return 0
  })
  return lets.concat(digs)
}

;[
  ['dig1 8 1 5 1','let1 art can','dig2 3 6','let2 own kit dig','let3 art zero'],
  // ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 51","dig2 3 6"]
  ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"],
  // ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
  ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo","a2 act car"],
  // ["a2 act car","g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]
].forEach((logs) => {
  console.log(reorderLogFiles(logs))
})

const batter = function(logs) {
  logs.sort((a, b) => {
    const aSpaceIndex = a.indexOf(' ')
    const bSpaceIndex = b.indexOf(' ')
    const aFirstChar = a[aSpaceIndex + 1]
    const bFirstChar = b[bSpaceIndex + 1]

    if (aFirstChar <= '9') {
      return bFirstChar <= '9' ? 0 : 1
    }
    if (bFirstChar <= '9') return -1

    const aSub = a.substring(aSpaceIndex + 1)
    const bSub = b.substring(bSpaceIndex + 1)
    if (aSub < bSub) return -1
    if (aSub > bSub) return 1

    const aId = a.substring(0, aSpaceIndex)
    const bId = b.substring(0, bSpaceIndex)
    if (aId < bId) return -1
    if (aId > bId) return 1
    return 0
  })
  return logs
}

// Solution:
// 使用 sort 函数，进行排序。
// 在比较两个字符串的大小时，
// 首先找到第一个空格的位置，读取空格后的一个字符，进行比较
//  1. 若都为数字，则按原来的顺序排序
//  2. 若有一个为数字，则该字符串排在后面
//  3. 若都为字符，则比较第一个空格后的字符串的大小，小的在前
//     若字符串相等，则比较空格前的字符串。

// Submission Result: Accepted