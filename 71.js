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
  path = path.split('/')

  const stack = []
  for (let p of path) {
    if (p !== '' && p !== '.') {
      if (p === '..') {
        if (stack.length > 0) stack.pop()
      } else stack.push(p)
    }
  }

  return '/' + stack.join('/')
}

console.log(simplifyPath('/home/'));
console.log(simplifyPath('/a/./b/../../c/'));
