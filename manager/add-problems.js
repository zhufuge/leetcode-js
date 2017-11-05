const process = require('process')

const { insert } = require('./store')

function addProblem(id, title, locked, acceptance, difficulty) {
  const difficulties = ['Easy', 'Medium', 'Hard']
  const value = {
    id: parseInt(id),
    title,
    locked: !!parseInt(locked),
    acceptance: parseInt(acceptance),
    difficulty: difficulties[parseInt(difficulty)],
  }
  value.accepted = false
  value.solution = false
  insert(value)
}

(function main() {
  if (process.argv.length > 2) {
    const args = process.argv.slice(2)
    if (args[0] === '-h') {
      console.log('id\tNumber')
      console.log('title\tString')
      console.log('locked\tNumber(0:false, 1:true)')
      console.log('acceptance\tNumber')
      console.log('difficulty\tNumber(0:Easy, 1:Medium, 2:Hard)')
      console.log('example:')
      console.log('  0 "Two Sum" 0 35 0')
    } else {
      addProblem(...args)
    }
  } else {
    console.log('Please input problem info.')
  }
})()
