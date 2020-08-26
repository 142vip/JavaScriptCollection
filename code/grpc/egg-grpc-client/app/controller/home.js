'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx, app } = this;
    // console.log(app.grpc);
    app.grpc.test({
      From: '1213',
      To: '232334',
    }, (error, data) => {
      console.log(error);
      console.log(data);
    });
    // const result = await app.grpc.test({
    //   userName: '1213',
    //   password: '232334',
    // });
    // console.log(result);
    ctx.body = 'hi, egg';
  }
}

module.exports = HomeController;
