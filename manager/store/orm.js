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
    const name = this.name
    return new Promise((resolve, reject) => {
      this.exec(CREATE_TABLE, function(error, results) {
        if (error) {
          console.log('Table ' + name +
                      ' isn not exists, and create this table failed.')
          reject(error)
        }
        resolve(results)
      })
    })
  }

  isEmpty() {
    const sql = 'SELECT COUNT(id) AS length FROM ' + this.name
    return new Promise((resolve, reject) => {
      this.exec(sql, function(error, results) {
        if (error) reject(error)
        return resolve(results[0].length === 0)
      })
    })
  }

  drop() {
    const sql = 'DROP TABLE ' + this.name
    return new Promise((resolve, reject) => {
      this.exec(sql, default_callback(resolve, reject))
    })
  }

  async load(values) {
    for (let value of values) {
      await this.insert(value)
    }
  }

  insert(value) {
    const sql = 'INSERT INTO ' + this.name + ' SET ?'
    return new Promise((resolve, reject) => {
      this.exec(sql, value, default_callback(resolve, reject))
    })
  }

  update(values) {
    const sql = 'UPDATE ' + this.name + ' SET ? WHERE ?'
    return new Promise((resolve, reject) => {
      this.exec(sql, values, default_callback(resolve, reject))
    })
  }

  selectBy(id) {
    const sql = 'SELECT * from ' + this.name + ' where id = ?'
    return new Promise((resolve, reject) => {
      this.exec(sql, id, default_callback(resolve, reject))
    })
  }

  select(attrs, where) {
    function join(obj) {
      const items = []
      for (let attr in obj) {
        items.push('`' + attr + '` = ' + obj[attr].toString())
      }
      return { toSqlString: function() { return items.join(' and ') } }
    }

    const sql = 'SELECT ' + (attrs.length ? '??' : '*') +
          ' FROM ' + this.name + (where ? ' WHERE ?' : '')
    const values = attrs.length ? [attrs, join(where)] : [join(where)]
    return new Promise((resolve, reject) => {
      this.exec(sql, values, default_callback(resolve, reject))
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
