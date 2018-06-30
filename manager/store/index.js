// Return all data in store.

const { join, resolve, extname } = require('path')
const fs = require('fs')

const {
  PROBLEMS_STORE_PATH,
  PROBLEMS_DIR_PATH,
  ACCEPTED_STORE_PATH,
} = require('../common')

function getFilename(id, slug) {
  return (id + '').padStart(3, '0') + '-' + slug + '.js'
}

function getFilePath(filename) {
  return resolve(join(__dirname, '..', '..', 'problems', filename))
}

function readJSONSync(path) {
  return JSON.parse(fs.readFileSync(path, 'utf8'))
}

function writeJSONSync(path, json) {
  return fs.writeFileSync(path, JSON.stringify(json), 'utf8')
}

function getProblem(number) {
  const problems = readJSONSync(PROBLEMS_STORE_PATH)
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

function getAccepted() {
  return readJSONSync(ACCEPTED_STORE_PATH)
}

function getProblemId(filename) {
  return parseInt(filename.match(/(\d*)-.*/)[1], 10)
}

function updateAccepted() {
  const accepted = getAccepted()
  const files = fs.readdirSync(PROBLEMS_DIR_PATH)
    .filter(filename => extname(filename) === '.js')
    .filter(filename => !accepted.includes(getProblemId(filename)))

  for (let filename of files) {
    const filePath = join(PROBLEMS_DIR_PATH, filename)
    const content = fs.readFileSync(filePath, 'utf8')
    if (content.includes('// Submission Result: Accepted')) {
      accepted.push(getProblemId(filename))
    }
  }

  accepted.sort((a, b) => a - b)
  writeJSONSync(ACCEPTED_STORE_PATH, accepted)
  console.log('Update accepted problems')
}

module.exports = {
  getProblem,
  getAccepted,
  updateAccepted,
}
