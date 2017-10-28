const CREATE_TABLE = 'CREATE TABLE IF NOT EXISTS problems(' +
      'id INT PRIMARY KEY,' +
      'title VARCHAR(128),' +
      'locked BOOLEAN,' +
      'acceptance TINYINT,' +
      'difficulty ENUM("Easy", "Medium", "Hard"),' +
      'accepted BOOLEAN,' +
      'solution BOOLEAN' +
      ') DEFAULT CHARACTER SET utf8'

const INIT_TABLE = 'INSERT INTO problems SET ?'

class Table {
  constructor(name, connection) {
    this.name = name
    this.exec = (...args) => connection.query(...args)
  }

  create() {
    return new Promise((resolve, reject) => {
      this.exec(CREATE_TABLE, function(error, results) {
        if (error) {
          console.log(
            'problems table isn not exists, and create this table failed.'
          )
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
      this.exec('DROP TABLE PROBLEMS', function(error, results) {
        if (error) reject(error)
        resolve(results)
      })
    })
  }

  async load(values) {
    for (let value of values) {
      await this.insert(value)
    }
  }

  insert(value) {
    return new Promise((resolve, reject) => {
      this.exec(INIT_TABLE, value, function(error, results) {
        if (error) reject(error)
        resolve(results)
      })
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
