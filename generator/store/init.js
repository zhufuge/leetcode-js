const fs = require('fs'),
      path = require('path'),
      readFile = require('util').promisify(fs.readFile)

const _ = require('lodash')

const orm = require('./orm')

module.exports = async function(connection) {
  const table = orm(connection).table('problems')

  await table.drop()
  await table.create()
  const isEmpty = await table.isEmpty()
  if (isEmpty) {
    console.log('Database is empty. Start to load data...')
    const data = await readFile(
      path.join(__dirname, '..', 'problems.all.json'),
      'utf8'
    )

    await table.load(_.map(JSON.parse(data), function(value, key) {
      value.id = parseInt(key)
      value.accepted = false
      value.solution = false
      return value
    }))

    console.log('Load successed.')
  }
}
