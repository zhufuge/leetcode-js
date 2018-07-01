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

// Add new properties
function addProperties(problem) {
  problem.filename = getFilename(
    problem.stat.frontend_question_id,
    problem.stat.question__title_slug
  )
  problem.filePath = getFilePath(problem.filename)
  return problem
}

function getAllProblems() {
  return readJSONSync(PROBLEMS_STORE_PATH)
}

function getProblem(number) {
  const problems = getAllProblems()
  const problem = problems.find(v => v.stat.frontend_question_id === number)

  if (!problem) throw new Error('Do not have this problem.')
  if (problem.paid_only) throw new Error('This problem is LOCKED!')

  return addProperties(problem)
}

function getProblems(numbers) {
  const problems = getAllProblems()
  return problems
    .filter(problem => numbers.includes(problem.stat.frontend_question_id))
    .map(problem => addProperties(problem))
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
  getProblems,
  getAllProblems,
  getAccepted,
  updateAccepted,
}
