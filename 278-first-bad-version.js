// 278. First Bad Version
// Easy   25%


// You are a product manager and currently leading a team to develop a new
// product. Unfortunately, the latest version of your product fails the quality
// check. Since each version is developed based on the previous version, all the
// versions after a bad version are also bad.

// Suppose you have n versions [1, 2, ..., n] and you want to find out the first
// bad one, which causes all the following ones to be bad.

// You are given an API bool isBadVersion(version) which will return whether
// version is bad. Implement a function to find the first bad version. You should
// minimize the number of calls to the API.

// Credits:Special thanks to @jianchao.li.fighter for adding this problem and
// creating all test cases.


/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 */

const setIsBadVersion = function(n) {
  return function (version) {
    return version < n ? false : true
  }
}

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
const solution = function(isBadVersion) {
  /**
 @param {integer} n Total versions
 @return {integer} The first bad version
   */
  return function(n) {
    let good = 1
    while (good <= n) {
      const mid = (good + n) >>> 1
      if (isBadVersion(mid)) {
        if (!isBadVersion(mid - 1)) return mid
        n = mid - 1
      } else {
        good = mid + 1
      }
    }
    return 0
  }
}

;[
  [6, 5],                       // 5
  [6, 3],                       // 3
  [12, 12],                     // 12
  [12, 1],                      // 1
  [2126753390, 1702766719],     // 1702766719
].forEach(args => {
  console.log(solution(setIsBadVersion(args[1]))(args[0]))
})

// Solution:
// 二分查找法。
// 除二取整 可以使用 >>>1 逻辑右移运算，
// 因为数可能大于 2^32 所以不能使用 >> 算术右移。

// Submission Result: Accepted
