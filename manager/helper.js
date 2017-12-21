const path = require('path')
const { selectBy } = require('./store')

async function getProblemFromDB(number) {
  const problem = (await selectBy(parseInt(number)))[0]

  if (!problem) exit('Do not have this problem.')
  if (problem.locked) exit('This problem is LOCKED!')

  problem.lowTitle = toLowTitle(problem.title)

  const filename = (number+'').padStart(3, '0') + '-' + problem.lowTitle + '.js',
        filePath = path.join(__dirname, '..', 'problems', filename)

  problem.filename = filename
  problem.filePath = filePath
  return problem
}

function exit(...args) {
  console.log('Generate fails!')
  throw new Error(...args)
}

function toLowTitle(title) {
  return title
    .split(' ')
    .filter(w => w !== '' && w !== '-')
    .join('-')
    .replace(/[^A-Za-z0-9-]/g, '')
    .toLowerCase()
}

module.exports = {
  getProblemFromDB,
  exit,
  toLowTitle,
}
