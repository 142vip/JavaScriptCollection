const { Sequelize, DataTypes, Op } = require('sequelize')

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
})

const users = User.findAll()

const user2 = User.findAll({
  attributes: ['name'],
})

const user3 = User.findAll({
  attributes: [
    'name',
    [sequelize.fn('count', sequelize.col('age')), 'countAge'],
  ],
})

const user4 = User.findAll({
  attributes: {
    include: ['name'],
  },
})

const user5 = User.findAll({
  attributes: {
    include: [sequelize.fn('count', sequelize.col('age')), 'countAge'],
  },
})

// 排除name数据列
const user6 = User.findAll({
  attributes: {
    exclude: ['name'],
  },
})

const user7 = User.findAll({
  where: {
    name: '142vip.cn',
  },
})

const user8 = User.findAll({
  where: {
    name: {
      [Op.eq]: '142vip.cn',
    },
  },
})

const user9 = User.findOrCreate({
  where: {
    name: '142vip.cn',
  },
})

const user10 = User.findAndCountAll({})

console.log(users)
console.log(user2)
console.log(user3)
console.log(user4)
console.log(user5)
console.log(user6)
console.log(user7)
console.log(user8)
console.log(user9)
console.log(user10)
