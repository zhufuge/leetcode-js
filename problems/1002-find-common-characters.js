// 1002. Find Common Characters
// Easy   66%


// Given an array A of strings made only from lowercase letters, return a list of
// all characters that show up in all strings within the list (including
// duplicates).  For example, if a character occurs 3 times in all strings but
// not 4 times, you need to include that character three times in the final
// answer.
// You may return the answer in any order.

// Example 1:
// Input: ["bella","label","roller"]
// Output: ["e","l","l"]
// Example 2:
// Input: ["cool","lock","cook"]
// Output: ["c","o"]

// Note:
//     1 <= A.length <= 100
//     1 <= A[i].length <= 100
//     A[i][j] is a lowercase letter


/**
 * @param {string[]} A
 * @return {string[]}
 */
const commonChars = function(A) {
  let arr = Array(26).fill(101)
  for (let S of A) {
    let temp = Array(26).fill(0)
    for (let c of S) temp[c.charCodeAt(0) - 97]++
    for (let i = 0; i < 26; i++) arr[i] = Math.min(arr[i], temp[i])
  }
  let res = []
  for (let i = 0; i < 26; i++) {
    for (let j = 0; j < arr[i]; j++) res.push(String.fromCharCode(i + 97))
  }
  return res
}

;[
  ['bella','label','roller'], // ["e", "l", "l"]
  ["cool","lock","cook"],     // ["c","o"]
  ["bbcd","accd","abdd","aabc"], // []
  ["daaccccd","adacbdda","abddbaba","bacbcbcb","bdaaaddc"] // ['a']
].forEach((A) => {
  console.log(commonChars(A))
})

// Solution:
// 1. 前两个比较合并
// 每次选出两个字符串的共同字符，选出后合并成新字符串，并和下一个字符串对比，直至最后一个字符串
// 选出两个字符串的方法是使用 hash 记录第一个字符串的字符数
// 若第二个字符串也有，则选出来

// 2. 使用桶数组代替字符串
// 用长度为26的数组，来记录字符的个数
// 后一个字符串的数组和前一个比较，取其小者，替换前一个
// 最后得到的桶数组则为字符的个数

// Submission Result: Accepted