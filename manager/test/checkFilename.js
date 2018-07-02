const { readdirSync } = require('fs')

const { PROBLEMS_DIR_PATH } = require('../common')
const { getAllProblems } = require('../store')

function getProblemId(filename) {
  return parseInt(filename.match(/(\d*)-.*/)[1], 10)
}

function check() {
  const files = readdirSync(PROBLEMS_DIR_PATH)
  const problems = getAllProblems()

  for (let file of files) {
    const id = getProblemId(file)
    const problem = problems.find(p => p.stat.frontend_question_id === id)


    if (file !== problem.filename) {
      console.log(file)
      console.log(problem.filename)
    }
  }
}

check()