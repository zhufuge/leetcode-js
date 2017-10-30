const mysql = require('mysql')

const CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS problems(' +
      'id INT PRIMARY KEY,' +
      'title VARCHAR(128),' +
      'locked BOOLEAN,' +
      'acceptance TINYINT,' +
      'difficulty ENUM("Easy", "Medium", "Hard"),' +
      'accepted BOOLEAN,' +
      'solution BOOLEAN' +
      ') DEFAULT CHARACTER SET utf8'

const default_callback = (resolve, reject) => function(error, results) {
  if (error) reject(error)
  resolve(results)
}

class Table {
  constructor(name, connection) {
    this.name = name
    this.exec = (...args) => connection.query(...args)
  }

  create() {
    return new Promise((resolve, reject) => {
      this.exec(CREATE_TABLE, function(error, results) {
        if (error) {
          console.log('problems table isn not exists, and create this table failed.')
          reject(error)
        }
        resolve(results)
      })
    })
  }

  isEmpty() {
    return new Promise((resolve, reject) => {
      this.exec(
        'SELECT COUNT(id) AS length FROM problems',
        function(error, results) {
          if (error) reject(error)
          return resolve(results[0].length === 0)
        })
    })
  }

  drop() {
    return new Promise((resolve, reject) => {
      this.exec('DROP TABLE problems', default_callback(resolve, reject))
    })
  }

  async load(values) {
    for (let value of values) {
      await this.insert(value)
    }
  }

  insert(value) {
    return new Promise((resolve, reject) => {
      this.exec(
        'INSERT INTO problems SET ?',
        value,
        default_callback(resolve, reject)
      )
    })
  }

  update(values) {
    return new Promise((resolve, reject) => {
      this.exec(
        'UPDATE problems SET ? WHERE ?',
        values,
        default_callback(resolve, reject)
      )
    })
  }

  selectBy(id) {
    return new Promise((resolve, reject) => {
      this.exec(
        'SELECT * from problems where id = ?',
        id,
        default_callback(resolve, reject)
      )
    })
  }
}

class ORM {
  constructor(connection) {
    this.connection = connection
  }

  table(name) {
    return new Table(name, this.connection)
  }
}

module.exports = function (connection) {
  return new ORM(connection)
}
