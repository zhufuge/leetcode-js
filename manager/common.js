const { join, resolve } = require('path')

module.exports = {
  PROBLEMS_API: 'https://leetcode.com/api/problems/all',
  PROBLEMS_PATH: resolve(join(__dirname, 'store', 'problems.all.json'))
}