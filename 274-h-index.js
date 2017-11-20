// 274. H-Index
// Medium   33%

// Given an array of citations (each citation is a non-negative integer) of a
// researcher, write a function to compute the researcher's h-index.

// According to the definition of h-index on Wikipedia: "A scientist has index h
// if h of his/her N papers have at least h citations each, and the other N − h
// papers have no more than h citations each."

// For example, given citations = [3, 0, 6, 1, 5], which means the researcher has
// 5 papers in total and each of them had received 3, 0, 6, 1, 5 citations
// respectively. Since the researcher has 3 papers with at least 3 citations each
// and the remaining two with no more than 3 citations each, his h-index is 3.

// Note: If there are several possible values for h, the maximum one is taken as
// the h-index.

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * @param {number[]} citations
 * @return {number}
 */
const hIndex = function(citations) {
  const n = citations.length
  citations.sort((a, b) => b - a)
  let h = 0
  while (h < n && h < citations[h]) h++
  return h
}

;[
  [3, 0, 6, 1, 5],              // 3
  [3, 0, 6, 1, 5, 3],           // 3
  [7, 3, 0, 8, 5, 1, 6],        // 4
  [12, 15, 29, 83, 18, 53],     // 6
].forEach(citations => {
  console.log(hIndex(citations))
})

// h-index的定义为：数组中有h个数的值大于或等于h，而n-h个数的值小于或等于h。
// 存在多个h,取最大的那一个。

// Solution:
// 将数组按降序排序，按其该降序遍历每个数字。
// 数字的下标负责计数，即h。
// 若其值大于其下标，即大于h。

// Submission Result: Accepted
