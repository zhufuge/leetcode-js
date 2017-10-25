const fs = require('fs'),
      path = require('path')

const CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS problems(' +
      'id INT PRIMARY KEY,' +
      'title VARCHAR(64),' +
      'locked BOOLEAN,' +
      'acceptance TINYINT,' +
      'difficulty ENUM("Easy", "Medium", "Hard"),' +
      'accepted BOOLEAN,' +
      'solution BOOLEAN' +
      ') DEFAULT CHARACTER SET utf8'

function checkEmpty(connection) {
  return new Promise((resolve, reject) => {
    connection.query('select * from problems', function(err, results) {
      if (err) reject(err)
      resolve(results)
    })
  })
}

module.exports = function(connection) {
  connection.query(CREATE_TABLE, function(err, results) {
    if (err) {
      console.log('problems table is not exists, and create this table failed.')
      console.log(err)
    }

    checkEmpty(connection)
      .then((results) => {
        if (results.length === 0) {
          console.log('empty')
          // const problems = JSON.parse(
          //   fs.readFile(path.join(__dirname, '..', 'problems.all.json'))
          // )
          // return insertData(connection)
        }
      })
      .catch(err => console.log(err))
      .then(() => {
        connection.end()
      })
  })
}
