/**
 * 数据库连接
 */
const { Sequelize } = require('sequelize')

// 方法 1: 传递一个连接 URI
const sequelize1 = new Sequelize('sqlite::memory:')
console.log(sequelize1)

const sequelize2 = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')
console.log(sequelize2)

// 方法 2: 分别传递参数 (sqlite)
const sequelize3 = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite',
})
console.log(sequelize3)

// 方法 2: 分别传递参数 (其它数据库)
const sequelize4 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql',
})

console.log(sequelize4)
