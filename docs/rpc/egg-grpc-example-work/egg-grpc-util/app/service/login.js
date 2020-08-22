/*
 * @Description:
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-08-15 20:24:21
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-15 20:24:27
 */
'use strict';
const Service = require('egg').Service;
class Login extends Service {
  async login({ userName, password }) {
    if (userName === 'abc' && password === 'abc') {
      return { code: 1, msg: 'login' };
    }
    return { code: 0, msg: 'login' };
  }
  async signUp({ userName, password }) {
    if (userName === 'abc' && password === 'abc') {
      return { code: 1, msg: 'signUp' };
    }
    return { code: 0, msg: 'signUp' };
  }
}
module.exports = Login;
