// 744. Find Smallest Letter Greater Than Target
// Easy   55%


// Given a list of sorted characters letters containing only lowercase letters,
// and given a target letter target, find the smallest element in the list that
// is larger than the given target.

// Letters also wrap around.  For example, if the target is target = 'z' and
// letters = ['a', 'b'], the answer is 'a'.

// Examples:

// Input:
// letters = ["c", "f", "j"]
// target = "a"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "c"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "d"
// Output: "f"

// Input:
// letters = ["c", "f", "j"]
// target = "g"
// Output: "j"

// Input:
// letters = ["c", "f", "j"]
// target = "j"
// Output: "c"

// Input:
// letters = ["c", "f", "j"]
// target = "k"
// Output: "c"

// Note:

// letters has a length in range [2, 10000].
// letters consists of lowercase letters, and contains at least 2 unique letters.
// target is a lowercase letter.


/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function(letters, target) {
  const n = letters.length
  let i = 0, j = n - 1
  while (i < j) {
    const mid = (i + j) >> 1
    if (letters[mid] <= target) i = mid + 1
    else j = mid - 1
  }
  return letters[(letters[i] > target ? i : i + 1) % n]
}

;[
  [['c', 'f', 'j'], 'a'],                          // 'c'
  [['c', 'f', 'j'], 'c'],                          // 'f'
  [['c', 'f', 'j'], 'd'],                          // 'f'
  [['c', 'f', 'j'], 'g'],                          // 'j'
  [['c', 'f', 'j'], 'j'],                          // 'c'
  [['c', 'f', 'j'], 'k'],                          // 'c'
  [['e','e','e','e','e','e','n','n','n','n'], 'e'] // 'n'
].forEach(args => {
  console.log(nextGreatestLetter(...args))
})

// Solution:
// 使用二分查找法，
// 若中位数小于或等于目标数，则检查后半部分，否则检查前半部分。
// 最后找到一个大于或等于目标数的数，
// 若大于，则返回该数，
// 若等于，则返回下一个数，因为循环，所以使用取模运算。

// Submission Result: Accepted
