const { Sequelize, DataTypes } = require('sequelize')

const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

/**
 * 定义用户表模型
 */
const User = sequelize.define('user', {
  name: DataTypes.TEXT,
  favoriteColor: {
    type: DataTypes.TEXT,
    // 默认值
    defaultValue: 'green',
  },
  age: DataTypes.INTEGER,
  cash: DataTypes.INTEGER,
})

console.log('User对象：', User)

/**
 * 将模型结构同步到数据库表中
 * - 强制同步
 */
sequelize.sync({ force: true })
