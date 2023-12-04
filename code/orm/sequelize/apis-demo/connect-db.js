/**
 * 数据库连接
 */
const { Sequelize } = require('sequelize')

// 方法 1: 传递一个连接 URI
const sequelize1 = new Sequelize('sqlite::memory:')
const sequelize2 = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

// 方法 2: 分别传递参数 (sqlite)
const sequelize3 = new Sequelize({
  dialect: 'sqlite',
  storage: 'path/to/database.sqlite'
})

// 方法 2: 分别传递参数 (其它数据库)
const sequelize4 = new Sequelize('database', 'username', 'password', {
  host: 'localhost',
  dialect: 'mysql'
})
