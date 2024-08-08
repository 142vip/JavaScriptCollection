const { Model, Sequelize, DataTypes } = require('sequelize')

// 创建连接实例
const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

// 实例类继承sequelize提供的Model类
class User extends Model {
}

/**
 * 方法一：调用init()方法初始化
 */
User.init({
  username: DataTypes.STRING,
  mood: {
    type: DataTypes.ENUM,
    values: ['happy', 'sad'],
  },
}, {
  hooks: {
    beforeValidate: (user, _options) => {
      user.mood = 'happy'
    },
    afterValidate: (user, _options) => {
      user.username = 'Toni'
    },
  },
  sequelize,
})

// 方法二：使用addHook()方法
User.addHook('beforeValidate', (user, _options) => {
  user.mood = 'happy'
})

User.addHook('afterValidate', 'mood', (user, options) => {
  console.log(user, options)
  return Promise.reject(new Error('参数错误'))
})

/**
 * 方法三：直接使用绑在实例类上的钩子方法
 */
User.beforeCreate(async (user, _options) => {
  user.password = '123456'
})
User.afterValidate('userName', (user, _options) => {
  user.username = '142vip.cn'
})
