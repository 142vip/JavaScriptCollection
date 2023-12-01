const { Sequelize, DataTypes, Model } = require('sequelize')
const { UserModel } = require('./user')
const sequelize = new Sequelize('sqlite::memory')


/**
 * 继承Model类型，使用使用init方法注册模型
 */
class User extends Model {

}

/**
 * 初始化模型
 */
User.init(UserModel, {
  // 连接实例
  sequelize,
  // 指定模型绑在sequelize对象上的名称
  modelName: 'User'
})

// 定义的模型就是User类本身
console.log(User === sequelize.models.User) // true

