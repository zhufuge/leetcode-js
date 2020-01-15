// 87. Scramble String
// Hard 29% locked:false

// Given a string s1, we may represent it as a binary tree by partitioning it to
// two non-empty substrings recursively.

// Below is one possible representation of s1 = "great":

//     great
//    /    \
//   gr    eat
//  / \    /  \
// g   r  e   at
//            / \
//           a   t

// To scramble the string, we may choose any non-leaf node and swap its two
// children.

// For example, if we choose the node "gr" and swap its two children, it
// produces a scrambled string "rgeat".

//     rgeat
//    /    \
//   rg    eat
//  / \    /  \
// r   g  e   at
//           / \
//          a   t

// We say that "rgeat" is a scrambled string of "great".

// Similarly, if we continue to swap the children of nodes "eat" and "at", it
// produces a scrambled string "rgtae".

//     rgtae
//    /    \
//   rg    tae
//  / \    /  \
// r   g  ta  e
//       / \
//      t   a

// We say that "rgtae" is a scrambled string of "great".

// Given two strings s1 and s2 of the same length, determine if s2 is a
// scrambled string of s1.


/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
const isScramble = function(s1, s2) {
  if (s1.length !== s2.length) return false

  const n = s1.length
  if (n === 0) return true

  const match = (i, k, x, z) => {
    console.log(i, k, x, z);
    if (i <= k && x <= z && i - k === x - z) {
      if (i === k) return s1[i] === s2[x]
      if (s1.substring(i, k + 1) === s2.substring(x, z + 1)) return true

      const j = (i + k + 1) >> 1, y = (x + z + 1) >> 1
      if ((i + k) % 2 === 1) {
        if ((match(i, j - 1, y, z) && match(j, k, x, y - 1)) ||
            (match(i, j - 1, x, y - 1) && match(j, k, y, z))) return true
      } else {
        if ((match(i, j - 1, y + 1, z) && match(j, k, x, y)) ||
            (match(i, j, y, z) && match(j + 1, k, x, y - 1)) ||
            (match(i, j - 1, x, y - 1) && match(j, k, y, z)) ||
            (match(i, j, x, y) && match(j + 1, k, y + 1, z))) return true
      }
    }
    return false
  }

  return match(0, n - 1, 0, n - 1)
}

console.log(isScramble('abab', 'aabb'))
