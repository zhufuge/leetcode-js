// 127. Word Ladder
// Medium 19% locked:false

// Given two words (beginWord and endWord), and a dictionary's word list, find
// the length of shortest transformation sequence from beginWord to endWord,
// such that:

// 1. Only one letter can be changed at a time.
// 2. Each transformed word must exist in the word list. Note that beginWord is
//    not a transformed word.

// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]

// As one shortest transformation is "hit" -> "hot" -> "dot" -> "dog" -> "cog",
// return its length 5.

// Note:

//     Return 0 if there is no such transformation sequence.
//     All words have the same length.
//     All words contain only lowercase alphabetic characters.
//     You may assume no duplicates in the word list.
//     You may assume beginWord and endWord are non-empty and are not the same.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
const ladderLength = function(beginWord, endWord, wordList) {
  // exceeded Time
  if (!wordList.includes(endWord)) return 0
  const isSame = (a, b) => {
    let n = a.length, m = 0
    for (let i = 0; i < n; i++) {
      if (a[i] === b[i]) m++
    }
    return m === n - 1
  }
  const list = [...wordList], graph = {}
  if (!list.includes(beginWord)) list.push(beginWord)
  for (let key of list) {
    graph[key] = []
    for (let node of list) {
      if (isSame(key, node)) graph[key].push(node)
    }
  }

  let min = Infinity
  const iter = ladder => {
    const n = ladder.length, end = ladder[n - 1]
    if (n <= min) {
      if (end === endWord) min = n
      else {
        for (let word of graph[end]) {
          if (!ladder.includes(word)) {
            ladder.push(word)
            iter(ladder)
            ladder.pop()
          }
        }
      }
    }
  }

  iter([beginWord])
  return min === Infinity ? 0 : min
}

console.log(ladderLength('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
