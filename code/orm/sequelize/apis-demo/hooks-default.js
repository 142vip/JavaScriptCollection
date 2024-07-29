const { Sequelize } = require('sequelize')

const sequelize = new Sequelize({
  // ... 连接参数
  // 注意这里的define参数，用例指定默认钩子
  define: {
    hooks: {
      beforeCreate() {
      },
    },
  },
})
const User = sequelize.define('User', {})
const Space = sequelize.define('Space', {}, {
  hooks: {
    beforeCreate() {
    },
  },
})
// 运行默认钩子函数
await User.create({})
// 运行空间表实例自己的钩子函数，默认钩子被覆盖
await Space.create({})
