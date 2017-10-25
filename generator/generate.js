const request = require('request')
const cheerio = require('cheerio')
const fs = require('fs')
const process = require('process')
const path = require('path')

const NEW_LINE_ = '{{p}}'

// TODO request editor content

function main() {
  if (process.argv[2]) {
    generate(process.argv[2])
  } else {
    console.log('Please input problem\'s number.')
  }
}

main()

function generate(number) {
  const problems = JSON.parse(
    fs.readFileSync(path.join(__dirname, 'problems.all.json'))
  )

  const problem = problems[number]

  if (!problem) {
    console.log('Generate fails!')
    console.log('Do not have this problem.')
    return
  }

  if (problem.locked) {
    console.log('Generate fails!')
    console.log('This problem is LOCKED!')
    return
  }

  const title = problem.title
  problem.lowTitle = problem.title.split(' ').join('-').toLowerCase()
  problem.filename = number + '-' + problem.lowTitle + '.js'

  if (fs.existsSync(path.join(__dirname, '../', problem.filename))) {
    console.log('Generate fails!')
    console.log('File: <' + problem.filename + '> already exists.')
    return
  }

  problem.number = number
  requestProblem(problem)
}

function requestProblem(problem) {
  const url = 'https://leetcode.com/problems/' +
        problem.lowTitle + '/description/'

  console.log('start to connect ' + url)

  const cacheDir = path.join(__dirname, 'cache')
  const cachePath = path.join(cacheDir, problem.title + '.html')

  if (fs.existsSync(cachePath)) {
    handleBody(fs.readFileSync(cachePath), problem)
  }

  request(url, function(err, res, body) {
    if (err) {
      console.log(err)
      return
    }

    console.log('connect successed and start to parse')

    if (!fs.existsSync(cacheDir)) fs.mkdir(cacheDir)
    fs.writeFileSync(cachePath, body, 'utf8')
    handleBody(body, problem)
  })
}

function handleBody(body, problem) {
  const $ = cheerio.load(body)
  const descNode = $('.question-description')
  descNode.children('p').each(function() {
    const el = $(this)
    el.text(el.text() + ' ' + NEW_LINE_ +'\n')
  })

  const content = descNode.text()
  const description = content.split('\n').reduce(lineToBlock, '')
        .replace(/\n\n\n/g, '\n\n')
  const header = '// ' + problem.number + '. ' + problem.title + '\n' +
        '// ' + problem.difficulty + ' ' + problem.acceptance +
        '% locked:' + problem.locked + '\n\n'

  fs.writeFileSync(
    path.join(__dirname, '../', problem.filename),
    header + description,
    'utf8'
  )

  console.log('Generate File: <' + problem.filename + '>.')
}

function lineToBlock(string, value) {
  if (value === '' || value === NEW_LINE_) return string

  const LINE_MAX_LENGTH = 80

  let words = value.split(' ')
  words = words.reduce(function(obj, word) {
    if (word !== '') {
      const gLen = obj.groups.length

      if (word === NEW_LINE_) {
        if (gLen !== 0) {
          obj.groups[gLen - 1] += '\n'
        } else {
          obj.groups[0] = '\n'
        }
      } else {
        const wLen = word.length
        if (obj.sum + wLen > LINE_MAX_LENGTH) {
          obj.groups[gLen] = '// ' + word
          obj.sum = wLen + 3
        } else {
          obj.groups[gLen - 1] += ' ' + word
          obj.sum += wLen + 1
        }
      }
    }
    return obj
  }, { groups: [], sum: LINE_MAX_LENGTH })

  words = words.groups.join('\n')

  return string + words + '\n'
}
