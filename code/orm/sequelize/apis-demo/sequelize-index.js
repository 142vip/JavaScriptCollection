const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('postgres://user:pass@142vip.cn:5432/142vip')

/**
 * 定义用户表对应的模型
 */
const User = sequelize.define('User', {
  // ... 一些配置
}, {
  indexes: [
    // 创建唯一索引，unique用来判断是否为唯一索引
    {
      unique: true,
      fields: ['name'],
    },

    // 使用 jsonb_path_ops 运算符对data字段创建 gin 索引
    {
      fields: ['data'],
      using: 'gin',
      operator: 'jsonb_path_ops',
    },

    // name字段配置索引名称，默认的索引名是: 表明名_列名
    // 创建联合索引，涉及多个字段
    {
      name: 'public_by_author',
      fields: ['author', 'status'],
      where: {
        status: 'public',
      },
    },

    // 对于排序字段创建BTree索引
    {
      name: 'title_index',
      using: 'BTREE',
      fields: ['author', {
        name: 'title',
        collate: 'en_US',
        order: 'DESC',
        length: 5,
      }],
    },
  ],
})

module.exports = User
