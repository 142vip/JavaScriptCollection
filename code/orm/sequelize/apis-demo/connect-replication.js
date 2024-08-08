/**
 * 配置读写分离
 */
const { Sequelize } = require('sequelize')

/**
 * 创建连接实例
 */
const sequelize = new Sequelize('database', null, null, {
  dialect: 'mysql',
  port: 3306,
  // 配置读写分离
  replication: {
    read: [
      { host: '192.168.125.100', username: 'root', password: 123456 },
      { host: '192.168.125.101', username: 'root', password: 123456 },
    ],
    write: { host: '192.168.125.101', username: 'root', password: 123456 },
  },
  // 配置连接池
  pool: {
    max: 20,
    idle: 30000,
  },
})

console.log(sequelize)
