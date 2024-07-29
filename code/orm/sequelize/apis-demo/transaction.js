const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

const t = await sequelize.transaction()

console.log('开启的事务对象：', t)
