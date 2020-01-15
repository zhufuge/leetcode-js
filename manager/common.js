const { join, resolve } = require('path')

const STORE_PATH = join(__dirname, 'store')

module.exports = {
  PROBLEMS_API: 'https://leetcode.com/api/problems/all',
  PROBLEMS_STORE_PATH: resolve(join(STORE_PATH, 'problems.all.json')),
  PROBLEMS_DIR_PATH: resolve(join(__dirname, '..', 'problems')),
  ACCEPTED_STORE_PATH: resolve(join(STORE_PATH, 'accepted.json')),
  DIFFICULTIES: ['Easy', 'Medium', 'Hard'],
  REPOSITORY: 'https://github.com/zhufuge/leetcode-js/blob/master/problems/',
  LIST_PATHS: [
    resolve('D:/blog/hexo/source/_posts/leetcode-js.org'),
    resolve(join(__dirname, '..', 'README.org')),
  ],
  LIST_TEMPLATE_PATH: resolve(join(__dirname, 'generate', 'template.org')),
  LATEST_NUMBER: 7,
}