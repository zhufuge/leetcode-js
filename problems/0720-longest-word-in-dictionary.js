
// 720. Longest Word in Dictionary
// Easy   39%


// Given a list of strings words representing an English Dictionary, find the
// longest word in words that can be built one character at a time by other words
// in words.  If there is more than one possible answer, return the longest word
// with the smallest lexicographical order.
//   If there is no answer, return the empty string.

// Example 1:

// Input:
// words = ["w","wo","wor","worl", "world"]
// Output: "world"
// Explanation:
// The word "world" can be built one character at a time by "w", "wo", "wor", and
// "worl".

// Example 2:

// Input:
// words = ["a", "banana", "app", "appl", "ap", "apply", "apple"]
// Output: "apple"
// Explanation:
// Both "apply" and "apple" can be built from other words in the dictionary.
// However, "apple" is lexicographically smaller than "apply".

// Note:

// All the strings in the input will only contain lowercase letters.
// The length of words will be in the range [1, 1000].
// The length of words[i] will be in the range [1, 30].


/**
 * @param {string[]} words
 * @return {string}
 */
const longestWord = function(words) {
  const group = {}
  for (let word of words) {
    const layer = word.length - 1
    if (!group[layer]) group[layer] = []
    group[layer].push(word)
  }
  console.log(group);

  function iter(chars, layer) {
    if (!group[layer]) return chars
    let result = chars
    for (let word of group[layer]) {
      if (word.indexOf(chars) === 0) {
        const next = iter(word, layer + 1)
        if (result === chars ||
            (next.length === result.length && result > next) ||
            (next.length > result.length)) result = next
      }
    }
    return result
  }

  return iter('', 0)
}

;[
  ['w','wo','wor','worl', 'world', 'longestWord'], // 'world'
  ['a', 'banana', 'app', 'appl', 'ap', 'apply', 'apple'], // 'apple'
  ["b","br","bre","brea","break","breakf","breakfa","breakfas","breakfast",
   "l","lu","lun","lunc","lunch","d","di","din","dinn","dinne","dinner"],
  // 'breakfast'
  ["m","mo","moc","moch","mocha","l","la","lat","latt","latte",
   "c","ca","cat"],             // 'latte'
].forEach(words => {
  console.log(longestWord(words))
})

// Solution:
// 先按字符的长度分层。
// 从空字符开始，每次进入一层，若该层存在有以从下一层字符开头的，则添加该单词进入下一层，
// 最后返回该找到的最长单词且字符代码和最小的单词。

// Submission Result: Accepted
