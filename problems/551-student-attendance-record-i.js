// 551. Student Attendance Record I
// Easy   44%

// You are given a string representing an attendance record for a student. The
// record only contains the following three characters:

// 'A' : Absent.
// 'L' : Late.
//  'P' : Present.

// A student could be rewarded if his attendance record doesn't contain more than
// one 'A' (absent) or more than two continuous 'L' (late).

// You need to return whether the student could be rewarded according to his
// attendance record.

// Example 1:

// Input: "PPALLP"
// Output: True

// Example 2:

// Input: "PPALLL"
// Output: False


/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function(s) {
  const n = s.length
  let absent = 0, late = 0
  for (let i = 0; i < n; i++){
    if (s[i] === 'A') absent++
    late = s[i] === 'L' ? late + 1 : 0
    if (absent > 1 || late > 2) return false
  }
  return true
}

;[
  'PPALLP',                     // true
  'PPALLL',                     // false
  'LALL',                       // true
].forEach(s => {
  console.log(checkRecord(s))
})

// Solution:
// 用一个变量记录缺席的次数
// 用一个变量记录连续迟到的次数

// Submission Result: Accepted
