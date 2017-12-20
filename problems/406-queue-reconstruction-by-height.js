// 406. Queue Reconstruction by Height
// Medium   55%


// Suppose you have a random list of people standing in a queue. Each person is
// described by a pair of integers (h, k), where h is the height of the person
// and k is the number of people in front of this person who have a height
// greater than or equal to h. Write an algorithm to reconstruct the queue.

// Note:
// The number of people is less than 1,100.

// Example

// Input:
// [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]]

// Output:
// [[5,0], [7,0], [5,2], [6,1], [4,4], [7,1]]


/**
 * @param {number[][]} people
 * @return {number[][]}
 */
const reconstructQueue = function(people) {
  people.sort((a, b) => a[0] === b[0] ? a[1] - b[1] : b[0] - a[0])
  const queue = []
  for (let p of people) queue.splice(p[1], 0, p)
  return queue
}

;[
  [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]],
].forEach(people => {
  console.log(reconstructQueue(people))
})

// Solution:
// 1. 排序
// 按h降序排序，若h相同则k升序排序
// 如 [[7,0], [4,4], [7,1], [5,0], [6,1], [5,2]] 排序后为
//    [[7,0], [7,1], [6,1], [5,0], [5,2], [4,4], ]

// 2. 初始化一个新数组，将排序后的数组从第一个开始插入到新数组中。
// 插入的位置为每个元素的第二个值。
// 若新数组中该位置已存在有元素，则占用该位置，原来的元素及之后的全部元素向后移
// 动一位。

// 排好序后的数组中，每个元素的h都高于或等于其后的元素，且k小于h相同时的元素。
// h越大就越先被插入到新数组中，也就越是会被k相同而h小的元素占用。

// Submission Result: Accepted
