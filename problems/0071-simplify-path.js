// 71. Simplify Path
// Medium   25%

// Given an absolute path for a file (Unix-style), simplify it.

// For example,
// path = "/home/", => "/home"
// path = "/a/./b/../../c/", => "/c"

// click to show corner cases.
//   Corner Cases:

// Did you consider the case where path = "/../"?
// In this case, you should return "/".

// Another corner case is the path might contain multiple slashes '/'
// together, such as "/home//foo/".
// In this case, you should ignore redundant slashes and return "/home/foo".

/**
 * @param {string} path
 * @return {string}
 */
const simplifyPath = function(path) {
  const stack = []
  for (let p of path.split('/')) {
    if (p === '' || p === '.') continue
    if (p === '..' && stack.length > 0) stack.pop()
    if (p !== '..') stack.push(p)
  }
  return '/' + stack.join('/')
}

;[
  '/home/',                     // '/home'
  '/a/./b/../../c/',            // '/c'
  '/..',                        // '/'
  '/home//foo/',                // '/home/foo'
].forEach(path => {
  console.log(simplifyPath(path))
})

// Solution:
// 将路径按“/”拆分成数组，并从头开始遍历数组。
// 使用一个栈保存路径。
// 当前文件夹名为 “.” 或 “” 时，忽略掉，（还在该层）
// 为 “..” 时，且栈不为空时，弹出栈顶，（表示返回上层）
// 若为其他字符串，则将其入栈。（进入下一层）
// 最后将栈连接成一个数组。

// Submission Result: Accepted
