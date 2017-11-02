const fs = require('fs'),
      path = require('path'),
      { promisify } = require('util')

const writeFile = promisify(fs.writeFile),
      stat = promisify(fs.stat)

const { select } = require('./store')

function toListString(problems) {
  return problems
    .map(
      (row) => '| ' + row.id +
        ' | [[https://github.com/zhufuge/alg-js/blob/master/' + row.filename +
        '][' + row.title + ']] |')
    .join('\n')
}

async function write(content) {
  await writeFile(
    path.join('d:/blog/hexo/source/_posts', 'leetcode-js.org'),
    content,
    'utf8'
  )
}

async function getLatest(problems) {
  const rows = []
  for (let i = 0, n = problems.length; i < n; i++) {
    const row = problems[i]
    rows[i] = JSON.parse(JSON.stringify(row))
    rows[i].birthtime =
      (await stat(path.join(__dirname, '..', row.filename))).birthtimeMs
  }

  rows.sort((a, b) => b.birthtime - a.birthtime)
  return excerpt(rows.slice(0, 7))
}

function excerpt(problems) {
  return '*最近更新*\n' +
    problems
    .map(
      (row) => '- [[https://github.com/zhufuge/alg-js/blob/master/' +
        row.filename + '][' + row.id + '. ' + row.title + ']]')
    .join('\n')
}

function enhance(problems) {
  const lowTitle = (title) => title
        .split(' ')
        .filter(w => w !== '-')
        .join('-')
        .toLowerCase()

  for (let problem of problems) {
    problem.filename = problem.id + '-' + lowTitle(problem.title) + '.js'
  }
}

async function main() {
  const problems = await select(
    ['id', 'title'],
    { accepted: true, solution: true }
  )

  enhance(problems)

  const head = '#+TITLE: LeetCode-JS\n' +
        '#+AUTHOR: zhufuge\n' +
        '#+DATE: <2017-11-01 周三 21:15>\n' +
        '#+CATEGORIES: 算法\n\n'
  const latest = await getLatest(problems)
  const moreTag = '\n\n#+BEGIN_HTML\n<!--more-->\n#+END_HTML\n\n'
  const listHead = '#+BEGIN_HTML\n' +
        '<h2 style="text-align:center;border:none;margin:36px auto 6px;">' +
        '完成列表' + '</h2>\n' + '#+END_HTML\n\n' +
        '|   # | Title |\n' + '|-----+-------|\n'
  const list = toListString(problems)

  await write(head + latest + moreTag + listHead + list)
  console.log('Generate leetcode-js.org successed.')
}

main()
