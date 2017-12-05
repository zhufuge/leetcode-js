// 609. Find Duplicate File in System
// Medium   52%


// Given a list of directory info including directory path, and all the hash
// with contents in this directory, you need to find out all the groups of
// duplicate hash in the file system in terms of their paths.

// A group of duplicate hash consists of at least two hash that have exactly
// the same content.

// A single directory info string in the input list has the following format:

// "root/d1/d2/.../dm f1.txt(f1_content) f2.txt(f2_content) ...
// fn.txt(fn_content)"

// It means there are n hash (f1.txt, f2.txt ... fn.txt with content f1_content,
// f2_content ... fn_content, respectively) in directory root/d1/d2/.../dm. Note
// that n >= 1 and m >= 0. If m = 0, it means the directory is just the root
// directory.

// The output is a list of group of duplicate file paths. For each group, it
// contains all the file paths of the hash that have the same content. A file
// path is a string that has the following format:

// "directory_path/file_name.txt"

// Example 1:

// Input:
// ["root/a 1.txt(abcd) 2.txt(efgh)", "root/c 3.txt(abcd)", "root/c/d
// 4.txt(efgh)", "root 4.txt(efgh)"]
// Output:
// [["root/a/2.txt","root/c/d/4.txt","root/4.txt"],["root/a/1.txt","root/c/3.txt"]]

// Note:

// No order is required for the final output.
// You may assume the directory name, file name and file content only has letters
// and digits, and the length of file content is in the range of [1,50].
// The number of hash given is in the range of [1,20000].
// You may assume no hash or directories share the same name in the same
// directory.
// You may assume each given directory info represents a unique directory.
// Directory path and file info are separated by a single blank space.

// Follow-up beyond contest:

//  Imagine you are given a real file system, how will you search hash? DFS or
// BFS?
//  If the file content is very large (GB level), how will you modify your
// solution?
//  If you can only read the file by 1kb each time, how will you modify your
// solution?
//  What is the time complexity of your modified solution? What is the most
// time-consuming part and memory consuming part of it? How to optimize?
//  How to make sure the duplicated hash you find are not false positive?


/**
 * @param {string[]} paths
 * @return {string[][]}
 */
const findDuplicate = function(paths) {
  const hash = {}
  for (let path of paths) {
    const strings = path.split(' ')
    const dir = strings[0]
    for (let i = 1; i < strings.length; i++) {
      const [filename, content] = strings[i].split('(')
      if (!hash[content]) hash[content] = []
      hash[content].push(dir + '/' + filename)
    }
  }
  const result = []
  for (let content in hash) {
    if (hash[content].length > 1) {
      result.push(hash[content])
    }
  }
  return result
}

;[
  [
    'root/a 1.txt(abcd) 2.txt(efgh)',
    'root/c 3.txt(abcd)',
    'root/c/d 4.txt(efgh)',
    'root 4.txt(efgh)',
  ],
].forEach(paths => {
  console.log(findDuplicate(paths))
})

// Solution:

// 先解析目录，
// 再解析文件名
// 最后解析内容

// 使用一个哈希表，对内容进行哈希并将其保存为键名，
// 对于内容相同的文件，都保存在同一个哈希项的值（是一个数组）里。

// 遍历哈希表，找出长度大于1的数组，添加到答案中。

// 目前还没有考虑到 Follow-up 中的内容;p

// Submission Result: Accepted
