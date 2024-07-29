/**
 * 连接测试
 */
const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

try {
  await sequelize.authenticate()
  console.log('连接成功')
}
catch (error) {
  console.error('连接失败:', error)
}
