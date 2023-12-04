const { Sequelize } = require('sequelize')


const sequelize = new Sequelize({
  // ... 连接配置
  // 连接池配置
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
})
