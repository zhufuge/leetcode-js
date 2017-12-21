const fs = require('fs'),
      path = require('path'),
      { promisify } = require('util')

const writeFile = promisify(fs.writeFile),
      stat = promisify(fs.stat)

const { select } = require('./store')
const { toLowTitle } = require('./helper')

const REPOSITORY = 'https://github.com/zhufuge/leetcode-js/blob/master/problems/'

const toRowString = (row) =>
      '| ' + row.id + ' | [[' + REPOSITORY + row.filename +
      '][' + row.title + ']] |'
function toListString(problems) {
  return problems
    .map(toRowString)
    .join('\n')
}

async function writeTo(filePath, content) {
  await writeFile(filePath, content, 'utf8')
}


async function getLatest(problems) {
  const rows = []
  for (let i = 0, n = problems.length; i < n; i++) {
    const row = problems[i]
    rows[i] = JSON.parse(JSON.stringify(row))
    rows[i].mtimeMs =
      (await stat(path.join(__dirname, '..', 'problems', row.filename))).mtimeMs
  }

  rows.sort((a, b) => b.mtimeMs - a.mtimeMs)
  return excerpt(rows.slice(0, 7))
}

function excerpt(problems) {
  return '*最近更新*\n' +
    problems
    .map((row) => '- [[' + REPOSITORY + row.filename + '][' +
         row.id + '. ' + row.title + ']]')
    .join('\n')
}

async function main() {
  const problems = await select(
    ['id', 'title'],
    { accepted: true, solution: true }
  )

  let size = 0
  for (let problem of problems) {
    const number = (problem.id + '').padStart(3, '0')
    problem.filename = number + '-' + toLowTitle(problem.title) + '.js'
    size++
  }

  const head = '#+TITLE: LeetCode-JS\n' +
        '#+AUTHOR: zhufuge\n' +
        '#+DATE: <2017-11-01 周三 21:15>\n' +
        '#+CATEGORIES: 算法\n\n'
  const latest = await getLatest(problems)
  const moreTag = '\n\n#+BEGIN_HTML\n<!--more-->\n#+END_HTML\n\n'
  const listHead = '#+BEGIN_HTML\n' +
        '<h2 style="text-align:center;border:none;margin:36px auto 6px;">' +
        '完成列表(' + size + ')' + '</h2>\n' + '#+END_HTML\n\n' +
        '|   # | Title |\n' + '|-----+-------|\n'
  const list = toListString(problems)

  const content = head + latest + moreTag + listHead + list
  await writeTo(path.join('d:/blog/hexo/source/_posts', 'leetcode-js.org'), content)
  await writeTo(path.join(__dirname, '..', 'README.org'), content)

  console.log('Generate leetcode-js.org successed.')
}

main()
