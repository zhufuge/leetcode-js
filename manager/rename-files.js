const fs = require('fs')
const path = require('path')

const DIR_PATH = path.join(__dirname, '..', 'problems')
const files = fs.readdirSync(DIR_PATH).filter((f) => path.extname(f) === '.js')

files.forEach((f) => {
  const basename = path.basename(f, '.js')
  const [,number, title] = basename.match(/(\d*)-(.*)/)
  const name = number.padStart(3, '0') + '-' + title + '.js'
  fs.renameSync(path.join(DIR_PATH, f), path.join(DIR_PATH, name))
})
