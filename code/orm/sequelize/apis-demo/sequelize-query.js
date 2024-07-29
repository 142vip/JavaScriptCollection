const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

const sql = 'select * from user'
const result = sequelize.query(sql)

console.log(result)
