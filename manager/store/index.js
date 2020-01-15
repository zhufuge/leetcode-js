// Return all data in store.

const { join, resolve, extname } = require('path')
const {
  readdirSync,
  readFileSync,
  writeFileSync,
} = require('fs')

const {
  PROBLEMS_STORE_PATH,
  PROBLEMS_DIR_PATH,
  ACCEPTED_STORE_PATH,
} = require('../common')

const { requestProblem } = require('../request')

function readJSONSync(path) {
  return JSON.parse(readFileSync(path, 'utf8'))
}

function writeJSONSync(path, json) {
  return writeFileSync(path, JSON.stringify(json), 'utf8')
}

function getFilename(id, slug) {
  return (id + '').padStart(4, '0') + '-' + slug + '.js'
}

function getFilePath(filename) {
  return resolve(join(__dirname, '..', '..', 'problems', filename))
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
  return readJSONSync(PROBLEMS_STORE_PATH).map(addProperties)
}

// get the problems of not exist file and no paid only
function getAllFeasibleProblems() {
  const problems = getAllProblems()
  const exist = readdirSync(PROBLEMS_DIR_PATH)

  const feasible = problems
    .filter(p => !exist.includes(p.filename))
    .filter(p => !p.paid_only)
  return feasible
}

function getProblem(number) {
  const problems = getAllProblems()

  let problem = null
  if (number) {
    problem = problems.find(p => p.stat.frontend_question_id === number)

    if (!problem) throw new Error('Do not have this problem.')
    if (problem.paid_only) throw new Error('This problem is LOCKED!')
  } else {
    // if number === 0, get a random problem
    const feasible = getAllFeasibleProblems()
    const random = Math.floor(Math.random() * feasible.length)
    problem = feasible[random]
  }

  return problem
}

function getProblems(numbers) {
  const problems = getAllProblems()
  return problems
    .filter(problem => numbers.includes(problem.stat.frontend_question_id))
}

function getProblemId(filename) {
  return parseInt(filename.match(/(\d*)-.*/)[1], 10)
}

function updateAccepted() {
  const accepted = readJSONSync(ACCEPTED_STORE_PATH)
  const files = readdirSync(PROBLEMS_DIR_PATH)
    .filter(filename => extname(filename) === '.js')
    .filter(filename => !accepted.includes(getProblemId(filename)))

  for (let filename of files) {
    const filePath = join(PROBLEMS_DIR_PATH, filename)
    const content = readFileSync(filePath, 'utf8')
    if (content.includes('// Submission Result: Accepted')) {
      accepted.push(getProblemId(filename))
    }
  }

  accepted.sort((a, b) => a - b)
  writeJSONSync(ACCEPTED_STORE_PATH, accepted)
  console.log('Update accepted problems')
}

function getAccepted() {
  updateAccepted()
  return readJSONSync(ACCEPTED_STORE_PATH)
}

function getProblemDetail(problem, callback) {
  requestProblem(problem.stat.question__title_slug, function(error, res, body) {
    if (error) {
      throw new Error(error)
    }

    callback(body.data.question)
  })
}

module.exports = {
  getProblem,
  getProblems,
  getAllProblems,
  getAccepted,
  updateAccepted,
  getProblemDetail,
}
