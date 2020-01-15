// 126. Word Ladder II
// Hard 14% locked:false

// Given two words (beginWord and endWord), and a dictionary's word list, find
// all shortest transformation sequence(s) from beginWord to endWord, such that:

// 1. Only one letter can be changed at a time
// 2. Each transformed word must exist in the word list. Note that beginWord is
//    not a transformed word.

// For example,

// Given:
// beginWord = "hit"
// endWord = "cog"
// wordList = ["hot","dot","dog","lot","log","cog"]

// Return
//   [
//     ["hit","hot","dot","dog","cog"],
//     ["hit","hot","lot","log","cog"]
//   ]

// Note:
//     Return an empty list if there is no such transformation sequence.
//     All words have the same length.
//     All words contain only lowercase alphabetic characters.
//     You may assume no duplicates in the word list.
//     You may assume beginWord and endWord are non-empty and are not the same.

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {string[][]}
 */
const findLadders = function(beginWord, endWord, wordList) {
  if (!wordList.includes(endWord)) return []
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

  let ladders = [], min = Infinity
  const iter = ladder => {
    const n = ladder.length, end = ladder[n - 1]
    if (n <= min) {
      if (end === endWord) {
        if (n === min) ladders.push([...ladder])
        else if (n < min) ladders = [[...ladder]]
        min = n
      }
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
  return ladders
}

//console.log(findLadders('hit', 'cog', ["hot","dot","dog","lot","log","cog"]))
console.log(findLadders("qa", "sq",
                        ["si","go","se","cm","so","ph","mt","db","mb","sb","kr",
                         "ln","tm","le","av","sm","ar","ci","ca","br","ti","ba",
                         "to","ra","fa","yo","ow","sn","ya","cr","po","fe","ho",
                         "ma","re","or","rn","au","ur","rh","sr","tc","lt","lo",
                         "as","fr","nb","yb","if","pb","ge","th","pm","rb","sh",
                         "co","ga","li","ha","hz","no","bi","di","hi","qa","pi",
                         "os","uh","wm","an","me","mo","na","la","st","er","sc",
                         "ne","mn","mi","am","ex","pt","io","be","fm","ta","tb",
                         "ni","mr","pa","he","lr","sq","ye"]))
//exceeded Time
