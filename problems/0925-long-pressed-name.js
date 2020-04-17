// 925. Long Pressed Name
// Easy   45%


// Your friend is typing his name into a keyboard.  Sometimes, when typing a
// character c, the key might get long pressed, and the character will be typed 1
// or more times.
// You examine the typed characters of the keyboard.  Return True if it is
// possible that it was your friends name, with some characters (possibly none)
// being long pressed.

// Example 1:
// Input: name = "alex", typed = "aaleex"
// Output: true
// Explanation: 'a' and 'e' in 'alex' were long pressed.
// Example 2:
// Input: name = "saeed", typed = "ssaaedd"
// Output: false
// Explanation: 'e' must have been pressed twice, but it wasn't in the typed
// output.
// Example 3:
// Input: name = "leelee", typed = "lleeelee"
// Output: true
// Example 4:
// Input: name = "laiden", typed = "laiden"
// Output: true
// Explanation: It's not necessary to long press any character.

// Constraints:
//     1 <= name.length <= 1000
//     1 <= typed.length <= 1000
//     The characters of name and typed are lowercase letters.


/**
 * @param {string} name
 * @param {string} typed
 * @return {boolean}
 */
const isLongPressedName = function(name, typed) {
  let i = 0, j = 0
  while (i < name.length || j < typed.length) {
    if (name[i] == typed[j]) {
      i++
      j++
    } else if (typed[j] == typed[j - 1]) {
      j++
    } else {
      return false
    }
  }
  return true
}

;[
  // ['alex', 'aaleex'],    // true
  // ['saeed', 'ssaaedd'],  // false
  // ['leelee', 'lleeelee'],// true
  // ['laiden', 'laiden'],  // true
  ['pyplrz', 'ppyypllr'],   // false
  ['alice', 'alicee']
].forEach(([name, typed]) => {
  console.log(isLongPressedName(name, typed))
})

// Solution:
// 使用两个变量 i 和 j 来标记遍历 name 和 typed 的字符，
// 若两个字符相同，则遍历下一个字符，
// 若不同，则检查 typed[j] 与 typed[j - 1] 是否相同，相同表明该字符时长按产生的，
// 相同则遍历 typed 的下一个字符，
// 否则 直接返回false，
// 直到遍历完两个字符串。

// Submission Result: Accepted