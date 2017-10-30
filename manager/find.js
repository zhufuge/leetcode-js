const fs = require('fs'),
      path = require('path')

const { updateAll } = require('./store')

const dirPath = path.join(__dirname, '../')
const files = fs.readdirSync(dirPath)
      .filter((filename) => path.extname(filename) === '.js')

const getNumber = (t) => t.match(/(\d*)-.*/)[1]
const accepted = [], solution = []
files.forEach((filename) => {
  const filePath = path.join(dirPath, filename)
  const content = fs.readFileSync(filePath, 'utf8')
  if (content.includes('// Submission Result: Accepted')) {
    accepted.push(parseInt(getNumber(filename)))
  }
  if (content.includes('// Solution:')) {
    solution.push(parseInt(getNumber(filename)))
  }
})


const data = accepted.map(function(id) {
  return [
    { accepted: true },
    { id: id }
  ]
}).concat(solution.map(function(id) {
  return [
    { solution: true },
    { id: id }
  ]
}))

updateAll(data)

