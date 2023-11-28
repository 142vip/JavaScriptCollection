const { Model, DataTypes, Sequelize: sequelize } = require('sequelize')

// BooK实例
class Book extends Model {
}

// Book实例类初始化
Book.init({
  title: DataTypes.STRING
}, {
  sequelize
})

/**
 * 为Book实例移除afterCreate类型的userName的钩子函数
 * - 按照名称
 */
Book.addHook('afterCreate', 'username', (book, options) => {
  // ...
})
Book.removeHook('afterCreate', 'username')


/**
 * 为Book实例移除afterCreate类型上所有的钩子函数
 */
Book.removeHook('afterCreate')
