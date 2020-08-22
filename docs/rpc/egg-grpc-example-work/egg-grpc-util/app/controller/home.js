/*
 * @Description:
 * @Version: Beata1.0
 * @Autor: 【B站&公众号】Rong姐姐好可爱
 * @Date: 2020-08-15 20:21:54
 * @LastEditors: 【B站&公众号】Rong姐姐好可爱
 * @LastEditTime: 2020-08-15 20:33:02
 */
'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {

    const { ctx } = this;
    console.log(ctx.app);
    const result = await ctx.app.loginLogin.login({ userName: '123', password: '123' });
    console.log(result);
    ctx.body = result;
  }
}

module.exports = HomeController;
