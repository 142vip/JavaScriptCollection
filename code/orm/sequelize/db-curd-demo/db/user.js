const { DataTypes } = require('sequelize')

export const UserModel = {
  /**
   * 名称
   */
  name: DataTypes.STRING,

  /**
   * 年龄
   */
  age: DataTypes.INTEGER,
  /**
   * 性别
   */
  gender: {
    type: DataTypes.BOOLEAN,
    // 默认值
    defaultValue: 1
  },
  /**
   * 出生日期
   */
  birth: {
    type: DataTypes.DATE
  }
}
