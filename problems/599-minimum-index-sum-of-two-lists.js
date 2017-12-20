// 599. Minimum Index Sum of Two Lists
// Easy   46%


// Suppose Andy and Doris want to choose a restaurant for dinner, and they both
// have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list index
// sum. If there is a choice tie between answers, output all of them with no
// order requirement. You could assume there always exists an answer.

// Example 1:

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:

// Input:
// ["Shogun", "Tapioca Express", "Burger King", "KFC"]
// ["KFC", "Shogun", "Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is
// "Shogun" with index sum 1 (0+1).

// Note:

// The length of both lists will be in the range of [1, 1000].
// The length of strings in both lists will be in the range of [1, 30].
// The index is starting from 0 to the list length minus 1.
// No duplicates in both lists.


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
const findRestaurant = function(list1, list2) {
  const n = list1.length, m = list2.length
  let result = [], index = Infinity
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      if (list1[i] === list2[j]) {
        if (i + j <= index) {
          if (i + j < index) result = []
          result.push(list1[i])
          index = i + j
        }
        break
      }
    }
  }
  return result
}

;[
  [
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
  ],                            // ['Shogun']
  [
    ["Shogun", "Tapioca Express", "Burger King", "KFC"],
    ["KFC", "Shogun", "Burger King"]
  ],                            // ['Shogun']
].forEach(args => {
  console.log(findRestaurant(...args))
})

// Solution:
// 遍历 list1，每个元素 list1[i] 都再 list2 中找，找到第一个 list2[j]，
// 比较记录中的 index 和 i + j，如小于 index 则将 result 清空再添加，
// 如等于，则添加。

// Submission Result: Accepted
