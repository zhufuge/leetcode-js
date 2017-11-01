const fs = require('fs'),
      path = require('path'),
      { promisify } = require('util')

const writeFile = promisify(fs.writeFile)

const { select } = require('./store')

function toListString(problems) {
  const lowTitle = (title) => title
        .split(' ')
        .filter(w => w !== '-')
        .join('-')
        .toLowerCase()

  const url = (id, title) => 'https://github.com/zhufuge/alg-js/blob/master/' +
        id + '-' + lowTitle(title) + '.js'

  const toLine = (row) => '| ' + row.id.toString().padStart(3, ' ') +
        ' | [[' + url(row.id, row.title) + ']' + '[' + row.title + ']] |'

  return problems.map(toLine).join('\n')
}

async function main() {
  const problems = await select(
    ['id', 'title'],
    { accepted: true, solution: true }
  )

  const content = toListString(problems)
  const org_head = '#+TITLE: LeetCode-JS\n' +
        '#+AUTHOR: zhufuge\n' +
        '#+DATE: <2017-11-01 周三 21:15>\n' +
        '#+CATEGOREIS: 算法\n\n' +
        '|   # | Title |\n' +
        '|-----+-------|\n'

  await writeFile(
    path.join('d:/blog/hexo/source/_posts', 'leetcode-js.org'),
    org_head + content,
    'utf8'
  )
  console.log('Generate leetcode-js.org successed.')
}

main()
