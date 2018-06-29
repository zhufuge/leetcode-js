// Return all data in store.

const { join, resolve } = require('path')
const fs = require('fs')

const { PROBLEMS_PATH } = require('../common')

function getFilename(id, slug) {
  return (id + '').padStart(3, '0') + '-' + slug + '.js'
}

function getFilePath(filename) {
  return resolve(join(__dirname, '..', '..', 'problems', filename))
}

function getProblem(number) {
  const problems = JSON.parse(fs.readFileSync(PROBLEMS_PATH, 'utf8'))
  const problem = problems.find(v => v.stat.question_id === number)

  if (!problem) throw new Error('Do not have this problem.')
  if (problem.paid_only) throw new Error('This problem is LOCKED!')

  // Add new properties
  problem.filename = getFilename(
    problem.stat.question_id,
    problem.stat.question__title_slug
  )
  problem.filePath = getFilePath(problem.filename)

  return problem
}

module.exports = {
  getProblem,
}
