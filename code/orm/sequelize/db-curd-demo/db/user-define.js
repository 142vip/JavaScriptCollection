const { Sequelize } = require('sequelize')
const { UserModel } = require('./user')

const sequelize = new Sequelize('sqlite::memory:')

const User = sequelize.define('User', UserModel)

// `sequelize.define` 会返回模型
console.log(User === sequelize.models.User) // true
